import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const itStartupTemplate: WebTemplate = {
  id: 'it-startup',
  title: 'ITスタートアップ',
  category: TEMPLATE_CATEGORIES.IT,
  description: '革新的なITスタートアップ企業向けのモダンでダイナミックなWebサイトテンプレート',
  thumbnail: '/template-images/it-startup.jpg',
  features: [
    'ダイナミックなヒーローセクション',
    'プロダクト機能紹介',
    'チーム紹介',
    '投資家向け情報',
    '技術スタック表示'
  ],
  tags: ['スタートアップ', 'IT', 'テック', 'イノベーション', '革新'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechVision - 未来を創るAIソリューション</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1>TechVision</h1>
                    <span class="tagline">AI-Powered Solutions</span>
                </div>
                <button class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav class="main-nav" id="main-nav">
                    <ul>
                        <li><a href="#product">プロダクト</a></li>
                        <li><a href="#features">機能</a></li>
                        <li><a href="#team">チーム</a></li>
                        <li><a href="#investors">投資家情報</a></li>
                        <li><a href="#contact">お問い合わせ</a></li>
                        <li class="nav-cta"><a href="#demo">無料デモ</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h2>AIで未来の働き方を<span class="highlight">変革</span>する</h2>
                    <p>TechVisionは、最先端のAI技術を活用して、企業の生産性を劇的に向上させるクラウドプラットフォームです。</p>
                    <div class="hero-buttons">
                        <button class="btn-primary">今すぐ始める</button>
                        <button class="btn-secondary" id="play-video">デモを見る ▶</button>
                    </div>
                    <div class="hero-stats">
                        <div class="stat-item">
                            <div class="stat-number">10,000+</div>
                            <div class="stat-label">利用企業</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">95%</div>
                            <div class="stat-label">効率向上</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">24/7</div>
                            <div class="stat-label">サポート</div>
                        </div>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="floating-cards">
                        <div class="card card-1">📊 Analytics</div>
                        <div class="card card-2">🤖 AI Assistant</div>
                        <div class="card card-3">⚡ Automation</div>
                        <div class="card card-4">🔐 Security</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-background"></div>
    </section>

    <section id="product" class="product">
        <div class="container">
            <h2 class="section-title">プロダクト概要</h2>
            <p class="section-subtitle">企業のデジタル変革を支援する包括的なAIプラットフォーム</p>
            
            <div class="product-showcase">
                <div class="product-screen">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" alt="プロダクト画面">
                    <div class="screen-overlay">
                        <div class="demo-button" id="interactive-demo">インタラクティブデモ</div>
                    </div>
                </div>
                <div class="product-info">
                    <h3>次世代のワークフロー自動化</h3>
                    <p>手作業の業務を AI が自動化し、チームの創造性を最大限に引き出します。直感的なインターフェースで、誰でも簡単に AI の恩恵を受けることができます。</p>
                    <div class="product-metrics">
                        <div class="metric">
                            <span class="metric-value">300%</span>
                            <span class="metric-label">生産性向上</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">85%</span>
                            <span class="metric-label">コスト削減</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">2時間</span>
                            <span class="metric-label">セットアップ時間</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="features" class="features">
        <div class="container">
            <h2 class="section-title">主要機能</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🧠</div>
                    <h3>機械学習エンジン</h3>
                    <p>業界最先端の機械学習アルゴリズムで、データから価値のある洞察を自動抽出します。</p>
                    <ul class="feature-list">
                        <li>自然言語処理</li>
                        <li>予測分析</li>
                        <li>パターン認識</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>リアルタイム処理</h3>
                    <p>大量のデータをリアルタイムで処理し、即座に意思決定をサポートします。</p>
                    <ul class="feature-list">
                        <li>ストリーミング処理</li>
                        <li>低レイテンシー</li>
                        <li>スケーラブル</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <h3>エンタープライズセキュリティ</h3>
                    <p>金融機関レベルのセキュリティで、企業の重要なデータを保護します。</p>
                    <ul class="feature-list">
                        <li>エンドツーエンド暗号化</li>
                        <li>多要素認証</li>
                        <li>GDPR準拠</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📈</div>
                    <h3>高度な分析ダッシュボード</h3>
                    <p>直感的なダッシュボードで、ビジネスの成長を可視化・分析できます。</p>
                    <ul class="feature-list">
                        <li>カスタマイズ可能</li>
                        <li>リアルタイム更新</li>
                        <li>エクスポート機能</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔄</div>
                    <h3>API統合</h3>
                    <p>既存のシステムとシームレスに統合し、ワークフローを最適化します。</p>
                    <ul class="feature-list">
                        <li>RESTful API</li>
                        <li>Webhooks</li>
                        <li>SDK提供</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h3>カスタマイズ</h3>
                    <p>業界や企業のニーズに合わせて、プラットフォームをカスタマイズできます。</p>
                    <ul class="feature-list">
                        <li>業界特化テンプレート</li>
                        <li>カスタムワークフロー</li>
                        <li>ブランディング</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="team" class="team">
        <div class="container">
            <h2 class="section-title">チーム</h2>
            <p class="section-subtitle">世界トップクラスの技術者とビジョナリーが集結</p>
            <div class="team-grid">
                <div class="team-member">
                    <div class="member-photo">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" alt="CEO">
                    </div>
                    <div class="member-info">
                        <h3>田中 健太</h3>
                        <p class="member-role">CEO & Co-Founder</p>
                        <p class="member-bio">元Google AI研究員。スタンフォード大学PhD。AIの民主化を目指している。</p>
                        <div class="member-social">
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">Twitter</a>
                        </div>
                    </div>
                </div>
                <div class="team-member">
                    <div class="member-photo">
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b890?w=300&h=300&fit=crop&crop=face" alt="CTO">
                    </div>
                    <div class="member-info">
                        <h3>佐藤 美咲</h3>
                        <p class="member-role">CTO & Co-Founder</p>
                        <p class="member-bio">元Microsoft Azure アーキテクト。クラウドインフラとスケーラビリティのエキスパート。</p>
                        <div class="member-social">
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">GitHub</a>
                        </div>
                    </div>
                </div>
                <div class="team-member">
                    <div class="member-photo">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" alt="CPO">
                    </div>
                    <div class="member-info">
                        <h3>山田 雄介</h3>
                        <p class="member-role">CPO</p>
                        <p class="member-bio">元Apple プロダクトマネージャー。ユーザー体験とプロダクト戦略のスペシャリスト。</p>
                        <div class="member-social">
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">Medium</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="investors" class="investors">
        <div class="container">
            <h2 class="section-title">投資家情報</h2>
            <div class="investor-content">
                <div class="funding-info">
                    <h3>シリーズA資金調達完了</h3>
                    <div class="funding-amount">総額 15億円</div>
                    <p>世界有数のベンチャーキャピタルから信頼をいただき、AI市場のリーダーとして成長を加速させています。</p>
                    <div class="investor-logos">
                        <div class="investor-logo">SoftBank Ventures</div>
                        <div class="investor-logo">Sequoia Capital</div>
                        <div class="investor-logo">Andreessen Horowitz</div>
                    </div>
                </div>
                <div class="growth-metrics">
                    <h3>成長指標</h3>
                    <div class="metrics-grid">
                        <div class="metric-item">
                            <div class="metric-number">400%</div>
                            <div class="metric-desc">年間売上成長率</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-number">150+</div>
                            <div class="metric-desc">従業員数</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-number">25</div>
                            <div class="metric-desc">展開国数</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-number">98%</div>
                            <div class="metric-desc">顧客満足度</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="tech-stack">
        <div class="container">
            <h2 class="section-title">技術スタック</h2>
            <p class="section-subtitle">最新技術を駆使した堅牢なプラットフォーム</p>
            <div class="tech-categories">
                <div class="tech-category">
                    <h3>フロントエンド</h3>
                    <div class="tech-items">
                        <span class="tech-item">React</span>
                        <span class="tech-item">TypeScript</span>
                        <span class="tech-item">Next.js</span>
                        <span class="tech-item">Tailwind CSS</span>
                    </div>
                </div>
                <div class="tech-category">
                    <h3>バックエンド</h3>
                    <div class="tech-items">
                        <span class="tech-item">Node.js</span>
                        <span class="tech-item">Python</span>
                        <span class="tech-item">FastAPI</span>
                        <span class="tech-item">GraphQL</span>
                    </div>
                </div>
                <div class="tech-category">
                    <h3>AI/ML</h3>
                    <div class="tech-items">
                        <span class="tech-item">TensorFlow</span>
                        <span class="tech-item">PyTorch</span>
                        <span class="tech-item">OpenAI</span>
                        <span class="tech-item">Hugging Face</span>
                    </div>
                </div>
                <div class="tech-category">
                    <h3>インフラ</h3>
                    <div class="tech-items">
                        <span class="tech-item">AWS</span>
                        <span class="tech-item">Kubernetes</span>
                        <span class="tech-item">Docker</span>
                        <span class="tech-item">Redis</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-content">
                <div class="contact-info">
                    <h2>お問い合わせ</h2>
                    <p>AIでビジネスを変革する準備はできていますか？まずは無料相談から始めましょう。</p>
                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="contact-icon">📧</div>
                            <div>
                                <h4>メール</h4>
                                <p>hello@techvision.ai</p>
                            </div>
                        </div>
                        <div class="contact-method">
                            <div class="contact-icon">📞</div>
                            <div>
                                <h4>電話</h4>
                                <p>03-1234-5678</p>
                            </div>
                        </div>
                        <div class="contact-method">
                            <div class="contact-icon">📍</div>
                            <div>
                                <h4>オフィス</h4>
                                <p>東京都渋谷区恵比寿1-1-1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <form>
                        <div class="form-row">
                            <input type="text" placeholder="お名前" required>
                            <input type="email" placeholder="メールアドレス" required>
                        </div>
                        <input type="text" placeholder="会社名" required>
                        <select required>
                            <option value="">ご相談内容</option>
                            <option value="demo">デモのご依頼</option>
                            <option value="pricing">料金について</option>
                            <option value="integration">システム統合</option>
                            <option value="other">その他</option>
                        </select>
                        <textarea placeholder="メッセージ" rows="5"></textarea>
                        <button type="submit" class="btn-primary">送信する</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>TechVision</h3>
                    <p>AIで未来の働き方を変革する</p>
                    <div class="social-links">
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">GitHub</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>プロダクト</h4>
                    <ul>
                        <li><a href="#">機能</a></li>
                        <li><a href="#">料金</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">ドキュメント</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>会社情報</h4>
                    <ul>
                        <li><a href="#">会社概要</a></li>
                        <li><a href="#">採用情報</a></li>
                        <li><a href="#">ニュース</a></li>
                        <li><a href="#">ブログ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>サポート</h4>
                    <ul>
                        <li><a href="#">ヘルプセンター</a></li>
                        <li><a href="#">お問い合わせ</a></li>
                        <li><a href="#">プライバシー</a></li>
                        <li><a href="#">利用規約</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 TechVision Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    color: #1a1a2e;
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(26, 26, 46, 0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #6366f1;
    margin: 0;
}

.tagline {
    font-size: 12px;
    color: #64748b;
    display: block;
    margin-top: 2px;
    letter-spacing: 1px;
}

.main-nav ul {
    display: flex;
    list-style: none;
    gap: 40px;
    align-items: center;
}

.main-nav a {
    text-decoration: none;
    color: #1a1a2e;
    font-weight: 500;
    font-size: 14px;
    transition: color 0.3s;
}

.main-nav a:hover {
    color: #6366f1;
}

.nav-cta a {
    background: #6366f1;
    color: white !important;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s;
}

.nav-cta a:hover {
    background: #5048e5;
    transform: translateY(-2px);
}

/* Hamburger Menu */
.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
}

.hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background: #1a1a2e;
    transition: all 0.3s;
    border-radius: 2px;
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

/* Hero */
.hero {
    padding: 140px 0 100px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-text h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 52px;
    font-weight: 700;
    color: white;
    margin-bottom: 24px;
    line-height: 1.2;
}

.highlight {
    background: linear-gradient(45deg, #fbbf24, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-text p {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 40px;
    line-height: 1.7;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 60px;
}

.btn-primary {
    background: #fbbf24;
    color: #1a1a2e;
    padding: 16px 32px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary:hover {
    background: #f59e0b;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(251, 191, 36, 0.3);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 16px 32px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
}

.hero-stats {
    display: flex;
    gap: 40px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 32px;
    font-weight: 700;
    color: #fbbf24;
    display: block;
}

.stat-label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 5px;
}

/* Floating Cards */
.hero-visual {
    position: relative;
    height: 500px;
}

.floating-cards {
    position: relative;
    width: 100%;
    height: 100%;
}

.card {
    position: absolute;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 20px;
    color: white;
    font-weight: 600;
    animation: float 6s ease-in-out infinite;
}

.card-1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.card-2 {
    top: 10%;
    right: 20%;
    animation-delay: 1.5s;
}

.card-3 {
    bottom: 30%;
    left: 20%;
    animation-delay: 3s;
}

.card-4 {
    bottom: 20%;
    right: 10%;
    animation-delay: 4.5s;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

/* Sections */
section {
    padding: 100px 0;
}

.section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
    color: #1a1a2e;
}

.section-subtitle {
    text-align: center;
    color: #64748b;
    margin-bottom: 80px;
    font-size: 18px;
}

/* Product */
.product {
    background: #f8fafc;
}

.product-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.product-screen {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.product-screen img {
    width: 100%;
    height: auto;
    display: block;
}

.screen-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(99, 102, 241, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.product-screen:hover .screen-overlay {
    opacity: 1;
}

.demo-button {
    background: white;
    color: #6366f1;
    padding: 16px 32px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
}

.product-info h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 32px;
    margin-bottom: 24px;
    color: #1a1a2e;
}

.product-info p {
    font-size: 18px;
    color: #64748b;
    line-height: 1.8;
    margin-bottom: 40px;
}

.product-metrics {
    display: flex;
    gap: 40px;
}

.metric {
    text-align: center;
}

.metric-value {
    font-size: 28px;
    font-weight: 700;
    color: #6366f1;
    display: block;
}

.metric-label {
    font-size: 14px;
    color: #64748b;
    margin-top: 5px;
}

/* Features */
.features {
    background: white;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
}

.feature-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 40px;
    text-align: center;
    transition: all 0.3s;
}

.feature-card:hover {
    border-color: #6366f1;
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
}

.feature-icon {
    font-size: 48px;
    margin-bottom: 24px;
}

.feature-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #1a1a2e;
}

.feature-card p {
    color: #64748b;
    margin-bottom: 24px;
    line-height: 1.7;
}

.feature-list {
    list-style: none;
    text-align: left;
}

.feature-list li {
    color: #64748b;
    margin-bottom: 8px;
    position: relative;
    padding-left: 20px;
}

.feature-list li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: 600;
}

