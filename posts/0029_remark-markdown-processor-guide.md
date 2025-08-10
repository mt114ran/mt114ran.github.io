---
id: 29
title: "remark完全ガイド：Next.jsでMarkdownをHTMLに変換する仕組み"
tags: ["remark", "Markdown", "Next.js", "unified", "AST", "初心者向け"]
create: "2025-08-10 17:15"
---

Markdownで書かれたブログ記事やドキュメントをWebサイトで表示するには、HTMLに変換する必要があります。本記事では、JavaScriptで最も人気のあるMarkdownプロセッサー「remark」の仕組みと使い方を、初心者にも分かりやすく解説します。

## 📚 目次

- [remarkとは？](#remarkとは)
- [Markdown変換の仕組み](#markdown変換の仕組み)
- [基本的な使い方](#基本的な使い方)
- [Next.jsでの実装例](#nextjsでの実装例)
- [主要なremarkプラグイン](#主要なremarkプラグイン)
- [カスタムプラグインの作成](#カスタムプラグインの作成)
- [パフォーマンス最適化](#パフォーマンス最適化)
- [トラブルシューティング](#トラブルシューティング)

## Markdownの基礎知識

### Markdownとは？

Markdownは、テキストファイルに簡単な記号を付けることで、文書の構造を表現できるマークアップ言語です。

**基本的なMarkdown記法：**
```markdown
# 見出し1
## 見出し2

**太字** *斜体*

- リスト項目
- リスト項目

[リンク](https://example.com)
![画像](image.jpg)

`インラインコード`

\`\`\`javascript
// コードブロック
const hello = "world";
\`\`\`
```

### なぜHTML変換が必要か？

- **ブラウザ表示**: ブラウザはHTMLしか理解できない
- **スタイリング**: CSSでデザインを適用できる
- **インタラクティブ**: JavaScriptで動的な機能を追加できる

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

## ステップバイステップチュートリアル

### Step 1: 最小限の実装

```javascript
// 1. 必要なパッケージをインポート
const { remark } = require('remark');
const html = require('remark-html');

// 2. Markdownを準備
const markdown = '# Hello World\n\nこれは**Markdown**です。';

// 3. 変換して表示
remark()
  .use(html)
  .process(markdown)
  .then(result => {
    console.log(result.toString());
    // 出力: <h1>Hello World</h1>\n<p>これは<strong>Markdown</strong>です。</p>
  });
```

### Step 2: ファイルから読み込む

```javascript
const fs = require('fs');
const { remark } = require('remark');
const html = require('remark-html');

// Markdownファイルを読み込む
const markdown = fs.readFileSync('article.md', 'utf8');

// HTMLに変換
async function convertToHtml() {
  const result = await remark()
    .use(html)
    .process(markdown);
  
  // HTMLファイルに保存
  fs.writeFileSync('article.html', result.toString());
  console.log('✅ 変換完了！');
}

convertToHtml();
```

### Step 3: プラグインを追加

```javascript
const { remark } = require('remark');
const html = require('remark-html');
const remarkGfm = require('remark-gfm');

const markdown = `
# TODOリスト

- [x] remarkをインストール
- [ ] プラグインを追加
- [ ] カスタマイズ

| 機能 | 状態 |
|------|------|
| 表 | ✅ |
| チェックボックス | ✅ |
`;

async function convertWithPlugins() {
  const result = await remark()
    .use(remarkGfm)  // GitHub Flavored Markdownを有効化
    .use(html)
    .process(markdown);
  
  console.log(result.toString());
}

convertWithPlugins();
```

## パフォーマンスベンチマーク

### remark vs 他のMarkdownプロセッサー

| プロセッサー | 速度 | プラグイン | AST | ファイルサイズ |
|--------------|------|------------|-----|---------------|
| remark | 速い | 非常に豊富 | ✅ | 中 |
| marked | 最速 | 少ない | ❌ | 小 |
| markdown-it | 速い | 豊富 | ❌ | 中 |
| showdown | 普通 | 普通 | ❌ | 大 |

### 大規模ファイルの処理最適化

```javascript
const { unified } = require('unified');
const remarkParse = require('remark-parse');
const remarkRehype = require('remark-rehype');
const rehypeStringify = require('rehype-stringify');
const stream = require('stream');
const { promisify } = require('util');

const pipeline = promisify(stream.pipeline);

// ストリーム処理でメモリ効率を最適化
async function processLargeFile(inputPath, outputPath) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify);
  
  await pipeline(
    fs.createReadStream(inputPath),
    processor.stream(),
    fs.createWriteStream(outputPath)
  );
  
  console.log('✅ 大規模ファイルの処理完了');
}
```

## CI/CDでの活用

### GitHub Actionsでのドキュメント自動生成

```yaml
name: Generate Documentation

on:
  push:
    paths:
      - 'docs/**/*.md'
      - 'README.md'

jobs:
  build-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build documentation
        run: |
          npm run build:docs
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### MarkdownのLinting

```javascript
// .remarkrc.js
module.exports = {
  plugins: [
    'remark-preset-lint-consistent',
    'remark-preset-lint-recommended',
    'remark-preset-lint-markdown-style-guide',
    ['remark-lint-list-item-indent', 'space'],
    ['remark-lint-no-heading-punctuation', ':.']
  ]
};
```

```bash
# Lintの実行
npx remark . --quiet --frail
```

## MDXとの統合

### Reactコンポーネントの埋め込み

```jsx
// components/Counter.jsx
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      クリック数: {count}
    </button>
  );
}
```

```mdx
# MDXの例

import { Counter } from './components/Counter';

これは通常のMarkdownです。

<Counter />

上にインタラクティブなカウンターが表示されます！
```

```javascript
// MDXの処理
import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';

const compiled = await compile(mdxContent, {
  remarkPlugins: [remarkGfm],
  rehypePlugins: []
});
```

## よくあるエラーと対処法

### エラー1: Cannot find module 'remark'

```bash
# 解決方法
npm install remark remark-html
```

### エラー2: TypeError: remark is not a function

```javascript
// ❌ 間違ったインポート
const remark = require('remark');

// ✅ 正しいインポート
const { remark } = require('remark');
// または
import { remark } from 'remark';
```

### エラー3: 表が表示されない

```javascript
// ❌ GFMプラグインがない
.use(html)

// ✅ GFMプラグインを追加
.use(remarkGfm)
.use(html)
```

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