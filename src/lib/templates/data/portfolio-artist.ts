import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioArtistTemplate: WebTemplate = {
  id: 'portfolio-artist',
  title: 'ポートフォリオ - アーティスト',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: '創造性と芸術性を表現するアーティスト向けポートフォリオテンプレート',
  thumbnail: '/template-images/portfolio-artist.jpg',
  features: [
    'アート作品ギャラリー',
    'クリエイティブレイアウト',
    '色彩豊かなデザイン',
    'アーティストプロフィール'
  ],
  tags: ['ポートフォリオ', 'アーティスト', 'クリエイティブ', 'アート'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mai Suzuki - Visual Artist</title>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <span class="logo-art">✨</span>
                <span class="logo-text">MAI SUZUKI</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#exhibitions">Exhibitions</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="hero-bg">
            <div class="color-splash splash-1"></div>
            <div class="color-splash splash-2"></div>
            <div class="color-splash splash-3"></div>
            <div class="color-splash splash-4"></div>
        </div>
        <div class="hero-content">
            <h1 class="hero-title">
                <span class="title-word" data-text="CREATE">CREATE</span>
                <span class="title-word" data-text="INSPIRE">INSPIRE</span>
                <span class="title-word" data-text="TRANSFORM">TRANSFORM</span>
            </h1>
            <p class="hero-subtitle">色彩と形で感情を表現するビジュアルアーティスト</p>
            <div class="hero-cta">
                <button class="btn-primary">作品を見る</button>
                <button class="btn-outline">アーティストについて</button>
            </div>
        </div>
        <div class="scroll-art">
            <div class="brush-stroke"></div>
            <span>Scroll to Explore</span>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616c830e91c?w=500&h=600&fit=crop" alt="アーティスト鈴木舞">
                    <div class="image-frame"></div>
                    <div class="paint-drops">
                        <div class="drop drop-1"></div>
                        <div class="drop drop-2"></div>
                        <div class="drop drop-3"></div>
                    </div>
                </div>
                <div class="about-text">
                    <h2 class="section-title">About the Artist</h2>
                    <p>現代アートとデジタルメディアを融合させた作品を制作するビジュアルアーティストです。</p>
                    <p>色彩の持つ感情的な力と、抽象的な形の美しさを通じて、観る人の心に深く響く作品作りを心がけています。</p>
                    <p>自然からインスピレーションを得て、現代社会における人間の感情や体験を表現しています。</p>
                    
                    <div class="artist-info">
                        <div class="info-item">
                            <div class="info-icon">🎨</div>
                            <div class="info-content">
                                <h4>専門分野</h4>
                                <p>抽象画、デジタルアート、インスタレーション</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-icon">🏆</div>
                            <div class="info-content">
                                <h4>受賞歴</h4>
                                <p>東京現代アート大賞 2023、新進アーティスト賞 2022</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-icon">🌍</div>
                            <div class="info-content">
                                <h4>展示歴</h4>
                                <p>東京、大阪、ニューヨーク、パリで個展・グループ展</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="gallery" class="gallery">
        <div class="gallery-header">
            <h2 class="section-title">Art Gallery</h2>
            <div class="gallery-filters">
                <button class="filter-btn active" data-filter="all">All Works</button>
                <button class="filter-btn" data-filter="abstract">Abstract</button>
                <button class="filter-btn" data-filter="digital">Digital</button>
                <button class="filter-btn" data-filter="installation">Installation</button>
                <button class="filter-btn" data-filter="mixed">Mixed Media</button>
            </div>
        </div>
        
        <div class="gallery-grid">
            <div class="artwork-item featured" data-category="abstract">
                <div class="artwork-image">
                    <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop" alt="抽象画作品1">
                    <div class="artwork-overlay">
                        <div class="artwork-info">
                            <h3>Emotional Spectrum</h3>
                            <p>Canvas, Acrylic</p>
                            <p>120 × 90 cm</p>
                            <button class="view-artwork">詳細を見る</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="artwork-item" data-category="digital">
                <div class="artwork-image">
                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop" alt="デジタルアート作品1">
                    <div class="artwork-overlay">
                        <div class="artwork-info">
                            <h3>Digital Dreams</h3>
                            <p>Digital Print</p>
                            <p>70 × 50 cm</p>
                            <button class="view-artwork">詳細を見る</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="artwork-item wide" data-category="installation">
                <div class="artwork-image">
                    <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop" alt="インスタレーション作品1">
                    <div class="artwork-overlay">
                        <div class="artwork-info">
                            <h3>Space & Light</h3>
                            <p>Mixed Media Installation</p>
                            <p>300 × 200 × 150 cm</p>
                            <button class="view-artwork">詳細を見る</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="artwork-item" data-category="abstract">
                <div class="artwork-image">
                    <img src="https://images.unsplash.com/photo-1578662015358-e6eadc46e398?w=600&h=800&fit=crop" alt="抽象画作品2">
                    <div class="artwork-overlay">
                        <div class="artwork-info">
                            <h3>Nature's Rhythm</h3>
                            <p>Canvas, Oil</p>
                            <p>100 × 80 cm</p>
                            <button class="view-artwork">詳細を見る</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="artwork-item tall" data-category="mixed">
                <div class="artwork-image">
                    <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=900&fit=crop" alt="ミクストメディア作品1">
                    <div class="artwork-overlay">
                        <div class="artwork-info">
                            <h3>Urban Essence</h3>
                            <p>Mixed Media</p>
                            <p>80 × 120 cm</p>
                            <button class="view-artwork">詳細を見る</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="artwork-item" data-category="digital">
                <div class="artwork-image">
                    <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop" alt="デジタルアート作品2">
                    <div class="artwork-overlay">
                        <div class="artwork-info">
                            <h3>Cyber Garden</h3>
                            <p>Digital Art</p>
                            <p>60 × 40 cm</p>
                            <button class="view-artwork">詳細を見る</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="artwork-item" data-category="abstract">
                <div class="artwork-image">
                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop" alt="抽象画作品3">
                    <div class="artwork-overlay">
                        <div class="artwork-info">
                            <h3>Color Symphony</h3>
                            <p>Canvas, Acrylic</p>
                            <p>90 × 90 cm</p>
                            <button class="view-artwork">詳細を見る</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="artwork-item" data-category="mixed">
                <div class="artwork-image">
                    <img src="https://images.unsplash.com/photo-1578662015358-e6eadc46e398?w=600&h=400&fit=crop" alt="ミクストメディア作品2">
                    <div class="artwork-overlay">
                        <div class="artwork-info">
                            <h3>Textured Reality</h3>
                            <p>Mixed Media</p>
                            <p>70 × 50 cm</p>
                            <button class="view-artwork">詳細を見る</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="exhibitions" class="exhibitions">
        <div class="container">
            <h2 class="section-title">Exhibitions & Events</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-year">2025</div>
                    <div class="timeline-content">
                        <h3>個展「Inner Landscapes」</h3>
                        <p>東京現代美術館 | 2025年4月15日 - 6月30日</p>
                        <p>最新作品25点を展示予定</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">2024</div>
                    <div class="timeline-content">
                        <h3>グループ展「New Visions」</h3>
                        <p>表参道ギャラリー | 2024年11月1日 - 12月15日</p>
                        <p>新進アーティスト5名による合同展</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">2024</div>
                    <div class="timeline-content">
                        <h3>個展「Color Emotions」</h3>
                        <p>大阪アートスペース | 2024年7月10日 - 8月25日</p>
                        <p>色彩心理学をテーマにした作品シリーズ</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">2023</div>
                    <div class="timeline-content">
                        <h3>国際現代アート展</h3>
                        <p>ニューヨーク現代美術館 | 2023年10月5日 - 12月31日</p>
                        <p>日本代表アーティストとして参加</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-content">
                <div class="contact-art">
                    <div class="palette">
                        <div class="color-dot color-1"></div>
                        <div class="color-dot color-2"></div>
                        <div class="color-dot color-3"></div>
                        <div class="color-dot color-4"></div>
                        <div class="color-dot color-5"></div>
                        <div class="brush"></div>
                    </div>
                </div>
                <div class="contact-text">
                    <h2 class="section-title">Let's Create Together</h2>
                    <p>アート作品の購入、コミッションワーク、展示のご相談など、お気軽にお問い合わせください。</p>
                    <p>あなたの空間に特別な芸術作品をお届けします。</p>
                    
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="contact-icon">📧</div>
                            <div class="contact-details">
                                <span class="contact-label">Email</span>
                                <a href="mailto:mai@example.com">mai@example.com</a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">📱</div>
                            <div class="contact-details">
                                <span class="contact-label">Phone</span>
                                <a href="tel:+81901234567">090-1234-5678</a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">🏛️</div>
                            <div class="contact-details">
                                <span class="contact-label">Studio</span>
                                <span>東京都渋谷区恵比寿</span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">📷</div>
                            <div class="contact-details">
                                <span class="contact-label">Instagram</span>
                                <a href="#">@mai_visual_art</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-cta">
                        <button class="btn-primary large">作品を購入する</button>
                        <button class="btn-outline large">コミッション依頼</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p>&copy; 2025 Mai Suzuki Visual Art. All artworks are protected by copyright.</p>
                <div class="social-links">
                    <a href="#" class="social-link">Instagram</a>
                    <a href="#" class="social-link">Behance</a>
                    <a href="#" class="social-link">Twitter</a>
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
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #2d3748;
    background: #ffffff;
    overflow-x: hidden;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    z-index: 1000;
    padding: 1rem 0;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
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
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo-art {
    font-size: 1.5rem;
    animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(180deg); }
}

.logo-text {
    font-size: 1.3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #e53e3e, #9f7aea, #38b2ac);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 2px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #4a5568;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #e53e3e, #9f7aea);
    transition: width 0.3s ease;
}

.nav-menu a:hover::after {
    width: 100%;
}

.nav-menu a:hover {
    color: #e53e3e;
}

/* Hero */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: radial-gradient(circle at 30% 20%, #fbb6ce 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, #b794f6 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, #4fd1c7 0%, transparent 50%),
                linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.color-splash {
    position: absolute;
    border-radius: 50%;
    opacity: 0.6;
    animation: float 6s ease-in-out infinite;
}

.splash-1 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #e53e3e, #fc8181);
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.splash-2 {
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #9f7aea, #b794f6);
    top: 60%;
    right: 15%;
    animation-delay: 2s;
}

.splash-3 {
    width: 180px;
    height: 180px;
    background: linear-gradient(135deg, #38b2ac, #4fd1c7);
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
}

.splash-4 {
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #ed8936, #f6ad55);
    top: 30%;
    right: 30%;
    animation-delay: 1s;
}

@keyframes float {
    0%, 100% { 
        transform: translateY(0px) rotate(0deg);
        opacity: 0.6;
    }
    50% { 
        transform: translateY(-30px) rotate(180deg);
        opacity: 0.8;
    }
}

.hero-content {
    text-align: center;
    z-index: 2;
    max-width: 800px;
    padding: 0 2rem;
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.title-word {
    position: relative;
    display: inline-block;
    background: linear-gradient(135deg, #e53e3e, #9f7aea, #38b2ac);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textShine 3s ease-in-out infinite;
}

@keyframes textShine {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.hero-subtitle {
    font-size: 1.3rem;
    color: #718096;
    margin-bottom: 3rem;
    font-weight: 400;
}

.hero-cta {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-primary, .btn-outline {
    padding: 1.2rem 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-primary {
    background: linear-gradient(135deg, #e53e3e, #9f7aea);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(229, 62, 62, 0.4);
}

.btn-outline {
    background: transparent;
    color: #e53e3e;
    border: 2px solid #e53e3e;
}

.btn-outline:hover {
    background: #e53e3e;
    color: white;
}

.btn-primary.large, .btn-outline.large {
    padding: 1.3rem 3rem;
    font-size: 1.1rem;
}

.scroll-art {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #718096;
}

.brush-stroke {
    width: 3px;
    height: 40px;
    background: linear-gradient(to bottom, #e53e3e, #9f7aea, #38b2ac);
    border-radius: 2px;
    animation: brushMove 2s ease-in-out infinite;
}

@keyframes brushMove {
    0%, 100% { height: 40px; opacity: 0.7; }
    50% { height: 60px; opacity: 1; }
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
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, #e53e3e, #9f7aea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #e53e3e, #9f7aea);
    border-radius: 2px;
}

/* About */
.about {
    background: #f7fafc;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: center;
}

.about-image {
    position: relative;
}

.about-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
    position: relative;
    z-index: 2;
}

.image-frame {
    position: absolute;
    top: -20px;
    left: -20px;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border: 3px solid #e53e3e;
    border-radius: 25px;
    z-index: 1;
}

.paint-drops {
    position: absolute;
    top: -30px;
    right: -30px;
}

.drop {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50% 50% 50% 0;
    animation: drip 3s ease-in-out infinite;
}

.drop-1 {
    background: #e53e3e;
    top: 0;
    left: 0;
    animation-delay: 0s;
}

.drop-2 {
    background: #9f7aea;
    top: 30px;
    left: 20px;
    animation-delay: 1s;
}

.drop-3 {
    background: #38b2ac;
    top: 60px;
    left: -10px;
    animation-delay: 2s;
}

@keyframes drip {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(10px) scale(1.1); }
}

.about-text p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #4a5568;
    line-height: 1.8;
}

.artist-info {
    margin-top: 3rem;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.info-icon {
    font-size: 2rem;
    min-width: 60px;
    text-align: center;
}

.info-content h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.5rem;
}

.info-content p {
    color: #718096;
    margin: 0;
}

/* Gallery */
.gallery {
    background: white;
    padding: 6rem 0;
}

.gallery-header {
    text-align: center;
    margin-bottom: 4rem;
}

.gallery-filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.filter-btn {
    padding: 0.8rem 1.5rem;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    color: #4a5568;
}

.filter-btn.active,
.filter-btn:hover {
    background: linear-gradient(135deg, #e53e3e, #9f7aea);
    border-color: transparent;
    color: white;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 300px);
    gap: 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

.artwork-item {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
}

.artwork-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.artwork-item.featured {
    grid-row: span 2;
    grid-column: span 2;
}

.artwork-item.wide {
    grid-column: span 2;
}

.artwork-item.tall {
    grid-row: span 2;
}

.artwork-image {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.artwork-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.artwork-item:hover .artwork-image img {
    transform: scale(1.1);
}

.artwork-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(229, 62, 62, 0.9), rgba(159, 122, 234, 0.9));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.artwork-item:hover .artwork-overlay {
    opacity: 1;
}

.artwork-info {
    text-align: center;
    color: white;
    padding: 2rem;
}

.artwork-info h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.artwork-info p {
    margin-bottom: 0.5rem;
    opacity: 0.9;
}

.view-artwork {
    margin-top: 1rem;
    padding: 0.8rem 1.5rem;
    background: white;
    color: #e53e3e;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.view-artwork:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Exhibitions */
.exhibitions {
    background: #f7fafc;
}

.timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 100px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #e53e3e, #9f7aea, #38b2ac);
}

.timeline-item {
    display: flex;
    margin-bottom: 3rem;
    position: relative;
}

.timeline-year {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #e53e3e, #9f7aea);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    flex-shrink: 0;
    margin-right: 2rem;
    box-shadow: 0 5px 15px rgba(229, 62, 62, 0.3);
}

.timeline-content {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    flex: 1;
}

.timeline-content h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 1rem;
}

.timeline-content p {
    color: #4a5568;
    margin-bottom: 0.5rem;
}

/* Contact */
.contact {
    background: linear-gradient(135deg, #e53e3e 0%, #9f7aea 50%, #38b2ac 100%);
    color: white;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: center;
}

.contact-art {
    display: flex;
    justify-content: center;
    align-items: center;
}

.palette {
    position: relative;
    width: 200px;
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
}

.color-dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.color-1 { background: #e53e3e; }
.color-2 { background: #9f7aea; }
.color-3 { background: #38b2ac; }
.color-4 { background: #ed8936; }
.color-5 { background: #48bb78; }

.brush {
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 40px;
    height: 8px;
    background: #8b4513;
    border-radius: 20px;
    transform: rotate(45deg);
}

.brush::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: 15px;
    height: 18px;
    background: #ddd;
    border-radius: 5px;
}

.contact .section-title {
    color: white;
    text-align: left;
}

.contact .section-title::after {
    background: white;
}

.contact-text p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
    line-height: 1.8;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin: 3rem 0;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(10px);
}

.contact-icon {
    font-size: 1.5rem;
}

.contact-details {
    display: flex;
    flex-direction: column;
}

.contact-label {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 0.3rem;
}

.contact-item a {
    color: white;
    text-decoration: none;
    font-weight: 500;
}

.contact-item a:hover {
    text-decoration: underline;
}

.contact-cta {
    display: flex;
    gap: 1.5rem;
    margin-top: 3rem;
}

/* Footer */
.footer {
    background: #1a202c;
    color: #a0aec0;
    padding: 2rem 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    padding: 0.5rem 1rem;
    background: #2d3748;
    color: #e2e8f0;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.social-link:hover {
    background: linear-gradient(135deg, #e53e3e, #9f7aea);
    transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-cta {
        flex-direction: column;
        align-items: center;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }
    
    .artwork-item.featured,
    .artwork-item.wide,
    .artwork-item.tall {
        grid-row: span 1;
        grid-column: span 1;
    }
    
    .timeline::before {
        left: 40px;
    }
    
    .timeline-year {
        width: 60px;
        height: 60px;
        font-size: 0.9rem;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
        text-align: center;
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
    js: `// アートワークフィルター機能
const filterButtons = document.querySelectorAll('.filter-btn');
const artworkItems = document.querySelectorAll('.artwork-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // アクティブクラスの切り替え
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        
        artworkItems.forEach((item, index) => {
            if (filter === 'all') {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, index * 100);
            } else {
                if (item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, index * 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// アートワーク詳細表示
document.querySelectorAll('.view-artwork').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const artworkTitle = this.closest('.artwork-info').querySelector('h3').textContent;
        alert(\`「\${artworkTitle}」の詳細ページへ遷移（実装予定）\`);
    });
});

// アートワークアイテムクリック
artworkItems.forEach(item => {
    item.addEventListener('click', function() {
        const artworkTitle = this.querySelector('.artwork-info h3').textContent;
        alert(\`「\${artworkTitle}」の詳細ページへ遷移（実装予定）\`);
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
        if (this.textContent.includes('作品を見る')) {
            document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
        } else if (this.textContent.includes('購入')) {
            alert('作品購入ページへ遷移（実装予定）');
        } else {
            alert('お問い合わせフォームへ遷移（実装予定）');
        }
    });
});

document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent.includes('アーティスト')) {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        } else if (this.textContent.includes('コミッション')) {
            alert('コミッション依頼フォームへ遷移（実装予定）');
        }
    });
});

// タイトルワードのアニメーション効果
const titleWords = document.querySelectorAll('.title-word');
titleWords.forEach((word, index) => {
    word.style.animationDelay = \`\${index * 0.5}s\`;
    
    // ホバー効果
    word.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    word.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// スクロール時のパララックス効果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    const colorSplashes = document.querySelectorAll('.color-splash');
    
    // ナビゲーションの背景変更
    if (scrolled > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    // カラースプラッシュのパララックス
    colorSplashes.forEach((splash, index) => {
        const speed = 0.1 + (index * 0.05);
        splash.style.transform = \`translateY(\${scrolled * speed}px) rotate(\${scrolled * 0.1}deg)\`;
    });
});

// インターセクションオブザーバーでアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // タイムラインアイテムの順次表示
            if (entry.target.classList.contains('timeline-item')) {
                const timelineItems = document.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 200);
                });
            }
        }
    });
}, observerOptions);

// 各セクションを監視
document.querySelectorAll('.about-content, .timeline-item, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// タイムラインアイテムの初期設定
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease';
});

// カラーパレットの相互作用
const colorDots = document.querySelectorAll('.color-dot');
colorDots.forEach(dot => {
    dot.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
        this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.4)';
    });
    
    dot.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.3)';
    });
});

// ページ読み込み時のアニメーション
window.addEventListener('load', () => {
    // ヒーローセクションのフェードイン
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';
    heroContent.style.transition = 'all 1s ease';
    
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);
});`
  }
}