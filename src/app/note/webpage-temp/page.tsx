import Link from 'next/link'
import { getAllTemplates } from '@/lib/templates'
import TemplateCard from '@/components/templates/TemplateCard'
import { TEMPLATE_CATEGORIES } from '@/lib/templates/types'

export default function WebPageTemplatesPage() {
  const templates = getAllTemplates()
  
  // カテゴリー別にテンプレートをグループ化
  const templatesByCategory = Object.values(TEMPLATE_CATEGORIES).map(category => ({
    category,
    templates: templates.filter(t => t.category === category)
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-10 px-4">
        {/* ヘッダー */}
        <div className="mb-10">
          <nav className="mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-700 hover:underline">
              ← ホームへ戻る
            </Link>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Webページテンプレート集
          </h1>
          <p className="text-lg text-gray-600">
            カフェや小規模ビジネス向けの美しいWebサイトテンプレートをご覧いただけます。
            各テンプレートはレスポンシブ対応で、すぐに使えるHTML/CSS/JavaScriptコードが含まれています。
          </p>
        </div>

        {/* 統計情報 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-blue-600">{templates.length}</div>
            <div className="text-sm text-gray-600">テンプレート数</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-green-600">
              {Object.keys(TEMPLATE_CATEGORIES).length}
            </div>
            <div className="text-sm text-gray-600">カテゴリー</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-600">レスポンシブ対応</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-orange-600">無料</div>
            <div className="text-sm text-gray-600">ダウンロード</div>
          </div>
        </div>

        {/* カテゴリー別テンプレート表示 */}
        {templatesByCategory.map(({ category, templates: categoryTemplates }) => (
          categoryTemplates.length > 0 && (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTemplates.map(template => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            </div>
          )
        ))}

        {/* フッター */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              これらのテンプレートは学習目的で作成されています。
            </p>
            <p>
              実際のプロジェクトで使用する際は、必要に応じてカスタマイズしてください。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}