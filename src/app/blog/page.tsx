import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

// 記事一覧ページのviewファイル

export default function BlogIndex() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">maita tomoya dev io</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
            {/* 作成日と更新日を表示する。更新日はない場合は作成日だけを表示する。 */}
            <p className="text-gray-500 text-sm">
              {post.update ? `作成日: ${post.create}、更新日: ${post.update}` : `作成日: ${post.create}`}
            </p>
            {post.tags && post.tags.length > 0 && (
              <p className="text-gray-500 text-sm">
                {/* tagsの配列を表示する */}
                Tags: {post.tags.join(', ')}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
