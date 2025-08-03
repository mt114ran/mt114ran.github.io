import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const retailSportsTemplate: WebTemplate = {
  id: 'retail-sports',
  title: '小売店 - スポーツ用品店',
  category: TEMPLATE_CATEGORIES.RETAIL,
  description: 'エネルギッシュでアクティブなスポーツ用品店向けWebサイトテンプレート',
  thumbnail: '/template-images/retail-sports.jpg',
  features: [
    'スポーツ別商品カテゴリ',
    'サイズガイド',
    'チーム注文対応',
    'フィッティングサービス'
  ],
  tags: ['スポーツ用品店', 'アクティブ', 'エネルギッシュ', 'アウトドア'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACTIVE GEAR - スポーツで人生をもっと楽しく</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1 class="logo">ACTIVE GEAR</h1>
                <nav class="nav">
                    <ul>
                        <li><a href="#sports">スポーツ別</a></li>
                        <li><a href="#brands">ブランド</a></li>
                        <li><a href="#services">サービス</a></li>
                        <li><a href="#events">イベント</a></li>
                        <li><a href="#store">店舗情報</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <button class="size-guide-btn">サイズガイド</button>
                    <button class="cart-btn">🛒 <span class="cart-count">0</span></button>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h2>限界を超えろ</h2>
                <p>あなたの挑戦を支える最高のギアがここに</p>
                <a href="#sports" class="btn-sports">今すぐ探す</a>
            </div>
        </div>
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=800&fit=crop&q=80" alt="スポーツ">
        </div>
    </section>

    <section class="features-banner">
        <div class="container">
            <div class="features-grid">
                <div class="feature-item">
                    <div class="feature-icon">🚀</div>
                    <h3>最新ギア</h3>
                    <p>最新テクノロジーを搭載した高性能ギア</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🎯</div>
                    <h3>プロ仕様</h3>
                    <p>アスリート愛用のプロフェッショナル仕様</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">💪</div>
                    <h3>パフォーマンス向上</h3>
                    <p>あなたの能力を最大限に引き出す</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🌟</div>
                    <h3>信頼品質</h3>
                    <p>厳選されたブランドの高品質商品</p>
                </div>
            </div>
        </div>
    </section>

    <section id="sports" class="sports-categories">
        <div class="container">
            <h2 class="section-title">スポーツカテゴリー</h2>
            <div class="sports-grid">
                <a href="#" class="sport-card" data-sport="running">
                    <img src="https://images.unsplash.com/photo-1544966503-7cc4ac882d52?w=400&h=300&fit=crop&q=80" alt="ランニング">
                    <div class="sport-overlay">
                        <h3>ランニング</h3>
                        <p>シューズ・ウェア・アクセサリー</p>
                        <span class="item-count">245点</span>
                    </div>
                </a>
                <a href="#" class="sport-card" data-sport="fitness">
                    <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&q=80" alt="フィットネス">
                    <div class="sport-overlay">
                        <h3>フィットネス・ジム</h3>
                        <p>トレーニングギア・サプリメント</p>
                        <span class="item-count">189点</span>
                    </div>
                </a>
                <a href="#" class="sport-card" data-sport="soccer">
                    <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop&q=80" alt="サッカー">
                    <div class="sport-overlay">
                        <h3>サッカー・フットサル</h3>
                        <p>スパイク・ユニフォーム・ボール</p>
                        <span class="item-count">156点</span>
                    </div>
                </a>
                <a href="#" class="sport-card" data-sport="basketball">
                    <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop&q=80" alt="バスケットボール">
                    <div class="sport-overlay">
                        <h3>バスケットボール</h3>
                        <p>シューズ・ユニフォーム・ボール</p>
                        <span class="item-count">134点</span>
                    </div>
                </a>
                <a href="#" class="sport-card" data-sport="tennis">
                    <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&q=80" alt="テニス">
                    <div class="sport-overlay">
                        <h3>テニス・バドミントン</h3>
                        <p>ラケット・シューズ・ウェア</p>
                        <span class="item-count">98点</span>
                    </div>
                </a>
                <a href="#" class="sport-card" data-sport="outdoor">
                    <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop&q=80" alt="アウトドア">
                    <div class="sport-overlay">
                        <h3>アウトドア・登山</h3>
                        <p>登山用品・キャンプギア</p>
                        <span class="item-count">223点</span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section class="featured-products">
        <div class="container">
            <h2 class="section-title">注目商品</h2>
            <div class="product-tabs">
                <button class="tab-btn active" data-tab="new">新商品</button>
                <button class="tab-btn" data-tab="popular">人気商品</button>
                <button class="tab-btn" data-tab="sale">セール</button>
            </div>
            <div class="products-grid">
                <div class="product-card" data-tab="new">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&q=80" alt="ランニングシューズ">
                        <span class="badge new">NEW</span>
                        <button class="quick-add" data-product="running-shoes">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>プロランナー スニーカー</h3>
                        <p class="brand">NIKE</p>
                        <div class="rating">
                            <span class="stars">★★★★★</span>
                            <span class="review-count">(89)</span>
                        </div>
                        <div class="sizes">
                            <span>24.5</span>
                            <span>25.0</span>
                            <span>25.5</span>
                            <span>26.0</span>
                        </div>
                        <p class="price">¥16,800</p>
                    </div>
                </div>
                <div class="product-card" data-tab="popular">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&q=80" alt="フィットネスウェア">
                        <span class="badge popular">人気</span>
                        <button class="quick-add" data-product="fitness-wear">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>ドライフィット Tシャツ</h3>
                        <p class="brand">ADIDAS</p>
                        <div class="rating">
                            <span class="stars">★★★★☆</span>
                            <span class="review-count">(156)</span>
                        </div>
                        <div class="sizes">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                        <p class="price">¥4,980</p>
                    </div>
                </div>
                <div class="product-card" data-tab="sale">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop&q=80" alt="サッカーボール">
                        <span class="badge sale">30%OFF</span>
                        <button class="quick-add" data-product="soccer-ball">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>プロ公式サッカーボール</h3>
                        <p class="brand">MOLTEN</p>
                        <div class="rating">
                            <span class="stars">★★★★★</span>
                            <span class="review-count">(234)</span>
                        </div>
                        <div class="sizes">
                            <span>5号球</span>
                        </div>
                        <div class="price-info">
                            <span class="original-price">¥8,500</span>
                            <span class="sale-price">¥5,950</span>
                        </div>
                    </div>
                </div>
                <div class="product-card" data-tab="new">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop&q=80" alt="ヨガマット">
                        <button class="quick-add" data-product="yoga-mat">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>プレミアムヨガマット</h3>
                        <p class="brand">LULULEMON</p>
                        <div class="rating">
                            <span class="stars">★★★★☆</span>
                            <span class="review-count">(67)</span>
                        </div>
                        <div class="sizes">
                            <span>6mm厚</span>
                        </div>
                        <p class="price">¥12,800</p>
                    </div>
                </div>
                <div class="product-card" data-tab="popular">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&q=80" alt="テニスラケット">
                        <button class="quick-add" data-product="tennis-racket">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>カーボンテニスラケット</h3>
                        <p class="brand">WILSON</p>
                        <div class="rating">
                            <span class="stars">★★★★★</span>
                            <span class="review-count">(124)</span>
                        </div>
                        <div class="sizes">
                            <span>G2</span>
                            <span>G3</span>
                            <span>G4</span>
                        </div>
                        <p class="price">¥28,500</p>
                    </div>
                </div>
                <div class="product-card" data-tab="sale">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop&q=80" alt="登山リュック">
                        <span class="badge sale">20%OFF</span>
                        <button class="quick-add" data-product="hiking-backpack">カートに追加</button>
                    </div>
                    <div class="product-info">
                        <h3>登山用バックパック 40L</h3>
                        <p class="brand">THE NORTH FACE</p>
                        <div class="rating">
                            <span class="stars">★★★★★</span>
                            <span class="review-count">(189)</span>
                        </div>
                        <div class="sizes">
                            <span>40L</span>
                        </div>
                        <div class="price-info">
                            <span class="original-price">¥24,000</span>
                            <span class="sale-price">¥19,200</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="brands" class="brands">
        <div class="container">
            <h2 class="section-title">取扱ブランド</h2>
            <div class="brands-grid">
                <div class="brand-item">
                    <h3>NIKE</h3>
                    <p>世界No.1スポーツブランド</p>
                </div>
                <div class="brand-item">
                    <h3>ADIDAS</h3>
                    <p>革新的なスポーツギア</p>
                </div>
                <div class="brand-item">
                    <h3>UNDER ARMOUR</h3>
                    <p>アスリートのためのテクノロジー</p>
                </div>
                <div class="brand-item">
                    <h3>THE NORTH FACE</h3>
                    <p>アウトドアの王道ブランド</p>
                </div>
                <div class="brand-item">
                    <h3>MIZUNO</h3>
                    <p>日本品質のスポーツギア</p>
                </div>
                <div class="brand-item">
                    <h3>ASICS</h3>
                    <p>ランニングシューズの名門</p>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">サービス</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">👟</div>
                    <h3>フィッティングサービス</h3>
                    <p>専門スタッフがあなたにぴったりのサイズと機能をご提案します。</p>
                    <ul>
                        <li>・足型測定サービス</li>
                        <li>・歩行分析</li>
                        <li>・専門スタッフによるアドバイス</li>
                        <li>・無料サイズ交換（1週間以内）</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">👕</div>
                    <h3>チームオーダー</h3>
                    <p>チーム・団体様向けのユニフォーム作成を承ります。</p>
                    <ul>
                        <li>・オリジナルデザイン対応</li>
                        <li>・名前・番号入れ</li>
                        <li>・まとめ割引適用</li>
                        <li>・短納期対応可能</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔧</div>
                    <h3>メンテナンス・修理</h3>
                    <p>スポーツ用品の修理・メンテナンスも承ります。</p>
                    <ul>
                        <li>・シューズリペア</li>
                        <li>・ラケット張り替え</li>
                        <li>・スパイク交換</li>
                        <li>・ウェアの補修</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="events" class="events">
        <div class="container">
            <h2 class="section-title">イベント・キャンペーン</h2>
            <div class="events-grid">
                <div class="event-card">
                    <img src="https://images.unsplash.com/photo-1544966503-7cc4ac882d52?w=400&h=250&fit=crop&q=80" alt="ランニングイベント">
                    <div class="event-info">
                        <span class="event-date">2025.08.15</span>
                        <h3>初心者向けランニング教室</h3>
                        <p>正しいランニングフォームと効果的なトレーニング方法を学びましょう。</p>
                        <div class="event-details">
                            <span>📍 代々木公園</span>
                            <span>🕐 10:00-12:00</span>
                            <span>💰 参加費無料</span>
                        </div>
                    </div>
                </div>
                <div class="event-card">
                    <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop&q=80" alt="フィットネス体験">
                    <div class="event-info">
                        <span class="event-date">2025.08.22</span>
                        <h3>最新フィットネスギア体験会</h3>
                        <p>話題の最新トレーニングマシンやギアを実際に体験できます。</p>
                        <div class="event-details">
                            <span>📍 店内特設会場</span>
                            <span>🕐 14:00-17:00</span>
                            <span>💰 参加費無料</span>
                        </div>
                    </div>
                </div>
                <div class="event-card">
                    <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop&q=80" alt="アウトドア講習">
                    <div class="event-info">
                        <span class="event-date">2025.08.29</span>
                        <h3>登山・キャンプ道具講習会</h3>
                        <p>安全で快適なアウトドア体験のための道具選びとメンテナンス方法。</p>
                        <div class="event-details">
                            <span>📍 店内セミナールーム</span>
                            <span>🕐 13:00-15:00</span>
                            <span>💰 参加費 ¥500</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="newsletter">
        <div class="container">
            <div class="newsletter-content">
                <div class="newsletter-text">
                    <h2>スポーツ情報をお届け</h2>
                    <p>新商品情報、セール情報、スポーツイベントの最新情報をお送りします</p>
                </div>
                <form class="newsletter-form">
                    <input type="email" placeholder="メールアドレスを入力" required>
                    <button type="submit" class="btn-sports">登録する</button>
                </form>
            </div>
        </div>
    </section>

    <section id="store" class="store-info">
        <div class="container">
            <h2 class="section-title">店舗情報</h2>
            <div class="store-content">
                <div class="store-text">
                    <h3>ACTIVE GEAR 渋谷店</h3>
                    <p>スポーツを愛するすべての人のための専門店です。</p>
                    <p>経験豊富なスタッフが、あなたのスポーツライフをサポートします。</p>
                    <div class="store-details">
                        <div class="detail-item">
                            <h4>📍 所在地</h4>
                            <p>〒150-0002 東京都渋谷区渋谷2-1-1</p>
                        </div>
                        <div class="detail-item">
                            <h4>📞 電話番号</h4>
                            <p>03-1234-5678</p>
                        </div>
                        <div class="detail-item">
                            <h4>🕐 営業時間</h4>
                            <p>平日: 10:00-21:00<br>土日祝: 10:00-20:00</p>
                        </div>
                        <div class="detail-item">
                            <h4>🚇 アクセス</h4>
                            <p>JR渋谷駅 徒歩3分<br>地下鉄各線 渋谷駅直結</p>
                        </div>
                    </div>
                </div>
                <div class="store-image">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80" alt="店舗外観">
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>ACTIVE GEAR</h3>
                    <p>スポーツで人生をもっと楽しく</p>
                    <div class="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">YouTube</a>
                        <a href="#">Twitter</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>スポーツカテゴリー</h3>
                    <ul>
                        <li><a href="#">ランニング</a></li>
                        <li><a href="#">フィットネス</a></li>
                        <li><a href="#">球技スポーツ</a></li>
                        <li><a href="#">アウトドア</a></li>
                        <li><a href="#">ウィンタースポーツ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>サービス</h3>
                    <ul>
                        <li><a href="#">フィッティング</a></li>
                        <li><a href="#">チームオーダー</a></li>
                        <li><a href="#">修理・メンテナンス</a></li>
                        <li><a href="#">配送サービス</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>サポート</h3>
                    <ul>
                        <li><a href="#">サイズガイド</a></li>
                        <li><a href="#">よくある質問</a></li>
                        <li><a href="#">返品・交換</a></li>
                        <li><a href="#">お問い合わせ</a></li>
                    </ul>
                </div>
            </div>
            <p class="copyright">&copy; 2025 ACTIVE GEAR. All rights reserved.</p>
        </div>
    </footer>

    <!-- Size Guide Modal -->
    <div class="modal" id="size-guide-modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>サイズガイド</h3>
            <div class="size-tabs">
                <button class="size-tab active" data-size="shoes">シューズ</button>
                <button class="size-tab" data-size="clothing">ウェア</button>
                <button class="size-tab" data-size="equipment">用具</button>
            </div>
            <div class="size-content" id="shoes-size">
                <table>
                    <tr><th>日本サイズ</th><th>US</th><th>UK</th><th>EU</th></tr>
                    <tr><td>24.0</td><td>6.0</td><td>5.5</td><td>38</td></tr>
                    <tr><td>24.5</td><td>6.5</td><td>6.0</td><td>39</td></tr>
                    <tr><td>25.0</td><td>7.0</td><td>6.5</td><td>40</td></tr>
                    <tr><td>25.5</td><td>7.5</td><td>7.0</td><td>41</td></tr>
                    <tr><td>26.0</td><td>8.0</td><td>7.5</td><td>42</td></tr>
                </table>
            </div>
            <div class="size-content" id="clothing-size" style="display: none;">
                <table>
                    <tr><th>サイズ</th><th>胸囲</th><th>ウエスト</th><th>身長</th></tr>
                    <tr><td>S</td><td>88-96cm</td><td>70-78cm</td><td>155-165cm</td></tr>
                    <tr><td>M</td><td>96-104cm</td><td>78-86cm</td><td>165-175cm</td></tr>
                    <tr><td>L</td><td>104-112cm</td><td>86-94cm</td><td>175-185cm</td></tr>
                    <tr><td>XL</td><td>112-120cm</td><td>94-102cm</td><td>185-195cm</td></tr>
                </table>
            </div>
            <div class="size-content" id="equipment-size" style="display: none;">
                <p>各スポーツ用具のサイズについては、商品ページの詳細をご確認ください。</p>
                <p>ご不明な点がございましたら、お気軽にスタッフまでお声がけください。</p>
            </div>
        </div>
    </div>
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
    background: #f5f5f5;
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
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    color: white;
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0,0,0,0.15);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 28px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
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
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav a:hover {
    text-shadow: 0 0 10px rgba(255,255,255,0.8);
}

.header-actions {
    display: flex;
    gap: 20px;
    align-items: center;
}

.size-guide-btn,
.cart-btn {
    background: rgba(255,255,255,0.2);
    color: white;
    border: 1px solid rgba(255,255,255,0.3);
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s;
}

.size-guide-btn:hover,
.cart-btn:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-2px);
}

