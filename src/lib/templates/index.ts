import { WebTemplate } from './types'
import { cafeModernTemplate } from './data/cafe-modern'
import { cafeVintageTemplate } from './data/cafe-vintage'
import { retailFashionTemplate } from './data/retail-fashion'
import { restaurantJapaneseTemplate } from './data/restaurant-japanese'
import { serviceClinicTemplate } from './data/service-clinic'
import { portfolioFreelanceTemplate } from './data/portfolio-freelance'

/**
 * すべてのテンプレートデータ
 */
export const templates: WebTemplate[] = [
  cafeModernTemplate,
  cafeVintageTemplate,
  retailFashionTemplate,
  restaurantJapaneseTemplate,
  serviceClinicTemplate,
  portfolioFreelanceTemplate
]

/**
 * IDからテンプレートを取得
 */
export function getTemplateById(id: string): WebTemplate | undefined {
  return templates.find(template => template.id === id)
}

/**
 * すべてのテンプレートを取得
 */
export function getAllTemplates(): WebTemplate[] {
  return templates
}

/**
 * カテゴリーごとにテンプレートを取得
 */
export function getTemplatesByCategory(category: string): WebTemplate[] {
  return templates.filter(template => template.category === category)
}

/**
 * テンプレートのIDリストを取得
 */
export function getTemplateIds(): string[] {
  return templates.map(template => template.id)
}