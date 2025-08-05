'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getSortedPostsDataWithContent } from '@/lib/posts'
import SearchBox from '@/components/SearchBox'

type Post = {
  slug: string
  id: number
  title: string
  create: string
  update?: string
  tags?: string[]
  content?: string
}

const POSTS_PER_PAGE = 20

export default function BlogSearchPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const posts = getSortedPostsDataWithContent()
    setAllPosts(posts)
    setFilteredPosts(posts)
    setIsLoading(false)
  }, [])
  
  // ページネーションの計算
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)
  
  const handleFilteredPosts = (posts: Post[]) => {
    setFilteredPosts(posts)
    // 検索結果が変わったら最初のページに戻る
    setCurrentPage(1)
  }
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <p className="text-gray-500">読み込み中...</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <nav className="mb-6">
        <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
          ← ホームへ戻る
        </Link>
      </nav>
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold">記事検索</h1>
          <p className="text-gray-500 text-sm mt-2">
            ページ {currentPage} / {totalPages} • 全{filteredPosts.length}件
          </p>
        </div>
        <Image 
          src="/favicon.png" 
          alt="ブログアイコン" 
          width={50} 
          height={50}
          className="rounded-lg"
        />
      </div>
      
      <SearchBox posts={allPosts} onFilteredPosts={handleFilteredPosts} />
      
      {currentPosts.length === 0 ? (
        <p className="text-gray-500">記事が見つかりません</p>
      ) : (
        <>
          <ul className="space-y-0">
            {currentPosts.map((post) => (
              <li key={post.slug} className="border-b border-gray-700 pb-4 mb-4 pt-2">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-blue-400 hover:text-blue-300 hover:underline text-lg font-semibold"
                >
                  <span className="text-green-600">#{post.id}</span> {post.title}
                </Link>
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
          
          {/* シンプルなページネーション */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm bg-gray-800 text-gray-300 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                前へ
              </button>
              
              <div className="flex space-x-1">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-3 py-2 text-sm rounded ${
                        currentPage === pageNum
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm bg-gray-800 text-gray-300 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                次へ
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}