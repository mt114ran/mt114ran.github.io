import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const retailGeneralTemplate: WebTemplate = {
  id: 'retail-general',
  title: '小売店 - 雑貨',
  category: TEMPLATE_CATEGORIES.RETAIL,
  description: 'おしゃれな雑貨店向けのWebサイトテンプレート',
  thumbnail: '/template-images/retail-general.jpg',
  features: [
    'Instagram連携',
    '商品カタログ',
    'ブログ機能',
    'お気に入り機能'
  ],
  tags: ['小売店', '雑貨', 'ライフスタイル', 'インスタ映え'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZAKKA STORE - 暮らしを彩る雑貨たち</title>
</head>
<body>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <p class="header-message">3,000円以上で送料無料 ｜ ギフトラッピング承ります</p>
            </div>
        </div>
        <div class="header-main">
            <div class="container">
                <div class="header-content">
                    <h1 class="logo">ZAKKA STORE</h1>
                    <nav class="nav">
                        <ul>
                            <li><a href="#new">New Items</a></li>
                            <li><a href="#category">Category</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="header-actions">
                        <button class="search-btn">🔍</button>
                        <button class="wishlist-btn">♡</button>
                        <button class="cart-btn">🛒</button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-slider">
            <div class="slide active">
                <img src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&h=600&fit=crop" alt="雑貨コレクション">
                <div class="slide-content">
                    <h2>Spring Collection 2025</h2>
                    <p>新生活を彩る春の新作が入荷しました</p>
                    <a href="#" class="btn-primary">コレクションを見る</a>
                </div>
            </div>
        </div>
    </section>

    <section id="new" class="new-items">
        <div class="container">
            <h2 class="section-title">New Items</h2>
            <div class="product-grid">
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=400&fit=crop" alt="北欧風花瓶">
                        <span class="badge">NEW</span>
                        <button class="wishlist-add">♡</button>
                    </div>
                    <div class="product-info">
                        <h3>北欧風フラワーベース</h3>
                        <p class="price">¥3,200</p>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1523251343397-9225e4cb6319?w=400&h=400&fit=crop" alt="アロマキャンドル">
                        <span class="badge">NEW</span>
                        <button class="wishlist-add">♡</button>
                    </div>
                    <div class="product-info">
                        <h3>オーガニックアロマキャンドル</h3>
                        <p class="price">¥2,800</p>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop" alt="木製トレイ">
                        <span class="badge">NEW</span>
                        <button class="wishlist-add">♡</button>
                    </div>
                    <div class="product-info">
                        <h3>天然木トレイ</h3>
                        <p class="price">¥4,500</p>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1522444690501-325c900eedf0?w=400&h=400&fit=crop" alt="クッションカバー">
                        <button class="wishlist-add">♡</button>
                    </div>
                    <div class="product-info">
                        <h3>リネンクッションカバー</h3>
                        <p class="price">¥2,200</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="category" class="categories">
        <div class="container">
            <h2 class="section-title">Category</h2>
            <div class="category-grid">
                <a href="#" class="category-item">
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" alt="キッチン">
                    <div class="category-overlay">
                        <h3>Kitchen</h3>
                        <p>キッチン雑貨</p>
                    </div>
                </a>
                <a href="#" class="category-item">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop" alt="リビング">
                    <div class="category-overlay">
                        <h3>Living</h3>
                        <p>リビング雑貨</p>
                    </div>
                </a>
                <a href="#" class="category-item">
                    <img src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=600&h=400&fit=crop" alt="バス">
                    <div class="category-overlay">
                        <h3>Bath</h3>
                        <p>バス・トイレタリー</p>
                    </div>
                </a>
                <a href="#" class="category-item">
                    <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=400&fit=crop" alt="ステーショナリー">
                    <div class="category-overlay">
                        <h3>Stationery</h3>
                        <p>文房具</p>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section id="instagram" class="instagram-feed">
        <div class="container">
            <h2 class="section-title">Instagram</h2>
            <p class="instagram-handle">@zakka_store</p>
            <div class="instagram-grid">
                <div class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop" alt="Instagram1">
                </div>
                <div class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=300&h=300&fit=crop" alt="Instagram2">
                </div>
                <div class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop" alt="Instagram3">
                </div>
                <div class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop" alt="Instagram4">
                </div>
                <div class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1556228852-80b6bb058128?w=300&h=300&fit=crop" alt="Instagram5">
                </div>
                <div class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=300&h=300&fit=crop" alt="Instagram6">
                </div>
            </div>
        </div>
    </section>

    <section id="blog" class="blog">
        <div class="container">
            <h2 class="section-title">Blog</h2>
            <div class="blog-grid">
                <article class="blog-card">
                    <img src="https://images.unsplash.com/photo-1511401139252-f158d3209c17?w=600&h=400&fit=crop" alt="ブログ1">
                    <div class="blog-content">
                        <time>2025.08.01</time>
                        <h3>北欧インテリアの作り方</h3>
                        <p>シンプルで温かみのある北欧スタイルのお部屋作りのコツをご紹介します。</p>
                        <a href="#" class="read-more">続きを読む →</a>
                    </div>
                </article>
                <article class="blog-card">
                    <img src="https://images.unsplash.com/photo-1520981825232-ece5fae45120?w=600&h=400&fit=crop" alt="ブログ2">
                    <div class="blog-content">
                        <time>2025.07.28</time>
                        <h3>ギフトラッピングのアイデア</h3>
                        <p>大切な人への贈り物を特別にする、おしゃれなラッピング方法をご紹介。</p>
                        <a href="#" class="read-more">続きを読む →</a>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Us</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>暮らしを彩る雑貨たち</h3>
                    <p>ZAKKA STOREは、毎日の暮らしをもっと楽しく、もっと心地よくする雑貨を世界中からセレクトしています。</p>
                    <p>北欧、フランス、日本...様々な国の素敵なアイテムを取り揃え、お客様の理想のライフスタイルづくりをお手伝いします。</p>
                    <p>実店舗では、季節ごとのディスプレイやワークショップも開催しています。</p>
                </div>
                <div class="about-video">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/MLpWrANjFbI" 
                        title="Store Introduction" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>ZAKKA STORE</h3>
                    <p>〒150-0001 東京都渋谷区神宮前3-15-8</p>
                    <p>TEL: 03-1234-5678</p>
                    <p>営業時間: 11:00-20:00</p>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Pinterest</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Newsletter</h3>
                    <p>新商品やセール情報をお届けします</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="メールアドレス">
                        <button type="submit">登録</button>
                    </form>
                </div>
            </div>
            <p class="copyright">&copy; 2025 ZAKKA STORE. All rights reserved.</p>
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
    font-family: 'Helvetica Neue', 'Yu Gothic', sans-serif;
    color: #333;
    line-height: 1.6;
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
.header-top {
    background: #f8f8f8;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
    color: #666;
}

.header-main {
    background: white;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: 3px;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    transition: color 0.3s;
}

.nav a:hover {
    color: #d4a574;
}

.header-actions {
    display: flex;
    gap: 20px;
}

.header-actions button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.3s;
}

.header-actions button:hover {
    transform: scale(1.1);
}

/* Hero */
.hero {
    position: relative;
    height: 600px;
    overflow: hidden;
}

.slide {
    position: relative;
    height: 100%;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
}

.slide-content h2 {
    font-size: 48px;
    font-weight: 300;
    margin-bottom: 20px;
}

.slide-content p {
    font-size: 18px;
    margin-bottom: 30px;
}

.btn-primary {
    display: inline-block;
    padding: 12px 30px;
    background: white;
    color: #333;
    text-decoration: none;
    transition: background 0.3s, color 0.3s;
}

.btn-primary:hover {
    background: #333;
    color: white;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 50px;
    letter-spacing: 2px;
}

/* Products */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.product-card {
    position: relative;
}

.product-image {
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;
}

.product-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

.badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #d4a574;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
}

