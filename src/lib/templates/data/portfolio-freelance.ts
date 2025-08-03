import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioFreelanceTemplate: WebTemplate = {
  id: 'portfolio-freelance',
  title: 'ポートフォリオ - フリーランス',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: 'フリーランスデザイナー・エンジニア向けポートフォリオテンプレート',
  thumbnail: '/template-images/portfolio-freelance.jpg',
  features: [
    '作品ギャラリー',
    'スキルセット表示',
    'お問い合わせフォーム',
    'SNSリンク'
  ],
  tags: ['ポートフォリオ', 'フリーランス', 'クリエイティブ', 'モダン'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yuki Tanaka - Creative Developer</title>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">YT</div>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1 class="hero-title">
                <span class="small">Hello, I'm</span>
                <span class="name">Yuki Tanaka</span>
            </h1>
            <p class="hero-subtitle">Creative Developer & UI Designer</p>
            <div class="hero-cta">
                <button class="btn-primary">View My Work</button>
                <button class="btn-outline">Download CV</button>
            </div>
        </div>
        <div class="hero-decoration">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>クリエイティブなWebサイトとアプリケーションの開発を専門とするフリーランスデベロッパーです。</p>
                    <p>5年以上の経験を持ち、スタートアップから大企業まで幅広いクライアントのプロジェクトに携わってきました。</p>
                    <p>美しいデザインと優れたユーザーエクスペリエンスを両立させることを心がけています。</p>
                    <div class="social-links">
                        <a href="#" class="social-link">GitHub</a>
                        <a href="#" class="social-link">Twitter</a>
                        <a href="#" class="social-link">LinkedIn</a>
                        <a href="#" class="social-link">Dribbble</a>
                    </div>
                </div>
                <div class="about-stats">
                    <div class="stat">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">完成プロジェクト</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">30+</div>
                        <div class="stat-label">満足クライアント</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">5+</div>
                        <div class="stat-label">経験年数</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="work" class="work">
        <div class="container">
            <h2 class="section-title">Featured Work</h2>
            <div class="work-filters">
                <button class="filter active" data-filter="all">All</button>
                <button class="filter" data-filter="web">Web Design</button>
                <button class="filter" data-filter="app">App Design</button>
                <button class="filter" data-filter="branding">Branding</button>
            </div>
            <div class="work-grid">
                <div class="work-item" data-category="web">
                    <div class="work-image">
                        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop" alt="Webプロジェクト">
                        <div class="work-overlay">
                            <h3>E-commerce Platform</h3>
                            <p>Modern online shopping experience</p>
                            <button class="view-project">View Project</button>
                        </div>
                    </div>
                </div>
                <div class="work-item" data-category="app">
                    <div class="work-image">
                        <div class="work-overlay">
                            <h3>Mobile Banking App</h3>
                            <p>Secure and intuitive banking solution</p>
                            <button class="view-project">View Project</button>
                        </div>
                    </div>
                </div>
                <div class="work-item" data-category="web">
                    <div class="work-image">
                        <div class="work-overlay">
                            <h3>Corporate Website</h3>
                            <p>Professional business presence</p>
                            <button class="view-project">View Project</button>
                        </div>
                    </div>
                </div>
                <div class="work-item" data-category="branding">
                    <div class="work-image">
                        <div class="work-overlay">
                            <h3>Brand Identity</h3>
                            <p>Complete visual identity system</p>
                            <button class="view-project">View Project</button>
                        </div>
                    </div>
                </div>
                <div class="work-item" data-category="app">
                    <div class="work-image">
                        <div class="work-overlay">
                            <h3>Fitness Tracker</h3>
                            <p>Health monitoring application</p>
                            <button class="view-project">View Project</button>
                        </div>
                    </div>
                </div>
                <div class="work-item" data-category="web">
                    <div class="work-image">
                        <div class="work-overlay">
                            <h3>Restaurant Website</h3>
                            <p>Elegant dining experience online</p>
                            <button class="view-project">View Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Skills & Expertise</h2>
            <div class="skills-content">
                <div class="skill-category">
                    <h3>Development</h3>
                    <div class="skill-list">
                        <div class="skill-item">
                            <span>HTML/CSS</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 95%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <span>JavaScript</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <span>React/Vue</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <span>Node.js</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 80%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Design</h3>
                    <div class="skill-list">
                        <div class="skill-item">
                            <span>UI/UX Design</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <span>Figma</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 95%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <span>Adobe Creative Suite</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <span>Prototyping</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 88%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <p class="contact-intro">プロジェクトのご相談やお仕事のご依頼はお気軽にご連絡ください。</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <span class="contact-icon">📧</span>
                        <a href="mailto:hello@yukitanaka.com">hello@yukitanaka.com</a>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📱</span>
                        <a href="tel:+81901234567">+81 90-1234-5678</a>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📍</span>
                        <span>Tokyo, Japan</span>
                    </div>
                </div>
                <button class="btn-primary">Send Message</button>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p>&copy; 2025 Yuki Tanaka. All rights reserved.</p>
    </footer>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
    color: #333;
    line-height: 1.6;
    background: #f5f5f5;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
    font-weight: 500;
}

.nav-menu a:hover {
    color: #667eea;
}

/* Hero */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow: hidden;
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 2;
    position: relative;
}

