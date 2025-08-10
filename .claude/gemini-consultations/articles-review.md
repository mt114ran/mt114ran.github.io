---
id: 28
title: "npm基本コマンド完全ガイド：初心者が知るべきnpmの仕組みと実行内容"
tags: ["npm", "Node.js", "JavaScript", "初心者向け", "パッケージ管理"]
create: "2025-08-10 16:45"
---

JavaScriptプロジェクトを開発する際、必ず遭遇するのが`npm`コマンドです。「とりあえず`npm install`を実行して」と言われても、実際に何が起きているのか分からないまま使っている方も多いのではないでしょうか。本記事では、npmの基本コマンドが裏側で何をしているのか、どんなファイルが作成されるのかを詳しく解説します。

## npmとは何か？

npm（Node Package Manager）は、JavaScriptのパッケージ管理ツールです。以下の3つの意味があります：

1. **コマンドラインツール**：`npm`コマンドそのもの
2. **パッケージレジストリ**：npmjs.comで公開されているパッケージのデータベース
3. **パッケージ管理システム**：依存関係の解決とバージョン管理の仕組み

## 重要なファイルの役割

npmを理解するには、まず関連するファイルを知る必要があります。

### package.json
プロジェクトの設定ファイルです。以下の情報が含まれます：

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "プロジェクトの説明",
  "scripts": {
    "start": "node index.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0",
    "axios": "^1.5.0"
  },
  "devDependencies": {
    "webpack": "^5.88.0",
    "jest": "^29.6.0"
  }
}
```

#### 各セクションの意味：
- **name/version**: パッケージの識別情報
- **scripts**: カスタムコマンドの定義
- **dependencies**: 本番環境で必要なパッケージ
- **devDependencies**: 開発時のみ必要なパッケージ

### package-lock.json
依存関係の正確なバージョンを記録するファイルです。

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "packages": {
    "": {
      "name": "my-project",
      "version": "1.0.0",
      "dependencies": {
        "express": "^4.18.0"
      }
    },
    "node_modules/express": {
      "version": "4.18.2",
      "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
      "integrity": "sha512-...",
      "dependencies": {
        "accepts": "~1.3.8",
        "body-parser": "1.20.1"
      }
    }
  }
}
```

**重要な特徴：**
- 正確なバージョンを固定（4.18.2など）
- 依存関係の依存関係も記録
- チーム全員が同じバージョンを使用できる

### node_modules/
実際のパッケージコードが保存されるディレクトリです。

```
node_modules/
├── express/
│   ├── package.json
│   ├── index.js
│   └── lib/
├── axios/
│   ├── package.json
│   ├── dist/
│   └── lib/
└── ... (数百〜数千のパッケージ)
```

## 基本コマンドの詳細解説

### 1. npm init

**目的：** 新しいプロジェクトを初期化

**実行内容：**
```bash
$ npm init
```

**何が起きるか：**
1. 対話形式で質問が表示される
2. package.jsonファイルが作成される

**実際の動作を見てみましょう：**

```bash
# 対話形式での初期化
$ npm init
package name: (my-project) 
version: (1.0.0) 
description: サンプルプロジェクト
entry point: (index.js) 
test command: jest
git repository: 
keywords: 
author: Taro Yamada
license: (ISC) MIT

# 結果：package.jsonが作成される
```

**便利なオプション：**
```bash
# 質問をスキップしてデフォルト値で作成
$ npm init -y

# ESモジュール対応のプロジェクトとして初期化
$ npm init -y && npm pkg set type="module"
```

### 2. npm install

**目的：** 依存パッケージをインストール

**パターン1：すべての依存関係をインストール**
```bash
$ npm install
# または省略形
$ npm i
```

**何が起きるか：**
1. package.jsonの`dependencies`と`devDependencies`を読み取る
2. package-lock.jsonがあればそのバージョンを使用
3. node_modulesディレクトリにパッケージをダウンロード
4. package-lock.jsonを作成/更新

