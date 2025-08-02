import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">maita tomoya dev io</h1>
      <p className="text-gray-300 mb-8">
        技術記事や学習記録を掲載しています。
      </p>
      
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">最新記事</h2>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">
            すべての記事を見る →
          </Link>
        </div>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-gray-700 pb-4">
              <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-300 hover:underline text-lg">
                <span className="text-gray-600">#{post.id}</span> {post.title}
              </Link>
              <p className="text-gray-500 text-sm mt-1">
                {post.update ? `作成日時: ${post.create}、更新日時: ${post.update}` : `作成日時: ${post.create}`}
              </p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
