import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioPhotographerTemplate: WebTemplate = {
  id: 'portfolio-photographer',
  title: 'ポートフォリオ - フォトグラファー',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: '大きな写真を活用したビジュアル重視のフォトグラファー向けポートフォリオテンプレート',
  thumbnail: '/template-images/portfolio-photographer.jpg',
  features: [
    'フルスクリーン写真表示',
    'ライトボックス機能',
    '写真カテゴリー分類',
    'ダークモード対応'
  ],
  tags: ['ポートフォリオ', 'フォトグラファー', 'ビジュアル', 'ダーク'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yuki Yamamoto - Photographer</title>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">YUKI YAMAMOTO</div>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1920&h=1080&fit=crop" alt="写真撮影風景">
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <h1 class="hero-title">PHOTOGRAPHER</h1>
            <p class="hero-subtitle">瞬間を永遠に</p>
            <div class="hero-cta">
                <button class="btn-primary">作品を見る</button>
                <button class="btn-outline">お問い合わせ</button>
            </div>
        </div>
        <div class="scroll-indicator">
            <div class="scroll-line"></div>
            <span>Scroll</span>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2 class="section-title">About</h2>
                    <p>東京を拠点に活動するフォトグラファーです。ポートレート、ウェディング、イベント撮影を専門としています。</p>
                    <p>光と影を操り、被写体の美しさを最大限に引き出すことを心がけ、お客様の大切な瞬間を芸術的な作品として残します。</p>
                    <p>10年以上の経験で培った技術と感性で、あなたの物語を写真に刻みます。</p>
                    <div class="stats">
                        <div class="stat-item">
                            <span class="stat-number">500+</span>
                            <span class="stat-label">撮影実績</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">10+</span>
                            <span class="stat-label">経験年数</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">98%</span>
                            <span class="stat-label">満足度</span>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop" alt="フォトグラファーポートレート">
                </div>
            </div>
        </div>
    </section>

    <section id="gallery" class="gallery">
        <div class="container">
            <h2 class="section-title">Gallery</h2>
            <div class="gallery-filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="portrait">Portrait</button>
                <button class="filter-btn" data-filter="wedding">Wedding</button>
                <button class="filter-btn" data-filter="event">Event</button>
                <button class="filter-btn" data-filter="landscape">Landscape</button>
            </div>
            <div class="gallery-grid">
                <div class="gallery-item" data-category="portrait">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616c830e91c?w=600&h=800&fit=crop" alt="ポートレート写真1">
                    <div class="gallery-overlay">
                        <button class="view-full">View Full</button>
                    </div>
                </div>
                <div class="gallery-item large" data-category="wedding">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop" alt="ウェディング写真1">
                    <div class="gallery-overlay">
                        <button class="view-full">View Full</button>
                    </div>
                </div>
                <div class="gallery-item" data-category="landscape">
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop" alt="風景写真1">
                    <div class="gallery-overlay">
                        <button class="view-full">View Full</button>
                    </div>
                </div>
                <div class="gallery-item" data-category="event">
                    <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop" alt="イベント写真1">
                    <div class="gallery-overlay">
                        <button class="view-full">View Full</button>
                    </div>
                </div>
                <div class="gallery-item wide" data-category="landscape">
                    <img src="https://images.unsplash.com/photo-1464822759844-d150baec0494?w=800&h=400&fit=crop" alt="風景写真2">
                    <div class="gallery-overlay">
                        <button class="view-full">View Full</button>
                    </div>
                </div>
                <div class="gallery-item" data-category="portrait">
                    <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=800&fit=crop" alt="ポートレート写真2">
                    <div class="gallery-overlay">
                        <button class="view-full">View Full</button>
                    </div>
                </div>
                <div class="gallery-item" data-category="wedding">
                    <img src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop" alt="ウェディング写真2">
                    <div class="gallery-overlay">
                        <button class="view-full">View Full</button>
                    </div>
                </div>
                <div class="gallery-item" data-category="event">
                    <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop" alt="イベント写真2">
                    <div class="gallery-overlay">
                        <button class="view-full">View Full</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Services</h2>
            <div class="services-grid">
                <div class="service-item">
                    <div class="service-icon">📸</div>
                    <h3>ポートレート撮影</h3>
                    <p>個人・家族・カップルの記念写真。スタジオまたはロケーション撮影。</p>
                    <div class="service-price">¥30,000〜</div>
                </div>
                <div class="service-item featured">
                    <div class="service-icon">💒</div>
                    <h3>ウェディング撮影</h3>
                    <p>結婚式の挙式・披露宴から前撮りまで、人生最高の日を美しく記録。</p>
                    <div class="service-price">¥150,000〜</div>
                </div>
                <div class="service-item">
                    <div class="service-icon">🎉</div>
                    <h3>イベント撮影</h3>
                    <p>企業イベント、パーティー、コンサートなどの撮影。</p>
                    <div class="service-price">¥50,000〜</div>
                </div>
                <div class="service-item">
                    <div class="service-icon">🏢</div>
                    <h3>商品・建築撮影</h3>
                    <p>商品カタログ、建築物、インテリアの撮影。</p>
                    <div class="service-price">¥40,000〜</div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Contact</h2>
            <div class="contact-content">
                <div class="contact-text">
                    <p>撮影のご依頼・ご相談はお気軽にお問い合わせください。</p>
                    <p>お客様のご要望に合わせた最適なプランをご提案いたします。</p>
                </div>
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">📧</div>
                        <div class="contact-details">
                            <span class="contact-label">Email</span>
                            <a href="mailto:yuki@example.com">yuki@example.com</a>
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
                        <div class="contact-icon">📍</div>
                        <div class="contact-details">
                            <span class="contact-label">Location</span>
                            <span>東京都・関東近郊</span>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📷</div>
                        <div class="contact-details">
                            <span class="contact-label">Instagram</span>
                            <a href="#">@yuki_photographer</a>
                        </div>
                    </div>
                </div>
                <button class="btn-primary large">撮影を依頼する</button>
            </div>
        </div>
    </section>

    <!-- ライトボックス -->
    <div class="lightbox" id="lightbox">
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="" alt="" id="lightbox-image">
            <div class="lightbox-nav">
                <button class="lightbox-prev">‹</button>
                <button class="lightbox-next">›</button>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Yuki Yamamoto Photography. All rights reserved.</p>
            <div class="social-links">
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
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
    color: #e0e0e0;
    background: #0d0d0d;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(13, 13, 13, 0.95);
    backdrop-filter: blur(20px);
    z-index: 1000;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: #ffffff;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #e0e0e0;
    font-weight: 400;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    letter-spacing: 1px;
}

.nav-menu a:hover {
    color: #ffffff;
}

/* Hero */
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

.hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 2;
}

