import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const restaurantWesternTemplate: WebTemplate = {
  id: 'restaurant-western',
  title: 'レストラン - 洋食',
  category: TEMPLATE_CATEGORIES.RESTAURANT,
  description: '高級感のある洋食レストラン向けWebサイトテンプレート',
  thumbnail: '/template-images/restaurant-western.jpg',
  features: [
    'エレガントなデザイン',
    'コース料理紹介',
    'シェフ紹介',
    'オンライン予約'
  ],
  tags: ['レストラン', '洋食', 'フレンチ', 'イタリアン'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le Jardin - Fine Dining Restaurant</title>
</head>
<body>
    <header class="header">
        <div class="header-inner">
            <h1 class="logo">Le Jardin</h1>
            <nav class="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#concept">Concept</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#chef">Chef</a></li>
                    <li><a href="#info">Info</a></li>
                    <li><a href="#reservation" class="reservation-link">Reservation</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop" alt="Restaurant Interior">
        </div>
        <div class="hero-content">
            <h2 class="hero-title">Le Jardin</h2>
            <p class="hero-subtitle">A Symphony of Flavors</p>
            <p class="hero-description">フランス料理の伝統と革新が融合する、特別な食体験</p>
        </div>
    </section>

    <section id="concept" class="concept">
        <div class="container">
            <h2 class="section-title">Our Concept</h2>
            <div class="concept-content">
                <div class="concept-image">
                    <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=800&fit=crop" alt="Chef at work">
                </div>
                <div class="concept-text">
                    <h3>季節の恵みを、芸術へ</h3>
                    <p>Le Jardinでは、厳選された季節の食材を使い、フランス料理の伝統技法に現代的なエッセンスを加えた料理をご提供しています。</p>
                    <p>ソムリエが厳選したワインとのマリアージュで、忘れられない食体験をお約束します。</p>
                    <p>落ち着いた空間で、大切な方との特別な時間をお過ごしください。</p>
                </div>
            </div>
        </div>
    </section>

    <section id="menu" class="menu">
        <div class="container">
            <h2 class="section-title">Course Menu</h2>
            <div class="menu-intro">
                <p>旬の食材を使用したコース料理をご用意しております</p>
            </div>
            <div class="course-list">
                <div class="course-item">
                    <div class="course-image">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop" alt="Lunch Course">
                    </div>
                    <div class="course-details">
                        <h3>Lunch Course</h3>
                        <p class="course-price">¥5,500〜</p>
                        <ul class="course-menu">
                            <li>アミューズ</li>
                            <li>前菜</li>
                            <li>スープ</li>
                            <li>魚料理または肉料理</li>
                            <li>デザート</li>
                            <li>コーヒー・小菓子</li>
                        </ul>
                    </div>
                </div>
                <div class="course-item">
                    <div class="course-image">
                        <img src="https://images.unsplash.com/photo-1533777857889-4be0c31b4d9?w=600&h=400&fit=crop" alt="Dinner Course">
                    </div>
                    <div class="course-details">
                        <h3>Dinner Course</h3>
                        <p class="course-price">¥12,000〜</p>
                        <ul class="course-menu">
                            <li>アミューズ</li>
                            <li>前菜2品</li>
                            <li>スープ</li>
                            <li>魚料理</li>
                            <li>肉料理</li>
                            <li>チーズ</li>
                            <li>デザート</li>
                            <li>コーヒー・小菓子</li>
                        </ul>
                    </div>
                </div>
                <div class="course-item special">
                    <div class="course-image">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop" alt="Chef's Special">
                    </div>
                    <div class="course-details">
                        <h3>Chef's Special</h3>
                        <p class="course-price">¥20,000〜</p>
                        <p class="course-description">シェフおまかせの特別コース。その日最高の食材を使用した、贅沢な食体験をお楽しみください。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="chef" class="chef">
        <div class="container">
            <h2 class="section-title">Executive Chef</h2>
            <div class="chef-profile">
                <div class="chef-image">
                    <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&h=800&fit=crop" alt="Executive Chef">
                </div>
                <div class="chef-info">
                    <h3>山田 太郎</h3>
                    <p class="chef-title">Executive Chef / Owner</p>
                    <div class="chef-bio">
                        <p>1975年東京生まれ。都内有名ホテルで修行後、25歳で渡仏。</p>
                        <p>パリの三つ星レストランで5年間研鑽を積み、2008年に帰国。</p>
                        <p>2010年、Le Jardinをオープン。伝統的なフランス料理に日本の四季を取り入れた独創的な料理で、多くの美食家を魅了している。</p>
                    </div>
                    <div class="chef-awards">
                        <h4>受賞歴</h4>
                        <ul>
                            <li>2015年 ミシュラン一つ星獲得</li>
                            <li>2018年 ミシュラン二つ星獲得</li>
                            <li>2020年 料理マスターズ受賞</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="gallery">
        <h2 class="section-title">Gallery</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&h=600&fit=crop" alt="Dish 1">
            </div>
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=600&fit=crop" alt="Dish 2">
            </div>
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=600&fit=crop" alt="Interior">
            </div>
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=600&fit=crop" alt="Dish 3">
            </div>
        </div>
    </section>

    <section class="video-section">
        <div class="container">
            <h2 class="section-title">Experience Le Jardin</h2>
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/OOcP6vGdUZo" 
                    title="Restaurant Experience" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </section>

    <section id="info" class="info">
        <div class="container">
            <h2 class="section-title">Information</h2>
            <div class="info-content">
                <div class="info-details">
                    <h3>営業時間</h3>
                    <p>Lunch: 12:00 - 14:30 (L.O. 13:30)</p>
                    <p>Dinner: 18:00 - 22:00 (L.O. 20:30)</p>
                    <p>定休日: 月曜日、第1・第3火曜日</p>
                    
                    <h3>アクセス</h3>
                    <p>〒106-0032</p>
                    <p>東京都港区六本木7-14-23</p>
                    <p>セントラルビル 2F</p>
                    <p>六本木駅より徒歩3分</p>
                    
                    <h3>お問い合わせ</h3>
                    <p>TEL: 03-5678-9012</p>
                    <p>Email: info@lejardin.jp</p>
                </div>
                <div class="info-map">
                    <img src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&h=400&fit=crop" alt="Restaurant exterior">
                </div>
            </div>
        </div>
    </section>

    <section id="reservation" class="reservation">
        <div class="container">
            <h2 class="section-title">Reservation</h2>
            <div class="reservation-content">
                <p>ご予約は、お電話またはオンラインにて承っております</p>
                <div class="reservation-buttons">
                    <a href="tel:03-5678-9012" class="btn-phone">
                        お電話で予約<br>
                        <span>03-5678-9012</span>
                    </a>
                    <button class="btn-online">オンライン予約</button>
                </div>
                <p class="reservation-note">※ご予約は2ヶ月前から承っております</p>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-content">
            <h3>Le Jardin</h3>
            <p>Fine Dining Restaurant</p>
            <div class="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        </div>
        <p class="copyright">&copy; 2025 Le Jardin. All rights reserved.</p>
    </footer>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Georgia', 'Noto Serif JP', serif;
    color: #333;
    line-height: 1.8;
    background: #faf9f7;
}

img {
    max-width: 100%;
    height: auto;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 20px 0;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 32px;
    font-weight: 300;
    color: #8b7355;
}

.navigation ul {
    display: flex;
    list-style: none;
    gap: 40px;
}

.navigation a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s;
}

