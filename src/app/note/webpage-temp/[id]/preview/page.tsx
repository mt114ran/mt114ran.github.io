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

  // HTMLにCSSとJSを埋め込んだ完全なHTMLを生成
  const fullHtml = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.title}</title>
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
    <iframe
      srcDoc={fullHtml}
      className="w-full h-screen"
      title={template.title}
      sandbox="allow-scripts allow-same-origin allow-forms"
    />
  )
}

