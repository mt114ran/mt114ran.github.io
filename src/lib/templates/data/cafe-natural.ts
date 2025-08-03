import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const cafeNaturalTemplate: WebTemplate = {
  id: 'cafe-natural',
  title: 'カフェ - ナチュラル',
  category: TEMPLATE_CATEGORIES.CAFE,
  description: '自然素材と温かみのあるナチュラルカフェのテンプレート',
  thumbnail: '/template-images/cafe-natural.jpg',
  features: [
    'オーガニックデザイン',
    '自然素材イメージ',
    '心地よい色調',
    'エコフレンドリー'
  ],
  tags: ['カフェ', 'ナチュラル', 'オーガニック', 'エコ'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Natural Cafe - 自然と共に過ごす時間</title>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <span class="logo-text">Natural Cafe</span>
                </div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#concept">Concept</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#space">Space</a></li>
                    <li><a href="#access">Access</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1920&h=1080&fit=crop" alt="ナチュラルカフェの店内">
        </div>
        <div class="hero-content">
            <h1 class="hero-title">Natural Cafe</h1>
            <p class="hero-subtitle">自然素材に囲まれた心地よい空間</p>
            <p class="hero-description">オーガニック食材と手作りの温もり</p>
        </div>
    </section>

    <section id="concept" class="concept">
        <div class="container">
            <h2 class="section-title">Our Concept</h2>
            <div class="concept-grid">
                <div class="concept-item">
                    <div class="concept-icon">🌿</div>
                    <h3>自然素材</h3>
                    <p>地元産の木材と自然素材を使用した温かみのある空間</p>
                </div>
                <div class="concept-item">
                    <div class="concept-icon">☕</div>
                    <h3>オーガニックコーヒー</h3>
                    <p>農薬不使用の豆を自家焙煎した香り高いコーヒー</p>
                </div>
                <div class="concept-item">
                    <div class="concept-icon">🥗</div>
                    <h3>地産地消</h3>
                    <p>地元農家から仕入れた新鮮な野菜を使用</p>
                </div>
            </div>
        </div>
    </section>

    <section id="menu" class="menu">
        <div class="container">
            <h2 class="section-title">Menu</h2>
            <div class="menu-categories">
                <div class="menu-category">
                    <h3>Coffee & Tea</h3>
                    <div class="menu-items">
                        <div class="menu-item">
                            <span class="item-name">オーガニックブレンド</span>
                            <span class="item-price">¥550</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">シングルオリジン（日替わり）</span>
                            <span class="item-price">¥650</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">ハーブティー各種</span>
                            <span class="item-price">¥500</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">抹茶ラテ</span>
                            <span class="item-price">¥600</span>
                        </div>
                    </div>
                </div>
                <div class="menu-category">
                    <h3>Food</h3>
                    <div class="menu-items">
                        <div class="menu-item">
                            <span class="item-name">季節の野菜プレート</span>
                            <span class="item-price">¥1,200</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">全粒粉サンドイッチ</span>
                            <span class="item-price">¥980</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">本日のスープセット</span>
                            <span class="item-price">¥850</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">自家製グラノーラボウル</span>
                            <span class="item-price">¥750</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="space" class="space">
        <div class="container">
            <h2 class="section-title">Space</h2>
            <div class="space-gallery">
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop" alt="カフェ内観1">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop" alt="カフェ内観2">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop" alt="カフェ内観3">
                </div>
            </div>
            <div class="space-description">
                <p>木のぬくもりを感じる店内では、ゆったりとした時間をお過ごしいただけます。</p>
                <p>大きな窓から差し込む自然光と、植物に囲まれた空間で、日常から離れたひとときを。</p>
            </div>
        </div>
    </section>

    <section id="access" class="access">
        <div class="container">
            <h2 class="section-title">Access</h2>
            <div class="access-content">
                <div class="access-info">
                    <h3>Natural Cafe</h3>
                    <dl>
                        <dt>住所</dt>
                        <dd>〒150-0001 東京都渋谷区神宮前3-25-18</dd>
                        <dt>電話</dt>
                        <dd>03-1234-5678</dd>
                        <dt>営業時間</dt>
                        <dd>8:00 - 19:00（L.O. 18:30）</dd>
                        <dt>定休日</dt>
                        <dd>水曜日</dd>
                    </dl>
                </div>
                <div class="access-map">
                    <div class="map-placeholder">
                        <p>Google Map</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>Natural Cafe</h3>
                    <p>自然と共に過ごす時間</p>
                </div>
                <div class="footer-social">
                    <a href="#" aria-label="Instagram">📷</a>
                    <a href="#" aria-label="Facebook">📘</a>
                    <a href="#" aria-label="Twitter">🐦</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Natural Cafe. All rights reserved.</p>
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
    font-family: 'Helvetica Neue', Arial, 'Hiragino Sans', sans-serif;
    line-height: 1.6;
    color: #4a5043;
    background-color: #faf8f3;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar {
    padding: 1rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-text {
    font-size: 1.8rem;
    font-weight: 300;
    color: #7a8b68;
    letter-spacing: 2px;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.menu-toggle span {
    width: 25px;
    height: 2px;
    background-color: #7a8b68;
    margin: 3px 0;
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: #4a5043;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s;
    letter-spacing: 1px;
}

.nav-menu a:hover {
    color: #7a8b68;
}

/* Hero Section */
.hero {
    position: relative;
    height: 90vh;
    overflow: hidden;
}

.hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
}

.hero-title {
    font-size: 4rem;
    font-weight: 200;
    margin-bottom: 1rem;
    letter-spacing: 5px;
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
    letter-spacing: 2px;
}

.hero-description {
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 1px;
}

/* Concept Section */
.concept {
    padding: 80px 0;
    background-color: #fff;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 300;
    color: #7a8b68;
    margin-bottom: 3rem;
    letter-spacing: 3px;
}

.concept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.concept-item {
    text-align: center;
}

.concept-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.concept-item h3 {
    font-size: 1.3rem;
    color: #7a8b68;
    margin-bottom: 1rem;
    font-weight: 400;
}

.concept-item p {
    color: #6a6a6a;
    line-height: 1.8;
}

/* Menu Section */
.menu {
    padding: 80px 0;
    background-color: #faf8f3;
}

.menu-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.menu-category h3 {
    color: #7a8b68;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
}

.menu-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
}

.item-name {
    color: #4a5043;
}

.item-price {
    color: #7a8b68;
    font-weight: 500;
}

/* Space Section */
.space {
    padding: 80px 0;
    background-color: #fff;
}

.space-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.gallery-item {
    overflow: hidden;
    border-radius: 8px;
    height: 250px;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.gallery-item:hover img {
    transform: scale(1.05);
}

.space-description {
    text-align: center;
    color: #6a6a6a;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
}

.space-description p {
    margin-bottom: 1rem;
}

/* Access Section */
.access {
    padding: 80px 0;
    background-color: #faf8f3;
}

.access-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 3rem;
}

.access-info h3 {
    color: #7a8b68;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
}

.access-info dl {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 1rem;
}

.access-info dt {
    color: #7a8b68;
    font-weight: 500;
}

.access-info dd {
    color: #6a6a6a;
}

.map-placeholder {
    background-color: #e0e0e0;
    height: 350px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.map-placeholder p {
    color: #999;
    font-size: 1.2rem;
}

/* Footer */
.footer {
    background-color: #4a5043;
    color: white;
    padding: 40px 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.footer-brand h3 {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
    letter-spacing: 2px;
}

.footer-brand p {
    font-size: 0.9rem;
    opacity: 0.8;
}

.footer-social {
    display: flex;
    gap: 1rem;
}

.footer-social a {
    font-size: 1.5rem;
    text-decoration: none;
    transition: opacity 0.3s;
}

.footer-social a:hover {
    opacity: 0.7;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.footer-bottom p {
    font-size: 0.9rem;
    opacity: 0.7;
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
        background-color: white;
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
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .access-content {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 2rem;
    }
}`,
    js: `// モバイルメニューのトグル
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
            // モバイルメニューを閉じる
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// スクロール時のヘッダー処理
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
    
    lastScroll = currentScroll;
});`
  }
}