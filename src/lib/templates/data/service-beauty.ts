import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const serviceBeautyTemplate: WebTemplate = {
  id: 'service-beauty',
  title: 'サービス業 - 美容室',
  category: TEMPLATE_CATEGORIES.SERVICE,
  description: 'スタイリッシュな美容室・ヘアサロン向けWebサイトテンプレート',
  thumbnail: '/template-images/service-beauty.jpg',
  features: [
    'スタイルギャラリー',
    'スタッフ紹介',
    'メニュー料金表',
    'オンライン予約'
  ],
  tags: ['サービス業', '美容室', 'ヘアサロン', 'ビューティー'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HAIR STUDIO LUMINOUS - 輝く髪と笑顔のために</title>
</head>
<body>
    <header class="header">
        <div class="header-inner">
            <div class="logo">
                <span class="logo-main">LUMINOUS</span>
                <span class="logo-sub">HAIR STUDIO</span>
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="#concept">Concept</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#style">Style</a></li>
                    <li><a href="#staff">Staff</a></li>
                    <li><a href="#access">Access</a></li>
                </ul>
            </nav>
            <a href="#booking" class="booking-btn">ご予約</a>
        </div>
    </header>

    <section class="hero">
        <div class="hero-slider">
            <div class="slide active">
                <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&h=1080&fit=crop" alt="サロン内観">
            </div>
        </div>
        <div class="hero-content">
            <h1>あなたの魅力を<br>最大限に引き出す</h1>
            <p>一人ひとりの個性に合わせたスタイル提案</p>
            <a href="#booking" class="cta-button">今すぐ予約する</a>
        </div>
    </section>

    <section id="concept" class="concept">
        <div class="container">
            <h2 class="section-title">Concept</h2>
            <div class="concept-content">
                <div class="concept-text">
                    <h3>髪から始まる、新しい自分</h3>
                    <p>HAIR STUDIO LUMINOUSは、お客様一人ひとりの魅力を最大限に引き出すことを目指しています。</p>
                    <p>最新のトレンドと確かな技術で、あなただけのスタイルをご提案。</p>
                    <p>リラックスできる空間で、特別な時間をお過ごしください。</p>
                </div>
                <div class="concept-image">
                    <img src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=600&h=400&fit=crop" alt="サロンコンセプト">
                </div>
            </div>
        </div>
    </section>

    <section id="menu" class="menu">
        <div class="container">
            <h2 class="section-title">Menu & Price</h2>
            <div class="menu-tabs">
                <button class="tab-btn active" data-tab="cut">カット</button>
                <button class="tab-btn" data-tab="color">カラー</button>
                <button class="tab-btn" data-tab="perm">パーマ</button>
                <button class="tab-btn" data-tab="treatment">トリートメント</button>
            </div>
            <div class="menu-content">
                <div class="tab-content active" id="cut">
                    <div class="menu-item">
                        <div class="menu-header">
                            <h3>カット</h3>
                            <span class="price">¥5,500</span>
                        </div>
                        <p>シャンプー・ブロー込み</p>
                    </div>
                    <div class="menu-item">
                        <div class="menu-header">
                            <h3>学生カット</h3>
                            <span class="price">¥4,400</span>
                        </div>
                        <p>中高生限定（要学生証）</p>
                    </div>
                    <div class="menu-item">
                        <div class="menu-header">
                            <h3>前髪カット</h3>
                            <span class="price">¥1,100</span>
                        </div>
                        <p>前髪のみのカット</p>
                    </div>
                </div>
                <div class="tab-content" id="color">
                    <div class="menu-item">
                        <div class="menu-header">
                            <h3>リタッチカラー</h3>
                            <span class="price">¥6,600</span>
                        </div>
                        <p>根元のみ（〜3cm）</p>
                    </div>
                    <div class="menu-item">
                        <div class="menu-header">
                            <h3>フルカラー</h3>
                            <span class="price">¥8,800</span>
                        </div>
                        <p>全体カラー</p>
                    </div>
                    <div class="menu-item">
                        <div class="menu-header">
                            <h3>ハイライト・ローライト</h3>
                            <span class="price">¥11,000〜</span>
                        </div>
                        <p>立体感のあるカラーデザイン</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="style" class="style-gallery">
        <div class="container">
            <h2 class="section-title">Style Gallery</h2>
            <div class="style-filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="short">Short</button>
                <button class="filter-btn" data-filter="medium">Medium</button>
                <button class="filter-btn" data-filter="long">Long</button>
                <button class="filter-btn" data-filter="color">Color</button>
            </div>
            <div class="style-grid">
                <div class="style-item" data-category="short">
                    <img src="https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=400&h=500&fit=crop" alt="ショートスタイル">
                    <div class="style-overlay">
                        <h3>ナチュラルショート</h3>
                        <p>担当: Yuki</p>
                    </div>
                </div>
                <div class="style-item" data-category="medium">
                    <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=500&fit=crop" alt="ミディアムスタイル">
                    <div class="style-overlay">
                        <h3>エアリーボブ</h3>
                        <p>担当: Mika</p>
                    </div>
                </div>
                <div class="style-item" data-category="long">
                    <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&h=500&fit=crop" alt="ロングスタイル">
                    <div class="style-overlay">
                        <h3>ナチュラルウェーブ</h3>
                        <p>担当: Ken</p>
                    </div>
                </div>
                <div class="style-item" data-category="color">
                    <img src="https://images.unsplash.com/photo-1617695743585-0e5578e72a62?w=400&h=500&fit=crop" alt="カラースタイル">
                    <div class="style-overlay">
                        <h3>グラデーションカラー</h3>
                        <p>担当: Saki</p>
                    </div>
                </div>
                <div class="style-item" data-category="short">
                    <img src="https://images.unsplash.com/photo-1615460489547-a534e20c9db1?w=400&h=500&fit=crop" alt="ショートスタイル2">
                    <div class="style-overlay">
                        <h3>クールショート</h3>
                        <p>担当: Tomo</p>
                    </div>
                </div>
                <div class="style-item" data-category="medium">
                    <img src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=500&fit=crop" alt="ミディアムスタイル2">
                    <div class="style-overlay">
                        <h3>フェミニンミディ</h3>
                        <p>担当: Aya</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="staff" class="staff">
        <div class="container">
            <h2 class="section-title">Our Staff</h2>
            <div class="staff-grid">
                <div class="staff-card">
                    <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop" alt="スタイリスト1">
                    <h3>佐藤 ゆき</h3>
                    <p class="staff-role">Top Stylist</p>
                    <p class="staff-message">ナチュラルで扱いやすいスタイルが得意です。</p>
                    <div class="staff-sns">
                        <a href="#">Instagram</a>
                    </div>
                </div>
                <div class="staff-card">
                    <img src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=400&h=400&fit=crop" alt="スタイリスト2">
                    <h3>田中 みか</h3>
                    <p class="staff-role">Stylist</p>
                    <p class="staff-message">トレンドを取り入れたスタイル提案が得意です。</p>
                    <div class="staff-sns">
                        <a href="#">Instagram</a>
                    </div>
                </div>
                <div class="staff-card">
                    <img src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=400&fit=crop" alt="スタイリスト3">
                    <h3>山田 けん</h3>
                    <p class="staff-role">Director</p>
                    <p class="staff-message">お客様の魅力を最大限に引き出します。</p>
                    <div class="staff-sns">
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="instagram">
        <div class="container">
            <h2 class="section-title">Instagram</h2>
            <p class="instagram-id">@luminous_hair</p>
            <div class="instagram-feed">
                <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=300&h=300&fit=crop" alt="Instagram1">
                <img src="https://images.unsplash.com/photo-1620331317131-c7c2c7a37a01?w=300&h=300&fit=crop" alt="Instagram2">
                <img src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=300&h=300&fit=crop" alt="Instagram3">
                <img src="https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop" alt="Instagram4">
            </div>
        </div>
    </section>

    <section id="access" class="access">
        <div class="container">
            <h2 class="section-title">Access</h2>
            <div class="access-content">
                <div class="access-info">
                    <table>
                        <tr>
                            <th>住所</th>
                            <td>〒150-0041 東京都渋谷区神南1-15-3</td>
                        </tr>
                        <tr>
                            <th>電話</th>
                            <td>03-6789-0123</td>
                        </tr>
                        <tr>
                            <th>営業時間</th>
                            <td>
                                平日: 10:00-20:00<br>
                                土日祝: 9:00-19:00
                            </td>
                        </tr>
                        <tr>
                            <th>定休日</th>
                            <td>毎週火曜日、第1・第3月曜日</td>
                        </tr>
                        <tr>
                            <th>アクセス</th>
                            <td>JR渋谷駅ハチ公口より徒歩5分</td>
                        </tr>
                    </table>
                </div>
                <div class="access-video">
                    <iframe 
                        src="https://www.youtube.com/embed/HJm9TxGJz-Y" 
                        title="Salon Tour" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </section>

    <section id="booking" class="booking">
        <div class="container">
            <h2 class="section-title">Online Booking</h2>
            <div class="booking-content">
                <p>24時間いつでもオンラインでご予約いただけます</p>
                <button class="booking-button">予約画面へ進む</button>
                <p class="booking-note">
                    ※初めてご利用の方は、お電話でのご予約をおすすめしています<br>
                    TEL: 03-6789-0123
                </p>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <span>LUMINOUS</span>
                    <span>HAIR STUDIO</span>
                </div>
                <div class="footer-links">
                    <a href="#">プライバシーポリシー</a>
                    <a href="#">採用情報</a>
                </div>
                <div class="footer-social">
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">LINE</a>
                </div>
            </div>
            <p class="copyright">&copy; 2025 HAIR STUDIO LUMINOUS. All rights reserved.</p>
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
    font-family: 'Helvetica Neue', 'Noto Sans JP', sans-serif;
    color: #333;
    line-height: 1.6;
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
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    flex-direction: column;
}

.logo-main {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 3px;
    color: #d4a574;
}

.logo-sub {
    font-size: 10px;
    letter-spacing: 2px;
    color: #666;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 35px;
}

.nav a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    transition: color 0.3s;
}

