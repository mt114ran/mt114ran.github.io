import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const cafeMinimalTemplate: WebTemplate = {
  id: 'cafe-minimal',
  title: 'カフェ - ミニマル',
  category: TEMPLATE_CATEGORIES.CAFE,
  description: 'シンプルで洗練されたミニマルデザインのカフェテンプレート',
  thumbnail: '/template-images/cafe-minimal.jpg',
  features: [
    'ミニマルデザイン',
    '高速表示',
    'アクセシビリティ対応',
    'モノトーン配色'
  ],
  tags: ['カフェ', 'ミニマル', 'シンプル', 'モノトーン'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MINIMAL CAFE - Less is More</title>
</head>
<body>
    <nav class="nav">
        <div class="nav-brand">MINIMAL</div>
        <button class="nav-toggle" aria-label="メニュー">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav-menu">
            <li><a href="#concept">Concept</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#info">Info</a></li>
        </ul>
    </nav>

    <header class="hero">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080&fit=crop" alt="ミニマルカフェ">
        </div>
        <div class="hero-content">
            <h1 class="hero-title">MINIMAL<br>CAFE</h1>
            <p class="hero-tagline">Less is More</p>
        </div>
    </header>

    <section id="concept" class="concept">
        <div class="container">
            <h2 class="section-title">Concept</h2>
            <div class="concept-text">
                <p>余計なものを削ぎ落とし、</p>
                <p>本質だけを追求したカフェ。</p>
                <p>シンプルな空間で、</p>
                <p>コーヒーの味わいに集中する。</p>
            </div>
        </div>
    </section>

    <section id="menu" class="menu">
        <div class="container">
            <h2 class="section-title">Menu</h2>
            <div class="menu-grid">
                <div class="menu-item">
                    <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop" alt="エスプレッソ">
                    <h3>Espresso</h3>
                    <p class="price">¥380</p>
                </div>
                <div class="menu-item">
                    <img src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&h=400&fit=crop" alt="ドリップコーヒー">
                    <h3>Drip Coffee</h3>
                    <p class="price">¥450</p>
                </div>
                <div class="menu-item">
                    <img src="https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&h=400&fit=crop" alt="カフェラテ">
                    <h3>Cafe Latte</h3>
                    <p class="price">¥520</p>
                </div>
                <div class="menu-item">
                    <img src="https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&h=400&fit=crop" alt="コールドブリュー">
                    <h3>Cold Brew</h3>
                    <p class="price">¥480</p>
                </div>
            </div>
        </div>
    </section>

    <section id="gallery" class="gallery">
        <h2 class="section-title">Gallery</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop" alt="店内1">
            </div>
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop" alt="店内2">
            </div>
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=600&fit=crop" alt="店内3">
            </div>
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop" alt="コーヒー">
            </div>
        </div>
    </section>

    <section id="info" class="info">
        <div class="container">
            <h2 class="section-title">Information</h2>
            <div class="info-grid">
                <div class="info-item">
                    <h3>Hours</h3>
                    <p>月-金: 7:00 - 20:00</p>
                    <p>土日: 8:00 - 19:00</p>
                </div>
                <div class="info-item">
                    <h3>Location</h3>
                    <p>東京都目黒区中目黒1-2-3</p>
                    <p>中目黒駅から徒歩3分</p>
                </div>
                <div class="info-item">
                    <h3>Contact</h3>
                    <p>03-1234-5678</p>
                    <p>info@minimalcafe.jp</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p>&copy; 2025 MINIMAL CAFE</p>
    </footer>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: #222;
    background: #fff;
}

img {
    max-width: 100%;
    height: auto;
}

/* Navigation */
.nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 3px;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.nav-toggle span {
    width: 25px;
    height: 2px;
    background: #222;
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 3rem;
}

.nav-menu a {
    text-decoration: none;
    color: #222;
    font-size: 0.9rem;
    letter-spacing: 1px;
    transition: opacity 0.3s;
}

.nav-menu a:hover {
    opacity: 0.6;
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
    z-index: -1;
}

.hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
}

.hero-content {
    text-align: center;
    color: #fff;
}

.hero-title {
    font-size: 5rem;
    font-weight: 100;
    letter-spacing: 10px;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.hero-tagline {
    font-size: 1.2rem;
    letter-spacing: 5px;
    opacity: 0.9;
}

/* Sections */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

section {
    padding: 6rem 0;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 100;
    letter-spacing: 5px;
    margin-bottom: 4rem;
}

/* Concept */
.concept {
    background: #fafafa;
}

.concept-text {
    text-align: center;
    font-size: 1.3rem;
    line-height: 2.5;
    max-width: 600px;
    margin: 0 auto;
}

/* Menu */
.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
}

.menu-item {
    text-align: center;
}

.menu-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 1rem;
}

.menu-item h3 {
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
}

.price {
    font-size: 1.1rem;
    color: #666;
}

/* Gallery */
.gallery {
    padding: 0;
}

.gallery .section-title {
    padding: 4rem 0 2rem;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
}

.gallery-item {
    overflow: hidden;
    height: 400px;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* Info */
.info {
    background: #fafafa;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    text-align: center;
}

.info-item h3 {
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 2px;
    margin-bottom: 1rem;
}

.info-item p {
    color: #666;
    margin-bottom: 0.5rem;
}

/* Footer */
.footer {
    background: #222;
    color: #fff;
    text-align: center;
    padding: 2rem;
    font-size: 0.9rem;
    letter-spacing: 2px;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-toggle {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 2rem 0;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .hero-title {
        font-size: 3rem;
        letter-spacing: 5px;
    }
    
    .hero-tagline {
        font-size: 1rem;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .gallery-item {
        height: 250px;
    }
    
    .menu-grid {
        grid-template-columns: 1fr;
    }
    
    .info-grid {
        grid-template-columns: 1fr;
    }
}`,
    js: `// モバイルメニュー
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // ハンバーガーアニメーション
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navMenu.classList.remove('active');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// スクロール時のナビゲーション背景
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    }
});`
  }
}