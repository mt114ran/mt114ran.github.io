import { WebTemplate } from './types'
import { cafeModernTemplate } from './data/cafe-modern'
import { cafeVintageTemplate } from './data/cafe-vintage'
import { cafeMinimalTemplate } from './data/cafe-minimal'
import { retailFashionTemplate } from './data/retail-fashion'
import { retailGeneralTemplate } from './data/retail-general'
import { restaurantJapaneseTemplate } from './data/restaurant-japanese'
import { restaurantWesternTemplate } from './data/restaurant-western'
import { serviceClinicTemplate } from './data/service-clinic'
import { serviceBeautyTemplate } from './data/service-beauty'
import { portfolioFreelanceTemplate } from './data/portfolio-freelance'
import { educationSchoolTemplate } from './data/education-school'
import { sportsGymTemplate } from './data/sports-gym'
import { realEstateTemplate } from './data/real-estate'

/**
 * すべてのテンプレートデータ
 */
export const templates: WebTemplate[] = [
  cafeModernTemplate,
  cafeVintageTemplate,
  cafeMinimalTemplate,
  retailFashionTemplate,
  retailGeneralTemplate,
  restaurantJapaneseTemplate,
  restaurantWesternTemplate,
  serviceClinicTemplate,
  serviceBeautyTemplate,
  portfolioFreelanceTemplate,
  educationSchoolTemplate,
  sportsGymTemplate,
  realEstateTemplate
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