.hero-title {
    font-size: 6rem;
    font-weight: 100;
    letter-spacing: 15px;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 5px;
    margin-bottom: 3rem;
    opacity: 0.9;
}

.hero-cta {
    display: flex;
    gap: 2rem;
    justify-content: center;
}

.btn-primary, .btn-outline {
    padding: 1rem 2.5rem;
    font-size: 1rem;
    font-weight: 400;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.btn-primary {
    background: #ffffff;
    color: #000000;
    border-radius: 0;
}

.btn-primary:hover {
    background: #e0e0e0;
    transform: translateY(-2px);
}

.btn-outline {
    background: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 0;
}

.btn-outline:hover {
    background: white;
    color: #000000;
}

.btn-primary.large {
    padding: 1.2rem 3rem;
    font-size: 1.1rem;
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: white;
    opacity: 0.7;
}

.scroll-line {
    width: 1px;
    height: 40px;
    background: white;
    animation: scroll-line 2s ease-in-out infinite;
}

@keyframes scroll-line {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

.scroll-indicator span {
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
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
    font-weight: 100;
    text-align: center;
    margin-bottom: 4rem;
    color: #ffffff;
    letter-spacing: 5px;
    text-transform: uppercase;
}

/* About */
.about {
    background: #1a1a1a;
}

.about-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-text .section-title {
    text-align: left;
    margin-bottom: 2rem;
}

.about-text p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #b0b0b0;
    line-height: 1.8;
}

.stats {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 300;
    color: #ffffff;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.9rem;
    color: #888;
    letter-spacing: 1px;
}

.about-image {
    position: relative;
}

.about-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}

.about-image:hover img {
    filter: grayscale(0%);
}

/* Gallery */
.gallery {
    background: #0d0d0d;
}

.gallery-filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 0.8rem 2rem;
    background: transparent;
    border: 1px solid #333;
    color: #e0e0e0;
    cursor: pointer;
    font-weight: 400;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.9rem;
}

.filter-btn.active,
.filter-btn:hover {
    background: #ffffff;
    color: #000000;
    border-color: #ffffff;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 250px);
    gap: 1rem;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.02);
}

.gallery-item.large {
    grid-row: span 2;
}

