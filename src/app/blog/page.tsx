import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function BlogIndex() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
