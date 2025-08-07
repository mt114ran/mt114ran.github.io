import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioAgencyTemplate: WebTemplate = {
  id: 'portfolio-agency',
  title: 'ポートフォリオ - エージェンシー',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: 'デザインエージェンシー・制作会社向けポートフォリオサイト',
  thumbnail: '/template-images/portfolio-agency.jpg',
  features: [
    'プロジェクト事例',
    'チーム紹介',
    'サービス一覧',
    'クライアント実績'
  ],
  tags: ['ポートフォリオ', 'エージェンシー', '制作会社', 'チーム'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Agency - Portfolio</title>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">CREATIVE AGENCY</div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#clients">Clients</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Creative Solutions</h1>
            <p class="hero-subtitle">ブランドの可能性を最大限に引き出すクリエイティブエージェンシー</p>
            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-number">200+</span>
                    <span class="stat-label">プロジェクト</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">クライアント</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">15+</span>
                    <span class="stat-label">アワード</span>
                </div>
            </div>
            <a href="#work" class="hero-cta">プロジェクトを見る</a>
        </div>
        <div class="hero-visual">
            <div class="visual-grid">
                <div class="visual-item">
                    <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=300&fit=crop" alt="Project">
                </div>
                <div class="visual-item">
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop" alt="Project">
                </div>
                <div class="visual-item">
                    <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=300&h=300&fit=crop" alt="Project">
                </div>
                <div class="visual-item">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop" alt="Project">
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Our Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🎨</div>
                    <h3>ブランディング</h3>
                    <p>ブランドアイデンティティの構築から戦略策定まで、包括的なブランディングサービスを提供します。</p>
                    <ul class="service-list">
                        <li>ロゴデザイン</li>
                        <li>ブランドガイドライン</li>
                        <li>ネーミング</li>
                        <li>ブランド戦略</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">💻</div>
                    <h3>Webデザイン・開発</h3>
                    <p>ユーザー体験を重視したWebサイトの企画・デザイン・開発を一貫して行います。</p>
                    <ul class="service-list">
                        <li>UI/UXデザイン</li>
                        <li>レスポンシブ対応</li>
                        <li>CMS構築</li>
                        <li>SEO対策</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">📱</div>
                    <h3>アプリ開発</h3>
                    <p>iOS・Android対応のモバイルアプリケーションの企画・デザイン・開発を行います。</p>
                    <ul class="service-list">
                        <li>ネイティブアプリ</li>
                        <li>ハイブリッドアプリ</li>
                        <li>プロトタイピング</li>
                        <li>アプリストア申請</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">📈</div>
                    <h3>デジタルマーケティング</h3>
                    <p>データドリブンなマーケティング戦略で、ビジネス成長を支援します。</p>
                    <ul class="service-list">
                        <li>広告運用</li>
                        <li>SNS運用</li>
                        <li>コンテンツ制作</li>
                        <li>アナリティクス</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="work" class="work">
        <div class="container">
            <h2 class="section-title">Featured Work</h2>
            <div class="work-filter">
                <button class="filter-btn active" data-category="all">All</button>
                <button class="filter-btn" data-category="branding">Branding</button>
                <button class="filter-btn" data-category="web">Web</button>
                <button class="filter-btn" data-category="app">App</button>
                <button class="filter-btn" data-category="marketing">Marketing</button>
            </div>
            <div class="work-grid">
                <div class="work-item" data-category="branding">
                    <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop" alt="Branding Project">
                    <div class="work-overlay">
                        <div class="work-info">
                            <span class="work-category">Branding</span>
                            <h3>スタートアップブランディング</h3>
                            <p>新進IT企業のブランドアイデンティティを構築</p>
                        </div>
                    </div>
                </div>
                <div class="work-item" data-category="web">
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop" alt="Web Project">
                    <div class="work-overlay">
                        <div class="work-info">
                            <span class="work-category">Web Design</span>
                            <h3>コーポレートサイト</h3>
                            <p>大手企業のコーポレートサイトリニューアル</p>
                        </div>
                    </div>
                </div>
                <div class="work-item" data-category="app">
                    <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop" alt="App Project">
                    <div class="work-overlay">
                        <div class="work-info">
                            <span class="work-category">App Development</span>
                            <h3>フィンテックアプリ</h3>
                            <p>金融サービス向けモバイルアプリ開発</p>
                        </div>
                    </div>
                </div>
                <div class="work-item" data-category="marketing">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop" alt="Marketing Project">
                    <div class="work-overlay">
                        <div class="work-info">
                            <span class="work-category">Digital Marketing</span>
                            <h3>マーケティングキャンペーン</h3>
                            <p>ECサイト向けマーケティング戦略</p>
                        </div>
                    </div>
                </div>
                <div class="work-item" data-category="branding">
                    <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop" alt="Branding Project">
                    <div class="work-overlay">
                        <div class="work-info">
                            <span class="work-category">Branding</span>
                            <h3>リブランディング</h3>
                            <p>老舗企業のリブランディングプロジェクト</p>
                        </div>
                    </div>
                </div>
                <div class="work-item" data-category="web">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Web Project">
                    <div class="work-overlay">
                        <div class="work-info">
                            <span class="work-category">Web Development</span>
                            <h3>ECサイト構築</h3>
                            <p>大規模ECサイトの設計・開発</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="team" class="team">
        <div class="container">
            <h2 class="section-title">Our Team</h2>
            <div class="team-grid">
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="Team Member">
                    <div class="member-info">
                        <h3>田中 太郎</h3>
                        <p class="member-role">Creative Director</p>
                        <p class="member-bio">15年の経験を持つクリエイティブディレクター。ブランディングとデザイン戦略を専門とする。</p>
                    </div>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616c64c8d05?w=300&h=300&fit=crop" alt="Team Member">
                    <div class="member-info">
                        <h3>佐藤 花子</h3>
                        <p class="member-role">UI/UX Designer</p>
                        <p class="member-bio">ユーザー中心のデザインアプローチでWebサイトとアプリのUI/UXを手がける。</p>
                    </div>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" alt="Team Member">
                    <div class="member-info">
                        <h3>山田 次郎</h3>
                        <p class="member-role">Tech Lead</p>
                        <p class="member-bio">最新技術を活用したWeb開発とアプリ開発のテクニカルリードを担当。</p>
                    </div>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" alt="Team Member">
                    <div class="member-info">
                        <h3>鈴木 美咲</h3>
                        <p class="member-role">Marketing Strategist</p>
                        <p class="member-bio">データ分析に基づいたデジタルマーケティング戦略の企画・実行を行う。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="clients" class="clients">
        <div class="container">
            <h2 class="section-title">Our Clients</h2>
            <div class="clients-logos">
                <div class="client-logo">
                    <div class="logo-placeholder">COMPANY A</div>
                </div>
                <div class="client-logo">
                    <div class="logo-placeholder">COMPANY B</div>
                </div>
                <div class="client-logo">
                    <div class="logo-placeholder">COMPANY C</div>
                </div>
                <div class="client-logo">
                    <div class="logo-placeholder">COMPANY D</div>
                </div>
                <div class="client-logo">
                    <div class="logo-placeholder">COMPANY E</div>
                </div>
                <div class="client-logo">
                    <div class="logo-placeholder">COMPANY F</div>
                </div>
            </div>
            <div class="testimonials">
                <div class="testimonial">
                    <p>"エージェンシーの創造力と技術力により、私たちのブランドは新たな次元に到達しました。"</p>
                    <cite>- 株式会社A 代表取締役</cite>
                </div>
                <div class="testimonial">
                    <p>"プロジェクトの進行管理から最終的な成果まで、すべてにおいて期待を上回る結果でした。"</p>
                    <cite>- 株式会社B マーケティング部長</cite>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Let's Work Together</h2>
            <div class="contact-content">
                <div class="contact-text">
                    <h3>プロジェクトのご相談</h3>
                    <p>あなたのビジネスを次のレベルに押し上げるクリエイティブソリューションをご提案します。まずはお気軽にご相談ください。</p>
                    <div class="contact-info">
                        <div class="info-item">
                            <strong>Email</strong>
                            <p>hello@creative-agency.com</p>
                        </div>
                        <div class="info-item">
                            <strong>Phone</strong>
                            <p>03-0000-0000</p>
                        </div>
                        <div class="info-item">
                            <strong>Address</strong>
                            <p>東京都渋谷区○○1-2-3<br>○○ビル 5F</p>
                        </div>
                    </div>
                </div>
                <form class="contact-form">
                    <div class="form-row">
                        <div class="form-group">
                            <input type="text" placeholder="会社名" required>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="お名前" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <input type="email" placeholder="メールアドレス" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" placeholder="電話番号">
                        </div>
                    </div>
                    <div class="form-group">
                        <select required>
                            <option value="">サービスを選択</option>
                            <option value="branding">ブランディング</option>
                            <option value="web">Webデザイン・開発</option>
                            <option value="app">アプリ開発</option>
                            <option value="marketing">デジタルマーケティング</option>
                            <option value="other">その他</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="プロジェクトの詳細をお聞かせください" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">お問い合わせを送信</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="logo">CREATIVE AGENCY</div>
                    <p>クリエイティブな力でビジネスを変革するパートナー</p>
                </div>
                <div class="footer-links">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#services">ブランディング</a></li>
                        <li><a href="#services">Webデザイン</a></li>
                        <li><a href="#services">アプリ開発</a></li>
                        <li><a href="#services">マーケティング</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Behance</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Creative Agency. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #fff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0,0,0,0.05);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #2c3e50;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
}

.menu-toggle span {
    width: 25px;
    height: 2px;
    background: #333;
    margin: 3px 0;
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.nav-menu a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
}

.nav-menu a:hover {
    color: #e74c3c;
}

/* Hero */
.hero {
    padding: 120px 0 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    min-height: 100vh;
}

.hero-content {
    padding-left: 2rem;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #2c3e50;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 3rem;
    line-height: 1.6;
}

.hero-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #e74c3c;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.9rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.hero-cta {
    display: inline-block;
    padding: 1.2rem 2.5rem;
    background: #e74c3c;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s;
    text-transform: uppercase;
}

