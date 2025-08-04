import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const mediaBlogTemplate: WebTemplate = {
  id: 'media-blog',
  title: 'メディア - ブログプラットフォーム',
  category: TEMPLATE_CATEGORIES.MEDIA,
  description: 'TailwindCSSを使用したモダンなブログプラットフォーム',
  thumbnail: '/template-images/media-blog.jpg',
  features: [
    'TailwindCSS使用',
    'ダークモード対応',
    'レスポンシブデザイン',
    'インタラクティブUI'
  ],
  tags: ['メディア', 'ブログ', 'Tailwind', 'モダン'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechBlog - 最新テクノロジー情報</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 dark:bg-gray-900 transition-colors">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50" id="header">
        <nav class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-8">
                    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                        TechBlog
                    </h1>
                    <div class="hidden md:flex space-x-6">
                        <a href="#latest" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">最新記事</a>
                        <a href="#categories" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">カテゴリー</a>
                        <a href="#popular" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">人気記事</a>
                        <a href="#about" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <!-- Search Toggle -->
                    <button id="searchToggle" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    <!-- Dark Mode Toggle -->
                    <button id="darkModeToggle" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                        </svg>
                    </button>
                    <!-- Mobile Menu -->
                    <button id="mobileMenuToggle" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Search Bar -->
            <div id="searchBar" class="hidden mt-4 relative">
                <input type="text" placeholder="記事を検索..." class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">最新テクノロジーの情報発信</h2>
                <p class="text-xl mb-8 text-blue-100">開発者のための技術ブログプラットフォーム</p>
                <div class="flex flex-wrap gap-4">
                    <button class="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                        記事を読む
                    </button>
                    <button class="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                        ニュースレター登録
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Article -->
    <section class="container mx-auto px-4 py-12">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div class="md:flex">
                <div class="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop" alt="Featured Article" class="w-full h-64 md:h-full object-cover">
                </div>
                <div class="md:w-1/2 p-8">
                    <div class="flex items-center space-x-4 mb-4">
                        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold">特集記事</span>
                        <span class="text-gray-500 dark:text-gray-400 text-sm">2024年8月4日</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        次世代AI技術がもたらすWeb開発の未来
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                        人工知能の進化がWeb開発にもたらす影響について、最新の研究結果とともに解説します。生成AIによる自動コード生成、スマートなUIデザイン、そして開発効率の大幅な向上について。
                    </p>
                    <div class="flex items-center justify-between">
                        <a href="#" class="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition">続きを読む →</a>
                        <button class="like-button flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition" data-likes="156">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            <span class="like-count">156</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest Articles with Tabs -->
    <section class="container mx-auto px-4 py-12">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <!-- Tab Navigation -->
            <div class="flex border-b border-gray-200 dark:border-gray-700 mb-8">
                <button class="tab-button px-6 py-3 text-gray-600 dark:text-gray-300 font-semibold border-b-2 border-transparent hover:text-blue-600 dark:hover:text-blue-400 transition active" data-tab="latest">
                    最新記事
                </button>
                <button class="tab-button px-6 py-3 text-gray-600 dark:text-gray-300 font-semibold border-b-2 border-transparent hover:text-blue-600 dark:hover:text-blue-400 transition" data-tab="popular">
                    人気記事
                </button>
                <button class="tab-button px-6 py-3 text-gray-600 dark:text-gray-300 font-semibold border-b-2 border-transparent hover:text-blue-600 dark:hover:text-blue-400 transition" data-tab="recommended">
                    おすすめ
                </button>
            </div>

            <!-- Tab Content -->
            <div id="latest" class="tab-content">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition">
                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop" alt="Article" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">ReactとNext.jsで始めるモダンWeb開発</h4>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">最新のReact 18とNext.js 14を使った実践的な開発手法を解説。</p>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-500 dark:text-gray-400 text-sm">2024.08.03</span>
                                <button class="like-button text-gray-500 dark:text-gray-400 hover:text-red-500 transition" data-likes="42">
                                    ♥ <span class="like-count">42</span>
                                </button>
                            </div>
                        </div>
                    </article>
                    <article class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" alt="Article" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">TypeScriptの型システム完全ガイド</h4>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">高度な型操作から実践的な型安全の実現方法まで。</p>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-500 dark:text-gray-400 text-sm">2024.08.02</span>
                                <button class="like-button text-gray-500 dark:text-gray-400 hover:text-red-500 transition" data-likes="89">
                                    ♥ <span class="like-count">89</span>
                                </button>
                            </div>
                        </div>
                    </article>
                    <article class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition">
                        <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop" alt="Article" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">GitHub Copilotで効率化する開発フロー</h4>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">AI支援ツールを最大限活用する方法とベストプラクティス。</p>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-500 dark:text-gray-400 text-sm">2024.08.01</span>
                                <button class="like-button text-gray-500 dark:text-gray-400 hover:text-red-500 transition" data-likes="67">
                                    ♥ <span class="like-count">67</span>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <div id="popular" class="tab-content hidden">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition">
                        <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop" alt="Article" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">2024年に学ぶべきプログラミング言語Top10</h4>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">市場動向と需要から見る最適な言語選択。</p>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-500 dark:text-gray-400 text-sm">2024.07.28</span>
                                <button class="like-button text-gray-500 dark:text-gray-400 hover:text-red-500 transition" data-likes="234">
                                    ♥ <span class="like-count">234</span>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <div id="recommended" class="tab-content hidden">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" alt="Article" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">Web3.0時代のフロントエンド開発</h4>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">ブロックチェーンとDAppsの基礎から実装まで。</p>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-500 dark:text-gray-400 text-sm">2024.07.25</span>
                                <button class="like-button text-gray-500 dark:text-gray-400 hover:text-red-500 transition" data-likes="178">
                                    ♥ <span class="like-count">178</span>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <!-- Categories -->
    <section id="categories" class="bg-gray-100 dark:bg-gray-800 py-12">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">カテゴリー</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div class="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                    <div class="text-3xl mb-2">💻</div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">プログラミング</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">234記事</p>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                    <div class="text-3xl mb-2">🎨</div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">デザイン</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">156記事</p>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                    <div class="text-3xl mb-2">📱</div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">モバイル</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">89記事</p>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                    <div class="text-3xl mb-2">🤖</div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">AI・機械学習</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">67記事</p>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                    <div class="text-3xl mb-2">☁️</div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">クラウド</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">112記事</p>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                    <div class="text-3xl mb-2">🔒</div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">セキュリティ</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">45記事</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div class="container mx-auto px-4">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-white mb-4">最新情報をお届け</h2>
                <p class="text-blue-100 mb-8">週に1回、厳選した技術記事をメールでお送りします</p>
                <form id="newsletterForm" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="email" placeholder="メールアドレス" class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" required>
                    <button type="submit" class="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">購読する</button>
                </form>
                <div id="successMessage" class="hidden mt-4 text-white font-semibold animate-fadeIn">
                    ✓ 購読登録ありがとうございます！
                </div>
            </div>
        </div>
    </section>

    <!-- Popular Articles -->
    <section id="popular" class="container mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">人気記事</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div class="flex gap-4">
                    <span class="text-4xl font-bold text-blue-600 dark:text-blue-400">1</span>
                    <div>
                        <h3 class="font-bold text-gray-900 dark:text-white mb-2">VSCodeの生産性を10倍にする拡張機能</h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">プロが使う必須の拡張機能と設定を完全網羅。</p>
                        <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <span>👁 12,345 views</span>
                            <span>💬 234 comments</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div class="flex gap-4">
                    <span class="text-4xl font-bold text-blue-600 dark:text-blue-400">2</span>
                    <div>
                        <h3 class="font-bold text-gray-900 dark:text-white mb-2">Docker完全入門：基礎から実践まで</h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">コンテナ技術の基本概念から本番環境での運用まで。</p>
                        <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <span>👁 10,234 views</span>
                            <span>💬 189 comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-white font-bold text-xl mb-4">TechBlog</h3>
                    <p class="text-sm">最新テクノロジーと開発手法を発信する技術ブログプラットフォーム</p>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">カテゴリー</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-white transition">プログラミング</a></li>
                        <li><a href="#" class="hover:text-white transition">デザイン</a></li>
                        <li><a href="#" class="hover:text-white transition">モバイル開発</a></li>
                        <li><a href="#" class="hover:text-white transition">AI・機械学習</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">リンク</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-white transition">About</a></li>
                        <li><a href="#" class="hover:text-white transition">お問い合わせ</a></li>
                        <li><a href="#" class="hover:text-white transition">プライバシーポリシー</a></li>
                        <li><a href="#" class="hover:text-white transition">利用規約</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">フォロー</h4>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                <p>&copy; 2024 TechBlog. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `/* TailwindCSSがCDN経由で読み込まれているため、追加のカスタムCSSは最小限に */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'Inter', sans-serif;
}

/* カスタムアニメーション */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
}