.cart-count {
    background: #ff1744;
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
    height: 80vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
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
    filter: brightness(0.7);
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
}

.hero-text h2 {
    font-size: 64px;
    font-weight: 900;
    margin-bottom: 30px;
    text-shadow: 4px 4px 8px rgba(0,0,0,0.5);
    text-transform: uppercase;
    letter-spacing: 3px;
}

.hero-text p {
    font-size: 24px;
    margin-bottom: 40px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    font-weight: 300;
}

.btn-sports {
    display: inline-block;
    padding: 18px 40px;
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s;
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
    cursor: pointer;
}

.btn-sports:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 107, 53, 0.6);
}

/* Features Banner */
.features-banner {
    background: white;
    padding: 60px 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.feature-item {
    text-align: center;
    padding: 30px 20px;
}

.feature-icon {
    font-size: 48px;
    margin-bottom: 20px;
    display: block;
}

.feature-item h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #ff6b35;
    font-weight: bold;
}

.feature-item p {
    color: #666;
    line-height: 1.7;
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
    color: #333;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    margin: 20px auto;
    border-radius: 2px;
}

/* Sports Categories */
.sports-categories {
    background: white;
}

.sports-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
}

.sport-card {
    position: relative;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.sport-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}

.sport-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.sport-card:hover img {
    transform: scale(1.1);
}