.gallery-item.wide {
    grid-column: span 2;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
    filter: brightness(0.8);
}

.gallery-item:hover img {
    filter: brightness(1);
}

.gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    opacity: 1;
}

.view-full {
    padding: 0.8rem 1.5rem;
    background: white;
    color: black;
    border: none;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.view-full:hover {
    background: #e0e0e0;
}

/* Services */
.services {
    background: #1a1a1a;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.service-item {
    padding: 3rem 2rem;
    background: #0d0d0d;
    text-align: center;
    border: 1px solid #333;
    transition: all 0.3s ease;
}

.service-item:hover {
    border-color: #ffffff;
    transform: translateY(-5px);
}

.service-item.featured {
    border-color: #ffffff;
    background: #262626;
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.service-item h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: #ffffff;
    letter-spacing: 1px;
}

.service-item p {
    color: #b0b0b0;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.service-price {
    font-size: 1.2rem;
    font-weight: 300;
    color: #ffffff;
    letter-spacing: 1px;
}

/* Contact */
.contact {
    background: #0d0d0d;
}

.contact-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.contact-text p {
    font-size: 1.1rem;
    color: #b0b0b0;
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 3rem 0;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: #1a1a1a;
    border: 1px solid #333;
    transition: border-color 0.3s ease;
}

.contact-item:hover {
    border-color: #ffffff;
}

.contact-icon {
    font-size: 1.5rem;
}

.contact-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.contact-label {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 0.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.contact-item a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 400;
}

.contact-item a:hover {
    text-decoration: underline;
}

/* Lightbox */
.lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 2000;
    align-items: center;
    justify-content: center;
}

.lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
}

.lightbox-close {
    position: absolute;
    top: -50px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
}

.lightbox-prev,
.lightbox-next {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    transition: background 0.3s ease;
}

.lightbox-prev:hover,
.lightbox-next:hover {
    background: rgba(255, 255, 255, 0.4);
}

/* Footer */
.footer {
    background: #000000;
    color: #888;
    padding: 2rem 0;
    border-top: 1px solid #333;
}

.footer .container {
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
    background: #1a1a1a;
    color: #e0e0e0;
    text-decoration: none;
    border: 1px solid #333;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    letter-spacing: 1px;
}

.social-link:hover {
    background: #ffffff;
    color: #000000;
    border-color: #ffffff;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 3rem;
        letter-spacing: 8px;
    }
    
    .hero-cta {
        flex-direction: column;
        align-items: center;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .stats {
        justify-content: center;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }
    
    .gallery-item.large,
    .gallery-item.wide {
        grid-row: span 1;
        grid-column: span 1;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-info {
        grid-template-columns: 1fr;
    }
    
    .footer .container {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-menu {
        display: none;
    }
}`,
    js: `// ギャラリーフィルター機能
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // アクティブクラスの切り替え
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        
        galleryItems.forEach(item => {
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

// ライトボックス機能
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
let visibleImages = [];

function updateVisibleImages() {
    visibleImages = Array.from(galleryItems)
        .filter(item => item.style.display !== 'none')
        .map(item => item.querySelector('img'));
}

function openLightbox(imageSrc, imageIndex) {
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
    currentImageIndex = imageIndex;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    updateVisibleImages();
    currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
    lightboxImage.src = visibleImages[currentImageIndex].src;
}

function showNextImage() {
    updateVisibleImages();
    currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
    lightboxImage.src = visibleImages[currentImageIndex].src;
}

// イベントリスナー
document.querySelectorAll('.view-full').forEach((button, index) => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        updateVisibleImages();
        const img = this.closest('.gallery-item').querySelector('img');
        const visibleIndex = visibleImages.indexOf(img);
        openLightbox(img.src, visibleIndex);
    });
});

galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    item.addEventListener('click', function() {
        updateVisibleImages();
        const visibleIndex = visibleImages.indexOf(img);
        openLightbox(img.src, visibleIndex);
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// ライトボックス背景クリックで閉じる
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// キーボードナビゲーション
document.addEventListener('keydown', function(e) {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
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
        if (this.textContent.includes('作品')) {
            document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('お問い合わせフォームへ遷移（実装予定）');
        }
    });
});

document.querySelector('.btn-outline').addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// スクロール時のナビゲーション背景変更
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(13, 13, 13, 0.98)';
    } else {
        navbar.style.background = 'rgba(13, 13, 13, 0.95)';
    }
});

// 初期化時に表示される画像を設定
updateVisibleImages();`
  }
}