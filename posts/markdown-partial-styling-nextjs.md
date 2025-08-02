---
id: 12
title: "Next.jsでMarkdown記事の特定セクションにカスタムスタイルを適用する方法"
tags: ["Next.js", "Markdown", "CSS", "remark", "正規表現"]
create: "2025-08-02 20:00"
---

## 記事を読むとわかるようになること

1. Markdownから生成されたHTMLの特定部分にスタイルを適用する基本的なアプローチは何ですか？
2. remarkでMarkdownを処理した後にHTML変換を行う際、なぜ正規表現による後処理が有効なのですか？
3. CSSの隣接セレクタ（+）を使うメリットは何ですか？

## はじめに

Markdownで書かれたブログ記事をNext.jsで表示する際、特定のセクション（例：クイズ、注意事項、ヒントなど）だけに独自のスタイルを適用したいケースがあります。今回は、実際にブログのクイズセクションにカスタムスタイルを適用した実装方法を解説します。

## 対応した内容

ブログ記事内のクイズセクションに以下の機能を実装しました：

- クイズセクションに背景色と角丸デザインを適用
- クイズの答えをドラッグ選択で表示する仕組み
- 特定の見出しとその次の要素への自動スタイル適用

## 導入した技術の解説

### remark

remarkは、Markdownを処理するためのプロセッサーです。プラグインエコシステムが充実しており、Markdownを様々な形式に変換できます。

主な特徴：
- プラグインによる拡張性
- AST（抽象構文木）ベースの処理
- 高速で安全な変換

### remark-html

remarkのプラグインで、MarkdownをHTMLに変換します。オプションで`sanitize: false`を指定することで、カスタムHTMLクラスやスタイルを保持できます。

### 正規表現による後処理

生成されたHTMLに対して正規表現を使用することで、特定のパターンにマッチする要素にカスタムクラスを追加できます。

## 用語の解説

### AST（Abstract Syntax Tree）
プログラムやマークアップの構造を木構造で表現したもの。remarkはMarkdownをASTに変換してから処理を行います。

### 隣接セレクタ（Adjacent Sibling Selector）
CSS で`+`記号を使用して、特定の要素の直後にある要素を選択するセレクタ。例：`h2 + p`はh2の直後のp要素を選択します。

### user-select CSSプロパティ
ユーザーがテキストを選択できるかどうかを制御するプロパティ。`none`に設定すると選択不可になります。

## 実装手順と遭遇した問題

### 1. 基本的なMarkdown処理の実装

```typescript
// src/lib/posts.ts
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  let contentHtml = processedContent.toString();
  
  // ここで後処理を追加
  return { contentHtml, ...matterResult.data };
}
```

### 2. 正規表現によるクラス付与

```typescript
// クイズセクションにカスタムクラスを追加
contentHtml = contentHtml.replace(
  /<h2[^>]*>([^<]*クイズ[^<]*)<\/h2>/gi,
  '<h2 class="quiz-title">$1</h2>'
);

// クイズの答えセクションに複数の要素を追加
contentHtml = contentHtml.replace(
  /<h2[^>]*>クイズの答え<\/h2>/gi,
  '<h2 class="quiz-answer-title">クイズの答え</h2>' +
  '<p class="quiz-answer-hint">（答えはドラッグして選択すると見えます）</p>'
);
```

### 遭遇した問題点

#### 問題1: Tailwind CSSのproseクラスとの競合

**症状**: カスタムスタイルがproseクラスのデフォルトスタイルに上書きされる

**原因**: Tailwind Typography プラグインのスタイルが優先度が高い

**解決方法**: 
より具体的なセレクタを使用：

```css
/* 具体的なセレクタで優先度を上げる */
.prose .quiz-title {
  @apply bg-gray-800 text-white px-6 py-4 rounded-lg;
}
```

#### 問題2: 隣接要素への動的なスタイル適用

**症状**: クイズタイトルの次の要素（ul、ol、p）に一貫したスタイルを適用できない

**原因**: Markdownの構造が予測できない（リストか段落か不明）

**解決方法**: 
CSS隣接セレクタで複数パターンに対応：

```css
.prose .quiz-title + ul,
.prose .quiz-title + ol,
.prose .quiz-title + p {
  @apply bg-gray-800 px-6 py-3 rounded-lg mb-4;
}
```

## 実装の詳細解説

### HTMLの後処理アプローチを選んだ理由

1. **シンプルさ**: remarkプラグインを作成するより実装が簡単
2. **柔軟性**: 複雑な条件分岐や複数要素の挿入が容易
3. **保守性**: 正規表現パターンの変更だけで対応可能
4. **パフォーマンス**: 小規模な処理なら影響は最小限

### ドラッグで表示する仕組みの実装

```css
/* 答えのテキストを背景と同色にする */
.prose .quiz-answer-title + .quiz-answer-hint + ul li {
  @apply text-gray-800 selection:text-white selection:bg-blue-500;
  user-select: none;
  -webkit-user-select: none;
}
```

この実装により：
- 通常時：テキストが背景と同色で見えない
- 選択時：選択範囲が青背景に白文字で表示

## 実務でよくある使用ケース

### 1. 警告・注意事項のスタイリング

