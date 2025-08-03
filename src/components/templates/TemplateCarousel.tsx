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
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

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
    setCurrentIndex(Math.min(index, maxIndex))
  }

  // タッチ/マウスイベントハンドラー
  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setTranslateX(0)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    setTranslateX(diff)
  }

  const handleEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    const threshold = 50 // スワイプと判定する最小距離
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        handlePrevious()
      } else {
        handleNext()
      }
    }
    setTranslateX(0)
  }

  // タッチイベント
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleEnd()
  }

  // マウスイベント（デスクトップでのドラッグ対応）
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault()
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd()
    }
  }

  // ドットの数を計算
  const dotCount = Math.max(1, Math.ceil((templates.length - visibleCards + 1) / 1))
  const activeDot = Math.min(currentIndex, dotCount - 1)

  // カード幅の計算（gap込み）
  const cardWidthPercent = 100 / visibleCards
  const gapWidth = visibleCards > 1 ? 24 : 0 // gapのピクセル数

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
      <div className="relative">
        <div 
          className="overflow-hidden px-2"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(calc(-${currentIndex * cardWidthPercent}% + ${translateX}px))`,
              gap: `${gapWidth}px`,
              marginLeft: '-8px',
              marginRight: '-8px'
            }}
          >
            {templates.map(template => (
              <div 
                key={template.id}
                className="flex-shrink-0 px-2"
                style={{ 
                  width: `${cardWidthPercent}%`,
                }}
              >
                <TemplateCard template={template} />
              </div>
            ))}
          </div>
        </div>

        {/* ナビゲーションボタン（デスクトップのみ） */}
        {templates.length > visibleCards && visibleCards > 1 && (
          <>
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition-opacity z-10 hidden md:block ${
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
              className={`absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition-opacity z-10 hidden md:block ${
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
      </div>

      {/* ドットインジケーター */}
      {templates.length > visibleCards && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: dotCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeDot 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`ページ ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* モバイルでのスワイプヒント */}
      {visibleCards === 1 && templates.length > 1 && (
        <div className="text-center mt-4 text-sm text-gray-500 md:hidden">
          左右にスワイプしてください
        </div>
      )}
    </div>
  )
}