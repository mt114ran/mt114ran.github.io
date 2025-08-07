import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const cafeLuxuryTemplate: WebTemplate = {
  id: 'cafe-luxury',
  title: 'カフェ - 高級',
  category: TEMPLATE_CATEGORIES.CAFE,
  description: '上質な空間と洗練されたサービスを提供する高級カフェのテンプレート',
  thumbnail: '/template-images/cafe-luxury.jpg',
  features: [
    'エレガントなデザイン',
    'プレミアムな印象',
    '高級感のある配色',
    'VIP向けサービス対応'
  ],
  tags: ['カフェ', '高級', 'エレガント', 'プレミアム'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Café Prestige - 究極の贅沢空間</title>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <span class="logo-text">Café Prestige</span>
                </div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#collection">Collection</a></li>
                    <li><a href="#private">Private</a></li>
                    <li><a href="#reservation">Reservation</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1920&h=1080&fit=crop" alt="高級カフェの内装">
        </div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 class="hero-title">Café Prestige</h1>
            <p class="hero-subtitle">Ultimate Luxury Experience</p>
            <p class="hero-description">世界最高峰のコーヒーと至極のひととき</p>
            <button class="cta-button" onclick="scrollToReservation()">ご予約はこちら</button>
        </div>
    </section>

    <section id="experience" class="experience">
        <div class="container">
            <h2 class="section-title">Prestige Experience</h2>
            <div class="experience-grid">
                <div class="experience-item">
                    <div class="experience-image">
                        <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop" alt="世界最高級のコーヒー豆">
                    </div>
                    <div class="experience-content">
                        <h3>世界最高級のコーヒー豆</h3>
                        <p>ジャマイカブルーマウンテン、ハワイコナ、パナマゲイシャなど、世界各地から厳選された希少なコーヒー豆のみを使用。一杯一杯が芸術作品です。</p>
                    </div>
                </div>
                <div class="experience-item reverse">
                    <div class="experience-image">
                        <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop" alt="プロフェッショナルバリスタ">
                    </div>
                    <div class="experience-content">
                        <h3>マスターバリスタによる至高の一杯</h3>
                        <p>世界チャンピオンシップ受賞歴を持つマスターバリスタが、お客様一人ひとりのお好みに合わせて、完璧な一杯をお作りいたします。</p>
                    </div>
                </div>
                <div class="experience-item">
                    <div class="experience-image">
                        <img src="https://images.unsplash.com/photo-1522992319-0365e5f11656?w=600&h=400&fit=crop" alt="洗練された空間">
                    </div>
                    <div class="experience-content">
                        <h3>洗練されたプライベート空間</h3>
                        <p>イタリア製の家具とクリスタルシャンデリアに彩られた上質な空間。都市の喧騒を忘れ、静寂に包まれた特別なひとときをお過ごしください。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="collection" class="collection">
        <div class="container">
            <h2 class="section-title">Premium Collection</h2>
            <div class="collection-tabs">
                <button class="tab-button active" onclick="showTab('coffee')">Premium Coffee</button>
                <button class="tab-button" onclick="showTab('tea')">Exclusive Tea</button>
                <button class="tab-button" onclick="showTab('dessert')">Artisan Dessert</button>
            </div>
            
            <div id="coffee" class="collection-content active">
                <div class="menu-grid">
                    <div class="menu-item-luxury">
                        <div class="item-badge">限定</div>
                        <h4>ブルーマウンテン No.1</h4>
                        <p>ジャマイカの最高峰から採れる希少な豆</p>
                        <span class="price">¥3,800</span>
                    </div>
                    <div class="menu-item-luxury">
                        <div class="item-badge">人気</div>
                        <h4>パナマ ゲイシャ エスメラルダ</h4>
                        <p>世界最高品質を誇る幻のコーヒー</p>
                        <span class="price">¥4,200</span>
                    </div>
                    <div class="menu-item-luxury">
                        <h4>ハワイ コナ エキストラファンシー</h4>
                        <p>太平洋の楽園で育まれた極上の味わい</p>
                        <span class="price">¥3,200</span>
                    </div>
                    <div class="menu-item-luxury">
                        <h4>エチオピア イルガチェフェ G1</h4>
                        <p>コーヒー発祥の地から届く至高の風味</p>
                        <span class="price">¥2,800</span>
                    </div>
                </div>
            </div>
            
            <div id="tea" class="collection-content">
                <div class="menu-grid">
                    <div class="menu-item-luxury">
                        <div class="item-badge">希少</div>
                        <h4>ダージリン ファーストフラッシュ</h4>
                        <p>ヒマラヤの雲霧に育まれた極上の紅茶</p>
                        <span class="price">¥2,400</span>
                    </div>
                    <div class="menu-item-luxury">
                        <h4>ウーロン茶 大紅袍</h4>
                        <p>中国茶の王様と称される伝説の茶葉</p>
                        <span class="price">¥3,600</span>
                    </div>
                    <div class="menu-item-luxury">
                        <h4>プーアル茶 宮廷級</h4>
                        <p>100年の歴史を持つ熟成茶の最高峰</p>
                        <span class="price">¥2,800</span>
                    </div>
                    <div class="menu-item-luxury">
                        <h4>アッサム FTGFOP1</h4>
                        <p>インドが誇る最高級茶園の逸品</p>
                        <span class="price">¥2,200</span>
                    </div>
                </div>
            </div>
            
            <div id="dessert" class="collection-content">
                <div class="menu-grid">
                    <div class="menu-item-luxury">
                        <div class="item-badge">シェフ特製</div>
                        <h4>ヴァローナチョコレートケーキ</h4>
                        <p>フランス最高級チョコレートの芸術</p>
                        <span class="price">¥1,800</span>
                    </div>
                    <div class="menu-item-luxury">
                        <h4>マダガスカルバニラムース</h4>
                        <p>希少なバニラビーンズの贅沢な香り</p>
                        <span class="price">¥1,600</span>
                    </div>
                    <div class="menu-item-luxury">
                        <h4>季節のフルーツタルト</h4>
                        <p>厳選された旬の果実を使用</p>
                        <span class="price">¥1,400</span>
                    </div>
                    <div class="menu-item-luxury">
                        <h4>ティラミス クラシック</h4>
                        <p>イタリア伝統レシピの本格派</p>
                        <span class="price">¥1,200</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="private" class="private">
        <div class="container">
            <h2 class="section-title">Private Service</h2>
            <div class="private-services">
                <div class="service-card">
                    <div class="service-icon">👑</div>
                    <h3>VIPルーム</h3>
                    <p>完全個室での極上のプライベート空間をご提供。重要な商談やプライベートなひとときに。</p>
                    <ul>
                        <li>完全個室（2-6名様）</li>
                        <li>専属スタッフサービス</li>
                        <li>特別メニュー対応</li>
                    </ul>
                    <div class="service-price">¥8,000～ / 時間</div>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎭</div>
                    <h3>プライベートテイスティング</h3>
                    <p>世界各国の希少なコーヒーを専門スタッフの解説付きでお楽しみいただけます。</p>
                    <ul>
                        <li>希少豆5種類のテイスティング</li>
                        <li>専門家による解説</li>
                        <li>ペアリングスイーツ付き</li>
                    </ul>
                    <div class="service-price">¥12,000 / 人</div>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎪</div>
                    <h3>イベント・パーティー</h3>
                    <p>特別な日のお祝いやビジネスイベントを、最高級の空間で演出いたします。</p>
                    <ul>
                        <li>貸切対応（20-50名様）</li>
                        <li>オリジナルメニュー作成</li>
                        <li>装飾・演出サービス</li>
                    </ul>
                    <div class="service-price">お見積もり</div>
                </div>
            </div>
        </div>
    </section>

    <section id="reservation" class="reservation">
        <div class="container">
            <h2 class="section-title">Reservation</h2>
            <div class="reservation-content">
                <div class="reservation-info">
                    <h3>Café Prestige</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">住所</span>
                            <span class="info-value">〒107-0052 東京都港区赤坂9-7-1 ミッドタウン・タワー 52F</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">電話</span>
                            <span class="info-value">03-6234-5678</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">営業時間</span>
                            <span class="info-value">10:00 - 22:00（L.O. 21:30）</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">定休日</span>
                            <span class="info-value">無休</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">ドレスコード</span>
                            <span class="info-value">スマートカジュアル</span>
                        </div>
                    </div>
                </div>
                <div class="reservation-form">
                    <h4>ご予約フォーム</h4>
                    <form>
                        <div class="form-group">
                            <label>お名前</label>
                            <input type="text" required>
                        </div>
                        <div class="form-group">
                            <label>お電話番号</label>
                            <input type="tel" required>
                        </div>
                        <div class="form-group">
                            <label>ご希望日時</label>
                            <input type="datetime-local" required>
                        </div>
                        <div class="form-group">
                            <label>人数</label>
                            <select required>
                                <option value="">選択してください</option>
                                <option value="1">1名様</option>
                                <option value="2">2名様</option>
                                <option value="3">3名様</option>
                                <option value="4">4名様</option>
                                <option value="5+">5名様以上</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>ご要望</label>
                            <textarea placeholder="特別なご要望がございましたらお書きください"></textarea>
                        </div>
                        <button type="submit" class="submit-button">予約を送信</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>Café Prestige</h3>
                    <p>Ultimate Luxury Experience</p>
                </div>
                <div class="footer-contact">
                    <p>TEL: 03-6234-5678</p>
                    <p>EMAIL: info@cafe-prestige.jp</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Café Prestige. All Rights Reserved.</p>
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

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;700&family=Lato:wght@300;400;700&display=swap');

body {
    font-family: 'Lato', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #2c2c2c;
    background-color: #fafafa;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(40, 40, 40, 0.95));
    backdrop-filter: blur(15px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 4px 30px rgba(0,0,0,0.3);
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
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    font-weight: 400;
    color: #d4af37;
    letter-spacing: 2px;
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
    background-color: #d4af37;
    margin: 3px 0;
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 3rem;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 300;
    transition: all 0.3s;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.nav-menu a:hover {
    color: #d4af37;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
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
    z-index: -2;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
    z-index: -1;
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 1;
    max-width: 800px;
}

.hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    letter-spacing: 3px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
    color: #d4af37;
}

.hero-subtitle {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 1rem;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
}

.hero-description {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 3rem;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
}

.cta-button {
    padding: 1.2rem 3rem;
    font-size: 1.1rem;
    background: linear-gradient(135deg, #d4af37, #f4d03f);
    color: #2c2c2c;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.6);
}

/* Experience Section */
.experience {
    padding: 120px 0;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
}

.section-title {
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 3.5rem;
    font-weight: 400;
    color: #2c2c2c;
    margin-bottom: 4rem;
    letter-spacing: 2px;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(135deg, #d4af37, #f4d03f);
}

.experience-grid {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    margin-top: 6rem;
}

.experience-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.experience-item.reverse {
    direction: rtl;
}

.experience-item.reverse > * {
    direction: ltr;
}

.experience-image {
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    transition: transform 0.3s;
}

.experience-image:hover {
    transform: scale(1.05);
}

.experience-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

.experience-content h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    color: #2c2c2c;
    margin-bottom: 1.5rem;
    font-weight: 400;
}

.experience-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
}

/* Collection Section */
.collection {
    padding: 120px 0;
    background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
    color: white;
}

.collection .section-title {
    color: #d4af37;
}

.collection-tabs {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 4rem 0;
}

.tab-button {
    padding: 1rem 2rem;
    background: transparent;
    color: white;
    border: 2px solid #d4af37;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
}

.tab-button.active,
.tab-button:hover {
    background: linear-gradient(135deg, #d4af37, #f4d03f);
    color: #2c2c2c;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.collection-content {
    display: none;
}

.collection-content.active {
    display: block;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.menu-item-luxury {
    background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    transition: transform 0.3s;
    position: relative;
    border: 1px solid rgba(212, 175, 55, 0.2);
}

.menu-item-luxury:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0,0,0,0.4);
}

.item-badge {
    position: absolute;
    top: -10px;
    right: 20px;
    background: linear-gradient(135deg, #d4af37, #f4d03f);
    color: #2c2c2c;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
}

.menu-item-luxury h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: #d4af37;
    margin-bottom: 1rem;
    font-weight: 400;
}

.menu-item-luxury p {
    color: #ccc;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.price {
    font-size: 1.3rem;
    font-weight: 700;
    color: #d4af37;
}

/* Private Section */
.private {
    padding: 120px 0;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
}

.private-services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 4rem;
    margin-top: 4rem;
}

.service-card {
    background: white;
    padding: 3rem;
    border-radius: 25px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s;
    border: 2px solid transparent;
}

.service-card:hover {
    transform: translateY(-10px);
    border-color: #d4af37;
    box-shadow: 0 30px 80px rgba(0,0,0,0.15);
}

.service-icon {
    font-size: 4rem;
    margin-bottom: 2rem;
}

.service-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: #2c2c2c;
    margin-bottom: 1.5rem;
    font-weight: 400;
}

.service-card p {
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.8;
}

.service-card ul {
    list-style: none;
    margin-bottom: 2rem;
    text-align: left;
}

.service-card li {
    color: #666;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
}

.service-card li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #d4af37;
    font-weight: bold;
}

