import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const hotelBusinessTemplate: WebTemplate = {
  id: 'hotel-business',
  title: 'ホテル - ビジネス',
  category: TEMPLATE_CATEGORIES.HOTEL,
  description: '機能的でモダンなビジネスホテル向けWebサイトテンプレート',
  thumbnail: '/template-images/hotel-business.jpg',
  features: [
    'オンライン予約',
    '会議室予約',
    'ビジネスサービス',
    '朝食情報',
    'アクセスマップ'
  ],
  tags: ['ホテル', 'ビジネス', '出張', '会議室', '予約'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ビジネスホテル東京 - 快適なビジネスステイを</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1>BUSINESS HOTEL</h1>
                    <span class="subtitle">TOKYO</span>
                </div>
                <button class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav class="main-nav" id="main-nav">
                    <ul>
                        <li><a href="#rooms">客室</a></li>
                        <li><a href="#services">サービス</a></li>
                        <li><a href="#meeting">会議室</a></li>
                        <li><a href="#access">アクセス</a></li>
                        <li class="nav-reserve"><a href="#reservation">予約</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section class="hero">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=600&fit=crop" alt="ホテル外観">
        <div class="hero-content">
            <h2>ビジネスの成功をサポート</h2>
            <p>東京駅徒歩5分。快適な滞在をお約束します。</p>
            <div class="hero-features">
                <div class="feature">✓ 無料Wi-Fi</div>
                <div class="feature">✓ 朝食付き</div>
                <div class="feature">✓ 駅近</div>
            </div>
        </div>
    </section>

    <section class="quick-booking">
        <div class="container">
            <div class="booking-form">
                <h3>空室検索・予約</h3>
                <div class="form-row">
                    <div class="form-group">
                        <label>チェックイン</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>チェックアウト</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>人数</label>
                        <select class="form-control">
                            <option>1名</option>
                            <option>2名</option>
                        </select>
                    </div>
                    <button class="btn-search">検索</button>
                </div>
                <p class="best-price">🌟 公式サイト限定！最低価格保証</p>
            </div>
        </div>
    </section>

    <section id="rooms" class="rooms">
        <div class="container">
            <h2 class="section-title">客室タイプ</h2>
            <div class="room-grid">
                <div class="room-card">
                    <div class="room-image">
                        <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop" alt="シングルルーム">
                        <div class="room-price">¥8,900〜/泊</div>
                    </div>
                    <div class="room-info">
                        <h3>シングルルーム</h3>
                        <p>14㎡ | セミダブルベッド</p>
                        <ul class="room-amenities">
                            <li>✓ 無料Wi-Fi</li>
                            <li>✓ デスク・チェア</li>
                            <li>✓ ユニットバス</li>
                            <li>✓ 冷蔵庫</li>
                        </ul>
                        <button class="btn-book">予約する</button>
                    </div>
                </div>
                <div class="room-card">
                    <div class="room-image">
                        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop" alt="ダブルルーム">
                        <div class="room-price">¥12,900〜/泊</div>
                    </div>
                    <div class="room-info">
                        <h3>ダブルルーム</h3>
                        <p>18㎡ | ダブルベッド</p>
                        <ul class="room-amenities">
                            <li>✓ 無料Wi-Fi</li>
                            <li>✓ ソファ付き</li>
                            <li>✓ バス・トイレ別</li>
                            <li>✓ 電子レンジ</li>
                        </ul>
                        <button class="btn-book">予約する</button>
                    </div>
                </div>
                <div class="room-card">
                    <div class="room-image">
                        <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop" alt="ツインルーム">
                        <div class="room-price">¥14,900〜/泊</div>
                    </div>
                    <div class="room-info">
                        <h3>ツインルーム</h3>
                        <p>22㎡ | シングルベッド×2</p>
                        <ul class="room-amenities">
                            <li>✓ 無料Wi-Fi</li>
                            <li>✓ 広めのデスク</li>
                            <li>✓ バス・トイレ別</li>
                            <li>✓ コーヒーメーカー</li>
                        </ul>
                        <button class="btn-book">予約する</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">ホテルサービス</h2>
            <div class="services-grid">
                <div class="service-item">
                    <div class="service-icon">🍳</div>
                    <h3>朝食バイキング</h3>
                    <p>和洋30種類以上のメニュー</p>
                    <p class="service-time">6:30 - 10:00</p>
                    <p class="service-price">¥1,200</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">📶</div>
                    <h3>高速Wi-Fi</h3>
                    <p>全館無料・高速インターネット</p>
                    <p class="service-time">24時間</p>
                    <p class="service-price">無料</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">🧺</div>
                    <h3>ランドリーサービス</h3>
                    <p>コインランドリー完備</p>
                    <p class="service-time">24時間</p>
                    <p class="service-price">¥300〜</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">💼</div>
                    <h3>ビジネスコーナー</h3>
                    <p>PC・プリンター利用可能</p>
                    <p class="service-time">24時間</p>
                    <p class="service-price">無料</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">🚗</div>
                    <h3>駐車場</h3>
                    <p>予約制・屋内駐車場</p>
                    <p class="service-time">24時間</p>
                    <p class="service-price">¥1,500/日</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">📦</div>
                    <h3>宅配便受付</h3>
                    <p>荷物の発送・受取サービス</p>
                    <p class="service-time">7:00 - 21:00</p>
                    <p class="service-price">実費</p>
                </div>
            </div>
        </div>
    </section>

    <section id="meeting" class="meeting">
        <div class="container">
            <h2 class="section-title">会議室・ミーティングスペース</h2>
            <div class="meeting-content">
                <div class="meeting-image">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop" alt="会議室">
                </div>
                <div class="meeting-info">
                    <h3>ビジネスニーズに対応</h3>
                    <p>プレゼンテーション、会議、セミナーなど様々な用途でご利用いただけます。</p>
                    <div class="meeting-features">
                        <div class="meeting-feature">
                            <h4>会議室A（大）</h4>
                            <p>最大30名 | プロジェクター完備</p>
                            <p class="price">¥5,000/時間</p>
                        </div>
                        <div class="meeting-feature">
                            <h4>会議室B（中）</h4>
                            <p>最大15名 | モニター完備</p>
                            <p class="price">¥3,000/時間</p>
                        </div>
                        <div class="meeting-feature">
                            <h4>ミーティングルーム</h4>
                            <p>最大6名 | ホワイトボード完備</p>
                            <p class="price">¥1,500/時間</p>
                        </div>
                    </div>
                    <button class="btn-primary">会議室を予約</button>
                </div>
            </div>
        </div>
    </section>

    <section class="plans">
        <div class="container">
            <h2 class="section-title">お得なプラン</h2>
            <div class="plan-grid">
                <div class="plan-card">
                    <div class="plan-badge">人気No.1</div>
                    <h3>連泊プラン</h3>
                    <p>3泊以上で15%OFF</p>
                    <ul>
                        <li>✓ 朝食付き</li>
                        <li>✓ レイトチェックアウト</li>
                        <li>✓ ランドリー券付き</li>
                    </ul>
                    <button class="btn-outline">詳細を見る</button>
                </div>
                <div class="plan-card">
                    <h3>早割プラン</h3>
                    <p>14日前予約で20%OFF</p>
                    <ul>
                        <li>✓ 朝食付き</li>
                        <li>✓ キャンセル料無料（7日前まで）</li>
                        <li>✓ アメニティグレードアップ</li>
                    </ul>
                    <button class="btn-outline">詳細を見る</button>
                </div>
                <div class="plan-card">
                    <h3>QUOカード付きプラン</h3>
                    <p>出張応援！QUOカード付き</p>
                    <ul>
                        <li>✓ QUOカード1,000円分</li>
                        <li>✓ 朝食付き</li>
                        <li>✓ VOD見放題</li>
                    </ul>
                    <button class="btn-outline">詳細を見る</button>
                </div>
            </div>
        </div>
    </section>

    <section id="access" class="access">
        <div class="container">
            <h2 class="section-title">アクセス</h2>
            <div class="access-content">
                <div class="access-map">
                    <div class="map-placeholder">
                        <img src="https://images.unsplash.com/photo-1536098561742-8977fc3de315?w=600&h=400&fit=crop" alt="地図">
                    </div>
                </div>
                <div class="access-info">
                    <h3>ビジネスホテル東京</h3>
                    <dl>
                        <dt>住所</dt>
                        <dd>〒100-0005 東京都千代田区丸の内1-1-1</dd>
                        <dt>電話</dt>
                        <dd>03-1234-5678</dd>
                        <dt>FAX</dt>
                        <dd>03-1234-5679</dd>
                        <dt>メール</dt>
                        <dd>info@businesshotel-tokyo.jp</dd>
                    </dl>
                    <div class="access-routes">
                        <h4>交通アクセス</h4>
                        <ul>
                            <li>🚃 JR東京駅 八重洲口より徒歩5分</li>
                            <li>🚇 東京メトロ大手町駅 B1出口より徒歩3分</li>
                            <li>✈️ 羽田空港より電車で30分</li>
                            <li>✈️ 成田空港より電車で60分</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact">
        <div class="container">
            <h2 class="section-title">お問い合わせ</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>ご予約・お問い合わせ</h3>
                    <div class="contact-item">
                        <strong>電話受付</strong>
                        <p>24時間対応</p>
                        <a href="tel:03-1234-5678" class="phone-link">03-1234-5678</a>
                    </div>
                    <div class="contact-item">
                        <strong>メール</strong>
                        <p>お気軽にお問い合わせください</p>
                        <a href="mailto:info@businesshotel-tokyo.jp">info@businesshotel-tokyo.jp</a>
                    </div>
                    <div class="contact-item">
                        <strong>よくある質問</strong>
                        <p>お問い合わせ前にご確認ください</p>
                        <a href="#" class="btn-outline">FAQ</a>
                    </div>
                </div>
                <div class="contact-form">
                    <h3>お問い合わせフォーム</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" placeholder="お名前" class="form-control">
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="メールアドレス" class="form-control">
                        </div>
                        <div class="form-group">
                            <select class="form-control">
                                <option>お問い合わせ内容を選択</option>
                                <option>宿泊予約について</option>
                                <option>会議室について</option>
                                <option>その他</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="お問い合わせ内容" rows="5" class="form-control"></textarea>
                        </div>
                        <button type="submit" class="btn-primary">送信する</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>ビジネスホテル東京</h3>
                    <p>ビジネスの成功をサポートする、快適な滞在をお約束します。</p>
                </div>
                <div class="footer-section">
                    <h4>リンク</h4>
                    <ul>
                        <li><a href="#">客室案内</a></li>
                        <li><a href="#">料金表</a></li>
                        <li><a href="#">会員登録</a></li>
                        <li><a href="#">企業情報</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>サポート</h4>
                    <ul>
                        <li><a href="#">よくある質問</a></li>
                        <li><a href="#">キャンセルポリシー</a></li>
                        <li><a href="#">プライバシーポリシー</a></li>
                        <li><a href="#">利用規約</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Business Hotel Tokyo. All rights reserved.</p>
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

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans JP', sans-serif;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo h1 {
    font-size: 24px;
    color: #1e4d8b;
    font-weight: bold;
    letter-spacing: 1px;
}

.subtitle {
    font-size: 12px;
    color: #666;
    letter-spacing: 2px;
}

.main-nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

.main-nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.main-nav a:hover {
    color: #1e4d8b;
}

.nav-reserve a {
    background: #1e4d8b;
    color: white !important;
    padding: 10px 25px;
    border-radius: 5px;
}

.nav-reserve a:hover {
    background: #163a6b;
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
}

.hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background: #333;
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

/* Hero */
.hero {
    position: relative;
    height: 500px;
    overflow: hidden;
}

.hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 2;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    z-index: 1;
}

