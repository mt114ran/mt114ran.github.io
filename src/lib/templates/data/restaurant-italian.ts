import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const restaurantItalianTemplate: WebTemplate = {
  id: 'restaurant-italian',
  title: 'イタリアンレストラン',
  category: TEMPLATE_CATEGORIES.RESTAURANT,
  description: '本格的なイタリア料理の味わいを伝えるレストランWebサイトテンプレート',
  thumbnail: '/template-images/restaurant-italian.jpg',
  features: [
    'イタリア風デザイン',
    'パスタ・ピザメニュー',
    'ワインリスト表示',
    'シェフプロフィール'
  ],
  tags: ['レストラン', 'イタリアン', 'パスタ', 'ピザ', 'ワイン'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bella Vista - Authentic Italian Restaurant</title>
</head>
<body>
    <div class="wrapper">
        <header class="header">
            <div class="header-inner">
                <div class="logo">
                    <h1>Bella Vista</h1>
                    <span class="logo-subtitle">Ristorante Italiano</span>
                </div>
                <nav class="nav">
                    <ul class="nav-list">
                        <li><a href="#home">ホーム</a></li>
                        <li><a href="#about">私たちについて</a></li>
                        <li><a href="#menu">メニュー</a></li>
                        <li><a href="#wine">ワイン</a></li>
                        <li><a href="#chef">シェフ</a></li>
                        <li><a href="#contact">コンタクト</a></li>
                        <li><a href="#reserve" class="reserve-btn">予約</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <section id="home" class="hero">
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=800&fit=crop" alt="Italian restaurant interior" class="hero-bg">
                <div class="hero-content">
                    <h2 class="hero-title">Benvenuti alla Bella Vista</h2>
                    <p class="hero-subtitle">本格イタリア料理の真髄をお楽しみください</p>
                    <button class="hero-btn">メニューを見る</button>
                </div>
            </section>

            <section id="about" class="about">
                <div class="container">
                    <div class="about-content">
                        <div class="about-text">
                            <h2 class="section-title">La Nostra Storia</h2>
                            <p>私たちのストーリー</p>
                            <div class="story-text">
                                <p>イタリア・トスカーナ地方の小さな村で生まれ育ったシェフが、故郷の味を日本の皆様にお届けしたいという想いから始まりました。</p>
                                <p>厳選されたイタリア産の食材と、代々受け継がれてきた伝統のレシピ。そして日本の四季に合わせたアレンジを加えた、ここでしか味わえない特別な料理をご提供しています。</p>
                                <p>温かな家庭的な雰囲気の中で、大切な方との素敵なひとときをお過ごしください。</p>
                            </div>
                        </div>
                        <div class="about-image">
                            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=800&fit=crop" alt="Italian cooking">
                        </div>
                    </div>
                </div>
            </section>

            <section id="menu" class="menu">
                <div class="container">
                    <h2 class="section-title center">Il Nostro Menu</h2>
                    <p class="menu-subtitle">私たちのメニュー</p>
                    
                    <div class="menu-categories">
                        <div class="menu-category">
                            <h3>Antipasti - 前菜</h3>
                            <div class="menu-items">
                                <div class="menu-item">
                                    <div class="item-info">
                                        <h4>プロシュート・ディ・パルマ</h4>
                                        <p>24ヶ月熟成の最高級生ハム</p>
                                    </div>
                                    <span class="price">¥1,800</span>
                                </div>
                                <div class="menu-item">
                                    <div class="item-info">
                                        <h4>ブルスケッタ・ミスタ</h4>
                                        <p>トマト、モッツァレラ、バジルのトースト</p>
                                    </div>
                                    <span class="price">¥1,200</span>
                                </div>
                                <div class="menu-item">
                                    <div class="item-info">
                                        <h4>カルパッチョ・ディ・マンゾ</h4>
                                        <p>牛肉の薄切りカルパッチョ</p>
                                    </div>
                                    <span class="price">¥1,600</span>
                                </div>
                            </div>
                        </div>

                        <div class="menu-category">
                            <h3>Pasta - パスタ</h3>
                            <div class="menu-items">
                                <div class="menu-item featured">
                                    <div class="item-info">
                                        <h4>スパゲッティ・カルボナーラ</h4>
                                        <p>クリーミーな卵とベーコンの定番パスタ</p>
                                    </div>
                                    <span class="price">¥2,200</span>
                                </div>
                                <div class="menu-item">
                                    <div class="item-info">
                                        <h4>ペンネ・アラビアータ</h4>
                                        <p>ピリ辛トマトソースのショートパスタ</p>
                                    </div>
                                    <span class="price">¥1,900</span>
                                </div>
                                <div class="menu-item">
                                    <div class="item-info">
                                        <h4>ラザニア・デッラ・カーサ</h4>
                                        <p>自家製ミートソースとベシャメルのラザニア</p>
                                    </div>
                                    <span class="price">¥2,600</span>
                                </div>
                            </div>
                        </div>

                        <div class="menu-category">
                            <h3>Pizza - ピザ</h3>
                            <div class="menu-items">
                                <div class="menu-item">
                                    <div class="item-info">
                                        <h4>マルゲリータ</h4>
                                        <p>トマト、モッツァレラ、バジルの王道ピザ</p>
                                    </div>
                                    <span class="price">¥2,400</span>
                                </div>
                                <div class="menu-item">
                                    <div class="item-info">
                                        <h4>クアトロ・フォルマッジ</h4>
                                        <p>4種のチーズピザ</p>
                                    </div>
                                    <span class="price">¥2,800</span>
                                </div>
                                <div class="menu-item">
                                    <div class="item-info">
                                        <h4>プロシュート・エ・ルーコラ</h4>
                                        <p>生ハムとルッコラのピザ</p>
                                    </div>
                                    <span class="price">¥3,200</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="wine" class="wine">
                <div class="container">
                    <h2 class="section-title center">Vini Italiani</h2>
                    <p class="wine-subtitle">厳選イタリアワイン</p>
                    
                    <div class="wine-list">
                        <div class="wine-category">
                            <h3>Vino Rosso - 赤ワイン</h3>
                            <div class="wine-items">
                                <div class="wine-item">
                                    <h4>キャンティ・クラシコ</h4>
                                    <p>トスカーナ州の伝統的な赤ワイン</p>
                                    <span class="wine-price">グラス ¥900 / ボトル ¥6,500</span>
                                </div>
                                <div class="wine-item">
                                    <h4>バローロ</h4>
                                    <p>ピエモンテ州の王様ワイン</p>
                                    <span class="wine-price">グラス ¥1,200 / ボトル ¥8,800</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="wine-category">
                            <h3>Vino Bianco - 白ワイン</h3>
                            <div class="wine-items">
                                <div class="wine-item">
                                    <h4>ピノ・グリージョ</h4>
                                    <p>フリウリ州の爽やかな白ワイン</p>
                                    <span class="wine-price">グラス ¥800 / ボトル ¥5,800</span>
                                </div>
                                <div class="wine-item">
                                    <h4>ソアーヴェ</h4>
                                    <p>ヴェネト州の上品な白ワイン</p>
                                    <span class="wine-price">グラス ¥900 / ボトル ¥6,200</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="chef" class="chef">
                <div class="container">
                    <div class="chef-content">
                        <div class="chef-image">
                            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=800&fit=crop" alt="Italian chef">
                        </div>
                        <div class="chef-info">
                            <h2 class="section-title">Il Nostro Chef</h2>
                            <h3>マルコ・ロッシ</h3>
                            <p class="chef-title">料理長 / オーナー</p>
                            <div class="chef-bio">
                                <p>イタリア・トスカーナ州フィレンツェ出身。祖母から受け継いだ伝統的なレシピと、現代的なテクニックを融合させた独自のスタイルで料理を創作しています。</p>
                                <p>20年以上にわたってイタリア各地の名店で修行を積み、2015年に来日。日本の食材とイタリアの伝統が出会う、新しい美味しさを追求し続けています。</p>
                                <blockquote>
                                    "料理は愛です。家族や友人との時間を大切にするイタリアの心を、日本の皆様にもお届けしたいのです。"
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact">
                <div class="container">
                    <h2 class="section-title center">Contattaci</h2>
                    <p class="contact-subtitle">お問い合わせ・アクセス</p>
                    
                    <div class="contact-content">
                        <div class="contact-info">
                            <div class="info-item">
                                <h3>営業時間</h3>
                                <p>ランチ: 11:30〜15:00（L.O. 14:00）</p>
                                <p>ディナー: 17:30〜22:30（L.O. 21:30）</p>
                                <p>定休日: 月曜日</p>
                            </div>
                            
                            <div class="info-item">
                                <h3>アクセス</h3>
                                <p>〒150-0001</p>
                                <p>東京都渋谷区神宮前5-10-1</p>
                                <p>表参道駅から徒歩5分</p>
                                <p>TEL: 03-1234-5678</p>
                            </div>
                            
                            <div class="info-item">
                                <h3>個室・貸切</h3>
                                <p>個室: 2〜8名様</p>
                                <p>貸切: 20〜40名様</p>
                                <p>パーティープランもご用意</p>
                            </div>
                        </div>
                        
                        <div class="contact-image">
                            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" alt="Restaurant interior">
                        </div>
                    </div>
                </div>
            </section>

            <section id="reserve" class="reserve">
                <div class="container">
                    <h2 class="section-title center">Prenotazione</h2>
                    <p class="reserve-subtitle">ご予約</p>
                    
                    <div class="reserve-content">
                        <p>お電話またはオンラインでご予約を承っております</p>
                        <div class="reserve-buttons">
                            <a href="tel:03-1234-5678" class="btn-phone">
                                電話で予約<br>
                                <span>03-1234-5678</span>
                            </a>
                            <button class="btn-online">オンライン予約</button>
                        </div>
                        <p class="reserve-note">※2名様以上でのご予約をお願いしております</p>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="footer-content">
                <div class="footer-logo">
                    <h3>Bella Vista</h3>
                    <p>Ristorante Italiano</p>
                </div>
                <div class="footer-info">
                    <p>〒150-0001 東京都渋谷区神宮前5-10-1</p>
                    <p>TEL: 03-1234-5678</p>
                </div>
            </div>
            <p class="copyright">© 2025 Bella Vista. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Noto+Sans+JP:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Sans JP', sans-serif;
    color: #2c2c2c;
    background: #faf8f6;
    line-height: 1.7;
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
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    color: #c41e3a;
    margin-bottom: -0.2rem;
}

.logo-subtitle {
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
}

.nav-list {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-list a {
    text-decoration: none;
    color: #2c2c2c;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-list a:hover {
    color: #c41e3a;
}

.reserve-btn {
    background: #c41e3a;
    color: white !important;
    padding: 0.7rem 1.5rem;
    border-radius: 25px;
    font-weight: 700;
}

.reserve-btn:hover {
    background: #a01729 !important;
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
    object-fit: cover;
    filter: brightness(0.4);
    z-index: -1;
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 1;
}

.hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-btn {
    background: #c41e3a;
    color: white;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
}

.hero-btn:hover {
    background: #a01729;
    transform: scale(1.05);
}

/* Common Styles */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

section {
    padding: 5rem 0;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #2c2c2c;
    margin-bottom: 0.5rem;
}

.section-title.center {
    text-align: center;
    margin-bottom: 1rem;
}

/* About */
.about {
    background: white;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-text p:first-of-type {
    font-style: italic;
    color: #c41e3a;
    margin-bottom: 2rem;
}

.story-text p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

.about-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
}

/* Menu */
.menu {
    background: #f8f7f5;
}

.menu-subtitle {
    text-align: center;
    font-style: italic;
    color: #666;
    margin-bottom: 3rem;
}

.menu-categories {
    display: grid;
    gap: 3rem;
}

.menu-category {
    background: white;
    padding: 2.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.menu-category h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: #c41e3a;
    margin-bottom: 1.5rem;
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 2px solid #f0f0f0;
}

.menu-items {
    display: grid;
    gap: 1.5rem;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f0f0f0;
}

.menu-item:last-child {
    border-bottom: none;
}

.menu-item.featured {
    background: linear-gradient(135deg, #fff5f5 0%, #fff 100%);
    padding: 1.5rem;
    border-radius: 8px;
    border: none;
}

.item-info h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #2c2c2c;
}

.item-info p {
    color: #666;
    font-size: 0.95rem;
}

.price {
    font-weight: 700;
    color: #c41e3a;
    font-size: 1.1rem;
    margin-left: 1rem;
}

/* Wine */
.wine {
    background: white;
}

.wine-subtitle {
    text-align: center;
    font-style: italic;
    color: #666;
    margin-bottom: 3rem;
}

.wine-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.wine-category {
    background: #f8f7f5;
    padding: 2.5rem;
    border-radius: 10px;
}

.wine-category h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: #c41e3a;
    margin-bottom: 2rem;
    text-align: center;
}

.wine-item {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e0e0e0;
}

.wine-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.wine-item h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #2c2c2c;
}

