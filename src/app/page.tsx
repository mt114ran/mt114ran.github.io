'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-gray-600 mb-6">
        技術記事や学習記録を掲載しています。以下から投稿をご覧ください。
      </p>
      <Link href="/blog/first-post" className="text-blue-500 underline">
        👉 最初の投稿はこちら
      </Link>
    </main>
  )
}