/* Team */
.team {
    background: #f8fafc;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.team-member {
    background: white;
    border-radius: 16px;
    padding: 40px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.member-photo {
    width: 120px;
    height: 120px;
    margin: 0 auto 24px;
    border-radius: 50%;
    overflow: hidden;
}

.member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.member-info h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #1a1a2e;
}

.member-role {
    color: #6366f1;
    font-weight: 500;
    margin-bottom: 16px;
}

.member-bio {
    color: #64748b;
    line-height: 1.7;
    margin-bottom: 24px;
}

.member-social {
    display: flex;
    gap: 16px;
    justify-content: center;
}

.social-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.social-link:hover {
    color: #6366f1;
}

/* Investors */
.investors {
    background: white;
}

.investor-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.funding-info h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 32px;
    margin-bottom: 16px;
    color: #1a1a2e;
}

.funding-amount {
    font-size: 48px;
    font-weight: 700;
    color: #6366f1;
    margin-bottom: 24px;
}

.funding-info p {
    color: #64748b;
    line-height: 1.8;
    margin-bottom: 40px;
}

.investor-logos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.investor-logo {
    background: #f8fafc;
    padding: 12px 24px;
    border-radius: 8px;
    color: #64748b;
    font-weight: 500;
    border: 1px solid #e2e8f0;
}