/* スクロール時のヘッダーシャドウ */
.header-scrolled {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* タブのアクティブ状態 */
.tab-button.active {
    color: #2563eb;
    border-bottom-color: #2563eb;
}

.dark .tab-button.active {
    color: #60a5fa;
    border-bottom-color: #60a5fa;
}

/* いいねボタンのアニメーション */
.like-button.liked {
    color: #ef4444;
}

.like-button.liked svg {
    fill: currentColor;
}

/* モバイルメニューのアニメーション */
.mobile-menu {
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
}

.mobile-menu.open {
    transform: translateX(0);
}

/* ニュースレター成功メッセージ */
#successMessage.show {
    display: block;
}

/* カード効果 */
article {
    transition: all 0.3s ease;
}

article:hover {
    transform: translateY(-4px);
}

/* ダークモードのトランジション */
* {
    transition: background-color 0.3s ease, color 0.3s ease;
}`,
    js: `// ダークモード切り替え
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    // ローカルストレージから設定を読み込み
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    
    darkModeToggle.addEventListener('click', function() {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// 検索バーの表示/非表示
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', function() {
        searchBar.classList.toggle('hidden');
        if (!searchBar.classList.contains('hidden')) {
            const input = searchBar.querySelector('input');
            if (input) {
                input.focus();
            }
        }
    });
}

