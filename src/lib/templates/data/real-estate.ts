import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const realEstateTemplate: WebTemplate = {
  id: 'real-estate',
  title: '不動産',
  category: TEMPLATE_CATEGORIES.SERVICE,
  description: '不動産会社向けの物件紹介Webサイトテンプレート',
  thumbnail: '/template-images/real-estate.jpg',
  features: [
    '物件検索',
    '物件詳細表示',
    'VRツアー',
    '問い合わせフォーム'
  ],
  tags: ['不動産', '物件', '賃貸', '売買'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DREAM HOME - 理想の住まいを見つける</title>
</head>
<body>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <span>📞 0120-XXX-XXX</span>
                <span>営業時間: 10:00-19:00</span>
            </div>
        </div>
        <div class="header-main">
            <div class="container">
                <div class="logo">
                    <span class="logo-icon">🏠</span>
                    <h1>DREAM HOME</h1>
                </div>
                <nav class="nav">
                    <ul>
                        <li><a href="#search">物件検索</a></li>
                        <li><a href="#featured">おすすめ物件</a></li>
                        <li><a href="#service">サービス</a></li>
                        <li><a href="#about">会社情報</a></li>
                    </ul>
                </nav>
                <button class="contact-btn">無料相談</button>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=600&fit=crop" alt="モダンな住宅">
        </div>
        <div class="hero-content">
            <h2>理想の住まいが、<br>きっと見つかる。</h2>
            <p>豊富な物件情報と確かなサポートで、あなたの新生活を応援します</p>
        </div>
    </section>

    <section id="search" class="search-section">
        <div class="container">
            <div class="search-box">
                <h3>物件を検索</h3>
                <div class="search-tabs">
                    <button class="tab-btn active" data-type="rent">賃貸</button>
                    <button class="tab-btn" data-type="buy">売買</button>
                </div>
                <form class="search-form">
                    <div class="search-row">
                        <select class="search-input">
                            <option>エリアを選択</option>
                            <option>東京23区</option>
                            <option>横浜市</option>
                            <option>さいたま市</option>
                            <option>千葉市</option>
                        </select>
                        <select class="search-input">
                            <option>物件種別</option>
                            <option>マンション</option>
                            <option>アパート</option>
                            <option>一戸建て</option>
                            <option>土地</option>
                        </select>
                        <select class="search-input">
                            <option>価格帯</option>
                            <option>〜5万円</option>
                            <option>5〜10万円</option>
                            <option>10〜15万円</option>
                            <option>15万円〜</option>
                        </select>
                    </div>
                    <div class="search-row">
                        <select class="search-input">
                            <option>間取り</option>
                            <option>ワンルーム</option>
                            <option>1K/1DK</option>
                            <option>1LDK/2K</option>
                            <option>2LDK/3K</option>
                            <option>3LDK以上</option>
                        </select>
                        <input type="text" class="search-input" placeholder="駅名・路線名">
                        <button type="submit" class="search-button">検索する</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <section id="featured" class="featured">
        <div class="container">
            <h2 class="section-title">おすすめ物件</h2>
            <div class="property-grid">
                <div class="property-card">
                    <div class="property-badge">新着</div>
                    <div class="property-image">
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop" alt="物件1">
                        <button class="vr-btn">360° VR内覧</button>
                    </div>
                    <div class="property-info">
                        <h3>タワーマンション渋谷</h3>
                        <p class="property-price">¥180,000/月</p>
                        <div class="property-details">
                            <span>2LDK</span>
                            <span>65.5㎡</span>
                            <span>15階</span>
                        </div>
                        <p class="property-location">渋谷駅 徒歩5分</p>
                        <div class="property-features">
                            <span class="feature-tag">ペット可</span>
                            <span class="feature-tag">オートロック</span>
                            <span class="feature-tag">駐車場有</span>
                        </div>
                    </div>
                </div>
                <div class="property-card">
                    <div class="property-badge popular">人気</div>
                    <div class="property-image">
                        <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop" alt="物件2">
                        <button class="vr-btn">360° VR内覧</button>
                    </div>
                    <div class="property-info">
                        <h3>デザイナーズアパート</h3>
                        <p class="property-price">¥95,000/月</p>
                        <div class="property-details">
                            <span>1LDK</span>
                            <span>42.3㎡</span>
                            <span>3階</span>
                        </div>
                        <p class="property-location">恵比寿駅 徒歩8分</p>
                        <div class="property-features">
                            <span class="feature-tag">新築</span>
                            <span class="feature-tag">バルコニー</span>
                        </div>
                    </div>
                </div>
                <div class="property-card">
                    <div class="property-image">
                        <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop" alt="物件3">
                        <button class="vr-btn">360° VR内覧</button>
                    </div>
                    <div class="property-info">
                        <h3>ファミリー向け一戸建て</h3>
                        <p class="property-price">¥4,500万円</p>
                        <div class="property-details">
                            <span>4LDK</span>
                            <span>120.8㎡</span>
                            <span>土地180㎡</span>
                        </div>
                        <p class="property-location">世田谷区 成城</p>
                        <div class="property-features">
                            <span class="feature-tag">庭付き</span>
                            <span class="feature-tag">駐車場2台</span>
                            <span class="feature-tag">太陽光発電</span>
                        </div>
                    </div>
                </div>
                <div class="property-card">
                    <div class="property-badge">値下げ</div>
                    <div class="property-image">
                        <img src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&h=300&fit=crop" alt="物件4">
                        <button class="vr-btn">360° VR内覧</button>
                    </div>
                    <div class="property-info">
                        <h3>リノベーションマンション</h3>
                        <p class="property-price">
                            <span class="old-price">¥125,000</span>
                            ¥110,000/月
                        </p>
                        <div class="property-details">
                            <span>1LDK</span>
                            <span>55.2㎡</span>
                            <span>8階</span>
                        </div>
                        <p class="property-location">品川駅 徒歩10分</p>
                        <div class="property-features">
                            <span class="feature-tag">リノベ済</span>
                            <span class="feature-tag">南向き</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more-properties">
                <button class="more-btn">もっと見る</button>
            </div>
        </div>
    </section>

    <section id="service" class="services">
        <div class="container">
            <h2 class="section-title">私たちのサービス</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🔍</div>
                    <h3>物件検索サポート</h3>
                    <p>お客様のご要望に合った物件を専門スタッフが丁寧にお探しします</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏠</div>
                    <h3>VR内覧サービス</h3>
                    <p>自宅にいながら360度VRで物件を内覧できます</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📋</div>
                    <h3>契約手続きサポート</h3>
                    <p>複雑な契約手続きも専門スタッフが丁寧にサポート</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🚚</div>
                    <h3>引越しサポート</h3>
                    <p>提携引越し業者の紹介で、スムーズな新生活をお手伝い</p>
                </div>
            </div>
        </div>
    </section>

    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number">15,000+</span>
                    <span class="stat-label">取扱物件数</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">98%</span>
                    <span class="stat-label">顧客満足度</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">25年</span>
                    <span class="stat-label">営業実績</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">50店舗</span>
                    <span class="stat-label">全国展開</span>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials">
        <div class="container">
            <h2 class="section-title">お客様の声</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>初めての一人暮らしで不安でしたが、スタッフの方が親身になって物件を探してくださいました。理想の部屋が見つかって本当に感謝しています。</p>
                    <div class="testimonial-author">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop" alt="顧客1">
                        <div>
                            <strong>田中 美咲様</strong>
                            <span>20代 会社員</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>VR内覧サービスのおかげで、遠方からでも物件を詳しく確認できました。実際に見た時も想像通りで安心しました。</p>
                    <div class="testimonial-author">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop" alt="顧客2">
                        <div>
                            <strong>佐藤 健太様</strong>
                            <span>30代 エンジニア</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>家族4人での引越しでしたが、子供の学校や通勤を考慮した最適な物件を提案していただきました。</p>
                    <div class="testimonial-author">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" alt="顧客3">
                        <div>
                            <strong>山田 太郎様</strong>
                            <span>40代 会社経営</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="cta">
        <div class="container">
            <div class="cta-content">
                <h2>理想の住まい探しを始めましょう</h2>
                <p>経験豊富なスタッフが、あなたの新生活をサポートします</p>
                <div class="cta-buttons">
                    <button class="cta-btn primary">無料相談を予約</button>
                    <button class="cta-btn secondary">資料請求</button>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>DREAM HOME</h3>
                    <p>理想の住まいを見つける</p>
                    <p>宅地建物取引業免許番号<br>東京都知事(5)第XXXXX号</p>
                </div>
                <div class="footer-section">
                    <h3>サービス</h3>
                    <ul>
                        <li><a href="#">賃貸物件</a></li>
                        <li><a href="#">売買物件</a></li>
                        <li><a href="#">不動産投資</a></li>
                        <li><a href="#">法人向けサービス</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>会社情報</h3>
                    <ul>
                        <li><a href="#">会社概要</a></li>
                        <li><a href="#">採用情報</a></li>
                        <li><a href="#">店舗一覧</a></li>
                        <li><a href="#">お問い合わせ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>お問い合わせ</h3>
                    <p>📞 0120-XXX-XXX</p>
                    <p>📧 info@dreamhome.jp</p>
                    <p>営業時間: 10:00-19:00<br>定休日: 水曜日</p>
                </div>
            </div>
            <p class="copyright">&copy; 2025 DREAM HOME. All rights reserved.</p>
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
    font-family: 'Noto Sans JP', sans-serif;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header-top {
    background: #f8f9fa;
    padding: 8px 0;
    font-size: 14px;
    color: #666;
}

.header-top .container {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
}

.header-main {
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-main .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-icon {
    font-size: 32px;
}

.logo h1 {
    color: #2c5282;
    font-size: 24px;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 35px;
}

.nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.nav a:hover {
    color: #2c5282;
}

.contact-btn {
    background: #2c5282;
    color: white;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.contact-btn:hover {
    background: #2a5298;
}

/* Hero */
.hero {
    position: relative;
    height: 500px;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
    color: white;
}

.hero-content h2 {
    font-size: 48px;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 20px;
}

/* Search Section */
.search-section {
    background: #f8f9fa;
    padding: 40px 0;
    margin-top: -80px;
    position: relative;
    z-index: 10;
}

.search-box {
    background: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.search-box h3 {
    margin-bottom: 20px;
    font-size: 24px;
}

.search-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.tab-btn {
    padding: 10px 30px;
    background: white;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.tab-btn.active {
    background: #2c5282;
    color: white;
    border-color: #2c5282;
}

.search-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.search-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.search-input {
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    font-size: 16px;
}

.search-button {
    background: #f59e0b;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.search-button:hover {
    background: #d97706;
}

/* Featured Properties */
.featured {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 36px;
    margin-bottom: 50px;
    color: #2c5282;
}

.property-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.property-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
    position: relative;
}

.property-card:hover {
    transform: translateY(-5px);
}

.property-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #ef4444;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    z-index: 1;
}

.property-badge.popular {
    background: #f59e0b;
}

.property-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.property-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.vr-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 12px;
}

.property-info {
    padding: 20px;
}

.property-info h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.property-price {
    font-size: 24px;
    color: #2c5282;
    font-weight: bold;
    margin-bottom: 15px;
}

.old-price {
    text-decoration: line-through;
    color: #999;
    font-size: 18px;
    margin-right: 10px;
}

.property-details {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
    color: #666;
}

.property-location {
    color: #666;
    margin-bottom: 15px;
}

.property-features {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.feature-tag {
    background: #e0f2fe;
    color: #0284c7;
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 12px;
}

.more-properties {
    text-align: center;
    margin-top: 50px;
}

.more-btn {
    background: white;
    color: #2c5282;
    padding: 12px 40px;
    border: 2px solid #2c5282;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
}

.more-btn:hover {
    background: #2c5282;
    color: white;
}

/* Services */
.services {
    background: #f8f9fa;
    padding: 80px 0;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.service-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s;
}

.service-card:hover {
    transform: translateY(-5px);
}

.service-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.service-card h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #2c5282;
}

/* Stats */
.stats {
    background: linear-gradient(135deg, #2c5282 0%, #2a5298 100%);
    color: white;
    padding: 60px 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    text-align: center;
}

.stat-item {
    display: flex;
    flex-direction: column;
}

.stat-number {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 10px;
}

.stat-label {
    font-size: 18px;
}

/* Testimonials */
.testimonials {
    padding: 80px 0;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.testimonial-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(0,0,0,0.1);
}

.stars {
    color: #fbbf24;
    margin-bottom: 15px;
}

.testimonial-card p {
    margin-bottom: 20px;
    line-height: 1.8;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;
}

.testimonial-author img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.testimonial-author strong {
    display: block;
    margin-bottom: 5px;
}

.testimonial-author span {
    color: #666;
    font-size: 14px;
}

/* CTA */
.cta {
    background: #f8f9fa;
    padding: 80px 0;
}

.cta-content {
    text-align: center;
}

.cta-content h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #2c5282;
}

.cta-content p {
    font-size: 18px;
    margin-bottom: 30px;
    color: #666;
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.cta-btn {
    padding: 15px 40px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s;
}

.cta-btn.primary {
    background: #2c5282;
    color: white;
}

.cta-btn.secondary {
    background: white;
    color: #2c5282;
    border: 2px solid #2c5282;
}

.cta-btn:hover {
    transform: scale(1.05);
}

/* Footer */
.footer {
    background: #1e293b;
    color: white;
    padding: 50px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 30px;
}

.footer-section h3 {
    margin-bottom: 20px;
    color: #60a5fa;
}

.footer-section ul {
    list-style: none;
}

.footer-section li {
    margin-bottom: 10px;
}

.footer-section a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: white;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #334155;
    color: #94a3b8;
}

/* Responsive */
@media (max-width: 768px) {
    .header-main .container {
        flex-direction: column;
        gap: 10px;
        padding: 10px 0;
    }
    
    .nav ul {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .hero-content h2 {
        font-size: 32px;
    }
    
    .search-row {
        grid-template-columns: 1fr;
    }
    
    .property-grid {
        grid-template-columns: 1fr;
    }
    
    .cta-buttons {
        flex-direction: column;
    }
}`,
    js: `// タブ切り替え
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const type = this.dataset.type;
        // タブに応じて検索フォームの内容を変更する処理
        console.log(\`切り替え: \${type}\`);
    });
});

// VR内覧ボタン
document.querySelectorAll('.vr-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('VR内覧機能を起動します（デモ）');
    });
});

// 検索フォーム
document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('検索を実行します');
});

// もっと見るボタン
document.querySelector('.more-btn').addEventListener('click', function() {
    alert('さらに物件を読み込みます');
});

// 無料相談ボタン
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent;
        alert(\`\${action}ページへ移動します\`);
    });
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header-main').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
    });
        }
    });
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素
document.querySelectorAll('.property-card, .service-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(el);
});`
  }
}