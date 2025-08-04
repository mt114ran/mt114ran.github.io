import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const mediaBlogTemplate: WebTemplate = {
  id: 'media-blog',
  title: 'メディア - ブログプラットフォーム',
  category: TEMPLATE_CATEGORIES.MEDIA,
  description: 'TailwindCSSとStimulusを使用したモダンなブログプラットフォーム',
  thumbnail: '/template-images/media-blog.jpg',
  features: [
    'TailwindCSS使用',
    'Stimulus.js使用',
    'ダークモード対応',
    'インタラクティブUI'
  ],
  tags: ['メディア', 'ブログ', 'Tailwind', 'Stimulus'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechBlog - 最新テクノロジー情報</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/@hotwired/stimulus@3.2.2/dist/stimulus.umd.js"></script>
</head>
<body class="bg-gray-50 dark:bg-gray-900 transition-colors">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50" data-controller="header">
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
                    <button data-controller="search" data-action="click->search#toggle" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    <!-- Dark Mode Toggle -->
                    <button data-controller="theme" data-action="click->theme#toggle" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                        </svg>
                    </button>
                    <!-- Mobile Menu -->
                    <button data-controller="menu" data-action="click->menu#toggle" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Search Bar -->
            <div data-search-target="searchBar" class="hidden mt-4 relative">
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
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden" data-controller="article">
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
                        AIとWeb開発の未来：次世代のアプリケーション開発手法
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                        人工知能技術の急速な発展により、Web開発の現場も大きく変わりつつあります。本記事では、AIを活用した最新の開発手法と、これからのWebアプリケーションの姿について解説します。
                    </p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop" alt="Author" class="w-10 h-10 rounded-full">
                            <div>
                                <p class="text-sm font-semibold text-gray-900 dark:text-white">山田太郎</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">シニアエンジニア</p>
                            </div>
                        </div>
                        <button data-action="click->article#like" class="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            <span data-article-target="likeCount">128</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest Articles -->
    <section id="latest" class="container mx-auto px-4 py-12">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">最新記事</h2>
            <div class="flex space-x-2" data-controller="tabs">
                <button data-action="click->tabs#showAll" class="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold">すべて</button>
                <button data-action="click->tabs#showTech" class="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition">技術</button>
                <button data-action="click->tabs#showDesign" class="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition">デザイン</button>
            </div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-tabs-target="content">
            <!-- Article Card 1 -->
            <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop" alt="Article" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex items-center space-x-2 mb-2">
                        <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded text-xs font-semibold">JavaScript</span>
                        <span class="text-gray-500 dark:text-gray-400 text-xs">5分で読める</span>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        React 19の新機能を徹底解説
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        最新版のReactで追加された新機能と、パフォーマンス改善について詳しく解説します。
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500 dark:text-gray-400 text-xs">2024年8月3日</span>
                        <button class="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">続きを読む →</button>
                    </div>
                </div>
            </article>

            <!-- Article Card 2 -->
            <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop" alt="Article" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex items-center space-x-2 mb-2">
                        <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded text-xs font-semibold">CSS</span>
                        <span class="text-gray-500 dark:text-gray-400 text-xs">8分で読める</span>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        TailwindCSS 4.0の革新的アップデート
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        新しいユーティリティクラスと、JITコンパイラの進化について解説します。
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500 dark:text-gray-400 text-xs">2024年8月2日</span>
                        <button class="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">続きを読む →</button>
                    </div>
                </div>
            </article>

            <!-- Article Card 3 -->
            <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop" alt="Article" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex items-center space-x-2 mb-2">
                        <span class="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded text-xs font-semibold">TypeScript</span>
                        <span class="text-gray-500 dark:text-gray-400 text-xs">10分で読める</span>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        TypeScript 5.0で変わる型システム
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        新しい型システムの機能と、より安全なコード記述について解説します。
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500 dark:text-gray-400 text-xs">2024年8月1日</span>
                        <button class="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">続きを読む →</button>
                    </div>
                </div>
            </article>
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
                <form data-controller="newsletter" data-action="submit->newsletter#subscribe" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="email" placeholder="メールアドレス" class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" required>
                    <button type="submit" class="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                        登録する
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">TechBlog</h3>
                    <p class="text-gray-400">最新テクノロジー情報を発信する開発者向けブログプラットフォーム</p>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">カテゴリー</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition">プログラミング</a></li>
                        <li><a href="#" class="hover:text-white transition">デザイン</a></li>
                        <li><a href="#" class="hover:text-white transition">AI・機械学習</a></li>
                        <li><a href="#" class="hover:text-white transition">クラウド</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">会社情報</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition">About</a></li>
                        <li><a href="#" class="hover:text-white transition">採用情報</a></li>
                        <li><a href="#" class="hover:text-white transition">お問い合わせ</a></li>
                        <li><a href="#" class="hover:text-white transition">プライバシーポリシー</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">フォロー</h4>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"></path>
                                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"></path>
                                <circle cx="18.406" cy="5.594" r="1.44"></circle>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
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

/* ダークモード用のカスタムスタイル */
.dark {
    color-scheme: dark;
}

/* スムーススクロール */
html {
    scroll-behavior: smooth;
}

/* カスタムアニメーション */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
}

/* カスタムスクロールバー */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.dark ::-webkit-scrollbar-track {
    background: #1f2937;
}

.dark ::-webkit-scrollbar-thumb {
    background: #4b5563;
}

.dark ::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
}`,
    js: `// Stimulus Application
