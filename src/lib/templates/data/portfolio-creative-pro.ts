import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioCreativeProTemplate: WebTemplate = {
  id: 'portfolio-creative-pro',
  title: 'Creative Director Pro - 革新的ポートフォリオ',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: 'クリエイティブプロフェッショナル向けの次世代ポートフォリオ。WebGL 3D作品展示、インタラクティブギャラリー、マウス追従エフェクト搭載',
  thumbnail: '/template-images/portfolio-creative-pro.jpg',
  features: [
    'WebGL 3Dギャラリー',
    'マウス追従エフェクト',
    'パララックススクロール',
    'モーフィングテキスト',
    'フルスクリーンプレゼンテーション',
    'ビデオ背景',
    'カスタムカーソル',
    'リキッドアニメーション'
  ],
  tags: ['プロレベル', 'クリエイティブ', 'WebGL', '3D', 'インタラクティブ', 'アートディレクション'],
  isPro: true,
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Vision Pro - アートとテクノロジーの融合</title>
</head>
<body>
    <!-- ローディング画面 -->
    <div class="loader" id="loader">
        <div class="loader-content">
            <div class="loader-text">LOADING</div>
            <div class="loader-bar"></div>
        </div>
    </div>

    <!-- カスタムカーソル -->
    <div class="cursor" id="cursor"></div>
    <div class="cursor-follower" id="cursor-follower"></div>

    <!-- ナビゲーション -->
    <nav>
        <div class="nav-container">
            <div class="logo">CREATIVE PRO</div>
            <ul class="nav-menu" id="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button class="menu-toggle" id="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- ヒーローセクション -->
    <section class="hero" id="home">
        <div class="hero-bg">
            <div class="liquid-bg"></div>
            <video class="hero-video" autoplay muted loop>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            </video>
        </div>
        <div class="hero-content">
            <h1 class="hero-title">CREATIVE<br>VISION</h1>
            <p class="hero-subtitle">Where Art Meets Technology</p>
            <a href="#projects" class="hero-cta">Explore Work</a>
        </div>
        <div class="scroll-indicator"></div>
    </section>

    <!-- プロジェクトセクション -->
    <section class="projects" id="projects">
        <div class="section-header">
            <h2 class="section-title">SELECTED WORKS</h2>
            <p class="section-subtitle">A collection of creative excellence</p>
        </div>
        <div class="projects-grid">
            <div class="project-card">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1200&fit=crop" alt="Project 1" class="project-image">
                <div class="project-info">
                    <div class="project-number">01</div>
                    <h3 class="project-title">Digital Dreams</h3>
                    <p class="project-category">Web Design / Development</p>
                    <p class="project-description">革新的なWebエクスペリエンスを創造する、最先端のデジタルプロジェクト。</p>
                    <a href="#" class="project-link">View Project →</a>
                </div>
            </div>
            <div class="project-card">
                <img src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=800&h=1200&fit=crop" alt="Project 2" class="project-image">
                <div class="project-info">
                    <div class="project-number">02</div>
                    <h3 class="project-title">Brand Evolution</h3>
                    <p class="project-category">Branding / Identity</p>
                    <p class="project-description">ブランドの本質を視覚的に表現し、新たな価値を創出。</p>
                    <a href="#" class="project-link">View Project →</a>
                </div>
            </div>
            <div class="project-card">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=1200&fit=crop" alt="Project 3" class="project-image">
                <div class="project-info">
                    <div class="project-number">03</div>
                    <h3 class="project-title">Interactive Art</h3>
                    <p class="project-category">Installation / Experience</p>
                    <p class="project-description">テクノロジーとアートが融合した、インタラクティブな体験。</p>
                    <a href="#" class="project-link">View Project →</a>
                </div>
            </div>
            <div class="project-card">
                <img src="https://images.unsplash.com/photo-1561998338-13ad7883b21e?w=800&h=1200&fit=crop" alt="Project 4" class="project-image">
                <div class="project-info">
                    <div class="project-number">04</div>
                    <h3 class="project-title">Motion Graphics</h3>
                    <p class="project-category">Animation / Video</p>
                    <p class="project-description">動きで物語を語る、ダイナミックなビジュアル表現。</p>
                    <a href="#" class="project-link">View Project →</a>
                </div>
            </div>
            <div class="project-card">
                <img src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=800&h=1200&fit=crop" alt="Project 5" class="project-image">
                <div class="project-info">
                    <div class="project-number">05</div>
                    <h3 class="project-title">Future Vision</h3>
                    <p class="project-category">Concept / Strategy</p>
                    <p class="project-description">未来を見据えたコンセプトデザインとストラテジー。</p>
                    <a href="#" class="project-link">View Project →</a>
                </div>
            </div>
            <div class="project-card">
                <img src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=1200&fit=crop" alt="Project 6" class="project-image">
                <div class="project-info">
                    <div class="project-number">06</div>
                    <h3 class="project-title">Artistic Code</h3>
                    <p class="project-category">Generative / Creative Coding</p>
                    <p class="project-description">プログラミングで生み出す、独創的なアート作品。</p>
                    <a href="#" class="project-link">View Project →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- スキルセクション -->
    <section class="skills" id="skills">
        <div class="skills-container">
            <div class="skills-text">
                <h2 class="skills-title">EXPERTISE</h2>
                <p class="skills-description">
                    10年以上の経験を持つクリエイティブディレクターとして、
                    ブランディング、デジタルデザイン、インタラクティブメディアの
                    分野で革新的なソリューションを提供しています。
                </p>
                <div class="skills-list">
                    <div class="skill-item" data-progress="95">
                        <div class="skill-name">Creative Direction</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="--progress: 95%"></div>
                        </div>
                    </div>
                    <div class="skill-item" data-progress="90">
                        <div class="skill-name">UI/UX Design</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="--progress: 90%"></div>
                        </div>
                    </div>
                    <div class="skill-item" data-progress="85">
                        <div class="skill-name">Web Development</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="--progress: 85%"></div>
                        </div>
                    </div>
                    <div class="skill-item" data-progress="92">
                        <div class="skill-name">Brand Strategy</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="--progress: 92%"></div>
                        </div>
                    </div>
                    <div class="skill-item" data-progress="88">
                        <div class="skill-name">Motion Design</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="--progress: 88%"></div>
                        </div>
                    </div>
                    <div class="skill-item" data-progress="80">
                        <div class="skill-name">3D Visualization</div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="--progress: 80%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skills-visual">
                <div class="floating-shapes">
                    <div class="shape"></div>
                    <div class="shape"></div>
                    <div class="shape"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- アバウトセクション -->
    <section class="about" id="about">
        <div class="about-container">
            <div class="about-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop" alt="Profile">
            </div>
            <div class="about-content">
                <h2 class="about-title">ABOUT ME</h2>
                <p class="about-text">
                    クリエイティブディレクターとして、アートとテクノロジーの境界を
                    探求し続けています。東京を拠点に、グローバルなプロジェクトで
                    革新的なデザインソリューションを提供。
                </p>
                <blockquote class="about-quote">
                    "デザインは問題を解決するだけでなく、
                    新たな体験を創造する力を持っている"
                </blockquote>
                <p class="about-text">
                    常に新しい技術とクリエイティブな表現方法を追求し、
                    クライアントのビジョンを超える成果を実現することを
                    目指しています。
                </p>
                <div class="about-stats">
                    <div class="stat">
                        <div class="stat-number">150+</div>
                        <div class="stat-label">Projects</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Awards</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">Years</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- コンタクトセクション -->
    <section class="contact" id="contact">
        <div class="contact-container">
            <h2 class="contact-title">LET'S CREATE</h2>
            <p class="contact-subtitle">新しいプロジェクトについて話しましょう</p>
            
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">📧</div>
                    <div class="contact-label">Email</div>
                    <div class="contact-value">hello@creative.pro</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📱</div>
                    <div class="contact-label">Phone</div>
                    <div class="contact-value">+81 90 1234 5678</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div class="contact-label">Location</div>
                    <div class="contact-value">Tokyo, Japan</div>
                </div>
            </div>
            
            <form class="contact-form">
                <div class="form-group">
                    <input type="text" class="form-input" placeholder=" " required>
                    <label class="form-label">お名前</label>
                </div>
                <div class="form-group">
                    <input type="email" class="form-input" placeholder=" " required>
                    <label class="form-label">メールアドレス</label>
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder=" " required>
                    <label class="form-label">件名</label>
                </div>
                <div class="form-group">
                    <textarea class="form-input form-textarea" placeholder=" " required></textarea>
                    <label class="form-label">メッセージ</label>
                </div>
                <button type="submit" class="form-submit">Send Message</button>
            </form>
        </div>
    </section>

    <!-- フッター -->
    <footer>
        <div class="footer-content">
            <div class="social-links">
                <a href="#" class="social-link">Tw</a>
                <a href="#" class="social-link">In</a>
                <a href="#" class="social-link">Be</a>
                <a href="#" class="social-link">Dr</a>
            </div>
            <p class="footer-text">© 2024 Creative Vision Pro. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            cursor: none;
        }
        
        :root {
            --primary: #ff006e;
            --secondary: #8338ec;
            --accent: #3a86ff;
            --dark: #0a0a0a;
            --light: #ffffff;
            --gray: #888888;
        }
        
        body {
            font-family: 'Montserrat', sans-serif;
            background: var(--dark);
            color: var(--light);
            overflow-x: hidden;
            position: relative;
        }
        
        /* カスタムカーソル */
        .cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--light);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            mix-blend-mode: difference;
        }
        
        .cursor-follower {
            position: fixed;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transition: all 0.3s ease;
            mix-blend-mode: difference;
        }
        
        .cursor.hover {
            transform: scale(2);
            background: var(--primary);
            border-color: var(--primary);
        }
        
        /* ローディング画面 */
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--dark);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 1s ease-out;
        }
        
        .loader.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .loader-content {
            text-align: center;
        }
        
        .loader-text {
            font-family: 'Bebas Neue', cursive;
            font-size: 80px;
            letter-spacing: 10px;
            position: relative;
            overflow: hidden;
        }
        
        .loader-text::before {
            content: 'LOADING';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: loadingText 2s ease-in-out infinite;
        }
        
        @keyframes loadingText {
            0%, 100% { width: 0; }
            50% { width: 100%; }
        }
        
        .loader-bar {
            width: 300px;
            height: 2px;
            background: rgba(255, 255, 255, 0.1);
            margin-top: 30px;
            position: relative;
            overflow: hidden;
        }
        
        .loader-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, var(--primary), transparent);
            animation: loadingBar 1.5s ease-in-out infinite;
        }
        
        @keyframes loadingBar {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        
        /* ナビゲーション */
        nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 30px 50px;
            mix-blend-mode: difference;
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-family: 'Bebas Neue', cursive;
            font-size: 32px;
            letter-spacing: 3px;
            position: relative;
        }
        
        .logo::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s ease;
        }
        
        .logo:hover::after {
            width: 100%;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 40px;
        }
        
        .nav-menu a {
            color: var(--light);
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .nav-menu a::before {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--primary);
            transition: width 0.3s ease;
        }
        
        .nav-menu a:hover::before {
            width: 100%;
        }
        
        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: none;
            border: none;
            cursor: none;
        }
        
        .menu-toggle span {
            width: 30px;
            height: 2px;
            background: var(--light);
            transition: all 0.3s ease;
        }
        
        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        /* ヒーローセクション */
        .hero {
            height: 100vh;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        
        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
        }
        
        .hero-video {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            transform: translate(-50%, -50%);
            opacity: 0.2;
            z-index: -1;
        }
        
        .liquid-bg {
            position: absolute;
            width: 150%;
            height: 150%;
            top: -25%;
            left: -25%;
            background: radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, var(--secondary) 0%, transparent 50%),
                        radial-gradient(circle at 40% 20%, var(--accent) 0%, transparent 50%);
            filter: blur(100px);
            opacity: 0.3;
            animation: liquid 20s ease-in-out infinite;
        }
        
        @keyframes liquid {
            0%, 100% { transform: rotate(0deg) scale(1); }
            33% { transform: rotate(120deg) scale(1.1); }
            66% { transform: rotate(240deg) scale(0.9); }
        }
        
        .hero-content {
            text-align: center;
            z-index: 1;
            position: relative;
        }
        
        .hero-title {
            font-family: 'Bebas Neue', cursive;
            font-size: clamp(60px, 10vw, 180px);
            line-height: 0.9;
            letter-spacing: 5px;
            margin-bottom: 20px;
            position: relative;
            animation: glitch 3s infinite;
        }
        
        @keyframes glitch {
            0%, 100% {
                text-shadow: 
                    0.05em 0 0 var(--primary),
                    -0.05em -0.025em 0 var(--secondary),
                    0.025em 0.05em 0 var(--accent);
            }
            15% {
                text-shadow: 
                    0.05em 0 0 var(--primary),
                    -0.05em -0.025em 0 var(--secondary),
                    0.025em 0.05em 0 var(--accent);
            }
            16% {
                text-shadow: 
                    -0.05em -0.025em 0 var(--primary),
                    0.025em 0.025em 0 var(--secondary),
                    -0.05em -0.05em 0 var(--accent);
            }
            49% {
                text-shadow: 
                    -0.05em -0.025em 0 var(--primary),
                    0.025em 0.025em 0 var(--secondary),
                    -0.05em -0.05em 0 var(--accent);
            }
            50% {
                text-shadow: 
                    0.025em 0.05em 0 var(--primary),
                    0.05em 0 0 var(--secondary),
                    0 -0.05em 0 var(--accent);
            }
            99% {
                text-shadow: 
                    0.025em 0.05em 0 var(--primary),
                    0.05em 0 0 var(--secondary),
                    0 -0.05em 0 var(--accent);
            }
        }
        
        .hero-subtitle {
            font-family: 'Playfair Display', serif;
            font-size: clamp(18px, 2vw, 28px);
            font-style: italic;
            color: var(--gray);
            margin-bottom: 40px;
            opacity: 0;
            animation: fadeInUp 1s ease-out 0.5s forwards;
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
        
        .hero-cta {
            display: inline-block;
            padding: 15px 40px;
            border: 2px solid var(--light);
            text-decoration: none;
            color: var(--light);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            opacity: 0;
            animation: fadeInUp 1s ease-out 0.8s forwards;
        }
        
        .hero-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            transition: left 0.5s ease;
            z-index: -1;
        }
        
        .hero-cta:hover {
            border-color: transparent;
        }
        
        .hero-cta:hover::before {
            left: 0;
        }
        
        .scroll-indicator {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(10px); }
        }
        
        .scroll-indicator::before {
            content: '';
            display: block;
            width: 30px;
            height: 50px;
            border: 2px solid var(--light);
            border-radius: 25px;
            position: relative;
        }
        
        .scroll-indicator::after {
            content: '';
            display: block;
            width: 6px;
            height: 6px;
            background: var(--light);
            border-radius: 50%;
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            animation: scroll 2s infinite;
        }
        
        @keyframes scroll {
            0% { top: 10px; opacity: 1; }
            100% { top: 30px; opacity: 0; }
        }
        
        /* プロジェクトセクション */
        .projects {
            padding: 100px 0;
            position: relative;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 80px;
        }
        
        .section-title {
            font-family: 'Bebas Neue', cursive;
            font-size: clamp(48px, 6vw, 96px);
            letter-spacing: 5px;
            margin-bottom: 20px;
            background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .section-subtitle {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            font-style: italic;
            color: var(--gray);
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 0;
            max-width: 1400px;
            margin: 0 auto;
        }
        
        .project-card {
            position: relative;
            height: 60vh;
            overflow: hidden;
            transition: all 0.5s ease;
        }
        
        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
            z-index: 1;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .project-card:hover::before {
            opacity: 1;
        }
        
        .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-image {
            transform: scale(1.1);
        }
        
        .project-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 40px;
            z-index: 2;
            transform: translateY(100%);
            transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-info {
            transform: translateY(0);
        }
        
        .project-number {
            font-family: 'Bebas Neue', cursive;
            font-size: 72px;
            color: var(--primary);
            opacity: 0.5;
            line-height: 1;
            margin-bottom: 10px;
        }
        
        .project-title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 15px;
        }
        
        .project-category {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--gray);
            margin-bottom: 20px;
        }
        
        .project-description {
            font-size: 16px;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 30px;
        }
        
        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--light);
            text-decoration: none;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
        }
        
        .project-link:hover {
            gap: 20px;
            color: var(--primary);
        }
        
        /* スキルセクション */
        .skills {
            padding: 100px 50px;
            background: linear-gradient(135deg, rgba(255, 0, 110, 0.05), rgba(131, 56, 236, 0.05));
        }
        
        .skills-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }
        
        .skills-text {
            position: relative;
        }
        
        .skills-title {
            font-family: 'Bebas Neue', cursive;
            font-size: clamp(48px, 5vw, 72px);
            letter-spacing: 3px;
            margin-bottom: 30px;
        }
        
        .skills-description {
            font-size: 18px;
            line-height: 1.8;
            color: var(--gray);
            margin-bottom: 40px;
        }
        
        .skills-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }
        
        .skill-item {
            position: relative;
        }
        
        .skill-name {
            font-weight: 600;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .skill-bar {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            position: relative;
        }
        
        .skill-progress {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            border-radius: 2px;
            width: 0;
            transition: width 2s ease-out;
        }
        
        .skill-item.animate .skill-progress {
            width: var(--progress);
        }
        
        .skills-visual {
            position: relative;
            height: 600px;
        }
        
        .floating-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .shape {
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
            opacity: 0.6;
            animation: float 20s ease-in-out infinite;
        }
        
        .shape:nth-child(1) {
            width: 300px;
            height: 300px;
            background: var(--primary);
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }
        
        .shape:nth-child(2) {
            width: 200px;
            height: 200px;
            background: var(--secondary);
            top: 50%;
            right: 10%;
            animation-delay: 5s;
        }
        
        .shape:nth-child(3) {
            width: 250px;
            height: 250px;
            background: var(--accent);
            bottom: 10%;
            left: 30%;
            animation-delay: 10s;
        }
        
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0) scale(1);
            }
            33% {
                transform: translate(30px, -30px) scale(1.1);
            }
            66% {
                transform: translate(-20px, 20px) scale(0.9);
            }
        }
        
        /* アバウトセクション */
        .about {
            padding: 100px 50px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .about-container {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 80px;
            align-items: center;
        }
        
        .about-image {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
        }
        
        .about-image img {
            width: 100%;
            height: auto;
            filter: grayscale(100%);
            transition: all 0.5s ease;
        }
        
        .about-image:hover img {
            filter: grayscale(0%);
            transform: scale(1.05);
        }
        
        .about-image::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, var(--primary), var(--secondary), var(--accent));
            border-radius: 20px;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .about-image:hover::before {
            opacity: 1;
        }
        
        .about-content {
            position: relative;
        }
        
        .about-title {
            font-family: 'Bebas Neue', cursive;
            font-size: clamp(48px, 5vw, 72px);
            letter-spacing: 3px;
            margin-bottom: 30px;
        }
        
        .about-text {
            font-size: 18px;
            line-height: 1.8;
            color: var(--gray);
            margin-bottom: 30px;
        }
        
        .about-quote {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            font-style: italic;
            color: var(--primary);
            border-left: 4px solid var(--primary);
            padding-left: 30px;
            margin: 40px 0;
        }
        
        .about-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            margin-top: 50px;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-number {
            font-family: 'Bebas Neue', cursive;
            font-size: 48px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .stat-label {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--gray);
        }
        
        /* コンタクトセクション */
        .contact {
            padding: 100px 50px;
            background: linear-gradient(135deg, rgba(131, 56, 236, 0.05), rgba(58, 134, 255, 0.05));
        }
        
        .contact-container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        
        .contact-title {
            font-family: 'Bebas Neue', cursive;
            font-size: clamp(48px, 6vw, 96px);
            letter-spacing: 5px;
            margin-bottom: 20px;
        }
        
        .contact-subtitle {
            font-size: 20px;
            color: var(--gray);
            margin-bottom: 60px;
        }
        
        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-bottom: 60px;
        }
        
        .contact-item {
            position: relative;
        }
        
        .contact-icon {
            font-size: 32px;
            margin-bottom: 15px;
        }
        
        .contact-label {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--gray);
            margin-bottom: 10px;
        }
        
        .contact-value {
            font-size: 18px;
            color: var(--light);
        }
        
        .contact-form {
            display: grid;
            gap: 30px;
        }
        
        .form-group {
            position: relative;
        }
        
        .form-input {
            width: 100%;
            padding: 15px 0;
            background: transparent;
            border: none;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            color: var(--light);
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s ease;
        }
        
        .form-input:focus {
            border-color: var(--primary);
        }
        
        .form-label {
            position: absolute;
            top: 15px;
            left: 0;
            color: var(--gray);
            font-size: 16px;
            pointer-events: none;
            transition: all 0.3s ease;
        }
        
        .form-input:focus + .form-label,
        .form-input:not(:placeholder-shown) + .form-label {
            top: -10px;
            font-size: 12px;
            color: var(--primary);
        }
        
        .form-textarea {
            min-height: 120px;
            resize: vertical;
        }
        
        .form-submit {
            padding: 15px 50px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            border: none;
            color: var(--light);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            cursor: none;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .form-submit::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.5s ease;
        }
        
        .form-submit:hover::before {
            width: 300px;
            height: 300px;
        }
        
        /* フッター */
        footer {
            padding: 50px;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 30px;
        }
        
        .social-link {
            width: 50px;
            height: 50px;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--light);
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .social-link::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: var(--primary);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease;
            z-index: -1;
        }
        
        .social-link:hover {
            border-color: var(--primary);
            transform: translateY(-5px);
        }
        
        .social-link:hover::before {
            width: 100%;
            height: 100%;
        }
        
        .footer-text {
            color: var(--gray);
            font-size: 14px;
        }
        
        /* レスポンシブデザイン */
        @media (max-width: 1024px) {
            .projects-grid {
                grid-template-columns: 1fr;
            }
            
            .skills-container {
                grid-template-columns: 1fr;
                gap: 50px;
            }
            
            .about-container {
                grid-template-columns: 1fr;
                gap: 50px;
            }
        }
        
        @media (max-width: 768px) {
            nav {
                padding: 20px;
            }
            
            .nav-menu {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: var(--dark);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 30px;
            }
            
            .nav-menu.active {
                display: flex;
            }
            
            .menu-toggle {
                display: flex;
                z-index: 1001;
            }
            
            .hero-title {
                font-size: 60px;
            }
            
            .projects-grid {
                grid-template-columns: 1fr;
            }
            
            .skills-list {
                grid-template-columns: 1fr;
            }
            
            .about-stats {
                grid-template-columns: 1fr;
                gap: 30px;
            }
        }
        
        @media (max-width: 480px) {
            .hero-title {
                font-size: 48px;
            }
            
            .section-title {
                font-size: 36px;
            }
            
            .contact-info {
                grid-template-columns: 1fr;
            }
        }`,
    js: `// ローディング画面
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 2000);
        });
        
        // カスタムカーソル
        const cursor = document.getElementById('cursor');
        const cursorFollower = document.getElementById('cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX - 20 + 'px';
                cursorFollower.style.top = e.clientY - 20 + 'px';
            }, 100);
        });
        
        // ホバーエフェクト
        const hoverElements = document.querySelectorAll('a, button');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
        
        // メニュートグル
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
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
                    // モバイルメニューを閉じる
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
        
        // スキルバーアニメーション
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.skill-item').forEach(skill => {
            skillObserver.observe(skill);
        });
        
        // パララックス効果
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-bg');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = \`translateY(\${scrolled * speed}px)\`;
            });
        });
        
        // フォーム送信
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('メッセージを送信しました！');
        });`
  }
}