import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const restaurantRamenTemplate: WebTemplate = {
  id: 'restaurant-ramen',
  title: 'ラーメン店',
  category: TEMPLATE_CATEGORIES.RESTAURANT,
  description: '本格ラーメン店の味とこだわりを表現するWebサイトテンプレート',
  thumbnail: '/template-images/restaurant-ramen.jpg',
  features: [
    'カジュアルなデザイン',
    'スープへのこだわり紹介',
    'メニュー豊富な表示',
    '店主の想い'
  ],
  tags: ['レストラン', 'ラーメン', '麺類', 'カジュアル', 'こだわり'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>麺屋 一心 - 本格とんこつラーメン</title>
</head>
<body>
    <div class="page-wrapper">
        <header class="header">
            <div class="header-container">
                <div class="logo">
                    <h1>麺屋 一心</h1>
                    <span class="logo-tagline">本格とんこつラーメン</span>
                </div>
                <nav class="nav">
                    <ul class="nav-menu">
                        <li><a href="#home">ホーム</a></li>
                        <li><a href="#commitment">こだわり</a></li>
                        <li><a href="#menu">メニュー</a></li>
                        <li><a href="#story">店主の想い</a></li>
                        <li><a href="#shop">店舗情報</a></li>
                        <li><a href="#news" class="news-link">お知らせ</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <section id="home" class="hero">
                <div class="hero-visual">
                    <img src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1920&h=800&fit=crop" alt="とんこつラーメン" class="hero-image">
                    <div class="hero-overlay"></div>
                </div>
                <div class="hero-content">
                    <h2 class="hero-title">麺屋 一心</h2>
                    <p class="hero-subtitle">魂を込めた一杯のラーメン</p>
                    <div class="hero-features">
                        <span class="feature-tag">豚骨20時間煮込み</span>
                        <span class="feature-tag">自家製麺</span>
                        <span class="feature-tag">無添加スープ</span>
                    </div>
                    <button class="hero-cta">メニューを見る</button>
                </div>
            </section>

            <section id="commitment" class="commitment">
                <div class="container">
                    <h2 class="section-title">こだわり</h2>
                    <div class="section-subtitle">一杯一杯に込める想いと技術</div>
                    
                    <div class="commitment-grid">
                        <div class="commitment-item">
                            <div class="commitment-icon">🍜</div>
                            <h3>スープ</h3>
                            <p class="commitment-title">20時間煮込む豚骨スープ</p>
                            <p class="commitment-desc">厳選した豚骨を20時間以上じっくりと煮込み、コラーゲンたっぷりの濃厚で美味しいスープに仕上げます。化学調味料は一切使用せず、自然の旨味だけを引き出します。</p>
                        </div>
                        
                        <div class="commitment-item">
                            <div class="commitment-icon">🍝</div>
                            <h3>麺</h3>
                            <p class="commitment-title">毎日手打ちの自家製麺</p>
                            <p class="commitment-desc">国産小麦100%使用の自家製麺。毎朝店内で手打ちし、スープとの絡みを考えた最適な太さと硬さに仕上げています。もちもちとした食感をお楽しみください。</p>
                        </div>
                        
                        <div class="commitment-item">
                            <div class="commitment-icon">🥓</div>
                            <h3>チャーシュー</h3>
                            <p class="commitment-title">秘伝のタレで煮込む</p>
                            <p class="commitment-desc">厳選した豚バラ肉を秘伝のタレでじっくりと煮込みます。外はしっかり、中はとろける食感。口に入れた瞬間、肉の旨味が広がります。</p>
                        </div>
                        
                        <div class="commitment-item">
                            <div class="commitment-icon">🥬</div>
                            <h3>トッピング</h3>
                            <p class="commitment-title">新鮮な野菜とこだわり食材</p>
                            <p class="commitment-desc">地元農家から直送の新鮮野菜、半熟玉子、メンマなど、すべてのトッピングにこだわり抜いています。彩りと栄養バランスも考えた一杯です。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="menu" class="menu">
                <div class="container">
                    <h2 class="section-title">メニュー</h2>
                    <div class="section-subtitle">豊富なラインナップをご用意</div>
                    
                    <div class="menu-tabs">
                        <button class="tab-button active" data-category="ramen">ラーメン</button>
                        <button class="tab-button" data-category="side">サイドメニュー</button>
                        <button class="tab-button" data-category="drink">ドリンク</button>
                        <button class="tab-button" data-category="set">セットメニュー</button>
                    </div>

                    <div class="menu-content">
                        <div class="menu-category active" id="ramen">
                            <div class="menu-grid">
                                <div class="menu-item featured">
                                    <div class="item-badge">人気No.1</div>
                                    <div class="item-image">
                                        <img src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" alt="とんこつラーメン">
                                    </div>
                                    <div class="item-info">
                                        <h3>とんこつラーメン</h3>
                                        <p>20時間煮込んだ濃厚豚骨スープと自家製麺の絶妙なハーモニー</p>
                                        <div class="item-options">
                                            <span class="option">硬さ: 普通・硬め・やわらか</span>
                                            <span class="option">味: 普通・濃いめ・薄め</span>
                                        </div>
                                        <div class="item-price">¥850</div>
                                    </div>
                                </div>

                                <div class="menu-item">
                                    <div class="item-image">
                                        <img src="https://images.unsplash.com/photo-1552611052-33e04de081de?w=400&h=300&fit=crop" alt="チャーシューメン">
                                    </div>
                                    <div class="item-info">
                                        <h3>チャーシューメン</h3>
                                        <p>秘伝のタレで煮込んだとろとろチャーシューがたっぷり</p>
                                        <div class="item-price">¥1,100</div>
                                    </div>
                                </div>

                                <div class="menu-item">
                                    <div class="item-image">
                                        <img src="https://images.unsplash.com/photo-1588788740158-18e9c5b5f6a5?w=400&h=300&fit=crop" alt="味噌ラーメン">
                                    </div>
                                    <div class="item-info">
                                        <h3>味噌ラーメン</h3>
                                        <p>信州味噌を使用したコクのある味噌スープ</p>
                                        <div class="item-price">¥900</div>
                                    </div>
                                </div>

                                <div class="menu-item">
                                    <div class="item-image">
                                        <img src="https://images.unsplash.com/photo-1617421753170-d9ff0d1a4fda?w=400&h=300&fit=crop" alt="つけ麺">
                                    </div>
                                    <div class="item-info">
                                        <h3>濃厚つけ麺</h3>
                                        <p>極太麺と濃厚スープの最強コンビ</p>
                                        <div class="item-price">¥980</div>
                                    </div>
                                </div>

                                <div class="menu-item">
                                    <div class="item-image">
                                        <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=400&h=300&fit=crop" alt="辛味噌ラーメン">
                                    </div>
                                    <div class="item-info">
                                        <h3>辛味噌ラーメン</h3>
                                        <p>特製辛味噌で仕上げたピリ辛スープ</p>
                                        <div class="item-price">¥950</div>
                                    </div>
                                </div>

                                <div class="menu-item">
                                    <div class="item-image">
                                        <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" alt="醤油ラーメン">
                                    </div>
                                    <div class="item-info">
                                        <h3>醤油ラーメン</h3>
                                        <p>あっさりとした醤油ベースの伝統的な味</p>
                                        <div class="item-price">¥800</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="menu-category" id="side">
                            <div class="menu-grid">
                                <div class="menu-item small">
                                    <div class="item-info">
                                        <h3>餃子（5個）</h3>
                                        <p>パリッとした皮に肉汁たっぷり</p>
                                        <div class="item-price">¥400</div>
                                    </div>
                                </div>

                                <div class="menu-item small">
                                    <div class="item-info">
                                        <h3>チャーハン</h3>
                                        <p>パラパラに炒めた絶品チャーハン</p>
                                        <div class="item-price">¥650</div>
                                    </div>
                                </div>

                                <div class="menu-item small">
                                    <div class="item-info">
                                        <h3>唐揚げ（4個）</h3>
                                        <p>ジューシーで柔らかい鶏の唐揚げ</p>
                                        <div class="item-price">¥500</div>
                                    </div>
                                </div>

                                <div class="menu-item small">
                                    <div class="item-info">
                                        <h3>半熟煮玉子</h3>
                                        <p>秘伝のタレに漬け込んだ味玉</p>
                                        <div class="item-price">¥150</div>
                                    </div>
                                </div>

                                <div class="menu-item small">
                                    <div class="item-info">
                                        <h3>メンマ</h3>
                                        <p>コリコリ食感の自家製メンマ</p>
                                        <div class="item-price">¥200</div>
                                    </div>
                                </div>

                                <div class="menu-item small">
                                    <div class="item-info">
                                        <h3>のり</h3>
                                        <p>香り豊かな海苔（3枚）</p>
                                        <div class="item-price">¥100</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="menu-category" id="drink">
                            <div class="menu-grid">
                                <div class="menu-item small">
                                    <div class="item-info">
                                        <h3>生ビール</h3>
                                        <p>キンキンに冷えたビール</p>
                                        <div class="item-price">¥450</div>
                                    </div>
                                </div>

                                <div class="menu-item small">
                                    <div class="item-info">
                                        <h3>ウーロン茶</h3>
                                        <p>さっぱりとしたウーロン茶</p>
                                        <div class="item-price">¥250</div>
                                    </div>
                                </div>

                                <div class="menu-item small">
                                    <div class="item-info">
                                        <h3>コーラ</h3>
                                        <p>炭酸がシュワッと爽快</p>
                                        <div class="item-price">¥300</div>
                                    </div>
                                </div>

                                <div class="menu-item small">
                                    <div class="item-info">
                                        <h3>オレンジジュース</h3>
                                        <p>100%果汁のフレッシュジュース</p>
                                        <div class="item-price">¥350</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="menu-category" id="set">
                            <div class="menu-grid">
                                <div class="menu-item">
                                    <div class="item-info">
                                        <h3>ラーメン＋餃子セット</h3>
                                        <p>お好みのラーメン＋餃子5個</p>
                                        <div class="item-price">+¥300</div>
                                    </div>
                                </div>

                                <div class="menu-item">
                                    <div class="item-info">
                                        <h3>ラーメン＋チャーハンセット</h3>
                                        <p>お好みのラーメン＋チャーハン</p>
                                        <div class="item-price">+¥500</div>
                                    </div>
                                </div>

                                <div class="menu-item">
                                    <div class="item-info">
                                        <h3>ラーメン＋餃子＋ライスセット</h3>
                                        <p>お好みのラーメン＋餃子5個＋ライス</p>
                                        <div class="item-price">+¥400</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="story" class="story">
                <div class="container">
                    <div class="story-content">
                        <div class="story-text">
                            <h2 class="section-title">店主の想い</h2>
                            <div class="section-subtitle">一杯のラーメンに込める魂</div>
                            
                            <div class="story-main">
                                <p class="story-lead">「お客様に本当に美味しいラーメンを食べてもらいたい」</p>
                                <p>そんな想いで始めた麺屋一心。修行時代から20年以上、ラーメン作りに情熱を注いできました。</p>
                                <p>毎朝4時から仕込みを始め、豚骨を20時間以上煮込み、麺を一本一本手で打つ。手間暇かけることで生まれる本物の味を、多くの方に知ってもらいたいのです。</p>
                                <p>化学調味料に頼らず、素材の持つ自然な旨味だけで勝負する。それが私のポリシーです。</p>
                            </div>

                            <div class="story-signature">
                                <p class="signature-name">店主 田中 一郎</p>
                                <div class="signature-image">
                                    <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&h=150&fit=crop" alt="店主">
                                </div>
                            </div>
                        </div>
                        
                        <div class="story-visual">
                            <div class="visual-main">
                                <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=800&fit=crop" alt="ラーメン調理風景">
                            </div>
                            <div class="visual-stats">
                                <div class="stat-item">
                                    <span class="stat-number">20+</span>
                                    <span class="stat-label">年の経験</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-number">20h</span>
                                    <span class="stat-label">スープ煮込み時間</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-number">100%</span>
                                    <span class="stat-label">手作り</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="shop" class="shop-info">
                <div class="container">
                    <div class="shop-content">
                        <div class="shop-details">
                            <h2 class="section-title">店舗情報</h2>
                            <div class="section-subtitle">アクセス・営業時間</div>
                            
                            <div class="info-grid">
                                <div class="info-block">
                                    <h3>営業時間</h3>
                                    <div class="hours">
                                        <div class="hour-item">
                                            <span class="day">平日</span>
                                            <span class="time">11:30〜15:00 / 18:00〜23:00</span>
                                        </div>
                                        <div class="hour-item">
                                            <span class="day">土日祝</span>
                                            <span class="time">11:30〜23:00（通し営業）</span>
                                        </div>
                                        <div class="hour-item">
                                            <span class="day">定休日</span>
                                            <span class="time">月曜日（祝日の場合は翌日）</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="info-block">
                                    <h3>アクセス</h3>
                                    <div class="address">
                                        <p>〒150-0002</p>
                                        <p>東京都渋谷区渋谷2-10-5</p>
                                        <p>渋谷センタービル1F</p>
                                    </div>
                                    <div class="access">
                                        <p>JR渋谷駅 東口より徒歩3分</p>
                                        <p>地下鉄渋谷駅 C2出口より徒歩1分</p>
                                    </div>
                                </div>
                                
                                <div class="info-block">
                                    <h3>お問い合わせ</h3>
                                    <div class="contact">
                                        <p class="tel">TEL: 03-1234-5678</p>
                                        <p>席数: カウンター8席、テーブル4席（計16席）</p>
                                        <p>駐車場: なし（近隣コインパーキングをご利用ください）</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="shop-visual">
                            <div class="shop-images">
                                <div class="shop-image main">
                                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" alt="店内の様子">
                                    <div class="image-label">店内の様子</div>
                                </div>
                                <div class="shop-image sub">
                                    <img src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=300&h=200&fit=crop" alt="店舗外観">
                                    <div class="image-label">店舗外観</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="news" class="news">
                <div class="container">
                    <h2 class="section-title">お知らせ</h2>
                    <div class="section-subtitle">最新情報をお届け</div>
                    
                    <div class="news-list">
                        <div class="news-item">
                            <div class="news-date">2025.01.15</div>
                            <div class="news-content">
                                <h3>新メニュー「濃厚海老つけ麺」登場！</h3>
                                <p>海老の旨味をぎゅっと凝縮した新しいつけ麺をご用意いたしました。期間限定での提供となります。</p>
                            </div>
                        </div>
                        
                        <div class="news-item">
                            <div class="news-date">2025.01.08</div>
                            <div class="news-content">
                                <h3>営業時間変更のお知らせ</h3>
                                <p>1月より土日祝日は通し営業を開始いたします。平日の営業時間に変更はございません。</p>
                            </div>
                        </div>
                        
                        <div class="news-item">
                            <div class="news-date">2024.12.28</div>
                            <div class="news-content">
                                <h3>年末年始の営業について</h3>
                                <p>12月31日〜1月3日は休業とさせていただきます。1月4日より通常営業いたします。</p>
                            </div>
                        </div>
                        
                        <div class="news-item">
                            <div class="news-date">2024.12.20</div>
                            <div class="news-content">
                                <h3>忘年会シーズンの混雑について</h3>
                                <p>12月は混雑が予想されます。お待ちいただく場合がございますが、ご了承ください。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="footer-content">
                <div class="footer-main">
                    <h3>麺屋 一心</h3>
                    <p>本格とんこつラーメン</p>
                    <div class="footer-address">
                        <p>〒150-0002 東京都渋谷区渋谷2-10-5 渋谷センタービル1F</p>
                        <p>TEL: 03-1234-5678</p>
                    </div>
                </div>
                <div class="footer-hours">
                    <h4>営業時間</h4>
                    <p>平日: 11:30〜15:00 / 18:00〜23:00</p>
                    <p>土日祝: 11:30〜23:00</p>
                    <p>定休日: 月曜日</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright">© 2025 麺屋一心. All rights reserved.</p>
            </div>
        </footer>
    </div>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Sans JP', sans-serif;
    color: #333;
    background: #fafafa;
    line-height: 1.6;
}

.page-wrapper {
    min-height: 100vh;
}

/* Header */
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #d32f2f;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 2.2rem;
    color: #d32f2f;
    font-weight: 700;
}

