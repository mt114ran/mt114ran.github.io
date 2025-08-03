import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioDeveloperTemplate: WebTemplate = {
  id: 'portfolio-developer',
  title: 'ポートフォリオ - 開発者',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: 'テクニカルなスキルとプロジェクトを効果的に見せる開発者向けポートフォリオテンプレート',
  thumbnail: '/template-images/portfolio-developer.jpg',
  features: [
    'コードスニペット表示',
    'プロジェクトデモ機能',
    '技術スタック表示',
    'GitHub連携'
  ],
  tags: ['ポートフォリオ', '開発者', 'エンジニア', 'テクニカル'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hiroshi Tanaka - Full Stack Developer</title>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <span class="logo-bracket">&lt;</span>
                <span class="logo-text">HT</span>
                <span class="logo-bracket">/&gt;</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home">.home()</a></li>
                <li><a href="#about">.about()</a></li>
                <li><a href="#projects">.projects()</a></li>
                <li><a href="#skills">.skills()</a></li>
                <li><a href="#contact">.contact()</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="hero-content">
            <div class="terminal">
                <div class="terminal-header">
                    <div class="terminal-controls">
                        <span class="control red"></span>
                        <span class="control yellow"></span>
                        <span class="control green"></span>
                    </div>
                    <div class="terminal-title">terminal</div>
                </div>
                <div class="terminal-body">
                    <div class="terminal-line">
                        <span class="prompt">$</span>
                        <span class="command">whoami</span>
                    </div>
                    <div class="terminal-output">
                        <div class="typing-effect">Hiroshi Tanaka - Full Stack Developer</div>
                    </div>
                    <div class="terminal-line">
                        <span class="prompt">$</span>
                        <span class="command">cat skills.txt</span>
                    </div>
                    <div class="terminal-output">
                        <div class="typing-effect">JavaScript, React, Node.js, Python, Go</div>
                    </div>
                    <div class="terminal-line">
                        <span class="prompt">$</span>
                        <span class="command cursor">./build_awesome_things</span>
                    </div>
                </div>
            </div>
            <div class="hero-text">
                <h1 class="hero-title">コードで世界を変える</h1>
                <p class="hero-subtitle">フルスタック開発者として、アイデアを現実にするソリューションを提供します</p>
                <div class="hero-cta">
                    <button class="btn-primary">プロジェクトを見る</button>
                    <button class="btn-outline">GitHub</button>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">// About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <div class="code-block">
                        <div class="code-header">developer.js</div>
                        <pre class="code-content"><code>class Developer {
  constructor() {
    this.name = "Hiroshi Tanaka";
    this.location = "Tokyo, Japan";
    this.experience = "7+ years";
    this.passion = "Clean code & UX";
  }
  
  getSkills() {
    return {
      frontend: ["React", "Vue", "TypeScript"],
      backend: ["Node.js", "Python", "Go"],
      database: ["PostgreSQL", "MongoDB"],
      cloud: ["AWS", "Docker", "Kubernetes"]
    };
  }
  
  getCurrentFocus() {
    return "Building scalable web applications";
  }
}</code></pre>
                    </div>
                    <p>フルスタック開発者として7年以上の経験を持ち、スタートアップから大企業まで様々な規模のプロジェクトに携わってきました。</p>
                    <p>クリーンなコードとユーザー体験を重視し、技術的な課題を創造的に解決することを得意としています。</p>
                </div>
                <div class="about-stats">
                    <div class="stat-card">
                        <div class="stat-icon">🚀</div>
                        <div class="stat-number">50+</div>
                        <div class="stat-label">完成プロジェクト</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">⭐</div>
                        <div class="stat-number">1.2k</div>
                        <div class="stat-label">GitHub Stars</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">👥</div>
                        <div class="stat-number">30+</div>
                        <div class="stat-label">満足クライアント</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">// Featured Projects</h2>
            <div class="projects-grid">
                <div class="project-card featured">
                    <div class="project-header">
                        <div class="project-type">Full Stack</div>
                        <div class="project-links">
                            <a href="#" class="project-link">🔗 Live</a>
                            <a href="#" class="project-link">📁 Code</a>
                        </div>
                    </div>
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Eコマースプラットフォーム">
                        <div class="project-overlay">
                            <button class="view-demo">デモを見る</button>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Eコマースプラットフォーム</h3>
                        <p class="project-description">React + Node.js + PostgreSQLで構築した高性能なEコマースシステム。決済処理、在庫管理、分析機能を統合。</p>
                        <div class="tech-stack">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">PostgreSQL</span>
                            <span class="tech-tag">Stripe</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-type">Frontend</div>
                        <div class="project-links">
                            <a href="#" class="project-link">🔗 Live</a>
                            <a href="#" class="project-link">📁 Code</a>
                        </div>
                    </div>
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="データ可視化ダッシュボード">
                        <div class="project-overlay">
                            <button class="view-demo">デモを見る</button>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">データ可視化ダッシュボード</h3>
                        <p class="project-description">Vue.js + D3.jsを使用したリアルタイムデータ可視化システム。インタラクティブなチャートとフィルタリング機能。</p>
                        <div class="tech-stack">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">D3.js</span>
                            <span class="tech-tag">WebSocket</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-header">
                        <div class="project-type">Backend</div>
                        <div class="project-links">
                            <a href="#" class="project-link">📁 Code</a>
                        </div>
                    </div>
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" alt="マイクロサービスAPI">
                        <div class="project-overlay">
                            <button class="view-demo">詳細を見る</button>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">マイクロサービスAPI</h3>
                        <p class="project-description">Go言語で構築したスケーラブルなマイクロサービスアーキテクチャ。Docker + Kubernetesでクラウドデプロイ。</p>
                        <div class="tech-stack">
                            <span class="tech-tag">Go</span>
                            <span class="tech-tag">Docker</span>
                            <span class="tech-tag">Kubernetes</span>
                            <span class="tech-tag">gRPC</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-header">
                        <div class="project-type">Mobile</div>
                        <div class="project-links">
                            <a href="#" class="project-link">🔗 Live</a>
                            <a href="#" class="project-link">📁 Code</a>
                        </div>
                    </div>
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop" alt="ReactNativeアプリ">
                        <div class="project-overlay">
                            <button class="view-demo">デモを見る</button>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">タスク管理モバイルアプリ</h3>
                        <p class="project-description">React Nativeで開発したクロスプラットフォームアプリ。オフライン対応とリアルタイム同期機能。</p>
                        <div class="tech-stack">
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">Redux</span>
                            <span class="tech-tag">Firebase</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">// Technical Skills</h2>
            <div class="skills-content">
                <div class="skills-category">
                    <h3>Frontend Development</h3>
                    <div class="skill-list">
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">JavaScript / TypeScript</span>
                                <span class="skill-level">95%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 95%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">React / Next.js</span>
                                <span class="skill-level">90%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">Vue.js / Nuxt.js</span>
                                <span class="skill-level">85%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="skills-category">
                    <h3>Backend Development</h3>
                    <div class="skill-list">
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">Node.js / Express</span>
                                <span class="skill-level">90%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">Python / Django</span>
                                <span class="skill-level">80%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 80%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">Go / Gin</span>
                                <span class="skill-level">75%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 75%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="skills-category">
                    <h3>Database & DevOps</h3>
                    <div class="skill-list">
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">PostgreSQL / MongoDB</span>
                                <span class="skill-level">85%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">AWS / Docker</span>
                                <span class="skill-level">80%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 80%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">CI/CD / Testing</span>
                                <span class="skill-level">75%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 75%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">// Let's Build Something</h2>
            <div class="contact-content">
                <div class="contact-text">
                    <p>新しいプロジェクトの相談や技術的な課題の解決について、お気軽にお問い合わせください。</p>
                    <p>一緒に素晴らしいプロダクトを作りましょう。</p>
                </div>
                <div class="contact-info">
                    <div class="contact-card">
                        <div class="contact-icon">📧</div>
                        <div class="contact-details">
                            <span class="contact-label">Email</span>
                            <a href="mailto:hiroshi@example.com">hiroshi@example.com</a>
                        </div>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon">🐙</div>
                        <div class="contact-details">
                            <span class="contact-label">GitHub</span>
                            <a href="#">github.com/hiroshi-dev</a>
                        </div>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon">💼</div>
                        <div class="contact-details">
                            <span class="contact-label">LinkedIn</span>
                            <a href="#">linkedin.com/in/hiroshi-tanaka</a>
                        </div>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon">🐦</div>
                        <div class="contact-details">
                            <span class="contact-label">Twitter</span>
                            <a href="#">@hiroshi_dev</a>
                        </div>
                    </div>
                </div>
                <div class="contact-cta">
                    <button class="btn-primary large">プロジェクトを始める</button>
                    <button class="btn-outline large">履歴書をダウンロード</button>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p>&copy; 2025 Hiroshi Tanaka. Built with ❤️ and lots of ☕</p>
                <div class="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
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
    font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', monospace;
    line-height: 1.6;
    color: #e0e6ed;
    background: #0f1419;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(15, 20, 25, 0.95);
    backdrop-filter: blur(20px);
    z-index: 1000;
    padding: 1rem 0;
    border-bottom: 1px solid #1e2328;
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
    font-weight: 700;
    color: #ff6b35;
}

.logo-bracket {
    color: #39bae6;
}

.logo-text {
    color: #fff;
    margin: 0 0.2rem;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #e0e6ed;
    font-weight: 500;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.nav-menu a:hover {
    color: #ff6b35;
}

/* Hero */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    background: linear-gradient(135deg, #0f1419 0%, #1e2328 100%);
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.terminal {
    background: #1e2328;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    border: 1px solid #39bae6;
}

.terminal-header {
    background: #2d3748;
    padding: 0.8rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.terminal-controls {
    display: flex;
    gap: 0.5rem;
}

.control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.control.red { background: #ff5f56; }
.control.yellow { background: #ffbd2e; }
.control.green { background: #27ca3f; }

.terminal-title {
    font-size: 0.8rem;
    color: #a0aec0;
}

.terminal-body {
    padding: 1.5rem;
    font-family: 'JetBrains Mono', monospace;
}

.terminal-line {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

.prompt {
    color: #39bae6;
    margin-right: 0.5rem;
}

.command {
    color: #fff;
}

.cursor::after {
    content: '|';
    color: #39bae6;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.terminal-output {
    margin: 0.5rem 0 1rem 1.5rem;
    color: #68d391;
}

.typing-effect {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid #39bae6;
    animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #39bae6; }
}

.hero-text {
    text-align: left;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #fff;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: #a0aec0;
    margin-bottom: 2.5rem;
    line-height: 1.6;
}

.hero-cta {
    display: flex;
    gap: 1.5rem;
}

.btn-primary, .btn-outline {
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-primary {
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    color: white;
    border-radius: 6px;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);
}

.btn-outline {
    background: transparent;
    color: #39bae6;
    border: 2px solid #39bae6;
    border-radius: 6px;
}

.btn-outline:hover {
    background: #39bae6;
    color: #0f1419;
}

.btn-primary.large, .btn-outline.large {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

section {
    padding: 6rem 0;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 4rem;
    color: #39bae6;
    position: relative;
}

/* About */
.about {
    background: #1e2328;
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: start;
}

.code-block {
    background: #0f1419;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 2rem;
    border: 1px solid #39bae6;
}

.code-header {
    background: #2d3748;
    padding: 0.8rem 1rem;
    color: #a0aec0;
    font-size: 0.9rem;
    border-bottom: 1px solid #39bae6;
}

.code-content {
    padding: 1.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    overflow-x: auto;
    background: #0f1419;
    color: #e0e6ed;
}

.about-text p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #a0aec0;
    line-height: 1.8;
}

.about-stats {
    display: grid;
    gap: 1.5rem;
}

.stat-card {
    background: #0f1419;
    padding: 2rem 1.5rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #39bae6;
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
}

.stat-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #ff6b35;
    margin-bottom: 0.5rem;
}

.stat-label {
    color: #a0aec0;
    font-size: 0.9rem;
}

/* Projects */
.projects {
    background: #0f1419;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: #1e2328;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #2d3748;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.project-card.featured {
    border: 2px solid #ff6b35;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #2d3748;
}

.project-type {
    font-size: 0.8rem;
    color: #39bae6;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.project-links {
    display: flex;
    gap: 0.5rem;
}

.project-link {
    color: #a0aec0;
    text-decoration: none;
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    background: #1e2328;
    border-radius: 4px;
    transition: color 0.3s ease;
}

.project-link:hover {
    color: #ff6b35;
}

.project-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 20, 25, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.view-demo {
    padding: 0.8rem 1.5rem;
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.3s ease;
}

.view-demo:hover {
    transform: scale(1.05);
}

.project-content {
    padding: 1.5rem;
}

.project-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #fff;
}

.project-description {
    color: #a0aec0;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    padding: 0.3rem 0.8rem;
    background: #39bae6;
    color: #0f1419;
    font-size: 0.8rem;
    border-radius: 20px;
    font-weight: 500;
}

/* Skills */
.skills {
    background: #1e2328;
}

.skills-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
}

.skills-category h3 {
    font-size: 1.3rem;
    color: #39bae6;
    margin-bottom: 1.5rem;
    position: relative;
    padding-left: 1rem;
}

.skills-category h3::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #ff6b35;
}

.skill-item {
    margin-bottom: 1.5rem;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.skill-name {
    font-weight: 500;
    color: #fff;
}

.skill-level {
    font-size: 0.9rem;
    color: #39bae6;
}

.skill-bar {
    height: 8px;
    background: #2d3748;
    border-radius: 10px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    border-radius: 10px;
    transition: width 1.5s ease;
}

/* Contact */
.contact {
    background: #0f1419;
}

.contact-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.contact-text p {
    font-size: 1.2rem;
    color: #a0aec0;
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin: 3rem 0;
}

.contact-card {
    background: #1e2328;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    border: 1px solid #2d3748;
    transition: all 0.3s ease;
}

.contact-card:hover {
    border-color: #39bae6;
    transform: translateY(-5px);
}

.contact-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.contact-label {
    font-size: 0.9rem;
    color: #a0aec0;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.contact-card a {
    color: #39bae6;
    text-decoration: none;
    font-weight: 500;
}

.contact-card a:hover {
    color: #ff6b35;
}

.contact-cta {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 3rem;
}

/* Footer */
.footer {
    background: #000;
    color: #a0aec0;
    padding: 2rem 0;
    border-top: 1px solid #1e2328;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-links {
    display: flex;
    gap: 2rem;
}

.footer-links a {
    color: #a0aec0;
    text-decoration: none;
    font-size: 0.9rem;
}

.footer-links a:hover {
    color: #39bae6;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .skills-content {
        grid-template-columns: 1fr;
    }
    
    .contact-info {
        grid-template-columns: 1fr;
    }
    
    .contact-cta {
        flex-direction: column;
        align-items: center;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-menu {
        display: none;
    }
}`,
    js: `// タイピングエフェクトの制御
const typingElements = document.querySelectorAll('.typing-effect');
let typingComplete = false;

function startTypingAnimation() {
    if (typingComplete) return;
    
    typingElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';
        
        setTimeout(() => {
            let i = 0;
            const typeTimer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeTimer);
                    if (index === typingElements.length - 1) {
                        typingComplete = true;
                    }
                }
            }, 50);
        }, index * 2000);
    });
}

