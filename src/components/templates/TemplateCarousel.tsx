'use client'

import { useState, useRef, useEffect } from 'react'
import { WebTemplate } from '@/lib/templates/types'
import TemplateCard from './TemplateCard'

interface TemplateCarouselProps {
  templates: WebTemplate[]
  category: string
}

export default function TemplateCarousel({ templates, category }: TemplateCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  const maxIndex = Math.max(0, templates.length - visibleCards)

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  // ドットの数を計算
  const dotCount = Math.ceil(templates.length / visibleCards)
  const activeDot = Math.floor(currentIndex / visibleCards)

  return (
    <div className="relative">
      {/* カテゴリーヘッダー */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 pb-2 border-b-2 border-blue-500">
          {category}
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {templates.length}個のテンプレート
          </span>
        </div>
      </div>

      {/* カルーセルコンテナ */}
      <div className="relative overflow-hidden" ref={containerRef}>
        <div 
          className="flex transition-transform duration-300 ease-in-out gap-6"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` 
          }}
        >
          {templates.map(template => (
            <div 
              key={template.id}
              className="flex-shrink-0"
              style={{ width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 24 / visibleCards}px)` }}
            >
              <TemplateCard template={template} />
            </div>
          ))}
        </div>
      </div>

      {/* ナビゲーションボタン */}
      {templates.length > visibleCards && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition-opacity ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            aria-label="前へ"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition-opacity ${
              currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            aria-label="次へ"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* ドットインジケーター */}
      {templates.length > visibleCards && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: dotCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index * visibleCards)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeDot 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`ページ ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}