.logo-tagline {
    font-size: 0.9rem;
    color: #666;
    display: block;
    text-align: center;
    font-weight: 500;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -3px;
    left: 50%;
    background: #d32f2f;
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-menu a:hover {
    color: #d32f2f;
}

.nav-menu a:hover::after {
    width: 100%;
}

.news-link {
    background: #ff5722;
    color: white !important;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
}

.news-link:hover {
    background: #f4511e !important;
}

/* Hero */
.hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-visual {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(211, 47, 47, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: -1;
}

.hero-content {
    text-align: center;
    color: white;
    max-width: 800px;
    padding: 0 2rem;
}

.hero-title {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 500;
    opacity: 0.95;
}

.hero-features {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
}

.feature-tag {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1.2rem;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-weight: 500;
    font-size: 0.9rem;
}

.hero-cta {
    background: #ff5722;
    color: white;
    padding: 1.2rem 3rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 700;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(255, 87, 34, 0.4);
}

.hero-cta:hover {
    background: #f4511e;
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(255, 87, 34, 0.5);
}

/* Common Styles */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

section {
    padding: 5rem 0;
}

.section-title {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 2.5rem;
    color: #333;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-align: center;
}

.section-subtitle {
    text-align: center;
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 3rem;
}

/* Commitment */
.commitment {
    background: white;
}

.commitment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
}

.commitment-item {
    text-align: center;
    padding: 2.5rem 2rem;
    background: #fafafa;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border-top: 4px solid #d32f2f;
}

.commitment-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.commitment-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.commitment-item h3 {
    font-size: 1.5rem;
    color: #d32f2f;
    margin-bottom: 1rem;
    font-weight: 700;
}

.commitment-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
}

