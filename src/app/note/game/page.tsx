import Link from 'next/link'
import { games } from '@/lib/games'

export default function GameListPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto py-10 px-4">
        {/* ヘッダー */}
        <div className="mb-8">
          <nav className="mb-6 flex gap-4">
            <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
              ホーム
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/note" className="text-blue-400 hover:text-blue-300 hover:underline">
              ノート
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">ゲーム</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-4">🎮 ブラウザゲームコレクション</h1>
          <p className="text-gray-300 text-lg">
            JavaScriptで作成したミニゲーム集。PCでもスマホでも遊べます！
          </p>
        </div>

        {/* カテゴリフィルター */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              すべて
            </button>
            <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors">
              パズル
            </button>
            <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors">
              アーケード
            </button>
          </div>
        </div>

        {/* ゲームグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              {/* サムネイル */}
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">
                    {game.id === 'tetris' ? '🧱' : game.id === 'snake' ? '🐍' : '🔢'}
                  </span>
                </div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-black bg-opacity-50 rounded text-xs">
                  {game.difficulty === 'easy' ? '簡単' : game.difficulty === 'medium' ? '普通' : '難しい'}
                </div>
              </div>

              {/* ゲーム情報 */}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{game.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{game.description}</p>
                
                {/* 特徴 */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {game.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-700 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* プレイボタン */}
                <div className="flex gap-2">
                  <Link
                    href={`/note/game/${game.id}`}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    詳細を見る
                  </Link>
                  <Link
                    href={`/note/game/${game.id}/play`}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    プレイする
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 説明セクション */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">🎯 遊び方</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">デスクトップ</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>キーボードの矢印キーで操作</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>スペースキーやEnterキーで決定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>ESCキーで一時停止</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">モバイル</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>タッチ操作に完全対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>スワイプで直感的な操作</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>画面サイズに自動調整</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="mt-12 text-center text-gray-500">
          <p>Created with ❤️ using JavaScript and HTML5 Canvas</p>
          <p className="mt-2">
            <Link href="/blog" className="text-blue-400 hover:text-blue-300 hover:underline">
              開発ブログを読む
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}