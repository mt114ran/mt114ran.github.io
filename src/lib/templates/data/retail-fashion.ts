import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const retailFashionTemplate: WebTemplate = {
  id: 'retail-fashion',
  title: '小売店 - ファッション',
  category: TEMPLATE_CATEGORIES.RETAIL,
  description: 'スタイリッシュなファッション小売店向けWebサイトテンプレート',
  thumbnail: '/template-images/retail-fashion.jpg',
  features: [
    '商品カタログ',
    'カート機能UI',
    'サイズガイド',
    'セール情報表示'
  ],
  tags: ['小売店', 'ファッション', 'EC', 'モダン'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STYLE BOUTIQUE - トレンドファッション</title>
</head>
<body>
    <div class="announcement-bar">
        <p>期間限定セール開催中！全品20%OFF</p>
    </div>
    
    <header class="header">
        <div class="header-container">
            <div class="header-left">
                <button class="menu-toggle">☰</button>
            </div>
            <div class="logo">
                <h1>STYLE BOUTIQUE</h1>
            </div>
            <div class="header-right">
                <button class="search-btn">🔍</button>
                <button class="cart-btn">🛒 <span class="cart-count">0</span></button>
            </div>
        </div>
        <nav class="main-nav">
            <a href="#new">NEW ARRIVAL</a>
            <a href="#women">WOMEN</a>
            <a href="#men">MEN</a>
            <a href="#sale">SALE</a>
            <a href="#about">ABOUT</a>
        </nav>
    </header>

    <section class="hero-section">
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=800&fit=crop" alt="Fashion Collection">
        </div>
        <div class="hero-content">
            <h2>2025 Spring Collection</h2>
            <p>新作コレクション入荷</p>
            <button class="shop-now-btn">Shop Now</button>
        </div>
    </section>

    <section id="new" class="products-section">
        <div class="container">
            <h2 class="section-title">New Arrivals</h2>
            <div class="products-grid">
                <div class="product-card">
                    <div class="product-image">
                        <span class="badge new">NEW</span>
                        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop" alt="デザイナーTシャツ">
                    </div>
                    <div class="product-info">
                        <h3>デザイナーTシャツ</h3>
                        <p class="price">¥4,500</p>
                        <button class="add-to-cart">カートに追加</button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <span class="badge new">NEW</span>
                        <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop" alt="スリムフィットデニム">
                    </div>
                    <div class="product-info">
                        <h3>スリムフィットデニム</h3>
                        <p class="price">¥8,900</p>
                        <button class="add-to-cart">カートに追加</button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <span class="badge sale">SALE</span>
                        <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop" alt="カジュアルジャケット">
                    </div>
                    <div class="product-info">
                        <h3>カジュアルジャケット</h3>
                        <p class="price">
                            <span class="original-price">¥12,000</span>
                            ¥9,600
                        </p>
                        <button class="add-to-cart">カートに追加</button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&h=500&fit=crop" alt="ワンピース">
                    </div>
                    <div class="product-info">
                        <h3>ワンピース</h3>
                        <p class="price">¥7,200</p>
                        <button class="add-to-cart">カートに追加</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="features-section">
        <div class="container">
            <div class="features-grid">
                <div class="feature">
                    <div class="feature-icon">✓</div>
                    <h3>品質保証</h3>
                    <p>厳選された素材のみ使用</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🚚</div>
                    <h3>送料無料</h3>
                    <p>5,000円以上のご購入で</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">↩</div>
                    <h3>返品可能</h3>
                    <p>30日間返品保証</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">💳</div>
                    <h3>安全な決済</h3>
                    <p>SSL暗号化通信</p>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about-section">
        <div class="container">
            <h2 class="section-title">About Us</h2>
            <div class="about-content">
                <p>STYLE BOUTIQUEは、最新のトレンドを取り入れた高品質なファッションアイテムを提供しています。</p>
                <p>お客様一人ひとりのスタイルを大切にし、自信を持って着られる服をお届けします。</p>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>カスタマーサービス</h3>
                <ul>
                    <li><a href="#">お問い合わせ</a></li>
                    <li><a href="#">サイズガイド</a></li>
                    <li><a href="#">配送について</a></li>
                    <li><a href="#">返品・交換</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>会社情報</h3>
                <ul>
                    <li><a href="#">会社概要</a></li>
                    <li><a href="#">採用情報</a></li>
                    <li><a href="#">プレスリリース</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>フォローする</h3>
                <div class="social-links">
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 STYLE BOUTIQUE. All rights reserved.</p>
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
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    line-height: 1.6;
}

.announcement-bar {
    background: #000;
    color: #fff;
    text-align: center;
    padding: 10px;
    font-size: 14px;
}

.header {
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.header-left, .header-right {
    display: flex;
    gap: 15px;
}

.logo h1 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 3px;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
}

.cart-btn {
    position: relative;
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ff4444;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}

.main-nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 15px 0;
    background: #f8f8f8;
}

