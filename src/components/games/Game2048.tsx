'use client'

import { useEffect, useRef, useState } from 'react'

const GRID_SIZE = 4
const CELL_SIZE = 100
const CELL_GAP = 10

export default function Game2048() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  
  const gridRef = useRef<number[][]>(Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0)))
  const previousGridRef = useRef<number[][]>([])
  const previousScoreRef = useRef(0)

  // 色の定義
  const getColor = (value: number) => {
    const colors: { [key: number]: { bg: string, text: string } } = {
      0: { bg: '#cdc1b4', text: '#776e65' },
      2: { bg: '#eee4da', text: '#776e65' },
      4: { bg: '#ede0c8', text: '#776e65' },
      8: { bg: '#f2b179', text: '#f9f6f2' },
      16: { bg: '#f59563', text: '#f9f6f2' },
      32: { bg: '#f67c5f', text: '#f9f6f2' },
      64: { bg: '#f65e3b', text: '#f9f6f2' },
      128: { bg: '#edcf72', text: '#f9f6f2' },
      256: { bg: '#edcc61', text: '#f9f6f2' },
      512: { bg: '#edc850', text: '#f9f6f2' },
      1024: { bg: '#edc53f', text: '#f9f6f2' },
      2048: { bg: '#edc22e', text: '#f9f6f2' }
    }
    return colors[value] || colors[2048]
  }

  // 新しいタイルを追加
  const addNewTile = () => {
    const emptyCells: { x: number, y: number }[] = []
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if (gridRef.current[i][j] === 0) {
          emptyCells.push({ x: j, y: i })
        }
      }
    }
    
    if (emptyCells.length > 0) {
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
      gridRef.current[randomCell.y][randomCell.x] = Math.random() < 0.9 ? 2 : 4
    }
  }

  // グリッドの初期化
  const initGrid = () => {
    gridRef.current = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0))
    addNewTile()
    addNewTile()
  }

  // 描画
  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const totalSize = GRID_SIZE * CELL_SIZE + (GRID_SIZE + 1) * CELL_GAP
    
    // 背景
    ctx.fillStyle = '#bbada0'
    ctx.fillRect(0, 0, totalSize, totalSize)
    
    // セルの描画
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const value = gridRef.current[i][j]
        const x = j * (CELL_SIZE + CELL_GAP) + CELL_GAP
        const y = i * (CELL_SIZE + CELL_GAP) + CELL_GAP
        
        const color = getColor(value)
        ctx.fillStyle = color.bg
        ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE)
        
        if (value !== 0) {
          ctx.fillStyle = color.text
          ctx.font = value >= 1024 ? 'bold 35px Arial' : value >= 128 ? 'bold 45px Arial' : 'bold 55px Arial'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(value.toString(), x + CELL_SIZE / 2, y + CELL_SIZE / 2)
        }
      }
    }
  }

  // 移動可能かチェック
  const canMove = () => {
    // 空きセルがあるか
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if (gridRef.current[i][j] === 0) return true
      }
    }
    
    // 隣接する同じ数字があるか
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const current = gridRef.current[i][j]
        if (j < GRID_SIZE - 1 && current === gridRef.current[i][j + 1]) return true
        if (i < GRID_SIZE - 1 && current === gridRef.current[i + 1][j]) return true
      }
    }
    
    return false
  }

  // ラインの移動とマージ
  const moveLine = (line: number[]) => {
    // 0を除去
    let filtered = line.filter(cell => cell !== 0)
    const missing = GRID_SIZE - filtered.length
    const zeros = Array(missing).fill(0)
    filtered = filtered.concat(zeros)
    return filtered
  }

  const mergeLine = (line: number[]) => {
    for (let i = 0; i < GRID_SIZE - 1; i++) {
      if (line[i] !== 0 && line[i] === line[i + 1]) {
        line[i] *= 2
        line[i + 1] = 0
        setScore(prev => {
          const newScore = prev + line[i]
          if (newScore > bestScore) {
            setBestScore(newScore)
          }
          return newScore
        })
        if (line[i] === 2048) {
          setGameWon(true)
        }
      }
    }
    return line
  }

  // 移動処理
  const move = (direction: 'left' | 'right' | 'up' | 'down') => {
    // 現在の状態を保存
    previousGridRef.current = gridRef.current.map(row => [...row])
    previousScoreRef.current = score
    
    let moved = false
    
    if (direction === 'left') {
      for (let i = 0; i < GRID_SIZE; i++) {
        let row = gridRef.current[i]
        const original = [...row]
        row = moveLine(row)
        row = mergeLine(row)
        row = moveLine(row)
        gridRef.current[i] = row
        if (JSON.stringify(original) !== JSON.stringify(row)) moved = true
      }
    } else if (direction === 'right') {
      for (let i = 0; i < GRID_SIZE; i++) {
        let row = gridRef.current[i]
        const original = [...row]
        row.reverse()
        row = moveLine(row)
        row = mergeLine(row)
        row = moveLine(row)
        row.reverse()
        gridRef.current[i] = row
        if (JSON.stringify(original) !== JSON.stringify(row)) moved = true
      }
    } else if (direction === 'up') {
      for (let j = 0; j < GRID_SIZE; j++) {
        let column = []
        for (let i = 0; i < GRID_SIZE; i++) {
          column.push(gridRef.current[i][j])
        }
        const original = [...column]
        column = moveLine(column)
        column = mergeLine(column)
        column = moveLine(column)
        for (let i = 0; i < GRID_SIZE; i++) {
          gridRef.current[i][j] = column[i]
        }
        if (JSON.stringify(original) !== JSON.stringify(column)) moved = true
      }
    } else if (direction === 'down') {
      for (let j = 0; j < GRID_SIZE; j++) {
        let column = []
        for (let i = 0; i < GRID_SIZE; i++) {
          column.push(gridRef.current[i][j])
        }
        const original = [...column]
        column.reverse()
        column = moveLine(column)
        column = mergeLine(column)
        column = moveLine(column)
        column.reverse()
        for (let i = 0; i < GRID_SIZE; i++) {
          gridRef.current[i][j] = column[i]
        }
        if (JSON.stringify(original) !== JSON.stringify(column)) moved = true
      }
    }
    
    if (moved) {
      addNewTile()
      draw()
      
      if (!canMove()) {
        setGameOver(true)
      }
    }
  }

  // アンドゥ機能
  const undo = () => {
    if (previousGridRef.current.length > 0) {
      gridRef.current = previousGridRef.current.map(row => [...row])
      setScore(previousScoreRef.current)
      draw()
    }
  }

  // キーボード操作
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver && !gameWon) return
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          move('left')
          break
        case 'ArrowRight':
          e.preventDefault()
          move('right')
          break
        case 'ArrowUp':
          e.preventDefault()
          move('up')
          break
        case 'ArrowDown':
          e.preventDefault()
          move('down')
          break
        case 'z':
        case 'Z':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault()
            undo()
          }
          break
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver, gameWon, score, bestScore])

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
      if (gameOver && !gameWon) return
      
      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY
      
      const deltaX = touchEndX - touchStartX
      const deltaY = touchEndY - touchStartY
      
      if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 0) {
            move('right')
          } else {
            move('left')
          }
        } else {
          if (deltaY > 0) {
            move('down')
          } else {
            move('up')
          }
        }
      }
    }
    
    canvas.addEventListener('touchstart', handleTouchStart)
    canvas.addEventListener('touchend', handleTouchEnd)
    
    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver, gameWon])

  // 初期化
  useEffect(() => {
    initGrid()
    draw()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // リスタート
  const restart = () => {
    initGrid()
    setScore(0)
    setGameOver(false)
    setGameWon(false)
    previousGridRef.current = []
    previousScoreRef.current = 0
    draw()
  }

  const totalSize = GRID_SIZE * CELL_SIZE + (GRID_SIZE + 1) * CELL_GAP

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-4">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={totalSize}
          height={totalSize}
          className="rounded-lg touch-none"
        />
        {gameOver && !gameWon && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg">
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-4">GAME OVER</h2>
              <p className="text-xl mb-4">スコア: {score}</p>
              <button
                onClick={restart}
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded text-white font-bold"
              >
                もう一度プレイ
              </button>
            </div>
          </div>
        )}
        {gameWon && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold mb-4 text-yellow-400">🎉 2048達成！</h2>
              <p className="text-xl mb-4">スコア: {score}</p>
              <div className="space-y-2">
                <button
                  onClick={() => setGameWon(false)}
                  className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded text-white font-bold"
                >
                  続ける
                </button>
                <button
                  onClick={restart}
                  className="block w-full px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded text-white font-bold"
                >
                  新しいゲーム
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-4">2048</h1>
        <div className="space-y-2 mb-6">
          <div className="text-xl">スコア: {score}</div>
          <div className="text-xl">ベスト: {bestScore}</div>
        </div>
        
        <div className="space-y-2 text-sm">
          <h3 className="font-bold text-lg mb-2">操作方法</h3>
          <div>↑↓←→ : スライド</div>
          <div>Ctrl+Z : アンドゥ</div>
          <div className="mt-2 text-gray-400">モバイル: スワイプで操作</div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <button
            onClick={restart}
            className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-white"
          >
            新しいゲーム
          </button>
          <button
            onClick={undo}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white"
          >
            アンドゥ
          </button>
        </div>
        
        <div className="mt-4 text-sm text-gray-400">
          <p>同じ数字を合わせて</p>
          <p>2048を目指そう！</p>
        </div>
      </div>
    </div>
  )
}