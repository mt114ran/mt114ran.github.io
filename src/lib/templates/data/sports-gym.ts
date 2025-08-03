import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const sportsGymTemplate: WebTemplate = {
  id: 'sports-gym',
  title: 'スポーツジム',
  category: TEMPLATE_CATEGORIES.SERVICE,
  description: 'フィットネスジム・スポーツクラブ向けのダイナミックなWebサイトテンプレート',
  thumbnail: '/template-images/sports-gym.jpg',
  features: [
    'プログラム紹介',
    'トレーナー紹介',
    '料金プラン',
    '体験申込フォーム'
  ],
  tags: ['スポーツ', 'フィットネス', 'ジム', '健康'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POWER FITNESS - 理想の身体を手に入れる</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="logo">
                <span class="logo-icon">💪</span>
                <h1>POWER FITNESS</h1>
            </div>
            <button class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="nav" id="nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#programs">Programs</a></li>
                    <li><a href="#trainers">Trainers</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                </ul>
            </nav>
            <a href="#join" class="join-btn">今すぐ入会</a>
        </div>
    </header>

    <section class="hero">
        <video autoplay muted loop class="hero-video">
            <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h2>Transform<br><span>Your Body</span></h2>
            <p>最高の設備と経験豊富なトレーナーがあなたの目標達成をサポート</p>
            <div class="hero-buttons">
                <button class="btn-primary">無料体験を予約</button>
                <button class="btn-secondary">施設見学</button>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2 class="section-title">Why POWER FITNESS?</h2>
                    <p>POWER FITNESSは、最新のトレーニング設備と科学的根拠に基づいたプログラムで、あなたの理想の身体づくりを実現します。</p>
                    <div class="features-list">
                        <div class="feature-item">
                            <span class="check">✓</span>
                            <span>24時間営業（年中無休）</span>
                        </div>
                        <div class="feature-item">
                            <span class="check">✓</span>
                            <span>最新マシン200台以上</span>
                        </div>
                        <div class="feature-item">
                            <span class="check">✓</span>
                            <span>パーソナルトレーニング対応</span>
                        </div>
                        <div class="feature-item">
                            <span class="check">✓</span>
                            <span>シャワー・サウナ完備</span>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" alt="ジム内観">
                </div>
            </div>
        </div>
    </section>

    <section id="programs" class="programs">
        <div class="container">
            <h2 class="section-title">Programs</h2>
            <div class="programs-grid">
                <div class="program-card">
                    <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop" alt="ヨガ">
                    <div class="program-info">
                        <h3>YOGA</h3>
                        <p>心と身体のバランスを整える</p>
                        <div class="program-meta">
                            <span>🕐 60分</span>
                            <span>👥 15名まで</span>
                        </div>
                    </div>
                </div>
                <div class="program-card">
                    <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=300&fit=crop" alt="ボクシング">
                    <div class="program-info">
                        <h3>BOXING</h3>
                        <p>ストレス発散と全身運動</p>
                        <div class="program-meta">
                            <span>🕐 45分</span>
                            <span>👥 10名まで</span>
                        </div>
                    </div>
                </div>
                <div class="program-card">
                    <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=300&fit=crop" alt="スピニング">
                    <div class="program-info">
                        <h3>SPINNING</h3>
                        <p>高強度カーディオトレーニング</p>
                        <div class="program-meta">
                            <span>🕐 45分</span>
                            <span>👥 20名まで</span>
                        </div>
                    </div>
                </div>
                <div class="program-card">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" alt="ウェイトトレーニング">
                    <div class="program-info">
                        <h3>WEIGHT TRAINING</h3>
                        <p>筋力アップと体型改善</p>
                        <div class="program-meta">
                            <span>🕐 90分</span>
                            <span>👥 制限なし</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="trainers" class="trainers">
        <div class="container">
            <h2 class="section-title">Expert Trainers</h2>
            <div class="trainers-slider">
                <div class="trainer-card active">
                    <img src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop" alt="トレーナー1">
                    <div class="trainer-info">
                        <h3>Mike Johnson</h3>
                        <p class="specialty">パーソナルトレーナー</p>
                        <p class="bio">NESTA-PFT認定。10年以上の指導経験。ボディメイクのスペシャリスト。</p>
                        <div class="trainer-stats">
                            <span>指導実績 500名+</span>
                        </div>
                    </div>
                </div>
                <div class="trainer-card">
                    <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop" alt="トレーナー2">
                    <div class="trainer-info">
                        <h3>Sarah Williams</h3>
                        <p class="specialty">ヨガインストラクター</p>
                        <p class="bio">RYT500認定。心身のバランスを重視した指導が人気。</p>
                        <div class="trainer-stats">
                            <span>指導歴 8年</span>
                        </div>
                    </div>
                </div>
                <div class="trainer-card">
                    <img src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=400&h=500&fit=crop" alt="トレーナー3">
                    <div class="trainer-info">
                        <h3>Tom Anderson</h3>
                        <p class="specialty">栄養士・トレーナー</p>
                        <p class="bio">管理栄養士資格保有。食事と運動の両面からサポート。</p>
                        <div class="trainer-stats">
                            <span>ダイエット成功率 95%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider-dots">
                <span class="dot active" data-slide="0"></span>
                <span class="dot" data-slide="1"></span>
                <span class="dot" data-slide="2"></span>
            </div>
        </div>
    </section>

    <section id="pricing" class="pricing">
        <div class="container">
            <h2 class="section-title">Membership Plans</h2>
            <div class="pricing-grid">
                <div class="price-card">
                    <h3>BASIC</h3>
                    <div class="price">
                        <span class="amount">¥6,800</span>
                        <span class="period">/月</span>
                    </div>
                    <ul>
                        <li>✓ ジム利用（平日のみ）</li>
                        <li>✓ 更衣室・シャワー利用</li>
                        <li>✓ 初回カウンセリング</li>
                        <li>✗ グループレッスン</li>
                        <li>✗ パーソナルトレーニング</li>
                    </ul>
                    <button class="price-btn">選択する</button>
                </div>
                <div class="price-card featured">
                    <div class="badge">人気No.1</div>
                    <h3>STANDARD</h3>
                    <div class="price">
                        <span class="amount">¥9,800</span>
                        <span class="period">/月</span>
                    </div>
                    <ul>
                        <li>✓ ジム利用（24時間）</li>
                        <li>✓ 更衣室・シャワー・サウナ</li>
                        <li>✓ グループレッスン受け放題</li>
                        <li>✓ 月1回パーソナル</li>
                        <li>✓ 栄養相談</li>
                    </ul>
                    <button class="price-btn featured">選択する</button>
                </div>
                <div class="price-card">
                    <h3>PREMIUM</h3>
                    <div class="price">
                        <span class="amount">¥15,800</span>
                        <span class="period">/月</span>
                    </div>
                    <ul>
                        <li>✓ ジム利用（24時間）</li>
                        <li>✓ 全施設利用可能</li>
                        <li>✓ グループレッスン受け放題</li>
                        <li>✓ 週1回パーソナル</li>
                        <li>✓ 専属トレーナー</li>
                    </ul>
                    <button class="price-btn">選択する</button>
                </div>
            </div>
        </div>
    </section>

    <section class="cta">
        <div class="container">
            <div class="cta-content">
                <h2>今なら入会金無料！</h2>
                <p>期間限定キャンペーン実施中。この機会をお見逃しなく。</p>
                <div class="countdown">
                    <div class="countdown-item">
                        <span class="number">07</span>
                        <span class="label">Days</span>
                    </div>
                    <div class="countdown-item">
                        <span class="number">12</span>
                        <span class="label">Hours</span>
                    </div>
                    <div class="countdown-item">
                        <span class="number">45</span>
                        <span class="label">Minutes</span>
                    </div>
                </div>
                <button class="cta-button">今すぐ申し込む</button>
            </div>
        </div>
    </section>

    <section id="schedule" class="schedule">
        <div class="container">
            <h2 class="section-title">Class Schedule</h2>
            <div class="schedule-table">
                <table>
                    <thead>
                        <tr>
                            <th>時間</th>
                            <th>月曜日</th>
                            <th>火曜日</th>
                            <th>水曜日</th>
                            <th>木曜日</th>
                            <th>金曜日</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7:00</td>
                            <td class="yoga">朝ヨガ</td>
                            <td></td>
                            <td class="yoga">朝ヨガ</td>
                            <td></td>
                            <td class="yoga">朝ヨガ</td>
                        </tr>
                        <tr>
                            <td>10:00</td>
                            <td class="boxing">ボクシング</td>
                            <td class="spinning">スピニング</td>
                            <td class="boxing">ボクシング</td>
                            <td class="spinning">スピニング</td>
                            <td class="boxing">ボクシング</td>
                        </tr>
                        <tr>
                            <td>18:00</td>
                            <td class="spinning">スピニング</td>
                            <td class="yoga">パワーヨガ</td>
                            <td class="spinning">スピニング</td>
                            <td class="yoga">パワーヨガ</td>
                            <td class="spinning">スピニング</td>
                        </tr>
                        <tr>
                            <td>20:00</td>
                            <td class="weight">筋トレ講座</td>
                            <td class="boxing">ナイトボクシング</td>
                            <td class="weight">筋トレ講座</td>
                            <td class="boxing">ナイトボクシング</td>
                            <td class="weight">筋トレ講座</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>POWER FITNESS</h3>
                    <p>理想の身体を手に入れる</p>
                    <div class="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">YouTube</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>営業時間</h3>
                    <p>24時間営業（年中無休）</p>
                    <p>スタッフ対応時間: 10:00-22:00</p>
                </div>
                <div class="footer-section">
                    <h3>アクセス</h3>
                    <p>〒150-0001 東京都渋谷区神宮前5-1-1</p>
                    <p>TEL: 03-XXXX-XXXX</p>
                    <p>JR渋谷駅 徒歩5分</p>
                </div>
            </div>
            <p class="copyright">&copy; 2025 POWER FITNESS. All rights reserved.</p>
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
    font-family: 'Arial', sans-serif;
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
    background: #000;
    color: white;
    padding: 15px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    font-size: 24px;
    font-weight: bold;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav a:hover {
    color: #ff6b35;
}

.join-btn {
    background: #ff6b35;
    color: white;
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s;
}

.join-btn:hover {
    background: #ff5722;
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
    background: white;
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
    overflow: hidden;
    margin-top: 60px;
}

.hero-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    z-index: -2;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
}

.hero-content {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

.hero-content h2 {
    font-size: 64px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero-content h2 span {
    color: #ff6b35;
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 40px;
}

.hero-buttons {
    display: flex;
    gap: 20px;
}

.btn-primary {
    background: #ff6b35;
    color: white;
    padding: 15px 40px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-primary:hover {
    background: #ff5722;
}

.btn-secondary {
    background: transparent;
    color: white;
    padding: 15px 40px;
    border: 2px solid white;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-secondary:hover {
    background: white;
    color: #000;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 50px;
}

/* About */
.about {
    background: #f8f8f8;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.about-text h2 {
    text-align: left;
    margin-bottom: 30px;
}

.about-text p {
    font-size: 18px;
    margin-bottom: 30px;
}

.features-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 18px;
}

.check {
    color: #ff6b35;
    font-size: 24px;
    font-weight: bold;
}

.about-image img {
    width: 100%;
    border-radius: 10px;
}

/* Programs */
.programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.program-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.program-card:hover {
    transform: translateY(-10px);
}

.program-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.program-info {
    padding: 20px;
}

.program-info h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.program-info p {
    color: #666;
    margin-bottom: 15px;
}

.program-meta {
    display: flex;
    gap: 20px;
    color: #999;
    font-size: 14px;
}

/* Trainers */
.trainers {
    background: #f8f8f8;
}

.trainers-slider {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
}

.trainer-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    max-width: 350px;
    display: none;
}

.trainer-card.active {
    display: block;
}

.trainer-card img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

.trainer-info {
    padding: 25px;
}

.trainer-info h3 {
    font-size: 24px;
    margin-bottom: 5px;
}

.specialty {
    color: #ff6b35;
    font-weight: bold;
    margin-bottom: 15px;
}

.bio {
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
}

.trainer-stats {
    background: #f8f8f8;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
}

.slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    transition: background 0.3s;
}

.dot.active {
    background: #ff6b35;
}

/* Pricing */
.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.price-card {
    background: white;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 40px 30px;
    text-align: center;
    position: relative;
    transition: transform 0.3s;
}

.price-card:hover {
    transform: translateY(-5px);
}

.price-card.featured {
    border-color: #ff6b35;
    transform: scale(1.05);
}

.badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: #ff6b35;
    color: white;
    padding: 5px 20px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
}

.price-card h3 {
    font-size: 24px;
    margin-bottom: 20px;
}

.price {
    margin-bottom: 30px;
}

.amount {
    font-size: 42px;
    font-weight: bold;
    color: #ff6b35;
}

.period {
    color: #666;
}

.price-card ul {
    list-style: none;
    margin-bottom: 30px;
}

.price-card li {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
}

.price-btn {
    width: 100%;
    padding: 12px;
    background: white;
    border: 2px solid #ff6b35;
    color: #ff6b35;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
}

.price-btn:hover,
.price-btn.featured {
    background: #ff6b35;
    color: white;
}

/* CTA */
.cta {
    background: linear-gradient(135deg, #ff6b35 0%, #ff5722 100%);
    color: white;
}

.cta-content {
    text-align: center;
}

.cta-content h2 {
    font-size: 48px;
    margin-bottom: 20px;
}

.cta-content p {
    font-size: 20px;
    margin-bottom: 40px;
}

.countdown {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 40px;
}

.countdown-item {
    background: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 10px;
    min-width: 100px;
}

.countdown-item .number {
    display: block;
    font-size: 36px;
    font-weight: bold;
}

.countdown-item .label {
    display: block;
    font-size: 14px;
    margin-top: 5px;
}

.cta-button {
    background: white;
    color: #ff6b35;
    padding: 15px 50px;
    border: none;
    border-radius: 50px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s;
}

.cta-button:hover {
    transform: scale(1.05);
}

/* Schedule */
.schedule {
    background: #f8f8f8;
}

.schedule-table {
    overflow-x: auto;
}

table {
    width: 100%;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

th {
    background: #333;
    color: white;
    padding: 15px;
    text-align: left;
}

td {
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
}

td.yoga {
    background: #e3f2fd;
    color: #1976d2;
    font-weight: bold;
}

td.boxing {
    background: #ffebee;
    color: #d32f2f;
    font-weight: bold;
}

td.spinning {
    background: #f3e5f5;
    color: #7b1fa2;
    font-weight: bold;
}

td.weight {
    background: #e8f5e9;
    color: #388e3c;
    font-weight: bold;
}

/* Footer */
.footer {
    background: #000;
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
    color: #ff6b35;
}

.social-links {
    display: flex;
    gap: 20px;
    margin-top: 15px;
}

.social-links a {
    color: white;
    text-decoration: none;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #333;
    color: #666;
}

/* Responsive */
@media (max-width: 768px) {
    .header {
        padding: 10px 0;
    }
    
    .header .container {
        flex-wrap: wrap;
        position: relative;
    }
    
    .hamburger {
        display: flex;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    
    .nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        margin-top: 10px;
        padding: 20px;
        z-index: 999;
    }
    
    .nav.active {
        display: block;
    }
    
    .nav ul {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }
    
    .join-btn {
        display: none;
    }
    
    .hero-content h2 {
        font-size: 36px;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .trainers-slider {
        flex-direction: column;
    }
    
    .countdown {
        flex-wrap: wrap;
    }
}`,
    js: `// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // メニューリンクをクリックしたら閉じる
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// スライダー機能
let currentSlide = 0;
const trainerCards = document.querySelectorAll('.trainer-card');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    trainerCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    trainerCards[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// 自動スライド
setInterval(() => {
    currentSlide = (currentSlide + 1) % trainerCards.length;
    showSlide(currentSlide);
}, 5000);

// カウントダウンタイマー
function updateCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    const now = new Date();
    const diff = endDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    const numbers = document.querySelectorAll('.countdown-item .number');
    if (numbers[0]) numbers[0].textContent = String(days).padStart(2, '0');
    if (numbers[1]) numbers[1].textContent = String(hours).padStart(2, '0');
    if (numbers[2]) numbers[2].textContent = String(minutes).padStart(2, '0');
}

setInterval(updateCountdown, 60000);
updateCountdown();

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

// 価格カード選択
document.querySelectorAll('.price-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.price-card');
        const plan = card.querySelector('h3').textContent;
        alert(\`\${plan}プランが選択されました。お申し込みページへ移動します。\`);
    });
});

// ヘッダースクロール効果
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = '#000';
    }
});`
  }
}