.navigation a:hover {
    color: #8b7355;
}

.reservation-link {
    background: #8b7355;
    color: white !important;
    padding: 10px 20px;
    border-radius: 2px;
}

.reservation-link:hover {
    background: #6d5a44;
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
    filter: brightness(0.4);
}

.hero-content {
    text-align: center;
    color: white;
}

.hero-title {
    font-size: 72px;
    font-weight: 300;
    margin-bottom: 20px;
}

.hero-subtitle {
    font-size: 24px;
    font-style: italic;
    margin-bottom: 10px;
}

.hero-description {
    font-size: 16px;
    opacity: 0.9;
}

/* Sections */
section {
    padding: 100px 0;
}

.section-title {
    text-align: center;
    font-size: 42px;
    font-weight: 300;
    color: #8b7355;
    margin-bottom: 60px;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: #8b7355;
}

/* Concept */
.concept {
    background: white;
}

.concept-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.concept-image img {
    width: 100%;
    height: 600px;
    object-fit: cover;
}

.concept-text h3 {
    font-size: 28px;
    color: #8b7355;
    margin-bottom: 30px;
}

.concept-text p {
    margin-bottom: 20px;
    line-height: 2;
}

/* Menu */
.menu-intro {
    text-align: center;
    margin-bottom: 60px;
    font-size: 18px;
    color: #666;
}