**実行過程の詳細：**
```bash
$ npm install

# 1. パッケージ情報の取得
# → npmレジストリにアクセス

# 2. 依存関係の解決
# → 各パッケージが必要とするパッケージも計算

# 3. ダウンロード
added 523 packages, and audited 524 packages in 15s

# 4. 脆弱性チェック
found 0 vulnerabilities
```

**パターン2：特定のパッケージをインストール**
```bash
# 本番用の依存関係として追加
$ npm install express
# → package.jsonのdependenciesに追加
# → node_modules/express/にインストール

# 開発用の依存関係として追加
$ npm install --save-dev webpack
# または
$ npm install -D webpack
# → package.jsonのdevDependenciesに追加
```

**パターン3：グローバルインストール**
```bash
$ npm install -g typescript
# → システム全体で使用可能
# → /usr/local/lib/node_modules/にインストール（macOS/Linux）
# → %AppData%\npm\node_modules\にインストール（Windows）
```

### 3. npm ci

**目的：** CIや本番環境向けの確実なインストール

```bash
$ npm ci
```

**npm installとの違い：**

| 項目 | npm install | npm ci |
|------|------------|---------|
| package-lock.json | 更新する可能性あり | 絶対に更新しない |
| node_modules | 部分更新 | 完全削除して再作成 |
| 速度 | やや遅い | 高速 |
| 用途 | 開発時 | CI/本番デプロイ |

**実行例：**
```bash
# node_modulesを削除してから実行
$ rm -rf node_modules
$ npm ci

# 以下のような場合はエラーになる
# - package-lock.jsonが存在しない
# - package.jsonとpackage-lock.jsonが一致しない
```

### 4. npm run

**目的：** package.jsonに定義されたスクリプトを実行

**基本的な使い方：**
```json
// package.json
{
  "scripts": {
    "start": "node server.js",
    "build": "webpack --mode production",
    "test": "jest",
    "dev": "nodemon server.js",
    "lint": "eslint src/**/*.js"
  }
}
```

```bash
# スクリプトの実行
$ npm run start   # node server.jsが実行される
$ npm run build   # webpack --mode productionが実行される
$ npm run test    # jestが実行される
```

**特別な省略形：**
```bash
# start, test, stopは"run"を省略可能
$ npm start   # npm run startと同じ
$ npm test    # npm run testと同じ
```

**実行時に何が起きるか：**

1. **PATH環境変数の拡張**
```bash
# npm runを実行すると、一時的にPATHが拡張される
PATH=$PATH:./node_modules/.bin

# これにより、ローカルにインストールしたツールが使える
$ npm run build
# → ./node_modules/.bin/webpackが実行される
```

2. **環境変数の設定**
```json
{
  "scripts": {
    "build:prod": "NODE_ENV=production webpack",
    "build:dev": "NODE_ENV=development webpack"
  }
}
```

3. **複数コマンドの連結**
```json
{
  "scripts": {
    "clean": "rm -rf dist",
    "build": "webpack",
    "deploy": "npm run clean && npm run build && aws s3 sync dist/ s3://my-bucket"
  }
}
```

### 5. npm run build（よくある例）

**目的：** プロジェクトをビルド（本番用に最適化）

**一般的な設定例：**
```json
{
  "scripts": {
    "build": "webpack --mode production"
  }
}
```

**実行時に何が起きるか：**

```bash
$ npm run build

# 1. webpackが起動
# 2. すべてのJavaScriptファイルを解析
# 3. 依存関係を解決
# 4. バンドル（結合）
# 5. 最小化（minify）
# 6. distディレクトリに出力

# 実行結果の例
asset main.js 125 KiB [emitted] [minimized] (name: main)
asset index.html 267 bytes [emitted]
webpack 5.88.0 compiled successfully in 3251 ms
```

