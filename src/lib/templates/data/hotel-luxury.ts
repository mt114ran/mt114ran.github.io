import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const hotelLuxuryTemplate: WebTemplate = {
  id: 'hotel-luxury',
  title: 'ホテル - ラグジュアリー',
  category: TEMPLATE_CATEGORIES.HOTEL,
  description: '高級感と洗練されたデザインの5つ星ホテル向けWebサイトテンプレート',
  thumbnail: '/template-images/hotel-luxury.jpg',
  features: [
    '客室予約システムUI',
    'フォトギャラリー',
    'レストラン&バー紹介',
    '施設案内',
    '多言語対応'
  ],
  tags: ['ホテル', 'ラグジュアリー', '高級', '宿泊', '予約'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grand Luxe Hotel Tokyo - 極上のおもてなしを</title>
</head>
<body>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <div class="header-info">
                    <span>📞 +81 3-1234-5678</span>
                    <span>📧 info@grandluxetokyo.com</span>
                    <div class="language-selector">
                        <select>
                            <option>日本語</option>
                            <option>English</option>
                            <option>中文</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-main">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <h1>GRAND LUXE</h1>
                        <span class="subtitle">HOTEL TOKYO</span>
                    </div>
                    <button class="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <nav class="main-nav" id="main-nav">
                        <ul>
                            <li><a href="#rooms">客室</a></li>
                            <li><a href="#dining">ダイニング</a></li>
                            <li><a href="#facilities">施設</a></li>
                            <li><a href="#events">イベント</a></li>
                            <li><a href="#access">アクセス</a></li>
                            <li class="nav-reserve"><a href="#reservation">予約</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-slider">
            <div class="hero-slide active">
                <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=800&fit=crop" alt="ホテル外観">
                <div class="hero-content">
                    <h2>極上のおもてなし</h2>
                    <p>東京の中心で、特別な時間をお過ごしください</p>
                    <button class="btn-primary">空室を検索</button>
                </div>
            </div>
        </div>
    </section>

    <section class="booking-bar">
        <div class="container">
            <div class="booking-form">
                <div class="form-group">
                    <label>チェックイン</label>
                    <input type="date" class="form-control">
                </div>
                <div class="form-group">
                    <label>チェックアウト</label>
                    <input type="date" class="form-control">
                </div>
                <div class="form-group">
                    <label>客室</label>
                    <select class="form-control">
                        <option>1室</option>
                        <option>2室</option>
                        <option>3室以上</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>ゲスト</label>
                    <select class="form-control">
                        <option>大人1名</option>
                        <option>大人2名</option>
                        <option>大人3名以上</option>
                    </select>
                </div>
                <button class="btn-search">検索</button>
            </div>
        </div>
    </section>

    <section id="rooms" class="rooms">
        <div class="container">
            <h2 class="section-title">客室のご案内</h2>
            <p class="section-subtitle">すべての客室から東京の絶景をお楽しみいただけます</p>
            <div class="room-grid">
                <div class="room-card">
                    <div class="room-image">
                        <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop" alt="デラックスルーム">
                        <div class="room-badge">人気</div>
                    </div>
                    <div class="room-info">
                        <h3>デラックスルーム</h3>
                        <p class="room-size">45㎡ | キングベッド | 最大2名</p>
                        <p class="room-description">東京タワービューの広々とした客室。高級アメニティ完備。</p>
                        <div class="room-price">
                            <span class="price-label">1泊</span>
                            <span class="price-amount">¥65,000〜</span>
                        </div>
                        <button class="btn-outline">詳細を見る</button>
                    </div>
                </div>
                <div class="room-card">
                    <div class="room-image">
                        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop" alt="エグゼクティブスイート">
                    </div>
                    <div class="room-info">
                        <h3>エグゼクティブスイート</h3>
                        <p class="room-size">85㎡ | キングベッド | 最大4名</p>
                        <p class="room-description">リビングルーム付きの豪華なスイート。専用バトラーサービス。</p>
                        <div class="room-price">
                            <span class="price-label">1泊</span>
                            <span class="price-amount">¥120,000〜</span>
                        </div>
                        <button class="btn-outline">詳細を見る</button>
                    </div>
                </div>
                <div class="room-card">
                    <div class="room-image">
                        <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop" alt="プレジデンシャルスイート">
                    </div>
                    <div class="room-info">
                        <h3>プレジデンシャルスイート</h3>
                        <p class="room-size">150㎡ | 2ベッドルーム | 最大6名</p>
                        <p class="room-description">最上階の特別なスイート。プライベートダイニング可能。</p>
                        <div class="room-price">
                            <span class="price-label">1泊</span>
                            <span class="price-amount">¥350,000〜</span>
                        </div>
                        <button class="btn-outline">詳細を見る</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="dining" class="dining">
        <div class="container">
            <h2 class="section-title">ダイニング</h2>
            <p class="section-subtitle">世界の美食をお楽しみください</p>
            <div class="dining-grid">
                <div class="dining-card">
                    <div class="dining-image">
                        <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=600&fit=crop" alt="フレンチレストラン">
                    </div>
                    <div class="dining-info">
                        <h3>Le Ciel - フレンチレストラン</h3>
                        <p>ミシュラン2つ星シェフによる本格フレンチ</p>
                        <p class="dining-hours">ディナー: 18:00 - 22:00</p>
                    </div>
                </div>
                <div class="dining-card">
                    <div class="dining-image">
                        <img src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&h=600&fit=crop" alt="日本料理">
                    </div>
                    <div class="dining-info">
                        <h3>雅 - 日本料理</h3>
                        <p>四季折々の食材を使った会席料理</p>
                        <p class="dining-hours">昼: 11:30 - 14:30 / 夜: 17:30 - 22:00</p>
                    </div>
                </div>
                <div class="dining-card">
                    <div class="dining-image">
                        <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=600&fit=crop" alt="バーラウンジ">
                    </div>
                    <div class="dining-info">
                        <h3>Sky Bar - スカイバー</h3>
                        <p>最上階から東京の夜景を一望</p>
                        <p class="dining-hours">17:00 - 深夜2:00</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="facilities" class="facilities">
        <div class="container">
            <h2 class="section-title">施設・サービス</h2>
            <div class="facilities-grid">
                <div class="facility-item">
                    <div class="facility-icon">🏊</div>
                    <h3>インフィニティプール</h3>
                    <p>25階の屋外プール。東京の景色を楽しみながら。</p>
                </div>
                <div class="facility-item">
                    <div class="facility-icon">💆</div>
                    <h3>スパ&ウェルネス</h3>
                    <p>世界クラスのトリートメントで究極のリラクゼーション。</p>
                </div>
                <div class="facility-item">
                    <div class="facility-icon">🏋️</div>
                    <h3>フィットネスセンター</h3>
                    <p>最新機器を完備。パーソナルトレーナー常駐。</p>
                </div>
                <div class="facility-item">
                    <div class="facility-icon">💼</div>
                    <h3>ビジネスセンター</h3>
                    <p>24時間利用可能。会議室・秘書サービス完備。</p>
                </div>
                <div class="facility-item">
                    <div class="facility-icon">🚗</div>
                    <h3>バレーパーキング</h3>
                    <p>お車でお越しのお客様へ専門スタッフがサポート。</p>
                </div>
                <div class="facility-item">
                    <div class="facility-icon">👨‍💼</div>
                    <h3>コンシェルジュ</h3>
                    <p>観光案内から特別な手配まで何でもご相談ください。</p>
                </div>
            </div>
        </div>
    </section>

    <section id="events" class="events">
        <div class="container">
            <h2 class="section-title">イベント&ウェディング</h2>
            <p class="section-subtitle">人生の特別な瞬間を演出します</p>
            <div class="event-showcase">
                <div class="event-image">
                    <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=600&fit=crop" alt="ウェディング">
                </div>
                <div class="event-content">
                    <h3>ウェディング</h3>
                    <p>大切な日を最高の思い出に。専任プランナーが理想の結婚式を実現します。</p>
                    <ul class="event-features">
                        <li>✓ 最大500名収容の大宴会場</li>
                        <li>✓ チャペル・神殿完備</li>
                        <li>✓ オーダーメイドのお料理</li>
                        <li>✓ 専任ウェディングプランナー</li>
                    </ul>
                    <button class="btn-outline">資料請求</button>
                </div>
            </div>
        </div>
    </section>

    <section id="access" class="access">
        <div class="container">
            <h2 class="section-title">アクセス</h2>
            <div class="access-content">
                <div class="access-info">
                    <h3>Grand Luxe Hotel Tokyo</h3>
                    <table>
                        <tr>
                            <th>住所</th>
                            <td>〒100-0001 東京都千代田区千代田1-1-1</td>
                        </tr>
                        <tr>
                            <th>電話</th>
                            <td>+81 3-1234-5678</td>
                        </tr>
                        <tr>
                            <th>メール</th>
                            <td>info@grandluxetokyo.com</td>
                        </tr>
                        <tr>
                            <th>アクセス</th>
                            <td>
                                東京駅から徒歩5分<br>
                                羽田空港から車で30分<br>
                                成田空港から車で60分
                            </td>
                        </tr>
                    </table>
                    <div class="access-buttons">
                        <button class="btn-outline">地図アプリで開く</button>
                        <button class="btn-outline">空港送迎を予約</button>
                    </div>
                </div>
                <div class="access-map">
                    <div class="map-placeholder">
                        <p>インタラクティブマップ</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Grand Luxe Hotel Tokyo</h3>
                    <p>極上のおもてなしで、忘れられない滞在を。</p>
                    <div class="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>ホテル情報</h4>
                    <ul>
                        <li><a href="#">ホテルについて</a></li>
                        <li><a href="#">採用情報</a></li>
                        <li><a href="#">プレスリリース</a></li>
                        <li><a href="#">サステナビリティ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>ご予約</h4>
                    <ul>
                        <li><a href="#">客室予約</a></li>
                        <li><a href="#">レストラン予約</a></li>
                        <li><a href="#">スパ予約</a></li>
                        <li><a href="#">ギフト券</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>お問い合わせ</h4>
                    <ul>
                        <li><a href="#">よくある質問</a></li>
                        <li><a href="#">お問い合わせ</a></li>
                        <li><a href="#">プライバシーポリシー</a></li>
                        <li><a href="#">利用規約</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Grand Luxe Hotel Tokyo. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

* {
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
    background: #1a1a1a;
    color: white;
    padding: 10px 0;
    font-size: 14px;
}

.header-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-info span {
    margin-right: 20px;
}

.language-selector select {
    background: transparent;
    color: white;
    border: 1px solid #444;
    padding: 5px 10px;
    border-radius: 3px;
}

.header-main {
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
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    color: #b8860b;
    margin: 0;
    letter-spacing: 3px;
}

.subtitle {
    font-size: 12px;
    letter-spacing: 2px;
    color: #666;
    display: block;
    margin-top: 5px;
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
    color: #b8860b;
}

.nav-reserve a {
    background: #b8860b;
    color: white !important;
    padding: 10px 25px;
    border-radius: 3px;
}

.nav-reserve a:hover {
    background: #996f09;
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
    height: 80vh;
    min-height: 600px;
    overflow: hidden;
}

.hero-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s;
}

.hero-slide.active {
    opacity: 1;
}

.hero-slide img {
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

.hero-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 30px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Booking Bar */
.booking-bar {
    background: #f8f8f8;
    padding: 30px 0;
    margin-top: -60px;
    position: relative;
    z-index: 10;
}

.booking-form {
    background: white;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
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
    font-weight: 500;
    color: #666;
}

.form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 14px;
}

.btn-search {
    background: #b8860b;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-search:hover {
    background: #996f09;
}

/* Common Button Styles */
.btn-primary {
    background: #b8860b;
    color: white;
    padding: 15px 40px;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary:hover {
    background: #996f09;
    transform: translateY(-2px);
}

.btn-outline {
    background: transparent;
    color: #b8860b;
    padding: 10px 25px;
    border: 2px solid #b8860b;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-outline:hover {
    background: #b8860b;
    color: white;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    text-align: center;
    margin-bottom: 15px;
    color: #1a1a1a;
}

.section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 50px;
    font-size: 16px;
}

/* Rooms */
.rooms {
    background: #f8f8f8;
}

.room-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.room-card {
    background: white;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.room-card:hover {
    transform: translateY(-5px);
}

.room-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.room-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.room-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #ff4444;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
}

.room-info {
    padding: 30px;
}

.room-info h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #1a1a1a;
}

