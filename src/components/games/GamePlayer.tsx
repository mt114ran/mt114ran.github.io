'use client'

import { useEffect } from 'react'
import TetrisGame from './TetrisGame'
import SnakeGame from './SnakeGame'
import Game2048 from './Game2048'

interface GamePlayerProps {
  gameId: string
}

export default function GamePlayer({ gameId }: GamePlayerProps) {
  useEffect(() => {
    // フルスクリーン用のスタイル適用
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.margin = ''
      document.body.style.padding = ''
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
      {gameId === 'tetris' && <TetrisGame />}
      {gameId === 'snake' && <SnakeGame />}
      {gameId === '2048' && <Game2048 />}
    </div>
  )
}