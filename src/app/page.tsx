import Link from 'next/link'
import Image from 'next/image'
import { getSortedPostsData } from '@/lib/posts'
import HomeTabs from '@/components/HomeTabs'

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-4xl font-bold">maita tomoya dev io</h1>
        <Image 
          src="/favicon.png" 
          alt="ブログアイコン" 
          width={60} 
          height={60}
          className="rounded-lg"
        />
      </div>
      <p className="text-gray-300 mb-8">
        技術記事や学習記録を掲載しています。
      </p>
      
      <HomeTabs posts={posts} />
    </main>
  )
}