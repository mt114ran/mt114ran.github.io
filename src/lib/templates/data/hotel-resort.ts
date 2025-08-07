import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const hotelResortTemplate: WebTemplate = {
  id: 'hotel-resort',
  title: 'ホテル - リゾート',
  category: TEMPLATE_CATEGORIES.HOTEL,
  description: '海辺のリゾートホテル向けの開放的なWebサイトテンプレート',
  thumbnail: '/template-images/hotel-resort.jpg',
  features: [
    'フォトギャラリー',
    'アクティビティ紹介',
    'ダイニング',
    'スパ&リラクゼーション',
    'ウェディング'
  ],
  tags: ['ホテル', 'リゾート', '観光', 'バケーション', '海'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ocean Paradise Resort - 楽園での特別な休日</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <span class="logo-icon">🌴</span>
                    <div>
                        <h1>Ocean Paradise</h1>
                        <span class="subtitle">RESORT & SPA</span>
                    </div>
                </div>
                <button class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav class="main-nav" id="main-nav">
                    <ul>
                        <li><a href="#stay">ご宿泊</a></li>
                        <li><a href="#dining">ダイニング</a></li>
                        <li><a href="#activities">アクティビティ</a></li>
                        <li><a href="#spa">スパ</a></li>
                        <li><a href="#wedding">ウェディング</a></li>
                        <li class="nav-reserve"><a href="#reservation">予約</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-video">
            <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&h=800&fit=crop" alt="リゾート風景">
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <h2>Welcome to Paradise</h2>
            <p>碧い海と白い砂浜、極上のリゾート体験を</p>
            <button class="btn-primary">今すぐ予約</button>
        </div>
    </section>

    <section class="intro">
        <div class="container">
            <div class="intro-content">
                <h2 class="section-title">Ocean Paradise Resort</h2>
                <p class="intro-text">
                    沖縄本島の西海岸に位置する当リゾートは、エメラルドグリーンの海と白い砂浜に囲まれた楽園です。
                    全室オーシャンビューの客室、世界各国の料理を楽しめるレストラン、
                    充実したマリンアクティビティと極上のスパで、忘れられない思い出をお作りください。
                </p>
                <div class="intro-features">
                    <div class="intro-feature">
                        <span class="feature-icon">🏖️</span>
                        <h3>プライベートビーチ</h3>
                        <p>1km続く白砂のビーチ</p>
                    </div>
                    <div class="intro-feature">
                        <span class="feature-icon">🏊</span>
                        <h3>インフィニティプール</h3>
                        <p>海と一体化した絶景プール</p>
                    </div>
                    <div class="intro-feature">
                        <span class="feature-icon">🍽️</span>
                        <h3>5つのレストラン</h3>
                        <p>多彩な美食体験</p>
                    </div>
                    <div class="intro-feature">
                        <span class="feature-icon">💆</span>
                        <h3>オーシャンスパ</h3>
                        <p>海を眺めながらの極上トリートメント</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="stay" class="stay">
        <div class="container">
            <h2 class="section-title">ご宿泊</h2>
            <p class="section-subtitle">全室オーシャンビューの贅沢な客室</p>
            <div class="room-showcase">
                <div class="room-item">
                    <div class="room-image">
                        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop" alt="オーシャンビュールーム">
                    </div>
                    <div class="room-details">
                        <h3>オーシャンビュールーム</h3>
                        <p>45㎡ | バルコニー付き | 最大3名</p>
                        <p class="room-description">
                            大きな窓から望む青い海。波の音を聞きながら過ごす贅沢な時間。
                        </p>
                        <div class="room-price">
                            <span>1泊2食付き</span>
                            <strong>¥35,000〜</strong>
                        </div>
                    </div>
                </div>
                <div class="room-item">
                    <div class="room-image">
                        <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop" alt="プレミアムスイート">
                    </div>
                    <div class="room-details">
                        <h3>プレミアムスイート</h3>
                        <p>85㎡ | プライベートプール付き | 最大4名</p>
                        <p class="room-description">
                            プライベートプール付きの特別なスイート。極上のプライベート空間。
                        </p>
                        <div class="room-price">
                            <span>1泊2食付き</span>
                            <strong>¥75,000〜</strong>
                        </div>
                    </div>
                </div>
                <div class="room-item">
                    <div class="room-image">
                        <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop" alt="ヴィラ">
                    </div>
                    <div class="room-details">
                        <h3>オーシャンフロントヴィラ</h3>
                        <p>120㎡ | 独立型ヴィラ | 最大6名</p>
                        <p class="room-description">
                            完全なプライバシーが保たれた独立型ヴィラ。専属バトラーサービス付き。
                        </p>
                        <div class="room-price">
                            <span>1泊2食付き</span>
                            <strong>¥150,000〜</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="dining" class="dining">
        <div class="container">
            <h2 class="section-title">ダイニング</h2>
            <p class="section-subtitle">5つのレストラン&バーで多彩な美食体験</p>
            <div class="dining-slider">
                <div class="dining-item">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=600&fit=crop" alt="メインダイニング">
                    <div class="dining-info">
                        <h3>Azure - メインダイニング</h3>
                        <p>地元の新鮮な食材を使った創作料理</p>
                        <p class="dining-time">朝食 7:00-10:30 | ディナー 18:00-22:00</p>
                    </div>
                </div>
                <div class="dining-item">
                    <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=600&fit=crop" alt="ビーチバー">
                    <div class="dining-info">
                        <h3>Sunset Beach Bar</h3>
                        <p>サンセットを眺めながらトロピカルカクテル</p>
                        <p class="dining-time">11:00-23:00</p>
                    </div>
                </div>
                <div class="dining-item">
                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=600&fit=crop" alt="鉄板焼き">
                    <div class="dining-info">
                        <h3>極 - 鉄板焼き</h3>
                        <p>最高級和牛と新鮮な海の幸</p>
                        <p class="dining-time">ディナー 18:00-22:00（要予約）</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="activities" class="activities">
        <div class="container">
            <h2 class="section-title">アクティビティ</h2>
            <p class="section-subtitle">海と自然を満喫する多彩なアクティビティ</p>
            <div class="activity-grid">
                <div class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop" alt="シュノーケリング">
                    </div>
                    <h3>シュノーケリング</h3>
                    <p>透明度抜群の海で熱帯魚と泳ぐ</p>
                    <span class="activity-price">¥8,000〜</span>
                </div>
                <div class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop" alt="カヤック">
                    </div>
                    <h3>シーカヤック</h3>
                    <p>エメラルドグリーンの海を探検</p>
                    <span class="activity-price">¥6,000〜</span>
                </div>
                <div class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1530053969600-caed2596d242?w=400&h=300&fit=crop" alt="サンセットクルーズ">
                    </div>
                    <h3>サンセットクルーズ</h3>
                    <p>夕日を眺めながらのロマンチッククルーズ</p>
                    <span class="activity-price">¥12,000〜</span>
                </div>
                <div class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=400&h=300&fit=crop" alt="ヨガ">
                    </div>
                    <h3>ビーチヨガ</h3>
                    <p>朝の静かなビーチで心身をリフレッシュ</p>
                    <span class="activity-price">無料</span>
                </div>
                <div class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop" alt="ダイビング">
                    </div>
                    <h3>体験ダイビング</h3>
                    <p>初心者でも安心の体験ダイビング</p>
                    <span class="activity-price">¥15,000〜</span>
                </div>
                <div class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=300&fit=crop" alt="サーフィン">
                    </div>
                    <h3>サーフィンレッスン</h3>
                    <p>プロインストラクターによる丁寧な指導</p>
                    <span class="activity-price">¥10,000〜</span>
                </div>
            </div>
        </div>
    </section>

    <section id="spa" class="spa">
        <div class="container">
            <h2 class="section-title">Ocean Spa</h2>
            <p class="section-subtitle">海を眺めながら極上のリラクゼーション</p>
            <div class="spa-content">
                <div class="spa-image">
                    <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop" alt="スパ">
                </div>
                <div class="spa-info">
                    <h3>心と体を癒す至福の時間</h3>
                    <p>
                        海を一望できるトリートメントルームで、熟練セラピストによる施術を。
                        琉球の伝統的な手法と最新のテクニックを融合させた、
                        当リゾートオリジナルのトリートメントをご体験ください。
                    </p>
                    <div class="spa-menu">
                        <div class="spa-item">
                            <h4>琉球アロママッサージ</h4>
                            <p>90分 ¥22,000</p>
                        </div>
                        <div class="spa-item">
                            <h4>オーシャンストーンセラピー</h4>
                            <p>60分 ¥18,000</p>
                        </div>
                        <div class="spa-item">
                            <h4>カップルスパ</h4>
                            <p>120分 ¥45,000（2名様）</p>
                        </div>
                    </div>
                    <button class="btn-outline">スパメニューを見る</button>
                </div>
            </div>
        </div>
    </section>

    <section id="wedding" class="wedding">
        <div class="container">
            <h2 class="section-title">Resort Wedding</h2>
            <p class="section-subtitle">海と空に祝福される特別な一日</p>
            <div class="wedding-gallery">
                <div class="wedding-main">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop" alt="ウェディング">
                </div>
                <div class="wedding-info">
                    <h3>永遠の愛を誓う楽園ウェディング</h3>
                    <p>
                        青い海と白い砂浜が織りなす絶景のロケーション。
                        ガーデンチャペルでの挙式、ビーチでのパーティー、
                        お二人の理想のウェディングを実現します。
                    </p>
                    <ul class="wedding-features">
                        <li>✓ オーシャンビューチャペル</li>
                        <li>✓ プライベートビーチパーティー</li>
                        <li>✓ フォトウェディングプラン</li>
                        <li>✓ ハネムーン特別プラン</li>
                    </ul>
                    <button class="btn-primary">ブライダルフェア予約</button>
                </div>
            </div>
        </div>
    </section>

    <section class="gallery">
        <div class="container">
            <h2 class="section-title">Gallery</h2>
            <div class="gallery-grid">
                <div class="gallery-item large">
                    <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop" alt="リゾート風景">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop" alt="プール">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&h=400&fit=crop" alt="ビーチ">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop" alt="客室">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=400&fit=crop" alt="サンセット">
                </div>
            </div>
        </div>
    </section>

    <section class="cta">
        <div class="container">
            <div class="cta-content">
                <h2>特別なリゾート体験を</h2>
                <p>今すぐ予約して、楽園での素晴らしい休日をお過ごしください</p>
                <div class="cta-buttons">
                    <button class="btn-primary">オンライン予約</button>
                    <button class="btn-outline-white">資料請求</button>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>Ocean Paradise Resort</h3>
                    <p>〒904-0401 沖縄県国頭郡恩納村名嘉真2288-1</p>
                    <p>TEL: 098-123-4567 | FAX: 098-123-4568</p>
                    <p>Email: info@oceanparadise.jp</p>
                </div>
                <div class="footer-links">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="#">アクセス</a></li>
                        <li><a href="#">よくある質問</a></li>
                        <li><a href="#">採用情報</a></li>
                        <li><a href="#">プライバシーポリシー</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">YouTube</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Ocean Paradise Resort. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

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
.header {
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo-icon {
    font-size: 36px;
}

.logo h1 {
    font-family: 'Libre Baskerville', serif;
    font-size: 24px;
    color: #00a8cc;
    margin: 0;
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
    color: #00a8cc;
}

.nav-reserve a {
    background: #00a8cc;
    color: white !important;
    padding: 10px 25px;
    border-radius: 25px;
}

.nav-reserve a:hover {
    background: #008ba3;
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
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
    margin-top: 80px;
}

.hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.hero-video img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5));
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
    font-family: 'Libre Baskerville', serif;
    font-size: 56px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 30px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Common Button Styles */
.btn-primary {
    background: #00a8cc;
    color: white;
    padding: 15px 40px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary:hover {
    background: #008ba3;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,168,204,0.3);
}

.btn-outline {
    background: transparent;
    color: #00a8cc;
    padding: 12px 30px;
    border: 2px solid #00a8cc;
    border-radius: 25px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-outline:hover {
    background: #00a8cc;
    color: white;
}

.btn-outline-white {
    background: transparent;
    color: white;
    padding: 15px 40px;
    border: 2px solid white;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-outline-white:hover {
    background: white;
    color: #00a8cc;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 42px;
    text-align: center;
    margin-bottom: 15px;
    color: #00a8cc;
}

.section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 50px;
    font-size: 16px;
}

/* Intro */
.intro {
    background: #f8f9fa;
}

.intro-text {
    max-width: 800px;
    margin: 0 auto 50px;
    text-align: center;
    color: #666;
    line-height: 1.8;
}

.intro-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.intro-feature {
    text-align: center;
}

.feature-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.intro-feature h3 {
    color: #333;
    margin-bottom: 10px;
}

.intro-feature p {
    color: #666;
}

/* Stay */
.stay {
    background: white;
}

.room-showcase {
    display: grid;
    gap: 40px;
}

.room-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.room-item:nth-child(even) {
    direction: rtl;
}

.room-item:nth-child(even) .room-details {
    direction: ltr;
}

.room-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.room-details h3 {
    font-size: 28px;
    color: #00a8cc;
    margin-bottom: 10px;
}

.room-details p {
    color: #666;
    margin-bottom: 15px;
}

.room-description {
    line-height: 1.8;
}

.room-price {
    margin-top: 20px;
    display: flex;
    align-items: baseline;
    gap: 15px;
}

.room-price span {
    color: #999;
}

.room-price strong {
    font-size: 28px;
    color: #00a8cc;
}

/* Dining */
.dining {
    background: #f8f9fa;
}

.dining-slider {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
}

.dining-item {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.dining-item:hover {
    transform: translateY(-5px);
}

.dining-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.dining-info {
    padding: 25px;
}

.dining-info h3 {
    color: #00a8cc;
    margin-bottom: 10px;
}

.dining-info p {
    color: #666;
    margin-bottom: 10px;
}

.dining-time {
    color: #999;
    font-size: 14px;
}

/* Activities */
.activities {
    background: white;
}

.activity-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.activity-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.activity-card:hover {
    transform: translateY(-5px);
}

.activity-image {
    height: 200px;
    overflow: hidden;
}

.activity-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.activity-card:hover .activity-image img {
    transform: scale(1.1);
}

.activity-card h3 {
    padding: 20px 20px 10px;
    color: #00a8cc;
}

.activity-card p {
    padding: 0 20px 15px;
    color: #666;
}

.activity-price {
    display: block;
    padding: 0 20px 20px;
    color: #00a8cc;
    font-weight: bold;
    font-size: 18px;
}

/* Spa */
.spa {
    background: #f8f9fa;
}

.spa-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.spa-image img {
    width: 100%;
    border-radius: 10px;
}

.spa-info h3 {
    font-size: 28px;
    color: #00a8cc;
    margin-bottom: 20px;
}

.spa-info p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 30px;
}

.spa-menu {
    margin-bottom: 30px;
}

.spa-item {
    padding: 20px;
    background: white;
    border-radius: 5px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.spa-item h4 {
    color: #333;
}

.spa-item p {
    color: #00a8cc;
    font-weight: bold;
    margin: 0;
}

/* Wedding */
.wedding {
    background: white;
}

.wedding-gallery {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    align-items: center;
}

.wedding-main img {
    width: 100%;
    border-radius: 10px;
}

.wedding-info h3 {
    font-size: 28px;
    color: #00a8cc;
    margin-bottom: 20px;
}

.wedding-info p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 30px;
}

.wedding-features {
    list-style: none;
    margin-bottom: 30px;
}

.wedding-features li {
    color: #666;
    margin-bottom: 15px;
}

/* Gallery */
.gallery {
    background: #f8f9fa;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    gap: 20px;
}

.gallery-item {
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.gallery-item.large {
    grid-column: span 2;
    grid-row: span 2;
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

/* CTA */
.cta {
    background: linear-gradient(135deg, #00a8cc 0%, #0078a8 100%);
    padding: 100px 0;
    text-align: center;
    color: white;
}

.cta-content h2 {
    font-family: 'Libre Baskerville', serif;
    font-size: 42px;
    margin-bottom: 20px;
}

.cta-content p {
    font-size: 18px;
    margin-bottom: 40px;
}

.cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
}

/* Footer */
.footer {
    background: #1a1a1a;
    color: white;
    padding: 60px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-info h3 {
    font-family: 'Libre Baskerville', serif;
    font-size: 24px;
    margin-bottom: 20px;
    color: #00a8cc;
}

.footer-info p {
    color: #ccc;
    margin-bottom: 10px;
}

.footer-links h4,
.footer-social h4 {
    margin-bottom: 20px;
}

.footer-links ul {
    list-style: none;
}

.footer-links li {
    margin-bottom: 10px;
}

.footer-links a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: #00a8cc;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    background: #333;
    color: #ccc;
    padding: 8px 15px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s;
}

.social-links a:hover {
    background: #00a8cc;
    color: white;
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
        font-size: 36px;
    }
    
    .section-title {
        font-size: 32px;
    }
    
    .intro-features {
        grid-template-columns: 1fr;
    }
    
    .room-item {
        grid-template-columns: 1fr;
    }
    
    .room-item:nth-child(even) {
        direction: ltr;
    }
    
    .dining-slider {
        grid-template-columns: 1fr;
    }
    
    .activity-grid {
        grid-template-columns: 1fr;
    }
    
    .spa-content {
        grid-template-columns: 1fr;
    }
    
    .wedding-gallery {
        grid-template-columns: 1fr;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .gallery-item.large {
        grid-column: span 1;
        grid-row: span 1;
    }
    
    .cta-buttons {
        flex-direction: column;
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
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        const text = this.textContent;
        if (text.includes('予約')) {
            alert('予約システムに接続します（実装予定）');
        } else if (text.includes('ブライダル')) {
            alert('ブライダルフェア予約フォームを開きます（実装予定）');
        }
    });
});

// スパメニュー
document.querySelector('.spa .btn-outline')?.addEventListener('click', function() {
    alert('スパメニューの詳細ページへ遷移します（実装予定）');
});

// 資料請求
document.querySelector('.btn-outline-white')?.addEventListener('click', function() {
    alert('資料請求フォームを開きます（実装予定）');
});

// パララックス効果
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-video img');
    if (hero) {
        hero.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
    }
});

// ギャラリー画像のホバーエフェクト
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        alert('画像を拡大表示します（実装予定）');
    });
});

// アクティビティカードのアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.5s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.activity-card').forEach(card => {
    observer.observe(card);
});`
  }
}