'use client'

import { getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

const MermaidRenderer = dynamic(() => import('@/components/MermaidRenderer'), {
  ssr: false
})

type Props = {
  slug: string
  postData: Awaited<ReturnType<typeof getPostData>>
}

export default function PostPageContent({ postData }: Props) {
  useEffect(() => {
    // Mermaidを動的にインポートして初期化
    import('mermaid').then((mermaid) => {
      mermaid.default.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        themeVariables: {
          primaryColor: '#e1f5fe',
          primaryTextColor: '#000',
          primaryBorderColor: '#0066cc',
          lineColor: '#5a5a5a',
          secondaryColor: '#fff3e0',
          tertiaryColor: '#f3e5f5'
        }
      })
      mermaid.default.contentLoaded()
    })
  }, [])

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{postData.create}</p>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
      <MermaidRenderer />
    </div>
  )
}