.hero-content h2 {
    font-size: 42px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
    font-size: 18px;
    margin-bottom: 30px;
}

.hero-features {
    display: flex;
    gap: 30px;
    justify-content: center;
}

.hero-features .feature {
    background: rgba(255,255,255,0.2);
    padding: 10px 20px;
    border-radius: 5px;
    backdrop-filter: blur(10px);
}

/* Quick Booking */
.quick-booking {
    background: #f5f5f5;
    padding: 40px 0;
}

.booking-form {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.booking-form h3 {
    color: #1e4d8b;
    margin-bottom: 20px;
}

.form-row {
    display: flex;
    gap: 20px;
    align-items: flex-end;
}

.form-group {
    flex: 1;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #666;
    font-size: 14px;
}

.form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
}

.btn-search {
    background: #ff6b35;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-search:hover {
    background: #e55a2b;
}

.best-price {
    text-align: center;
    margin-top: 20px;
    color: #ff6b35;
    font-weight: bold;
}

/* Common Button Styles */
.btn-primary {
    background: #1e4d8b;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary:hover {
    background: #163a6b;
    transform: translateY(-2px);
}

.btn-outline {
    background: transparent;
    color: #1e4d8b;
    padding: 10px 25px;
    border: 2px solid #1e4d8b;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-block;
}