.wine-item p {
    color: #666;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

.wine-price {
    color: #c41e3a;
    font-weight: 500;
    font-size: 0.9rem;
}

/* Chef */
.chef {
    background: #f8f7f5;
}

.chef-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: start;
}

.chef-image img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 10px;
}

.chef-info h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: #c41e3a;
    margin-bottom: 0.5rem;
}

.chef-title {
    font-style: italic;
    color: #666;
    margin-bottom: 2rem;
}

.chef-bio p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

.chef-bio blockquote {
    background: white;
    padding: 2rem;
    margin: 2rem 0;
    border-left: 4px solid #c41e3a;
    border-radius: 5px;
    font-style: italic;
    color: #444;
}

/* Contact */
.contact {
    background: white;
}

.contact-subtitle {
    text-align: center;
    font-style: italic;
    color: #666;
    margin-bottom: 3rem;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.contact-info {
    display: grid;
    gap: 2rem;
}

.info-item h3 {
    font-size: 1.3rem;
    color: #c41e3a;
    margin-bottom: 1rem;
}

.info-item p {
    margin-bottom: 0.5rem;
    color: #444;
}

.contact-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}

/* Reserve */
.reserve {
    background: linear-gradient(135deg, #c41e3a 0%, #a01729 100%);
    color: white;
}

.reserve .section-title {
    color: white;
}

.reserve-subtitle {
    text-align: center;
    font-style: italic;
    opacity: 0.9;
    margin-bottom: 3rem;
}

.reserve-content {
    text-align: center;
}

.reserve-content > p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
}