.nav a:hover {
    color: #d4a574;
}

.booking-btn {
    background: #d4a574;
    color: white;
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 25px;
    transition: transform 0.3s;
}

.booking-btn:hover {
    transform: scale(1.05);
}

/* Hero */
.hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
}

.hero-content {
    text-align: center;
    color: white;
}

.hero-content h1 {
    font-size: 48px;
    font-weight: 300;
    line-height: 1.4;
    margin-bottom: 20px;
    letter-spacing: 2px;
}

.hero-content p {
    font-size: 18px;
    margin-bottom: 30px;
}

.cta-button {
    display: inline-block;
    padding: 15px 40px;
    background: #d4a574;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    transition: background 0.3s;
}

.cta-button:hover {
    background: #b8935f;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 50px;
    letter-spacing: 3px;
    position: relative;
    padding-bottom: 20px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: #d4a574;
}

/* Concept */
.concept {
    background: #f8f8f8;
}

.concept-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.concept-text h3 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #d4a574;
}

.concept-text p {
    margin-bottom: 15px;
    line-height: 1.8;
}

.concept-image img {
    width: 100%;
    border-radius: 10px;
}

/* Menu */
.menu-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
}

.tab-btn {
    padding: 10px 30px;
    background: transparent;
    border: 2px solid #d4a574;
    color: #d4a574;
    cursor: pointer;
    transition: all 0.3s;
}

