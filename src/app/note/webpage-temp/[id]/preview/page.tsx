'use client'

import { notFound } from 'next/navigation'
import { getTemplateById } from '@/lib/templates'
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

  // HTMLから必要な要素を抽出
  const htmlDoc = template.code.html
  
  // headタグ内のscriptタグを抽出（CDNなど）
  const headScripts = htmlDoc.match(/<head>[\s\S]*?<\/head>/)?.[0]
    ?.match(/<script[^>]*>[\s\S]*?<\/script>/g)?.join('\n') || ''
  
  // bodyタグ内のコンテンツを抽出
  const bodyContent = htmlDoc
    .replace(/<\/?html[^>]*>/g, '')
    .replace(/<head>[\s\S]*?<\/head>/g, '')
    .replace(/<\/?body[^>]*>/g, '')
  
  // HTMLにCSSとJSを埋め込んだ完全なHTMLを生成
  const fullHtml = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.title}</title>
    ${headScripts}
    <style>
        ${template.code.css}
    </style>
</head>
<body>
${bodyContent}
<script>
    ${template.code.js}
</script>
</body>
</html>
  `.trim()

  return (
    <iframe
      srcDoc={fullHtml}
      className="w-full h-screen"
      title={template.title}
      sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"
    />
  )
}

