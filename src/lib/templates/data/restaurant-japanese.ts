import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const restaurantJapaneseTemplate: WebTemplate = {
  id: 'restaurant-japanese',
  title: 'レストラン - 和食',
  category: TEMPLATE_CATEGORIES.RESTAURANT,
  description: '和の雰囲気を大切にした和食レストランのWebサイトテンプレート',
  thumbnail: '/template-images/restaurant-japanese.jpg',
  features: [
    '和風デザイン',
    'おまかせコース紹介',
    '予約システムUI',
    '季節メニュー表示'
  ],
  tags: ['レストラン', '和食', '日本料理', '伝統'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>和楽 - 四季を味わう日本料理</title>
</head>
<body>
    <div class="wrapper">
        <header class="header">
            <div class="header-inner">
                <div class="logo">
                    <span class="logo-main">和楽</span>
                    <span class="logo-sub">わらく</span>
                </div>
                <nav class="nav">
                    <ul class="nav-list">
                        <li><a href="#concept">想い</a></li>
                        <li><a href="#menu">お献立</a></li>
                        <li><a href="#space">空間</a></li>
                        <li><a href="#access">交通</a></li>
                        <li><a href="#reserve" class="reserve-btn">ご予約</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <section class="hero">
                <div class="hero-content">
                    <h1 class="hero-title">
                        <span>四季を味わう</span>
                        <span>日本料理</span>
                    </h1>
                    <p class="hero-subtitle">旬の食材と匠の技が織りなす至福のひととき</p>
                </div>
            </section>

            <section id="concept" class="concept">
                <div class="container">
                    <h2 class="section-title">
                        <span class="title-ja">想い</span>
                        <span class="title-en">Concept</span>
                    </h2>
                    <div class="concept-content">
                        <p>日本の四季が育む豊かな食材。</p>
                        <p>その一つ一つと真摯に向き合い、</p>
                        <p>素材の持つ本来の味わいを</p>
                        <p>最大限に引き出すことを心がけております。</p>
                    </div>
                </div>
            </section>

            <section id="menu" class="menu">
                <div class="container">
                    <h2 class="section-title">
                        <span class="title-ja">お献立</span>
                        <span class="title-en">Menu</span>
                    </h2>
                    <div class="menu-list">
                        <div class="menu-item">
                            <h3>昼懐石</h3>
                            <p class="menu-desc">季節の食材を使った昼の懐石料理</p>
                            <p class="menu-price">5,500円〜</p>
                        </div>
                        <div class="menu-item">
                            <h3>夜懐石</h3>
                            <p class="menu-desc">料理長おまかせの本格懐石</p>
                            <p class="menu-price">8,800円〜</p>
                        </div>
                        <div class="menu-item special">
                            <h3>特別懐石</h3>
                            <p class="menu-desc">特別な日のための贅沢なコース</p>
                            <p class="menu-price">15,000円〜</p>
                        </div>
                    </div>
                    <div class="seasonal-menu">
                        <h3>季節のお料理</h3>
                        <div class="seasonal-items">
                            <div class="seasonal-item">
                                <span class="season">春</span>
                                <p>桜鯛、筍、山菜</p>
                            </div>
                            <div class="seasonal-item">
                                <span class="season">夏</span>
                                <p>鮎、鱧、賀茂茄子</p>
                            </div>
                            <div class="seasonal-item">
                                <span class="season">秋</span>
                                <p>松茸、秋刀魚、栗</p>
                            </div>
                            <div class="seasonal-item">
                                <span class="season">冬</span>
                                <p>ふぐ、蟹、大根</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="space" class="space">
                <div class="container">
                    <h2 class="section-title">
                        <span class="title-ja">空間</span>
                        <span class="title-en">Space</span>
                    </h2>
                    <div class="space-grid">
                        <div class="space-item">
                            <div class="space-image">カウンター席</div>
                            <h3>カウンター席</h3>
                            <p>料理人の技を間近でご覧いただけます</p>
                        </div>
                        <div class="space-item">
                            <div class="space-image">個室</div>
                            <h3>個室</h3>
                            <p>大切な方とのお時間をゆったりと</p>
                        </div>
                        <div class="space-item">
                            <div class="space-image">座敷</div>
                            <h3>座敷</h3>
                            <p>庭園を眺めながらの特別なひととき</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="access" class="access">
                <div class="container">
                    <h2 class="section-title">
                        <span class="title-ja">交通</span>
                        <span class="title-en">Access</span>
                    </h2>
                    <div class="access-content">
                        <div class="access-info">
                            <dl>
                                <dt>住所</dt>
                                <dd>〒604-0000 京都市中京区烏丸通</dd>
                                <dt>電話</dt>
                                <dd>075-000-0000</dd>
                                <dt>営業時間</dt>
                                <dd>
                                    昼 11:30〜14:30（L.O. 13:30）<br>
                                    夜 17:30〜22:00（L.O. 20:30）
                                </dd>
                                <dt>定休日</dt>
                                <dd>月曜日（祝日の場合は翌日）</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            <section id="reserve" class="reserve">
                <div class="container">
                    <h2 class="section-title">
                        <span class="title-ja">ご予約</span>
                        <span class="title-en">Reservation</span>
                    </h2>
                    <div class="reserve-content">
                        <p>お電話またはオンラインにてご予約を承っております</p>
                        <div class="reserve-buttons">
                            <button class="btn-primary">オンライン予約</button>
                            <a href="tel:075-000-0000" class="btn-secondary">
                                電話予約<br>
                                <span>075-000-0000</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="footer-content">
                <p class="footer-logo">和楽</p>
                <p class="copyright">© 2025 和楽 All Rights Reserved.</p>
            </div>
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
    color: #333;
    background: #fafafa;
    line-height: 1.8;
}

.wrapper {
    min-height: 100vh;
}

/* Header */
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo-main {
    font-size: 2rem;
    font-weight: 700;
}

.logo-sub {
    font-size: 0.8rem;
    margin-top: -0.3rem;
}

.nav-list {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-list a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
    font-size: 1rem;
}

.nav-list a:hover {
    color: #8b4513;
}

.reserve-btn {
    background: #8b4513;
    color: white !important;
    padding: 0.5rem 1.5rem;
    border-radius: 3px;
}

.reserve-btn:hover {
    background: #a0522d !important;
}

/* Hero */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23f3f4f5" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"></path></svg>');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.hero-title span {
    display: block;
}

