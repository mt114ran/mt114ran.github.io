---
id: 1
title: "Next.js App Routerの基本概念と実装パターン"
tags: ["Next.js", "React", "App Router"]
create: "2024-01-10 09:15"
update: "2024-01-15 16:45"
---

# Next.js App Routerの基本概念と実装パターン


[Next.js](https://nextjs.org/) 13で導入された**App Router**は、従来のPages Routerとは異なるアプローチで**ルーティング**（URLとページの対応付け）を管理します。

## フルスタックフレームワークとは？

**フルスタックフレームワーク**とは、フロントエンドからバックエンドまで、Webアプリケーション開発に必要な機能をすべて提供するフレームワークです。

### フルスタックフレームワークが提供する機能

| 領域 | 機能 | Next.jsでの実現方法 |
|------|------|-----------------|
| フロントエンド | UIコンポーネント | Reactコンポーネント |
| ルーティング | URL管理 | App Router / Pages Router |
| サーバーサイド | APIエンドポイント | Route Handlers (API Routes) |
| レンダリング | SSR/SSG/ISR | ビルトインサポート |
| データベース | DB接続 | Server Actions、ORM連携 |
| 認証 | ユーザー管理 | NextAuth.jsなど |
| デプロイ | ホスティング | Vercel、Netlify対応 |

### 用語解説
- **Next.js**: Reactベースのフルスタックフレームワーク
- **SSR（Server-Side Rendering）**: サーバー側でHTMLを生成してからブラウザに送る技術
- **SSG（Static Site Generation）**: ビルド時に静的なHTMLを生成する技術
- **ISR（Incremental Static Regeneration）**: 静的ページを段階的に更新する技術
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

## Next.jsのメリットとデメリット

### メリット 👍

| メリット | 説明 | 具体例 |
|----------|------|----------|
| **開発効率** | フルスタック機能が統合済み | ルーティング、API、デプロイが一つのフレームワークで完結 |
| **パフォーマンス** | 自動最適化機能が豊富 | 画像最適化、コード分割、プリフェッチ |
| **SEO対応** | SSR/SSGによるSEO最適化 | 検索エンジンがコンテンツを読みやすい |
| **TypeScript** | 標準でTypeScriptサポート | 型安全な開発が可能 |
| **エコシステム** | Vercelとの完璧な統合 | ワンクリックデプロイ |

### デメリット 👎

| デメリット | 説明 | 対策 |
|------------|------|------|
| **学習コスト** | Reactの知識に加えNext.js特有の概念を学ぶ必要 | 公式ドキュメントやチュートリアルを活用 |
| **柔軟性の制約** | Next.jsの約束に従う必要 | ファイル構造や命名規則が固定 |
| **ビルド時間** | 大規模アプリではビルドが長い | ISRや動的ルートを活用 |
| **ベンダーロックイン** | Vercel以外でのホスティングが複雑 | セルフホスティング用の設定が必要 |
| **ランタイムコスト** | サーバーサイド処理によるサーバー負荷 | 適切なキャッシュ戦略を実装 |
| **バージョン更新** | メジャーアップデートで破壊的変更 | 慰意的なアップグレード計画 |

### 他のフレームワークとの比較

| 機能 | Next.js | Nuxt.js | SvelteKit | Remix |
|------|---------|---------|-----------|-------|
| ベース | React | Vue | Svelte | React |
| SSR/SSG | ◎ | ◎ | ◎ | ◎ |
| API Routes | ◎ | ◎ | ◎ | ◎ |
| TypeScript | ◎ | ◎ | ◎ | ◎ |
| 学習曲線 | 中 | 低 | 低 | 中 |
| エコシステム | 大 | 中 | 小 | 小 |

App Routerを使いこなすことで、より高速で**SEO**フレンドリーなWebアプリケーションを構築できます。

💡 **SEO（Search Engine Optimization）**: 検索エンジン最適化。GoogleやBingなどの検索結果で上位に表示されやすくする技術

## 参考リンク

- [Next.js 公式ドキュメント（日本語）](https://nextjs.org/docs)
- [React 公式ドキュメント](https://ja.react.dev/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript)

