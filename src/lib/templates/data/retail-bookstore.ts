import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const retailBookstoreTemplate: WebTemplate = {
  id: 'retail-bookstore',
  title: '小売店 - 書店',
  category: TEMPLATE_CATEGORIES.RETAIL,
  description: 'クラシックで知的な雰囲気の書店向けWebサイトテンプレート',
  thumbnail: '/template-images/retail-bookstore.jpg',
  features: [
    '本の検索機能',
    'おすすめ本紹介',
    'イベント告知',
    '読書ブログ'
  ],
  tags: ['書店', '本', '読書', 'クラシック'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BOOK HAVEN - あなたの本との出会いの場所</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1 class="logo">BOOK HAVEN</h1>
                <nav class="nav">
                    <ul>
                        <li><a href="#featured">おすすめ</a></li>
                        <li><a href="#genres">ジャンル</a></li>
                        <li><a href="#events">イベント</a></li>
                        <li><a href="#blog">ブログ</a></li>
                        <li><a href="#about">店舗案内</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <div class="search-box">
                        <input type="text" placeholder="本を検索...">
                        <button class="search-btn">🔍</button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <div class="container">
                <h2>本との出会いが、人生を豊かにする</h2>
                <p>知識と想像力の宝庫へようこそ</p>
                <a href="#featured" class="btn-primary">今月のおすすめを見る</a>
            </div>
        </div>
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop" alt="書店の内観">
        </div>
    </section>

    <section id="featured" class="featured-books">
        <div class="container">
            <h2 class="section-title">今月のおすすめ</h2>
            <div class="book-grid">
                <div class="book-card">
                    <div class="book-cover">
                        <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop" alt="小説">
                        <div class="book-overlay">
                            <button class="preview-btn">プレビュー</button>
                        </div>
                    </div>
                    <div class="book-info">
                        <h3>深い森の物語</h3>
                        <p class="author">山田太郎 著</p>
                        <p class="price">¥1,650</p>
                        <span class="genre">文学・小説</span>
                    </div>
                </div>
                <div class="book-card">
                    <div class="book-cover">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop" alt="ビジネス書">
                        <div class="book-overlay">
                            <button class="preview-btn">プレビュー</button>
                        </div>
                    </div>
                    <div class="book-info">
                        <h3>成功への道筋</h3>
                        <p class="author">佐藤花子 著</p>
                        <p class="price">¥1,980</p>
                        <span class="genre">ビジネス</span>
                    </div>
                </div>
                <div class="book-card">
                    <div class="book-cover">
                        <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=450&fit=crop" alt="哲学書">
                        <div class="book-overlay">
                            <button class="preview-btn">プレビュー</button>
                        </div>
                    </div>
                    <div class="book-info">
                        <h3>思考の深淵</h3>
                        <p class="author">田中一郎 著</p>
                        <p class="price">¥2,200</p>
                        <span class="genre">哲学</span>
                    </div>
                </div>
                <div class="book-card">
                    <div class="book-cover">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop" alt="歴史書">
                        <div class="book-overlay">
                            <button class="preview-btn">プレビュー</button>
                        </div>
                    </div>
                    <div class="book-info">
                        <h3>古代文明の謎</h3>
                        <p class="author">鈴木美香 著</p>
                        <p class="price">¥2,500</p>
                        <span class="genre">歴史</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="genres" class="genres">
        <div class="container">
            <h2 class="section-title">ジャンル別</h2>
            <div class="genre-grid">
                <a href="#" class="genre-card">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" alt="文学・小説">
                    <div class="genre-info">
                        <h3>文学・小説</h3>
                        <p>心に響く物語の数々</p>
                    </div>
                </a>
                <a href="#" class="genre-card">
                    <img src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=400&h=300&fit=crop" alt="ビジネス・自己啓発">
                    <div class="genre-info">
                        <h3>ビジネス・自己啓発</h3>
                        <p>成長への一歩を踏み出す</p>
                    </div>
                </a>
                <a href="#" class="genre-card">
                    <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop" alt="科学・技術">
                    <div class="genre-info">
                        <h3>科学・技術</h3>
                        <p>世界の仕組みを知る</p>
                    </div>
                </a>
                <a href="#" class="genre-card">
                    <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop" alt="アート・デザイン">
                    <div class="genre-info">
                        <h3>アート・デザイン</h3>
                        <p>美と創造性を追求</p>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section id="events" class="events">
        <div class="container">
            <h2 class="section-title">イベント情報</h2>
            <div class="event-list">
                <div class="event-card">
                    <div class="event-date">
                        <span class="month">8</span>
                        <span class="day">15</span>
                    </div>
                    <div class="event-info">
                        <h3>著者サイン会 - 山田太郎氏</h3>
                        <p>最新作「深い森の物語」の著者による読み聞かせとサイン会を開催します。</p>
                        <p class="event-time">14:00 - 16:00</p>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-date">
                        <span class="month">8</span>
                        <span class="day">22</span>
                    </div>
                    <div class="event-info">
                        <h3>読書会「哲学を楽しむ」</h3>
                        <p>参加者同士で哲学書について語り合う読書会。初心者歓迎です。</p>
                        <p class="event-time">19:00 - 21:00</p>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-date">
                        <span class="month">8</span>
                        <span class="day">29</span>
                    </div>
                    <div class="event-info">
                        <h3>子ども読み聞かせ会</h3>
                        <p>お子様向けの楽しい読み聞かせ会。親子でご参加ください。</p>
                        <p class="event-time">10:30 - 11:30</p>  
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="blog" class="blog">
        <div class="container">
            <h2 class="section-title">読書ブログ</h2>
            <div class="blog-grid">
                <article class="blog-post">
                    <img src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=250&fit=crop" alt="読書の秋">
                    <div class="blog-content">
                        <time>2025.08.01</time>
                        <h3>読書の秋におすすめの5冊</h3>
                        <p>秋の夜長にぴったりの心温まる小説をご紹介します。</p>
                        <a href="#" class="read-more">続きを読む</a>
                    </div>
                </article>
                <article class="blog-post">
                    <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop" alt="本棚の整理">
                    <div class="blog-content">
                        <time>2025.07.28</time>
                        <h3>本棚を美しく整理する方法</h3>
                        <p>読書家のための本棚整理術とおすすめの収納方法をお教えします。</p>
                        <a href="#" class="read-more">続きを読む</a>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>BOOK HAVENについて</h2>
                    <p>1985年の創業以来、地域の皆さまに愛され続けている書店です。</p>
                    <p>専門書から文芸書、児童書まで幅広いジャンルを取り揃え、本との素晴らしい出会いをお手伝いしています。</p>
                    <p>経験豊富なスタッフが、お客様の読書ライフをサポートいたします。</p>
                    <div class="store-info">
                        <h3>店舗情報</h3>
                        <p>📍 〒150-0001 東京都渋谷区神宮前1-2-3</p>
                        <p>📞 TEL: 03-1234-5678</p>
                        <p>🕐 営業時間: 10:00-22:00（年中無休）</p>
                    </div>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop" alt="書店内観">
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>BOOK HAVEN</h3>
                    <p>本との出会いが、人生を豊かにする</p>
                    <div class="social-links">
                        <a href="#">📚 Facebook</a>
                        <a href="#">📖 Twitter</a>
                        <a href="#">📑 Instagram</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>サービス</h3>
                    <ul>
                        <li><a href="#">本の検索・注文</a></li>
                        <li><a href="#">取り寄せサービス</a></li>
                        <li><a href="#">ギフト包装</a></li>
                        <li><a href="#">会員特典</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>お問い合わせ</h3>
                    <p>📞 03-1234-5678</p>
                    <p>✉️ info@bookhaven.com</p>
                    <p>営業時間: 10:00-22:00</p>
                </div>
            </div>
            <p class="copyright">&copy; 2025 BOOK HAVEN. All rights reserved.</p>
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
    font-family: 'Georgia', 'Yu Mincho', serif;
    color: #2c2c2c;
    line-height: 1.6;
    background: #faf8f5;
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
    background: #1a1a1a;
    color: white;
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #d4af37;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    transition: color 0.3s;
}

.nav a:hover {
    color: #d4af37;
}

.search-box {
    display: flex;
    background: white;
    border-radius: 25px;
    overflow: hidden;
}

.search-box input {
    padding: 10px 15px;
    border: none;
    width: 200px;
    outline: none;
}

.search-btn {
    background: #d4af37;
    border: none;
    padding: 10px 15px;
    color: white;
    cursor: pointer;
}

/* Hero */
.hero {
    position: relative;
    height: 70vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    z-index: 1;
    color: white;
    text-align: center;
}

.hero-content h2 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: normal;
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 30px;
}

