import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const cafeIndustrialTemplate: WebTemplate = {
  id: 'cafe-industrial',
  title: 'カフェ - インダストリアル',
  category: TEMPLATE_CATEGORIES.CAFE,
  description: 'コンクリートと鉄の無骨なインダストリアルデザインカフェ',
  thumbnail: '/template-images/cafe-industrial.jpg',
  features: [
    'インダストリアルデザイン',
    'モノトーン配色',
    'グリッドレイアウト',
    'ミニマリスト'
  ],
  tags: ['カフェ', 'インダストリアル', 'モダン', 'アーバン'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INDUSTRIAL CAFE - Urban Coffee Experience</title>
</head>
<body>
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <span class="logo-text">INDUSTRIAL</span>
                <span class="logo-sub">CAFE</span>
            </div>
            <nav class="nav">
                <button class="nav-toggle" id="navToggle">
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-list" id="navList">
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#menu">MENU</a></li>
                    <li><a href="#gallery">GALLERY</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop" alt="Industrial Cafe Interior">
        </div>
        <div class="hero-content">
            <h1 class="hero-title">
                <span>INDUSTRIAL</span>
                <span>CAFE</span>
            </h1>
            <p class="hero-tagline">URBAN COFFEE EXPERIENCE</p>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-grid">
                <div class="about-text">
                    <h2 class="section-title">ABOUT US</h2>
                    <p class="lead">無骨さと洗練が共存する空間</p>
                    <p>コンクリート打ちっぱなしの壁、剥き出しの配管、アイアンの家具。インダストリアルな空間で味わう、こだわりのスペシャルティコーヒー。</p>
                    <p>都会の喧騒から少し離れた、大人のためのサードプレイス。</p>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop" alt="Coffee preparation">
                </div>
            </div>
        </div>
    </section>

    <section id="menu" class="menu">
        <div class="container">
            <h2 class="section-title">MENU</h2>
            <div class="menu-grid">
                <div class="menu-column">
                    <h3 class="menu-category">COFFEE</h3>
                    <div class="menu-list">
                        <div class="menu-item">
                            <div class="item-name">ESPRESSO</div>
                            <div class="item-price">¥400</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">AMERICANO</div>
                            <div class="item-price">¥450</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">LATTE</div>
                            <div class="item-price">¥550</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">CAPPUCCINO</div>
                            <div class="item-price">¥550</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">COLD BREW</div>
                            <div class="item-price">¥500</div>
                        </div>
                    </div>
                </div>
                <div class="menu-column">
                    <h3 class="menu-category">SPECIALTY</h3>
                    <div class="menu-list">
                        <div class="menu-item">
                            <div class="item-name">V60 POUR OVER</div>
                            <div class="item-price">¥700</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">AEROPRESS</div>
                            <div class="item-price">¥750</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">SYPHON</div>
                            <div class="item-price">¥800</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">FRENCH PRESS</div>
                            <div class="item-price">¥650</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">CHEMEX</div>
                            <div class="item-price">¥750</div>
                        </div>
                    </div>
                </div>
                <div class="menu-column">
                    <h3 class="menu-category">FOOD</h3>
                    <div class="menu-list">
                        <div class="menu-item">
                            <div class="item-name">CROISSANT</div>
                            <div class="item-price">¥380</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">BAGEL SANDWICH</div>
                            <div class="item-price">¥780</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">EGGS BENEDICT</div>
                            <div class="item-price">¥1,200</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">FRENCH TOAST</div>
                            <div class="item-price">¥980</div>
                        </div>
                        <div class="menu-item">
                            <div class="item-name">CHEESE CAKE</div>
                            <div class="item-price">¥580</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="gallery" class="gallery">
        <div class="container">
            <h2 class="section-title">GALLERY</h2>
            <div class="gallery-grid">
                <div class="gallery-item large">
                    <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop" alt="Interior 1">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&h=400&fit=crop" alt="Coffee">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=400&h=400&fit=crop" alt="Brewing">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=400&fit=crop" alt="Coffee beans">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop" alt="Interior 2">
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">CONTACT</h2>
            <div class="contact-grid">
                <div class="contact-info">
                    <div class="info-item">
                        <h3>ADDRESS</h3>
                        <p>〒150-0001<br>
                        東京都渋谷区神宮前5-10-1<br>
                        GYRE B1F</p>
                    </div>
                    <div class="info-item">
                        <h3>HOURS</h3>
                        <p>MON-FRI: 7:00 - 22:00<br>
                        SAT-SUN: 8:00 - 23:00</p>
                    </div>
                    <div class="info-item">
                        <h3>CONTACT</h3>
                        <p>TEL: 03-1234-5678<br>
                        MAIL: info@industrial-cafe.jp</p>
                    </div>
                </div>
                <div class="contact-map">
                    <div class="map-placeholder">
                        <span>MAP</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <span>INDUSTRIAL CAFE</span>
                </div>
                <div class="footer-social">
                    <a href="#" aria-label="Instagram">INSTAGRAM</a>
                    <a href="#" aria-label="Facebook">FACEBOOK</a>
                    <a href="#" aria-label="Twitter">TWITTER</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 INDUSTRIAL CAFE. ALL RIGHTS RESERVED.</p>
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
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background-color: #1a1a1a;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #333;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    flex-direction: column;
}

.logo-text {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 3px;
}

.logo-sub {
    color: #666;
    font-size: 0.8rem;
    letter-spacing: 5px;
    margin-top: 2px;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.nav-toggle span {
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 3px 0;
    transition: 0.3s;
}

.nav-list {
    display: flex;
    list-style: none;
    gap: 3rem;
}

.nav-list a {
    color: #999;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 2px;
    transition: color 0.3s;
}

.nav-list a:hover {
    color: #fff;
}

/* Hero */
.hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
    margin-top: 70px;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.2);
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
}

