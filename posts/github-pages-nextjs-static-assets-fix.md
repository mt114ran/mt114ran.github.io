---
id: 10
title: 'GitHub PagesでNext.jsの静的アセットが404になる問題の解決方法'
create: '2025-08-02 16:00'
tags: ['GitHub Pages', 'Next.js', 'Jekyll', 'Static Site']
---

# GitHub PagesでNext.jsの静的アセットが404になる問題の解決方法

## 記事を読むとわかるようになること

1. GitHub Pagesがデフォルトで使用する静的サイトジェネレーターは何ですか？
2. Jekyll がアンダースコアで始まるディレクトリをどのように扱いますか？
3. Jekyll の処理をスキップするためにプロジェクトに追加するファイルは何ですか？

Next.jsでビルドした静的サイトをGitHub Pagesにデプロイした際、CSSやJavaScriptファイルが404エラーになり、スタイルが適用されない問題に遭遇しました。本記事では、この問題の原因と解決方法について説明します。

## 問題の症状

- ローカル環境では正常に表示される
- GitHub Pagesにデプロイすると、Tailwind CSSのスタイルが全く適用されない
- ブラウザの開発者ツールを確認すると、`/_next/static/`以下のCSSやJSファイルが404エラーになっている

## 原因

GitHub Pagesは、デフォルトでJekyllを使用してサイトを処理します。Jekyllには以下の特徴があります：

1. **アンダースコアで始まるディレクトリを無視する**：`_next`や`_app`のようなディレクトリは、Jekyllによって無視され、公開されません
2. **静的ファイルの処理**：Jekyllは、サイトを再処理してビルドを行うため、意図しない変更が加わる可能性があります

Next.jsの`next export`（静的エクスポート）では、`_next`ディレクトリにすべてのJavaScriptとCSSファイルが出力されるため、このディレクトリがJekyllによって無視されることで、アセットファイルにアクセスできなくなります。

## 解決方法

### 1. `.nojekyll`ファイルの追加

プロジェクトのビルド出力ディレクトリ（通常は`out`）に`.nojekyll`という空のファイルを追加します。このファイルは、GitHub PagesにJekyllの処理をスキップするよう指示します。

```bash
touch out/.nojekyll
```

### 2. ビルドスクリプトの修正

`package.json`のビルドスクリプトを修正して、ビルド後に自動的に`.nojekyll`ファイルを作成するようにします：

```json
{
  "scripts": {
    "build": "next build && touch out/.nojekyll",
    "deploy": "gh-pages -d out -t true"
  }
}
```

重要なポイント：
- `touch out/.nojekyll`：ビルド後に`.nojekyll`ファイルを作成
- `gh-pages -d out -t true`：`-t`オプションを追加して、ドットファイル（`.nojekyll`）も含めてデプロイ

### 3. GitHub Actionsを使用する場合

GitHub Actionsを使用してデプロイする場合は、以下のようなワークフローを設定します：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Add .nojekyll
        run: touch out/.nojekyll
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 確認方法

デプロイ後、以下の点を確認します：

1. **アセットファイルへのアクセス**：`https://[username].github.io/[repository]/_next/static/`にアクセスして、ファイルが正しく配信されているか確認
2. **開発者ツールの確認**：NetworkタブでCSSやJSファイルが200 OKで読み込まれているか確認
3. **スタイルの適用**：ページが正しくスタイリングされているか視覚的に確認

## トラブルシューティング

### 問題が解決しない場合

1. **キャッシュのクリア**：ブラウザのキャッシュをクリアして再読み込み
2. **GitHub Pagesの再デプロイ**：GitHubのリポジトリ設定でGitHub Pagesを一度無効にして、再度有効化
3. **ビルド出力の確認**：`out`ディレクトリに`.nojekyll`ファイルが存在することを確認

### Next.jsの設定確認

`next.config.js`（または`next.config.ts`）の設定も確認します：

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pagesで公開する場合、適切なbasePathを設定
  basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
}
```

ただし、ユーザー名と同じ名前のリポジトリ（`[username].github.io`）の場合は、`basePath`と`assetPrefix`は空文字列で問題ありません。

## まとめ

GitHub PagesでNext.jsの静的サイトをホスティングする際の404エラーは、Jekyllがアンダースコアで始まるディレクトリを無視することが原因です。`.nojekyll`ファイルを追加することで、この問題を簡単に解決できます。

この方法により、Next.jsで作成した静的サイトをGitHub Pagesで問題なく公開できるようになります。

## クイズの答え

1. Jekyll
2. 無視して公開しない（アンダースコアで始まるディレクトリを無視する）
3. .nojekyll