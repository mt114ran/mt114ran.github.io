# /note/webpage-temp システム設計書

## 概要
カフェや小規模ビジネス向けのWebページテンプレートを表示するシステムを構築する。ブログ記事とは独立した新しいルート（/note/webpage-temp）に実装する。

## 要件
1. テンプレート一覧ページ（/note/webpage-temp）
   - 10種類のテンプレートをグリッドレイアウトで表示
   - 各テンプレートはカード形式で表示
   - レスポンシブ対応（PC/モバイル）

2. テンプレート詳細ページ（/note/webpage-temp/[id]）
   - 各テンプレートの詳細表示
   - フルページプレビュー
   - コード表示機能

3. 技術スタック
   - Tailwind CSS（スタイリング）
   - React（HTML構造）
   - Stimulus（インタラクティブ機能）

## ディレクトリ構造
```
mt114ran.github.io/
├── src/
│   ├── app/
│   │   └── note/
│   │       └── webpage-temp/
│   │           ├── page.tsx        # 一覧ページ
│   │           └── [id]/
│   │               └── page.tsx    # 詳細ページ
│   ├── components/
│   │   └── templates/
│   │       ├── TemplateCard.tsx    # カードコンポーネント
│   │       └── TemplateViewer.tsx  # プレビューコンポーネント
│   └── lib/
│       └── templates/
│           ├── index.ts             # テンプレート管理
│           └── data/                # テンプレートデータ
│               ├── cafe-modern.tsx
│               ├── cafe-vintage.tsx
│               └── ...
└── public/
    └── template-images/             # テンプレート画像
```

## テンプレートタイプ
1. カフェ - モダン
2. カフェ - ヴィンテージ
3. カフェ - ミニマル
4. 小売店 - ファッション
5. 小売店 - 雑貨
6. レストラン - 和食
7. レストラン - 洋食
8. サービス業 - 美容室
9. サービス業 - クリニック
10. ポートフォリオ - フリーランス

## データ構造
```typescript
interface WebTemplate {
  id: string
  title: string
  category: string
  description: string
  thumbnail: string
  features: string[]
  code: {
    html: string
    css: string
    js?: string
  }
}
```

## 実装ステップ
1. ルート構造の作成
2. テンプレートデータ管理システムの実装
3. 一覧ページの実装
4. 詳細ページの実装
5. サンプルテンプレートの作成（最低3つ）
6. レスポンシブデザインの調整
7. インタラクティブ機能の追加

## 個人作業用記事からのリンク
posts/0012_personal-work-memo.md に以下のリンクを追加：
- /note/webpage-temp へのリンク（Webテンプレート集）