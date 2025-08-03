/**
 * Webページテンプレートの型定義
 */
export interface WebTemplate {
  /** テンプレートの一意識別子 */
  id: string
  /** テンプレートのタイトル */
  title: string
  /** カテゴリー（カフェ、小売店、レストラン、サービス業、ポートフォリオ） */
  category: string
  /** テンプレートの説明 */
  description: string
  /** サムネイル画像のパス */
  thumbnail: string
  /** テンプレートの特徴リスト */
  features: string[]
  /** テンプレートのコード */
  code: {
    /** HTMLコード */
    html: string
    /** CSSコード */
    css: string
    /** JavaScriptコード（オプション） */
    js?: string
  }
  /** タグリスト */
  tags: string[]
}

/**
 * テンプレートカテゴリーの定義
 */
export const TEMPLATE_CATEGORIES = {
  CAFE: 'カフェ',
  RETAIL: '小売店',
  RESTAURANT: 'レストラン',
  SERVICE: 'サービス業',
  PORTFOLIO: 'ポートフォリオ'
} as const

export type TemplateCategory = typeof TEMPLATE_CATEGORIES[keyof typeof TEMPLATE_CATEGORIES]