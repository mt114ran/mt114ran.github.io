import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTemplateById, getTemplateIds } from '@/lib/templates'
import TemplateViewer from '@/components/templates/TemplateViewer'
import PreviewButtons from '@/components/templates/PreviewButtons'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function TemplateDetailPage(props: PageProps) {
  const { id } = await props.params
  const template = getTemplateById(id)

  if (!template) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto py-10 px-4">
        {/* ナビゲーション */}
        <nav className="mb-6 flex gap-4">
          <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
            ホーム
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/note/webpage-temp" className="text-blue-400 hover:text-blue-300 hover:underline">
            テンプレート一覧
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-400">{template.title}</span>
        </nav>

        {/* ヘッダー */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold">{template.title}</h1>
            <span className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
              {template.category}
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-4">{template.description}</p>
          
          {/* 機能リスト */}
          <div className="flex flex-wrap gap-2 mb-4">
            {template.features.map((feature, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm"
              >
                ✓ {feature}
              </span>
            ))}
          </div>

          {/* タグ */}
          <div className="flex flex-wrap gap-2 mb-6">
            {template.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-sm text-gray-500"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* アクションボタン */}
          <PreviewButtons templateId={id} />
        </div>

        {/* テンプレートビューア */}
        <TemplateViewer template={template} />

        {/* 使用方法 */}
        <div className="mt-12 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">使用方法</h2>
          <ol className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">1.</span>
              <span>上のタブからHTML、CSS、JavaScriptのコードをそれぞれコピーします。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">2.</span>
              <span>新しいHTMLファイルを作成し、HTMLコードを貼り付けます。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">3.</span>
              <span>CSSコードを&lt;style&gt;タグ内に貼り付けるか、別ファイルとして保存してリンクします。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">4.</span>
              <span>JavaScriptコードを&lt;script&gt;タグ内に貼り付けるか、別ファイルとして保存してリンクします。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">5.</span>
              <span>必要に応じて、テキストや画像、色などをカスタマイズしてご使用ください。</span>
            </li>
          </ol>
          <div className="mt-6 p-4 bg-blue-900/30 border border-blue-600 rounded">
            <p className="text-blue-400 mb-2">📚 初めての方へ</p>
            <p className="text-gray-300 text-sm">
              HTMLやCSSが初めての方は、
              <Link href="/note/webpage-temp/guide" className="text-blue-400 hover:text-blue-300 underline">
                初心者向けWeb制作学習ガイド
              </Link>
              をご覧ください。実際に手を動かしながら学べる詳しい手順を解説しています。
            </p>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="mt-8 bg-yellow-900/30 border border-yellow-600 rounded-lg p-6">
          <h3 className="text-yellow-400 font-bold mb-2">注意事項</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• このテンプレートは学習・参考用として提供されています。</li>
            <li>• 実際のプロジェクトで使用する際は、セキュリティやパフォーマンスの最適化を行ってください。</li>
            <li>• 画像やアイコンは実際のものに置き換えてご使用ください。</li>
            <li>• レスポンシブ対応していますが、実機でのテストを推奨します。</li>
          </ul>
        </div>

        {/* 戻るボタン */}
        <div className="mt-8 text-center">
          <Link 
            href="/note/webpage-temp"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            テンプレート一覧へ戻る
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const ids = getTemplateIds()
  return ids.map((id) => ({
    id
  }))
}