.wishlist-add {
    position: absolute;
    top: 10px;
    right: 10px;
    background: white;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;
}

.wishlist-add:hover {
    background: #ffe0e0;
}

.product-info h3 {
    font-size: 16px;
    margin-bottom: 8px;
}

.price {
    font-size: 18px;
    color: #d4a574;
}

/* Categories */
.categories {
    background: #f8f8f8;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.category-item {
    position: relative;
    overflow: hidden;
    height: 250px;
    text-decoration: none;
}

.category-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.category-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    transition: background 0.3s;
}

.category-item:hover .category-overlay {
    background: rgba(0, 0, 0, 0.6);
}

.category-item:hover img {
    transform: scale(1.1);
}

.category-overlay h3 {
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 10px;
}

/* Instagram */
.instagram-handle {
    text-align: center;
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
}

.instagram-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
}

.instagram-item {
    overflow: hidden;
    aspect-ratio: 1;
}

.instagram-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.instagram-item:hover img {
    transform: scale(1.1);
}

/* Blog */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.blog-card {
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.blog-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.blog-content {
    padding: 30px;
}

.blog-content time {
    color: #999;
    font-size: 14px;
}

.blog-content h3 {
    margin: 10px 0;
    font-size: 20px;
}

.blog-content p {
    color: #666;
    margin-bottom: 15px;
}

.read-more {
    color: #d4a574;
    text-decoration: none;
    font-size: 14px;
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

.about-text h3 {
    font-size: 24px;
    margin-bottom: 20px;
}

.about-text p {
    margin-bottom: 15px;
    line-height: 1.8;
}

.about-video iframe {
    width: 100%;
    height: 315px;
}

/* Footer */
.footer {
    background: #333;
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
}

.social-links {
    display: flex;
    gap: 20px;
}

.social-links a {
    color: white;
    text-decoration: none;
}

.newsletter-form {
    display: flex;
    margin-top: 15px;
}

.newsletter-form input {
    flex: 1;
    padding: 10px;
    border: none;
}

.newsletter-form button {
    padding: 10px 20px;
    background: #d4a574;
    border: none;
    color: white;
    cursor: pointer;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #555;
    color: #999;
}

/* Responsive */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: 20px;
    }
    
    .nav ul {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
    
    .slide-content h2 {
        font-size: 32px;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .category-grid {
        grid-template-columns: 1fr;
    }
    
    .blog-grid {
        grid-template-columns: 1fr;
    }
}`,
    js: `// お気に入り機能
let wishlist = [];

document.querySelectorAll('.wishlist-add').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === '♡') {
            this.textContent = '♥';
            this.style.color = 'red';
            wishlist.push(this.closest('.product-card'));
        } else {
            this.textContent = '♡';
            this.style.color = 'black';
        }
        updateWishlistCount();
    });
});

function updateWishlistCount() {
    const count = document.querySelectorAll('.wishlist-add').length;
    console.log(\`Wishlist items: \${wishlist.length}\`);
}

// 検索機能
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = prompt('商品を検索:');
    if (searchTerm) {
        alert(\`"\${searchTerm}" の検索結果を表示\`);
    }
});

// カート機能
document.querySelector('.cart-btn').addEventListener('click', function() {
    alert('カートページへ移動');
});

// ニュースレター
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    if (email) {
        alert(\`\${email} を登録しました\`);
        this.querySelector('input').value = '';
    }
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
});`
  }
}