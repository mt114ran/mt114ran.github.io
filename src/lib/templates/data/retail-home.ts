import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const retailHomeTemplate: WebTemplate = {
  id: 'retail-home',
  title: '小売店 - ホームセンター',
  category: TEMPLATE_CATEGORIES.RETAIL,
  description: '実用的で信頼感のあるホームセンター向けWebサイトテンプレート',
  thumbnail: '/template-images/retail-home.jpg',
  features: [
    'DIY・工具カテゴリ',
    '園芸・ガーデニング',
    '配送・設置サービス',
    'プロ向け商品'
  ],
  tags: ['ホームセンター', 'DIY', '実用的', '生活用品'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HOME CRAFT CENTER - 暮らしをつくる、住まいを創る</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1 class="logo">HOME CRAFT</h1>
                <div class="search-section">
                    <div class="search-box">
                        <input type="text" placeholder="商品を検索...">
                        <select class="category-select">
                            <option>全カテゴリー</option>
                            <option>工具・電動工具</option>
                            <option>資材・建材</option>
                            <option>園芸・ガーデニング</option>
                            <option>家庭用品・生活雑貨</option>
                        </select>
                        <button class="search-btn">🔍</button>
                    </div>
                </div>
                <nav class="nav">
                    <ul>
                        <li><a href="#categories">カテゴリー</a></li>
                        <li><a href="#diy">DIY特集</a></li>
                        <li><a href="#garden">ガーデニング</a></li>
                        <li><a href="#services">サービス</a></li>
                        <li><a href="#pro">プロ向け</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <button class="store-locator">店舗検索</button>
                    <button class="cart-btn">🛒 <span class="cart-count">0</span></button>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h2>暮らしをつくる<br>住まいを創る</h2>
            <p>DIYから本格的なリフォームまで、あなたの「つくりたい」を応援します</p>
            <div class="hero-actions">
                <a href="#categories" class="btn-primary">商品を探す</a>
                <a href="#diy" class="btn-secondary">DIYアイデア</a>
            </div>
        </div>
        <div class="hero-visual">
            <img src="https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=800&h=600&fit=crop&q=80" alt="ホームセンター">
        </div>
    </section>

    <section class="services-banner">
        <div class="container">
            <div class="services-grid">
                <div class="service-item">
                    <div class="service-icon">🚚</div>
                    <h3>配送・設置サービス</h3>
                    <p>大型商品も安心配送</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">🛠️</div>
                    <h3>カット・加工サービス</h3>
                    <p>木材・金属の加工承ります</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">🏠</div>
                    <h3>リフォーム相談</h3>
                    <p>専門スタッフがご提案</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">📚</div>
                    <h3>DIY教室</h3>
                    <p>初心者向け講座開催</p>
                </div>
            </div>
        </div>
    </section>

    <section id="categories" class="categories">
        <div class="container">
            <h2 class="section-title">商品カテゴリー</h2>
            <div class="category-grid">
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop&q=80" alt="工具・電動工具">
                    <div class="category-info">
                        <h3>工具・電動工具</h3>
                        <p>プロ仕様から家庭用まで豊富な品揃え</p>
                        <div class="category-features">
                            <span>電動ドリル</span>
                            <span>インパクトドライバー</span>
                            <span>のこぎり</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=400&h=300&fit=crop&q=80" alt="資材・建材">
                    <div class="category-info">
                        <h3>資材・建材</h3>
                        <p>木材からコンクリートまで幅広く対応</p>
                        <div class="category-features">
                            <span>木材</span>
                            <span>金属材</span>
                            <span>塗料</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&q=80" alt="園芸・ガーデニング">
                    <div class="category-info">
                        <h3>園芸・ガーデニング</h3>
                        <p>美しい庭づくりをサポート</p>
                        <div class="category-features">
                            <span>花・苗</span>
                            <span>園芸用品</span>
                            <span>肥料</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop&q=80" alt="家庭用品">
                    <div class="category-info">
                        <h3>家庭用品・生活雑貨</h3>
                        <p>毎日の暮らしに必要なアイテム</p>
                        <div class="category-features">
                            <span>収納用品</span>
                            <span>掃除用具</span>
                            <span>キッチン用品</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&q=80" alt="家電・電設">
                    <div class="category-info">
                        <h3>家電・電設機器</h3>
                        <p>家庭からオフィスまで対応</p>
                        <div class="category-features">
                            <span>照明器具</span>
                            <span>配線部材</span>
                            <span>家電製品</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="category-card">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80" alt="ペット・アウトドア">
                    <div class="category-info">
                        <h3>ペット・アウトドア</h3>
                        <p>ペット用品からアウトドアグッズまで</p>
                        <div class="category-features">
                            <span>ペット用品</span>
                            <span>キャンプ用品</span>
                            <span>バーベキュー</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section class="featured-products">
        <div class="container">
            <h2 class="section-title">おすすめ商品</h2>
            <div class="product-tabs">
                <button class="tab-btn active" data-category="popular">人気商品</button>
                <button class="tab-btn" data-category="new">新商品</button>
                <button class="tab-btn" data-category="sale">特価商品</button>
            </div>
            <div class="products-grid">
                <div class="product-card" data-category="popular">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&h=200&fit=crop&q=80" alt="充電式ドライバー">
                        <span class="badge bestseller">ベストセラー</span>
                        <button class="quick-add" data-product="cordless-driver">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>充電式インパクトドライバー</h3>
                        <p class="brand">MAKITA</p>
                        <div class="product-specs">
                            <span>18V</span>
                            <span>軽量1.5kg</span>
                            <span>LED付き</span>
                        </div>
                        <div class="rating">
                            <span class="stars">★★★★★</span>
                            <span class="review-count">(234件)</span>
                        </div>
                        <p class="price">¥28,800</p>
                    </div>
                </div>
                <div class="product-card" data-category="new">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop&q=80" alt="園芸セット">
                        <span class="badge new">新商品</span>
                        <button class="quick-add" data-product="garden-set">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>ガーデニングスターターセット</h3>
                        <p class="brand">GREEN CRAFT</p>
                        <div class="product-specs">
                            <span>10点セット</span>
                            <span>初心者向け</span>
                            <span>説明書付き</span>
                        </div>
                        <div class="rating">
                            <span class="stars">★★★★☆</span>
                            <span class="review-count">(89件)</span>
                        </div>
                        <p class="price">¥4,980</p>
                    </div>
                </div>
                <div class="product-card" data-category="sale">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=300&h=200&fit=crop&q=80" alt="木材セット">
                        <span class="badge sale">30%OFF</span>
                        <button class="quick-add" data-product="wood-set">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>DIY用木材セット</h3>
                        <p class="brand">WOOD CRAFT</p>
                        <div class="product-specs">
                            <span>SPF材</span>
                            <span>5種類</span>
                            <span>カット済み</span>
                        </div>
                        <div class="rating">
                            <span class="stars">★★★★☆</span>
                            <span class="review-count">(156件)</span>
                        </div>
                        <div class="price-info">
                            <span class="original-price">¥8,500</span>
                            <span class="sale-price">¥5,950</span>
                        </div>
                    </div>
                </div>
                <div class="product-card" data-category="popular">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=200&fit=crop&q=80" alt="収納ボックス">
                        <button class="quick-add" data-product="storage-box">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>多機能収納ボックス</h3>
                        <p class="brand">STORAGE PRO</p>
                        <div class="product-specs">
                            <span>75L</span>
                            <span>積み重ね可</span>
                            <span>透明窓付き</span>
                        </div>
                        <div class="rating">
                            <span class="stars">★★★★☆</span>
                            <span class="review-count">(123件)</span>
                        </div>
                        <p class="price">¥2,980</p>
                    </div>
                </div>
                <div class="product-card" data-category="new">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop&q=80" alt="LED照明">
                        <span class="badge new">新商品</span>
                        <button class="quick-add" data-product="led-light">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>高効率LED照明器具</h3>
                        <p class="brand">LIGHT TECH</p>
                        <div class="product-specs">
                            <span>60W相当</span>
                            <span>調光可能</span>
                            <span>10年保証</span>
                        </div>
                        <div class="rating">
                            <span class="stars">★★★★★</span>
                            <span class="review-count">(67件)</span>
                        </div>
                        <p class="price">¥12,800</p>
                    </div>
                </div>
                <div class="product-card" data-category="sale">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&q=80" alt="工具セット">
                        <span class="badge sale">25%OFF</span>
                        <button class="quick-add" data-product="tool-set">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>家庭用工具セット</h3>
                        <p class="brand">TOOL MASTER</p>
                        <div class="product-specs">
                            <span>35点セット</span>
                            <span>収納ケース付</span>
                            <span>保証書付</span>
                        </div>
                        <div class="rating">
                            <span class="stars">★★★★☆</span>
                            <span class="review-count">(189件)</span>
                        </div>
                        <div class="price-info">
                            <span class="original-price">¥15,800</span>
                            <span class="sale-price">¥11,850</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="diy" class="diy-section">
        <div class="container">
            <h2 class="section-title">DIY特集</h2>
            <div class="diy-grid">
                <div class="diy-project">
                    <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&q=80" alt="棚作りDIY">
                    <div class="diy-info">
                        <h3>簡単！収納棚をDIY</h3>
                        <p>初心者でも作れる実用的な収納棚の作り方をご紹介。必要な工具や材料もリストアップ。</p>
                        <div class="diy-meta">
                            <span class="difficulty">難易度: ★★☆☆☆</span>
                            <span class="time">所要時間: 3時間</span>
                        </div>
                        <a href="#" class="diy-link">作り方を見る</a>
                    </div>
                </div>
                <div class="diy-project">
                    <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=250&fit=crop&q=80" alt="ガーデンDIY">
                    <div class="diy-info">
                        <h3>ベランダガーデンを作ろう</h3>
                        <p>限られたスペースでも楽しめるベランダガーデンの作り方。季節の花を楽しもう。</p>
                        <div class="diy-meta">
                            <span class="difficulty">難易度: ★☆☆☆☆</span>
                            <span class="time">所要時間: 1時間</span>
                        </div>
                        <a href="#" class="diy-link">作り方を見る</a>
                    </div>
                </div>
                <div class="diy-project">
                    <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop&q=80" alt="照明DIY">
                    <div class="diy-info">
                        <h3>おしゃれな間接照明</h3>
                        <p>お部屋の雰囲気を変える間接照明をDIY。電気工事不要で簡単設置。</p>
                        <div class="diy-meta">
                            <span class="difficulty">難易度: ★★★☆☆</span>
                            <span class="time">所要時間: 2時間</span>
                        </div>
                        <a href="#" class="diy-link">作り方を見る</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="garden" class="garden-section">
        <div class="container">
            <div class="garden-content">
                <div class="garden-text">
                    <h2>ガーデニング・園芸</h2>
                    <p>季節の花々で彩る美しい庭づくりをサポートします。</p>
                    <p>初心者からベテランまで、レベルに合わせたアドバイスをご提供。</p>
                    <div class="seasonal-plants">
                        <h3>今月のおすすめ植物</h3>
                        <div class="plant-list">
                            <div class="plant-item">
                                <h4>🌸 夏の花</h4>
                                <p>ひまわり、朝顔、マリーゴールド</p>
                            </div>
                            <div class="plant-item">
                                <h4>🌿 ハーブ</h4>
                                <p>バジル、ミント、ローズマリー</p>
                            </div>
                            <div class="plant-item">
                                <h4>🥬 野菜</h4>
                                <p>トマト、きゅうり、なす</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn-primary">園芸コーナーを見る</a>
                </div>
                <div class="garden-visual">
                    <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80" alt="ガーデニング">
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services-detail">
        <div class="container">
            <h2 class="section-title">充実のサービス</h2>
            <div class="services-detail-grid">
                <div class="service-detail-card">
                    <div class="service-detail-icon">🚚</div>
                    <h3>配送・設置サービス</h3>
                    <p>重い建材や大型商品も安心してお任せください。</p>
                    <ul>
                        <li>・大型商品配送（2tトラック対応）</li>
                        <li>・家具・家電の設置</li>
                        <li>・不要品の回収</li>
                        <li>・時間指定配送</li>
                    </ul>
                    <div class="service-price">配送料: ¥1,500〜</div>
                </div>
                <div class="service-detail-card">
                    <div class="service-detail-icon">🛠️</div>
                    <h3>カット・加工サービス</h3>
                    <p>木材・金属材の精密加工を承ります。</p>
                    <ul>
                        <li>・木材カット（直線・曲線）</li>
                        <li>・穴あけ加工</li>
                        <li>・金属材カット</li>
                        <li>・図面からの加工</li>
                    </ul>
                    <div class="service-price">加工料: ¥100〜</div>
                </div>
                <div class="service-detail-card">
                    <div class="service-detail-icon">🏠</div>
                    <h3>リフォーム相談</h3>
                    <p>プロのリフォームプランナーがご提案。</p>
                    <ul>
                        <li>・無料相談・見積もり</li>
                        <li>・3Dシミュレーション</li>
                        <li>・施工業者紹介</li>
                        <li>・アフターフォロー</li>
                    </ul>
                    <div class="service-price">相談料: 無料</div>
                </div>
            </div>
        </div>
    </section>

    <section id="pro" class="pro-section">
        <div class="container">
            <h2 class="section-title">プロ向けサービス</h2>
            <div class="pro-content">
                <div class="pro-benefits">
                    <h3>法人・建設業者様向け特典</h3>
                    <div class="benefits-grid">
                        <div class="benefit-item">
                            <h4>💰 大口割引</h4>
                            <p>まとめ買いで最大20%OFF</p>
                        </div>
                        <div class="benefit-item">
                            <h4>📞 専用サポート</h4>
                            <p>プロサポートデスク</p>
                        </div>
                        <div class="benefit-item">
                            <h4>🚚 優先配送</h4>
                            <p>現場直送・時間指定</p>
                        </div>
                        <div class="benefit-item">
                            <h4>📋 後払い決済</h4>
                            <p>月末締め翌月払い</p>
                        </div>
                    </div>
                </div>
                <div class="pro-registration">
                    <h3>プロ会員登録</h3>
                    <p>建設業・工務店・設計事務所の皆様</p>
                    <p>プロ会員登録で特別価格でご提供いたします</p>
                    <a href="#" class="btn-primary">プロ会員登録</a>
                </div>
            </div>
        </div>
    </section>

    <section class="newsletter">
        <div class="container">
            <div class="newsletter-content">
                <div class="newsletter-text">
                    <h2>お得情報をお届け</h2>
                    <p>セール情報、新商品、DIYアイデアをメールでお送りします</p>
                </div>
                <form class="newsletter-form">
                    <input type="email" placeholder="メールアドレスを入力" required>
                    <button type="submit" class="btn-primary">登録する</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>HOME CRAFT CENTER</h3>
                    <p>暮らしをつくる、住まいを創る</p>
                    <div class="store-hours">
                        <h4>営業時間</h4>
                        <p>平日: 9:00-20:00</p>
                        <p>土日祝: 9:00-19:00</p>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>商品カテゴリー</h3>
                    <ul>
                        <li><a href="#">工具・電動工具</a></li>
                        <li><a href="#">資材・建材</a></li>
                        <li><a href="#">園芸・ガーデニング</a></li>
                        <li><a href="#">家庭用品</a></li>
                        <li><a href="#">家電・電設</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>サービス</h3>
                    <ul>
                        <li><a href="#">配送・設置</a></li>
                        <li><a href="#">カット・加工</a></li>
                        <li><a href="#">リフォーム相談</a></li>
                        <li><a href="#">DIY教室</a></li>
                        <li><a href="#">プロ向けサービス</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>サポート</h3>
                    <ul>
                        <li><a href="#">よくある質問</a></li>
                        <li><a href="#">配送について</a></li>
                        <li><a href="#">返品・交換</a></li>
                        <li><a href="#">お問い合わせ</a></li>
                        <li><a href="#">店舗案内</a></li>
                    </ul>
                </div>
            </div>
            <p class="copyright">&copy; 2025 HOME CRAFT CENTER. All rights reserved.</p>
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
    font-family: 'Arial', 'Yu Gothic', sans-serif;
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
    background: linear-gradient(135deg, #2c5530 0%, #3d7c47 100%);
    color: white;
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 3px 15px rgba(0,0,0,0.2);
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
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.search-section {
    flex: 1;
    max-width: 500px;
}

.search-box {
    display: flex;
    background: white;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
    min-width: 140px;
    border-left: 1px solid #e0e0e0;
}

.search-btn {
    padding: 12px 20px;
    background: #2c5530;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
}

.search-btn:hover {
    background: #1e3b21;
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
    font-weight: 500;
    transition: color 0.3s;
}

.nav a:hover {
    color: #a8d5aa;
}

.header-actions {
    display: flex;
    gap: 15px;
}

.store-locator,
.cart-btn {
    background: rgba(255,255,255,0.15);
    color: white;
    border: 1px solid rgba(255,255,255,0.3);
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
}

.store-locator:hover,
.cart-btn:hover {
    background: rgba(255,255,255,0.25);
}

.cart-count {
    background: #ff4444;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    display: none;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
}

/* Hero */
.hero {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 80px 0;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-content h2 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 25px;
    color: #2c5530;
    line-height: 1.2;
}

.hero-content p {
    font-size: 18px;
    margin-bottom: 40px;
    color: #666;
    line-height: 1.7;
}

.hero-actions {
    display: flex;
    gap: 20px;
}

.btn-primary,
.btn-secondary {
    display: inline-block;
    padding: 15px 30px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
    border: none;
}

.btn-primary {
    background: linear-gradient(135deg, #2c5530, #3d7c47);
    color: white;
    box-shadow: 0 4px 15px rgba(44, 85, 48, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(44, 85, 48, 0.4);
}

.btn-secondary {
    background: transparent;
    color: #2c5530;
    border: 2px solid #2c5530;
}

.btn-secondary:hover {
    background: #2c5530;
    color: white;
}

.hero-visual img {
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

/* Services Banner */
.services-banner {
    background: white;
    padding: 60px 0;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.service-item {
    text-align: center;
    padding: 30px 20px;
}

.service-icon {
    font-size: 48px;
    margin-bottom: 20px;
    display: block;
}

.service-item h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #2c5530;
    font-weight: 600;
}

.service-item p {
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
    color: #2c5530;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #2c5530, #3d7c47);
    margin: 15px auto;
    border-radius: 2px;
}

/* Categories */
.categories {
    background: white;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
}

.category-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    text-decoration: none;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
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
    margin-bottom: 10px;
    color: #2c5530;
    font-weight: 600;
}

.category-info p {
    color: #666;
    margin-bottom: 15px;
    font-size: 14px;
}

.category-features {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.category-features span {
    background: #e8f5e8;
    color: #2c5530;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
}

/* Featured Products */
.featured-products {
    background: #f8f9fa;
}

.product-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
}

.tab-btn {
    background: white;
    border: 2px solid #e0e0e0;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    color: #666;
    font-weight: 500;
}

.tab-btn.active,
.tab-btn:hover {
    background: #2c5530;
    border-color: #2c5530;
    color: white;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.product-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.product-image {
    position: relative;
    height: 200px;
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
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
    color: white;
}

.badge.bestseller {
    background: #ff6b35;
}

.badge.new {
    background: #2ed573;
}

.badge.sale {
    background: #ff4757;
}

.quick-add {
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: rgba(44, 85, 48, 0.9);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 15px;
    font-size: 12px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s;
}

.product-card:hover .quick-add {
    opacity: 1;
}

.product-info {
    padding: 25px;
}

.product-info h3 {
    font-size: 16px;
    margin-bottom: 8px;
    color: #333;
    font-weight: 600;
}

.brand {
    color: #2c5530;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.product-specs {
    display: flex;
    gap: 6px;
    margin-bottom: 12px;
    flex-wrap: wrap;
}

.product-specs span {
    background: #f1f3f4;
    padding: 3px 8px;
    border-radius: 10px;
    font-size: 11px;
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
    font-size: 14px;
}

.review-count {
    color: #999;
    font-size: 12px;
}

.price {
    font-size: 18px;
    color: #2c5530;
    font-weight: bold;
}

.price-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 14px;
}

.sale-price {
    font-size: 18px;
    color: #ff4757;
    font-weight: bold;
}

/* DIY Section */
.diy-section {
    background: white;
}

.diy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
}

.diy-project {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.diy-project:hover {
    transform: translateY(-5px);
}

.diy-project img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.diy-info {
    padding: 25px;
}

.diy-info h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #2c5530;
    font-weight: 600;
}

.diy-info p {
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
}

.diy-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #666;
}

.difficulty {
    color: #ff6b35;
    font-weight: 500;
}

.diy-link {
    color: #2c5530;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid #2c5530;
    padding-bottom: 2px;
    transition: all 0.3s;
}

.diy-link:hover {
    color: #3d7c47;
    border-bottom-color: #3d7c47;
}

/* Garden Section */
.garden-section {
    background: #f8f9fa;
}

.garden-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.garden-text h2 {
    font-size: 36px;
    margin-bottom: 25px;
    color: #2c5530;
    font-weight: bold;
}

.garden-text p {
    margin-bottom: 20px;
    color: #666;
    line-height: 1.7;
}

.seasonal-plants {
    background: white;
    padding: 30px;
    border-radius: 15px;
    margin: 30px 0;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.seasonal-plants h3 {
    font-size: 20px;
    margin-bottom: 20px;
    color: #2c5530;
}

.plant-list {
    display: grid;
    gap: 15px;
}

.plant-item h4 {
    font-size: 16px;
    margin-bottom: 5px;
    color: #2c5530;
}

.plant-item p {
    font-size: 14px;
    color: #666;
}

.garden-visual img {
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

/* Services Detail */
.services-detail {
    background: white;
}

.services-detail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 40px;
}

.service-detail-card {
    background: #f8f9fa;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s;
}

.service-detail-card:hover {
    background: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transform: translateY(-5px);
}

.service-detail-icon {
    font-size: 48px;
    margin-bottom: 25px;
    display: block;
}

.service-detail-card h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #2c5530;
    font-weight: bold;
}

.service-detail-card p {
    color: #666;
    margin-bottom: 25px;
    line-height: 1.7;
}

.service-detail-card ul {
    text-align: left;
    list-style: none;
    margin-bottom: 25px;
}

.service-detail-card ul li {
    margin-bottom: 8px;
    color: #666;
    padding-left: 15px;
    position: relative;
}

.service-detail-card ul li::before {
    content: '✓';
    color: #2c5530;
    font-weight: bold;
    position: absolute;
    left: 0;
}

.service-price {
    background: #e8f5e8;
    color: #2c5530;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    display: inline-block;
}

/* Pro Section */
.pro-section {
    background: #f8f9fa;
}

.pro-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    align-items: start;
}

.pro-benefits h3 {
    font-size: 28px;
    margin-bottom: 30px;
    color: #2c5530;
    font-weight: bold;
}

.benefits-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.benefit-item {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.benefit-item h4 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #2c5530;
    font-weight: 600;
}

.benefit-item p {
    color: #666;
    font-size: 14px;
}

.pro-registration {
    background: linear-gradient(135deg, #2c5530, #3d7c47);
    color: white;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
}

.pro-registration h3 {
    font-size: 24px;
    margin-bottom: 20px;
}

.pro-registration p {
    margin-bottom: 15px;
    opacity: 0.9;
}

.pro-registration .btn-primary {
    background: white;
    color: #2c5530;
    margin-top: 20px;
}

.pro-registration .btn-primary:hover {
    background: #f8f9fa;
}

/* Newsletter */
.newsletter {
    background: linear-gradient(135deg, #2c5530, #3d7c47);
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
    margin-bottom: 15px;
}

.newsletter-text p {
    opacity: 0.9;
}

.newsletter-form {
    display: flex;
    gap: 15px;
    min-width: 400px;
}

.newsletter-form input {
    flex: 1;
    padding: 15px 20px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
}

.newsletter-form .btn-primary {
    background: white;
    color: #2c5530;
    box-shadow: none;
}

.newsletter-form .btn-primary:hover {
    background: #f8f9fa;
}

/* Footer */
.footer {
    background: #2c2c2c;
    color: white;
    padding: 60px 0 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-section h3 {
    margin-bottom: 20px;
    color: #3d7c47;
    font-size: 18px;
    font-weight: bold;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section a {
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #3d7c47;
}

.store-hours h4 {
    margin: 20px 0 10px;
    color: #3d7c47;
}

.store-hours p {
    margin-bottom: 5px;
    font-size: 14px;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #444;
    color: #999;
    font-size: 14px;
}

/* Responsive */
@media (max-width: 768px) {
    .header-content {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .hero-content,
    .garden-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .hero-content h2 {
        font-size: 36px;
    }
    
    .newsletter-content {
        flex-direction: column;
        text-align: center;
    }
    
    .newsletter-form {
        min-width: auto;
        width: 100%;
    }
    
    .pro-content {
        grid-template-columns: 1fr;
    }
    
    .benefits-grid {
        grid-template-columns: 1fr;
    }
}`,
    js: `// Search functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-box input').value;
    const category = document.querySelector('.category-select').value;
    
    if (searchTerm.trim()) {
        alert(\`検索中: "\${searchTerm}"\${category !== '全カテゴリー' ? \` in \${category}\` : ''}\`);
    }
});

// Enter key search
document.querySelector('.search-box input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-btn').click();
    }
});

// Product tabs functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide products based on category
        document.querySelectorAll('.product-card').forEach(card => {
            if (card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Cart functionality
let cartItems = 0;

document.querySelectorAll('.quick-add').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.product;
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const brand = productCard.querySelector('.brand').textContent;
        const priceElement = productCard.querySelector('.price, .sale-price');
        const price = priceElement ? priceElement.textContent : '価格未設定';
        
        cartItems++;
        updateCartCount();
        
        // Visual feedback
        this.textContent = '追加済み';
        this.style.background = '#2ed573';
        setTimeout(() => {
            this.textContent = 'カートに追加';
            this.style.background = 'rgba(44, 85, 48, 0.9)';
        }, 2000);
        
        alert(\`\${brand} \${productName} をカートに追加しました\\n価格: \${price}\`);
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
        alert(\`\${categoryName} のページに移動します\`);
    });
});

// DIY project links
document.querySelectorAll('.diy-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectTitle = this.closest('.diy-project').querySelector('h3').textContent;
        alert(\`\${projectTitle} の詳細ページに移動します\\n\\n必要な工具・材料リストと詳しい作り方をご紹介しています。\`);
    });
});

// Store locator
document.querySelector('.store-locator').addEventListener('click', function() {
    alert('店舗検索ページに移動します\\n\\n最寄りの店舗を検索できます：\\n・住所から検索\\n・現在地から検索\\n・駅名から検索');
});

// Newsletter subscription
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input').value;
    
    if (email && email.includes('@')) {
        alert(\`\${email} でニュースレターに登録しました\\n\\n以下の情報をお届けします：\\n・セール・特価情報\\n・新商品入荷情報\\n・DIYアイデア・作り方\\n・季節のガーデニング情報\`);
        this.querySelector('input').value = '';
    } else {
        alert('正しいメールアドレスを入力してください');
    }
});

// Pro registration
document.querySelector('.pro-registration .btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    alert('プロ会員登録ページに移動します\\n\\n以下の特典をご利用いただけます：\\n・最大20%の大口割引\\n・専用サポートデスク\\n・優先配送サービス\\n・後払い決済対応');
});

// Smooth scrolling for navigation
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
updateCartCount();

// Show popular products by default
document.addEventListener('DOMContentLoaded', function() {
    // Show only popular products initially
    document.querySelectorAll('.product-card').forEach(card => {
        if (card.dataset.category === 'popular') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});`
  }
}