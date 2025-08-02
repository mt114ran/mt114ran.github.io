---
id: 9
title: "Tailwind CSS v4の@import構文でスタイルが適用されない問題と解決方法"
tags: ["Tailwind CSS", "Next.js", "CSS", "Troubleshooting"]
create: "2025-08-02 12:45"
---

# Tailwind CSS v4の@import構文でスタイルが適用されない問題と解決方法

Next.js 15.3.3とTailwind CSS v4を使用していて、スタイルが正しく適用されない問題に遭遇しました。この記事では、その原因と解決方法について説明します。

## 問題の症状

以下のような構成でTailwindのスタイルが全く適用されませんでした：

```css
/* globals.css - 問題のあるコード */
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

## 原因

Tailwind CSS v4では新しい`@import`構文が導入されましたが、Next.jsのビルドプロセスとの互換性に問題がある場合があります。特に静的エクスポート（`output: 'export'`）を使用している場合、この新しい構文が正しく処理されないことがあります。

## 解決方法

従来の`@tailwind`ディレクティブを使用することで問題を解決できます：

```css
/* globals.css - 修正後 */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #000000;
  --foreground: #ffffff;
}

html {
  color-scheme: dark;
}

body {
  @apply bg-black text-white;
  font-family: Arial, Helvetica, sans-serif;
}
```

## ダークテーマの実装

今回は背景を黒、テキストを白にするダークテーマも同時に実装しました。

### 1. グローバルスタイルの設定

```css
/* ダークモードを強制適用 */
html {
  color-scheme: dark;
}

body {
  @apply bg-black text-white;
}
```

### 2. コンポーネントのカラー調整

各コンポーネントで使用している色も調整が必要です：

```tsx
// リンクの色を調整
<Link href="/blog" className="text-blue-400 hover:text-blue-300 hover:underline">
  記事一覧へ
</Link>

// グレーテキストの調整
<p className="text-gray-400 text-sm">
  作成日: {post.create}
</p>

// ボーダーの色調整
<li className="border-b border-gray-700 pb-4">
  {/* コンテンツ */}
</li>
```

## ベストプラクティス

### 1. Tailwind設定の確認

`tailwind.config.ts`でコンテンツパスが正しく設定されているか確認：

```typescript
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. PostCSSの設定

`postcss.config.mjs`でTailwindが正しく設定されているか確認：

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. ビルドの確認

変更後は必ずビルドを実行して、エラーがないことを確認：

```bash
npm run build
```

## まとめ

Tailwind CSS v4の新しい`@import`構文は、まだすべての環境で完全にサポートされていない可能性があります。問題が発生した場合は、従来の`@tailwind`ディレクティブを使用することで解決できます。

また、ダークテーマを実装する際は、以下の点に注意が必要です：

1. グローバルスタイルで基本的な色を定義
2. 各コンポーネントで使用している色クラスを調整
3. ボーダーや背景色も忘れずに調整

これらの対応により、美しいダークテーマのサイトを実現できます。