.main-nav a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    letter-spacing: 1px;
    transition: color 0.3s;
}

.main-nav a:hover {
    color: #666;
}

.hero-section {
    height: 500px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    overflow: hidden;
}

.hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.3);
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero-content h2 {
    font-size: 48px;
    font-weight: 300;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 30px;
}

.shop-now-btn {
    background: white;
    color: #333;
    padding: 15px 40px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s;
}

.shop-now-btn:hover {
    transform: scale(1.05);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.products-section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 50px;
}

.products-grid {
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
    height: 350px;
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
    padding: 5px 10px;
    font-size: 12px;
    color: white;
    z-index: 1;
}

.badge.new {
    background: #4CAF50;
}

.badge.sale {
    background: #ff4444;
}

.product-info {
    text-align: center;
}

.product-info h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.price {
    font-size: 20px;
    margin-bottom: 15px;
}

.original-price {
    text-decoration: line-through;
    color: #999;
    margin-right: 10px;
}

.add-to-cart {
    background: #000;
    color: white;
    padding: 12px 30px;
    border: none;
    cursor: pointer;
    width: 100%;
    transition: background 0.3s;
}

.add-to-cart:hover {
    background: #333;
}

.features-section {
    background: #f8f8f8;
    padding: 60px 0;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    text-align: center;
}

.feature-icon {
    font-size: 36px;
    margin-bottom: 15px;
}

.feature h3 {
    margin-bottom: 10px;
}

.about-section {
    padding: 80px 0;
}

.about-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.about-content p {
    margin-bottom: 20px;
    font-size: 18px;
}

.footer {
    background: #222;
    color: #fff;
    padding: 50px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-section h3 {
    margin-bottom: 20px;
    font-size: 18px;
}

.footer-section ul {
    list-style: none;
}

.footer-section li {
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

.social-links {
    display: flex;
    gap: 15px;
}

.footer-bottom {
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #444;
    color: #999;
}

@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        gap: 10px;
        padding: 10px 20px;
    }
    
    .main-nav {
        flex-wrap: wrap;
        gap: 10px;
        padding: 10px 0;
    }
    
    .main-nav a {
        font-size: 12px;
        padding: 0 10px;
    }
    
    .hero-content h2 {
        font-size: 28px;
    }
    
    .hero-content p {
        font-size: 16px;
    }
    
    .products-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
    }
    
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
}`,
    js: `// カート機能のシミュレーション
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        document.querySelector('.cart-count').textContent = cartCount;
        
        // アニメーション効果
        this.textContent = '追加しました！';
        this.style.background = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = 'カートに追加';
            this.style.background = '#000';
        }, 1500);
    });
});

// メニュートグル
document.querySelector('.menu-toggle').addEventListener('click', function() {
    alert('モバイルメニュー表示（実装予定）');
});

// 検索機能
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = prompt('検索キーワードを入力:');
    if (searchTerm) {
        alert(\`"\${searchTerm}" を検索中...\`);
    }
});

// カートボタン
document.querySelector('.cart-btn').addEventListener('click', function() {
    alert(\`カート内のアイテム数: \${cartCount}\`);
});`
  }
}