.commitment-desc {
    color: #666;
    line-height: 1.7;
}

/* Menu */
.menu {
    background: #f5f5f5;
}

.menu-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.tab-button {
    padding: 1rem 2rem;
    background: white;
    border: 2px solid #d32f2f;
    color: #d32f2f;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: 'Noto Sans JP', sans-serif;
}

.tab-button.active,
.tab-button:hover {
    background: #d32f2f;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);
}

.menu-category {
    display: none;
}

.menu-category.active {
    display: block;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.menu-grid.small {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.menu-item {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
}

.menu-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.menu-item.featured {
    border: 3px solid #ff5722;
}

.menu-item.small {
    display: flex;
    align-items: center;
    padding: 1.5rem;
}

.item-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #ff5722;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 700;
    z-index: 1;
}

.item-image {
    height: 200px;
    overflow: hidden;
}

.item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.menu-item:hover .item-image img {
    transform: scale(1.1);
}

.item-info {
    padding: 1.5rem;
    flex-grow: 1;
}

.item-info h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #333;
}

.item-info p {
    color: #666;
    margin-bottom: 1rem;
    font-size: 0.95rem;
}

.item-options {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-bottom: 1rem;
}

.option {
    font-size: 0.85rem;
    color: #888;
    background: #f5f5f5;
    padding: 0.3rem 0.8rem;
    border-radius: 10px;
}

