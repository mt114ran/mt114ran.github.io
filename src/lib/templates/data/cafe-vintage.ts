import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const cafeVintageTemplate: WebTemplate = {
  id: 'cafe-vintage',
  title: 'カフェ - ヴィンテージ',
  category: TEMPLATE_CATEGORIES.CAFE,
  description: '温かみのあるヴィンテージスタイルのカフェWebサイトテンプレート',
  thumbnail: '/template-images/cafe-vintage.jpg',
  features: [
    'レトロなデザイン',
    '温かみのある配色',
    'ギャラリー機能',
    'SNSリンク'
  ],
  tags: ['カフェ', 'ヴィンテージ', 'レトロ', 'クラシック'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vintage Coffee House - 昔ながらの珈琲店</title>
</head>
<body>
    <div class="wrapper">
        <header class="header">
            <div class="header-content">
                <h1 class="logo">Vintage Coffee House</h1>
                <p class="tagline">~ Since 1970 ~</p>
            </div>
            <button class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="navigation" id="navigation">
                <a href="#story">Story</a>
                <a href="#menu">Menu</a>
                <a href="#gallery">Gallery</a>
                <a href="#info">Info</a>
            </nav>
        </header>

        <main class="main-content">
            <section class="hero">
                <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=600&fit=crop" alt="カフェ内観" style="position:absolute;width:100%;height:100%;object-fit:cover;">
                <div class="hero-overlay">
                    <h2>昔ながらの珈琲店</h2>
                    <p>一杯一杯、心を込めて</p>
                </div>
            </section>

            <section id="story" class="story">
                <div class="container">
                    <h2 class="section-header">Our Story</h2>
                    <div class="story-content">
                        <p>1970年創業以来、変わらぬ味と雰囲気を大切にしています。</p>
                        <p>厳選された豆を自家焙煎し、一杯一杯丁寧に淹れる珈琲。</p>
                        <p>時代が変わっても、ここには変わらない時間が流れています。</p>
                    </div>
                </div>
            </section>

            <section id="menu" class="menu">
                <div class="container">
                    <h2 class="section-header">Menu</h2>
                    <div class="menu-board">
                        <div class="menu-column">
                            <h3>Coffee</h3>
                            <div class="menu-item">
                                <span>ブレンド</span>
                                <span class="price">¥400</span>
                            </div>
                            <div class="menu-item">
                                <span>アメリカン</span>
                                <span class="price">¥380</span>
                            </div>
                            <div class="menu-item">
                                <span>カフェオレ</span>
                                <span class="price">¥450</span>
                            </div>
                            <div class="menu-item">
                                <span>ウィンナーコーヒー</span>
                                <span class="price">¥500</span>
                            </div>
                        </div>
                        <div class="menu-column">
                            <h3>Sweets</h3>
                            <div class="menu-item">
                                <span>チーズケーキ</span>
                                <span class="price">¥480</span>
                            </div>
                            <div class="menu-item">
                                <span>アップルパイ</span>
                                <span class="price">¥520</span>
                            </div>
                            <div class="menu-item">
                                <span>プリン</span>
                                <span class="price">¥380</span>
                            </div>
                            <div class="menu-item">
                                <span>トースト</span>
                                <span class="price">¥300</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery" class="gallery">
                <div class="container">
                    <h2 class="section-header">Gallery</h2>
                    <div class="gallery-grid">
                        <div class="gallery-item">店内の様子</div>
                        <div class="gallery-item">こだわりの珈琲</div>
                        <div class="gallery-item">手作りスイーツ</div>
                        <div class="gallery-item">アンティーク家具</div>
                    </div>
                </div>
            </section>

            <section id="info" class="info">
                <div class="container">
                    <h2 class="section-header">Information</h2>
                    <div class="info-content">
                        <div class="info-item">
                            <h3>営業時間</h3>
                            <p>月〜金: 7:00 - 20:00</p>
                            <p>土日祝: 8:00 - 19:00</p>
                        </div>
                        <div class="info-item">
                            <h3>アクセス</h3>
                            <p>〒150-0001</p>
                            <p>東京都渋谷区神宮前3-4-5</p>
                            <p>TEL: 03-1234-5678</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <p>&copy; 1970-2025 Vintage Coffee House</p>
        </footer>
    </div>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Serif JP', serif;
    background-color: #f5f2e8;
    color: #3e2723;
    line-height: 1.8;
}

.wrapper {
    max-width: 100%;
    margin: 0 auto;
}

.header {
    background-color: #5d4037;
    color: #f5f2e8;
    padding: 1.5rem 2rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    letter-spacing: 2px;
}

.tagline {
    font-size: 1rem;
    font-style: italic;
    opacity: 0.9;
}

.navigation {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.navigation a {
    color: #f5f2e8;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    transition: all 0.3s;
}

.navigation a:hover {
    border-color: #f5f2e8;
    background-color: rgba(245, 242, 232, 0.1);
}

/* Hamburger Menu */
.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 4px;
    padding: 5px;
    z-index: 101;
}

.hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background: #f5f2e8;
    transition: all 0.3s;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

.hero {
    height: 400px;
    background: linear-gradient(rgba(93, 64, 55, 0.7), rgba(93, 64, 55, 0.7)),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%238d6e63" fill-opacity="0.3" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-overlay {
    text-align: center;
    color: #f5f2e8;
}

.hero-overlay h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-overlay p {
    font-size: 1.3rem;
    font-style: italic;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
}

section {
    padding: 4rem 0;
}

.section-header {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    padding-bottom: 1rem;
}

.section-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #8d6e63;
}