.growth-metrics h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 32px;
    margin-bottom: 40px;
    color: #1a1a2e;
}

.metrics-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.metric-item {
    text-align: center;
}

.metric-number {
    font-size: 40px;
    font-weight: 700;
    color: #6366f1;
    display: block;
}

.metric-desc {
    color: #64748b;
    margin-top: 8px;
}

/* Tech Stack */
.tech-stack {
    background: #f8fafc;
}

.tech-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.tech-category h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    color: #1a1a2e;
}

.tech-items {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.tech-item {
    background: white;
    color: #6366f1;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #e2e8f0;
}

/* Contact */
.contact {
    background: white;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
}

.contact-info h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 36px;
    margin-bottom: 24px;
    color: #1a1a2e;
}

.contact-info p {
    color: #64748b;
    line-height: 1.8;
    margin-bottom: 40px;
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.contact-method {
    display: flex;
    align-items: center;
    gap: 16px;
}

.contact-icon {
    font-size: 24px;
    width: 50px;
    text-align: center;
}

.contact-method h4 {
    font-weight: 600;
    color: #1a1a2e;
    margin-bottom: 4px;
}

.contact-method p {
    color: #64748b;
    margin: 0;
}

.contact-form {
    background: #f8fafc;
    padding: 40px;
    border-radius: 16px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
    width: 100%;
    padding: 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: #6366f1;
}

/* Footer */
.footer {
    background: #1a1a2e;
    color: white;
    padding: 80px 0 40px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 60px;
    margin-bottom: 60px;
}

.footer-section h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    margin-bottom: 16px;
    color: #6366f1;
}

