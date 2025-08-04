'use client'

import { useEffect, useRef, useState } from 'react'

const GRID_SIZE = 20
const CELL_SIZE = 20
const INITIAL_SPEED = 150

interface Position {
  x: number
  y: number
}

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  
  const snakeRef = useRef<Position[]>([{ x: 10, y: 10 }])
  const directionRef = useRef<Position>({ x: 1, y: 0 })
  const foodRef = useRef<Position>({ x: 15, y: 15 })
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null)
  const speedRef = useRef(INITIAL_SPEED)

  // 食べ物の生成
  const generateFood = () => {
    let newFood: Position
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      }
    } while (snakeRef.current.some(segment => segment.x === newFood.x && segment.y === newFood.y))
    
    foodRef.current = newFood
  }

  // 描画
  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // 背景
    ctx.fillStyle = '#111'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // グリッド
    ctx.strokeStyle = '#222'
    ctx.lineWidth = 0.5
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath()
      ctx.moveTo(i * CELL_SIZE, 0)
      ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.moveTo(0, i * CELL_SIZE)
      ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE)
      ctx.stroke()
    }
    
    // 食べ物
    ctx.fillStyle = '#ff0000'
    ctx.fillRect(
      foodRef.current.x * CELL_SIZE + 2,
      foodRef.current.y * CELL_SIZE + 2,
      CELL_SIZE - 4,
      CELL_SIZE - 4
    )
    
    // スネーク
    snakeRef.current.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? '#00ff00' : '#00aa00'
      ctx.fillRect(
        segment.x * CELL_SIZE + 1,
        segment.y * CELL_SIZE + 1,
        CELL_SIZE - 2,
        CELL_SIZE - 2
      )
    })
  }

  // ゲームロジック
  const update = () => {
    if (gameOver || isPaused) return
    
    const head = { ...snakeRef.current[0] }
    head.x += directionRef.current.x
    head.y += directionRef.current.y
    
    // 壁との衝突判定
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      setGameOver(true)
      return
    }
    
    // 自己衝突判定
    if (snakeRef.current.some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true)
      return
    }
    
    snakeRef.current.unshift(head)
    
    // 食べ物を食べた場合
    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      setScore(prev => {
        const newScore = prev + 10
        if (newScore > highScore) {
          setHighScore(newScore)
        }
        // スピードアップ
        if (newScore % 50 === 0) {
          speedRef.current = Math.max(50, speedRef.current - 20)
        }
        return newScore
      })
      generateFood()
    } else {
      snakeRef.current.pop()
    }
    
    draw()
  }

  // ゲームループ
  const startGameLoop = () => {
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current)
    }
    gameLoopRef.current = setInterval(update, speedRef.current)
  }

  // キーボード操作
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPaused(prev => !prev)
        return
      }
      
      if (gameOver || isPaused) return
      
      const newDirection = { ...directionRef.current }
      
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (directionRef.current.y === 0) {
            newDirection.x = 0
            newDirection.y = -1
          }
          break
        case 'ArrowDown':
        case 's':
        case 'S':
          if (directionRef.current.y === 0) {
            newDirection.x = 0
            newDirection.y = 1
          }
          break
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (directionRef.current.x === 0) {
            newDirection.x = -1
            newDirection.y = 0
          }
          break
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (directionRef.current.x === 0) {
            newDirection.x = 1
            newDirection.y = 0
          }
          break
      }
      
      directionRef.current = newDirection
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [gameOver, isPaused, highScore])

  // タッチ操作
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    let touchStartX = 0
    let touchStartY = 0
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (gameOver || isPaused) return
      
      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY
      
      const deltaX = touchEndX - touchStartX
      const deltaY = touchEndY - touchStartY
      
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0 && directionRef.current.x === 0) {
          directionRef.current = { x: 1, y: 0 }
        } else if (deltaX < 0 && directionRef.current.x === 0) {
          directionRef.current = { x: -1, y: 0 }
        }
      } else {
        if (deltaY > 0 && directionRef.current.y === 0) {
          directionRef.current = { x: 0, y: 1 }
        } else if (deltaY < 0 && directionRef.current.y === 0) {
          directionRef.current = { x: 0, y: -1 }
        }
      }
    }
    
    canvas.addEventListener('touchstart', handleTouchStart)
    canvas.addEventListener('touchend', handleTouchEnd)
    
    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [gameOver, isPaused])

  // 初期化
  useEffect(() => {
    draw()
    startGameLoop()
    
    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current)
      }
    }
  }, [])

  // ゲームループの更新
  useEffect(() => {
    if (!gameOver && !isPaused) {
      startGameLoop()
    } else if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current)
    }
  }, [gameOver, isPaused, speedRef.current])

  // リスタート
  const restart = () => {
    snakeRef.current = [{ x: 10, y: 10 }]
    directionRef.current = { x: 1, y: 0 }
    generateFood()
    setScore(0)
    setGameOver(false)
    setIsPaused(false)
    speedRef.current = INITIAL_SPEED
    startGameLoop()
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-4">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={GRID_SIZE * CELL_SIZE}
          height={GRID_SIZE * CELL_SIZE}
          className="border-2 border-gray-600 touch-none"
        />
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-4">GAME OVER</h2>
              <p className="text-xl mb-4">スコア: {score}</p>
              <button
                onClick={restart}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded text-white font-bold"
              >
                もう一度プレイ
              </button>
            </div>
          </div>
        )}
        {isPaused && !gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-3xl font-bold">PAUSED</div>
          </div>
        )}
      </div>
      
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-4">SNAKE</h1>
        <div className="space-y-2 mb-6">
          <div className="text-xl">スコア: {score}</div>
          <div className="text-xl">ハイスコア: {highScore}</div>
          <div className="text-xl">スピード: {Math.floor((INITIAL_SPEED - speedRef.current) / 20) + 1}</div>
        </div>
        
        <div className="space-y-2 text-sm">
          <h3 className="font-bold text-lg mb-2">操作方法</h3>
          <div>↑↓←→ / WASD : 方向転換</div>
          <div>ESC : 一時停止</div>
          <div className="mt-2 text-gray-400">モバイル: スワイプで操作</div>
        </div>
        
        {!gameOver && (
          <button
            onClick={() => setIsPaused(prev => !prev)}
            className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white"
          >
            {isPaused ? '再開' : '一時停止'}
          </button>
        )}
      </div>
    </div>
  )
}