// ページ読み込み時にタイピングアニメーション開始
window.addEventListener('load', () => {
    setTimeout(startTypingAnimation, 1000);
});

// プロジェクトデモ表示
document.querySelectorAll('.view-demo').forEach(button => {
    button.addEventListener('click', function() {
        const projectTitle = this.closest('.project-card').querySelector('.project-title').textContent;
        alert(\`\${projectTitle}のデモページへ遷移（実装予定）\`);
    });
});

// プロジェクトリンククリック
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const linkType = this.textContent.includes('Live') ? 'ライブデモ' : 'ソースコード';
        alert(\`\${linkType}へ遷移（実装予定）\`);
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

// CTAボタンの動作
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent.includes('プロジェクト')) {
            if (document.querySelector('#projects')) {
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('お問い合わせフォームへ遷移（実装予定）');
            }
        } else {
            alert('お問い合わせフォームへ遷移（実装予定）');
        }
    });
});

document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent.includes('GitHub')) {
            alert('GitHubプロフィールへ遷移（実装予定）');
        } else if (this.textContent.includes('履歴書')) {
            alert('履歴書PDFをダウンロード（実装予定）');
        } else {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// スキルバーアニメーション
const observerOptions = {
    threshold: 0.3
};

const skillsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
                setTimeout(() => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                }, index * 200);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ナビゲーションの背景変更
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 20, 25, 0.98)';
        navbar.style.borderBottom = '1px solid #39bae6';
    } else {
        navbar.style.background = 'rgba(15, 20, 25, 0.95)';
        navbar.style.borderBottom = '1px solid #1e2328';
    }
});

// コードハイライト効果（簡易版）
const codeContent = document.querySelector('.code-content code');
if (codeContent) {
    const originalText = codeContent.textContent;
    
    // 簡単なシンタックスハイライト
    const highlightedText = originalText
        .replace(/(class|constructor|this|return|const|let|var)/g, '<span style="color: #ff6b35;">$1</span>')
        .replace(/(name|location|experience|passion|frontend|backend|database|cloud)/g, '<span style="color: #68d391;">$1</span>')
        .replace(/(".*?")/g, '<span style="color: #ffd700;">$1</span>')
        .replace(/(\/\/.*)/g, '<span style="color: #a0aec0;">$1</span>');
    
    codeContent.innerHTML = highlightedText;
}

// ターミナルカーソルの点滅制御
const cursorElement = document.querySelector('.cursor');
if (cursorElement) {
    // 初期状態では点滅を停止
    setTimeout(() => {
        cursorElement.style.animation = 'none';
        cursorElement.style.borderRight = 'none';
    }, 5000);
}`
  }
}