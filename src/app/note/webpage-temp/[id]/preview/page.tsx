'use client'

import { notFound } from 'next/navigation'
import { getTemplateById } from '@/lib/templates'
import Link from 'next/link'
import { use } from 'react'

interface Props {
  params: Promise<{
    id: string
  }>
}

export default function TemplatePreviewPage({ params }: Props) {
  const resolvedParams = use(params)
  const template = getTemplateById(resolvedParams.id)

  if (!template) {
    notFound()
  }

  // HTMLにCSSとJSを埋め込んだ完全なHTMLを生成
  const fullHtml = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.title} - プレビュー</title>
    <style>
        ${template.code.css}
    </style>
</head>
${template.code.html.replace(/<\/?html[^>]*>/g, '').replace(/<head>[\s\S]*?<\/head>/g, '').replace(/<\/?body[^>]*>/g, '')}
<script>
    ${template.code.js}
</script>
</html>
  `.trim()

  return (
    <div className="min-h-screen flex flex-col">
      {/* プレビューヘッダー */}
      <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href={`/note/webpage-temp/${resolvedParams.id}`}
            className="text-gray-300 hover:text-white transition-colors"
          >
            ← 戻る
          </Link>
          <h1 className="text-lg font-semibold">{template.title} - プレビュー</h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.open(`/note/webpage-temp/${resolvedParams.id}/preview`, '_blank')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors text-sm"
          >
            新しいタブで開く
          </button>
          <Link
            href={`/note/webpage-temp/${resolvedParams.id}`}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-sm"
          >
            コードを見る
          </Link>
        </div>
      </div>

      {/* プレビューエリア */}
      <div className="flex-1 bg-white">
        <iframe
          srcDoc={fullHtml}
          className="w-full h-full"
          style={{ minHeight: 'calc(100vh - 72px)' }}
          title={`${template.title} プレビュー`}
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      </div>
    </div>
  )
}