.room-size {
    color: #666;
    font-size: 14px;
    margin-bottom: 15px;
}

.room-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

.room-price {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-bottom: 20px;
}

.price-label {
    color: #999;
    font-size: 14px;
}

.price-amount {
    font-size: 24px;
    font-weight: bold;
    color: #b8860b;
}

/* Dining */
.dining {
    background: white;
}

.dining-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.dining-card {
    background: white;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.dining-image {
    height: 250px;
    overflow: hidden;
}

.dining-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.dining-card:hover .dining-image img {
    transform: scale(1.1);
}

.dining-info {
    padding: 25px;
}

.dining-info h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #1a1a1a;
}

.dining-info p {
    color: #666;
    margin-bottom: 10px;
}

.dining-hours {
    font-size: 14px;
    color: #b8860b;
    font-weight: 500;
}

/* Facilities */
.facilities {
    background: #f8f8f8;
}

.facilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
}

.facility-item {
    text-align: center;
}

.facility-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.facility-item h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #1a1a1a;
}

.facility-item p {
    color: #666;
    line-height: 1.6;
}

/* Events */
.events {
    background: white;
}

.event-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.event-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
}

.event-content h3 {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    margin-bottom: 20px;
    color: #1a1a1a;
}

.event-content p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 30px;
}

