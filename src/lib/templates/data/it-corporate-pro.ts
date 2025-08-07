import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const itCorporateProTemplate: WebTemplate = {
  id: 'it-corporate-pro',
  title: 'Tech Enterprise Pro - 次世代企業サイト',
  category: TEMPLATE_CATEGORIES.IT,
  description: 'AI時代の企業に相応しい最先端のコーポレートサイト。WebGL、3Dビジュアライゼーション、インタラクティブなデータ可視化を搭載',
  thumbnail: '/template-images/it-corporate-pro.jpg',
  features: [
    'WebGL 3Dグラフィックス',
    'データビジュアライゼーション',
    'アニメーショングラフ',
    'パーティクルエフェクト',
    'グラスモーフィズムUI',
    'ダークモード対応',
    'AIチャットボット風UI',
    'マイクロインタラクション'
  ],
  tags: ['プロレベル', 'エンタープライズ', 'WebGL', '3D', 'データ可視化', 'AI', 'グラスモーフィズム'],
  isPro: true,
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechVision Pro - AIとイノベーションの最前線</title>
</head>
<body>
    <!-- ローディング画面 -->
    <div class="loading-screen" id="loading">
        <div class="loading-logo">
            <div class="loading-cube">
                <div class="cube-face"></div>
                <div class="cube-face"></div>
                <div class="cube-face"></div>
                <div class="cube-face"></div>
                <div class="cube-face"></div>
                <div class="cube-face"></div>
            </div>
        </div>
        <div class="loading-text">システムを初期化中...</div>
    </div>

    <!-- ヘッダー -->
    <header id="header">
        <nav>
            <div class="logo">
                <div class="logo-icon"></div>
                TechVision Pro
            </div>
            <ul class="nav-links">
                <li><a href="#home">ホーム</a></li>
                <li><a href="#services">サービス</a></li>
                <li><a href="#tech">テクノロジー</a></li>
                <li><a href="#ai">AI</a></li>
                <li><a href="#contact">お問い合わせ</a></li>
            </ul>
            <button class="nav-cta">無料相談</button>
            <button class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>

    <!-- ヒーローセクション -->
    <section class="hero" id="home">
        <div class="hero-bg">
            <div class="particles" id="particles"></div>
        </div>
        <div class="hero-content">
            <div class="hero-text">
                <div class="hero-badge">
                    <div class="badge-dot"></div>
                    <span>AI駆動の次世代ソリューション</span>
                </div>
                <h1>
                    ビジネスを革新する<br>
                    <span class="gradient-text">最先端テクノロジー</span>
                </h1>
                <p class="hero-description">
                    人工知能、機械学習、ビッグデータ分析を活用し、
                    あなたのビジネスを次のレベルへ導きます。
                    デジタルトランスフォーメーションの真のパートナー。
                </p>
                <div class="hero-buttons">
                    <button class="btn-primary">導入事例を見る</button>
                    <button class="btn-secondary">資料ダウンロード</button>
                </div>
            </div>
            <div class="hero-visual">
                <div class="tech-grid">
                    <!-- 動的に生成されるグリッド線 -->
                </div>
            </div>
        </div>
    </section>

    <!-- 統計セクション -->
    <section class="stats">
        <div class="stats-container">
            <div class="stat-card">
                <div class="stat-number" data-target="500">0</div>
                <div class="stat-label">導入企業数</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" data-target="99.9">0</div>
                <div class="stat-label">稼働率 %</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" data-target="50">0</div>
                <div class="stat-label">AIモデル数</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" data-target="24">0</div>
                <div class="stat-label">サポート体制 H</div>
            </div>
        </div>
    </section>

    <!-- サービスセクション -->
    <section class="services" id="services">
        <div class="section-header">
            <div class="section-subtitle">Services</div>
            <h2 class="section-title">
                <span class="gradient-text">革新的なソリューション</span>
            </h2>
            <p class="section-description">
                最新技術を駆使したサービスで、お客様のビジネスに革新をもたらします
            </p>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">🤖</div>
                <h3 class="service-title">AI開発</h3>
                <p class="service-description">
                    カスタムAIモデルの開発から、既存システムへの統合まで、
                    お客様のニーズに合わせたAIソリューションを提供します。
                </p>
                <ul class="service-features">
                    <li>自然言語処理</li>
                    <li>画像認識</li>
                    <li>予測分析</li>
                </ul>
            </div>
            <div class="service-card">
                <div class="service-icon">📊</div>
                <h3 class="service-title">データ分析</h3>
                <p class="service-description">
                    ビッグデータを活用した高度な分析により、
                    ビジネスインサイトを発見し、意思決定を支援します。
                </p>
                <ul class="service-features">
                    <li>リアルタイム分析</li>
                    <li>予測モデリング</li>
                    <li>ダッシュボード構築</li>
                </ul>
            </div>
            <div class="service-card">
                <div class="service-icon">☁️</div>
                <h3 class="service-title">クラウド移行</h3>
                <p class="service-description">
                    オンプレミスからクラウドへのスムーズな移行を実現し、
                    スケーラブルなインフラを構築します。
                </p>
                <ul class="service-features">
                    <li>AWS / Azure / GCP</li>
                    <li>マイクロサービス</li>
                    <li>DevOps自動化</li>
                </ul>
            </div>
            <div class="service-card">
                <div class="service-icon">🔒</div>
                <h3 class="service-title">セキュリティ</h3>
                <p class="service-description">
                    最新のサイバーセキュリティ技術で、
                    お客様のデータとシステムを守ります。
                </p>
                <ul class="service-features">
                    <li>脆弱性診断</li>
                    <li>ゼロトラスト</li>
                    <li>インシデント対応</li>
                </ul>
            </div>
            <div class="service-card">
                <div class="service-icon">⚡</div>
                <h3 class="service-title">自動化</h3>
                <p class="service-description">
                    RPA と AI を組み合わせた業務自動化により、
                    生産性を大幅に向上させます。
                </p>
                <ul class="service-features">
                    <li>プロセス自動化</li>
                    <li>チャットボット</li>
                    <li>ワークフロー最適化</li>
                </ul>
            </div>
            <div class="service-card">
                <div class="service-icon">📱</div>
                <h3 class="service-title">アプリ開発</h3>
                <p class="service-description">
                    ネイティブアプリからWebアプリまで、
                    ユーザー体験を重視した開発を行います。
                </p>
                <ul class="service-features">
                    <li>React Native</li>
                    <li>Flutter</li>
                    <li>Progressive Web Apps</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- テクノロジースタック -->
    <section class="tech-stack" id="tech">
        <div class="section-header">
            <div class="section-subtitle">Technology Stack</div>
            <h2 class="section-title">
                <span class="gradient-text">最先端技術スタック</span>
            </h2>
            <p class="section-description">
                業界をリードする技術を駆使してソリューションを構築
            </p>
        </div>
        <div class="tech-grid-container">
            <div class="tech-item">
                <div class="tech-icon">⚛️</div>
                <div class="tech-name">React</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">🅰️</div>
                <div class="tech-name">Angular</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">🟢</div>
                <div class="tech-name">Node.js</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">🐍</div>
                <div class="tech-name">Python</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">☕</div>
                <div class="tech-name">Java</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">🐳</div>
                <div class="tech-name">Docker</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">☸️</div>
                <div class="tech-name">Kubernetes</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">🔥</div>
                <div class="tech-name">Firebase</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">🗄️</div>
                <div class="tech-name">MongoDB</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">🐘</div>
                <div class="tech-name">PostgreSQL</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">📊</div>
                <div class="tech-name">TensorFlow</div>
            </div>
            <div class="tech-item">
                <div class="tech-icon">🤖</div>
                <div class="tech-name">PyTorch</div>
            </div>
        </div>
    </section>

    <!-- AIチャットセクション -->
    <section class="ai-chat" id="ai">
        <div class="section-header">
            <div class="section-subtitle">AI Assistant</div>
            <h2 class="section-title">
                <span class="gradient-text">AIアシスタントと対話</span>
            </h2>
            <p class="section-description">
                最新のAI技術でお客様の質問にお答えします
            </p>
        </div>
        <div class="chat-container">
            <div class="chat-header">
                <div class="chat-avatar">🤖</div>
                <div class="chat-info">
                    <div class="chat-name">TechVision AI Assistant</div>
                    <div class="chat-status">
                        <div class="status-dot"></div>
                        オンライン
                    </div>
                </div>
            </div>
            <div class="chat-messages">
                <div class="message message-bot">
                    <div class="message-avatar">🤖</div>
                    <div class="message-content">
                        <p class="message-text">
                            こんにちは！TechVision AI アシスタントです。
                            デジタルトランスフォーメーションについて、何でもお気軽にご質問ください。
                        </p>
                    </div>
                </div>
                <div class="message message-bot">
                    <div class="message-avatar">🤖</div>
                    <div class="message-content">
                        <div class="typing-indicator">
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-input">
                <input type="text" placeholder="メッセージを入力...">
                <button>送信</button>
            </div>
        </div>
    </section>

    <!-- フッター -->
    <footer>
        <div class="footer-content">
            <div class="footer-brand">
                <div class="footer-logo">TechVision Pro</div>
                <p class="footer-description">
                    最先端のテクノロジーで、ビジネスの未来を創造します。
                    AIとデジタルトランスフォーメーションのリーディングカンパニー。
                </p>
                <div class="social-links">
                    <a href="#" class="social-link">f</a>
                    <a href="#" class="social-link">t</a>
                    <a href="#" class="social-link">in</a>
                    <a href="#" class="social-link">g</a>
                </div>
            </div>
            <div class="footer-column">
                <h4>サービス</h4>
                <ul class="footer-links">
                    <li><a href="#">AI開発</a></li>
                    <li><a href="#">データ分析</a></li>
                    <li><a href="#">クラウド移行</a></li>
                    <li><a href="#">セキュリティ</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>会社情報</h4>
                <ul class="footer-links">
                    <li><a href="#">会社概要</a></li>
                    <li><a href="#">採用情報</a></li>
                    <li><a href="#">ニュース</a></li>
                    <li><a href="#">お問い合わせ</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>リソース</h4>
                <ul class="footer-links">
                    <li><a href="#">ドキュメント</a></li>
                    <li><a href="#">ブログ</a></li>
                    <li><a href="#">導入事例</a></li>
                    <li><a href="#">サポート</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 TechVision Pro. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary: #6366f1;
            --primary-dark: #4f46e5;
            --secondary: #14b8a6;
            --accent: #f59e0b;
            --dark: #0f172a;
            --dark-light: #1e293b;
            --gray: #64748b;
            --light-gray: #e2e8f0;
            --white: #ffffff;
            --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            --gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: var(--dark);
            color: var(--white);
            overflow-x: hidden;
        }
        
        /* カスタムスクロールバー */
        ::-webkit-scrollbar {
            width: 10px;
        }
        
        ::-webkit-scrollbar-track {
            background: var(--dark-light);
        }
        
        ::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: var(--primary-dark);
        }
        
        /* ローディング画面 */
        .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--dark);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: opacity 0.8s ease-out;
        }
        
        .loading-screen.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .loading-logo {
            width: 120px;
            height: 120px;
            position: relative;
            margin-bottom: 30px;
        }
        
        .loading-cube {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            animation: rotateCube 2s infinite linear;
        }
        
        @keyframes rotateCube {
            0% { transform: rotateX(-30deg) rotateY(0deg); }
            100% { transform: rotateX(-30deg) rotateY(360deg); }
        }
        
        .cube-face {
            position: absolute;
            width: 60px;
            height: 60px;
            border: 2px solid var(--primary);
            background: rgba(99, 102, 241, 0.1);
            backdrop-filter: blur(10px);
        }
        
        .cube-face:nth-child(1) { transform: translateZ(30px); }
        .cube-face:nth-child(2) { transform: rotateY(90deg) translateZ(30px); }
        .cube-face:nth-child(3) { transform: rotateY(180deg) translateZ(30px); }
        .cube-face:nth-child(4) { transform: rotateY(-90deg) translateZ(30px); }
        .cube-face:nth-child(5) { transform: rotateX(90deg) translateZ(30px); }
        .cube-face:nth-child(6) { transform: rotateX(-90deg) translateZ(30px); }
        
        .loading-text {
            font-size: 14px;
            color: var(--gray);
            font-family: 'JetBrains Mono', monospace;
            animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
        
        /* ヘッダー */
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }
        
        header.scrolled {
            background: rgba(15, 23, 42, 0.95);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        
        nav {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 24px;
            font-weight: 700;
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .logo-icon {
            width: 35px;
            height: 35px;
            background: var(--gradient-1);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        
        .logo-icon::before {
            content: 'T';
            color: white;
            font-weight: 900;
            font-size: 20px;
            z-index: 1;
        }
        
        .logo-icon::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.2);
            transform: translateX(-100%) skewX(-45deg);
            animation: shine 3s infinite;
        }
        
        @keyframes shine {
            0% { transform: translateX(-100%) skewX(-45deg); }
            10% { transform: translateX(200%) skewX(-45deg); }
            100% { transform: translateX(200%) skewX(-45deg); }
        }
        
        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
        }
        
        .nav-links a {
            color: var(--gray);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s ease;
        }
        
        .nav-links a:hover {
            color: var(--white);
        }
        
        .nav-links a:hover::after {
            width: 100%;
        }
        
        .nav-cta {
            padding: 10px 24px;
            background: var(--gradient-1);
            border: none;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .nav-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.3);
            transition: left 0.5s ease;
        }
        
        .nav-cta:hover::before {
            left: 100%;
        }
        
        .nav-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }
        
        /* ハンバーガーメニュー */
        .hamburger {
            display: none;
            flex-direction: column;
            gap: 4px;
            background: none;
            border: none;
            cursor: pointer;
        }
        
        .hamburger span {
            width: 25px;
            height: 2px;
            background: var(--white);
            transition: all 0.3s ease;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        /* ヒーローセクション */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            padding-top: 100px;
        }
        
        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        
        .particles {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary);
            border-radius: 50%;
            opacity: 0.5;
            animation: float 20s infinite linear;
        }
        
        @keyframes float {
            from {
                transform: translateY(100vh) translateX(0);
            }
            to {
                transform: translateY(-100vh) translateX(100px);
            }
        }
        
        .hero-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }
        
        .hero-text {
            z-index: 1;
        }
        
        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 50px;
            margin-bottom: 20px;
            animation: fadeInUp 0.8s ease-out;
        }
        
        .badge-dot {
            width: 8px;
            height: 8px;
            background: var(--secondary);
            border-radius: 50%;
            animation: blink 2s infinite;
        }
        
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
        
        .hero-badge span {
            color: var(--primary);
            font-size: 14px;
            font-weight: 600;
        }
        
        h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 20px;
            animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        
        .gradient-text {
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .hero-description {
            font-size: 18px;
            color: var(--gray);
            line-height: 1.6;
            margin-bottom: 40px;
            animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .hero-buttons {
            display: flex;
            gap: 20px;
            animation: fadeInUp 0.8s ease-out 0.6s both;
        }
        
        .btn-primary {
            padding: 14px 32px;
            background: var(--gradient-1);
            border: none;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.2);
            transition: left 0.5s ease;
        }
        
        .btn-primary:hover::before {
            left: 100%;
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }
        
        .btn-secondary {
            padding: 14px 32px;
            background: transparent;
            border: 2px solid var(--primary);
            border-radius: 8px;
            color: var(--primary);
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
            background: var(--primary);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }
        
        /* 3Dビジュアライゼーション */
        .hero-visual {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeIn 1s ease-out 0.8s both;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .tech-grid {
            position: relative;
            width: 500px;
            height: 500px;
            transform-style: preserve-3d;
            animation: rotateGrid 20s infinite linear;
        }
        
        @keyframes rotateGrid {
            from { transform: rotateX(25deg) rotateY(0deg); }
            to { transform: rotateX(25deg) rotateY(360deg); }
        }
        
        .grid-line {
            position: absolute;
            background: linear-gradient(90deg, transparent, var(--primary), transparent);
            opacity: 0.3;
        }
        
        .grid-line.horizontal {
            width: 100%;
            height: 1px;
            left: 0;
        }
        
        .grid-line.vertical {
            width: 1px;
            height: 100%;
            top: 0;
        }
        
        .data-point {
            position: absolute;
            width: 10px;
            height: 10px;
            background: var(--secondary);
            border-radius: 50%;
            box-shadow: 0 0 20px var(--secondary);
            animation: pulse 2s infinite;
        }
        
        /* 統計セクション */
        .stats {
            padding: 80px 40px;
            background: var(--dark-light);
            position: relative;
            overflow: hidden;
        }
        
        .stats::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--primary), transparent);
            animation: scan 3s infinite;
        }
        
        @keyframes scan {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        .stats-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
        }
        
        .stat-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-1);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-10px);
            border-color: var(--primary);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }
        
        .stat-card:hover::before {
            opacity: 0.05;
        }
        
        .stat-number {
            font-size: 48px;
            font-weight: 900;
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }
        
        .stat-label {
            color: var(--gray);
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        /* サービスセクション */
        .services {
            padding: 100px 40px;
            max-width: 1400px;
            margin: 0 auto;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .section-subtitle {
            color: var(--primary);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 10px;
        }
        
        .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 900;
            margin-bottom: 20px;
        }
        
        .section-description {
            color: var(--gray);
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 30px;
        }
        
        .service-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--gradient-1);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }
        
        .service-card:hover::before {
            transform: scaleX(1);
        }
        
        .service-icon {
            width: 60px;
            height: 60px;
            background: var(--gradient-1);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            font-size: 24px;
            position: relative;
        }
        
        .service-icon::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: var(--gradient-1);
            border-radius: 12px;
            opacity: 0.3;
            animation: ping 2s infinite;
        }
        
        @keyframes ping {
            0% {
                transform: scale(1);
                opacity: 0.3;
            }
            100% {
                transform: scale(1.5);
                opacity: 0;
            }
        }
        
        .service-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 15px;
        }
        
        .service-description {
            color: var(--gray);
            line-height: 1.6;
            margin-bottom: 20px;
        }
        
        .service-features {
            list-style: none;
        }
        
        .service-features li {
            padding: 8px 0;
            color: var(--gray);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .service-features li::before {
            content: '✓';
            color: var(--secondary);
            font-weight: bold;
        }
        
        /* テクノロジースタック */
        .tech-stack {
            padding: 100px 40px;
            background: var(--dark-light);
            position: relative;
            overflow: hidden;
        }
        
        .tech-grid-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 30px;
            margin-top: 60px;
        }
        
        .tech-item {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 30px 20px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .tech-item::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, var(--primary), transparent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.5s ease;
        }
        
        .tech-item:hover::before {
            width: 200px;
            height: 200px;
            opacity: 0.1;
        }
        
        .tech-item:hover {
            transform: translateY(-10px) scale(1.05);
            border-color: var(--primary);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }
        
        .tech-icon {
            font-size: 48px;
            margin-bottom: 10px;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
        }
        
        .tech-item:hover .tech-icon {
            filter: grayscale(0%);
        }
        
        .tech-name {
            font-size: 14px;
            color: var(--gray);
            font-weight: 600;
        }
        
        /* AIチャットセクション */
        .ai-chat {
            padding: 100px 40px;
            max-width: 1400px;
            margin: 0 auto;
        }
        
        .chat-container {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 40px;
            max-width: 800px;
            margin: 60px auto 0;
        }
        
        .chat-header {
            display: flex;
            align-items: center;
            gap: 15px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 30px;
        }
        
        .chat-avatar {
            width: 50px;
            height: 50px;
            background: var(--gradient-1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            animation: rotate 10s infinite linear;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .chat-info {
            flex: 1;
        }
        
        .chat-name {
            font-weight: 700;
            font-size: 18px;
            margin-bottom: 5px;
        }
        
        .chat-status {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--secondary);
            font-size: 14px;
        }
        
        .status-dot {
            width: 8px;
            height: 8px;
            background: var(--secondary);
            border-radius: 50%;
            animation: blink 2s infinite;
        }
        
        .chat-messages {
            margin-bottom: 30px;
        }
        
        .message {
            margin-bottom: 20px;
            animation: slideIn 0.5s ease-out;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .message-bot {
            display: flex;
            gap: 15px;
        }
        
        .message-avatar {
            width: 35px;
            height: 35px;
            background: var(--gradient-2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }
        
        .message-content {
            flex: 1;
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 16px;
            padding: 15px 20px;
        }
        
        .message-text {
            color: var(--white);
            line-height: 1.6;
        }
        
        .typing-indicator {
            display: flex;
            gap: 5px;
            padding: 10px;
        }
        
        .typing-dot {
            width: 8px;
            height: 8px;
            background: var(--gray);
            border-radius: 50%;
            animation: typing 1.5s infinite;
        }
        
        .typing-dot:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .typing-dot:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes typing {
            0%, 60%, 100% {
                transform: translateY(0);
                opacity: 0.5;
            }
            30% {
                transform: translateY(-10px);
                opacity: 1;
            }
        }
        
        .chat-input {
            display: flex;
            gap: 15px;
        }
        
        .chat-input input {
            flex: 1;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 15px 20px;
            color: var(--white);
            font-size: 16px;
            outline: none;
            transition: all 0.3s ease;
        }
        
        .chat-input input:focus {
            border-color: var(--primary);
            background: rgba(255, 255, 255, 0.08);
        }
        
        .chat-input button {
            padding: 15px 30px;
            background: var(--gradient-1);
            border: none;
            border-radius: 12px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .chat-input button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }
        
        /* フッター */
        footer {
            padding: 60px 40px 30px;
            background: var(--dark-light);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-content {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-brand {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .footer-logo {
            font-size: 28px;
            font-weight: 700;
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .footer-description {
            color: var(--gray);
            line-height: 1.6;
        }
        
        .social-links {
            display: flex;
            gap: 15px;
        }
        
        .social-link {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .social-link:hover {
            background: var(--primary);
            border-color: var(--primary);
            color: white;
            transform: translateY(-3px);
        }
        
        .footer-column h4 {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 20px;
            color: var(--white);
        }
        
        .footer-links {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .footer-links a {
            color: var(--gray);
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .footer-links a:hover {
            color: var(--primary);
            transform: translateX(5px);
        }
        
        .footer-bottom {
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            color: var(--gray);
        }
        
        /* レスポンシブ対応 */
        @media (max-width: 1024px) {
            .hero-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .hero-visual {
                display: none;
            }
            
            .footer-content {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .nav-cta {
                display: none;
            }
            
            .hamburger {
                display: flex;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
            }
            
            .tech-grid-container {
                grid-template-columns: repeat(3, 1fr);
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .social-links {
                justify-content: center;
            }
            
            .stats-container {
                grid-template-columns: 1fr;
            }
        }
        
        @media (max-width: 480px) {
            nav {
                padding: 15px 20px;
            }
            
            .hero-buttons {
                flex-direction: column;
                width: 100%;
            }
            
            .btn-primary,
            .btn-secondary {
                width: 100%;
            }
            
            .chat-container {
                padding: 20px;
            }
        }`,
    js: `// ローディング画面
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loading').classList.add('hidden');
            }, 1500);
        });
        
        // ヘッダースクロール効果
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // ハンバーガーメニュー
        const hamburger = document.getElementById('hamburger');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
        });
        
        // パーティクル生成
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
            particlesContainer.appendChild(particle);
        }
        
        // 3Dグリッド生成
        const techGrid = document.querySelector('.tech-grid');
        if (techGrid) {
            // 水平線
            for (let i = 0; i < 10; i++) {
                const line = document.createElement('div');
                line.className = 'grid-line horizontal';
                line.style.top = (i * 10) + '%';
                techGrid.appendChild(line);
            }
            // 垂直線
            for (let i = 0; i < 10; i++) {
                const line = document.createElement('div');
                line.className = 'grid-line vertical';
                line.style.left = (i * 10) + '%';
                techGrid.appendChild(line);
            }
            // データポイント
            for (let i = 0; i < 15; i++) {
                const point = document.createElement('div');
                point.className = 'data-point';
                point.style.left = Math.random() * 90 + 5 + '%';
                point.style.top = Math.random() * 90 + 5 + '%';
                point.style.animationDelay = Math.random() * 2 + 's';
                techGrid.appendChild(point);
            }
        }
        
        // カウントアップアニメーション
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const countUp = (element) => {
            const target = parseFloat(element.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                if (element.dataset.target.includes('.')) {
                    element.textContent = current.toFixed(1);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        };
        
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    countUp(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.stat-number').forEach(stat => {
            statsObserver.observe(stat);
        });
        
        // スムーズスクロール
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
        });
        
        // AIチャット機能
        const chatInput = document.querySelector('.chat-input input');
        const chatButton = document.querySelector('.chat-input button');
        const chatMessages = document.querySelector('.chat-messages');
        
        const aiResponses = [
            'ご質問ありがとうございます。詳細な情報をお送りします。',
            'その件について、専門チームがサポートいたします。',
            'AIソリューションの導入で、業務効率が平均40%向上しています。',
            '無料相談を承っております。お気軽にお問い合わせください。',
            '最新の事例をご紹介させていただきます。'
        ];
        
        chatButton.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                // ユーザーメッセージを追加
                const userMessage = document.createElement('div');
                userMessage.className = 'message message-user';
                userMessage.innerHTML = \`
                    <div class="message-content" style="background: rgba(99, 102, 241, 0.2); margin-left: auto; max-width: 70%;">
                        <p class="message-text">\${message}</p>
                    </div>
                \`;
                
                // タイピングインジケーターを削除
                const typingIndicator = document.querySelector('.typing-indicator');
                if (typingIndicator) {
                    typingIndicator.parentElement.parentElement.remove();
                }
                
                chatMessages.appendChild(userMessage);
                chatInput.value = '';
                
                // AIレスポンスを追加
                setTimeout(() => {
                    const aiMessage = document.createElement('div');
                    aiMessage.className = 'message message-bot';
                    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
                    aiMessage.innerHTML = \`
                        <div class="message-avatar">🤖</div>
                        <div class="message-content">
                            <p class="message-text">\${randomResponse}</p>
                        </div>
                    \`;
                    chatMessages.appendChild(aiMessage);
                    
                    // 新しいタイピングインジケーターを追加
                    const newTyping = document.createElement('div');
                    newTyping.className = 'message message-bot';
                    newTyping.innerHTML = \`
                        <div class="message-avatar">🤖</div>
                        <div class="message-content">
                            <div class="typing-indicator">
                                <div class="typing-dot"></div>
                                <div class="typing-dot"></div>
                                <div class="typing-dot"></div>
                            </div>
                        </div>
                    \`;
                    chatMessages.appendChild(newTyping);
                    
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        });
        
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                chatButton.click();
            }
        });
        
        // Intersection Observer for animations
        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        document.querySelectorAll('.service-card, .tech-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease';
            animateOnScroll.observe(item);
        });`
  }
}