.item-price {
    font-size: 1.4rem;
    font-weight: 700;
    color: #d32f2f;
    text-align: right;
}

.small .item-price {
    text-align: left;
    margin-left: auto;
    min-width: 80px;
}

/* Story */
.story {
    background: white;
}

.story-content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: start;
}

.story-lead {
    font-size: 1.4rem;
    font-weight: 600;
    color: #d32f2f;
    margin-bottom: 2rem;
    line-height: 1.5;
}

.story-main p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
}

.story-signature {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 3rem;
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 10px;
    border-left: 4px solid #d32f2f;
}

.signature-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
}

.signature-image img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
}

.visual-main img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 15px;
}

.visual-stats {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 900;
    color: #d32f2f;
}

.stat-label {
    display: block;
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
}

/* Shop Info */
.shop-info {
    background: #f5f5f5;
}

.shop-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.info-grid {
    display: grid;
    gap: 3rem;
}

.info-block h3 {
    font-size: 1.4rem;
    color: #d32f2f;
    margin-bottom: 1rem;
    font-weight: 700;
}

.hours {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
}

.hour-item {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0;
    border-bottom: 1px solid #f0f0f0;
}

.hour-item:last-child {
    border-bottom: none;
}

.day {
    font-weight: 600;
    color: #333;
}