.event-features {
    list-style: none;
    margin-bottom: 30px;
}

.event-features li {
    padding: 10px 0;
    color: #666;
}

/* Access */
.access {
    background: #f8f8f8;
}

.access-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.access-info h3 {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    margin-bottom: 30px;
    color: #1a1a1a;
}

.access-info table {
    width: 100%;
    margin-bottom: 30px;
}

.access-info th {
    text-align: left;
    padding: 15px;
    background: #f0f0f0;
    font-weight: 500;
    width: 120px;
}

.access-info td {
    padding: 15px;
    color: #666;
}

.access-buttons {
    display: flex;
    gap: 15px;
}

.map-placeholder {
    height: 450px;
    background: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: #999;
}

/* Footer */
.footer {
    background: #1a1a1a;
    color: white;
    padding: 60px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-section h3 {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    margin-bottom: 20px;
    color: #b8860b;
}

.footer-section h4 {
    font-size: 16px;
    margin-bottom: 20px;
    color: white;
}

.footer-section p {
    color: #999;
    line-height: 1.8;
    margin-bottom: 20px;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section a {
    color: #999;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #b8860b;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    background: #333;
    padding: 8px 15px;
    border-radius: 3px;
    transition: background 0.3s;
}

.social-links a:hover {
    background: #b8860b;
}

.footer-bottom {
    padding-top: 30px;
    border-top: 1px solid #333;
    text-align: center;
    color: #666;
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
        font-size: 32px;
    }
    
    .booking-form {
        flex-direction: column;
    }
    
    .room-grid,
    .dining-grid,
    .facilities-grid {
        grid-template-columns: 1fr;
    }
    
    .event-showcase {
        grid-template-columns: 1fr;
    }
    
    .access-content {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .social-links {
        justify-content: center;
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
            const headerHeight = document.querySelector('.header-main').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 予約フォーム
document.querySelector('.btn-search')?.addEventListener('click', function() {
    alert('予約検索システムに接続します（実装予定）');
});

document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', function() {
        const text = this.textContent;
        if (text.includes('詳細')) {
            alert('客室の詳細ページへ遷移します（実装予定）');
        } else if (text.includes('資料')) {
            alert('資料請求フォームへ遷移します（実装予定）');
        } else if (text.includes('地図')) {
            alert('地図アプリを開きます（実装予定）');
        } else if (text.includes('送迎')) {
            alert('空港送迎予約フォームへ遷移します（実装予定）');
        }
    });
});

// 言語切り替え
document.querySelector('.language-selector select')?.addEventListener('change', function() {
    alert('言語を' + this.value + 'に切り替えます（実装予定）');
});

// ヒーローセクションのアニメーション
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translate(-50%, -40%)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translate(-50%, -50%)';
        }, 100);
    }
});`
  }
}