import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioDesignerTemplate: WebTemplate = {
  id: 'portfolio-designer',
  title: 'ポートフォリオ - デザイナー',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: 'クリエイティブなデザイナー向けポートフォリオサイト',
  thumbnail: '/template-images/portfolio-designer.jpg',
  features: [
    'グリッドギャラリー',
    'プロジェクト詳細',
    'スキルセット表示',
    'コンタクトフォーム'
  ],
  tags: ['ポートフォリオ', 'デザイナー', 'クリエイティブ', 'ギャラリー'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Designer Portfolio - Creative Works</title>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">
                    <span>DESIGNER</span>
                </div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#works">Works</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Creative Designer</h1>
            <p class="hero-subtitle">UI/UX & Visual Design</p>
            <a href="#works" class="hero-button">View Works</a>
        </div>
        <div class="hero-bg"></div>
    </section>

    <section id="works" class="works">
        <div class="container">
            <h2 class="section-title">Selected Works</h2>
            <div class="works-grid">
                <div class="work-item" data-category="ui">
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" alt="UI Design">
                    <div class="work-overlay">
                        <h3>モバイルアプリUI</h3>
                        <p>UI/UX Design</p>
                    </div>
                </div>
                <div class="work-item" data-category="branding">
                    <img src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=800&h=600&fit=crop" alt="Branding">
                    <div class="work-overlay">
                        <h3>ブランディング</h3>
                        <p>Brand Identity</p>
                    </div>
                </div>
                <div class="work-item" data-category="web">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop" alt="Web Design">
                    <div class="work-overlay">
                        <h3>Webサイトデザイン</h3>
                        <p>Web Design</p>
                    </div>
                </div>
                <div class="work-item" data-category="graphic">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" alt="Graphic Design">
                    <div class="work-overlay">
                        <h3>グラフィックデザイン</h3>
                        <p>Graphic Design</p>
                    </div>
                </div>
                <div class="work-item" data-category="ui">
                    <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop" alt="Dashboard">
                    <div class="work-overlay">
                        <h3>ダッシュボードUI</h3>
                        <p>Dashboard Design</p>
                    </div>
                </div>
                <div class="work-item" data-category="branding">
                    <img src="https://images.unsplash.com/photo-1524678516592-a0906da30b3a?w=800&h=600&fit=crop" alt="Logo Design">
                    <div class="work-overlay">
                        <h3>ロゴデザイン</h3>
                        <p>Logo Design</p>
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
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" alt="Designer">
                </div>
                <div class="about-text">
                    <h3>クリエイティブデザイナー</h3>
                    <p>10年以上のデザイン経験を持つクリエイティブデザイナーです。UI/UXデザイン、ブランディング、グラフィックデザインを専門としています。</p>
                    <p>ユーザー中心のデザインアプローチで、美しく機能的なデザインソリューションを提供します。</p>
                    <div class="about-stats">
                        <div class="stat">
                            <span class="stat-number">100+</span>
                            <span class="stat-label">Projects</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">50+</span>
                            <span class="stat-label">Clients</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">10+</span>
                            <span class="stat-label">Awards</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Skills & Tools</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Design Skills</h3>
                    <div class="skill-list">
                        <div class="skill-item">
                            <span>UI/UX Design</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <span>Visual Design</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 95%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <span>Branding</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Tools</h3>
                    <div class="tool-grid">
                        <div class="tool-item">Figma</div>
                        <div class="tool-item">Sketch</div>
                        <div class="tool-item">Adobe XD</div>
                        <div class="tool-item">Photoshop</div>
                        <div class="tool-item">Illustrator</div>
                        <div class="tool-item">After Effects</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <p class="contact-text">新しいプロジェクトやコラボレーションのご相談はお気軽にどうぞ</p>
                <form class="contact-form">
                    <div class="form-group">
                        <input type="text" placeholder="お名前" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="メールアドレス" required>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="メッセージ" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">送信する</button>
                </form>
                <div class="contact-info">
                    <a href="mailto:designer@example.com">designer@example.com</a>
                    <div class="social-links">
                        <a href="#" aria-label="Twitter">Twitter</a>
                        <a href="#" aria-label="Instagram">Instagram</a>
                        <a href="#" aria-label="Behance">Behance</a>
                        <a href="#" aria-label="Dribbble">Dribbble</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Designer Portfolio. All rights reserved.</p>
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
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
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
    color: #6366f1;
}

/* Hero */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    opacity: 0.1;
}

.hero-content {
    text-align: center;
    z-index: 1;
}

.hero-title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-subtitle {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 2rem;
}

.hero-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 500;
    transition: transform 0.3s;
}

.hero-button:hover {
    transform: translateY(-2px);
}

/* Works */
.works {
    padding: 100px 0;
    background: #f8f9fa;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #333;
}

.works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
}

.work-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
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
}

.work-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
    padding: 2rem;
    transform: translateY(100%);
    transition: transform 0.3s;
}

.work-item:hover .work-overlay {
    transform: translateY(0);
}

.work-overlay h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

/* About */
.about {
    padding: 100px 0;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: center;
}

.about-image img {
    width: 100%;
    border-radius: 10px;
}

.about-text h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
}

.about-text p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.8;
}

.about-stats {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #6366f1;
}

.stat-label {
    color: #666;
    font-size: 0.9rem;
}

/* Skills */
.skills {
    padding: 100px 0;
    background: #f8f9fa;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
}

.skill-category h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #333;
}

.skill-item {
    margin-bottom: 1.5rem;
}

.skill-item span {
    display: block;
    margin-bottom: 0.5rem;
    color: #666;
}

.skill-bar {
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    animation: skillLoad 1s ease-out;
}

@keyframes skillLoad {
    from { width: 0; }
}

.tool-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.tool-item {
    padding: 1rem;
    background: white;
    border-radius: 8px;
    text-align: center;
    color: #666;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

/* Contact */
.contact {
    padding: 100px 0;
}

.contact-content {
    max-width: 600px;
    margin: 0 auto;
}

.contact-text {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
}

.contact-form {
    margin-bottom: 3rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
}

.submit-btn {
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.3s;
}

.submit-btn:hover {
    transform: translateY(-2px);
}

.contact-info {
    text-align: center;
}

.contact-info a {
    color: #6366f1;
    text-decoration: none;
    font-size: 1.2rem;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}

.social-links a {
    color: #666;
    font-size: 1rem;
}

/* Footer */
.footer {
    padding: 2rem 0;
    background: #333;
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
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .skills-grid {
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