.btn-primary {
    display: inline-block;
    padding: 15px 30px;
    background: #d4af37;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    transition: background 0.3s;
}

.btn-primary:hover {
    background: #b8941f;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 36px;
    font-weight: normal;
    margin-bottom: 50px;
    color: #1a1a1a;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #d4af37;
    margin: 15px auto;
}

/* Books */
.book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.book-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.book-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.book-cover {
    position: relative;
    height: 350px;
    overflow: hidden;
}

.book-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.book-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.book-card:hover .book-overlay {
    opacity: 1;
}

.preview-btn {
    padding: 10px 20px;
    background: #d4af37;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.book-info {
    padding: 20px;
}

.book-info h3 {
    font-size: 18px;
    margin-bottom: 8px;
}

.author {
    color: #666;
    font-size: 14px;
    margin-bottom: 10px;
}

.price {
    font-size: 20px;
    color: #d4af37;
    font-weight: bold;
    margin-bottom: 10px;
}

.genre {
    background: #f0f0f0;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
    color: #666;
}

/* Genres */
.genres {
    background: white;
}

.genre-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.genre-card {
    position: relative;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    transition: transform 0.3s;
}

.genre-card:hover {
    transform: scale(1.05);
}

.genre-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.genre-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 30px 20px 20px;
}