.tab-btn.active,
.tab-btn:hover {
    background: #d4a574;
    color: white;
}

.menu-content {
    max-width: 800px;
    margin: 0 auto;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.menu-item {
    padding: 20px;
    border-bottom: 1px solid #eee;
}

.menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.menu-header h3 {
    font-size: 20px;
}

.price {
    font-size: 22px;
    color: #d4a574;
    font-weight: bold;
}

/* Style Gallery */
.style-gallery {
    background: #f8f8f8;
}

.style-filters {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;
}

.filter-btn {
    padding: 8px 20px;
    background: white;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: all 0.3s;
}

.filter-btn.active,
.filter-btn:hover {
    background: #d4a574;
    color: white;
    border-color: #d4a574;
}

.style-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.style-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.style-item img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s;
}

.style-item:hover img {
    transform: scale(1.1);
}

.style-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
    padding: 20px;
    transform: translateY(100%);
    transition: transform 0.3s;
}

.style-item:hover .style-overlay {
    transform: translateY(0);
}

/* Staff */
.staff-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.staff-card {
    text-align: center;
    padding: 30px;
    background: white;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
}

.staff-card img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
}

.staff-card h3 {
    font-size: 22px;
    margin-bottom: 5px;
}

.staff-role {
    color: #d4a574;
    margin-bottom: 15px;
}

