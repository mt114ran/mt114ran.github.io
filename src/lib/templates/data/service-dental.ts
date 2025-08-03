import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const serviceDentalTemplate: WebTemplate = {
  id: 'service-dental',
  title: 'サービス業 - 歯科医院',
  category: TEMPLATE_CATEGORIES.SERVICE,
  description: '清潔感と安心感を重視した歯科医院向けWebサイトテンプレート',
  thumbnail: '/template-images/service-dental.jpg',
  features: [
    '診療科目案内',
    '治療料金表',
    '院長・スタッフ紹介',
    'オンライン予約システム'
  ],
  tags: ['サービス業', '歯科医院', '医療', '予防歯科'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>スマイル歯科クリニック - 皆様の笑顔のために</title>
</head>
<body>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <div class="header-info">
                    <span>📞 03-5678-9012</span>
                    <span>診療時間: 平日 9:00-19:00 / 土曜 9:00-17:00</span>
                    <span>急患随時受付</span>
                </div>
            </div>
        </div>
        <div class="header-main">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <h1>🦷 スマイル歯科クリニック</h1>
                        <p class="tagline">皆様の笑顔のために</p>
                    </div>
                    <nav class="main-nav">
                        <ul>
                            <li><a href="#about">当院について</a></li>
                            <li><a href="#services">診療案内</a></li>
                            <li><a href="#treatments">治療内容</a></li>
                            <li><a href="#staff">医師・スタッフ</a></li>
                            <li><a href="#access">アクセス</a></li>
                            <li class="nav-reserve"><a href="#reserve">ご予約</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-slider">
            <div class="slide active">
                <img src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=1920&h=800&fit=crop" alt="歯科医院内観">
            </div>
        </div>
        <div class="hero-content">
            <h2>健康で美しい歯をサポートします</h2>
            <p>最新の技術と確かな経験で、患者様一人ひとりに最適な治療をご提供</p>
            <div class="hero-buttons">
                <button class="btn-primary">初診予約</button>
                <button class="btn-secondary">診療案内</button>
            </div>
        </div>
    </section>

    <section class="emergency-info">
        <div class="container">
            <div class="emergency-box">
                <div class="emergency-icon">🚨</div>
                <div class="emergency-content">
                    <h3>急患・歯の痛みでお困りの方</h3>
                    <p>平日夜間・土日も対応可能です。まずはお電話ください。</p>
                    <a href="tel:03-5678-9012" class="emergency-tel">03-5678-9012</a>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">当院について</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>患者様に寄り添う歯科医療</h3>
                    <p>スマイル歯科クリニックは、2015年の開院以来、地域の皆様の口腔健康をサポートしてまいりました。</p>
                    <p>「痛くない・怖くない歯科治療」をモットーに、最新の医療設備と技術で安心・安全な治療を心がけています。</p>
                    <p>お子様からご高齢の方まで、どなたでも気軽にお通いいただける歯科医院を目指しています。</p>
                    <div class="about-stats">
                        <div class="stat">
                            <span class="stat-number">2,500</span>
                            <span class="stat-label">年間患者数</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">95%</span>
                            <span class="stat-label">患者満足度</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">8</span>
                            <span class="stat-label">経験年数</span>
                        </div>
                    </div>
                </div>
                <div class="about-features">
                    <div class="feature">
                        <div class="feature-icon">🦷</div>
                        <h4>最新設備</h4>
                        <p>デジタルレントゲン完備</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">😊</div>
                        <h4>無痛治療</h4>
                        <p>表面麻酔で痛みを軽減</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🔍</div>
                        <h4>精密診断</h4>
                        <p>詳細な検査で早期発見</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">⏰</div>
                        <h4>予約制</h4>
                        <p>待ち時間を短縮</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">診療案内</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🦷</div>
                    <h3>一般歯科</h3>
                    <p>虫歯・歯周病の治療、入れ歯製作など、基本的な歯科治療を行います。</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">👶</div>
                    <h3>小児歯科</h3>
                    <p>お子様の歯の健康を守り、正しい歯磨き指導も行います。</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">✨</div>
                    <h3>予防歯科</h3>
                    <p>定期検診・クリーニングで虫歯・歯周病を予防します。</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💎</div>
                    <h3>審美歯科</h3>
                    <p>ホワイトニング、セラミック治療で美しい歯を実現します。</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔧</div>
                    <h3>矯正歯科</h3>
                    <p>歯並びの改善で機能的で美しい口元を作ります。</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔩</div>
                    <h3>インプラント</h3>
                    <p>失った歯を自然な見た目と機能で回復します。</p>
                </div>
            </div>
        </div>
    </section>

    <section id="treatments" class="treatments">
        <div class="container">
            <h2 class="section-title">治療料金</h2>
            <div class="treatment-tabs">
                <button class="tab-btn active" data-tab="basic">基本治療</button>
                <button class="tab-btn" data-tab="cosmetic">審美治療</button>
                <button class="tab-btn" data-tab="implant">インプラント</button>
                <button class="tab-btn" data-tab="orthodontics">矯正治療</button>
            </div>
            <div class="treatment-content">
                <div class="tab-content active" id="basic">
                    <div class="price-table">
                        <div class="price-row">
                            <div class="treatment-name">初診料</div>
                            <div class="treatment-price">¥3,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">虫歯治療（詰め物）</div>
                            <div class="treatment-price">¥3,000～¥5,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">歯のクリーニング</div>
                            <div class="treatment-price">¥4,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">歯周病治療</div>
                            <div class="treatment-price">¥2,000～¥8,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">入れ歯（部分）</div>
                            <div class="treatment-price">¥50,000～¥150,000</div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="cosmetic">
                    <div class="price-table">
                        <div class="price-row">
                            <div class="treatment-name">ホワイトニング（オフィス）</div>
                            <div class="treatment-price">¥30,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">ホワイトニング（ホーム）</div>
                            <div class="treatment-price">¥25,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">セラミッククラウン</div>
                            <div class="treatment-price">¥80,000～¥120,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">セラミックベニア</div>
                            <div class="treatment-price">¥70,000～¥100,000</div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="implant">
                    <div class="price-table">
                        <div class="price-row">
                            <div class="treatment-name">インプラント（1本）</div>
                            <div class="treatment-price">¥300,000～¥400,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">骨移植術</div>
                            <div class="treatment-price">¥50,000～¥100,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">CT検査</div>
                            <div class="treatment-price">¥10,000</div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="orthodontics">
                    <div class="price-table">
                        <div class="price-row">
                            <div class="treatment-name">マウスピース矯正</div>
                            <div class="treatment-price">¥600,000～¥800,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">ワイヤー矯正</div>
                            <div class="treatment-price">¥700,000～¥900,000</div>
                        </div>
                        <div class="price-row">
                            <div class="treatment-name">部分矯正</div>
                            <div class="treatment-price">¥200,000～¥400,000</div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="price-note">※料金は税込み価格です。保険適用外の治療となります。</p>
        </div>
    </section>

    <section id="staff" class="staff">
        <div class="container">
            <h2 class="section-title">医師・スタッフ紹介</h2>
            <div class="staff-grid">
                <div class="staff-card">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop" alt="院長">
                    <h3>院長 田中 健太郎</h3>
                    <p class="staff-role">歯科医師・歯学博士</p>
                    <div class="qualifications">
                        <span>日本歯科医師会認定医</span>
                        <span>インプラント学会専門医</span>
                    </div>
                    <p class="staff-message">患者様の不安を取り除き、安心して治療を受けていただけるよう心がけています。</p>
                </div>
                <div class="staff-card">
                    <img src="https://images.unsplash.com/photo-1594824406832-58572620dc27?w=400&h=400&fit=crop" alt="副院長">
                    <h3>副院長 佐藤 美香</h3>
                    <p class="staff-role">歯科医師</p>
                    <div class="qualifications">
                        <span>小児歯科学会認定医</span>
                        <span>審美歯科学会会員</span>
                    </div>
                    <p class="staff-message">お子様からご高齢の方まで、丁寧で優しい治療を心がけています。</p>
                </div>
                <div class="staff-card">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop" alt="歯科衛生士">
                    <h3>歯科衛生士 山田 京子</h3>
                    <p class="staff-role">歯科衛生士</p>
                    <div class="qualifications">
                        <span>歯科衛生士国家資格</span>
                        <span>予防歯科認定衛生士</span>
                    </div>
                    <p class="staff-message">予防歯科と口腔ケア指導を専門に、皆様の健康をサポートします。</p>
                </div>
            </div>
        </div>
    </section>

    <section id="access" class="access">
        <div class="container">
            <h2 class="section-title">アクセス</h2>
            <div class="access-content">
                <div class="access-info">
                    <table>
                        <tr>
                            <th>医院名</th>
                            <td>スマイル歯科クリニック</td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td>〒150-0002 東京都渋谷区渋谷2-3-4 デンタルビル3F</td>
                        </tr>
                        <tr>
                            <th>電話</th>
                            <td>03-5678-9012</td>
                        </tr>
                        <tr>
                            <th>診療時間</th>
                            <td>
                                平日: 9:00-13:00 / 14:30-19:00<br>
                                土曜: 9:00-13:00 / 14:30-17:00
                            </td>
                        </tr>
                        <tr>
                            <th>休診日</th>
                            <td>日曜・祝日</td>
                        </tr>
                        <tr>
                            <th>アクセス</th>
                            <td>JR山手線「渋谷駅」東口より徒歩3分</td>
                        </tr>
                    </table>
                </div>
                <div class="access-map">
                    <div class="map-placeholder">🗺️ Google Map</div>
                </div>
            </div>
        </div>
    </section>

    <section id="reserve" class="reserve">
        <div class="container">
            <h2 class="section-title">ご予約・お問い合わせ</h2>
            <div class="reserve-content">
                <p class="reserve-intro">お電話またはオンラインでご予約を承っております</p>
                <div class="reserve-options">
                    <div class="reserve-option">
                        <div class="option-icon">📞</div>
                        <h3>お電話でのご予約</h3>
                        <p>平日・土曜の診療時間内</p>
                        <a href="tel:03-5678-9012" class="btn-primary">03-5678-9012</a>
                    </div>
                    <div class="reserve-option">
                        <div class="option-icon">💻</div>
                        <h3>オンライン予約</h3>
                        <p>24時間いつでも予約可能</p>
                        <button class="btn-secondary">予約フォームへ</button>
                    </div>
                </div>
                <div class="reserve-note">
                    <p>※初診の方は、問診票の記入がございますので、予約時間の15分前にお越しください。</p>
                    <p>※急患の方は随時受付しておりますが、予約の患者様を優先とさせていただきます。</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>🦷 スマイル歯科クリニック</h3>
                    <p>〒150-0002 東京都渋谷区渋谷2-3-4 デンタルビル3F</p>
                    <p>TEL: 03-5678-9012</p>
                    <p>診療時間: 平日 9:00-19:00 / 土曜 9:00-17:00</p>
                </div>
                <div class="footer-links">
                    <div class="footer-section">
                        <h4>診療案内</h4>
                        <ul>
                            <li><a href="#services">一般歯科</a></li>
                            <li><a href="#services">小児歯科</a></li>
                            <li><a href="#services">予防歯科</a></li>
                            <li><a href="#services">審美歯科</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>その他</h4>
                        <ul>
                            <li><a href="#">プライバシーポリシー</a></li>
                            <li><a href="#">医療安全管理指針</a></li>
                            <li><a href="#">院内感染対策</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="copyright">© 2025 スマイル歯科クリニック All Rights Reserved.</p>
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
    line-height: 1.7;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header-top {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    padding: 8px 0;
    font-size: 13px;
    color: #1976d2;
}

.header-info {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
}

.header-main {
    background: white;
    box-shadow: 0 2px 10px rgba(25, 118, 210, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo h1 {
    color: #1976d2;
    font-size: 28px;
    font-weight: 700;
}

.tagline {
    font-size: 12px;
    color: #42a5f5;
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
    color: #1976d2;
}

.nav-reserve a {
    background: #4caf50;
    color: white !important;
    padding: 12px 24px;
    border-radius: 25px;
    transition: background 0.3s;
}

.nav-reserve a:hover {
    background: #388e3c;
}

/* Hero */
.hero {
    position: relative;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
    filter: brightness(0.4);
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 1;
}

.hero-content h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
    font-size: 18px;
    margin-bottom: 30px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.btn-primary, .btn-secondary {
    padding: 15px 30px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background: #1976d2;
    color: white;
    box-shadow: 0 4px 15px rgba(25, 118, 210, 0.3);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-primary:hover {
    background: #1565c0;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(25, 118, 210, 0.4);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

/* Emergency Info */
.emergency-info {
    background: linear-gradient(135deg, #ff5722 0%, #f44336 100%);
    padding: 20px 0;
    color: white;
}

.emergency-box {
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.emergency-icon {
    font-size: 36px;
}

.emergency-content h3 {
    font-size: 20px;
    margin-bottom: 5px;
}

.emergency-tel {
    display: inline-block;
    background: white;
    color: #f44336;
    padding: 8px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 36px;
    color: #1976d2;
    margin-bottom: 50px;
    position: relative;
    padding-bottom: 15px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #1976d2, #4caf50);
    border-radius: 2px;
}

/* About */
.about {
    background: #f8fcff;
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    align-items: start;
}

.about-text h3 {
    color: #1976d2;
    margin-bottom: 20px;
    font-size: 28px;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 16px;
}

.about-stats {
    display: flex;
    gap: 30px;
    margin-top: 30px;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 32px;
    font-weight: bold;
    color: #4caf50;
    margin-bottom: 5px;
}

.stat-label {
    font-size: 14px;
    color: #666;
}

.about-features {
    display: grid;
    gap: 20px;
}

.feature {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(25, 118, 210, 0.1);
}

.feature-icon {
    font-size: 32px;
}

.feature h4 {
    color: #1976d2;
    margin-bottom: 5px;
}

/* Services */
.services {
    background: white;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.service-card {
    background: #f8fcff;
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s;
    border: 2px solid transparent;
}

.service-card:hover {
    transform: translateY(-10px);
    border-color: #1976d2;
    box-shadow: 0 10px 30px rgba(25, 118, 210, 0.15);
}

.service-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.service-card h3 {
    color: #1976d2;
    margin-bottom: 15px;
    font-size: 22px;
}

/* Treatments */
.treatments {
    background: #f8fcff;
}

.treatment-tabs {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.tab-btn {
    padding: 12px 24px;
    background: white;
    border: 2px solid #1976d2;
    color: #1976d2;
    cursor: pointer;
    border-radius: 25px;
    transition: all 0.3s;
    font-weight: 500;
}

.tab-btn.active,
.tab-btn:hover {
    background: #1976d2;
    color: white;
}

.treatment-content {
    max-width: 800px;
    margin: 0 auto;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.price-table {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(25, 118, 210, 0.1);
}

.price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 1px solid #e3f2fd;
}

.price-row:last-child {
    border-bottom: none;
}

.treatment-name {
    font-weight: 500;
}

.treatment-price {
    font-size: 18px;
    font-weight: bold;
    color: #4caf50;
}

.price-note {
    text-align: center;
    margin-top: 20px;
    color: #666;
    font-size: 14px;
}

/* Staff */
.staff {
    background: white;
}

.staff-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
}

.staff-card {
    text-align: center;
    padding: 40px 30px;
    background: #f8fcff;
    border-radius: 20px;
    transition: transform 0.3s;
}

.staff-card:hover {
    transform: translateY(-5px);
}

.staff-card img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 4px solid #1976d2;
}

.staff-card h3 {
    color: #1976d2;
    margin-bottom: 5px;
    font-size: 22px;
}

.staff-role {
    color: #4caf50;
    margin-bottom: 15px;
    font-weight: 500;
}

.qualifications {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
}

.qualifications span {
    display: inline-block;
    background: #e3f2fd;
    color: #1976d2;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
}

.staff-message {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
}

/* Access */
.access {
    background: #f8fcff;
}

.access-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.access-info table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(25, 118, 210, 0.1);
}

.access-info th {
    text-align: left;
    padding: 20px;
    background: #1976d2;
    color: white;
    width: 120px;
    font-weight: 600;
}

.access-info td {
    padding: 20px;
    border-bottom: 1px solid #e3f2fd;
}

.access-info tr:last-child td {
    border-bottom: none;
}

.access-map {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(25, 118, 210, 0.1);
}

.map-placeholder {
    font-size: 48px;
    color: #1976d2;
}

/* Reserve */
.reserve {
    background: white;
}

.reserve-intro {
    text-align: center;
    font-size: 18px;
    margin-bottom: 40px;
}

.reserve-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    max-width: 800px;
    margin: 0 auto 40px;
}

.reserve-option {
    text-align: center;
    padding: 40px 30px;
    background: linear-gradient(135deg, #f8fcff 0%, #e3f2fd 100%);
    border-radius: 20px;
    border: 2px solid transparent;
    transition: all 0.3s;
}

.reserve-option:hover {
    border-color: #1976d2;
    transform: translateY(-5px);
}

.option-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.reserve-option h3 {
    color: #1976d2;
    margin-bottom: 10px;
}

.reserve-option p {
    margin-bottom: 20px;
    color: #666;
}

.reserve-note {
    background: #fff3e0;
    padding: 20px;
    border-radius: 10px;
    border-left: 4px solid #ff9800;
}

.reserve-note p {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
}

/* Footer */
.footer {
    background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
    color: white;
    padding: 50px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin-bottom: 30px;
}

.footer-info h3 {
    margin-bottom: 15px;
    font-size: 24px;
}

.footer-info p {
    margin-bottom: 8px;
}

.footer-links {
    display: flex;
    gap: 50px;
}

.footer-section h4 {
    margin-bottom: 15px;
    color: #90caf9;
}

.footer-section ul {
    list-style: none;
}

.footer-section li {
    margin-bottom: 8px;
}

.footer-section a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #90caf9;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255,255,255,0.2);
    color: #90caf9;
}

/* Responsive */
@media (max-width: 768px) {
    .header-info {
        flex-direction: column;
        gap: 5px;
        text-align: center;
    }
    
    .header-content {
        flex-direction: column;
        gap: 20px;
    }
    
    .main-nav ul {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
    
    .hero-content h2 {
        font-size: 28px;
    }
    
    .hero-buttons {
        flex-direction: column;
        gap: 15px;
    }
    
    .emergency-box {
        flex-direction: column;
        text-align: center;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .about-stats {
        justify-content: center;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .treatment-tabs {
        flex-direction: column;
        align-items: center;
    }
    
    .staff-grid {
        grid-template-columns: 1fr;
    }
    
    .access-content {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
    }
    
    .footer-links {
        flex-direction: column;
        gap: 30px;
    }
}`,
    js: `// タブ切り替え機能
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

// 予約ボタンのクリック処理
document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.textContent.includes('初診予約') || button.textContent.includes('03-5678-9012')) return;
    
    button.addEventListener('click', function() {
        alert('オンライン予約システムへ移動します（実装予定）');
    });
});

// お問い合わせボタンのクリック処理
document.querySelectorAll('.btn-secondary').forEach(button => {
    if (button.textContent === '診療案内') {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('services').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    } else if (button.textContent === '予約フォームへ') {
        button.addEventListener('click', function() {
            alert('予約フォームへ移動します（実装予定）');
        });
    }
});

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

// 電話番号のクリック処理（電話アプリ起動）
document.querySelectorAll('a[href^="tel:"]').forEach(tel => {
    tel.addEventListener('click', function() {
        // モバイルデバイスでない場合はアラートを表示
        if (!/Mobi|Android/i.test(navigator.userAgent)) {
            alert('お電話での予約・お問い合わせ: ' + this.textContent);
        }
    });
});

// 料金表の行にホバー効果
document.querySelectorAll('.price-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e3f2fd';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

// ページ読み込み時のアニメーション
window.addEventListener('load', function() {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(30px)';
        hero.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 500);
    }
});`
  }
}