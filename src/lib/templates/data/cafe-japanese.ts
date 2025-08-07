import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const cafeJapaneseTemplate: WebTemplate = {
  id: 'cafe-japanese',
  title: 'カフェ - 和風',
  category: TEMPLATE_CATEGORIES.CAFE,
  description: '日本の伝統美と現代的な要素を融合した和風カフェのテンプレート',
  thumbnail: '/template-images/cafe-japanese.jpg',
  features: [
    '和の美意識を取り入れたデザイン',
    '落ち着いた色合い',
    '日本語フォントの最適化',
    '和菓子メニュー対応'
  ],
  tags: ['カフェ', '和風', '日本', '抹茶'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>茶房 雅 - 日本の心を味わう空間</title>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <span class="logo-text">茶房 雅</span>
                </div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#about">こだわり</a></li>
                    <li><a href="#menu">お品書き</a></li>
                    <li><a href="#gallery">店内</a></li>
                    <li><a href="#access">ご案内</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop" alt="和風カフェの空間">
        </div>
        <div class="hero-content">
            <h1 class="hero-title">茶房 雅</h1>
            <p class="hero-subtitle">日本の心を味わう空間</p>
            <div class="hero-ornament">⌘</div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">こだわり</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>日本古来より愛され続けてきた「茶の心」を現代に受け継ぐ空間です。厳選された宇治抹茶と、職人が丹精込めて作る和菓子をお楽しみください。静寂の中で過ごすひととき、心の安らぎを見つけてください。</p>
                </div>
                <div class="about-principles">
                    <div class="principle-item">
                        <div class="principle-icon">茶</div>
                        <h3>本格抹茶</h3>
                        <p>京都宇治の老舗茶園から直接仕入れる最高級の抹茶を使用</p>
                    </div>
                    <div class="principle-item">
                        <div class="principle-icon">菓</div>
                        <h3>伝統和菓子</h3>
                        <p>季節の移ろいを表現した、職人手作りの繊細な和菓子</p>
                    </div>
                    <div class="principle-item">
                        <div class="principle-icon">心</div>
                        <h3>おもてなし</h3>
                        <p>日本古来のもてなしの心を大切に、一期一会の出会いを</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="menu" class="menu">
        <div class="container">
            <h2 class="section-title">お品書き</h2>
            <div class="menu-categories">
                <div class="menu-category">
                    <h3>お茶</h3>
                    <div class="menu-items">
                        <div class="menu-item">
                            <span class="item-name">薄茶</span>
                            <span class="item-price">八百円</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">濃茶</span>
                            <span class="item-price">千二百円</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">玉露</span>
                            <span class="item-price">千円</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">煎茶</span>
                            <span class="item-price">六百円</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">ほうじ茶</span>
                            <span class="item-price">五百円</span>
                        </div>
                    </div>
                </div>
                <div class="menu-category">
                    <h3>和菓子</h3>
                    <div class="menu-items">
                        <div class="menu-item">
                            <span class="item-name">季節の上生菓子</span>
                            <span class="item-price">四百円</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">どら焼き</span>
                            <span class="item-price">三百円</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">みたらし団子</span>
                            <span class="item-price">三百五十円</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">羊羹</span>
                            <span class="item-price">四百五十円</span>
                        </div>
                    </div>
                </div>
                <div class="menu-category">
                    <h3>お食事</h3>
                    <div class="menu-items">
                        <div class="menu-item">
                            <span class="item-name">茶粥御膳</span>
                            <span class="item-price">千八百円</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">精進料理</span>
                            <span class="item-price">二千五百円</span>
                        </div>
                        <div class="menu-item">
                            <span class="item-name">季節の蕎麦</span>
                            <span class="item-price">千二百円</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="gallery" class="gallery">
        <div class="container">
            <h2 class="section-title">店内</h2>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop" alt="茶室の様子">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1564890378037-0033e5e55e9e?w=800&h=600&fit=crop" alt="抹茶と和菓子">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800&h=600&fit=crop" alt="日本庭園">
                </div>
            </div>
        </div>
    </section>

    <section id="access" class="access">
        <div class="container">
            <h2 class="section-title">ご案内</h2>
            <div class="access-content">
                <div class="access-info">
                    <h3>茶房 雅</h3>
                    <dl>
                        <dt>住所</dt>
                        <dd>〒605-0074 京都府京都市東山区祇園町南側570-6</dd>
                        <dt>電話</dt>
                        <dd>075-555-0123</dd>
                        <dt>営業時間</dt>
                        <dd>午前十時 - 午後六時（最終受付 午後五時半）</dd>
                        <dt>定休日</dt>
                        <dd>月曜日（祝日の場合は翌日）</dd>
                        <dt>席数</dt>
                        <dd>二十四席（個室三室あり）</dd>
                    </dl>
                </div>
                <div class="access-note">
                    <h4>お知らせ</h4>
                    <ul>
                        <li>茶道体験（要予約）も承っております</li>
                        <li>個室のご利用は事前にご予約ください</li>
                        <li>季節により営業時間が変更になる場合があります</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>茶房 雅</h3>
                    <p>日本の心を味わう空間</p>
                </div>
                <div class="footer-ornament">⌘</div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 茶房 雅. All rights reserved.</p>
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

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;700&display=swap');

body {
    font-family: 'Noto Serif JP', serif;
    line-height: 1.8;
    color: #2c2c2c;
    background-color: #faf8f5;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background-color: rgba(255, 248, 245, 0.95);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #d4b896;
}

.navbar {
    padding: 1.5rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-text {
    font-size: 2rem;
    font-weight: 500;
    color: #6b4423;
    letter-spacing: 3px;
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
    background-color: #6b4423;
    margin: 3px 0;
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 3rem;
}

.nav-menu a {
    color: #6b4423;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    transition: color 0.3s;
    letter-spacing: 1px;
}

.nav-menu a:hover {
    color: #d4b896;
}

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6) sepia(0.2);
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 1;
}

.hero-title {
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    letter-spacing: 8px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    letter-spacing: 3px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.hero-ornament {
    font-size: 3rem;
    color: #d4b896;
    opacity: 0.8;
}

/* About Section */
.about {
    padding: 100px 0;
    background-color: #fff;
}

.section-title {
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    color: #6b4423;
    margin-bottom: 3rem;
    letter-spacing: 5px;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background-color: #d4b896;
}

.about-content {
    max-width: 900px;
    margin: 0 auto;
}

.about-text {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 1.1rem;
    line-height: 2;
    color: #555;
}

.about-principles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
}

.principle-item {
    text-align: center;
    background: linear-gradient(145deg, #faf8f5 0%, #f5f2ef 100%);
    padding: 3rem 2rem;
    border-radius: 10px;
    box-shadow: 0 8px 30px rgba(107, 68, 35, 0.1);
    transition: transform 0.3s;
}

.principle-item:hover {
    transform: translateY(-5px);
}

.principle-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, #6b4423 0%, #8b5a3c 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 500;
}

.principle-item h3 {
    color: #6b4423;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 500;
}

.principle-item p {
    color: #666;
    line-height: 1.8;
}

/* Menu Section */
.menu {
    padding: 100px 0;
    background: linear-gradient(135deg, #faf8f5 0%, #f5f2ef 100%);
}

.menu-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 4rem;
    margin-top: 4rem;
}

.menu-category {
    background: white;
    padding: 3rem 2.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(107, 68, 35, 0.08);
}

.menu-category h3 {
    color: #6b4423;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #d4b896;
    font-weight: 500;
    text-align: center;
}

.menu-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #f0f0f0;
}