.staff-message {
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
}

.staff-sns a {
    color: #d4a574;
    text-decoration: none;
}

/* Instagram */
.instagram {
    background: #f8f8f8;
}

.instagram-id {
    text-align: center;
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
}

.instagram-feed {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
}

.instagram-feed img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s;
}

.instagram-feed img:hover {
    opacity: 0.8;
}

/* Access */
.access-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: start;
}

.access-info table {
    width: 100%;
    border-collapse: collapse;
}

.access-info th {
    text-align: left;
    padding: 15px;
    background: #f8f8f8;
    width: 100px;
}

.access-info td {
    padding: 15px;
}

.access-video {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}

.access-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Booking */
.booking {
    background: linear-gradient(135deg, #d4a574 0%, #b8935f 100%);
    color: white;
}

.booking .section-title {
    color: white;
}

.booking .section-title::after {
    background: white;
}

.booking-content {
    text-align: center;
}

.booking-content p {
    font-size: 18px;
    margin-bottom: 30px;
}

.booking-button {
    padding: 15px 50px;
    background: white;
    color: #d4a574;
    border: none;
    font-size: 18px;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.3s;
}

.booking-button:hover {
    transform: scale(1.05);
}

.booking-note {
    margin-top: 30px;
    font-size: 14px;
    opacity: 0.9;
}

/* Footer */
.footer {
    background: #333;
    color: white;
    padding: 50px 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.footer-logo span {
    display: block;
    letter-spacing: 2px;
}

.footer-links,
.footer-social {
    display: flex;
    gap: 30px;
}

.footer-links a,
.footer-social a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover,
.footer-social a:hover {
    color: #d4a574;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #555;
    color: #999;
}

/* Responsive */
@media (max-width: 768px) {
    .header-inner {
        flex-direction: column;
        gap: 10px;
        padding: 10px 20px;
    }
    
    .nav ul {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .hero-content h1 {
        font-size: 32px;
    }
    
    .concept-content,
    .access-content {
        grid-template-columns: 1fr;
    }
    
    .style-grid {
        grid-template-columns: 1fr;
    }
    
    .staff-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 20px;
    }
}`,
    js: `// タブ切り替え
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        // タブボタンのアクティブ状態を切り替え
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // タブコンテンツの表示を切り替え
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tab) {
                content.classList.add('active');
            }
        });
    });
});

// スタイルギャラリーのフィルター
const filterBtns = document.querySelectorAll('.filter-btn');
const styleItems = document.querySelectorAll('.style-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        // ボタンのアクティブ状態を切り替え
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // アイテムの表示を切り替え
        styleItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// スムーズスクロール
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
document.querySelector('.booking-button').addEventListener('click', () => {
    alert('予約システムへ移動します（実装予定）');
});

// ヘッダー背景の変更
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    }
});`
  }
}