const application = Stimulus.Application.start();

// Theme Controller - ダークモード切り替え
application.register("theme", class extends Stimulus.Controller {
    connect() {
        // 初期設定：ローカルストレージからテーマを読み込み
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }

    toggle() {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
});

// Search Controller - 検索バーの表示/非表示
application.register("search", class extends Stimulus.Controller {
    static targets = ["searchBar"];

    toggle() {
        const searchBar = document.querySelector('[data-search-target="searchBar"]');
        if (searchBar) {
            searchBar.classList.toggle('hidden');
            searchBar.classList.toggle('animate-fadeIn');
            
            // フォーカスを検索入力欄に設定
            if (!searchBar.classList.contains('hidden')) {
                const input = searchBar.querySelector('input');
                if (input) input.focus();
            }
        }
    }
});

// Menu Controller - モバイルメニューの制御
application.register("menu", class extends Stimulus.Controller {
    toggle() {
        const nav = document.querySelector('.nav-menu');
        if (nav) {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
        }
    }
});

// Article Controller - 記事のいいね機能
application.register("article", class extends Stimulus.Controller {
    static targets = ["likeCount"];
    
    like(event) {
        const button = event.currentTarget;
        const countElement = button.querySelector('[data-article-target="likeCount"]');
        
        if (countElement) {
            let count = parseInt(countElement.textContent);
            
            // トグル状態を管理
            if (button.classList.contains('text-red-500')) {
                button.classList.remove('text-red-500');
                button.classList.add('text-gray-500', 'dark:text-gray-400');
                count--;
            } else {
                button.classList.remove('text-gray-500', 'dark:text-gray-400');
                button.classList.add('text-red-500');
                count++;
            }
            
            countElement.textContent = count;
            
            // ハートアニメーション
            button.style.transform = 'scale(1.2)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        }
    }
});

// Tabs Controller - タブ切り替え
application.register("tabs", class extends Stimulus.Controller {
    static targets = ["content"];
    
    showAll(event) {
        this.setActiveTab(event.currentTarget);
        // すべての記事を表示
        this.filterArticles('all');
    }
    
    showTech(event) {
        this.setActiveTab(event.currentTarget);
        // 技術記事のみ表示
        this.filterArticles('tech');
    }
    
    showDesign(event) {
        this.setActiveTab(event.currentTarget);
        // デザイン記事のみ表示
        this.filterArticles('design');
    }
    
    setActiveTab(button) {
        // すべてのタブボタンのスタイルをリセット
        const buttons = button.parentElement.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        });
        
        // アクティブなタブのスタイルを設定
        button.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        button.classList.add('bg-blue-600', 'text-white');
    }
    
    filterArticles(category) {
        // 実際のアプリケーションでは、ここで記事をフィルタリング
        console.log('Filtering articles by:', category);
    }
});

// Newsletter Controller - ニュースレター登録
application.register("newsletter", class extends Stimulus.Controller {
    subscribe(event) {
        event.preventDefault();
        
        const form = event.target;
        const email = form.querySelector('input[type="email"]').value;
        
        // 送信アニメーション
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = '送信中...';
        button.disabled = true;
        
        // 実際のアプリケーションでは、ここでAPIを呼び出し
        setTimeout(() => {
            button.textContent = '登録完了！';
            button.classList.remove('bg-white', 'text-blue-600');
            button.classList.add('bg-green-500', 'text-white');
            
            // 3秒後にリセット
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.classList.remove('bg-green-500', 'text-white');
                button.classList.add('bg-white', 'text-blue-600');
                form.reset();
            }, 3000);
        }, 1000);
    }
});

// Header Controller - スクロール時のヘッダー処理
application.register("header", class extends Stimulus.Controller {
    connect() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            const header = this.element;
            
            if (currentScroll > 100) {
                header.classList.add('shadow-xl');
            } else {
                header.classList.remove('shadow-xl');
            }
            
            lastScroll = currentScroll;
        });
    }
});

// ページ読み込み時のアニメーション
document.addEventListener('DOMContentLoaded', () => {
    // 記事カードにフェードインアニメーションを追加
    const articles = document.querySelectorAll('article');
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.classList.add('animate-fadeIn');
        }, index * 100);
    });
    
    // システムのダークモード設定を確認
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme')) {
        document.documentElement.classList.add('dark');
    }
});

// ダークモード自動切り替えの監視
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
});`
  }
}