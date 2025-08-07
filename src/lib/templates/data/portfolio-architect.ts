import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioArchitectTemplate: WebTemplate = {
  id: 'portfolio-architect',
  title: 'ポートフォリオ - 建築家',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: '建築家・建築設計事務所向けポートフォリオサイト',
  thumbnail: '/template-images/portfolio-architect.jpg',
  features: [
    'プロジェクトギャラリー',
    '建築図面表示',
    '実績紹介',
    '設計哲学'
  ],
  tags: ['ポートフォリオ', '建築家', '設計', 'ギャラリー'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Architect Portfolio - Design Studio</title>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">ARCHITECT</div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#philosophy">Philosophy</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">建築デザインスタジオ</h1>
            <p class="hero-subtitle">Architecture & Design</p>
            <a href="#projects" class="hero-button">プロジェクトを見る</a>
        </div>
    </section>

    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">Selected Projects</h2>
            <div class="projects-grid">
                <div class="project-item">
                    <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop" alt="Modern House">
                    <div class="project-info">
                        <h3>モダンハウス</h3>
                        <p>住宅設計 | 2024</p>
                        <span class="project-category">Residential</span>
                    </div>
                </div>
                <div class="project-item">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" alt="Office Building">
                    <div class="project-info">
                        <h3>オフィスビル</h3>
                        <p>商業建築 | 2023</p>
                        <span class="project-category">Commercial</span>
                    </div>
                </div>
                <div class="project-item">
                    <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop" alt="Cultural Center">
                    <div class="project-info">
                        <h3>カルチャーセンター</h3>
                        <p>公共建築 | 2023</p>
                        <span class="project-category">Public</span>
                    </div>
                </div>
                <div class="project-item">
                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop" alt="Apartment Complex">
                    <div class="project-info">
                        <h3>集合住宅</h3>
                        <p>住宅設計 | 2022</p>
                        <span class="project-category">Residential</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="philosophy" class="philosophy">
        <div class="container">
            <h2 class="section-title">Design Philosophy</h2>
            <div class="philosophy-content">
                <div class="philosophy-text">
                    <h3>建築への想い</h3>
                    <p>私たちは、建築を単なる構造物ではなく、人々の暮らしと密接に関わる「場」として捉えています。</p>
                    <p>光と影、空間と時間、そして人と建築の関係性を大切にした設計を心がけています。</p>
                </div>
                <div class="philosophy-points">
                    <div class="point">
                        <h4>Sustainability</h4>
                        <p>持続可能な建築</p>
                    </div>
                    <div class="point">
                        <h4>Functionality</h4>
                        <p>機能性を重視</p>
                    </div>
                    <div class="point">
                        <h4>Beauty</h4>
                        <p>美しい空間創造</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Studio</h2>
            <div class="about-content">
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" alt="Architect">
                </div>
                <div class="about-text">
                    <h3>建築デザインスタジオ</h3>
                    <p>15年の経験を持つ建築家による設計事務所です。住宅から公共建築まで幅広いプロジェクトを手掛けています。</p>
                    <div class="credentials">
                        <div class="credential">
                            <span class="label">設立</span>
                            <span class="value">2010年</span>
                        </div>
                        <div class="credential">
                            <span class="label">実績</span>
                            <span class="value">50+ Projects</span>
                        </div>
                        <div class="credential">
                            <span class="label">受賞</span>
                            <span class="value">5+ Awards</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Contact</h2>
            <div class="contact-content">
                <p class="contact-text">設計のご相談はお気軽にお問い合わせください</p>
                <form class="contact-form">
                    <div class="form-group">
                        <input type="text" placeholder="お名前" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="メールアドレス" required>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="プロジェクトの詳細" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">送信する</button>
                </form>
                <div class="contact-info">
                    <div class="info-item">
                        <strong>住所</strong>
                        <p>東京都渋谷区○○1-2-3</p>
                    </div>
                    <div class="info-item">
                        <strong>電話</strong>
                        <p>03-0000-0000</p>
                    </div>
                    <div class="info-item">
                        <strong>Email</strong>
                        <p>info@architect-studio.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Architect Studio. All rights reserved.</p>
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
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 3px;
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
    gap: 2rem;
}

.nav-menu a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #3498db;
}

/* Hero */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop') center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    letter-spacing: 2px;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: transparent;
    color: white;
    text-decoration: none;
    border: 2px solid white;
    border-radius: 0;
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.3s;
}

.hero-button:hover {
    background: white;
    color: #333;
}

/* Projects */
.projects {
    padding: 100px 0;
    background: #f8f9fa;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
    font-weight: 300;
    letter-spacing: 1px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.project-item {
    background: white;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.project-item:hover {
    transform: translateY(-5px);
}

.project-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.project-info {
    padding: 2rem;
    position: relative;
}

.project-info h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.project-info p {
    color: #666;
    margin-bottom: 1rem;
}

.project-category {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #3498db;
    color: white;
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    letter-spacing: 1px;
}

/* Philosophy */
.philosophy {
    padding: 100px 0;
}

.philosophy-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.philosophy-text h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

.philosophy-text p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.8;
}

.philosophy-points {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.point {
    padding: 1.5rem;
    border-left: 4px solid #3498db;
    background: #f8f9fa;
}

.point h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.point p {
    color: #666;
}

/* About */
.about {
    padding: 100px 0;
    background: #f8f9fa;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: center;
}

.about-image img {
    width: 100%;
    border-radius: 0;
}

.about-text h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

.about-text p {
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.8;
}

.credentials {
    display: flex;
    gap: 2rem;
}

.credential {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.credential .label {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
}

.credential .value {
    font-size: 1.2rem;
    font-weight: 600;
    color: #3498db;
}

/* Contact */
.contact {
    padding: 100px 0;
}

.contact-content {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.contact-text {
    grid-column: 1 / -1;
    text-align: center;
    color: #666;
    margin-bottom: 2rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 0;
    font-size: 1rem;
}

.submit-btn {
    padding: 1rem 2rem;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 0;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
}

.submit-btn:hover {
    background: #2980b9;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .philosophy-content,
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .contact-content {
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

// フォーム送信
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('お問い合わせありがとうございます。後日ご連絡させていただきます。');
    this.reset();
});`
  }
}