.sport-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 40px 25px 25px;
}

.sport-overlay h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
}

.sport-overlay p {
    font-size: 14px;
    margin-bottom: 10px;
    opacity: 0.9;
}

.item-count {
    background: #ff6b35;
    color: white;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
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
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    color: #666;
}

.tab-btn.active,
.tab-btn:hover {
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    border-color: transparent;
    color: white;
    transform: translateY(-2px);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.product-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
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
    transition: transform 0.3s;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
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

.badge.new {
    background: #2ed573;
}

.badge.popular {
    background: #ff6b35;
}

.badge.sale {
    background: #ff1744;
}

.quick-add {
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: rgba(0,0,0,0.8);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s;
}

.product-card:hover .quick-add {
    opacity: 1;
    background: #ff6b35;
}

.product-info {
    padding: 25px;
}

.product-info h3 {
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
    font-weight: 600;
}

.brand {
    color: #ff6b35;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
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

.sizes {
    display: flex;
    gap: 8px;
    margin-bottom: 15px;
}

.sizes span {
    background: #f1f3f4;
    padding: 4px 8px;
    border-radius: 10px;
    font-size: 12px;
    color: #666;
}

.price {
    font-size: 20px;
    color: #ff6b35;
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
    font-size: 16px;
}

.sale-price {
    font-size: 20px;
    color: #ff1744;
    font-weight: bold;
}

/* Brands */
.brands {
    background: white;
}

.brands-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
}

.brand-item {
    text-align: center;
    padding: 40px 20px;
    background: #f8f9fa;
    border-radius: 15px;
    transition: all 0.3s;
}

.brand-item:hover {
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    color: white;
    transform: translateY(-5px);
}

.brand-item h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.brand-item p {
    font-size: 14px;
    opacity: 0.8;
}

/* Services */
.services {
    background: #f8f9fa;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
}

.service-card {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s;
}

.service-card:hover {
    transform: translateY(-5px);
}

.service-icon {
    font-size: 48px;
    margin-bottom: 25px;
    display: block;
}

.service-card h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #ff6b35;
    font-weight: bold;
}