```typescript
// ⚠️ や Warning を含む見出しを検出
contentHtml = contentHtml.replace(
  /<h[2-6][^>]*>([^<]*(?:⚠️|Warning|注意)[^<]*)<\/h[2-6]>/gi,
  '<h$1 class="warning-title">$2</h$1>'
);
```

### 2. コードブロックのカスタマイズ

```typescript
// 特定言語のコードブロックにクラス追加
contentHtml = contentHtml.replace(
  /<pre><code class="language-(\w+)">/g,
  '<pre class="code-$1"><code class="language-$1">'
);
```

### 3. 目次の自動生成

```typescript
// h2要素を収集して目次を作成
const headings = contentHtml.match(/<h2[^>]*>([^<]+)<\/h2>/g);
const toc = headings?.map(h => {
  const text = h.replace(/<[^>]*>/g, '');
  return `<li><a href="#${text}">${text}</a></li>`;
}).join('');
```

### 4. 外部リンクのアイコン追加

```typescript
// 外部リンクに自動でアイコンクラスを追加
contentHtml = contentHtml.replace(
  /<a href="https?:\/\/[^"]+"/g,
  '$& class="external-link"'
);
```

## ベストプラクティス

### 1. 正規表現の最適化

```typescript
// 効率的なパターン：非貪欲マッチングを使用
const pattern = /<h2[^>]*?>([^<]*?クイズ[^<]*?)<\/h2>/gi;

// 非効率なパターン：貪欲マッチング
const badPattern = /<h2.*>(.*クイズ.*)<\/h2>/gi;
```

### 2. エスケープ処理の考慮

```typescript
// 特殊文字を含む可能性がある場合
const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const searchTerm = escapeRegExp('クイズ（基礎編）');
const pattern = new RegExp(`<h2[^>]*>([^<]*${searchTerm}[^<]*)</h2>`, 'gi');
```

### 3. 複数の変換を効率的に実行

```typescript
// 変換ルールを配列で管理
const transformations = [
  {
    pattern: /<h2[^>]*>([^<]*クイズ[^<]*)<\/h2>/gi,
    replacement: '<h2 class="quiz-title">$1</h2>'
  },
  {
    pattern: /<h2[^>]*>ヒント<\/h2>/gi,
    replacement: '<h2 class="hint-title">ヒント</h2>'
  }
];

// 一括適用
transformations.forEach(({ pattern, replacement }) => {
  contentHtml = contentHtml.replace(pattern, replacement);
});
```

## トラブルシューティング

### スタイルが適用されない場合

1. **ブラウザの開発者ツールで確認**
   - 実際に生成されたHTMLを確認
   - CSSの優先度を確認

2. **正規表現のテスト**
   ```javascript
   // コンソールでパターンをテスト
   const testHtml = '<h2>## クイズ：テスト</h2>';
   console.log(testHtml.replace(/<h2[^>]*>([^<]*クイズ[^<]*)<\/h2>/gi, '<h2 class="quiz-title">$1</h2>'));
   ```

3. **CSSの詳細度を上げる**
   ```css
   /* より詳細なセレクタを使用 */
   article.prose .quiz-title {
     /* スタイル */
   }
   ```

## セキュリティ上の注意点

1. **XSS対策**
   - `sanitize: false`を使用する場合は、信頼できるコンテンツのみ処理する
   - ユーザー入力を含む場合は必ずサニタイズ

2. **正規表現のパフォーマンス**
   - 複雑な正規表現は ReDoS（正規表現DoS）のリスク
   - 大きなコンテンツには注意

3. **CSPの考慮**
   - インラインスタイルを使用する場合はCSPポリシーを確認

## まとめ

Markdownから生成されたHTMLの特定部分にスタイルを適用する方法として、remarkの後処理で正規表現を使用するアプローチを実装しました。この方法により：

1. **柔軟なスタイル適用**: 任意のパターンにマッチする要素をカスタマイズ
2. **保守性の高さ**: 正規表現パターンの変更で簡単に調整可能
3. **既存システムへの統合**: remarkの処理フローを大きく変更せずに実装

この手法は、ブログシステムやドキュメントサイトなど、Markdownベースのコンテンツ管理システムで広く活用できます。

## 記事冒頭の質問の回答

1. **Markdownから生成されたHTMLの特定部分にスタイルを適用する基本的なアプローチは何ですか？**
   - 正規表現による後処理でHTMLタグにカスタムクラスを追加し、CSSでスタイリングするアプローチです。

2. **remarkでMarkdownを処理した後にHTML変換を行う際、なぜ正規表現による後処理が有効なのですか？**
   - シンプルで実装が簡単、複雑な条件分岐や複数要素の挿入が容易、カスタムプラグインを作成するより保守性が高いためです。

3. **CSSの隣接セレクタ（+）を使うメリットは何ですか？**
   - 特定の要素の直後にある要素を確実に選択でき、Markdownの構造が変わっても（リストか段落かに関わらず）一貫したスタイルを適用できます。

## 参考リンク

- [remark 公式ドキュメント](https://github.com/remarkjs/remark)
- [remark-html プラグイン](https://github.com/remarkjs/remark-html)
- [MDN: CSS 隣接兄弟結合子](https://developer.mozilla.org/ja/docs/Web/CSS/Adjacent_sibling_combinator)
- [MDN: user-select CSSプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/user-select)
- [Next.js 公式ドキュメント - Markdown/MDX](https://nextjs.org/docs/pages/building-your-application/configuring/mdx)