.btn-outline:hover {
    background: #1e4d8b;
    color: white;
}

.btn-book {
    background: #ff6b35;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-book:hover {
    background: #e55a2b;
}

/* Sections */
section {
    padding: 60px 0;
}

.section-title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 40px;
    color: #1e4d8b;
}

/* Rooms */
.rooms {
    background: white;
}

.room-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.room-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.room-card:hover {
    transform: translateY(-5px);
}

.room-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.room-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.room-price {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: #ff6b35;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    font-weight: bold;
}

.room-info {
    padding: 25px;
}

.room-info h3 {
    margin-bottom: 10px;
    color: #1e4d8b;
}

.room-info p {
    color: #666;
    margin-bottom: 15px;
    font-size: 14px;
}

.room-amenities {
    list-style: none;
    margin-bottom: 20px;
}

.room-amenities li {
    color: #666;
    font-size: 14px;
    margin-bottom: 5px;
}

/* Services */
.services {
    background: #f5f5f5;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
}

.service-item {
    background: white;
    padding: 30px 20px;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s;
}

.service-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.service-icon {
    font-size: 36px;
    margin-bottom: 15px;
}

.service-item h3 {
    color: #1e4d8b;
    margin-bottom: 10px;
    font-size: 18px;
}

.service-item p {
    color: #666;
    font-size: 14px;
    margin-bottom: 5px;
}

