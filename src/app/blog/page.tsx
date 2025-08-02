import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

// 記事一覧ページのviewファイル

export default function BlogIndex() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <nav className="mb-6">
        <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
          ← ホームへ戻る
        </Link>
      </nav>
      <h1 className="text-3xl font-bold mb-6">記事一覧</h1>
      <ul className="space-y-0">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-gray-700 pb-4 mb-4">
            <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-300 hover:underline text-lg font-semibold">
              <span className="text-gray-600">#{post.id}</span> {post.title}
            </Link>
            {/* 作成日と更新日を表示する。更新日はない場合は作成日だけを表示する。 */}
            <p className="text-gray-500 text-sm mt-1">
              {post.update ? `作成日時: ${post.create}、更新日時: ${post.update}` : `作成日時: ${post.create}`}
            </p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
