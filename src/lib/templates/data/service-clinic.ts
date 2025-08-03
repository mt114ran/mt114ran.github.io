import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const serviceClinicTemplate: WebTemplate = {
  id: 'service-clinic',
  title: 'サービス業 - クリニック',
  category: TEMPLATE_CATEGORIES.SERVICE,
  description: '清潔感と信頼感のあるクリニック向けWebサイトテンプレート',
  thumbnail: '/template-images/service-clinic.jpg',
  features: [
    '診療案内',
    'オンライン予約UI',
    '医師紹介',
    'アクセス情報'
  ],
  tags: ['サービス業', 'クリニック', '医療', '予約'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>さくら内科クリニック - 地域に根ざした医療を</title>
</head>
<body>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <div class="header-info">
                    <span>📞 03-1234-5678</span>
                    <span>診療時間: 平日 9:00-18:00 / 土曜 9:00-13:00</span>
                </div>
            </div>
        </div>
        <div class="header-main">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <h1>さくら内科クリニック</h1>
                        <p class="tagline">地域に根ざした医療を</p>
                    </div>
                    <nav class="main-nav">
                        <ul>
                            <li><a href="#about">当院について</a></li>
                            <li><a href="#services">診療案内</a></li>
                            <li><a href="#doctors">医師紹介</a></li>
                            <li><a href="#access">アクセス</a></li>
                            <li class="nav-reserve"><a href="#reserve">予約</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h2>患者様一人ひとりに寄り添う医療を提供します</h2>
            <div class="hero-buttons">
                <button class="btn-primary">オンライン予約</button>
                <button class="btn-secondary">お問い合わせ</button>
            </div>
        </div>
    </section>

    <section class="notice">
        <div class="container">
            <div class="notice-box">
                <h3>お知らせ</h3>
                <ul class="notice-list">
                    <li>
                        <span class="date">2025.08.01</span>
                        <span class="category">診療</span>
                        <span class="text">お盆期間の診療について</span>
                    </li>
                    <li>
                        <span class="date">2025.07.15</span>
                        <span class="category">検査</span>
                        <span class="text">健康診断の予約受付開始</span>
                    </li>
                    <li>
                        <span class="date">2025.07.01</span>
                        <span class="category">重要</span>
                        <span class="text">新型コロナワクチン接種について</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">当院について</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>地域の皆様の健康を守ります</h3>
                    <p>さくら内科クリニックは、2010年の開院以来、地域の皆様の健康維持・増進のお手伝いをさせていただいております。</p>
                    <p>一般内科診療を中心に、生活習慣病の管理、健康診断、予防接種など、幅広い医療サービスを提供しています。</p>
                    <p>患者様一人ひとりの症状やお悩みに真摯に向き合い、最適な治療をご提案いたします。</p>
                </div>
                <div class="about-features">
                    <div class="feature">
                        <div class="feature-icon">🏥</div>
                        <h4>充実の設備</h4>
                        <p>最新の医療機器を導入</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">👨‍⚕️</div>
                        <h4>経験豊富な医師</h4>
                        <p>専門医による診療</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🕐</div>
                        <h4>予約優先制</h4>
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
                    <h3>一般内科</h3>
                    <p>風邪、インフルエンザ、腹痛、頭痛など、日常的な体調不良の診療を行います。</p>
                </div>
                <div class="service-card">
                    <h3>生活習慣病</h3>
                    <p>高血圧、糖尿病、脂質異常症などの診断・治療・管理を行います。</p>
                </div>
                <div class="service-card">
                    <h3>健康診断</h3>
                    <p>定期健康診断、雇用時健診、特定健診などに対応しています。</p>
                </div>
                <div class="service-card">
                    <h3>予防接種</h3>
                    <p>インフルエンザ、肺炎球菌など各種予防接種を実施しています。</p>
                </div>
                <div class="service-card">
                    <h3>在宅医療</h3>
                    <p>通院が困難な方への訪問診療も行っております。</p>
                </div>
                <div class="service-card">
                    <h3>健康相談</h3>
                    <p>健康に関する不安やお悩みについてご相談ください。</p>
                </div>
            </div>
        </div>
    </section>

    <section id="doctors" class="doctors">
        <div class="container">
            <h2 class="section-title">医師紹介</h2>
            <div class="doctors-list">
                <div class="doctor-card">
                    <div class="doctor-image">院長写真</div>
                    <div class="doctor-info">
                        <h3>院長 佐藤 太郎</h3>
                        <p class="qualification">日本内科学会認定内科医</p>
                        <p class="message">患者様の立場に立った、温かい医療を心がけています。どんな小さな不調でもお気軽にご相談ください。</p>
                    </div>
                </div>
                <div class="doctor-card">
                    <div class="doctor-image">副院長写真</div>
                    <div class="doctor-info">
                        <h3>副院長 田中 花子</h3>
                        <p class="qualification">日本糖尿病学会専門医</p>
                        <p class="message">生活習慣病の予防と治療に力を入れています。一緒に健康な生活を目指しましょう。</p>
                    </div>
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
                            <th>住所</th>
                            <td>〒150-0001 東京都渋谷区神宮前1-2-3 メディカルビル2F</td>
                        </tr>
                        <tr>
                            <th>電話</th>
                            <td>03-1234-5678</td>
                        </tr>
                        <tr>
                            <th>診療時間</th>
                            <td>
                                平日: 9:00-12:30 / 14:30-18:00<br>
                                土曜: 9:00-13:00
                            </td>
                        </tr>
                        <tr>
                            <th>休診日</th>
                            <td>日曜・祝日・土曜午後</td>
                        </tr>
                        <tr>
                            <th>アクセス</th>
                            <td>JR山手線「原宿駅」徒歩5分</td>
                        </tr>
                    </table>
                </div>
                <div class="access-map">
                    <div class="map-placeholder">地図</div>
                </div>
            </div>
        </div>
    </section>

    <section id="reserve" class="reserve">
        <div class="container">
            <h2 class="section-title">ご予約</h2>
            <div class="reserve-content">
                <p>オンラインまたはお電話でご予約を承っております</p>
                <div class="reserve-options">
                    <div class="reserve-option">
                        <h3>オンライン予約</h3>
                        <p>24時間いつでも予約可能</p>
                        <button class="btn-primary">予約する</button>
                    </div>
                    <div class="reserve-option">
                        <h3>電話予約</h3>
                        <p>診療時間内にお電話ください</p>
                        <a href="tel:03-1234-5678" class="btn-secondary">03-1234-5678</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>さくら内科クリニック</h3>
                    <p>〒150-0001 東京都渋谷区神宮前1-2-3</p>
                    <p>TEL: 03-1234-5678</p>
                </div>
                <div class="footer-links">
                    <a href="#">プライバシーポリシー</a>
                    <a href="#">サイトマップ</a>
                </div>
            </div>
            <p class="copyright">© 2025 さくら内科クリニック All Rights Reserved.</p>
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
    background: #f0f8ff;
    padding: 10px 0;
    font-size: 14px;
    color: #666;
}

.header-info {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

.header-main {
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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
    color: #2c5282;
    font-size: 24px;
}

.tagline {
    font-size: 12px;
    color: #666;
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
    transition: color 0.3s;
}

.main-nav a:hover {
    color: #2c5282;
}

.nav-reserve a {
    background: #48bb78;
    color: white !important;
    padding: 10px 20px;
    border-radius: 5px;
}

.nav-reserve a:hover {
    background: #38a169;
}

/* Hero */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #48bb78 100%);
    padding: 100px 0;
    text-align: center;
    color: white;
}

.hero-content h2 {
    font-size: 32px;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.btn-primary, .btn-secondary {
    padding: 15px 30px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background: white;
    color: #2c5282;
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-primary:hover, .btn-secondary:hover {
    transform: translateY(-2px);
}

/* Notice */
.notice {
    background: #f8f9fa;
    padding: 40px 0;
}

.notice-box {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.notice-box h3 {
    color: #2c5282;
    margin-bottom: 20px;
}

.notice-list {
    list-style: none;
}

.notice-list li {
    padding: 15px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    gap: 15px;
}

.notice-list .date {
    color: #666;
    font-size: 14px;
}

.notice-list .category {
    background: #2c5282;
    color: white;
    padding: 3px 10px;
    border-radius: 3px;
    font-size: 12px;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 36px;
    color: #2c5282;
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
    width: 60px;
    height: 3px;
    background: #48bb78;
}

/* About */
.about {
    background: white;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.about-text h3 {
    color: #2c5282;
    margin-bottom: 20px;
    font-size: 24px;
}

.about-text p {
    margin-bottom: 15px;
}

.about-features {
    display: grid;
    gap: 20px;
}

.feature {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: #f0f8ff;
    border-radius: 10px;
}

.feature-icon {
    font-size: 36px;
}

.feature h4 {
    color: #2c5282;
    margin-bottom: 5px;
}

/* Services */
.services {
    background: #f8f9fa;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.service-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: transform 0.3s;
}

.service-card:hover {
    transform: translateY(-5px);
}

.service-card h3 {
    color: #2c5282;
    margin-bottom: 15px;
}

/* Doctors */
.doctors {
    background: white;
}

.doctors-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 40px;
}

.doctor-card {
    display: flex;
    gap: 30px;
    padding: 30px;
    background: #f0f8ff;
    border-radius: 10px;
}

.doctor-image {
    width: 150px;
    height: 150px;
    background: #ddd;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.doctor-info h3 {
    color: #2c5282;
    margin-bottom: 5px;
}

.qualification {
    color: #48bb78;
    font-size: 14px;
    margin-bottom: 15px;
}

/* Access */
.access {
    background: #f8f9fa;
}

.access-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.access-info table {
    width: 100%;
    border-collapse: collapse;
}

.access-info th {
    text-align: left;
    padding: 15px;
    background: #2c5282;
    color: white;
    width: 120px;
}

.access-info td {
    padding: 15px;
    background: white;
}

.map-placeholder {
    height: 400px;
    background: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

/* Reserve */
.reserve {
    background: white;
}

.reserve-content {
    text-align: center;
}

.reserve-content > p {
    font-size: 18px;
    margin-bottom: 40px;
}

.reserve-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    max-width: 800px;
    margin: 0 auto;
}

.reserve-option {
    padding: 40px;
    background: #f0f8ff;
    border-radius: 10px;
}

.reserve-option h3 {
    color: #2c5282;
    margin-bottom: 10px;
}

.reserve-option p {
    margin-bottom: 20px;
}

/* Footer */
.footer {
    background: #2c5282;
    color: white;
    padding: 40px 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.footer-info h3 {
    margin-bottom: 10px;
}

.footer-links {
    display: flex;
    gap: 30px;
}

.footer-links a {
    color: white;
    text-decoration: none;
}

.copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
    opacity: 0.7;
}

@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: 10px;
        padding: 10px 0;
    }
    
    .main-nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .access-content {
        grid-template-columns: 1fr;
    }
    
    .doctors-list {
        grid-template-columns: 1fr;
    }
}`,
    js: `// オンライン予約
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        alert('オンライン予約システムへ遷移します（実装予定）');
    });
});

// お問い合わせ
document.querySelector('.btn-secondary').addEventListener('click', function() {
    if (!this.href) {
        alert('お問い合わせフォームへ遷移します（実装予定）');
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

// お知らせのクリック処理
document.querySelectorAll('.notice-list li').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        const text = this.querySelector('.text').textContent;
        alert(\`お知らせ詳細: \${text}\`);
    });
});`
  }
}