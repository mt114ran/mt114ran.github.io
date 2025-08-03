import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioConsultantTemplate: WebTemplate = {
  id: 'portfolio-consultant',
  title: 'ポートフォリオ - コンサルタント',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: 'ビジネスコンサルタント・経営コンサルタント向けポートフォリオサイト',
  thumbnail: '/template-images/portfolio-consultant.jpg',
  features: [
    'コンサルティング実績',
    '専門分野紹介',
    'セミナー情報',
    'ブログ・コラム'
  ],
  tags: ['ポートフォリオ', 'コンサルタント', '経営', 'ビジネス'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Consultant - Professional Services</title>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">CONSULTANT</div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#expertise">Expertise</a></li>
                    <li><a href="#results">Results</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1 class="hero-title">Business Growth Consultant</h1>
                <p class="hero-subtitle">企業の成長を加速する戦略コンサルティング</p>
                <p class="hero-description">15年の実績と豊富な経験で、あなたのビジネスを次のレベルへ導きます。</p>
                <div class="hero-cta">
                    <a href="#contact" class="cta-primary">無料相談を申し込む</a>
                    <a href="#results" class="cta-secondary">実績を見る</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" alt="Business Consultant">
            </div>
        </div>
    </section>

    <section class="achievements">
        <div class="container">
            <div class="achievements-grid">
                <div class="achievement-item">
                    <div class="achievement-number">200+</div>
                    <div class="achievement-label">プロジェクト実績</div>
                </div>
                <div class="achievement-item">
                    <div class="achievement-number">95%</div>
                    <div class="achievement-label">クライアント満足度</div>
                </div>
                <div class="achievement-item">
                    <div class="achievement-number">150M+</div>
                    <div class="achievement-label">売上向上支援額</div>
                </div>
                <div class="achievement-item">
                    <div class="achievement-number">15</div>
                    <div class="achievement-label">年の経験</div>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Consulting Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-header">
                        <div class="service-icon">📊</div>
                        <h3>経営戦略</h3>
                    </div>
                    <p class="service-description">企業の長期的な成長戦略の策定と実行支援を行います。市場分析から競合分析まで包括的にサポート。</p>
                    <ul class="service-features">
                        <li>事業戦略策定</li>
                        <li>市場分析・競合分析</li>
                        <li>新規事業開発</li>
                        <li>M&A支援</li>
                    </ul>
                    <div class="service-price">月額 50万円〜</div>
                </div>
                <div class="service-card">
                    <div class="service-header">
                        <div class="service-icon">💰</div>
                        <h3>財務改善</h3>
                    </div>
                    <p class="service-description">キャッシュフローの改善から資金調達まで、財務面の課題解決をトータルサポートします。</p>
                    <ul class="service-features">
                        <li>財務分析・改善</li>
                        <li>資金調達支援</li>
                        <li>コスト削減</li>
                        <li>予算管理システム構築</li>
                    </ul>
                    <div class="service-price">月額 40万円〜</div>
                </div>
                <div class="service-card">
                    <div class="service-header">
                        <div class="service-icon">🚀</div>
                        <h3>組織変革</h3>
                    </div>
                    <p class="service-description">組織の生産性向上と従業員エンゲージメント向上を実現する組織改革を支援します。</p>
                    <ul class="service-features">
                        <li>組織診断・改革</li>
                        <li>人事制度設計</li>
                        <li>業務プロセス改善</li>
                        <li>チームビルディング</li>
                    </ul>
                    <div class="service-price">月額 35万円〜</div>
                </div>
                <div class="service-card">
                    <div class="service-header">
                        <div class="service-icon">📈</div>
                        <h3>マーケティング</h3>
                    </div>
                    <p class="service-description">デジタル時代に対応したマーケティング戦略の立案と実行支援を行います。</p>
                    <ul class="service-features">
                        <li>マーケティング戦略</li>
                        <li>ブランド戦略</li>
                        <li>デジタル施策</li>
                        <li>営業力強化</li>
                    </ul>
                    <div class="service-price">月額 30万円〜</div>
                </div>
            </div>
        </div>
    </section>

    <section id="expertise" class="expertise">
        <div class="container">
            <h2 class="section-title">Areas of Expertise</h2>
            <div class="expertise-content">
                <div class="expertise-text">
                    <h3>専門分野</h3>
                    <p>15年間のコンサルティング経験を通じて培った専門知識と実践的なノウハウで、様々な業界の課題解決をサポートします。</p>
                    <div class="expertise-stats">
                        <div class="stat-item">
                            <span class="stat-title">主要業界</span>
                            <span class="stat-value">製造業、IT、小売業、サービス業</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-title">企業規模</span>
                            <span class="stat-value">スタートアップ〜上場企業</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-title">専門資格</span>
                            <span class="stat-value">MBA、中小企業診断士、PMP</span>
                        </div>
                    </div>
                </div>
                <div class="expertise-areas">
                    <div class="area-item">
                        <h4>戦略策定</h4>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 95%"></div>
                        </div>
                    </div>
                    <div class="area-item">
                        <h4>財務分析</h4>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 90%"></div>
                        </div>
                    </div>
                    <div class="area-item">
                        <h4>組織開発</h4>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="area-item">
                        <h4>プロジェクト管理</h4>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 92%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="results" class="results">
        <div class="container">
            <h2 class="section-title">Success Stories</h2>
            <div class="results-grid">
                <div class="result-card">
                    <div class="result-category">製造業</div>
                    <h3>売上3倍達成</h3>
                    <p>老舗製造業の新規事業開発支援により、3年で売上を3倍に拡大。海外展開も成功し、業界のリーディングカンパニーに成長。</p>
                    <div class="result-metrics">
                        <div class="metric">
                            <span class="metric-value">300%</span>
                            <span class="metric-label">売上向上</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">5か国</span>
                            <span class="metric-label">海外展開</span>
                        </div>
                    </div>
                </div>
                <div class="result-card">
                    <div class="result-category">IT企業</div>
                    <h3>IPO実現</h3>
                    <p>スタートアップの成長戦略策定から組織体制構築まで総合支援。3年でIPOを実現し、時価総額100億円企業に成長。</p>
                    <div class="result-metrics">
                        <div class="metric">
                            <span class="metric-value">100億円</span>
                            <span class="metric-label">時価総額</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">200名</span>
                            <span class="metric-label">組織拡大</span>
                        </div>
                    </div>
                </div>
                <div class="result-card">
                    <div class="result-category">小売業</div>
                    <h3>DX推進成功</h3>
                    <p>伝統的な小売業のデジタル変革を支援。ECサイト構築とオムニチャネル戦略により売上を2倍に向上。</p>
                    <div class="result-metrics">
                        <div class="metric">
                            <span class="metric-value">200%</span>
                            <span class="metric-label">売上向上</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">50%</span>
                            <span class="metric-label">EC売上比率</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop" alt="Consultant Profile">
                </div>
                <div class="about-text">
                    <h3>田中 一郎</h3>
                    <p class="about-title">経営戦略コンサルタント / MBA</p>
                    <p>大手コンサルティングファームでの経験を経て独立。これまでに200社以上の企業の成長支援を行い、多くの成功事例を創出してきました。</p>
                    <p>「理論と実践の融合」をモットーに、クライアント企業の持続的な成長を実現するパートナーとして活動しています。</p>
                    
                    <div class="credentials">
                        <h4>経歴・資格</h4>
                        <ul class="credentials-list">
                            <li>慶應義塾大学大学院経営管理研究科 MBA取得</li>
                            <li>中小企業診断士</li>
                            <li>PMP（プロジェクトマネジメント・プロフェッショナル）</li>
                            <li>大手コンサルティングファーム マネージャー（8年）</li>
                            <li>独立コンサルタント（7年）</li>
                        </ul>
                    </div>
                    
                    <div class="philosophy">
                        <h4>コンサルティング方針</h4>
                        <blockquote>
                            「企業の真の課題を見極め、実行可能な解決策を提供する。理論だけでなく、現場に根ざした実践的なアプローチで、クライアントと共に歩み続けます。」
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="blog" class="blog">
        <div class="container">
            <h2 class="section-title">Latest Insights</h2>
            <div class="blog-grid">
                <article class="blog-card">
                    <div class="blog-date">2024.03.15</div>
                    <div class="blog-category">経営戦略</div>
                    <h3>デジタル時代の経営戦略立案のポイント</h3>
                    <p>急速に変化するデジタル環境において、企業はどのような戦略を立てるべきか。成功事例を交えながら解説します。</p>
                    <div class="blog-meta">
                        <span class="read-time">5分で読める</span>
                        <a href="#" class="read-more">続きを読む</a>
                    </div>
                </article>
                <article class="blog-card">
                    <div class="blog-date">2024.03.10</div>
                    <div class="blog-category">組織開発</div>
                    <h3>リモートワーク時代の組織マネジメント</h3>
                    <p>リモートワークが常態化した今、組織の生産性を維持・向上させるために必要な施策について考察します。</p>
                    <div class="blog-meta">
                        <span class="read-time">7分で読める</span>
                        <a href="#" class="read-more">続きを読む</a>
                    </div>
                </article>
                <article class="blog-card">
                    <div class="blog-date">2024.03.05</div>
                    <div class="blog-category">財務管理</div>
                    <h3>中小企業のキャッシュフロー改善手法</h3>
                    <p>中小企業特有の財務課題に対する具体的な改善アプローチを、実際の事例をもとに紹介します。</p>
                    <div class="blog-meta">
                        <span class="read-time">6分で読める</span>
                        <a href="#" class="read-more">続きを読む</a>
                    </div>
                </article>
            </div>
            <div class="blog-cta">
                <a href="#" class="btn-secondary">すべての記事を見る</a>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get Started</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>無料相談実施中</h3>
                    <p>まずはお気軽にご相談ください。初回相談（60分）は無料で承っております。現在の課題をお聞かせいただき、最適なソリューションをご提案いたします。</p>
                    
                    <div class="consultation-process">
                        <h4>相談の流れ</h4>
                        <div class="process-steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h5>お問い合わせ</h5>
                                    <p>フォームまたはお電話でご連絡</p>
                                </div>
                            </div>
                            <div class="step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h5>初回相談</h5>
                                    <p>課題のヒアリングと解決方針の提示</p>
                                </div>
                            </div>
                            <div class="step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h5>提案書作成</h5>
                                    <p>詳細な提案書とお見積もりを提出</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-details">
                        <div class="detail-item">
                            <strong>電話</strong>
                            <p>03-0000-0000</p>
                            <span>平日 9:00-18:00</span>
                        </div>
                        <div class="detail-item">
                            <strong>メール</strong>
                            <p>consultant@example.com</p>
                            <span>24時間以内に返信</span>
                        </div>
                    </div>
                </div>
                
                <form class="contact-form">
                    <h4>お問い合わせフォーム</h4>
                    <div class="form-group">
                        <label>会社名 *</label>
                        <input type="text" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>お名前 *</label>
                            <input type="text" required>
                        </div>
                        <div class="form-group">
                            <label>役職</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>メールアドレス *</label>
                            <input type="email" required>
                        </div>
                        <div class="form-group">
                            <label>電話番号</label>
                            <input type="tel">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>ご相談内容 *</label>
                        <select required>
                            <option value="">選択してください</option>
                            <option value="strategy">経営戦略</option>
                            <option value="finance">財務改善</option>
                            <option value="organization">組織変革</option>
                            <option value="marketing">マーケティング</option>
                            <option value="other">その他</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>詳細・ご質問</label>
                        <textarea rows="5" placeholder="現在の課題や相談したい内容をお聞かせください"></textarea>
                    </div>
                    <div class="form-group">
                        <label>希望相談方法</label>
                        <div class="radio-group">
                            <label class="radio-label">
                                <input type="radio" name="method" value="online">
                                <span>オンライン</span>
                            </label>
                            <label class="radio-label">
                                <input type="radio" name="method" value="office">
                                <span>対面（当方オフィス）</span>
                            </label>
                            <label class="radio-label">
                                <input type="radio" name="method" value="client">
                                <span>対面（貴社訪問）</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="submit-btn">無料相談を申し込む</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="logo">CONSULTANT</div>
                    <p>Business Growth Consulting</p>
                    <p>〒000-0000 東京都千代田区○○1-2-3</p>
                </div>
                <div class="footer-nav">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#services">経営戦略</a></li>
                        <li><a href="#services">財務改善</a></li>
                        <li><a href="#services">組織変革</a></li>
                        <li><a href="#services">マーケティング</a></li>
                    </ul>
                </div>
                <div class="footer-info">
                    <h4>Contact</h4>
                    <p>Tel: 03-0000-0000</p>
                    <p>Email: consultant@example.com</p>
                    <div class="social-links">
                        <a href="#" aria-label="LinkedIn">LinkedIn</a>
                        <a href="#" aria-label="Twitter">Twitter</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Business Consultant. All rights reserved.</p>
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    border-bottom: 1px solid #e0e0e0;
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
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #2563eb;
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
    gap: 2rem;
}

.nav-menu a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
}

