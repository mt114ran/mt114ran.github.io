import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioWriterTemplate: WebTemplate = {
  id: 'portfolio-writer',
  title: 'ポートフォリオ - ライター',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: 'ライター・編集者・コピーライター向けポートフォリオサイト',
  thumbnail: '/template-images/portfolio-writer.jpg',
  features: [
    '執筆記事一覧',
    'プロフィール紹介',
    '実績・経歴',
    'ブログ機能'
  ],
  tags: ['ポートフォリオ', 'ライター', '編集者', 'コピーライター'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Writer Portfolio - Professional Writing</title>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">Writer's Portfolio</div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#works">Works</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Professional Writer</h1>
            <p class="hero-subtitle">言葉で価値を創造するライター</p>
            <div class="hero-stats">
                <div class="stat">
                    <span class="stat-number">500+</span>
                    <span class="stat-label">執筆記事</span>
                </div>
                <div class="stat">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">クライアント</span>
                </div>
                <div class="stat">
                    <span class="stat-number">5</span>
                    <span class="stat-label">年の経験</span>
                </div>
            </div>
            <a href="#works" class="hero-button">作品を見る</a>
        </div>
    </section>

    <section id="works" class="works">
        <div class="container">
            <h2 class="section-title">Featured Works</h2>
            <div class="works-filter">
                <button class="filter-btn active" data-category="all">すべて</button>
                <button class="filter-btn" data-category="article">記事</button>
                <button class="filter-btn" data-category="copy">コピー</button>
                <button class="filter-btn" data-category="column">コラム</button>
            </div>
            <div class="works-grid">
                <article class="work-item" data-category="article">
                    <div class="work-content">
                        <span class="work-category">Tech Article</span>
                        <h3>「AI時代のライティング術」</h3>
                        <p>技術系メディアに寄稿したAIとライティングの関係性について論じた記事です。</p>
                        <div class="work-meta">
                            <span class="work-date">2024.03.15</span>
                            <span class="work-client">Tech Magazine</span>
                        </div>
                    </div>
                </article>
                <article class="work-item" data-category="copy">
                    <div class="work-content">
                        <span class="work-category">Copy Writing</span>
                        <h3>「新しい働き方」キャンペーン</h3>
                        <p>企業のリモートワーク推進キャンペーンのコピーライティングを担当しました。</p>
                        <div class="work-meta">
                            <span class="work-date">2024.02.20</span>
                            <span class="work-client">Corporate Inc.</span>
                        </div>
                    </div>
                </article>
                <article class="work-item" data-category="column">
                    <div class="work-content">
                        <span class="work-category">Column</span>
                        <h3>「デジタル時代の読書習慣」</h3>
                        <p>読書とテクノロジーの関係について考察したコラム記事です。</p>
                        <div class="work-meta">
                            <span class="work-date">2024.01.10</span>
                            <span class="work-client">Literary Review</span>
                        </div>
                    </div>
                </article>
                <article class="work-item" data-category="article">
                    <div class="work-content">
                        <span class="work-category">Feature Article</span>
                        <h3>「持続可能なビジネスモデル」</h3>
                        <p>ESGとビジネスの関係性について深く掘り下げた特集記事です。</p>
                        <div class="work-meta">
                            <span class="work-date">2023.12.05</span>
                            <span class="work-client">Business Today</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Services</h2>
            <div class="services-grid">
                <div class="service-item">
                    <div class="service-icon">📝</div>
                    <h3>記事執筆</h3>
                    <p>SEO対策を考慮したWeb記事から、雑誌記事まで幅広く対応します。</p>
                    <ul class="service-features">
                        <li>Web記事</li>
                        <li>雑誌記事</li>
                        <li>ブログ記事</li>
                        <li>プレスリリース</li>
                    </ul>
                </div>
                <div class="service-item">
                    <div class="service-icon">💡</div>
                    <h3>コピーライティング</h3>
                    <p>商品・サービスの魅力を最大限に引き出すコピーを制作します。</p>
                    <ul class="service-features">
                        <li>キャッチコピー</li>
                        <li>広告コピー</li>
                        <li>セールスコピー</li>
                        <li>ブランディング文章</li>
                    </ul>
                </div>
                <div class="service-item">
                    <div class="service-icon">✏️</div>
                    <h3>編集・校正</h3>
                    <p>文章の品質向上から構成改善まで、総合的な編集サービスを提供します。</p>
                    <ul class="service-features">
                        <li>文章校正</li>
                        <li>構成見直し</li>
                        <li>リライト</li>
                        <li>編集コンサル</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616c64c8d05?w=600&h=600&fit=crop" alt="Writer">
                </div>
                <div class="about-text">
                    <h3>田中 文子</h3>
                    <p class="about-role">フリーランスライター・編集者</p>
                    <p>大学卒業後、出版社での編集経験を経てフリーランスライターとして独立。テクノロジー、ビジネス、ライフスタイルなど幅広い分野で執筆活動を行っています。</p>
                    <p>「読者の心に響く文章」をモットーに、クライアントの想いを言葉で表現することを得意としています。</p>
                    
                    <div class="credentials">
                        <h4>資格・経歴</h4>
                        <ul>
                            <li>日本語検定1級</li>
                            <li>校正技能検定中級</li>
                            <li>出版社編集部勤務（3年）</li>
                            <li>フリーランス歴（5年）</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="blog" class="blog">
        <div class="container">
            <h2 class="section-title">Latest Blog</h2>
            <div class="blog-grid">
                <article class="blog-item">
                    <div class="blog-date">2024.03.20</div>
                    <h3>効果的な文章構成のコツ</h3>
                    <p>読みやすい文章を書くための構成テクニックについて解説します。</p>
                    <a href="#" class="blog-link">続きを読む</a>
                </article>
                <article class="blog-item">
                    <div class="blog-date">2024.03.15</div>
                    <h3>SEOライティングの基本</h3>
                    <p>検索エンジンに評価されるWebライティングの基本をお伝えします。</p>
                    <a href="#" class="blog-link">続きを読む</a>
                </article>
                <article class="blog-item">
                    <div class="blog-date">2024.03.10</div>
                    <h3>フリーランスライターの働き方</h3>
                    <p>独立して5年の経験から学んだフリーランスライターの働き方をシェアします。</p>
                    <a href="#" class="blog-link">続きを読む</a>
                </article>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Contact</h2>
            <div class="contact-content">
                <p class="contact-text">執筆のご依頼・ご相談はお気軽にお問い合わせください</p>
                <form class="contact-form">
                    <div class="form-row">
                        <div class="form-group">
                            <input type="text" placeholder="お名前" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="メールアドレス" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <select required>
                            <option value="">ご依頼内容を選択</option>
                            <option value="article">記事執筆</option>
                            <option value="copy">コピーライティング</option>
                            <option value="edit">編集・校正</option>
                            <option value="other">その他</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="詳しい内容をお聞かせください" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">送信する</button>
                </form>
                <div class="contact-info">
                    <div class="info-item">
                        <strong>Email</strong>
                        <p>writer@example.com</p>
                    </div>
                    <div class="info-item">
                        <strong>Response Time</strong>
                        <p>24時間以内に返信</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Writer's Portfolio. All rights reserved.</p>
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
    font-family: 'Georgia', serif;
    line-height: 1.7;
    color: #333;
    background: #fefefe;
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
    background: rgba(254, 254, 254, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid #e8e8e8;
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
    font-weight: 400;
    color: #2c3e50;
    font-style: italic;
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
    height: 1px;
    background: #333;
    margin: 4px 0;
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.nav-menu a {
    color: #555;
    text-decoration: none;
    font-weight: 400;
    font-size: 0.95rem;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #c0392b;
}

/* Hero */
.hero {
    padding: 120px 0 80px;
    text-align: center;
    background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.hero-title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-family: 'Georgia', serif;
}

.hero-subtitle {
    font-size: 1.3rem;
    color: #666;
    margin-bottom: 3rem;
    font-style: italic;
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 3rem;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 300;
    color: #c0392b;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.9rem;
    color: #666;
}

.hero-button {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: #c0392b;
    color: white;
    text-decoration: none;
    border-radius: 0;
    font-weight: 400;
    letter-spacing: 1px;
    transition: background 0.3s;
}

.hero-button:hover {
    background: #a93226;
}

/* Works */
.works {
    padding: 80px 0;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
    font-weight: 300;
    font-family: 'Georgia', serif;
}

.works-filter {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

.filter-btn {
    padding: 0.8rem 1.5rem;
    background: transparent;
    border: 1px solid #ddd;
    color: #666;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.9rem;
}

.filter-btn.active,
.filter-btn:hover {
    background: #c0392b;
    color: white;
    border-color: #c0392b;
}

.works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.work-item {
    background: white;
    padding: 2rem;
    border: 1px solid #e8e8e8;
    transition: box-shadow 0.3s;
}

.work-item:hover {
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.work-category {
    display: inline-block;
    background: #f8f9fa;
    color: #666;
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
}

.work-item h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-weight: 400;
}

.work-item p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.work-meta {
    display: flex;
    justify-content: space-between;
    color: #999;
    font-size: 0.9rem;
}

/* Services */
.services {
    padding: 80px 0;
    background: #f8f9fa;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.service-item {
    background: white;
    padding: 2.5rem;
    text-align: center;
    border: 1px solid #e8e8e8;
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.service-item h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-weight: 400;
}

.service-item p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.service-features {
    list-style: none;
    padding: 0;
}

.service-features li {
    padding: 0.3rem 0;
    color: #666;
    font-size: 0.9rem;
}

/* About */
.about {
    padding: 80px 0;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: start;
}

.about-image img {
    width: 100%;
    border-radius: 50%;
    max-width: 300px;
}

.about-text h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-weight: 400;
}

.about-role {
    color: #c0392b;
    font-style: italic;
    margin-bottom: 1.5rem;
}

.about-text p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.7;
}

.credentials {
    margin-top: 2rem;
}

.credentials h4 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-weight: 400;
}

.credentials ul {
    list-style: none;
    padding: 0;
}

.credentials li {
    padding: 0.5rem 0;
    color: #666;
    border-bottom: 1px solid #f0f0f0;
}

/* Blog */
.blog {
    padding: 80px 0;
    background: #f8f9fa;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.blog-item {
    background: white;
    padding: 2rem;
    border: 1px solid #e8e8e8;
}

.blog-date {
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.blog-item h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-weight: 400;
}

.blog-item p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.blog-link {
    color: #c0392b;
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
}

.blog-link:hover {
    text-decoration: underline;
}

/* Contact */
.contact {
    padding: 80px 0;
}

.contact-content {
    max-width: 800px;
    margin: 0 auto;
}

.contact-text {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
    font-size: 1.1rem;
}

.contact-form {
    margin-bottom: 3rem;
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
    border: 1px solid #ddd;
    border-radius: 0;
    font-size: 1rem;
    font-family: inherit;
}

.submit-btn {
    width: 100%;
    padding: 1rem 2rem;
    background: #c0392b;
    color: white;
    border: none;
    border-radius: 0;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
    letter-spacing: 1px;
}

.submit-btn:hover {
    background: #a93226;
}

.contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: center;
}

.info-item strong {
    display: block;
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.info-item p {
    color: #666;
}

/* Footer */
.footer {
    padding: 2rem 0;
    background: #2c3e50;
    color: white;
    text-align: center;
    font-size: 0.9rem;
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
    
    .hero-title {
        font-size: 2.2rem;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 2rem;
    }
    
    .works-grid,
    .services-grid,
    .blog-grid {
        grid-template-columns: 1fr;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .contact-info {
        grid-template-columns: 1fr;
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

// フォーム送信
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('お問い合わせありがとうございます。24時間以内にご返信いたします。');
    this.reset();
});`
  }
}