.footer-section h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    color: white;
}

.footer-section p {
    color: #94a3b8;
    line-height: 1.7;
    margin-bottom: 24px;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 12px;
}

.footer-section a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #6366f1;
}

.social-links {
    display: flex;
    gap: 16px;
}

.social-links a {
    background: #374151;
    padding: 12px 16px;
    border-radius: 8px;
    transition: background 0.3s;
}

.social-links a:hover {
    background: #6366f1;
}

.footer-bottom {
    padding-top: 40px;
    border-top: 1px solid #374151;
    text-align: center;
    color: #94a3b8;
}

/* Responsive Design */
@media (max-width: 768px) {
    .header-content {
        position: relative;
    }
    
    .hamburger {
        display: flex;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    
    .main-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .main-nav.active {
        display: block;
    }
    
    .main-nav ul {
        flex-direction: column;
        padding: 30px 20px;
        gap: 20px;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .hero-text h2 {
        font-size: 36px;
    }
    
    .hero-stats {
        justify-content: center;
    }
    
    .product-showcase,
    .investor-content,
    .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .features-grid,
    .team-grid,
    .tech-categories {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .social-links {
        justify-content: center;
    }
}`,
    js: `// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

if (hamburger && mainNav) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // メニューリンクをクリックしたら閉じる
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
}

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// インタラクティブデモボタン
document.getElementById('interactive-demo')?.addEventListener('click', function() {
    alert('インタラクティブデモを開始します（実装予定）');
});

// ビデオ再生ボタン
document.getElementById('play-video')?.addEventListener('click', function() {
    alert('プロダクトデモビデオを再生します（実装予定）');
});

// フォーム送信
document.querySelector('.contact-form form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('お問い合わせを送信しました。担当者よりご連絡いたします。');
});

// CTAボタン
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        const text = this.textContent;
        if (text.includes('始める')) {
            alert('無料トライアルページへ遷移します（実装予定）');
        } else if (text.includes('送信')) {
            // フォーム送信は上で処理
            return;
        }
    });
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素を観察
window.addEventListener('load', () => {
    const animateElements = document.querySelectorAll('.feature-card, .team-member, .tech-category');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// パーティクル効果（シンプル版）
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(99, 102, 241, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.appendChild(particle);
        
        const rect = heroSection.getBoundingClientRect();
        particle.style.left = Math.random() * rect.width + 'px';
        particle.style.top = rect.height + 'px';
        
        particle.animate([
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: 'translateY(-' + rect.height + 'px)', opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'linear'
        }).addEventListener('finish', () => {
            particle.remove();
        });
    }
}

// パーティクルを定期的に生成
setInterval(createParticle, 500);`
  }
}