**ビルド前後の比較：**
```
# ビルド前（開発用）
src/
├── index.js (10KB)
├── components/
│   ├── Header.js (5KB)
│   └── Footer.js (3KB)
└── utils/
    └── api.js (8KB)

# ビルド後（本番用）
dist/
├── main.js (15KB) # 最小化済み
├── main.js.map    # ソースマップ
└── index.html
```

## その他の重要なコマンド

### npm update
**依存パッケージを更新：**
```bash
# すべてのパッケージを更新
$ npm update

# 特定のパッケージを更新
$ npm update express

# 更新可能なパッケージを確認
$ npm outdated
Package    Current  Wanted  Latest
express    4.17.1   4.18.2  5.0.0
```

### npm uninstall
**パッケージを削除：**
```bash
# パッケージを削除
$ npm uninstall express

# 省略形
$ npm un express
$ npm rm express

# グローバルパッケージを削除
$ npm uninstall -g typescript
```

### npm list
**インストール済みパッケージを確認：**
```bash
# すべての依存関係をツリー表示
$ npm list

# 第1階層のみ表示
$ npm list --depth=0

# グローバルパッケージを表示
$ npm list -g --depth=0
```

### npm audit
**セキュリティ脆弱性をチェック：**
```bash
# 脆弱性をチェック
$ npm audit

# 自動修正
$ npm audit fix

# 破壊的変更も含めて修正
$ npm audit fix --force
```

## よくあるトラブルと解決方法

### 1. パッケージのバージョン不一致

**問題：** チームメンバー間で異なるバージョンがインストールされる

**解決方法：**
```bash
# package-lock.jsonをコミット
$ git add package-lock.json
$ git commit -m "Lock dependency versions"

# チームメンバーはnpm ciを使用
$ npm ci
```

### 2. node_modulesが巨大になる

**問題：** node_modulesが数百MB〜数GBになる

**解決方法：**
```bash
# 不要なパッケージを削除
$ npm prune

# キャッシュをクリア
$ npm cache clean --force

# node_modulesを削除して再インストール
$ rm -rf node_modules package-lock.json
$ npm install
```

### 3. パーミッションエラー（グローバルインストール時）

**問題：** `EACCES: permission denied`エラー

**解決方法：**
```bash
# npmのデフォルトディレクトリを変更
$ mkdir ~/.npm-global
$ npm config set prefix '~/.npm-global'
$ echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
$ source ~/.bashrc
```

## ベストプラクティス

### 1. package-lock.jsonは必ずコミットする
```bash
# .gitignoreの設定例
node_modules/
*.log
.env
# package-lock.jsonは除外しない！
```

### 2. 本番環境では--productionフラグを使用
```bash
# 本番環境でのインストール（devDependenciesを除外）
$ npm ci --production
```

### 3. スクリプトの命名規則を統一
```json
{
  "scripts": {
    "dev": "開発サーバー起動",
    "build": "本番ビルド",
    "test": "テスト実行",
    "lint": "コード品質チェック",
    "format": "コード整形"
  }
}
```

### 4. npxを活用する
```bash
# パッケージをインストールせずに実行
$ npx create-react-app my-app

# 特定バージョンを実行
$ npx webpack@4 --version
```

## 実践例：新規プロジェクトの立ち上げ

実際にReactプロジェクトを立ち上げる流れを見てみましょう：

```bash
# 1. プロジェクトディレクトリを作成
$ mkdir my-react-app
$ cd my-react-app

# 2. package.jsonを初期化
$ npm init -y

# 3. 必要なパッケージをインストール
$ npm install react react-dom
$ npm install -D webpack webpack-cli webpack-dev-server
$ npm install -D @babel/core @babel/preset-react babel-loader

# 4. スクリプトを追加
$ npm pkg set scripts.start="webpack-dev-server --mode development"
$ npm pkg set scripts.build="webpack --mode production"

# 5. 開発開始
$ npm start

# 6. ビルド
$ npm run build
```

## まとめ

npmコマンドは単にパッケージをインストールするだけでなく、以下の重要な役割があります：