.hero-cta:hover {
    background: #c0392b;
    transform: translateY(-2px);
}

.hero-visual {
    padding-right: 2rem;
}

.visual-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    transform: rotate(5deg);
}

.visual-item {
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.visual-item:hover {
    transform: translateY(-10px);
}

.visual-item:nth-child(even) {
    margin-top: 2rem;
}

.visual-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

/* Services */
.services {
    padding: 100px 0;
    background: #f8f9fa;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 4rem;
    color: #2c3e50;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: transform 0.3s;
    text-align: center;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-weight: 600;
}

.service-card > p {
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.7;
}

.service-list {
    list-style: none;
    text-align: left;
}

.service-list li {
    padding: 0.5rem 0;
    color: #666;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding-left: 1.5rem;
}

.service-list li:before {
    content: "→";
    position: absolute;
    left: 0;
    color: #e74c3c;
    font-weight: bold;
}

/* Work */
.work {
    padding: 100px 0;
}

.work-filter {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 1rem 2rem;
    background: transparent;
    border: 2px solid #e0e0e0;
    color: #666;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 50px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.filter-btn.active,
.filter-btn:hover {
    background: #e74c3c;
    color: white;
    border-color: #e74c3c;
}

.work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
}

.work-item {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.work-item:hover {
    transform: translateY(-10px);
}

.work-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s;
}

.work-item:hover img {
    transform: scale(1.1);
}

.work-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
    color: white;
    padding: 2rem;
    transform: translateY(50%);
    transition: transform 0.3s;
}

