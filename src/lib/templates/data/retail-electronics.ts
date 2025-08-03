import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const retailElectronicsTemplate: WebTemplate = {
  id: 'retail-electronics',
  title: '小売店 - 家電量販店',
  category: TEMPLATE_CATEGORIES.RETAIL,
  description: 'モダンでテクノロジー感溢れる家電量販店向けWebサイトテンプレート',
  thumbnail: '/template-images/retail-electronics.jpg',
  features: [
    '商品比較機能',
    'スペック検索',
    '配送・設置サービス',
    'レビューシステム'
  ],
  tags: ['家電量販店', 'テクノロジー', 'モダン', 'デジタル'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TECH WORLD - 最新家電とデジタルライフの提案</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1 class="logo">TECH WORLD</h1>
                <div class="search-area">
                    <div class="search-box">
                        <input type="text" placeholder="商品を検索...">
                        <select class="category-select">
                            <option>カテゴリー</option>
                            <option>スマートフォン</option>
                            <option>パソコン</option>
                            <option>家電</option>
                            <option>ゲーム</option>
                        </select>
                        <button class="search-btn">🔍</button>
                    </div>
                </div>
                <nav class="nav">
                    <ul>
                        <li><a href="#featured">特集</a></li>
                        <li><a href="#categories">カテゴリ</a></li>
                        <li><a href="#services">サービス</a></li>
                        <li><a href="#support">サポート</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <button class="compare-btn">比較 <span class="compare-count">0</span></button>
                    <button class="cart-btn">🛒 <span class="cart-count">0</span></button>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h2>テクノロジーで未来を創る</h2>
                <p>最新家電・デジタル機器で快適なライフスタイルを</p>
                <a href="#featured" class="btn-tech">今月の特集を見る</a>
            </div>
            <div class="hero-visual">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop" alt="最新テクノロジー">
            </div>
        </div>
    </section>

    <section class="promotion-banner">
        <div class="container">
            <div class="promo-grid">
                <div class="promo-item">
                    <span class="promo-icon">🚚</span>
                    <h3>全国送料無料</h3>
                    <p>3万円以上のお買い上げで</p>
                </div>
                <div class="promo-item">
                    <span class="promo-icon">🔧</span>
                    <h3>設置・設定サービス</h3>
                    <p>専門スタッフが対応</p>
                </div>
                <div class="promo-item">
                    <span class="promo-icon">🛡️</span>
                    <h3>延長保証</h3>
                    <p>最大5年間の安心保証</p>
                </div>
                <div class="promo-item">
                    <span class="promo-icon">💰</span>
                    <h3>下取りサービス</h3>
                    <p>古い製品も高価買取</p>  
                </div>
            </div>
        </div>
    </section>

    <section id="featured" class="featured-products">
        <div class="container">
            <h2 class="section-title">今月の特集商品</h2>
            <div class="product-grid">
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" alt="スマートフォン">
                        <span class="badge hot">HOT</span>
                        <button class="compare-add" data-product="smartphone">比較に追加</button>
                    </div>
                    <div class="product-info">
                        <h3>最新5Gスマートフォン</h3>
                        <div class="specs">
                            <span>128GB</span>
                            <span>6.1インチ</span>
                            <span>5G対応</span>
                        </div>
                        <div class="rating">
                            <span class="stars">★★★★☆</span>
                            <span class="review-count">(124件)</span>
                        </div>
                        <div class="price-info">
                            <span class="original-price">¥89,800</span>
                            <span class="sale-price">¥79,800</span>
                            <span class="discount">11%OFF</span>
                        </div>
                        <button class="add-to-cart">カートに追加</button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop" alt="ノートパソコン">
                        <span class="badge new">NEW</span>
                        <button class="compare-add" data-product="laptop">比較に追加</button>
                    </div>
                    <div class="product-info">
                        <h3>高性能ノートパソコン</h3>
                        <div class="specs">
                            <span>Intel i7</span>
                            <span>16GB RAM</span>
                            <span>512GB SSD</span>
                        </div>
                        <div class="rating">
                            <span class="stars">★★★★★</span>
                            <span class="review-count">(89件)</span>
                        </div>
                        <div class="price-info">
                            <span class="sale-price">¥159,800</span>
                        </div>
                        <button class="add-to-cart">カートに追加</button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="4Kテレビ">
                        <span class="badge sale">SALE</span>
                        <button class="compare-add" data-product="tv">比較に追加</button>
                    </div>
                    <div class="product-info">
                        <h3>55型4K有機ELテレビ</h3>
                        <div class="specs">
                            <span>4K対応</span>
                            <span>HDR10</span>
                            <span>スマートTV</span>
                        </div>
                        <div class="rating">
                            <span class="stars">★★★★☆</span>
                            <span class="review-count">(256件)</span>
                        </div>
                        <div class="price-info">
                            <span class="original-price">¥198,000</span>
                            <span class="sale-price">¥149,800</span>
                            <span class="discount">24%OFF</span>
                        </div>
                        <button class="add-to-cart">カートに追加</button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" alt="ワイヤレスイヤホン">
                        <button class="compare-add" data-product="earphones">比較に追加</button>
                    </div>
                    <div class="product-info">
                        <h3>ノイズキャンセリングイヤホン</h3>
                        <div class="specs">
                            <span>ANC対応</span>
                            <span>30時間再生</span>
                            <span>防水IPX4</span>
                        </div>
                        <div class="rating">
                            <span class="stars">★★★★★</span>
                            <span class="review-count">(342件)</span>
                        </div>
                        <div class="price-info">
                            <span class="sale-price">¥24,800</span>
                        </div>
                        <button class="add-to-cart">カートに追加</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="categories" class="categories">
        <div class="container">
            <h2 class="section-title">カテゴリー</h2>
            <div class="category-grid">
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop" alt="スマートフォン・タブレット">
                    <div class="category-info">
                        <h3>スマートフォン・タブレット</h3>
                        <p>最新モデルから人気機種まで</p>
                        <span class="item-count">1,234商品</span>
                    </div>
                </a>
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop" alt="パソコン・周辺機器">
                    <div class="category-info">
                        <h3>パソコン・周辺機器</h3>
                        <p>デスクトップからモバイルまで</p>
                        <span class="item-count">856商品</span>
                    </div>
                </a>
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" alt="テレビ・オーディオ">
                    <div class="category-info">
                        <h3>テレビ・オーディオ</h3>
                        <p>4K・8K対応の最新映像機器</p>
                        <span class="item-count">567商品</span>
                    </div>
                </a>
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop" alt="生活家電">
                    <div class="category-info">
                        <h3>生活家電</h3>
                        <p>便利で快適な暮らしをサポート</p>
                        <span class="item-count">1,789商品</span>
                    </div>
                </a>
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" alt="ゲーム">
                    <div class="category-info">
                        <h3>ゲーム・ホビー</h3>
                        <p>最新ゲーム機とソフト</p>
                        <span class="item-count">678商品</span>
                    </div>
                </a>
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=300&h=200&fit=crop" alt="カメラ・ビデオ">
                    <div class="category-info">
                        <h3>カメラ・ビデオ</h3>
                        <p>プロ仕様から入門機まで</p>
                        <span class="item-count">423商品</span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">充実のサービス</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🚚</div>
                    <h3>配送・設置サービス</h3>
                    <p>大型家電の配送から設置、古い製品の回収まで、専門スタッフがしっかりサポートします。</p>
                    <ul>
                        <li>・全国配送対応</li>
                        <li>・設置・接続作業</li>
                        <li>・古い製品の引き取り</li>
                        <li>・動作確認サービス</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">🛡️</div>
                    <h3>延長保証サービス</h3>
                    <p>メーカー保証を延長し、長期間にわたって安心してご利用いただけます。</p>
                    <ul>
                        <li>・最大5年間の保証</li>
                        <li>・修理回数制限なし</li>
                        <li>・全国の提携店で対応</li>
                        <li>・代替機貸し出し</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">💻</div>
                    <h3>技術サポート</h3>
                    <p>購入後の設定や使い方まで、技術スタッフが丁寧にサポートします。</p>
                    <ul>
                        <li>・初期設定サポート</li>
                        <li>・使い方講座</li>
                        <li>・電話・チャット対応</li>
                        <li>・出張サポート</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="newsletter">
        <div class="container">
            <div class="newsletter-content">
                <div class="newsletter-text">
                    <h2>お得な情報をお届け</h2>
                    <p>新商品情報やセール情報をいち早くお知らせします</p>
                </div>
                <form class="newsletter-form">
                    <input type="email" placeholder="メールアドレスを入力">
                    <button type="submit" class="btn-tech">登録する</button>
                </form>
            </div>
        </div>
    </section>

    <section id="support" class="support">
        <div class="container">
            <h2 class="section-title">サポート・お問い合わせ</h2>
            <div class="support-grid">
                <div class="support-item">
                    <h3>📞 電話サポート</h3>
                    <p class="support-number">0120-123-456</p>
                    <p>受付時間: 9:00-21:00（年中無休）</p>
                    <p>購入相談・技術サポート・アフターサービス</p>
                </div>
                <div class="support-item">
                    <h3>💬 チャットサポート</h3>
                    <button class="chat-btn">チャットを開始</button>
                    <p>リアルタイムでスタッフがお答えします</p>
                    <p>受付時間: 10:00-20:00</p>
                </div>
                <div class="support-item">
                    <h3>📍 店舗案内</h3>
                    <p>全国50店舗でサービス展開</p>
                    <p>実際に商品を見て、触って、体験できます</p>
                    <a href="#" class="store-locator">店舗を探す</a>
                </div>
                <div class="support-item">
                    <h3>📋 よくある質問</h3>
                    <p>配送・返品・保証など、よくあるご質問にお答えします</p>
                    <a href="#" class="faq-link">FAQを見る</a>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>TECH WORLD</h3>
                    <p>テクノロジーで未来を創る</p>
                    <div class="social-links">
                        <a href="#">YouTube</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>商品カテゴリー</h3>
                    <ul>
                        <li><a href="#">スマートフォン</a></li>
                        <li><a href="#">パソコン</a></li>
                        <li><a href="#">家電</a></li>
                        <li><a href="#">ゲーム</a></li>
                        <li><a href="#">カメラ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>サービス</h3>
                    <ul>
                        <li><a href="#">配送・設置</a></li>
                        <li><a href="#">延長保証</a></li>
                        <li><a href="#">技術サポート</a></li>
                        <li><a href="#">下取りサービス</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>企業情報</h3>
                    <ul>
                        <li><a href="#">会社概要</a></li>
                        <li><a href="#">店舗案内</a></li>
                        <li><a href="#">採用情報</a></li>
                        <li><a href="#">お問い合わせ</a></li>
                    </ul>
                </div>
            </div>
            <p class="copyright">&copy; 2025 TECH WORLD. All rights reserved.</p>
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
    background: #f8f9fa;
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
    background: linear-gradient(45deg, #1a1a2e, #16213e);
    color: white;
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}

.header-content {
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 30px;
    align-items: center;
}

.logo {
    font-size: 28px;
    font-weight: bold;
    color: #00d4ff;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}

.search-area {
    flex: 1;
    max-width: 500px;
}

.search-box {
    display: flex;
    background: white;
    border-radius: 25px;
    overflow: hidden;
}

.search-box input {
    flex: 1;
    padding: 12px 20px;
    border: none;
    outline: none;
    font-size: 14px;
}

.category-select {
    padding: 12px 15px;
    border: none;
    background: #f8f9fa;
    outline: none;
    min-width: 120px;
}

.search-btn {
    padding: 12px 20px;
    background: #00d4ff;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
}

.search-btn:hover {
    background: #0099cc;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
}

.nav a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    transition: color 0.3s;
}

.nav a:hover {
    color: #00d4ff;
}

.header-actions {
    display: flex;
    gap: 20px;
}

.compare-btn,
.cart-btn {
    background: rgba(255,255,255,0.1);
    color: white;
    border: 1px solid rgba(255,255,255,0.3);
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
    position: relative;
}

.compare-btn:hover,
.cart-btn:hover {
    background: rgba(255,255,255,0.2);
}

.compare-count,
.cart-count {
    background: #ff4757;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
}

/* Hero */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 80px 0;
    position: relative;
    overflow: hidden;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-text h2 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #00d4ff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-text p {
    font-size: 20px;
    margin-bottom: 30px;
    opacity: 0.9;
}

.btn-tech {
    display: inline-block;
    padding: 15px 30px;
    background: linear-gradient(45deg, #00d4ff, #0099cc);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}

.btn-tech:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.4);
}

.hero-visual img {
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

/* Promotion Banner */
.promotion-banner {
    background: white;
    padding: 40px 0;
    border-bottom: 1px solid #eee;
}

.promo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.promo-item {
    text-align: center;
    padding: 20px;
}

.promo-icon {
    font-size: 32px;
    margin-bottom: 15px;
    display: block;
}

.promo-item h3 {
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
}

.promo-item p {
    color: #666;
    font-size: 14px;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 50px;
    color: #333;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(45deg, #00d4ff, #0099cc);
    margin: 15px auto;
    border-radius: 2px;
}

/* Products */
.featured-products {
    background: white;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.product-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s;
    position: relative;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.product-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.badge {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
    color: white;
}

.badge.hot {
    background: #ff4757;
}

.badge.new {
    background: #2ed573;
}

.badge.sale {
    background: #ffa502;
}

.compare-add {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0,0,0,0.7);
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 15px;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.3s;
}

.compare-add:hover {
    background: #00d4ff;
}

.product-info {
    padding: 25px;
}

.product-info h3 {
    font-size: 18px;
    margin-bottom: 12px;
    color: #333;
}

.specs {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
}

.specs span {
    background: #f1f3f4;
    padding: 4px 8px;
    border-radius: 10px;
    font-size: 12px;
    color: #666;
}

.rating {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
}

.stars {
    color: #ffa502;
}

.review-count {
    color: #666;
    font-size: 12px;
}

.price-info {
    margin-bottom: 20px;
}

.original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 14px;
    margin-right: 8px;
}

.sale-price {
    font-size: 20px;
    font-weight: bold;
    color: #ff4757;
    margin-right: 8px;
}

.discount {
    background: #ff4757;
    color: white;
    padding: 2px 6px;
    border-radius: 10px;
    font-size: 12px;
}

.add-to-cart {
    width: 100%;
    background: linear-gradient(45deg, #00d4ff, #0099cc);
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
}

.add-to-cart:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}

/* Categories */
.categories {
    background: #f8f9fa;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
}

.category-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    text-decoration: none;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.category-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.category-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.category-info {
    padding: 25px;
}

.category-info h3 {
    font-size: 20px;
    margin-bottom: 8px;
    color: #333;
}

.category-info p {
    color: #666;
    margin-bottom: 10px;
}

.item-count {
    color: #00d4ff;
    font-size: 14px;
    font-weight: bold;
}

/* Services */
.services {
    background: white;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
}

.service-card {
    text-align: center;
    padding: 40px 30px;
    background: #f8f9fa;
    border-radius: 20px;
    transition: all 0.3s;
}

.service-card:hover {
    background: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transform: translateY(-5px);
}

.service-icon {
    font-size: 48px;
    margin-bottom: 20px;
    display: block;
}

.service-card h3 {
    font-size: 24px;
    margin-bottom: 15px;
    color: #333;
}

.service-card p {
    color: #666;
    margin-bottom: 20px;
    line-height: 1.7;
}

.service-card ul {
    text-align: left;
    color: #666;
    list-style: none;
}

.service-card ul li {
    margin-bottom: 8px;
}

/* Newsletter */
.newsletter {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    text-align: center;
}

.newsletter-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

.newsletter-text h2 {
    font-size: 28px;
    margin-bottom: 10px;
}

.newsletter-form {
    display: flex;
    gap: 15px;
    min-width: 400px;
}

.newsletter-form input {
    flex: 1;
    padding: 12px 20px;
    border: none;
    border-radius: 25px;
    outline: none;
}

/* Support */
.support {
    background: white;
}

.support-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.support-item {
    text-align: center;
    padding: 30px;
    background: #f8f9fa;
    border-radius: 15px;
    transition: all 0.3s;
}

.support-item:hover {
    background: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.support-item h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #333;
}

.support-number {
    font-size: 24px;
    font-weight: bold;
    color: #00d4ff;
    margin-bottom: 10px;
}

.chat-btn,
.store-locator,
.faq-link {
    display: inline-block;
    background: #00d4ff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 10px;
}

.chat-btn:hover,
.store-locator:hover,
.faq-link:hover {
    background: #0099cc;
    transform: translateY(-1px);
}

/* Footer */
.footer {
    background: #1a1a2e;
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
    color: #00d4ff;
    font-size: 18px;
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
    font-size: 14px;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #00d4ff;
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
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .search-area {
        order: -1;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-text h2 {
        font-size: 32px;
    }
    
    .newsletter-content {
        flex-direction: column;
        text-align: center;
    }
    
    .newsletter-form {
        min-width: auto;
        width: 100%;
    }
    
    .newsletter-form {
        flex-direction: column;
    }
}`,
    js: `// Search functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-box input').value;
    const category = document.querySelector('.category-select').value;
    
    if (searchTerm.trim()) {
        alert(\`検索中: "\${searchTerm}"\${category !== 'カテゴリー' ? \` in \${category}\` : ''}\`);
        // 実際の検索処理をここに実装
    }
});

// Enter key search
document.querySelector('.search-box input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-btn').click();
    }
});

// Compare functionality
let compareList = [];
const maxCompare = 3;

document.querySelectorAll('.compare-add').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.product;
        
        if (compareList.includes(productId)) {
            // Remove from compare
            compareList = compareList.filter(id => id !== productId);
            this.textContent = '比較に追加';
            this.style.background = 'rgba(0,0,0,0.7)';
        } else {
            // Add to compare
            if (compareList.length < maxCompare) {
                compareList.push(productId);
                this.textContent = '比較中';
                this.style.background = '#00d4ff';
            } else {
                alert(\`比較は最大\${maxCompare}商品までです\`);
                return;
            }
        }
        
        updateCompareCount();
    });
});

function updateCompareCount() {
    const countElement = document.querySelector('.compare-count');
    countElement.textContent = compareList.length;
    
    if (compareList.length > 0) {
        countElement.style.display = 'inline-flex';
    } else {
        countElement.style.display = 'none';
    }
}

// Compare button click
document.querySelector('.compare-btn').addEventListener('click', function() {
    if (compareList.length > 1) {
        alert(\`\${compareList.length}商品の比較ページを表示します\\n比較商品: \${compareList.join(', ')}\`);
    } else {
        alert('比較するには2商品以上選択してください');
    }
});

// Add to cart functionality
let cartItems = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const price = productCard.querySelector('.sale-price').textContent;
        
        cartItems++;
        updateCartCount();
        
        // Visual feedback
        this.textContent = 'カートに追加済み';
        this.style.background = '#2ed573';
        setTimeout(() => {
            this.textContent = 'カートに追加';
            this.style.background = 'linear-gradient(45deg, #00d4ff, #0099cc)';
        }, 2000);
        
        alert(\`\${productName} を カートに追加しました\\n価格: \${price}\`);
    });
});

function updateCartCount() {
    const countElement = document.querySelector('.cart-count');
    countElement.textContent = cartItems;
    
    if (cartItems > 0) {
        countElement.style.display = 'inline-flex';
    } else {
        countElement.style.display = 'none';
    }
}

// Cart button click
document.querySelector('.cart-btn').addEventListener('click', function() {
    if (cartItems > 0) {
        alert(\`カートページを表示します\\n商品数: \${cartItems}点\`);
    } else {
        alert('カートは空です');
    }
});

// Category navigation
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const categoryName = this.querySelector('h3').textContent;
        const itemCount = this.querySelector('.item-count').textContent;
        alert(\`\${categoryName} のページに移動します\\n\${itemCount}\`);
    });
});

// Newsletter subscription
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    if (email && email.includes('@')) {
        alert(\`\${email} でニュースレターに登録しました\`);
        this.querySelector('input').value = '';
    } else {
        alert('正しいメールアドレスを入力してください');
    }
});

// Support interactions
document.querySelector('.chat-btn').addEventListener('click', function() {
    alert('チャットサポートを開始します\\n\\n担当者が接続されるまでお待ちください...');
});

document.querySelectorAll('.store-locator, .faq-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const text = this.textContent;
        alert(\`\${text}ページに移動します\`);
    });
});

// Smooth scrolling
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

// Initialize
updateCompareCount();
updateCartCount();`
  }
}