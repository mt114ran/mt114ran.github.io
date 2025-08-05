'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
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

// 静的データを直接importする代わりに、クライアントサイドで別の方法を使用
export default function BlogSearchPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // 静的サイトなので、プリビルドされたデータファイルを読み込む
    const loadStaticPosts = async () => {
      try {
        // postsディレクトリから直接読み込む代わりに、
        // 既存のページからデータを取得する
        const response = await fetch('/posts-data.json')
        if (response.ok) {
          const posts = await response.json()
          setAllPosts(posts)
          setFilteredPosts(posts)
        } else {
          // フォールバック: 他のページから取得したデータを使用
          // この場合は空の配列から開始
          setAllPosts([])
          setFilteredPosts([])
        }
        setIsLoading(false)
      } catch {
        // 静的サイトでは、最初は空の状態から開始
        console.warn('Failed to load posts data, starting with empty state')
        setAllPosts([])
        setFilteredPosts([])
        setIsLoading(false)
      }
    }
    
    loadStaticPosts()
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
            {isLoading ? '読み込み中...' : `ページ ${currentPage} / ${Math.max(totalPages, 1)} • 全${filteredPosts.length}件`}
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
      
      <div className="mb-6">
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
          <p className="text-yellow-300 text-sm">
            💡 <strong>検索機能について:</strong> この検索機能は静的サイトの制限により、
            現在は基本的な検索のみ対応しています。より高度な検索は通常のページ一覧をご利用ください。
          </p>
          <Link 
            href="/blog" 
            className="inline-block mt-2 text-blue-400 hover:text-blue-300 hover:underline text-sm"
          >
            → 記事一覧ページへ
          </Link>
        </div>
      </div>
      
      {!isLoading && allPosts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">検索機能の準備中です</p>
          <Link 
            href="/blog" 
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            記事一覧を見る
          </Link>
        </div>
      ) : (
        <>
          <SearchBox posts={allPosts} onFilteredPosts={handleFilteredPosts} />
          
          {currentPosts.length === 0 && !isLoading ? (
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
        </>
      )}
    </div>
  )
}