.service-time {
    color: #ff6b35;
    font-weight: bold;
}

.service-price {
    color: #1e4d8b;
    font-weight: bold;
    font-size: 16px;
}

/* Meeting */
.meeting {
    background: white;
}

.meeting-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.meeting-image img {
    width: 100%;
    border-radius: 10px;
}

.meeting-info h3 {
    color: #1e4d8b;
    font-size: 28px;
    margin-bottom: 20px;
}

.meeting-info p {
    color: #666;
    margin-bottom: 30px;
}

.meeting-features {
    margin-bottom: 30px;
}

.meeting-feature {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 15px;
}

.meeting-feature h4 {
    color: #1e4d8b;
    margin-bottom: 5px;
}

.meeting-feature p {
    color: #666;
    font-size: 14px;
    margin-bottom: 5px;
}

.meeting-feature .price {
    color: #ff6b35;
    font-weight: bold;
}

/* Plans */
.plans {
    background: #f5f5f5;
}

.plan-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.plan-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    position: relative;
    transition: transform 0.3s;
}

.plan-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.plan-badge {
    position: absolute;
    top: -10px;
    right: 20px;
    background: #ff6b35;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
}

.plan-card h3 {
    color: #1e4d8b;
    margin-bottom: 10px;
}

.plan-card p {
    color: #ff6b35;
    font-weight: bold;
    margin-bottom: 20px;
}

