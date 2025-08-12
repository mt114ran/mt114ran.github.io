import { getAllPostSlugs, getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ScrollToTopButton from '@/components/ScrollToTopButton'

// 各記事の詳細ページのviewファイルです。

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPostPage(props: any) {
  const { slug } = await Promise.resolve(props.params)
  const post = await getPostData(slug).catch(() => null)

  if (!post) notFound()

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-green-600">#{post.id}</span> {post.title}
      </h1>
      <ul className="list-none border-b border-gray-600 pb-4 mb-6">
        {post.create && (
          <li className="text-gray-500 text-sm">
            作成日時: {post.create}
          </li>
        )}
        {/* 更新日が存在する場合は表示する。存在しない場合は表示しない。 */}
        {post.update && (
          <li className="text-gray-500 text-sm">
            更新日時: {post.update}
          </li>
        )}
        {/* タグが存在する場合は表示する。存在しない場合は表示しない。 */}
        {post.tags && post.tags.length > 0 && (
          <li className="flex flex-wrap gap-2 mt-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                {tag}
              </span>
            ))}
          </li>
        )}
      </ul>
      <nav className="mb-6 pb-4 border-b border-gray-700 flex justify-between">
        <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
          ← ホームへ
        </Link>
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 hover:underline">
          記事一覧へ →
        </Link>
      </nav>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <nav className="mt-8 pt-4 border-t border-gray-700 flex justify-between">
        <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
          ← ホームへ
        </Link>
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 hover:underline">
          記事一覧へ →
        </Link>
      </nav>
      <ScrollToTopButton />
    </div>
  )
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(({ slug }) => ({ slug }))
}
