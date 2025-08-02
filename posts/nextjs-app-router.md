---
id: 1
title: "Next.js App Routerの基本概念と実装パターン"
tags: ["Next.js", "React", "App Router"]
create: "2024-01-10 09:15"
update: "2024-01-15 16:45"
---

# Next.js App Routerの基本概念と実装パターン

Next.js 13で導入されたApp Routerは、従来のPages Routerとは異なるアプローチでルーティングを管理します。

## 主な特徴

### 1. ファイルベースルーティング
App Routerでは、`app`ディレクトリ内のフォルダ構造がそのままURLパスになります。

```typescript
app/
  page.tsx        // /
  about/
    page.tsx      // /about
  blog/
    [slug]/
      page.tsx    // /blog/[slug]
```

### 2. サーバーコンポーネント
デフォルトでサーバーコンポーネントとして動作し、必要に応じて`'use client'`ディレクティブでクライアントコンポーネントに切り替えます。

### 3. レイアウトの共有
`layout.tsx`ファイルを使用して、複数のページで共通のレイアウトを定義できます。

## 実装例

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
```

## パフォーマンスの最適化

- 自動的なコード分割
- プリフェッチとキャッシング
- ストリーミングSSR

App Routerを使いこなすことで、より高速でSEOフレンドリーなWebアプリケーションを構築できます。