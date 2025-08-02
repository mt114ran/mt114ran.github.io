---
id: 1
title: "Next.js App Routerの基本概念と実装パターン"
tags: ["Next.js", "React", "App Router"]
create: "2024-01-10 09:15"
update: "2024-01-15 16:45"
---

# Next.js App Routerの基本概念と実装パターン

## クイズ：この記事でわかること

1. Next.js App Routerではどのディレクトリ内のフォルダ構造がURLパスになりますか？
2. App Routerでサーバーコンポーネントからクライアントコンポーネントに切り替えるために使用するディレクティブは何ですか？
3. App Routerで複数のページで共通のレイアウトを定義するために使用するファイル名は何ですか？

[Next.js](https://nextjs.org/) 13で導入された**App Router**は、従来のPages Routerとは異なるアプローチで**ルーティング**（URLとページの対応付け）を管理します。

### 用語解説
- **Next.js**: Reactベースのフルスタックフレームワーク。サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）が簡単に実装できる
- **ルーティング**: URLパスとページコンポーネントを紐付ける仕組み
- **フレームワーク**: アプリケーション開発の土台となるソフトウェアの枠組み

## 主な特徴

### 1. ファイルベースルーティング
App Routerでは、`app`ディレクトリ内のフォルダ構造がそのまま**URLパス**になります。

💡 **初心者向け解説**: ファイルやフォルダの配置だけでページのURLが決まるため、設定ファイルを書く必要がありません。

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
デフォルトで**サーバーコンポーネント**として動作し、必要に応じて`'use client'`**ディレクティブ**でクライアントコンポーネントに切り替えます。

#### 用語解説
- **サーバーコンポーネント**: サーバー側で実行され、HTMLを生成してからブラウザに送るコンポーネント。[React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)の仕組み
- **クライアントコンポーネント**: ブラウザ側で実行される従来のReactコンポーネント
- **ディレクティブ**: コードの動作を指定する特別な命令文

### 3. レイアウトの共有
`layout.tsx`ファイルを使用して、複数のページで共通の**レイアウト**を定義できます。

💡 **初心者向け解説**: レイアウトとは、ヘッダーやサイドバーなど、複数のページで共通して使う部分のことです。

## 実装例

以下は**TypeScript**（型付きJavaScript）を使った実装例です：

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

- **コード分割**: 必要なコードだけを読み込む技術。ページ表示速度が向上
- **プリフェッチ**: ユーザーが次に訪れそうなページを事前に読み込む技術
- **キャッシング**: 一度読み込んだデータを保存して再利用する仕組み
- **ストリーミングSSR**: ページの一部を順次送信して表示速度を向上させる技術

App Routerを使いこなすことで、より高速で**SEO**フレンドリーなWebアプリケーションを構築できます。

💡 **SEO（Search Engine Optimization）**: 検索エンジン最適化。GoogleやBingなどの検索結果で上位に表示されやすくする技術

## 参考リンク

- [Next.js 公式ドキュメント（日本語）](https://nextjs.org/docs)
- [React 公式ドキュメント](https://ja.react.dev/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript)

## クイズの回答：ふりかえり

1. appディレクトリ
2. 'use client'
3. layout.tsx