.nav-menu a:hover {
    color: #2563eb;
}

/* Hero */
.hero {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: center;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #1e293b;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.5rem;
    color: #2563eb;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.hero-description {
    font-size: 1.1rem;
    color: #64748b;
    margin-bottom: 2.5rem;
    line-height: 1.7;
}

.hero-cta {
    display: flex;
    gap: 1.5rem;
}

.cta-primary,
.cta-secondary {
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.cta-primary {
    background: #2563eb;
    color: white;
}

.cta-primary:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
}

.cta-secondary {
    background: transparent;
    color: #2563eb;
    border: 2px solid #2563eb;
}

.cta-secondary:hover {
    background: #2563eb;
    color: white;
}

.hero-image {
    text-align: center;
}

.hero-image img {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Achievements */
.achievements {
    padding: 60px 0;
    background: #1e293b;
    color: white;
}

.achievements-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    text-align: center;
}

.achievement-number {
    font-size: 3rem;
    font-weight: 700;
    color: #60a5fa;
    margin-bottom: 0.5rem;
}

.achievement-label {
    font-size: 1rem;
    color: #cbd5e1;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Services */
.services {
    padding: 100px 0;
    background: #f8fafc;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 4rem;
    color: #1e293b;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: transform 0.3s;
    border-top: 4px solid #2563eb;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
}

.service-icon {
    font-size: 2.5rem;
    margin-right: 1rem;
}

.service-card h3 {
    font-size: 1.5rem;
    color: #1e293b;
    font-weight: 600;
}

.service-description {
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.7;
}

.service-features {
    list-style: none;
    margin-bottom: 2rem;
}

.service-features li {
    padding: 0.5rem 0;
    color: #475569;
    position: relative;
    padding-left: 1.5rem;
}

.service-features li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: bold;
}

