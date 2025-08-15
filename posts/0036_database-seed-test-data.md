---
id: 36
title: "データベースのテストデータ生成 - npm run seed:testの仕組みと実装"
tags: ["Database", "Node.js", "PostgreSQL", "seed", "test-data", "TypeScript"]
create: "2025-08-15 10:59"
---

開発中のWebアプリケーションで「データが表示されない！」という問題に遭遇したことはありませんか？今回は、教材共有プラットフォーム「Drill Layer」の開発中に発生した**テストデータ消失問題**と、その解決方法である`npm run seed:test`コマンドの仕組みについて詳しく解説します。

## 💡 初心者向け解説

### seed（シード）とは？

**簡単に言うと**: データベースに初期データやテストデータを投入する処理のことです。

```
農業で種（seed）をまくように、
データベースに基礎となるデータを「まく」処理
```

### なぜ必要？

```
実際の開発現場でよくある問題：
・「昨日まで表示されていたデータがない！」
・「新しい機能をテストしたいけどデータがない」
・「チームメンバーと同じデータで開発したい」

→ seedコマンドで一発解決！
```

## 📚 目次

- [問題の発生とシードの必要性](#問題の発生とシードの必要性)
- [npm run seed:testの仕組み](#npm-run-seedtestの仕組み)
- [実装の詳細とコード解説](#実装の詳細とコード解説)
- [PostgreSQL配列の扱い方](#postgresql配列の扱い方)
- [トラブルシューティング](#トラブルシューティング)
- [ベストプラクティス](#ベストプラクティス)
- [まとめ](#まとめ)

## 問題の発生とシードの必要性

### 発生した問題

開発中、以下のような状況に遭遇しました：

```bash
# APIからデータを取得してみると...
$ curl -s http://localhost:3000/api/materials | jq '. | length'
3  # あれ？10件あったはずのテストデータが3件しかない！
```

ユーザーから「さきほどまでは表示されていたが今は表示されていない」という報告があり、調査したところ、テストデータが何らかの理由で削除されていたことが判明しました。

### シードが必要な理由

1. **開発環境の統一**: チーム全員が同じテストデータで開発できる
2. **動作確認の効率化**: UIの見た目や機能を素早く確認できる
3. **テストの再現性**: 同じ条件でテストを繰り返し実行できる
4. **デモ環境の構築**: クライアントへのプレゼン用データを簡単に用意

## npm run seed:testの仕組み

### 全体の流れ

```mermaid
graph TD
    A[npm run seed:test] --> B[pnpm --filter @drill-layer/backend seed:test]
    B --> C[ts-node runTestSeeds.ts]
    C --> D[データベース接続確認]
    D --> E[既存テストデータ削除]
    E --> F[新規テストデータ挿入]
    F --> G[完了メッセージ表示]
```

### 1. package.jsonの設定

```json
{
  "scripts": {
    "seed:test": "pnpm --filter @drill-layer/backend seed:test"
  }
}
```

ルートディレクトリの`package.json`に定義されたコマンドは、monorepo構成でバックエンドパッケージのスクリプトを実行します。

### 2. バックエンド側のスクリプト

```json
// packages/backend/package.json
{
  "scripts": {
    "seed:test": "ts-node src/infrastructure/db/seeds/runTestSeeds.ts"
  }
}
```

TypeScriptで書かれたシードスクリプトを直接実行します。

## 実装の詳細とコード解説

### データベース接続情報の管理

データベースの接続情報（ホスト名、ユーザー名、パスワードなど）をコードに直接書き込むのはセキュリティ上危険です。`.env`ファイルを使って管理し、`dotenv`ライブラリで読み込むのが一般的です。

```bash
# .env ファイルの例
DATABASE_URL="postgresql://user:password@localhost:5432/drill_layer_dev"
```

```typescript
// connection.ts
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config(); // .envファイルを読み込む

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
```

### メインのシード実行ファイル

```typescript
// runTestSeeds.ts
import seedTestMaterials from './seedTestMaterials';
import { pool } from '../connection';

const runTestSeeds = async () => {
  try {
    console.log('🚀 テストシードの実行を開始します...');
    
    // データベース接続テスト
    await pool.query('SELECT NOW()');
    console.log('✅ データベースに接続しました');

    // テスト教材データを作成
    await seedTestMaterials();

    console.log('🎉 すべてのテストシードが完了しました！');
    
  } catch (error) {
    console.error('❌ テストシード実行中にエラーが発生しました:', error);
    process.exit(1);
  } finally {
    await pool.end();  // 接続プールを閉じる
  }
};

runTestSeeds();
```

### テストデータの定義と挿入

```typescript
// seedTestMaterials.ts
const testMaterials = [
  {
    title: 'JavaScript基礎入門',
    description: 'JavaScriptの基本的な文法と概念について解説した教材です。',
    file_key: 'test-materials/javascript-basics.pdf',
    file_type: 'pdf',
    file_size: 2048576,  // 2MB
    tags: ['JavaScript', 'プログラミング', '初心者'],
    likes: 15,
    downloads: 42
  },
  {
    title: 'React Component 設計パターン',
    description: 'React開発における再利用可能なコンポーネント設計手法を解説。',
    file_key: 'test-materials/react-components.pdf',
    file_type: 'pdf',
    file_size: 3145728,  // 3MB
    tags: ['React', 'TypeScript', 'コンポーネント設計'],
    likes: 28,
    downloads: 67
  },
  // ... 他の教材データ
];

const seedTestMaterials = async () => {
  console.log('🌱 テストデータの作成を開始します...');
  
  // 既存のテストデータを削除（冪等性の確保）
  await pool.query(`
    DELETE FROM materials 
    WHERE file_key LIKE 'test-materials/%'
  `);
  
  let createdCount = 0;
  
  for (const material of testMaterials) {
    const result = await pool.query(
      `INSERT INTO materials (
        title, description, file_key, file_type, 
        file_size, tags, likes, downloads, 
        created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6::text[], $7, $8, NOW(), NOW())
      RETURNING id`,
      [
        material.title,
        material.description,
        material.file_key,
        material.file_type,
        material.file_size,
        material.tags,  // PostgreSQL配列として直接渡す
        material.likes,
        material.downloads
      ]
    );
    
    console.log(`✅ 教材を登録しました: ${material.title} (ID: ${result.rows[0].id})`);
    createdCount++;
  }
  
  console.log(`📊 合計 ${createdCount} 件の教材データを作成しました`);
};
```

## PostgreSQL配列の扱い方

### 重要なポイント：PostgreSQL配列の型キャスト

```typescript
// ❌ 間違い：JSON文字列として渡す
JSON.stringify(material.tags)

// ✅ 正解：配列として直接渡す + 型キャスト
material.tags  // $6::text[] でPostgreSQL配列にキャスト
```

### 配列操作の詳細

```sql
-- PostgreSQL側でのテーブル定義
CREATE TABLE materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  tags TEXT[] NOT NULL,  -- 配列型
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 配列での検索例
SELECT * FROM materials WHERE 'JavaScript' = ANY(tags);
SELECT * FROM materials WHERE tags && ARRAY['React', 'TypeScript'];
```

### Node.js側での配列操作

```typescript
// 配列データの安全な挿入
const insertMaterial = async (materialData: any) => {
  // 配列の検証
  if (!Array.isArray(materialData.tags)) {
    throw new Error('tagsは配列である必要があります');
  }
  
  // 配列要素の検証
  const validatedTags = materialData.tags
    .filter(tag => typeof tag === 'string' && tag.trim().length > 0)
    .slice(0, 10); // 最大10個まで
  
  const result = await pool.query(
    'INSERT INTO materials (title, tags) VALUES ($1, $2::text[]) RETURNING id',
    [materialData.title, validatedTags]
  );
  
  return result.rows[0];
};
```

## トラブルシューティング

### よくある問題と解決方法

#### 1. データが表示されない

**診断コマンド**:
```bash
# データ件数を確認
curl -s http://localhost:3000/api/materials | jq '. | length'

# 直接データベースを確認
psql -d drill_layer_dev -c "SELECT COUNT(*) FROM materials;"
```

**解決法**:
```bash
# 0件の場合はシードを実行
npm run seed:test
```

#### 2. "Cannot read properties of null" エラー

**原因**: フロントエンドでデータが空の状態を想定していない

**解決法**:
```javascript
// ❌ 危険なコード
const materials = data.materials.map(material => ...)

// ✅ 安全なコード
const [materials, setMaterials] = useState<Material[]>([]);
const materialsList = data?.materials || [];
```

#### 3. PostgreSQL配列エラー

**エラーメッセージ**:
```
error: malformed array literal
```

**解決法**:
```typescript
// ❌ 間違い
material.tags = JSON.stringify(['tag1', 'tag2']);

// ✅ 正解
material.tags = ['tag1', 'tag2'];  // 配列のまま渡す
// SQL: $1::text[] で型キャスト
```

#### 4. 接続プールのリークエラー

**解決法**:
```typescript
const runTestSeeds = async () => {
  try {
    // シード処理
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await pool.end();  // 必ず接続を閉じる
  }
};
```

## ベストプラクティス

### 1. 冪等性（Idempotency）の確保

シードスクリプトは何度実行しても同じ結果になるよう設計：

```sql
-- 既存のテストデータを削除してから新規挿入
DELETE FROM materials WHERE file_key LIKE 'test-materials/%'
```

### 2. 環境ごとのシード分離

```javascript
// 開発環境用
npm run seed:dev

// テスト環境用
npm run seed:test

// デモ環境用
npm run seed:demo
```

### 3. データの現実性

```typescript
// 現実的なテストデータを作成
const testMaterials = [
  {
    title: 'JavaScript基礎入門',
    // 実際にありそうなファイルサイズ
    file_size: 2048576,  // 2MB
    // 実際にありそうなタグ
    tags: ['JavaScript', 'プログラミング', '初心者'],
    // 現実的な数値
    likes: Math.floor(Math.random() * 50) + 1,
    downloads: Math.floor(Math.random() * 100) + 1
  }
];
```

**テストデータ生成ライブラリの活用**:
[Faker.js](https://fakerjs.dev/)のようなライブラリを導入すると、名前、住所、文章、日付など、より現実に近い多様なテストデータをプログラムで簡単に生成でき、テストの質を向上させることができます。

```typescript
import { faker } from '@faker-js/faker';

const generateTestMaterials = (count: number) => {
  return Array.from({ length: count }, () => ({
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    file_size: faker.number.int({ min: 1024, max: 50 * 1024 * 1024 }),
    likes: faker.number.int({ min: 0, max: 100 }),
    downloads: faker.number.int({ min: 0, max: 1000 })
  }));
};
```

### 4. エラーハンドリング

```typescript
const seedWithTransaction = async () => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // データ挿入処理
    for (const material of testMaterials) {
      await client.query(insertQuery, values);
    }
    
    await client.query('COMMIT');
    console.log('トランザクション完了');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('エラーによりロールバック:', error);
    throw error;
  } finally {
    client.release();
  }
};
```

### 5. 大量データの効率的な挿入（バルクインサート）

シードするデータが大量にある場合、1件ずつ`INSERT`するよりも、複数のデータをまとめて1回のクエリで挿入する「バルクインサート」が効率的です。

```typescript
// 大量データの効率的な挿入
const seedMaterialsBulk = async () => {
  console.log('🌱 バルクインサートでテストデータを作成中...');
  
  // 既存のテストデータを削除
  await pool.query(`DELETE FROM materials WHERE file_key LIKE 'test-materials/%'`);
  
  // バルクインサート用のクエリを構築
  const placeholders = testMaterials.map((_, index) => {
    const offset = index * 8;
    return `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5}, $${offset + 6}::text[], $${offset + 7}, $${offset + 8}, NOW(), NOW())`;
  }).join(',');
  
  const query = `
    INSERT INTO materials (
      title, description, file_key, file_type, 
      file_size, tags, likes, downloads, 
      created_at, updated_at
    ) VALUES ${placeholders}
    RETURNING id, title
  `;
  
  // パラメータを平坦化
  const params = testMaterials.flatMap(material => [
    material.title,
    material.description,
    material.file_key,
    material.file_type,
    material.file_size,
    material.tags,
    material.likes,
    material.downloads
  ]);
  
  const result = await pool.query(query, params);
  console.log(`📊 バルクインサートで ${result.rows.length} 件のデータを作成しました`);
};
```

**パフォーマンス比較**:
- 1件ずつ挿入: 100件で約2-3秒
- バルクインサート: 100件で約0.1-0.2秒

### 6. 実行結果の例

実際に`npm run seed:test`を実行すると、以下のような出力が得られます：

```bash
$ npm run seed:test

> @drill-layer/backend@1.0.0 seed:test
> ts-node src/infrastructure/db/seeds/runTestSeeds.ts

🚀 テストシードの実行を開始します...
✅ データベースに接続しました
🌱 テストデータの作成を開始します...
✅ 既存のテストデータを削除しました
✅ 教材を登録しました: JavaScript基礎入門 (ID: dfb588c1-584c-4e4c-af74-f0602082dd6e)
✅ 教材を登録しました: React Component 設計パターン (ID: bcb13974-1ad0-44c0-b998-19ded98050d4)
✅ 教材を登録しました: データベース設計の基礎 (ID: 0add4528-b1ad-4771-be09-70d8b6c1b3c0)
✅ 教材を登録しました: Python自動化スクリプト集 (ID: f8a234b7-9c8d-4e5f-b6a1-2345678901ab)
✅ 教材を登録しました: AWS基礎サービス概要 (ID: 2ec83358-f95a-40a7-8708-4e36a85cc477)
🎉 テストデータの作成が完了しました！
📊 合計 10 件の教材データを作成しました
🎉 すべてのテストシードが完了しました！
```

## まとめ

`npm run seed:test`は、開発効率を大幅に向上させる重要なツールです。主なメリットは：

### 🎯 開発効率の向上

1. **即座にテストデータを復元**できる
2. **チーム全体で同じデータ**を使える  
3. **UIの動作確認**が簡単にできる
4. **データベースの状態をリセット**できる

### 🔧 技術的なポイント

- PostgreSQL配列は直接渡して`::text[]`で型キャスト
- 冪等性を保つことで安全に何度でも実行可能
- エラーハンドリングとログ出力で問題を素早く特定
- トランザクションでデータの整合性を保証

### 💡 実践的な活用法

```bash
# 開発開始時
npm run seed:test

# データが消えた時
npm run seed:test

# 新機能テスト時
npm run seed:test

# デモ準備時
npm run seed:demo
```

今回の経験から学んだこと：
- データが消えても慌てずに`seed`コマンドを実行
- PostgreSQL配列は直接渡して型キャストする
- 冪等性を保つことで安全に何度でも実行可能
- エラーハンドリングとログ出力で問題を素早く特定

開発環境でデータが表示されない問題に遭遇したら、まずは`npm run seed:test`を試してみてください。それだけで問題が解決することが多いです！

## 参考リンク

- [PostgreSQL: Arrays](https://www.postgresql.org/docs/current/arrays.html)
- [Node.js: node-postgres](https://node-postgres.com/)
- [TypeScript: ts-node](https://github.com/TypeStrong/ts-node)
- [npm scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Faker.js - テストデータ生成ライブラリ](https://fakerjs.dev/)

---

*この記事は、実際の開発中に発生した問題とその解決過程を基に作成されました。同様の問題に直面している開発者の参考になれば幸いです。*