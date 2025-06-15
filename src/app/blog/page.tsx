import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default async function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">ブログ記事一覧</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