.service-price {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2563eb;
    text-align: center;
    padding: 1rem;
    background: #eff6ff;
    border-radius: 8px;
}

/* Expertise */
.expertise {
    padding: 100px 0;
}

.expertise-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.expertise-text h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
}

.expertise-text > p {
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.7;
}

.expertise-stats {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.stat-item {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 8px;
}

.stat-title {
    font-weight: 600;
    color: #374151;
}

.stat-value {
    color: #2563eb;
    font-weight: 500;
}

.expertise-areas {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.area-item h4 {
    margin-bottom: 1rem;
    color: #1e293b;
}

.skill-bar {
    height: 10px;
    background: #e2e8f0;
    border-radius: 5px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(90deg, #2563eb, #60a5fa);
    border-radius: 5px;
    transition: width 1s ease-out;
}

/* Results */
.results {
    padding: 100px 0;
    background: #f8fafc;
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.result-card {
    background: white;
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border-left: 5px solid #10b981;
}

.result-category {
    display: inline-block;
    background: #dcfce7;
    color: #166534;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
}

.result-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1e293b;
}

.result-card p {
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.7;
}

.result-metrics {
    display: flex;
    gap: 2rem;
}

.metric {
    text-align: center;
}

.metric-value {
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
    color: #10b981;
    margin-bottom: 0.5rem;
}

.metric-label {
    font-size: 0.9rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* About */
.about {
    padding: 100px 0;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: start;
}

.about-image img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.about-text h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #1e293b;
}

.about-title {
    color: #2563eb;
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

.about-text > p {
    color: #64748b;
    margin-bottom: 1.5rem;
    line-height: 1.7;
}

.credentials,
.philosophy {
    margin-top: 2rem;
}

.credentials h4,
.philosophy h4 {
    color: #1e293b;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.credentials-list {
    list-style: none;
}

.credentials-list li {
    padding: 0.5rem 0;
    color: #64748b;
    border-bottom: 1px solid #e2e8f0;
}

.philosophy blockquote {
    background: #f8fafc;
    padding: 1.5rem;
    border-left: 4px solid #2563eb;
    border-radius: 8px;
    font-style: italic;
    color: #475569;
    line-height: 1.7;
}

/* Blog */
.blog {
    padding: 100px 0;
    background: #f8fafc;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.blog-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: transform 0.3s;
}

.blog-card:hover {
    transform: translateY(-5px);
}

.blog-date {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.blog-category {
    display: inline-block;
    background: #dbeafe;
    color: #1e40af;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
}

.blog-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #1e293b;
    line-height: 1.4;
}

.blog-card p {
    color: #64748b;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.blog-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.read-time {
    color: #9ca3af;
    font-size: 0.9rem;
}

.read-more {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.read-more:hover {
    color: #1d4ed8;
}

.blog-cta {
    text-align: center;
}

.btn-secondary {
    display: inline-block;
    padding: 1rem 2rem;
    background: transparent;
    color: #2563eb;
    text-decoration: none;
    border: 2px solid #2563eb;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-secondary:hover {
    background: #2563eb;
    color: white;
}

/* Contact */
.contact {
    padding: 100px 0;
    background: white;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.contact-info h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e293b;
}

.contact-info > p {
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.7;
}

.consultation-process {
    margin-bottom: 2rem;
}

.consultation-process h4 {
    color: #1e293b;
    margin-bottom: 1.5rem;
}

.process-steps {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.step {
    display: flex;
    align-items: start;
    gap: 1rem;
}

.step-number {
    width: 30px;
    height: 30px;
    background: #2563eb;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
}

.step-content h5 {
    color: #1e293b;
    margin-bottom: 0.3rem;
}

.step-content p {
    color: #64748b;
    font-size: 0.9rem;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.detail-item strong {
    display: block;
    color: #1e293b;
    margin-bottom: 0.5rem;
}

.detail-item p {
    color: #2563eb;
    font-weight: 600;
    margin-bottom: 0.3rem;
}

.detail-item span {
    color: #64748b;
    font-size: 0.9rem;
}

.contact-form {
    background: #f8fafc;
    padding: 2.5rem;
    border-radius: 15px;
}

.contact-form h4 {
    color: #1e293b;
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    color: #374151;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #2563eb;
}

.radio-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.radio-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #374151;
    font-weight: normal;
    cursor: pointer;
}

.radio-label input[type="radio"] {
    width: auto;
}

.submit-btn {
    width: 100%;
    padding: 1.2rem 2rem;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.submit-btn:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
}

/* Footer */
.footer {
    background: #1e293b;
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
    color: #60a5fa;
    margin-bottom: 1rem;
}

.footer-brand p {
    color: #cbd5e1;
    margin-bottom: 0.5rem;
}

.footer-nav h4,
.footer-info h4 {
    color: white;
    margin-bottom: 1rem;
}

.footer-nav ul {
    list-style: none;
}

.footer-nav li {
    margin-bottom: 0.5rem;
}

.footer-nav a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-nav a:hover {
    color: #60a5fa;
}

.footer-info p {
    color: #cbd5e1;
    margin-bottom: 0.5rem;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-links a {
    color: #cbd5e1;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid #475569;
    border-radius: 20px;
    transition: all 0.3s;
}

.social-links a:hover {
    color: white;
    border-color: #60a5fa;
    background: #60a5fa;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #374151;
    color: #9ca3af;
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
    
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-cta {
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    
    .achievements-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .services-grid,
    .results-grid,
    .blog-grid {
        grid-template-columns: 1fr;
    }
    
    .expertise-content,
    .about-content,
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

// 統計カウンターアニメーション
function animateCounters() {
    const counters = document.querySelectorAll('.achievement-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const hasPlus = target.includes('+');
        const isMoney = target.includes('M');
        
        let numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
        
        let current = 0;
        const increment = numericTarget / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
                clearInterval(timer);
                let finalText = numericTarget.toString();
                if (isPercentage) finalText += '%';
                if (hasPlus) finalText += '+';
                if (isMoney) finalText += 'M+';
                counter.textContent = finalText;
            } else {
                let displayText = Math.floor(current).toString();
                if (isPercentage) displayText += '%';
                if (hasPlus && current >= numericTarget * 0.8) displayText += '+';
                if (isMoney) displayText += 'M';
                counter.textContent = displayText;
            }
        }, 50);
    });
}

// スキルバーアニメーション
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
}

// インtersection Observer
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('achievements')) {
                animateCounters();
                observer.unobserve(entry.target);
            }
            
            if (entry.target.classList.contains('expertise')) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// 監視対象を追加
const achievementsSection = document.querySelector('.achievements');
const expertiseSection = document.querySelector('.expertise');

if (achievementsSection) observer.observe(achievementsSection);
if (expertiseSection) observer.observe(expertiseSection);

// フォーム送信処理
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 簡単なバリデーション
    const requiredFields = this.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            field.style.borderColor = '#d1d5db';
        }
    });
    
    if (isValid) {
        alert('お問い合わせありがとうございます。24時間以内にご連絡させていただきます。');
        this.reset();
    } else {
        alert('必須項目をすべて入力してください。');
    }
});

// CTA ボタンのクリック追跡（デモ用）
document.querySelectorAll('.cta-primary, .cta-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        // 実際のサービスでは、ここでアナリティクス追跡などを行う
        console.log('CTA clicked:', this.textContent);
    });
});

// サービスカードのホバー効果強化
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    });
});`
  }
}