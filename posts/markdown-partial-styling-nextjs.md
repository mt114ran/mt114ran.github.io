---
id: 12
title: "Next.jsでMarkdown記事の特定セクションにカスタムスタイルを適用する方法"
tags: ["Next.js", "Markdown", "CSS", "remark", "正規表現"]
create: "2025-08-02 20:00"
---

## クイズ：この記事でわかること

1. Markdownから生成されたHTMLの特定部分にスタイルを適用する基本的なアプローチは何ですか？
2. remarkでMarkdownを処理した後にHTML変換を行う際、なぜ正規表現による後処理が有効なのですか？
3. CSSの隣接セレクタ（+）を使うメリットは何ですか？

## はじめに

**Markdown**（マークダウン）で書かれたブログ記事を**Next.js**で表示する際、特定のセクション（例：クイズ、注意事項、ヒントなど）だけに独自のスタイルを適用したいケースがあります。

📝 **Markdownとは？** 簡単な記号を使って文書の構造を表現できる軽量マークアップ言語。`#`で見出し、`**`で太字などを表現します。

今回は、実際にブログのクイズセクションにカスタムスタイルを適用した実装方法を解説します。

## 対応した内容

ブログ記事内のクイズセクションに以下の機能を実装しました：

- クイズセクションに背景色と角丸デザインを適用
- クイズの答えをドラッグ選択で表示する仕組み
- 特定の見出しとその次の要素への自動スタイル適用

## 導入した技術の解説

### remark（リマーク）

[remark](https://github.com/remarkjs/remark)は、Markdownを処理するための**プロセッサー**（処理エンジン）です。

🔧 **プラグインエコシステム**が充実しており、Markdownを様々な形式に変換できます。
- **プラグイン**: 機能を追加するための拡張モジュール
- **エコシステム**: 関連ツールやライブラリの集合体

主な特徴：
- プラグインによる拡張性
- AST（抽象構文木）ベースの処理
- 高速で安全な変換

### remark-html

remarkの**プラグイン**で、MarkdownをHTMLに変換します。

⚠️ **重要な設定**: `sanitize: false`
- **sanitize（サニタイズ）**: 危険なコードを除去する処理
- `false`にすると、カスタムHTMLクラスやスタイルを保持できる
- ただし、XSSのリスクが高まるため注意が必要

### 正規表現による後処理

**正規表現（Regular Expression / RegExp）**: 文字列のパターンを表現する記法。検索や置換に使用されます。

生成されたHTMLに対して正規表現を使用することで、特定のパターンにマッチする要素にカスタムクラスを追加できます。

```javascript
// 正規表現の例
/クイズ/gi  // 「クイズ」という文字を検索（大文字小文字区別なし、全体検索）
```

📚 [正規表現の基礎（MDN）](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions)

## 用語の解説

### AST（Abstract Syntax Tree / 抽象構文木）

**簡単に言うと**: プログラムやマークアップの構造を「木」のような形で表現したもの。

例えば、`# タイトル`というMarkdownは以下のようなASTになります：
```
heading (見出し)
  └── text: "タイトル"
```

remarkはMarkdownをASTに変換してから処理を行うため、柔軟な変換が可能になります。

### 隣接セレクタ（Adjacent Sibling Selector）

**CSSセレクタ**の一種で、`+`記号を使用して「特定の要素の直後にある要素」を選択します。

```css
/* h2の直後のp要素だけにスタイルを適用 */
h2 + p {
  color: blue;
}
```

💡 **使用例**: 見出しの直後の段落だけ文字を大きくしたい、など特定の配置関係にある要素をスタイリングする際に便利です。

### user-select CSSプロパティ

ユーザーがマウスでテキストを選択（ドラッグ）できるかどうかを制御する**CSS**プロパティ。

```css
/* テキストを選択できなくする */
.no-select {
  user-select: none;
  -webkit-user-select: none; /* Safari用 */
  -moz-user-select: none;    /* Firefox用 */
}
```

💡 **使い道**: ボタンのテキストや装飾的な要素など、選択されたくないテキストに使用します。

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

### 1. XSS（クロスサイトスクリプティング）対策

**XSSとは？** 悪意のあるスクリプトをWebページに埋め込む攻撃手法。ユーザーの個人情報を盗んだり、なりすましを行ったりする危険があります。

対策：
- `sanitize: false`を使用する場合は、信頼できるコンテンツのみ処理する
- ユーザー入力を含む場合は必ず**サニタイズ**（危険な文字を無害化）する

```javascript
// 危険な例
const userInput = "<script>alert('XSS')</script>";
document.innerHTML = userInput; // 危険！

// 安全な例
const sanitizedInput = DOMPurify.sanitize(userInput);
document.innerHTML = sanitizedInput; // 安全
```

### 2. ReDoS（正規表現によるサービス拒否攻撃）

**ReDoSとは？** 複雑な正規表現に対して特定の入力を与えることで、処理時間を極端に長くする攻撃。

対策：
- 複雑な正規表現は避ける
- 大きなコンテンツには処理時間の上限を設ける

### 3. CSP（Content Security Policy）の考慮

**CSPとは？** Webページで実行可能なスクリプトの出所を制限するセキュリティ機能。XSS攻撃を防ぐのに有効です。

- インラインスタイルを使用する場合はCSPポリシーを確認
- 必要に応じて`style-src`ディレクティブを調整

```html
<!-- CSPの例 -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; style-src 'self' 'unsafe-inline';">
```

🔐 **セキュリティの基本原則**: 「信頼しない、検証する」。外部からの入力は常に危険と考え、適切に処理してから使用しましょう。

## まとめ

Markdownから生成されたHTMLの特定部分にスタイルを適用する方法として、remarkの後処理で正規表現を使用するアプローチを実装しました。この方法により：

1. **柔軟なスタイル適用**: 任意のパターンにマッチする要素をカスタマイズ
2. **保守性の高さ**: 正規表現パターンの変更で簡単に調整可能
3. **既存システムへの統合**: remarkの処理フローを大きく変更せずに実装

この手法は、ブログシステムやドキュメントサイトなど、Markdownベースのコンテンツ管理システムで広く活用できます。

## クイズの回答：ふりかえり

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