.plan-card ul {
    list-style: none;
    margin-bottom: 20px;
}

.plan-card ul li {
    color: #666;
    margin-bottom: 10px;
}

/* Access */
.access {
    background: white;
}

.access-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.map-placeholder {
    height: 400px;
    background: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
}

.map-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.access-info h3 {
    color: #1e4d8b;
    font-size: 24px;
    margin-bottom: 20px;
}

.access-info dl {
    margin-bottom: 30px;
}

.access-info dt {
    color: #1e4d8b;
    font-weight: bold;
    margin-top: 15px;
}

.access-info dd {
    color: #666;
    margin-left: 0;
    margin-bottom: 10px;
}

.access-routes h4 {
    color: #1e4d8b;
    margin-bottom: 15px;
}

.access-routes ul {
    list-style: none;
}

.access-routes li {
    color: #666;
    margin-bottom: 10px;
    padding-left: 10px;
}

/* Contact */
.contact {
    background: #f5f5f5;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.contact-info h3 {
    color: #1e4d8b;
    margin-bottom: 30px;
}

.contact-item {
    margin-bottom: 30px;
}

.contact-item strong {
    color: #1e4d8b;
    display: block;
    margin-bottom: 5px;
}

.contact-item p {
    color: #666;
    margin-bottom: 10px;
}

.phone-link {
    color: #ff6b35;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
}

.contact-form h3 {
    color: #1e4d8b;
    margin-bottom: 20px;
}

.contact-form .form-group {
    margin-bottom: 20px;
}

.contact-form .form-control {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.contact-form textarea.form-control {
    resize: vertical;
}

/* Footer */
.footer {
    background: #1e4d8b;
    color: white;
    padding: 50px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 30px;
}

.footer-section h3 {
    margin-bottom: 20px;
}

.footer-section h4 {
    margin-bottom: 15px;
}

.footer-section p {
    color: #ccc;
    line-height: 1.8;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: white;
}

.footer-bottom {
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
    text-align: center;
    color: #ccc;
}

/* Responsive Design */
@media (max-width: 768px) {
    .header-content {
        position: relative;
    }
    
    .hamburger {
        display: flex;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    
    .main-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .main-nav.active {
        display: block;
    }
    
    .main-nav ul {
        flex-direction: column;
        padding: 20px;
        gap: 15px;
    }
    
    .hero-content h2 {
        font-size: 28px;
    }
    
    .hero-features {
        flex-direction: column;
        gap: 10px;
    }
    
    .form-row {
        flex-direction: column;
    }
    
    .room-grid,
    .services-grid,
    .plan-grid {
        grid-template-columns: 1fr;
    }
    
    .meeting-content,
    .access-content,
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
}`,
    js: `// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

if (hamburger && mainNav) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // メニューリンクをクリックしたら閉じる
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
}

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 予約ボタン
document.querySelectorAll('.btn-book, .btn-search').forEach(button => {
    button.addEventListener('click', function() {
        alert('予約システムに接続します（実装予定）');
    });
});

// 会議室予約
document.querySelector('.meeting .btn-primary')?.addEventListener('click', function() {
    alert('会議室予約フォームを開きます（実装予定）');
});

// お問い合わせフォーム
document.querySelector('.contact-form form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('お問い合わせを送信しました（実装予定）');
});

// プラン詳細
document.querySelectorAll('.plan-card .btn-outline').forEach(button => {
    button.addEventListener('click', function() {
        alert('プランの詳細ページへ遷移します（実装予定）');
    });
});

// FAQ
document.querySelector('.contact-item .btn-outline')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('FAQページへ遷移します（実装予定）');
});`
  }
}