.service-card p {
    color: #666;
    margin-bottom: 25px;
    line-height: 1.7;
}

.service-card ul {
    text-align: left;
    list-style: none;
    color: #666;
}

.service-card ul li {
    margin-bottom: 8px;
    padding-left: 15px;
    position: relative;
}

.service-card ul li::before {
    content: '✓';
    color: #ff6b35;
    font-weight: bold;
    position: absolute;
    left: 0;
}

/* Events */
.events {
    background: white;
}

.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.event-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.event-card:hover {
    transform: translateY(-5px);
}

.event-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.event-info {
    padding: 25px;
}

.event-date {
    background: #ff6b35;
    color: white;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 15px;
    display: inline-block;
}

.event-info h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #333;
    font-weight: 600;
}

.event-info p {
    color: #666;
    margin-bottom: 20px;
    line-height: 1.7;
}

.event-details {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.event-details span {
    background: #f1f3f4;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 12px;
    color: #666;
}

/* Newsletter */
.newsletter {
    background: linear-gradient(45deg, #ff6b35, #f7931e);
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
    font-size: 32px;
    margin-bottom: 15px;
    font-weight: bold;
}

.newsletter-text p {
    font-size: 16px;
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

/* Store Info */
.store-info {
    background: white;
}

.store-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.store-text h3 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #ff6b35;
    font-weight: bold;
}

.store-text p {
    margin-bottom: 15px;
    color: #666;
    line-height: 1.8;
}

.store-details {
    margin-top: 40px;
}

.detail-item {
    margin-bottom: 25px;
}

.detail-item h4 {
    font-size: 16px;
    margin-bottom: 8px;
    color: #ff6b35;
    font-weight: bold;
}

.detail-item p {
    color: #666;
    line-height: 1.6;
}

.store-image img {
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
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
    color: #ff6b35;
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
    color: #ff6b35;
}

.social-links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #444;
    color: #999;
    font-size: 14px;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
}

.modal-content {
    background-color: white;
    margin: 5% auto;
    padding: 40px;
    border-radius: 15px;
    width: 80%;
    max-width: 600px;
    position: relative;
}

.close {
    position: absolute;
    top: 15px;
    right: 25px;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover {
    color: #ff6b35;
}

.size-tabs {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    justify-content: center;
}

.size-tab {
    background: #f1f3f4;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
}

.size-tab.active {
    background: #ff6b35;
    color: white;
}

.size-content table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.size-content th,
.size-content td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #eee;
}

.size-content th {
    background: #f8f9fa;
    font-weight: bold;
    color: #ff6b35;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-text h2 {
        font-size: 36px;
    }
    
    .hero-text p {
        font-size: 18px;
    }
    
    .header-content {
        flex-direction: column;
        gap: 15px;
    }
    
    .nav ul {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
    
    .newsletter-content,
    .store-content {
        flex-direction: column;
        text-align: center;
    }
    
    .newsletter-form {
        min-width: auto;
        width: 100%;
        flex-direction: column;
    }
    
    .modal-content {
        width: 95%;
        margin: 10% auto;
    }
}`,
    js: `// Product tabs functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        const tab = this.dataset.tab;
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide products
        document.querySelectorAll('.product-card').forEach(card => {
            const cardTab = card.dataset.tab;
            if (tab === 'new' && cardTab === 'new') {
                card.style.display = 'block';
            } else if (tab === 'popular' && cardTab === 'popular') {
                card.style.display = 'block';
            } else if (tab === 'sale' && cardTab === 'sale') {
                card.style.display = 'block';
            } else if (tab === 'new') {
                card.style.display = cardTab === 'new' ? 'block' : 'none';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Initial display for "new" tab
        if (tab === 'new') {
            document.querySelectorAll('.product-card[data-tab="new"]').forEach(card => {
                card.style.display = 'block';
            });
        }
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
        const price = productCard.querySelector('.price, .sale-price').textContent;
        
        cartItems++;
        updateCartCount();
        
        // Visual feedback
        this.textContent = '追加済み';
        this.style.background = '#2ed573';
        setTimeout(() => {
            this.textContent = 'カートに追加';
            this.style.background = '#ff6b35';
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

// Sports category navigation
document.querySelectorAll('.sport-card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const sport = this.dataset.sport;
        const sportName = this.querySelector('h3').textContent;
        const itemCount = this.querySelector('.item-count').textContent;
        
        alert(\`\${sportName} カテゴリーページに移動します\\n商品数: \${itemCount}\`);
    });
});

// Size guide modal
const modal = document.getElementById('size-guide-modal');
const sizeGuideBtn = document.querySelector('.size-guide-btn');
const closeBtn = document.querySelector('.close');

sizeGuideBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Size guide tabs
document.querySelectorAll('.size-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const sizeType = this.dataset.size;
        
        // Update active tab
        document.querySelectorAll('.size-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Show relevant content
        document.querySelectorAll('.size-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(\`\${sizeType}-size\`).style.display = 'block';
    });
});

// Newsletter subscription
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input').value;
    
    if (email && email.includes('@')) {
        alert(\`\${email} でニュースレターに登録しました\\n\\n最新のスポーツ情報をお届けします！\`);
        this.querySelector('input').value = '';
    } else {
        alert('正しいメールアドレスを入力してください');
    }
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

// Initialize cart count
updateCartCount();

// Show only "new" products initially
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-card').forEach(card => {
        if (card.dataset.tab !== 'new') {
            card.style.display = 'none';
        }
    });
});`
  }
}