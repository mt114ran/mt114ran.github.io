import { WebTemplate } from './types'
import { cafeModernTemplate } from './data/cafe-modern'
import { cafeVintageTemplate } from './data/cafe-vintage'
import { cafeMinimalTemplate } from './data/cafe-minimal'
import { cafeOrganicTemplate } from './data/cafe-organic'
import { retailFashionTemplate } from './data/retail-fashion'
import { retailGeneralTemplate } from './data/retail-general'
import { restaurantJapaneseTemplate } from './data/restaurant-japanese'
import { restaurantWesternTemplate } from './data/restaurant-western'
import { restaurantItalianTemplate } from './data/restaurant-italian'
import { serviceClinicTemplate } from './data/service-clinic'
import { serviceBeautyTemplate } from './data/service-beauty'
import { portfolioFreelanceTemplate } from './data/portfolio-freelance'
import { educationSchoolTemplate } from './data/education-school'
import { sportsGymTemplate } from './data/sports-gym'
import { realEstateTemplate } from './data/real-estate'
import { hotelLuxuryTemplate } from './data/hotel-luxury'
import { hotelBusinessTemplate } from './data/hotel-business'
import { hotelResortTemplate } from './data/hotel-resort'
import { itStartupTemplate } from './data/it-startup'
import { itCorporateTemplate } from './data/it-corporate'
import { itSaasTemplate } from './data/it-saas'
import { medicalHospitalTemplate } from './data/medical-hospital'
import { medicalDentalTemplate } from './data/medical-dental'
import { medicalPharmacyTemplate } from './data/medical-pharmacy'
import { eventConferenceTemplate } from './data/event-conference'
import { eventWeddingTemplate } from './data/event-wedding'
import { eventFestivalTemplate } from './data/event-festival'
import { mediaNewsTemplate } from './data/media-news'
import { mediaMagazineTemplate } from './data/media-magazine'

/**
 * すべてのテンプレートデータ
 */
export const templates: WebTemplate[] = [
  cafeModernTemplate,
  cafeVintageTemplate,
  cafeMinimalTemplate,
  cafeOrganicTemplate,
  retailFashionTemplate,
  retailGeneralTemplate,
  restaurantJapaneseTemplate,
  restaurantWesternTemplate,
  restaurantItalianTemplate,
  serviceClinicTemplate,
  serviceBeautyTemplate,
  portfolioFreelanceTemplate,
  educationSchoolTemplate,
  sportsGymTemplate,
  realEstateTemplate,
  hotelLuxuryTemplate,
  hotelBusinessTemplate,
  hotelResortTemplate,
  itStartupTemplate,
  itCorporateTemplate,
  itSaasTemplate,
  medicalHospitalTemplate,
  medicalDentalTemplate,
  medicalPharmacyTemplate,
  eventConferenceTemplate,
  eventWeddingTemplate,
  eventFestivalTemplate,
  mediaNewsTemplate,
  mediaMagazineTemplate
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