.work-item:hover .work-overlay {
    transform: translateY(0);
}

.work-category {
    display: inline-block;
    background: #e74c3c;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.work-info h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.work-info p {
    font-size: 0.9rem;
    opacity: 0.9;
}

/* Team */
.team {
    padding: 100px 0;
    background: #f8f9fa;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.team-member {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: transform 0.3s;
    text-align: center;
}

.team-member:hover {
    transform: translateY(-10px);
}

.team-member img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.member-info {
    padding: 2rem;
}

.member-info h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.member-role {
    color: #e74c3c;
    font-weight: 500;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
}

.member-bio {
    color: #666;
    line-height: 1.6;
    font-size: 0.9rem;
}

/* Clients */
.clients {
    padding: 100px 0;
}

.clients-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.client-logo {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
}

.client-logo:hover {
    transform: translateY(-5px);
}

.logo-placeholder {
    font-weight: 700;
    color: #666;
    font-size: 1.1rem;
    letter-spacing: 2px;
}

.testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
}

.testimonial {
    background: white;
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border-left: 4px solid #e74c3c;
}

.testimonial p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
    font-style: italic;
    margin-bottom: 1.5rem;
}

.testimonial cite {
    color: #666;
    font-size: 0.9rem;
    font-style: normal;
}

/* Contact */
.contact {
    padding: 100px 0;
    background: #2c3e50;
    color: white;
}

