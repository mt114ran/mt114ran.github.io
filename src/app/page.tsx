import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">maita tomoya dev io</h1>
      <p className="text-gray-600 mb-8">
        技術記事や学習記録を掲載しています。
      </p>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">記事一覧</h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="border-b pb-4">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline text-lg">
                {post.title}
              </Link>
              <p className="text-gray-500 text-sm mt-1">
                {post.update ? `作成日: ${post.create}、更新日: ${post.update}` : `作成日: ${post.create}`}
              </p>
              {post.tags && post.tags.length > 0 && (
                <p className="text-gray-500 text-sm">
                  Tags: {post.tags.join(', ')}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