.reserve-buttons {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 2rem;
}

.btn-phone, .btn-online {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
    border: 2px solid white;
    border-radius: 25px;
    background: transparent;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
}

.btn-phone:hover, .btn-online:hover {
    background: white;
    color: #c41e3a;
}

.btn-phone span {
    display: block;
    font-size: 1.2rem;
    margin-top: 0.3rem;
}

.reserve-note {
    opacity: 0.8;
    font-size: 0.9rem;
}

/* Footer */
.footer {
    background: #2c2c2c;
    color: white;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.footer-logo h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: #c41e3a;
    margin-bottom: 0.3rem;
}

.footer-logo p {
    font-style: italic;
    color: #999;
}

.footer-info p {
    color: #ccc;
    margin-bottom: 0.3rem;
}

.copyright {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #444;
    color: #999;
    font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-list {
        flex-direction: column;
        gap: 1rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .about-content,
    .chef-content,
    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .wine-list {
        grid-template-columns: 1fr;
    }
    
    .reserve-buttons {
        flex-direction: column;
        gap: 1rem;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
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

// ヒーローボタン
document.querySelector('.hero-btn').addEventListener('click', function() {
    const menuSection = document.querySelector('#menu');
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = menuSection.offsetTop - headerHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

// 予約ボタン
document.querySelector('.btn-online').addEventListener('click', function() {
    alert('オンライン予約システムへ移動します（実装予定）');
});

// ヘッダー背景変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// メニューアイテムのハイライト効果
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#fff8f8';
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
        this.style.transform = '';
    });
});

// ワインアイテムのホバー効果
document.querySelectorAll('.wine-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'white';
        this.style.padding = '1rem';
        this.style.borderRadius = '8px';
        this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
        this.style.padding = '';
        this.style.borderRadius = '';
    });
});`
  }
}