// モバイルメニューの制御
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        // モバイルメニューの実装（必要に応じて追加）
        console.log('Mobile menu toggled');
    });
}

// いいねボタンの機能
document.querySelectorAll('.like-button').forEach(button => {
    let isLiked = false;
    const originalLikes = parseInt(button.dataset.likes || '0');
    
    button.addEventListener('click', function() {
        isLiked = !isLiked;
        const countElement = button.querySelector('.like-count');
        if (countElement) {
            const currentCount = parseInt(countElement.textContent);
            if (isLiked) {
                countElement.textContent = currentCount + 1;
                button.classList.add('liked');
                button.style.color = '#ef4444';
            } else {
                countElement.textContent = currentCount - 1;
                button.classList.remove('liked');
                button.style.color = '';
            }
        }
    });
});

// タブ切り替え機能
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetTab = button.dataset.tab;
        
        // アクティブなタブボタンを更新
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // タブコンテンツの表示切り替え
        tabContents.forEach(content => {
            if (content.id === targetTab) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });
});

// ニュースレターフォームの送信
const newsletterForm = document.getElementById('newsletterForm');
const successMessage = document.getElementById('successMessage');

if (newsletterForm && successMessage) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 成功メッセージを表示
        successMessage.classList.remove('hidden');
        successMessage.classList.add('show');
        
        // フォームをリセット
        newsletterForm.reset();
        
        // 3秒後にメッセージを非表示
        setTimeout(() => {
            successMessage.classList.add('hidden');
            successMessage.classList.remove('show');
        }, 3000);
    });
}

// スクロール時のヘッダーエフェクト
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});`
  }
}