.service-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #d4af37;
}

/* Reservation Section */
.reservation {
    padding: 120px 0;
    background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
    color: white;
}

.reservation .section-title {
    color: #d4af37;
}

.reservation-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    margin-top: 4rem;
}

.reservation-info h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: #d4af37;
    margin-bottom: 2rem;
    font-weight: 400;
}

.info-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.info-item {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem;
    align-items: start;
}

.info-label {
    color: #d4af37;
    font-weight: 500;
}

.info-value {
    color: #ccc;
}

.reservation-form {
    background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
    padding: 3rem;
    border-radius: 25px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

.reservation-form h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: #d4af37;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 400;
}

.form-group {
    margin-bottom: 2rem;
}

.form-group label {
    display: block;
    color: #d4af37;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(212, 175, 55, 0.3);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
}

.form-group textarea {
    height: 120px;
    resize: vertical;
}

.submit-button {
    width: 100%;
    padding: 1.2rem;
    background: linear-gradient(135deg, #d4af37, #f4d03f);
    color: #2c2c2c;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.submit-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
}

/* Footer */
.footer {
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    color: white;
    padding: 60px 0 30px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
}

.footer-brand h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: #d4af37;
    margin-bottom: 0.5rem;
    font-weight: 400;
    letter-spacing: 2px;
}

