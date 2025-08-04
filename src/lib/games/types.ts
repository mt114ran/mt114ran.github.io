/**
 * ゲームのタイプ定義
 */
export interface Game {
  id: string
  title: string
  description: string
  thumbnail: string
  category: GameCategory
  difficulty: 'easy' | 'medium' | 'hard'
  controls: {
    desktop: string[]
    mobile: string[]
  }
  features: string[]
  playCount?: number
  rating?: number
}

export type GameCategory = 'puzzle' | 'arcade' | 'strategy' | 'action'

export const GAME_CATEGORIES = {
  PUZZLE: 'puzzle' as const,
  ARCADE: 'arcade' as const,
  STRATEGY: 'strategy' as const,
  ACTION: 'action' as const,
}