.course-list {
    display: grid;
    gap: 60px;
}

.course-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    padding: 40px;
    background: white;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
}

.course-item.special {
    background: linear-gradient(135deg, #f5f5f5 0%, #fff 100%);
    border: 2px solid #8b7355;
}

.course-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.course-details h3 {
    font-size: 28px;
    color: #8b7355;
    margin-bottom: 10px;
}

.course-price {
    font-size: 24px;
    color: #666;
    margin-bottom: 20px;
}

.course-menu {
    list-style: none;
    line-height: 2;
}

.course-menu li::before {
    content: "・";
    margin-right: 10px;
    color: #8b7355;
}

.course-description {
    line-height: 1.8;
}

/* Chef */
.chef {
    background: white;
}

.chef-profile {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 60px;
    align-items: start;
}

.chef-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.chef-info h3 {
    font-size: 32px;
    color: #8b7355;
    margin-bottom: 10px;
}

.chef-title {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
    font-style: italic;
}

.chef-bio p {
    margin-bottom: 15px;
}

.chef-awards {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #e0e0e0;
}

.chef-awards h4 {
    font-size: 20px;
    color: #8b7355;
    margin-bottom: 20px;
}

.chef-awards ul {
    list-style: none;
}

.chef-awards li {
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
}

.chef-awards li::before {
    content: "★";
    position: absolute;
    left: 0;
    color: #8b7355;
}

/* Gallery */
.gallery {
    padding: 0;
}

.gallery .section-title {
    padding: 100px 0 60px;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
}

.gallery-item {
    overflow: hidden;
    aspect-ratio: 1;
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

/* Video Section */
.video-section {
    background: white;
}

.video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Info */
.info-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
}

.info-details h3 {
    font-size: 24px;
    color: #8b7355;
    margin: 30px 0 15px;
}

.info-details h3:first-child {
    margin-top: 0;
}

.info-details p {
    margin-bottom: 10px;
}

.info-map img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

/* Reservation */
.reservation {
    background: linear-gradient(135deg, #8b7355 0%, #6d5a44 100%);
    color: white;
}

.reservation .section-title {
    color: white;
}

.reservation .section-title::after {
    background: white;
}

.reservation-content {
    text-align: center;
}

.reservation-content > p {
    font-size: 18px;
    margin-bottom: 40px;
}

.reservation-buttons {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-bottom: 30px;
}

.btn-phone, .btn-online {
    padding: 20px 40px;
    font-size: 16px;
    border: 2px solid white;
    background: transparent;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
}

.btn-phone:hover, .btn-online:hover {
    background: white;
    color: #8b7355;
}

.btn-phone span {
    display: block;
    font-size: 20px;
    margin-top: 5px;
}

.reservation-note {
    font-size: 14px;
    opacity: 0.8;
}

/* Footer */
.footer {
    background: #2c2c2c;
    color: white;
    padding: 50px 0 20px;
    text-align: center;
}

.footer-content h3 {
    font-size: 28px;
    margin-bottom: 10px;
}

.footer-content p {
    margin-bottom: 30px;
    color: #999;
}

.social-links {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-bottom: 30px;
}

.social-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.social-links a:hover {
    color: #8b7355;
}

.copyright {
    padding-top: 30px;
    border-top: 1px solid #444;
    color: #666;
}

/* Responsive */
@media (max-width: 768px) {
    .navigation ul {
        flex-direction: column;
        gap: 15px;
    }
    
    .hero-title {
        font-size: 48px;
    }
    
    .concept-content,
    .course-item,
    .chef-profile,
    .info-content {
        grid-template-columns: 1fr;
    }
    
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .reservation-buttons {
        flex-direction: column;
    }
}`,
    js: `// スムーズスクロール
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
        }
    });
});

// 予約ボタン
document.querySelector('.btn-online').addEventListener('click', function() {
    alert('オンライン予約システムへ移動します（実装予定）');
});

// ヘッダー透明度変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// ギャラリー画像のライトボックス風効果
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        alert(\`画像を拡大表示: \${img.alt}\`);
    });
});`
  }
}