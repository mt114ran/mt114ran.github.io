import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getGameById, games } from '@/lib/games'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function GameDetailPage(props: PageProps) {
  const { id } = await props.params
  const game = getGameById(id)

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto py-10 px-4">
        {/* ナビゲーション */}
        <nav className="mb-6 flex gap-4">
          <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
            ホーム
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/note" className="text-blue-400 hover:text-blue-300 hover:underline">
            ノート
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/note/game" className="text-blue-400 hover:text-blue-300 hover:underline">
            ゲーム
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-400">{game.title}</span>
        </nav>

        {/* ゲーム情報 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl mb-8">
          {/* ヘッダー */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
                <p className="text-blue-100">{game.description}</p>
              </div>
              <div className="text-6xl">
                {game.id === 'tetris' ? '🧱' : game.id === 'snake' ? '🐍' : '🔢'}
              </div>
            </div>
          </div>

          {/* ゲーム詳細 */}
          <div className="p-6">
            {/* プレイボタン */}
            <div className="mb-8 text-center">
              <Link
                href={`/note/game/${game.id}/play`}
                target="_blank"
                className="inline-block px-8 py-4 bg-green-600 text-white text-xl font-bold rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105"
              >
                🎮 ゲームをプレイする
              </Link>
              <p className="mt-2 text-sm text-gray-400">新しいタブで開きます</p>
            </div>

            {/* 難易度とカテゴリ */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-300">難易度</h3>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3].map((level) => (
                      <span
                        key={level}
                        className={`text-2xl ${
                          level <= (game.difficulty === 'easy' ? 1 : game.difficulty === 'medium' ? 2 : 3)
                            ? 'text-yellow-400'
                            : 'text-gray-600'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-300">
                    {game.difficulty === 'easy' ? '簡単' : game.difficulty === 'medium' ? '普通' : '難しい'}
                  </span>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-300">カテゴリ</h3>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded">
                  {game.category === 'puzzle' ? 'パズル' : 
                   game.category === 'arcade' ? 'アーケード' :
                   game.category === 'strategy' ? '戦略' : 'アクション'}
                </span>
              </div>
            </div>

            {/* 操作方法 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">🎮 操作方法</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-3 text-blue-400">💻 デスクトップ</h3>
                  <ul className="space-y-2">
                    {game.controls.desktop.map((control, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        <span className="text-gray-300">{control}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-3 text-blue-400">📱 モバイル</h3>
                  <ul className="space-y-2">
                    {game.controls.mobile.map((control, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        <span className="text-gray-300">{control}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 特徴 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">✨ ゲームの特徴</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {game.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-700 rounded-lg p-3">
                    <span className="text-2xl">🎯</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ゲームのヒント */}
            <div className="bg-blue-900 bg-opacity-30 border border-blue-600 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-blue-400">💡 ヒント</h3>
              <p className="text-gray-300">
                {game.id === 'tetris' 
                  ? 'ラインを同時に複数消すと高得点！T-Spinなどの特殊技も試してみましょう。'
                  : game.id === 'snake'
                  ? '壁際は危険！中央付近で動き回るのが安全です。餌の位置を予測して動きましょう。'
                  : '角を有効活用しましょう。大きい数字は角に配置すると管理しやすくなります。'}
              </p>
            </div>
          </div>
        </div>

        {/* 他のゲーム */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">🎲 他のゲームもプレイ</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {games.filter(g => g.id !== game.id).map((otherGame) => (
              <Link
                key={otherGame.id}
                href={`/note/game/${otherGame.id}`}
                className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">
                    {otherGame.id === 'tetris' ? '🧱' : otherGame.id === 'snake' ? '🐍' : '🔢'}
                  </span>
                  <div>
                    <h3 className="font-semibold">{otherGame.title}</h3>
                    <p className="text-sm text-gray-400">{otherGame.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 戻るボタン */}
        <div className="mt-8 text-center">
          <Link
            href="/note/game"
            className="inline-block px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
          >
            ← ゲーム一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return games.map((game) => ({
    id: game.id
  }))
}