import Link from 'next/link'
import { WebTemplate } from '@/lib/templates/types'

interface TemplateCardProps {
  template: WebTemplate
}

/**
 * テンプレートカードコンポーネント
 */
export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link 
      href={`/note/webpage-temp/${template.id}`}
      className="block group"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-600">
          <div className="text-center">
            <div className="text-4xl mb-2">🌐</div>
            <div className="text-sm">{template.title}</div>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {template.title}
            </h3>
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
              {template.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {template.description}
          </p>
          <div className="flex flex-wrap gap-1 mb-3">
            {template.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
              >
                {feature}
              </span>
            ))}
            {template.features.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                +{template.features.length - 3}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {template.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs text-gray-500"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <span className="text-blue-600 text-sm group-hover:underline">
              詳細を見る →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}