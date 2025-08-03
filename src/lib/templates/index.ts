import { WebTemplate } from './types'
// カフェカテゴリ
import { cafeModernTemplate } from './data/cafe-modern'
import { cafeVintageTemplate } from './data/cafe-vintage'
import { cafeMinimalTemplate } from './data/cafe-minimal'
import { cafeNaturalTemplate } from './data/cafe-natural'
import { cafeIndustrialTemplate } from './data/cafe-industrial'
import { cafeJapaneseTemplate } from './data/cafe-japanese'
import { cafeLuxuryTemplate } from './data/cafe-luxury'
import { cafeCoworkingTemplate } from './data/cafe-coworking'
import { cafeBookshopTemplate } from './data/cafe-bookshop'
import { cafeOrganicTemplate } from './data/cafe-organic'
// 小売店カテゴリ
import { retailFashionTemplate } from './data/retail-fashion'
import { retailGeneralTemplate } from './data/retail-general'
import { retailBookstoreTemplate } from './data/retail-bookstore'
import { retailBoutiqueTemplate } from './data/retail-boutique'
import { retailElectronicsTemplate } from './data/retail-electronics'
import { retailJewelryTemplate } from './data/retail-jewelry'
import { retailSportsTemplate } from './data/retail-sports'
import { retailHomeTemplate } from './data/retail-home'
import { retailBakeryTemplate } from './data/retail-bakery'
import { retailFlowerTemplate } from './data/retail-flower'
// レストランカテゴリ
import { restaurantJapaneseTemplate } from './data/restaurant-japanese'
import { restaurantWesternTemplate } from './data/restaurant-western'
import { restaurantItalianTemplate } from './data/restaurant-italian'
import { restaurantChineseTemplate } from './data/restaurant-chinese'
import { restaurantFrenchTemplate } from './data/restaurant-french'
import { restaurantSushiTemplate } from './data/restaurant-sushi'
import { restaurantRamenTemplate } from './data/restaurant-ramen'
import { restaurantBbqTemplate } from './data/restaurant-bbq'
import { restaurantVegetarianTemplate } from './data/restaurant-vegetarian'
import { restaurantFastfoodTemplate } from './data/restaurant-fastfood'
// サービス業カテゴリ
import { serviceClinicTemplate } from './data/service-clinic'
import { serviceBeautyTemplate } from './data/service-beauty'
import { educationSchoolTemplate } from './data/education-school'
import { sportsGymTemplate } from './data/sports-gym'
import { realEstateTemplate } from './data/real-estate'
import { serviceDentalTemplate } from './data/service-dental'
import { serviceLawTemplate } from './data/service-law'
import { serviceAccountingTemplate } from './data/service-accounting'
import { serviceInsuranceTemplate } from './data/service-insurance'
import { serviceCleaningTemplate } from './data/service-cleaning'
// ポートフォリオカテゴリ
import { portfolioFreelanceTemplate } from './data/portfolio-freelance'
import { portfolioDesignerTemplate } from './data/portfolio-designer'
import { portfolioPhotographerTemplate } from './data/portfolio-photographer'
import { portfolioDeveloperTemplate } from './data/portfolio-developer'
import { portfolioArtistTemplate } from './data/portfolio-artist'
import { portfolioArchitectTemplate } from './data/portfolio-architect'
import { portfolioWriterTemplate } from './data/portfolio-writer'
import { portfolioMusicianTemplate } from './data/portfolio-musician'
import { portfolioAgencyTemplate } from './data/portfolio-agency'
import { portfolioConsultantTemplate } from './data/portfolio-consultant'

/**
 * すべてのテンプレートデータ
 */
export const templates: WebTemplate[] = [
  // カフェカテゴリ（10個）
  cafeModernTemplate,
  cafeVintageTemplate,
  cafeMinimalTemplate,
  cafeNaturalTemplate,
  cafeIndustrialTemplate,
  cafeJapaneseTemplate,
  cafeLuxuryTemplate,
  cafeCoworkingTemplate,
  cafeBookshopTemplate,
  cafeOrganicTemplate,
  // 小売店カテゴリ（10個）
  retailFashionTemplate,
  retailGeneralTemplate,
  retailBookstoreTemplate,
  retailBoutiqueTemplate,
  retailElectronicsTemplate,
  retailJewelryTemplate,
  retailSportsTemplate,
  retailHomeTemplate,
  retailBakeryTemplate,
  retailFlowerTemplate,
  // レストランカテゴリ（10個）
  restaurantJapaneseTemplate,
  restaurantWesternTemplate,
  restaurantItalianTemplate,
  restaurantChineseTemplate,
  restaurantFrenchTemplate,
  restaurantSushiTemplate,
  restaurantRamenTemplate,
  restaurantBbqTemplate,
  restaurantVegetarianTemplate,
  restaurantFastfoodTemplate,
  // サービス業カテゴリ（10個）
  serviceClinicTemplate,
  serviceBeautyTemplate,
  educationSchoolTemplate,
  sportsGymTemplate,
  realEstateTemplate,
  serviceDentalTemplate,
  serviceLawTemplate,
  serviceAccountingTemplate,
  serviceInsuranceTemplate,
  serviceCleaningTemplate,
  // ポートフォリオカテゴリ（10個）
  portfolioFreelanceTemplate,
  portfolioDesignerTemplate,
  portfolioPhotographerTemplate,
  portfolioDeveloperTemplate,
  portfolioArtistTemplate,
  portfolioArchitectTemplate,
  portfolioWriterTemplate,
  portfolioMusicianTemplate,
  portfolioAgencyTemplate,
  portfolioConsultantTemplate
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