.hero-subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
}

/* Sections */
.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
}

section {
    padding: 5rem 0;
}

.section-title {
    text-align: center;
    margin-bottom: 3rem;
}

.title-ja {
    display: block;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.title-en {
    display: block;
    font-size: 0.9rem;
    color: #888;
    letter-spacing: 2px;
}

/* Concept */
.concept {
    background: white;
}

.concept-content {
    text-align: center;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}

.concept-content p {
    margin-bottom: 0.5rem;
}

/* Menu */
.menu {
    background: #f8f8f8;
}

.menu-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.menu-item {
    background: white;
    padding: 2rem;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
}

.menu-item:hover {
    transform: translateY(-5px);
}

.menu-item.special {
    border: 2px solid #8b4513;
}

.menu-item h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #8b4513;
}

.menu-desc {
    color: #666;
    margin-bottom: 1rem;
}

.menu-price {
    font-size: 1.3rem;
    font-weight: bold;
}

.seasonal-menu {
    background: white;
    padding: 2rem;
    border-radius: 5px;
}

.seasonal-menu h3 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.3rem;
}

.seasonal-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
}

.seasonal-item {
    text-align: center;
}

.season {
    display: inline-block;
    background: #8b4513;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

/* Space */
.space {
    background: white;
}

.space-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.space-item {
    text-align: center;
}

.space-image {
    height: 200px;
    background: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 5px;
    color: #666;
}

.space-item h3 {
    margin-bottom: 0.5rem;
}

/* Access */
.access {
    background: #f8f8f8;
}

.access-info {
    max-width: 500px;
    margin: 0 auto;
}

.access-info dl {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 1rem;
}

.access-info dt {
    font-weight: bold;
    color: #8b4513;
}

/* Reserve */
.reserve {
    background: white;
    padding: 5rem 0;
}

.reserve-content {
    text-align: center;
}

.reserve-content p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.reserve-buttons {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
    padding: 1rem 3rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s;
    text-decoration: none;
    display: inline-block;
    font-family: 'Noto Serif JP', serif;
}

.btn-primary {
    background: #8b4513;
    color: white;
}

.btn-secondary {
    background: white;
    color: #8b4513;
    border: 2px solid #8b4513;
}

.btn-primary:hover, .btn-secondary:hover {
    transform: scale(1.05);
}

.btn-secondary span {
    display: block;
    font-size: 0.9rem;
    margin-top: 0.3rem;
}

/* Footer */
.footer {
    background: #2c2c2c;
    color: white;
    padding: 3rem 0;
    text-align: center;
}

.footer-logo {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.copyright {
    font-size: 0.9rem;
    opacity: 0.7;
}

@media (max-width: 768px) {
    .nav-list {
        flex-direction: column;
        gap: 1rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .title-ja {
        font-size: 2rem;
    }
    
    .menu-list {
        grid-template-columns: 1fr;
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
document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('オンライン予約システムへ遷移します（実装予定）');
});

// スクロール時のヘッダー処理
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});`
  }
}