import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const educationSchoolTemplate: WebTemplate = {
  id: 'education-school',
  title: '教育機関 - 学習塾',
  category: TEMPLATE_CATEGORIES.SERVICE,
  description: '学習塾・予備校向けのプロフェッショナルなWebサイトテンプレート',
  thumbnail: '/template-images/education-school.jpg',
  features: [
    'コース紹介',
    '講師紹介',
    '合格実績',
    '無料体験申込'
  ],
  tags: ['教育', '学習塾', '予備校', '受験'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EXCEL学習塾 - 志望校合格への最短ルート</title>
</head>
<body>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <span>📞 0120-XXX-XXX</span>
                <span>受付時間: 14:00-22:00</span>
            </div>
        </div>
        <div class="header-main">
            <div class="container">
                <div class="logo">
                    <h1>EXCEL<span>学習塾</span></h1>
                </div>
                <nav class="nav">
                    <ul>
                        <li><a href="#features">特徴</a></li>
                        <li><a href="#courses">コース</a></li>
                        <li><a href="#results">合格実績</a></li>
                        <li><a href="#teachers">講師紹介</a></li>
                        <li><a href="#access">アクセス</a></li>
                    </ul>
                </nav>
                <a href="#trial" class="trial-btn">無料体験授業</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop" alt="学習風景">
        </div>
        <div class="hero-content">
            <h2>君の未来を、<br>確実に変える。</h2>
            <p>個別指導×AI学習で、効率的な成績アップを実現</p>
            <div class="hero-stats">
                <div class="stat">
                    <span class="number">98%</span>
                    <span class="label">志望校合格率</span>
                </div>
                <div class="stat">
                    <span class="number">2,500名</span>
                    <span class="label">累計合格者数</span>
                </div>
                <div class="stat">
                    <span class="number">95%</span>
                    <span class="label">満足度</span>
                </div>
            </div>
            <button class="cta-button">まずは無料体験から</button>
        </div>
    </section>

    <section id="features" class="features">
        <div class="container">
            <h2 class="section-title">EXCEL学習塾が選ばれる理由</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">👨‍🏫</div>
                    <h3>完全個別指導</h3>
                    <p>生徒一人ひとりの理解度に合わせた完全オーダーメイドカリキュラム</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🤖</div>
                    <h3>AI学習システム</h3>
                    <p>最新のAI技術で弱点を分析し、最適な学習プランを自動生成</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>徹底した進捗管理</h3>
                    <p>週次レポートで保護者様にも学習状況を共有</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🏆</div>
                    <h3>豊富な合格実績</h3>
                    <p>難関校への合格実績多数、受験のプロが徹底サポート</p>
                </div>
            </div>
        </div>
    </section>

    <section id="courses" class="courses">
        <div class="container">
            <h2 class="section-title">コース紹介</h2>
            <div class="course-tabs">
                <button class="tab-btn active" data-tab="elementary">小学生</button>
                <button class="tab-btn" data-tab="junior">中学生</button>
                <button class="tab-btn" data-tab="high">高校生</button>
            </div>
            <div class="course-content">
                <div class="tab-content active" id="elementary">
                    <div class="course-grid">
                        <div class="course-card">
                            <h3>基礎学力コース</h3>
                            <p>算数・国語の基礎をしっかり固める</p>
                            <ul>
                                <li>週2回（各60分）</li>
                                <li>少人数制指導</li>
                                <li>宿題サポート付き</li>
                            </ul>
                            <p class="price">月額 ¥15,000〜</p>
                        </div>
                        <div class="course-card">
                            <h3>中学受験コース</h3>
                            <p>志望校に合わせた対策指導</p>
                            <ul>
                                <li>週3回（各90分）</li>
                                <li>個別指導</li>
                                <li>模試対策込み</li>
                            </ul>
                            <p class="price">月額 ¥28,000〜</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="junior">
                    <div class="course-grid">
                        <div class="course-card">
                            <h3>定期テスト対策コース</h3>
                            <p>内申点アップを目指す</p>
                            <ul>
                                <li>週2回（各90分）</li>
                                <li>5教科対応</li>
                                <li>テスト2週間前特別対策</li>
                            </ul>
                            <p class="price">月額 ¥22,000〜</p>
                        </div>
                        <div class="course-card">
                            <h3>高校受験コース</h3>
                            <p>第一志望校合格を確実に</p>
                            <ul>
                                <li>週3回（各120分）</li>
                                <li>受験5教科完全対応</li>
                                <li>面接・小論文対策付き</li>
                            </ul>
                            <p class="price">月額 ¥35,000〜</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="results" class="results">
        <div class="container">
            <h2 class="section-title">2024年度 合格実績</h2>
            <div class="results-grid">
                <div class="result-category">
                    <h3>難関国立大学</h3>
                    <ul>
                        <li>東京大学 <span>3名</span></li>
                        <li>京都大学 <span>2名</span></li>
                        <li>東京工業大学 <span>5名</span></li>
                        <li>一橋大学 <span>4名</span></li>
                    </ul>
                </div>
                <div class="result-category">
                    <h3>難関私立大学</h3>
                    <ul>
                        <li>早稲田大学 <span>15名</span></li>
                        <li>慶應義塾大学 <span>12名</span></li>
                        <li>上智大学 <span>8名</span></li>
                        <li>MARCH <span>45名</span></li>
                    </ul>
                </div>
                <div class="result-category">
                    <h3>難関高校</h3>
                    <ul>
                        <li>都立日比谷高校 <span>8名</span></li>
                        <li>都立西高校 <span>6名</span></li>
                        <li>開成高校 <span>3名</span></li>
                        <li>慶應義塾高校 <span>5名</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="teachers" class="teachers">
        <div class="container">
            <h2 class="section-title">講師紹介</h2>
            <div class="teachers-grid">
                <div class="teacher-card">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" alt="講師1">
                    <h3>山田 太郎</h3>
                    <p class="subject">数学・物理</p>
                    <p class="profile">東京大学理学部卒。大手予備校での指導経験10年。</p>
                </div>
                <div class="teacher-card">
                    <img src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop" alt="講師2">
                    <h3>佐藤 花子</h3>
                    <p class="subject">英語</p>
                    <p class="profile">上智大学外国語学部卒。TOEIC990点。</p>
                </div>
                <div class="teacher-card">
                    <img src="https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=300&h=300&fit=crop" alt="講師3">
                    <h3>鈴木 一郎</h3>
                    <p class="subject">国語・社会</p>
                    <p class="profile">早稲田大学文学部卒。元高校教諭。</p>
                </div>
            </div>
        </div>
    </section>

    <section class="video-section">
        <div class="container">
            <h2 class="section-title">授業の様子</h2>
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/6stlCkUDG_s" 
                    title="授業風景" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </section>

    <section id="trial" class="trial">
        <div class="container">
            <h2 class="section-title">無料体験授業申込</h2>
            <div class="trial-content">
                <div class="trial-benefits">
                    <h3>無料体験でできること</h3>
                    <ul>
                        <li>✅ 実際の授業を60分体験</li>
                        <li>✅ 学力診断テスト実施</li>
                        <li>✅ 個別学習プラン提案</li>
                        <li>✅ 進路相談</li>
                    </ul>
                </div>
                <form class="trial-form">
                    <input type="text" placeholder="生徒氏名" required>
                    <input type="text" placeholder="学年" required>
                    <input type="tel" placeholder="電話番号" required>
                    <input type="email" placeholder="メールアドレス" required>
                    <textarea placeholder="ご要望・ご質問など"></textarea>
                    <button type="submit">無料体験を申し込む</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>EXCEL学習塾</h3>
                    <p>〒160-0023 東京都新宿区西新宿1-1-1</p>
                    <p>TEL: 0120-XXX-XXX</p>
                    <p>営業時間: 14:00-22:00（日曜定休）</p>
                </div>
                <div class="footer-links">
                    <a href="#">プライバシーポリシー</a>
                    <a href="#">採用情報</a>
                    <a href="#">お問い合わせ</a>
                </div>
            </div>
            <p class="copyright">&copy; 2025 EXCEL学習塾. All rights reserved.</p>
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
    background: #1e3a8a;
    color: white;
    padding: 8px 0;
    font-size: 14px;
}

.header-top .container {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
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

.logo h1 {
    color: #1e3a8a;
    font-size: 28px;
}

.logo span {
    color: #3b82f6;
    font-size: 20px;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.nav a:hover {
    color: #3b82f6;
}

.trial-btn {
    background: #ef4444;
    color: white;
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    transition: transform 0.3s;
}

.trial-btn:hover {
    transform: scale(1.05);
}

/* Hero */
.hero {
    position: relative;
    height: 600px;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.hero-bg img {
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
    align-items: center;
    text-align: center;
    color: white;
    padding: 20px;
}

.hero-content h2 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: bold;
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 40px;
}

.hero-stats {
    display: flex;
    gap: 60px;
    margin-bottom: 40px;
}

.stat {
    display: flex;
    flex-direction: column;
}

.stat .number {
    font-size: 36px;
    font-weight: bold;
    color: #fbbf24;
}

.stat .label {
    font-size: 14px;
}

.cta-button {
    background: #ef4444;
    color: white;
    padding: 15px 40px;
    border: none;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.cta-button:hover {
    background: #dc2626;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 36px;
    margin-bottom: 50px;
    color: #1e3a8a;
}

/* Features */
.features {
    background: #f8fafc;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.feature-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.feature-card h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #1e3a8a;
}

/* Courses */
.course-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
}

.tab-btn {
    padding: 12px 30px;
    background: white;
    border: 2px solid #3b82f6;
    color: #3b82f6;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
}

.tab-btn.active,
.tab-btn:hover {
    background: #3b82f6;
    color: white;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.course-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.course-card h3 {
    color: #1e3a8a;
    margin-bottom: 10px;
}

.course-card ul {
    list-style: none;
    margin: 20px 0;
}

.course-card li {
    padding: 5px 0;
    color: #666;
}

.course-card .price {
    font-size: 24px;
    color: #ef4444;
    font-weight: bold;
}

/* Results */
.results {
    background: #f8fafc;
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.result-category {
    background: white;
    padding: 30px;
    border-radius: 10px;
}

.result-category h3 {
    color: #1e3a8a;
    margin-bottom: 20px;
    font-size: 22px;
}

.result-category ul {
    list-style: none;
}

.result-category li {
    padding: 10px 0;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
}

.result-category span {
    color: #ef4444;
    font-weight: bold;
}

/* Teachers */
.teachers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.teacher-card {
    text-align: center;
}

.teacher-card img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
}

.teacher-card h3 {
    color: #1e3a8a;
    margin-bottom: 5px;
}

.teacher-card .subject {
    color: #3b82f6;
    font-weight: bold;
    margin-bottom: 15px;
}

.teacher-card .profile {
    color: #666;
    line-height: 1.6;
}

/* Video Section */
.video-section {
    background: #f8fafc;
}

.video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 800px;
    margin: 0 auto;
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Trial */
.trial {
    background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
    color: white;
}

.trial .section-title {
    color: white;
}

.trial-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    max-width: 900px;
    margin: 0 auto;
}

.trial-benefits h3 {
    font-size: 24px;
    margin-bottom: 20px;
}

.trial-benefits ul {
    list-style: none;
}

.trial-benefits li {
    padding: 10px 0;
    font-size: 18px;
}

.trial-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.trial-form input,
.trial-form textarea {
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

.trial-form textarea {
    min-height: 100px;
    resize: vertical;
}

.trial-form button {
    background: #ef4444;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.trial-form button:hover {
    background: #dc2626;
}

/* Footer */
.footer {
    background: #1e293b;
    color: white;
    padding: 40px 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.footer-info h3 {
    margin-bottom: 15px;
}

.footer-info p {
    margin-bottom: 5px;
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
    border-top: 1px solid #475569;
    color: #94a3b8;
}

/* Responsive */
@media (max-width: 768px) {
    .header-main .container {
        flex-direction: column;
        gap: 15px;
    }
    
    .nav ul {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .hero-content h2 {
        font-size: 32px;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .trial-content {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 30px;
    }
}`,
    js: `// タブ切り替え
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        // アクティブ状態の切り替え
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // コンテンツの表示切り替え
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tab) {
                content.classList.add('active');
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
            const headerHeight = document.querySelector('.header-main').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 無料体験フォーム
document.querySelector('.trial-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('お申し込みありがとうございます。担当者より2営業日以内にご連絡いたします。');
    this.reset();
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

// アニメーション対象要素の監視
document.querySelectorAll('.feature-card, .course-card, .teacher-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(el);
});`
  }
}