.story {
    background-color: white;
}

.story-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.story-content p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

.menu-board {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    background-color: #6d4c41;
    color: #f5f2e8;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.menu-column h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #8d6e63;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    border-bottom: 1px dotted rgba(245, 242, 232, 0.3);
}

.price {
    font-weight: bold;
}

.gallery {
    background-color: white;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.gallery-item {
    height: 200px;
    background-color: #8d6e63;
    color: #f5f2e8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    border-radius: 5px;
    transition: transform 0.3s;
}

.gallery-item:hover {
    transform: scale(1.05);
}

.info-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    text-align: center;
}

.info-item h3 {
    color: #5d4037;
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.footer {
    background-color: #3e2723;
    color: #f5f2e8;
    text-align: center;
    padding: 2rem;
}

@media (max-width: 768px) {
    .header {
        padding: 1rem;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .header-content {
        margin-bottom: 0;
        flex: 1;
        padding-right: 50px;
    }
    
    .logo {
        font-size: 1.5rem;
    }
    
    .tagline {
        font-size: 0.8rem;
    }
    
    .hamburger {
        display: flex;
        position: absolute;
        right: 15px;
        top: 1rem;
    }
    
    .navigation {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #5d4037;
        padding: 1rem;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        flex-direction: column;
    }
    
    .navigation.active {
        display: flex;
    }
    
    .navigation a {
        padding: 0.8rem;
        text-align: center;
        border-bottom: 1px solid rgba(245, 242, 232, 0.2);
    }
    
    .hero-overlay h2 {
        font-size: 2rem;
    }
    
    .menu-board {
        padding: 1rem;
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .menu-column h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
    
    .menu-item {
        flex-direction: row;
        align-items: center;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        border-bottom: none;
    }
    
    .menu-item span:first-child {
        flex: 1;
        margin-right: 1rem;
    }
    
    .menu-item .price {
        background: #5d4037;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        white-space: nowrap;
        min-width: 60px;
        text-align: center;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .info-content {
        grid-template-columns: 1fr;
    }
}`,
    js: `// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

if (hamburger && navigation) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });
    
    // メニューリンクをクリックしたら閉じる
    const navLinks = navigation.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navigation.classList.remove('active');
        });
    });
}

// スムーズスクロール実装
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ギャラリーアイテムのホバーエフェクト
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
    
    item.addEventListener('click', function() {
        alert('ギャラリー画像を拡大表示（実装予定）');
    });
});`
  }
}