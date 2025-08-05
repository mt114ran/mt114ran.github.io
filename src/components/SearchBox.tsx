'use client'

import { useState, useMemo } from 'react'

type Post = {
  slug: string
  id: number
  title: string
  create: string
  update?: string
  tags?: string[]
  content?: string
}

interface SearchBoxProps {
  posts: Post[]
  onFilteredPosts: (posts: Post[]) => void
}

export default function SearchBox({ posts, onFilteredPosts }: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) {
      return posts
    }

    const searchTermLower = searchTerm.toLowerCase()
    
    return posts.filter(post => {
      // タイトルで検索
      if (post.title.toLowerCase().includes(searchTermLower)) {
        return true
      }
      
      // タグで検索
      if (post.tags?.some(tag => tag.toLowerCase().includes(searchTermLower))) {
        return true
      }
      
      // コンテンツで検索（基本的な検索のみ）
      if (post.content && post.content.toLowerCase().includes(searchTermLower)) {
        return true
      }
      
      return false
    })
  }, [posts, searchTerm])

  // フィルタされた結果を親コンポーネントに通知
  useMemo(() => {
    onFilteredPosts(filteredPosts)
  }, [filteredPosts, onFilteredPosts])

  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="記事を検索（タイトル、タグ、内容）..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg 
            className="w-5 h-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
      </div>
      
      {searchTerm && (
        <div className="mt-2 text-sm text-gray-400">
          {filteredPosts.length}件の記事が見つかりました
        </div>
      )}
    </div>
  )
}