.hero-title {
    margin-bottom: 1rem;
}

.hero-title .small {
    display: block;
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
}

.hero-title .name {
    display: block;
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn-primary, .btn-outline {
    padding: 1rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
}

.btn-primary {
    background: white;
    color: #667eea;
}

.btn-outline {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-outline:hover {
    background: white;
    color: #667eea;
}

.hero-decoration {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    background: white;
}

.circle-1 {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -150px;
}

.circle-2 {
    width: 200px;
    height: 200px;
    bottom: -100px;
    left: -100px;
}

.circle-3 {
    width: 150px;
    height: 150px;
    top: 50%;
    left: 10%;
}

/* Sections */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

section {
    padding: 5rem 0;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    padding-bottom: 1rem;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* About */
.about {
    background: white;
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-text p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-link {
    padding: 0.5rem 1rem;
    background: #f5f5f5;
    text-decoration: none;
    color: #333;
    border-radius: 5px;
    transition: all 0.3s;
}

.social-link:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-2px);
}

.about-stats {
    display: grid;
    gap: 2rem;
}

.stat {
    text-align: center;
    padding: 1.5rem;
    background: #f5f5f5;
    border-radius: 10px;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.stat-label {
    color: #666;
    margin-top: 0.5rem;
}

/* Work */
.work {
    background: #f5f5f5;
}

.work-filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

.filter {
    padding: 0.5rem 1.5rem;
    background: white;
    border: 2px solid transparent;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
}

.filter.active, .filter:hover {
    border-color: #667eea;
    color: #667eea;
}

.work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.work-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.work-item:hover {
    transform: translateY(-10px);
}

.work-image {
    height: 300px;
    background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.work-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
}

.work-item:hover .work-overlay {
    opacity: 1;
}

.work-overlay h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.work-overlay p {
    margin-bottom: 1rem;
}

.view-project {
    padding: 0.5rem 1.5rem;
    background: white;
    color: #667eea;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.3s;
}

.view-project:hover {
    transform: scale(1.05);
}

/* Skills */
.skills {
    background: white;
}

.skills-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
}

.skill-category h3 {
    margin-bottom: 2rem;
    color: #667eea;
}

.skill-item {
    margin-bottom: 1.5rem;
}

.skill-item span {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.skill-bar {
    height: 10px;
    background: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    transition: width 1s ease;
}

/* Contact */
.contact {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.contact .section-title {
    color: white;
}

.contact .section-title::after {
    background: white;
}

.contact-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.contact-intro {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.contact-info {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.contact-icon {
    font-size: 1.5rem;
}

.contact-item a {
    color: white;
    text-decoration: none;
}

.contact-item a:hover {
    text-decoration: underline;
}

.contact .btn-primary {
    background: white;
    color: #667eea;
}

/* Footer */
.footer {
    background: #222;
    color: white;
    text-align: center;
    padding: 2rem;
}

@media (max-width: 768px) {
    .header,
    .header-main {
        padding: 10px 0;
    }
    
    .header-inner,
    .header-container {
        gap: 10px;
        padding: 10px 20px;
    }
    
    
    .hero-title .name {
        font-size: 2.5rem;
    }
    
    .nav-menu {
        flex-direction: column;
        gap: 1rem;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .work-grid {
        grid-template-columns: 1fr;
    }
    
    .skills-content {
        grid-template-columns: 1fr;
    }
}`,
    js: `// フィルター機能
const filterButtons = document.querySelectorAll('.filter');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // アクティブクラスの切り替え
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        
        workItems.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
            } else {
                if (item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// プロジェクト表示
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function() {
        alert('プロジェクト詳細ページへ遷移（実装予定）');
    });
});

// メッセージ送信
document.querySelector('.contact .btn-primary').addEventListener('click', function() {
    alert('お問い合わせフォームへ遷移（実装予定）');
});

// CV ダウンロード
document.querySelector('.btn-outline').addEventListener('click', function() {
    alert('CV PDFをダウンロード（実装予定）');
});

// スキルバーアニメーション
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}`
  }
}