.genre-info h3 {
    font-size: 20px;
    margin-bottom: 5px;
}

/* Events */
.events {
    background: #f8f6f3;
}

.event-list {
    max-width: 800px;
    margin: 0 auto;
}

.event-card {
    display: flex;
    background: white;
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 20px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.event-date {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #d4af37;
    color: white;
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin-right: 25px;
    flex-shrink: 0;
}

.month {
    font-size: 16px;
    font-weight: bold;
}

.day {
    font-size: 28px;
    font-weight: bold;
}

.event-info h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #1a1a1a;
}

.event-info p {
    color: #666;
    margin-bottom: 8px;
}

.event-time {
    color: #d4af37;
    font-weight: bold;
}

/* Blog */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.blog-post {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.blog-post img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.blog-content {
    padding: 25px;
}

.blog-content time {
    color: #999;
    font-size: 14px;
}

.blog-content h3 {
    margin: 10px 0 15px;
    font-size: 20px;
}

.blog-content p {
    color: #666;
    margin-bottom: 15px;
}

.read-more {
    color: #d4af37;
    text-decoration: none;
    font-weight: bold;
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

.about-text h2 {
    font-size: 32px;
    margin-bottom: 25px;
    color: #1a1a1a;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.8;
}

.store-info {
    background: #f8f6f3;
    padding: 25px;
    border-radius: 10px;
    margin-top: 30px;
}

.store-info h3 {
    margin-bottom: 15px;
    color: #d4af37;
}

.about-image img {
    border-radius: 10px;
}

/* Footer */
.footer {
    background: #1a1a1a;
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
    color: #d4af37;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 8px;
}

.footer-section a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #d4af37;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 15px;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #333;
    color: #999;
}

/* Responsive */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: 15px;
    }
    
    .nav ul {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
    
    .hero-content h2 {
        font-size: 32px;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .event-card {
        flex-direction: column;
        text-align: center;
    }
    
    .event-date {
        margin: 0 auto 20px;
    }
    
    .search-box input {
        width: 150px;
    }
}`,
    js: `// 本の検索機能
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-box input').value;
    if (searchTerm.trim()) {
        alert(\`"\${searchTerm}" を検索中...\`);
        // 実際の検索処理をここに実装
    }
});

// エンターキーでの検索
document.querySelector('.search-box input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-btn').click();
    }
});

// プレビュー機能
document.querySelectorAll('.preview-btn').forEach(button => {
    button.addEventListener('click', function() {
        const bookTitle = this.closest('.book-card').querySelector('h3').textContent;
        alert(\`"\${bookTitle}" のプレビューを表示します\`);
    });
});

// ジャンルカードのクリック
document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const genre = this.querySelector('h3').textContent;
        alert(\`\${genre} の本一覧を表示します\`);
    });
});

// イベント予約機能
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', function() {
        const eventTitle = this.querySelector('h3').textContent;
        if (confirm(\`"\${eventTitle}" に参加しますか？\`)) {
            alert('イベントの予約を受け付けました');
        }
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

// 本の詳細情報表示
document.querySelectorAll('.book-card').forEach(card => {
    const bookCover = card.querySelector('.book-cover');
    bookCover.addEventListener('click', function() {
        const bookInfo = card.querySelector('.book-info');
        const title = bookInfo.querySelector('h3').textContent;
        const author = bookInfo.querySelector('.author').textContent;
        const price = bookInfo.querySelector('.price').textContent;
        
        alert(\`タイトル: \${title}\\n著者: \${author}\\n価格: \${price}\\n\\n詳細ページに移動しますか？\`);
    });
});`
  }
}