.hero-title {
    display: flex;
    flex-direction: column;
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: 10px;
    line-height: 0.9;
}

.hero-tagline {
    margin-top: 1rem;
    font-size: 1rem;
    letter-spacing: 5px;
    color: #999;
}

/* About */
.about {
    padding: 100px 0;
    background-color: #fff;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: 3px;
    margin-bottom: 2rem;
    color: #1a1a1a;
}

.lead {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #666;
}

.about-text p {
    margin-bottom: 1rem;
    color: #666;
    line-height: 1.8;
}

.about-image img {
    width: 100%;
    height: auto;
    filter: grayscale(50%);
}

/* Menu */
.menu {
    padding: 100px 0;
    background-color: #1a1a1a;
    color: #fff;
}

.menu .section-title {
    color: #fff;
    text-align: center;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    margin-top: 3rem;
}

.menu-category {
    color: #999;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #333;
}

.menu-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.item-name {
    color: #ccc;
    font-size: 0.95rem;
    letter-spacing: 1px;
}

.item-price {
    color: #999;
    font-size: 0.95rem;
    font-weight: 700;
}

/* Gallery */
.gallery {
    padding: 100px 0;
    background-color: #f5f5f5;
}

.gallery .section-title {
    text-align: center;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 3rem;
}

.gallery-item {
    overflow: hidden;
    position: relative;
}

.gallery-item.large {
    grid-column: span 2;
    grid-row: span 2;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.3s, transform 0.3s;
}

.gallery-item:hover img {
    filter: grayscale(0%);
    transform: scale(1.05);
}

/* Contact */
.contact {
    padding: 100px 0;
    background-color: #fff;
}

.contact .section-title {
    text-align: center;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 3rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-item h3 {
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 3px;
    margin-bottom: 1rem;
    color: #1a1a1a;
}

.info-item p {
    color: #666;
    line-height: 1.8;
}

.map-placeholder {
    background-color: #1a1a1a;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.map-placeholder span {
    color: #333;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 5px;
}

/* Footer */
.footer {
    background-color: #0a0a0a;
    color: #666;
    padding: 50px 0 30px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.footer-logo {
    font-size: 1.2rem;
    font-weight: 900;
    letter-spacing: 3px;
    color: #999;
}

.footer-social {
    display: flex;
    gap: 2rem;
}

.footer-social a {
    color: #666;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    transition: color 0.3s;
}

.footer-social a:hover {
    color: #999;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #1a1a1a;
}

.footer-bottom p {
    font-size: 0.8rem;
    letter-spacing: 2px;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-toggle {
        display: flex;
    }
    
    .nav-list {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #1a1a1a;
        flex-direction: column;
        padding: 2rem 0;
        border-top: 1px solid #333;
    }
    
    .nav-list.active {
        display: flex;
    }
    
    .hero-title {
        font-size: 3rem;
    }
    
    .about-grid,
    .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .menu-grid {
        grid-template-columns: 1fr;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .gallery-item.large {
        grid-column: span 1;
        grid-row: span 1;
    }
}`,
    js: `// モバイルナビゲーション
document.getElementById('navToggle').addEventListener('click', function() {
    document.getElementById('navList').classList.toggle('active');
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // モバイルメニューを閉じる
            document.getElementById('navList').classList.remove('active');
        }
    });
});

// パララックス効果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg');
    if (parallax) {
        parallax.style.transform = \`translateY(\${scrolled * 0.5}px)\`;
    }
});`
  }
}