.time {
    color: #666;
}

.address,
.access,
.contact {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
}

.address p,
.access p,
.contact p {
    margin-bottom: 0.5rem;
}

.tel {
    font-size: 1.2rem;
    font-weight: 600;
    color: #d32f2f;
    margin-bottom: 1rem !important;
}

.shop-images {
    display: grid;
    gap: 1rem;
}

.shop-image {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.shop-image.main img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.shop-image.sub img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.image-label {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 500;
}

/* News */
.news {
    background: white;
}

.news-list {
    display: grid;
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

.news-item {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    background: #fafafa;
    border-radius: 10px;
    border-left: 4px solid #d32f2f;
    transition: all 0.3s ease;
}

.news-item:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.news-date {
    color: #d32f2f;
    font-weight: 600;
    font-size: 0.9rem;
    white-space: nowrap;
    min-width: 100px;
}

.news-content h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
}

.news-content p {
    color: #666;
    line-height: 1.6;
}

/* Footer */
.footer {
    background: #333;
    color: #ccc;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.footer-main h3 {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 1.8rem;
    color: #d32f2f;
    margin-bottom: 0.5rem;
}

.footer-main > p {
    color: #d32f2f;
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.footer-address p {
    margin-bottom: 0.3rem;
    font-size: 0.95rem;
}

.footer-hours h4 {
    color: #d32f2f;
    margin-bottom: 1rem;
}

.footer-hours p {
    margin-bottom: 0.3rem;
    font-size: 0.95rem;
}

.footer-bottom {
    border-top: 1px solid #555;
    padding-top: 2rem;
    text-align: center;
}

.copyright {
    color: #888;
    font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-menu {
        flex-direction: column;
        gap: 1rem;
    }
    
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-features {
        flex-direction: column;
        align-items: center;
    }
    
    .commitment-grid {
        grid-template-columns: 1fr;
    }
    
    .menu-tabs {
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 1rem;
    }
    
    .menu-grid {
        grid-template-columns: 1fr;
    }
    
    .story-content,
    .shop-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .story-signature {
        flex-direction: column;
        text-align: center;
    }
    
    .visual-stats {
        flex-direction: column;
        gap: 1rem;
    }
    
    .news-item {
        flex-direction: column;
        gap: 1rem;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }
}`,
    js: `// タブ機能
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        // すべてのタブボタンからactiveクラスを削除
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // すべてのメニューカテゴリを非表示
        document.querySelectorAll('.menu-category').forEach(category => {
            category.classList.remove('active');
        });
        
        // クリックされたタブボタンにactiveクラスを追加
        this.classList.add('active');
        
        // 対応するカテゴリを表示
        const categoryId = this.getAttribute('data-category');
        document.getElementById(categoryId).classList.add('active');
        
        // 小さなメニューアイテム用のグリッドクラスを適用
        const menuGrid = document.querySelector(\`#\${categoryId} .menu-grid\`);
        if (categoryId === 'side' || categoryId === 'drink') {
            menuGrid.classList.add('small');
        } else {
            menuGrid.classList.remove('small');
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

// ヒーローCTAボタン
document.querySelector('.hero-cta').addEventListener('click', function() {
    const menuSection = document.querySelector('#menu');
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = menuSection.offsetTop - headerHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

// ヘッダーのスクロール効果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// メニューアイテムのアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素の初期化
document.querySelectorAll('.menu-item, .commitment-item, .news-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
});

// こだわりアイテムの特別なホバー効果
document.querySelectorAll('.commitment-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.commitment-icon');
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.commitment-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ニュースアイテムのクリック効果
document.querySelectorAll('.news-item').forEach(item => {
    item.addEventListener('click', function() {
        // 簡単なフィードバック
        this.style.background = '#f0f8ff';
        this.style.borderLeftColor = '#ff5722';
        this.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            this.style.background = '#fafafa';
            this.style.borderLeftColor = '#d32f2f';
        }, 500);
    });
});

// 統計数値のカウントアップアニメーション
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text.replace(/[^0-9]/g, ''));
        const suffix = text.replace(/[0-9]/g, '');
        
        if (number > 0) {
            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    stat.textContent = number + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, 30);
        }
    });
}

// 統計セクションが見えたときにアニメーション開始
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.visual-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// 店舗画像のライトボックス風効果
document.querySelectorAll('.shop-image img').forEach(img => {
    img.addEventListener('click', function() {
        const label = this.parentElement.querySelector('.image-label').textContent;
        alert(\`\${label}の詳細画像を表示します（実装予定）\`);
    });
    
    // カーソルポインターに変更
    img.style.cursor = 'pointer';
});

// 電話番号のクリック時のフィードバック
document.querySelector('.tel').addEventListener('click', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.2s ease';
    
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});`
  }
}