.menu-item:last-child {
    border-bottom: none;
}

.item-name {
    color: #2c2c2c;
    font-size: 1.1rem;
}

.item-price {
    color: #6b4423;
    font-weight: 500;
    font-size: 1.1rem;
}

/* Gallery Section */
.gallery {
    padding: 100px 0;
    background-color: #fff;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
}

.gallery-item {
    overflow: hidden;
    border-radius: 15px;
    height: 300px;
    box-shadow: 0 15px 50px rgba(107, 68, 35, 0.15);
    transition: transform 0.3s;
}

.gallery-item:hover {
    transform: scale(1.05);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* Access Section */
.access {
    padding: 100px 0;
    background: linear-gradient(135deg, #faf8f5 0%, #f5f2ef 100%);
}

.access-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 4rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

.access-info {
    background: white;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(107, 68, 35, 0.08);
}

.access-info h3 {
    color: #6b4423;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    font-weight: 500;
    text-align: center;
}

.access-info dl {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1.5rem 2rem;
    align-items: start;
}

.access-info dt {
    color: #6b4423;
    font-weight: 500;
    font-size: 1.1rem;
}

.access-info dd {
    color: #555;
    line-height: 1.6;
}

.access-note {
    background: white;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(107, 68, 35, 0.08);
}

.access-note h4 {
    color: #6b4423;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
    text-align: center;
}

.access-note ul {
    list-style: none;
    color: #555;
}

.access-note li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
}

.access-note li::before {
    content: '◆';
    position: absolute;
    left: 0;
    color: #d4b896;
}

/* Footer */
.footer {
    background: linear-gradient(135deg, #6b4423 0%, #5a3719 100%);
    color: white;
    padding: 50px 0 30px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.footer-brand h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    letter-spacing: 3px;
}

.footer-brand p {
    font-size: 1rem;
    opacity: 0.8;
    letter-spacing: 1px;
}

.footer-ornament {
    font-size: 3rem;
    color: #d4b896;
    opacity: 0.7;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(212, 184, 150, 0.3);
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
        background-color: rgba(255, 248, 245, 0.98);
        flex-direction: column;
        padding: 2rem 0;
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #d4b896;
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .hero-title {
        font-size: 3rem;
        letter-spacing: 4px;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
        letter-spacing: 2px;
    }
    
    .access-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .access-info dl {
        grid-template-columns: 100px 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 2rem;
    }
    
    .section-title {
        font-size: 2.5rem;
        letter-spacing: 3px;
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
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // モバイルメニューを閉じる
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// パララックス効果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-image');
    const speed = 0.5;
    
    if (parallax) {
        parallax.style.transform = \`translateY(\${scrolled * speed}px)\`;
    }
});

// ギャラリーアイテムのホバーエフェクト
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});`
  }
}