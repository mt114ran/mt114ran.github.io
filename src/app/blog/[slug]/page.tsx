import { getAllPostSlugs, getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// 各記事の詳細ページのviewファイルです。

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPostPage(props: any) {
  const { slug } = await Promise.resolve(props.params)
  const post = await getPostData(slug).catch(() => null)

  if (!post) notFound()

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{post.date}</p>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <Link href="/blog" className="text-blue-600 hover:underline">
        ← 一覧に戻る
      </Link>
    </div>
  )
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(({ slug }) => ({ slug }))
}