.footer-brand p {
    font-size: 1rem;
    opacity: 0.8;
    letter-spacing: 1px;
}

.footer-contact {
    text-align: right;
}

.footer-contact p {
    margin-bottom: 0.5rem;
    color: #ccc;
}

.footer-bottom {
    text-align: center;
    padding-top: 3rem;
    border-top: 1px solid rgba(212, 175, 55, 0.2);
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
        background: linear-gradient(135deg, rgba(20, 20, 20, 0.98), rgba(40, 40, 40, 0.98));
        flex-direction: column;
        padding: 2rem 0;
        backdrop-filter: blur(15px);
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        font-size: 1.4rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .experience-item {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .experience-item.reverse {
        direction: ltr;
    }
    
    .collection-tabs {
        flex-direction: column;
        align-items: center;
    }
    
    .reservation-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }
    
    .footer-contact {
        text-align: center;
    }
    
    .section-title {
        font-size: 2.5rem;
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

// 予約セクションへのスクロール
function scrollToReservation() {
    const target = document.querySelector('#reservation');
    if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// タブ切り替え機能
function showTab(tabName) {
    // すべてのタブコンテンツを非表示
    document.querySelectorAll('.collection-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // すべてのタブボタンからactiveクラスを削除
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // 選択されたタブコンテンツを表示
    document.getElementById(tabName).classList.add('active');
    
    // クリックされたタブボタンにactiveクラスを追加
    event.target.classList.add('active');
}

// パララックス効果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-image');
    const speed = 0.3;
    
    if (parallax) {
        parallax.style.transform = \`translateY(\${scrolled * speed}px)\`;
    }
    
    // ヘッダーの背景透明度調整
    const header = document.querySelector('.header');
    if (scrolled > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.98), rgba(40, 40, 40, 0.98))';
    } else {
        header.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(40, 40, 40, 0.95))';
    }
});

// フォーム送信処理
document.querySelector('.reservation-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('ご予約を承りました。確認のお電話をいたします。');
});

// メニューアイテムのホバーエフェクト
document.querySelectorAll('.menu-item-luxury').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});`
  }
}