1. **依存関係の管理**：必要なパッケージとそのバージョンを管理
2. **スクリプトの実行**：開発に必要な様々なタスクを自動化
3. **チーム開発の標準化**：全員が同じ環境で開発できる

最初は`npm install`と`npm run`だけでも十分ですが、各コマンドが何をしているかを理解することで、トラブルシューティングやより効率的な開発が可能になります。

## 次のステップ

- **yarn**や**pnpm**などの代替パッケージマネージャーを試す
- **npm workspace**でモノレポ管理を学ぶ
- **npm publish**で自作パッケージを公開する
- **GitHub Actions**でCI/CDパイプラインを構築する

これらの基本を押さえることで、JavaScriptプロジェクトの開発がよりスムーズになるはずです。

## 参考リンク

- [npm公式ドキュメント](https://docs.npmjs.com/)
- [package.jsonの仕様](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
- [npm semver calculator](https://semver.npmjs.com/)
- [Node.js公式サイト](https://nodejs.org/)---
id: 29
title: "remark完全ガイド：Next.jsでMarkdownをHTMLに変換する仕組み"
tags: ["remark", "Markdown", "Next.js", "unified", "AST", "初心者向け"]
create: "2025-08-10 17:15"
---

Markdownで書かれたブログ記事やドキュメントをWebサイトで表示するには、HTMLに変換する必要があります。本記事では、JavaScriptで最も人気のあるMarkdownプロセッサー「remark」の仕組みと使い方を、初心者にも分かりやすく解説します。

## remarkとは？

remarkは、Markdownを処理するためのプラグイン可能なツールです。unifiedエコシステムの一部として、以下の特徴があります：

- **プラグインシステム**：機能を自由に追加・拡張できる
- **AST（抽象構文木）ベース**：Markdownを構造化データとして扱う
- **高速処理**：効率的なパース処理
- **エコシステム**：豊富なプラグインが利用可能

## Markdown変換の仕組み

### 基本的な変換フロー

```
Markdown → Parse → AST → Transform → AST → Stringify → HTML
```

1. **Parse（解析）**：MarkdownテキストをASTに変換
2. **Transform（変換）**：プラグインでASTを加工
3. **Stringify（文字列化）**：ASTをHTMLなどの形式に変換

### AST（抽象構文木）とは？

ASTは、Markdownの構造を木構造で表現したデータです。

**Markdownの例：**
```markdown
# Hello World

これは**太字**のテキストです。
```

**ASTの例（簡略化）：**
```json
{
  "type": "root",
  "children": [
    {
      "type": "heading",
      "depth": 1,
      "children": [
        {
          "type": "text",
          "value": "Hello World"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "これは"
        },
        {
          "type": "strong",
          "children": [
            {
              "type": "text",
              "value": "太字"
            }
          ]
        },
        {
          "type": "text",
          "value": "のテキストです。"
        }
      ]
    }
  ]
}
```

## 基本的な使い方

### 1. インストール

```bash
# 基本パッケージ
npm install remark remark-html

# GitHub Flavored Markdown対応（表やチェックボックス）
npm install remark-gfm

# フロントマター対応
npm install gray-matter
```

### 2. シンプルな変換

```javascript
import { remark } from 'remark';
import html from 'remark-html';

const markdown = `
# Hello World

これは**Markdown**です。

- リスト1
- リスト2
`;

async function convertMarkdown() {
  const result = await remark()
    .use(html)
    .process(markdown);
  
  console.log(result.toString());
}

convertMarkdown();
```

**出力結果：**
```html
<h1>Hello World</h1>
<p>これは<strong>Markdown</strong>です。</p>
<ul>
<li>リスト1</li>
<li>リスト2</li>
</ul>
```

### 3. プラグインを使った拡張

```javascript
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const markdown = `
# タスクリスト

- [x] 完了したタスク
- [ ] 未完了のタスク

## 表

| 項目 | 説明 |
|------|------|
| remark | Markdownプロセッサー |
| unified | テキスト処理フレームワーク |
`;

async function convertWithGfm() {
  const result = await remark()
    .use(remarkGfm)  // GitHub Flavored Markdown
    .use(html)
    .process(markdown);
  
  console.log(result.toString());
}
```

## Next.jsでの実装例

### ブログシステムの実装

```typescript
// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // フロントマターを解析
  const matterResult = matter(fileContents);
  
  // MarkdownをHTMLに変換
  const processedContent = await remark()
    .use(remarkGfm)           // GFM対応
    .use(html, { 
      sanitize: false         // HTMLタグを許可
    })
    .process(matterResult.content);
  
  const contentHtml = processedContent.toString();
  
  return {
    slug,
    contentHtml,
    ...matterResult.data
  };
}
```

### Markdownファイルの例

```markdown
---
title: "初めてのremark"
date: "2025-01-10"
tags: ["JavaScript", "Markdown"]
---

# remarkを使ってみよう

remarkは**強力な**Markdownプロセッサーです。

## 特徴

- 高速処理
- プラグインシステム
- AST変換

## コード例

\`\`\`javascript
const result = await remark()
  .use(html)
  .process(markdown);
\`\`\`

## 表のサポート

| 機能 | 対応 |
|------|------|
| 基本的なMarkdown | ✅ |
| GFM | ✅ |
| カスタムプラグイン | ✅ |
```

## 主要なremarkプラグイン

### 1. remark-gfm
GitHub Flavored Markdownのサポート

```javascript
import remarkGfm from 'remark-gfm';

// 使用例
.use(remarkGfm)
```

**追加される機能：**
- 表（テーブル）
- タスクリスト
- 取り消し線
- オートリンク
- 脚注

### 2. remark-prism / remark-highlight
シンタックスハイライト

```javascript
import remarkPrism from 'remark-prism';

.use(remarkPrism)
```

### 3. remark-toc
目次の自動生成

```javascript
import remarkToc from 'remark-toc';

.use(remarkToc, {
  heading: '目次',
  maxDepth: 3
})
```

### 4. remark-emoji
絵文字のサポート

```javascript
import remarkEmoji from 'remark-emoji';

.use(remarkEmoji)
// :smile: → 😄
```

### 5. remark-math / remark-katex
数式レンダリング

```javascript
import remarkMath from 'remark-math';
import remarkKatex from 'remark-katex';

.use(remarkMath)
.use(remarkKatex)
```

## カスタムプラグインの作成

### プラグインの基本構造

```javascript
function myRemarkPlugin(options = {}) {
  return (tree, file) => {
    // ASTを走査して変換
    visit(tree, 'text', (node) => {
      // テキストノードを処理
      node.value = node.value.replace(
        /\[重要\]/g,
        '⚠️ 重要'
      );
    });
  };
}

// 使用
.use(myRemarkPlugin)
```

### 実践例：外部リンクに属性を追加

```javascript
import { visit } from 'unist-util-visit';

function remarkExternalLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      // 外部リンクかチェック
      if (node.url && node.url.startsWith('http')) {
        node.data = node.data || {};
        node.data.hProperties = {
          target: '_blank',
          rel: 'noopener noreferrer'
        };
      }
    });
  };
}
```

## unifiedエコシステム

remarkは「unified」という大きなエコシステムの一部です。

### エコシステムの構成

```
unified（コア）
├── remark（Markdown処理）
│   ├── remark-parse（Markdown → AST）
│   └── remark-stringify（AST → Markdown）
├── rehype（HTML処理）
│   ├── rehype-parse（HTML → AST）
│   └── rehype-stringify（AST → HTML）
└── retext（自然言語処理）
    ├── retext-english（英語解析）
    └── retext-japanese（日本語解析）
```

### remark + rehypeの連携

```javascript
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

const processor = unified()
  .use(remarkParse)        // Markdown → mdast
  .use(remarkRehype)       // mdast → hast
  .use(rehypeHighlight)    // コードハイライト
  .use(rehypeStringify);   // hast → HTML

const html = await processor.process(markdown);
```

## パフォーマンス最適化

### 1. プロセッサーの再利用

```javascript
// ❌ 非効率：毎回新しいプロセッサーを作成
async function convertMarkdown(content) {
  return await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);
}

// ✅ 効率的：プロセッサーを再利用
const processor = remark()
  .use(remarkGfm)
  .use(html);

async function convertMarkdown(content) {
  return await processor.process(content);
}
```

### 2. ビルド時の事前処理

```javascript
// Next.jsのgetStaticProps
export async function getStaticProps({ params }) {
  // ビルド時にMarkdownを変換
  const postData = await getPostData(params.slug);
  
  return {
    props: {
      postData
    }
  };
}
```

### 3. キャッシング

```javascript
const cache = new Map();

async function getPostWithCache(slug) {
  if (cache.has(slug)) {
    return cache.get(slug);
  }
  
  const post = await getPostData(slug);
  cache.set(slug, post);
  return post;
}
```

## トラブルシューティング

### 1. 表が正しく表示されない

**問題：** Markdown の表が HTMLのテーブルにならない

**解決方法：**
```javascript
// remark-gfmを追加
import remarkGfm from 'remark-gfm';

.use(remarkGfm)  // これが必要
.use(html)
```

### 2. HTMLタグが削除される

**問題：** MarkdownにHTMLを書いても表示されない

**解決方法：**
```javascript
.use(html, {
  sanitize: false  // サニタイズを無効化
})
```

### 3. 改行が反映されない

**問題：** Markdownの改行がHTMLに反映されない

**解決方法：**
```javascript
import remarkBreaks from 'remark-breaks';

.use(remarkBreaks)  // 改行を<br>に変換
```

### 4. 日本語の見出しでIDが生成されない

**問題：** 見出しの自動ID生成で日本語が無視される

**解決方法：**
```javascript
import remarkSlug from 'remark-slug';
import { slugify } from 'transliteration';

.use(remarkSlug, {
  slugify: (text) => slugify(text)
})
```

## 実装チェックリスト

remarkを使ったMarkdown処理を実装する際のチェックリスト：

- [ ] 必要なパッケージをインストール
  - [ ] remark
  - [ ] remark-html
  - [ ] remark-gfm（表やチェックボックスが必要な場合）
  - [ ] gray-matter（フロントマターが必要な場合）
- [ ] プロセッサーの設定
  - [ ] 必要なプラグインを追加
  - [ ] オプションを適切に設定
- [ ] パフォーマンス最適化
  - [ ] プロセッサーの再利用
  - [ ] ビルド時の事前処理
  - [ ] 必要に応じてキャッシング
- [ ] エラーハンドリング
  - [ ] ファイル読み込みエラー
  - [ ] パース処理エラー
- [ ] テスト
  - [ ] 基本的なMarkdown要素
  - [ ] GFM拡張（表、チェックボックス）
  - [ ] カスタムプラグイン

## まとめ

remarkは、Markdownを扱うJavaScriptプロジェクトにおいて非常に強力なツールです：

1. **柔軟性**：プラグインシステムで機能を自由に拡張
2. **パフォーマンス**：効率的なAST処理
3. **エコシステム**：豊富なプラグインと関連ツール
4. **Next.js統合**：静的サイト生成に最適

基本的な使い方から始めて、必要に応じてプラグインを追加していくことで、理想的なMarkdown処理環境を構築できます。

## 参考リンク

- [remark公式ドキュメント](https://github.com/remarkjs/remark)
- [unified公式サイト](https://unifiedjs.com/)
- [remark plugins一覧](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)
- [AST Explorer](https://astexplorer.net/) - ASTを視覚的に確認できるツール
- [MDX](https://mdxjs.com/) - MarkdownにJSXを埋め込める拡張形式