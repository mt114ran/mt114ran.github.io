'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'

type TabType = 'latest' | 'personal' | 'private'

type Post = {
  slug: string
  id: number
  title: string
  create: string
  update?: string
  tags?: string[]
}

interface HomeTabsProps {
  posts: Post[]
}

export default function HomeTabs({ posts }: HomeTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('latest')

  // タグに基づいて記事をフィルタリング
  const filteredPosts = useMemo(() => {
    switch (activeTab) {
      case 'personal':
        return posts.filter(post => 
          post.tags?.some(tag => tag.toLowerCase() === '個人作業用')
        )
      case 'private':
        return posts.filter(post => 
          post.tags?.some(tag => tag.toLowerCase() === 'プライベート')
        )
      case 'latest':
      default:
        return posts
    }
  }, [posts, activeTab])

  const tabConfig = [
    { id: 'latest' as TabType, label: '最新記事', count: posts.length },
    { id: 'personal' as TabType, label: '個人作業用', count: posts.filter(p => p.tags?.some(t => t.toLowerCase() === '個人作業用')).length },
    { id: 'private' as TabType, label: 'プライベート', count: posts.filter(p => p.tags?.some(t => t.toLowerCase() === 'プライベート')).length },
  ]

  return (
    <section>
      {/* タブナビゲーション */}
      <div className="border-b border-gray-700 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabConfig.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-2 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }
              `}
            >
              {tab.label}
              <span className="ml-2 text-xs text-gray-500">
                ({tab.count})
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* タブコンテンツ */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">
            {activeTab === 'latest' && '最新記事'}
            {activeTab === 'personal' && '個人作業用'}
            {activeTab === 'private' && 'プライベート'}
          </h2>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">
            すべての記事を見る →
          </Link>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-gray-500 py-8 text-center">
            このカテゴリーの記事はまだありません。
          </div>
        ) : (
          <ul className="space-y-4">
            {filteredPosts.map((post) => (
              <li key={post.slug} className="border-b border-gray-700 pb-4">
                <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-300 hover:underline text-lg">
                  <span className="text-green-600">#{post.id}</span> {post.title}
                </Link>
                <p className="text-gray-500 text-sm mt-1">
                  {post.update ? `作成日時: ${post.create}、更新日時: ${post.update}` : `作成日時: ${post.create}`}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className={`px-2 py-1 rounded text-xs ${
                          (tag === '個人作業用' && activeTab === 'personal') ||
                          (tag === 'プライベート' && activeTab === 'private')
                            ? 'bg-blue-900 text-blue-300'
                            : 'bg-gray-800 text-gray-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}