.contact .section-title {
    color: white;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.contact-text h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white;
}

.contact-text > p {
    color: #bdc3c7;
    margin-bottom: 2rem;
    line-height: 1.7;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.info-item strong {
    display: block;
    color: #e74c3c;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
}

.info-item p {
    color: #bdc3c7;
    line-height: 1.6;
}

.contact-form {
    background: rgba(255,255,255,0.05);
    padding: 2rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    color: white;
    font-size: 1rem;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(255,255,255,0.6);
}

.submit-btn {
    width: 100%;
    padding: 1.2rem 2rem;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.submit-btn:hover {
    background: #c0392b;
    transform: translateY(-2px);
}

/* Footer */
.footer {
    background: #1a1a1a;
    color: white;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-brand .logo {
    color: #e74c3c;
    margin-bottom: 1rem;
}

.footer-brand p {
    color: #bdc3c7;
    line-height: 1.6;
}

.footer-links h4,
.footer-social h4 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.footer-links ul {
    list-style: none;
}

.footer-links li {
    margin-bottom: 0.5rem;
}

.footer-links a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: #e74c3c;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: #bdc3c7;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid #555;
    border-radius: 20px;
    font-size: 0.9rem;
    transition: all 0.3s;
}

.social-links a:hover {
    color: white;
    border-color: #e74c3c;
    background: #e74c3c;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #333;
    color: #666;
}

/* Responsive */
@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }
    
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 1rem 0;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 100px 0 60px;
    }
    
    .hero-content {
        padding-left: 0;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-stats {
        justify-content: center;
    }
    
    .visual-grid {
        transform: none;
        max-width: 400px;
        margin: 0 auto;
    }
    
    .services-grid,
    .work-grid,
    .team-grid {
        grid-template-columns: 1fr;
    }
    
    .clients-logos {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .testimonials {
        grid-template-columns: 1fr;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .form-row {
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
    js: `// メニュートグル
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

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
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// 作品フィルター
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // アクティブクラス切り替え
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.dataset.category;
        const workItems = document.querySelectorAll('.work-item');
        
        workItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 統計アニメーション
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                stat.textContent = stat.textContent.includes('+') ? target + '+' : target;
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 50);
    });
}

// スクロール時の統計アニメーション
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
});

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    observer.observe(heroStats);
}

// フォーム送信
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('お問い合わせありがとうございます。担当者より24時間以内にご連絡させていただきます。');
    this.reset();
});

// ビジュアルグリッドホバー効果
document.querySelectorAll('.visual-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});`
  }
}