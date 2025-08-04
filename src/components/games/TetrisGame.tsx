'use client'

import { useEffect, useRef, useState } from 'react'

const BOARD_WIDTH = 10
const BOARD_HEIGHT = 20
const BLOCK_SIZE = 30

const TETROMINOS = {
  I: { shape: [[1,1,1,1]], color: '#00f0f0' },
  O: { shape: [[1,1],[1,1]], color: '#f0f000' },
  T: { shape: [[0,1,0],[1,1,1]], color: '#a000f0' },
  S: { shape: [[0,1,1],[1,1,0]], color: '#00f000' },
  Z: { shape: [[1,1,0],[0,1,1]], color: '#f00000' },
  J: { shape: [[1,0,0],[1,1,1]], color: '#0000f0' },
  L: { shape: [[0,0,1],[1,1,1]], color: '#f0a000' }
}

export default function TetrisGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [lines, setLines] = useState(0)
  const [level, setLevel] = useState(1)
  const [gameOver, setGameOver] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  
  const boardRef = useRef<number[][]>([])
  const currentPieceRef = useRef<any>(null)
  const animationIdRef = useRef<number>(0)
  const dropCounterRef = useRef(0)
  const lastTimeRef = useRef(0)

  // ボード初期化
  const initBoard = () => {
    boardRef.current = Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0))
  }

  // ランダムなテトロミノを生成
  const randomTetromino = () => {
    const pieces = Object.keys(TETROMINOS)
    const piece = pieces[Math.floor(Math.random() * pieces.length)]
    const tetromino = TETROMINOS[piece as keyof typeof TETROMINOS]
    return {
      shape: tetromino.shape,
      color: tetromino.color,
      x: Math.floor(BOARD_WIDTH / 2) - Math.floor(tetromino.shape[0].length / 2),
      y: 0
    }
  }

  // 衝突判定
  const collision = (piece: any, board: number[][], offsetX = 0, offsetY = 0) => {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x]) {
          const newX = piece.x + x + offsetX
          const newY = piece.y + y + offsetY
          
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
            return true
          }
          
          if (newY >= 0 && board[newY][newX]) {
            return true
          }
        }
      }
    }
    return false
  }

  // ピースを固定
  const merge = (piece: any, board: number[][]) => {
    piece.shape.forEach((row: number[], y: number) => {
      row.forEach((value: number, x: number) => {
        if (value) {
          if (piece.y + y >= 0) {
            board[piece.y + y][piece.x + x] = piece.color
          }
        }
      })
    })
  }

  // ライン消去
  const clearLines = () => {
    let linesCleared = 0
    outer: for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (!boardRef.current[y][x]) {
          continue outer
        }
      }
      boardRef.current.splice(y, 1)
      boardRef.current.unshift(Array(BOARD_WIDTH).fill(0))
      linesCleared++
      y++
    }
    
    if (linesCleared > 0) {
      setLines(prev => prev + linesCleared)
      setScore(prev => prev + linesCleared * 100 * level)
      setLevel(prev => Math.floor((lines + linesCleared) / 10) + 1)
    }
  }

  // ピースを回転
  const rotate = (piece: any) => {
    const rotated = piece.shape[0].map((_: any, i: number) =>
      piece.shape.map((row: number[]) => row[i]).reverse()
    )
    
    const rotatedPiece = { ...piece, shape: rotated }
    if (!collision(rotatedPiece, boardRef.current)) {
      piece.shape = rotated
    }
  }

  // 描画
  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // 背景
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // グリッド線
    ctx.strokeStyle = '#333'
    ctx.lineWidth = 0.5
    for (let i = 0; i <= BOARD_WIDTH; i++) {
      ctx.beginPath()
      ctx.moveTo(i * BLOCK_SIZE, 0)
      ctx.lineTo(i * BLOCK_SIZE, BOARD_HEIGHT * BLOCK_SIZE)
      ctx.stroke()
    }
    for (let i = 0; i <= BOARD_HEIGHT; i++) {
      ctx.beginPath()
      ctx.moveTo(0, i * BLOCK_SIZE)
      ctx.lineTo(BOARD_WIDTH * BLOCK_SIZE, i * BLOCK_SIZE)
      ctx.stroke()
    }
    
    // ボードの描画
    boardRef.current.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          ctx.fillStyle = String(value)
          ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1)
        }
      })
    })
    
    // 現在のピース
    if (currentPieceRef.current && !gameOver) {
      currentPieceRef.current.shape.forEach((row: number[], y: number) => {
        row.forEach((value: number, x: number) => {
          if (value) {
            ctx.fillStyle = currentPieceRef.current.color
            ctx.fillRect(
              (currentPieceRef.current.x + x) * BLOCK_SIZE,
              (currentPieceRef.current.y + y) * BLOCK_SIZE,
              BLOCK_SIZE - 1,
              BLOCK_SIZE - 1
            )
          }
        })
      })
    }
  }

  // ゲームループ
  const gameLoop = (time = 0) => {
    if (gameOver || isPaused) return
    
    const deltaTime = time - lastTimeRef.current
    lastTimeRef.current = time
    dropCounterRef.current += deltaTime
    
    const dropInterval = Math.max(100, 1000 - (level - 1) * 100)
    
    if (dropCounterRef.current > dropInterval) {
      if (currentPieceRef.current) {
        if (!collision(currentPieceRef.current, boardRef.current, 0, 1)) {
          currentPieceRef.current.y++
        } else {
          merge(currentPieceRef.current, boardRef.current)
          clearLines()
          currentPieceRef.current = randomTetromino()
          
          if (collision(currentPieceRef.current, boardRef.current)) {
            setGameOver(true)
            return
          }
        }
      }
      dropCounterRef.current = 0
    }
    
    draw()
    animationIdRef.current = requestAnimationFrame(gameLoop)
  }

  // キーボード操作
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver) return
      
      if (e.key === 'Escape') {
        setIsPaused(prev => !prev)
        if (!isPaused) {
          animationIdRef.current = requestAnimationFrame(gameLoop)
        }
        return
      }
      
      if (isPaused) return
      
      if (!currentPieceRef.current) return
      
      switch (e.key) {
        case 'ArrowLeft':
          if (!collision(currentPieceRef.current, boardRef.current, -1, 0)) {
            currentPieceRef.current.x--
          }
          break
        case 'ArrowRight':
          if (!collision(currentPieceRef.current, boardRef.current, 1, 0)) {
            currentPieceRef.current.x++
          }
          break
        case 'ArrowDown':
          if (!collision(currentPieceRef.current, boardRef.current, 0, 1)) {
            currentPieceRef.current.y++
            setScore(prev => prev + 1)
          }
          break
        case 'ArrowUp':
          rotate(currentPieceRef.current)
          break
        case ' ':
          while (!collision(currentPieceRef.current, boardRef.current, 0, 1)) {
            currentPieceRef.current.y++
            setScore(prev => prev + 2)
          }
          break
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [gameOver, isPaused, level])

  // 初期化
  useEffect(() => {
    initBoard()
    currentPieceRef.current = randomTetromino()
    animationIdRef.current = requestAnimationFrame(gameLoop)
    
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [])

  // リスタート
  const restart = () => {
    initBoard()
    currentPieceRef.current = randomTetromino()
    setScore(0)
    setLines(0)
    setLevel(1)
    setGameOver(false)
    setIsPaused(false)
    dropCounterRef.current = 0
    lastTimeRef.current = 0
    animationIdRef.current = requestAnimationFrame(gameLoop)
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-4">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={BOARD_WIDTH * BLOCK_SIZE}
          height={BOARD_HEIGHT * BLOCK_SIZE}
          className="border-2 border-gray-600"
        />
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-4">GAME OVER</h2>
              <button
                onClick={restart}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold"
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
        <h1 className="text-3xl font-bold mb-4">TETRIS</h1>
        <div className="space-y-2 mb-6">
          <div className="text-xl">スコア: {score}</div>
          <div className="text-xl">ライン: {lines}</div>
          <div className="text-xl">レベル: {level}</div>
        </div>
        
        <div className="space-y-2 text-sm">
          <h3 className="font-bold text-lg mb-2">操作方法</h3>
          <div>← → : 移動</div>
          <div>↑ : 回転</div>
          <div>↓ : 落下</div>
          <div>スペース : 即落下</div>
          <div>ESC : 一時停止</div>
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