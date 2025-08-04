import Link from 'next/link'

export const metadata = {
  title: 'Note - 個人作業スペース',
  description: '個人作業用のツールやプロジェクトのコレクション',
}

interface NoteSection {
  title: string
  description: string
  href: string
  emoji: string
  color: string
  bgGradient: string
  tags: string[]
  status?: 'active' | 'beta' | 'new'
}

const noteSections: NoteSection[] = [
  {
    title: 'Webページテンプレート',
    description: '50種類以上のレスポンシブ対応Webテンプレート集。カフェ、レストラン、企業サイトなど様々なカテゴリーを網羅',
    href: '/note/webpage-temp',
    emoji: '💻',
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-indigo-50',
    tags: ['HTML', 'CSS', 'JavaScript', 'レスポンシブ'],
    status: 'active'
  },
  {
    title: 'ブラウザゲームコレクション',
    description: 'HTML5 Canvas APIで作成したミニゲーム集。テトリス、スネーク、2048などクラシックゲームをプレイ可能',
    href: '/note/game',
    emoji: '🎮',
    color: 'text-purple-600',
    bgGradient: 'from-purple-50 to-pink-50',
    tags: ['Canvas', 'ゲーム', 'インタラクティブ'],
    status: 'new'
  }
]

const upcomingSections = [
  {
    title: 'コードスニペット集',
    description: '実用的なコードスニペットとユーティリティ関数のライブラリ',
    emoji: '📝',
    color: 'text-green-600'
  },
  {
    title: 'デザインツール',
    description: 'カラーパレット生成やグラデーション作成ツール',
    emoji: '🎨',
    color: 'text-orange-600'
  },
  {
    title: 'パフォーマンス最適化',
    description: 'Webサイトのパフォーマンス測定と最適化ツール',
    emoji: '⚡',
    color: 'text-yellow-600'
  }
]

export default function NotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* ヘッダー */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
            <span className="text-lg">✨</span>
            <span className="text-sm font-medium text-indigo-700">個人作業スペース</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Note Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            開発中のツール、実験的なプロジェクト、学習用リソースなど、
            様々な個人プロジェクトを集めたスペースです
          </p>
        </div>

        {/* 現在公開中のセクション */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">📚</span>
            公開中のプロジェクト
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {noteSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-60`} />
                <div className="relative p-8 bg-white bg-opacity-90 backdrop-blur-sm">
                  {section.status && (
                    <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${
                      section.status === 'new' 
                        ? 'bg-green-100 text-green-700'
                        : section.status === 'beta'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {section.status === 'new' ? 'NEW' : section.status === 'beta' ? 'BETA' : 'ACTIVE'}
                    </span>
                  )}
                  
                  <div className="inline-flex p-3 rounded-xl bg-white shadow-md mb-4">
                    <span className="text-3xl">{section.emoji}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {section.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {section.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {section.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-indigo-600 font-medium group-hover:gap-3 transition-all">
                    <span>プロジェクトを見る</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 今後追加予定のセクション */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            開発予定のプロジェクト
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {upcomingSections.map((section) => (
              <div
                key={section.title}
                className="p-6 bg-white rounded-xl border-2 border-dashed border-gray-200 opacity-75"
              >
                <div className="inline-flex p-2 rounded-lg bg-gray-50 mb-3">
                  <span className="text-2xl">{section.emoji}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {section.description}
                </p>
                <div className="mt-4 text-xs text-gray-400 font-medium">
                  Coming Soon...
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* フッター情報 */}
        <div className="mt-16 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              このページは個人作業用のスペースです
            </p>
            <p className="text-xs text-gray-500">
              実験的な機能やツールが含まれている可能性があります
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}