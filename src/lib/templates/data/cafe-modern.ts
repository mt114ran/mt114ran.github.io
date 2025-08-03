import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const cafeModernTemplate: WebTemplate = {
  id: 'cafe-modern',
  title: 'カフェ - モダン',
  category: TEMPLATE_CATEGORIES.CAFE,
  description: '洗練されたモダンデザインのカフェWebサイトテンプレート',
  thumbnail: '/template-images/cafe-modern.jpg',
  features: [
    'レスポンシブデザイン',
    'スムーズなアニメーション',
    'モバイルファースト',
    '予約フォーム付き'
  ],
  tags: ['カフェ', 'モダン', 'ミニマル', 'レスポンシブ'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Cafe - こだわりのコーヒーと空間</title>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">Modern Cafe</div>
                <ul class="nav-menu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#access">Access</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop" alt="カフェの雰囲気">
        </div>
        <div class="hero-content">
            <h1 class="hero-title">Modern Cafe</h1>
            <p class="hero-subtitle">こだわりのコーヒーと心地よい空間</p>
            <button class="cta-button">予約する</button>
        </div>
    </section>

    <section id="about" class="section about">
        <div class="container">
            <h2 class="section-title">私たちのこだわり</h2>
            <div class="about-grid">
                <div class="about-item">
                    <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop" alt="コーヒー豆">
                    <h3>厳選されたコーヒー豆</h3>
                    <p>世界各地から厳選した最高品質のコーヒー豆を使用しています。</p>
                </div>
                <div class="about-item">
                    <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop" alt="カフェ内装">
                    <h3>心地よい空間</h3>
                    <p>ゆったりとした時間を過ごせる、こだわりの空間設計。</p>
                </div>
                <div class="about-item">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" alt="季節のメニュー">
                    <h3>季節のメニュー</h3>
                    <p>旬の食材を使った、季節限定メニューをご用意しています。</p>
                </div>
            </div>
        </div>
    </section>

    <section id="menu" class="section menu">
        <div class="container">
            <h2 class="section-title">Menu</h2>
            <div class="menu-grid">
                <div class="menu-item">
                    <h3>Coffee</h3>
                    <ul>
                        <li>ブレンドコーヒー - ¥450</li>
                        <li>カフェラテ - ¥500</li>
                        <li>カプチーノ - ¥480</li>
                        <li>エスプレッソ - ¥380</li>
                    </ul>
                </div>
                <div class="menu-item">
                    <h3>Food</h3>
                    <ul>
                        <li>クロワッサン - ¥350</li>
                        <li>サンドイッチセット - ¥850</li>
                        <li>本日のケーキ - ¥550</li>
                        <li>季節のタルト - ¥600</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="access" class="section access">
        <div class="container">
            <h2 class="section-title">Access</h2>
            <div class="access-info">
                <p>〒150-0001 東京都渋谷区神宮前1-2-3</p>
                <p>営業時間: 8:00 - 21:00（L.O. 20:30）</p>
                <p>定休日: 毎週水曜日</p>
            </div>
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/5qap5aO4i9A" 
                    title="Lofi hip hop radio" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p>&copy; 2025 Modern Cafe. All rights reserved.</p>
    </footer>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #333;
}

.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar {
    padding: 1rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #8b7355;
}

.hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
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
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease 0.2s;
    animation-fill-mode: both;
}

.cta-button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    background: white;
    color: #764ba2;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    animation: fadeInUp 1s ease 0.4s;
    animation-fill-mode: both;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.section {
    padding: 5rem 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
}

.about {
    background: #f8f9fa;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.about-item {
    text-align: center;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s;
    overflow: hidden;
}

.about-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.about-item:hover {
    transform: translateY(-5px);
}

.about-item h3 {
    color: #8b7355;
    margin: 1.5rem 0 1rem;
    padding: 0 2rem;
}

.about-item p {
    padding: 0 2rem 2rem;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}

.menu-item h3 {
    color: #8b7355;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.menu-item ul {
    list-style: none;
}

.menu-item li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
}

.access {
    background: #f8f9fa;
}

.access-info {
    text-align: center;
    font-size: 1.1rem;
}

.access-info p {
    margin-bottom: 0.5rem;
}

.footer {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.video-container {
    margin-top: 2rem;
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0,0,0,0.05);
        padding: 2rem 0;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-menu li {
        margin: 1rem 0;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .about-grid {
        grid-template-columns: 1fr;
    }
    
    .menu-grid {
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

// 予約ボタンのクリック処理
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('予約フォームへ遷移します（実装予定）');
});`
  }
}