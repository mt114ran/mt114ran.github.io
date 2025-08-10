---
id: 28
title: "npm基本コマンド完全ガイド：初心者が知るべきnpmの仕組みと実行内容"
tags: ["npm", "Node.js", "JavaScript", "初心者向け", "パッケージ管理"]
create: "2025-08-10 16:45"
---

JavaScriptプロジェクトを開発する際、必ず遭遇するのが`npm`コマンドです。「とりあえず`npm install`を実行して」と言われても、実際に何が起きているのか分からないまま使っている方も多いのではないでしょうか。本記事では、npmの基本コマンドが裏側で何をしているのか、どんなファイルが作成されるのかを詳しく解説します。

## 📚 目次

- [npmとは何か？](#npmとは何か)
- [重要なファイルの役割](#重要なファイルの役割)
- [基本コマンドの詳細解説](#基本コマンドの詳細解説)
- [その他の重要なコマンド](#その他の重要なコマンド)
- [よくあるトラブルと解決方法](#よくあるトラブルと解決方法)
- [ベストプラクティス](#ベストプラクティス)
- [実践例：新規プロジェクトの立ち上げ](#実践例新規プロジェクトの立ち上げ)

## 前提条件

### Node.jsとnpmのインストール確認

```bash
# Node.jsのバージョン確認
$ node --version
v20.10.0  # 例：バージョンが表示されればOK

# npmのバージョン確認
$ npm --version
10.2.3  # 例：バージョンが表示されればOK
```

💡 **Tip**: Node.jsがインストールされていない場合は、[Node.js公式サイト](https://nodejs.org/)からダウンロードするか、nvm（Node Version Manager）を使用してインストールしてください。

```bash
# nvmを使ったNode.jsのインストール（Mac/Linux）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

## npmとは何か？

npm（Node Package Manager）は、JavaScriptのパッケージ管理ツールです。以下の3つの意味があります：

1. **コマンドラインツール**：`npm`コマンドそのもの
2. **パッケージレジストリ**：npmjs.comで公開されているパッケージのデータベース
3. **パッケージ管理システム**：依存関係の解決とバージョン管理の仕組み

### npmの処理フロー図

```
開発者 → npm install → npmレジストリ
           ↓              ↓
      package.json    パッケージダウンロード
           ↓              ↓
    package-lock.json  node_modules/
           ↓              ↓
       依存関係固定    コード実行可能
```

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

⚠️ **重要**: 本番環境やCI/CDでは`npm install`ではなく`npm ci`を使用しましょう。

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

## npmスクリプトの高度な使い方

### pre/postスクリプト

npmは特定のスクリプトの前後に自動実行されるスクリプトをサポートしています。

```json
{
  "scripts": {
    "pretest": "npm run lint",
    "test": "jest",
    "posttest": "npm run coverage",
    "prebuild": "rm -rf dist",
    "build": "webpack",
    "postbuild": "npm run optimize"
  }
}
```

```bash
# npm run testを実行すると以下の順序で実行される
1. pretest (lint)
2. test (jest)
3. posttest (coverage)
```

### 環境変数の活用

```json
{
  "scripts": {
    "dev": "NODE_ENV=development webpack serve",
    "build": "NODE_ENV=production webpack",
    "build:staging": "NODE_ENV=staging webpack"
  }
}
```

### cross-envで環境依存を解消

WindowsとMac/Linuxで環境変数の設定方法が異なる問題を解決：

```bash
npm install --save-dev cross-env
```

```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack",
    "dev": "cross-env NODE_ENV=development webpack serve"
  }
}
```

### npm-run-allで並列実行

```bash
npm install --save-dev npm-run-all
```

```json
{
  "scripts": {
    "lint:js": "eslint src/**/*.js",
    "lint:css": "stylelint src/**/*.css",
    "lint": "run-p lint:*",  // 並列実行
    "build:js": "webpack",
    "build:css": "postcss",
    "build": "run-s clean build:*"  // 順次実行
  }
}
```

## パフォーマンス最適化テクニック

### 1. npm ci の高速化

```bash
# オフラインモードを優先（キャッシュから取得）
$ npm ci --prefer-offline

# ログ出力を削減
$ npm ci --silent

# 監査をスキップ（CI環境で有効）
$ npm ci --no-audit
```

### 2. .npmrcの最適化

```ini
# .npmrc
# レジストリの設定
registry=https://registry.npmjs.org/

# キャッシュ設定
cache-min=3600

# インストール時の設定
save-exact=true
engine-strict=true

# ログレベル
loglevel=warn

# 監査の設定
audit-level=moderate
```

### 3. キャッシュの活用

```bash
# キャッシュの場所を確認
$ npm config get cache
/Users/username/.npm

# キャッシュの内容を確認
$ npm cache ls

# キャッシュの検証
$ npm cache verify

# CI環境でのキャッシュ設定例（GitHub Actions）
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

## セキュリティ対策の詳細

### npm auditの活用

```bash
# 脆弱性の詳細レポート
$ npm audit --json > audit-report.json

# 特定レベル以上の脆弱性のみ表示
$ npm audit --audit-level=high

# 本番依存のみチェック
$ npm audit --production
```

### package-lock.jsonの重要性

```bash
# package-lock.jsonの整合性チェック
$ npm ls

# 不整合を修正
$ npm install --package-lock-only
```

### スコープ付きパッケージのセキュリティ

```bash
# 企業内レジストリの設定
$ npm config set @mycompany:registry https://npm.mycompany.com

# 認証トークンの設定
$ npm config set //npm.mycompany.com/:_authToken YOUR_TOKEN
```

## よくある質問（FAQ）

### Q: npm installが遅い

**A:** 以下の方法を試してください：

1. npm ciを使用する
2. キャッシュをクリアする: `npm cache clean --force`
3. レジストリを変更する
4. .npmrcで並列ダウンロード数を増やす: `maxsockets=10`

### Q: package-lock.jsonは削除してもいい？

**A:** **削除しないでください**。package-lock.jsonは以下の理由で重要です：

- チーム全員が同じバージョンを使用できる
- 本番環境での再現性を保証
- セキュリティ脆弱性の追跡が可能

### Q: npm installとnpm updateの違いは？

**A:** 
- `npm install`: package.jsonの範囲内でインストール
- `npm update`: package.jsonの範囲内で最新版に更新

## 他のパッケージマネージャーとの比較

| 機能 | npm | yarn | pnpm |
|------|-----|------|------|
| 速度 | 普通 | 速い | 最速 |
| ディスク使用量 | 大 | 大 | 小（シンボリックリンク） |
| ワークスペース | ✅ | ✅ | ✅ |
| ゼロインストール | ❌ | ✅ | ❌ |
| 自動インストール | ❌ | ✅ | ✅ |
| セキュリティ | npm audit | yarn audit | pnpm audit |

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
- [Node.js公式サイト](https://nodejs.org/)