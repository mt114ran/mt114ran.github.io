import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const retailBakeryTemplate: WebTemplate = {
  id: 'retail-bakery',
  title: '小売店 - ベーカリー',
  category: TEMPLATE_CATEGORIES.RETAIL,
  description: '温かみのある美味しそうなベーカリー向けWebサイトテンプレート',
  thumbnail: '/template-images/retail-bakery.jpg',
  features: [
    '焼きたてパンの紹介',
    'オンライン予約',
    'アレルギー情報',
    'パン教室の案内'
  ],
  tags: ['ベーカリー', '温かい', '美味しい', 'パン'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SWEET BAKERY - 毎日焼きたて、心を込めて</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1 class="logo">SWEET BAKERY</h1>
                <nav class="nav">
                    <ul>
                        <li><a href="#breads">パンの種類</a></li>
                        <li><a href="#daily">本日のパン</a></li>
                        <li><a href="#classes">パン教室</a></li>
                        <li><a href="#about">こだわり</a></li>
                        <li><a href="#store">店舗情報</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <button class="reservation-btn">パン予約</button>
                    <button class="allergen-info-btn">アレルギー情報</button>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h2>毎日焼きたて<br>心を込めて</h2>
                <p>職人の技と愛情で作る、家族みんなが笑顔になるパン</p>
                <a href="#daily" class="btn-warm">本日のパンを見る</a>
            </div>
        </div>
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&h=800&fit=crop&q=80" alt="焼きたてパン">
        </div>
    </section>

    <section class="fresh-baked">
        <div class="container">
            <div class="fresh-grid">
                <div class="fresh-item">
                    <div class="fresh-icon">🍞</div>
                    <h3>毎日焼きたて</h3>
                    <p>朝5時から焼き始める新鮮なパン</p>
                </div>
                <div class="fresh-item">
                    <div class="fresh-icon">🌾</div>
                    <h3>厳選素材</h3>
                    <p>国産小麦と天然酵母を使用</p>
                </div>
                <div class="fresh-item">
                    <div class="fresh-icon">👨‍🍳</div>
                    <h3>職人の技</h3>
                    <p>30年の経験を持つパン職人</p>
                </div>
                <div class="fresh-item">
                    <div class="fresh-icon">💝</div>
                    <h3>愛情込めて</h3>
                    <p>一つ一つ心を込めて手作り</p>
                </div>
            </div>
        </div>
    </section>

    <section id="daily" class="daily-breads">
        <div class="container">
            <h2 class="section-title">本日のパン</h2>
            <p class="baking-schedule">焼き上がり時間をお知らせします</p>
            <div class="daily-schedule">
                <div class="schedule-time active" data-time="morning">
                    <span class="time">6:00</span>
                    <span class="label">朝の焼きたて</span>
                </div>
                <div class="schedule-time" data-time="noon">
                    <span class="time">12:00</span>
                    <span class="label">お昼の焼きたて</span>
                </div>
                <div class="schedule-time" data-time="evening">
                    <span class="time">15:00</span>
                    <span class="label">午後の焼きたて</span>
                </div>
            </div>
            <div class="bread-grid">
                <div class="bread-card" data-time="morning">
                    <div class="bread-image">
                        <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop&q=80" alt="クロワッサン">
                        <span class="fresh-badge">焼きたて</span>
                        <button class="reserve-btn" data-bread="croissant">予約する</button>
                    </div>
                    <div class="bread-info">
                        <h3>バタークロワッサン</h3>
                        <p class="bread-description">層になったバターの香りが広がる定番クロワッサン</p>
                        <div class="bread-details">
                            <span class="price">¥180</span>
                            <span class="allergens">小麦・卵・乳</span>
                        </div>
                        <div class="availability">
                            <span class="stock available">在庫あり</span>
                            <span class="bake-time">次回焼き上がり: 12:00</span>
                        </div>
                    </div>
                </div>
                <div class="bread-card" data-time="morning">
                    <div class="bread-image">
                        <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop&q=80" alt="食パン">
                        <span class="popular-badge">人気</span>
                        <button class="reserve-btn" data-bread="bread-loaf">予約する</button>
                    </div>
                    <div class="bread-info">
                        <h3>はちみつ食パン</h3>
                        <p class="bread-description">ふんわりもちもち、自然な甘さのはちみつ食パン</p>
                        <div class="bread-details">
                            <span class="price">¥320</span>
                            <span class="allergens">小麦・卵・乳</span>
                        </div>
                        <div class="availability">
                            <span class="stock low">残り3個</span>
                            <span class="bake-time">次回焼き上がり: 15:00</span>
                        </div>
                    </div>
                </div>
                <div class="bread-card" data-time="noon">
                    <div class="bread-image">
                        <img src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=300&fit=crop&q=80" alt="惣菜パン">
                        <span class="new-badge">新商品</span>
                        <button class="reserve-btn" data-bread="sandwich">予約する</button>
                    </div>
                    <div class="bread-info">
                        <h3>野菜たっぷりサンドイッチ</h3>
                        <p class="bread-description">新鮮な野菜をたっぷり使った栄養満点サンドイッチ</p>
                        <div class="bread-details">
                            <span class="price">¥280</span>
                            <span class="allergens">小麦・卵・乳</span>
                        </div>
                        <div class="availability">
                            <span class="stock available">在庫あり</span>
                            <span class="bake-time">焼き上がり済み</span>
                        </div>
                    </div>
                </div>
                <div class="bread-card" data-time="noon">
                    <div class="bread-image">
                        <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400&h=300&fit=crop&q=80" alt="カレーパン">
                        <button class="reserve-btn" data-bread="curry-bread">予約する</button>
                    </div>
                    <div class="bread-info">
                        <h3>特製カレーパン</h3>
                        <p class="bread-description">スパイシーなカレーとサクサクの衣が絶妙</p>
                        <div class="bread-details">
                            <span class="price">¥220</span>
                            <span class="allergens">小麦・卵・乳</span>
                        </div>
                        <div class="availability">
                            <span class="stock available">在庫あり</span>
                            <span class="bake-time">焼き上がり済み</span>
                        </div>
                    </div>
                </div>
                <div class="bread-card" data-time="evening">
                    <div class="bread-image">
                        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80" alt="デニッシュ">
                        <span class="limited-badge">限定</span>
                        <button class="reserve-btn" data-bread="danish">予約する</button>
                    </div>
                    <div class="bread-info">
                        <h3>季節のフルーツデニッシュ</h3>
                        <p class="bread-description">旬のフルーツを使った季節限定デニッシュ</p>
                        <div class="bread-details">
                            <span class="price">¥380</span>
                            <span class="allergens">小麦・卵・乳</span>
                        </div>
                        <div class="availability">
                            <span class="stock limited">1日5個限定</span>
                            <span class="bake-time">15:00焼き上がり</span>
                        </div>
                    </div>
                </div>
                <div class="bread-card" data-time="evening">
                    <div class="bread-image">
                        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&q=80" alt="バゲット">
                        <button class="reserve-btn" data-bread="baguette">予約する</button>
                    </div>
                    <div class="bread-info">
                        <h3>本格フランスパン</h3>
                        <p class="bread-description">外はパリッと中はもちもちの本格バゲット</p>
                        <div class="bread-details">
                            <span class="price">¥250</span>
                            <span class="allergens">小麦</span>
                        </div>
                        <div class="availability">
                            <span class="stock available">在庫あり</span>
                            <span class="bake-time">15:00焼き上がり</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="breads" class="bread-categories">
        <div class="container">
            <h2 class="section-title">パンの種類</h2>
            <div class="category-tabs">
                <button class="category-tab active" data-category="all">すべて</button>
                <button class="category-tab" data-category="sweet">菓子パン</button>
                <button class="category-tab" data-category="meal">惣菜パン</button>
                <button class="category-tab" data-category="hard">ハード系</button>
                <button class="category-tab" data-category="sandwich">サンドイッチ</button>
            </div>
            <div class="category-grid">
                <div class="category-item" data-category="sweet">
                    <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&q=80" alt="菓子パン">
                    <div class="category-overlay">
                        <h3>菓子パン</h3>
                        <p>甘くて美味しい菓子パンの数々</p>
                        <span class="item-count">18種類</span>
                    </div>
                </div>
                <div class="category-item" data-category="meal">
                    <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=300&h=200&fit=crop&q=80" alt="惣菜パン">
                    <div class="category-overlay">
                        <h3>惣菜パン</h3>
                        <p>お食事にぴったりの惣菜パン</p>
                        <span class="item-count">15種類</span>
                    </div>
                </div>
                <div class="category-item" data-category="hard">
                    <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&q=80" alt="ハード系">
                    <div class="category-overlay">
                        <h3>ハード系</h3>
                        <p>本格的なヨーロッパスタイル</p>
                        <span class="item-count">8種類</span>
                    </div>
                </div>
                <div class="category-item" data-category="sandwich">
                    <img src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=300&h=200&fit=crop&q=80" alt="サンドイッチ">
                    <div class="category-overlay">
                        <h3>サンドイッチ</h3>
                        <p>具材たっぷりのサンドイッチ</p>
                        <span class="item-count">12種類</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="classes" class="bread-classes">
        <div class="container">
            <h2 class="section-title">パン教室</h2>
            <p class="section-subtitle">パン作りの楽しさを一緒に体験しませんか</p>
            <div class="classes-grid">
                <div class="class-card">
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&q=80" alt="初心者クラス">
                    <div class="class-info">
                        <h3>初心者クラス</h3>
                        <p>パン作りが初めての方でも安心して参加できるクラスです。</p>
                        <div class="class-details">
                            <div class="detail-item">
                                <span class="label">時間</span>
                                <span class="value">2時間</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">定員</span>
                                <span class="value">6名</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">料金</span>
                                <span class="value">¥3,500</span>
                            </div>
                        </div>
                        <div class="class-schedule">
                            <h4>開催日程</h4>
                            <ul>
                                <li>8月10日（土） 10:00-12:00</li>
                                <li>8月17日（土） 14:00-16:00</li>
                                <li>8月24日（土） 10:00-12:00</li>
                            </ul>
                        </div>
                        <button class="class-reserve-btn">申し込む</button>
                    </div>
                </div>
                <div class="class-card">
                    <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=250&fit=crop&q=80" alt="親子クラス">
                    <div class="class-info">
                        <h3>親子クラス</h3>
                        <p>お子様と一緒に楽しめる親子向けのパン作り教室です。</p>
                        <div class="class-details">
                            <div class="detail-item">
                                <span class="label">時間</span>
                                <span class="value">1.5時間</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">定員</span>
                                <span class="value">4組</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">料金</span>
                                <span class="value">¥4,000</span>
                            </div>
                        </div>
                        <div class="class-schedule">
                            <h4>開催日程</h4>
                            <ul>
                                <li>8月11日（日） 10:00-11:30</li>
                                <li>8月18日（日） 14:00-15:30</li>
                                <li>8月25日（日） 10:00-11:30</li>
                            </ul>
                        </div>
                        <button class="class-reserve-btn">申し込む</button>
                    </div>
                </div>
                <div class="class-card">
                    <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=250&fit=crop&q=80" alt="上級クラス">
                    <div class="class-info">
                        <h3>上級クラス</h3>
                        <p>本格的なパン作りを学びたい方向けの上級者クラスです。</p>
                        <div class="class-details">
                            <div class="detail-item">
                                <span class="label">時間</span>
                                <span class="value">3時間</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">定員</span>
                                <span class="value">4名</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">料金</span>
                                <span class="value">¥5,500</span>
                            </div>
                        </div>
                        <div class="class-schedule">
                            <h4>開催日程</h4>
                            <ul>
                                <li>8月12日（月） 13:00-16:00</li>
                                <li>8月19日（月） 13:00-16:00</li>
                                <li>8月26日（月） 13:00-16:00</li>
                            </ul>
                        </div>
                        <button class="class-reserve-btn">申し込む</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about-bakery">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>私たちのこだわり</h2>
                    <p>SWEET BAKERYは、1995年の開店以来、地域の皆様に愛され続けています。</p>
                    <p>毎日朝5時から、職人が心を込めてパンを焼き上げています。素材にこだわり、添加物は極力使わず、安心して召し上がっていただけるパン作りを心がけています。</p>
                    <div class="commitment-items">
                        <div class="commitment-item">
                            <h3>🌾 厳選素材</h3>
                            <p>国産小麦を中心に、安心・安全な素材のみを使用</p>
                        </div>
                        <div class="commitment-item">
                            <h3>🕰️ 時間をかけて</h3>
                            <p>天然酵母を使った長時間発酵で深い味わいを実現</p>
                        </div>
                        <div class="commitment-item">
                            <h3>👨‍🍳 職人の技</h3>
                            <p>30年の経験を持つ職人による手作りの温かさ</p>
                        </div>
                    </div>
                </div>
                <div class="about-visual">
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80" alt="パン職人">
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials">
        <div class="container">
            <h2 class="section-title">お客様の声</h2>
            <div class="testimonial-slider">
                <div class="testimonial-item active">
                    <p>"毎朝の食パンが楽しみです。ふわふわで自然な甘さが家族みんなに大好評！子どもたちも喜んで食べています。"</p>
                    <div class="customer-info">
                        <span class="customer-name">田中さま</span>
                        <span class="customer-detail">（ファミリー）</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="store" class="store-info">
        <div class="container">
            <h2 class="section-title">店舗情報</h2>
            <div class="store-content">
                <div class="store-details">
                    <h3>SWEET BAKERY</h3>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <h4>📍 住所</h4>
                            <p>〒158-0094 東京都世田谷区玉川3-15-8</p>
                        </div>
                        <div class="detail-item">
                            <h4>📞 電話番号</h4>
                            <p>03-3456-7890</p>
                        </div>
                        <div class="detail-item">
                            <h4>🕐 営業時間</h4>
                            <p>7:00-19:00（売り切れ次第終了）<br>定休日: 火曜日</p>
                        </div>
                        <div class="detail-item">
                            <h4>🚇 アクセス</h4>
                            <p>東急田園都市線「二子玉川駅」徒歩5分<br>駐車場3台完備</p>
                        </div>
                    </div>
                    <div class="baking-schedule-info">
                        <h4>📅 焼き上がりスケジュール</h4>
                        <div class="schedule-list">
                            <div class="schedule-item">
                                <span class="time">6:00</span>
                                <span class="items">食パン、クロワッサン、デニッシュ</span>
                            </div>
                            <div class="schedule-item">
                                <span class="time">9:00</span>
                                <span class="items">菓子パン、サンドイッチ</span>
                            </div>
                            <div class="schedule-item">
                                <span class="time">12:00</span>
                                <span class="items">惣菜パン、カレーパン</span>
                            </div>
                            <div class="schedule-item">
                                <span class="time">15:00</span>
                                <span class="items">ハード系、バゲット</span>
                            </div>
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
                    <h3>SWEET BAKERY</h3>
                    <p>毎日焼きたて、心を込めて</p>
                    <div class="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>パンの種類</h3>
                    <ul>
                        <li><a href="#">食パン・角食</a></li>
                        <li><a href="#">菓子パン</a></li>
                        <li><a href="#">惣菜パン</a></li>
                        <li><a href="#">ハード系</a></li>
                        <li><a href="#">サンドイッチ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>サービス</h3>
                    <ul>
                        <li><a href="#">パン予約</a></li>
                        <li><a href="#">パン教室</a></li>
                        <li><a href="#">アレルギー対応</a></li>
                        <li><a href="#">イベント用注文</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>お問い合わせ</h3>
                    <p>📞 03-3456-7890</p>
                    <p>🕐 営業時間: 7:00-19:00</p>
                    <p>定休日: 火曜日</p>
                </div>
            </div>
            <p class="copyright">&copy; 2025 SWEET BAKERY. All rights reserved.</p>
        </div>
    </footer>

    <!-- Allergen Information Modal -->
    <div class="modal" id="allergen-modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>アレルギー情報</h3>
            <div class="allergen-info">
                <p>当店では以下のアレルギー物質を含む商品を製造しています。</p>
                <div class="allergen-list">
                    <span class="allergen-item">小麦</span>
                    <span class="allergen-item">卵</span>
                    <span class="allergen-item">乳</span>
                    <span class="allergen-item">そば</span>
                    <span class="allergen-item">落花生</span>
                    <span class="allergen-item">えび</span>
                    <span class="allergen-item">かに</span>
                </div>
                <p>アレルギーをお持ちの方は、ご購入前にスタッフまでお声がけください。</p>
                <p>※同じ工房内で製造しているため、微量の混入の可能性があります。</p>
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
    font-family: 'Helvetica Neue', 'Yu Gothic', sans-serif;
    color: #5d4037;
    line-height: 1.6;
    background: #fefefe;
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
    background: rgba(255, 248, 220, 0.95);
    backdrop-filter: blur(10px);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(93, 64, 55, 0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 32px;
    font-weight: 300;
    letter-spacing: 2px;
    color: #d84315;
    text-shadow: 1px 1px 3px rgba(216, 67, 21, 0.3);
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav a {
    text-decoration: none;
    color: #5d4037;
    font-size: 16px;
    font-weight: 400;
    transition: color 0.3s;
    position: relative;
}

.nav a:hover {
    color: #d84315;
}

.nav a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #d84315;
    transition: width 0.3s;
}

.nav a:hover::after {
    width: 100%;
}

.header-actions {
    display: flex;
    gap: 15px;
}

.reservation-btn,
.allergen-info-btn {
    background: linear-gradient(45deg, #d84315, #ff7043);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 2px 10px rgba(216, 67, 21, 0.3);
}

.reservation-btn:hover,
.allergen-info-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(216, 67, 21, 0.4);
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
    font-size: 56px;
    font-weight: 300;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    line-height: 1.2;
}

.hero-text p {
    font-size: 22px;
    margin-bottom: 40px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    font-weight: 300;
}

.btn-warm {
    display: inline-block;
    padding: 18px 40px;
    background: linear-gradient(45deg, #d84315, #ff7043);
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.3s;
    box-shadow: 0 8px 25px rgba(216, 67, 21, 0.4);
}

.btn-warm:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(216, 67, 21, 0.5);
}

/* Fresh Baked */
.fresh-baked {
    background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
    padding: 80px 0;
}

.fresh-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.fresh-item {
    text-align: center;
    padding: 40px 30px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(93, 64, 55, 0.1);
    transition: transform 0.3s;
}

.fresh-item:hover {
    transform: translateY(-10px);
}

.fresh-icon {
    font-size: 48px;
    margin-bottom: 25px;
    display: block;
}

.fresh-item h3 {
    font-size: 22px;
    margin-bottom: 15px;
    color: #d84315;
    font-weight: 500;
}

.fresh-item p {
    color: #666;
    line-height: 1.7;
}

/* Sections */
section {
    padding: 100px 0;
}

.section-title {
    text-align: center;
    font-size: 42px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #5d4037;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #d84315, #ff7043);
    margin: 20px auto;
    border-radius: 2px;
}

.section-subtitle {
    text-align: center;
    font-size: 18px;
    color: #666;
    margin-bottom: 60px;
    font-weight: 300;
}

/* Daily Breads */
.daily-breads {
    background: white;
}

.baking-schedule {
    text-align: center;
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
}

.daily-schedule {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 60px;
}

.schedule-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid #e0e0e0;
}

.schedule-time.active {
    background: linear-gradient(45deg, #d84315, #ff7043);
    color: white;
    border-color: transparent;
}

.schedule-time .time {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
}

.schedule-time .label {
    font-size: 14px;
    opacity: 0.8;
}

.bread-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.bread-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.bread-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

.bread-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.bread-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.bread-card:hover .bread-image img {
    transform: scale(1.05);
}

.fresh-badge,
.popular-badge,
.new-badge,
.limited-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
    color: white;
}

.fresh-badge {
    background: #4caf50;
}

.popular-badge {
    background: #ff9800;
}

.new-badge {
    background: #2196f3;
}

.limited-badge {
    background: #e91e63;
}

.reserve-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(216, 67, 21, 0.9);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 15px;
    font-size: 12px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s;
}

.bread-card:hover .reserve-btn {
    opacity: 1;
}

.bread-info {
    padding: 25px;
}

.bread-info h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #5d4037;
    font-weight: 500;
}

.bread-description {
    color: #666;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.6;
}

.bread-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.price {
    font-size: 18px;
    color: #d84315;
    font-weight: bold;
}

.allergens {
    background: #ffebee;
    color: #d32f2f;
    padding: 4px 8px;
    border-radius: 10px;
    font-size: 12px;
}

.availability {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
}

.stock {
    padding: 4px 8px;
    border-radius: 10px;
    font-weight: 500;
}

.stock.available {
    background: #e8f5e8;
    color: #2e7d2e;
}

.stock.low {
    background: #fff3e0;
    color: #f57c00;
}

.stock.limited {
    background: #fce4ec;
    color: #c2185b;
}

.bake-time {
    color: #666;
    font-style: italic;
}

/* Bread Categories */
.bread-categories {
    background: #f8f8f8;
}

.category-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.category-tab {
    background: white;
    border: 2px solid #e0e0e0;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    color: #666;
}

.category-tab.active,
.category-tab:hover {
    background: linear-gradient(45deg, #d84315, #ff7043);
    border-color: transparent;
    color: white;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.category-item {
    position: relative;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s;
}

.category-item:hover {
    transform: scale(1.05);
}

.category-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.category-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 30px 20px 20px;
}

.category-overlay h3 {
    font-size: 20px;
    margin-bottom: 5px;
}

.category-overlay p {
    font-size: 14px;
    margin-bottom: 10px;
    opacity: 0.9;
}

.item-count {
    background: #d84315;
    color: white;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

/* Bread Classes */
.bread-classes {
    background: white;
}

.classes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
}

.class-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.class-card:hover {
    transform: translateY(-5px);
}

.class-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.class-info {
    padding: 30px;
}

.class-info h3 {
    font-size: 24px;
    margin-bottom: 15px;
    color: #d84315;
    font-weight: 500;
}

.class-info p {
    color: #666;
    margin-bottom: 25px;
    line-height: 1.7;
}

.class-details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 25px;
}

.detail-item {
    text-align: center;
    padding: 15px;
    background: #f8f8f8;
    border-radius: 10px;
}

.detail-item .label {
    display: block;
    font-size: 12px;
    color: #666;
    margin-bottom: 5px;
}

.detail-item .value {
    font-size: 16px;
    font-weight: bold;
    color: #d84315;
}

.class-schedule {
    margin-bottom: 25px;
}

.class-schedule h4 {
    font-size: 16px;
    margin-bottom: 15px;
    color: #5d4037;
}

.class-schedule ul {
    list-style: none;
}

.class-schedule ul li {
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    color: #666;
}

.class-reserve-btn {
    width: 100%;
    background: linear-gradient(45deg, #d84315, #ff7043);
    color: white;
    border: none;
    padding: 15px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
}

.class-reserve-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(216, 67, 21, 0.4);
}

/* About Bakery */
.about-bakery {
    background: #f8f8f8;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.about-text h2 {
    font-size: 36px;
    margin-bottom: 25px;
    color: #5d4037;
    font-weight: 300;
}

.about-text p {
    margin-bottom: 20px;
    color: #666;
    line-height: 1.8;
}

.commitment-items {
    margin-top: 40px;
}

.commitment-item {
    margin-bottom: 25px;
    padding: 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.commitment-item h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #d84315;
}

.commitment-item p {
    color: #666;
    font-size: 14px;
    margin: 0;
}

.about-visual img {
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Testimonials */
.testimonials {
    background: linear-gradient(135deg, #d84315, #ff7043);
    color: white;
    text-align: center;
}

.testimonials .section-title {
    color: white;
}

.testimonials .section-title::after {
    background: white;
}

.testimonial-item {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
}

.testimonial-item p {
    font-size: 20px;
    font-style: italic;
    margin-bottom: 30px;
    line-height: 1.8;
}

.customer-info {
    font-size: 16px;
    opacity: 0.9;
}

.customer-name {
    font-weight: bold;
    margin-right: 10px;
}

/* Store Info */
.store-info {
    background: white;
}

.store-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

.store-details h3 {
    font-size: 32px;
    margin-bottom: 30px;
    color: #d84315;
    font-weight: 300;
}

.detail-grid {
    display: grid;
    gap: 25px;
    margin-bottom: 40px;
}

.detail-item h4 {
    font-size: 16px;
    margin-bottom: 8px;
    color: #d84315;
    font-weight: bold;
}

.detail-item p {
    color: #666;
    line-height: 1.6;
}

.baking-schedule-info {
    background: #f8f8f8;
    padding: 30px;
    border-radius: 15px;
}

.baking-schedule-info h4 {
    font-size: 18px;
    margin-bottom: 20px;
    color: #d84315;
}

.schedule-list {
    display: grid;
    gap: 15px;
}

.schedule-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.schedule-item .time {
    font-weight: bold;
    color: #d84315;
    min-width: 60px;
}

.schedule-item .items {
    color: #666;
    font-size: 14px;
}

.store-image img {
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

/* Footer */
.footer {
    background: #5d4037;
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
    color: #ff7043;
    font-size: 18px;
    font-weight: 500;
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
    color: #ff7043;
}

.social-links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #666;
    color: #ccc;
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
    margin: 10% auto;
    padding: 40px;
    border-radius: 20px;
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
    color: #d84315;
}

.allergen-info p {
    margin-bottom: 20px;
    color: #666;
    line-height: 1.7;
}

.allergen-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0;
}

.allergen-item {
    background: #ffebee;
    color: #d32f2f;
    padding: 8px 15px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-text h2 {
        font-size: 36px;
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
    
    .about-content,
    .store-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .daily-schedule {
        flex-direction: column;
        gap: 15px;
    }
    
    .class-details {
        grid-template-columns: 1fr;
    }
    
    .modal-content {
        width: 95%;
        margin: 20% auto;
    }
}`,
    js: `// Schedule time selection
document.querySelectorAll('.schedule-time').forEach(timeBtn => {
    timeBtn.addEventListener('click', function() {
        const time = this.dataset.time;
        
        // Update active time
        document.querySelectorAll('.schedule-time').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide bread cards based on time
        document.querySelectorAll('.bread-card').forEach(card => {
            if (card.dataset.time === time) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Bread reservation
document.querySelectorAll('.reserve-btn').forEach(button => {
    button.addEventListener('click', function() {
        const breadId = this.dataset.bread;
        const breadCard = this.closest('.bread-card');
        const breadName = breadCard.querySelector('h3').textContent;
        const price = breadCard.querySelector('.price').textContent;
        const availability = breadCard.querySelector('.stock').textContent;
        
        if (confirm(\`\${breadName} を予約しますか？\\n価格: \${price}\\n在庫状況: \${availability}\`)) {
            alert(\`\${breadName} の予約を承りました。\\n\\nお受け取り時間をお知らせください：\\n・朝の部: 7:00-11:00\\n・昼の部: 11:00-15:00\\n・夕方の部: 15:00-19:00\`);
        }
    });
});

// Category tabs for bread types
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Update active tab
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide category items
        document.querySelectorAll('.category-item').forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Category item clicks
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function() {
        const categoryName = this.querySelector('h3').textContent;
        const itemCount = this.querySelector('.item-count').textContent;
        alert(\`\${categoryName} のページに移動します\\n\${itemCount}の商品をご用意しています\`);
    });
});

// Bread class reservations
document.querySelectorAll('.class-reserve-btn').forEach(button => {
    button.addEventListener('click', function() {
        const classCard = this.closest('.class-card');
        const className = classCard.querySelector('h3').textContent;
        const price = classCard.querySelector('.detail-item .value').textContent;
        
        alert(\`\${className} の申し込みフォームに移動します\\n\\n参加費: \${price}\\n\\n以下の情報をご準備ください：\\n・お名前・連絡先\\n・ご希望日時\\n・参加人数\\n・アレルギーの有無\`);
    });
});

// Reservation button
document.querySelector('.reservation-btn').addEventListener('click', function() {
    alert('パン予約ページに移動します\\n\\n以下のサービスをご利用いただけます：\\n・事前予約で確実にお受け取り\\n・大量注文対応\\n・イベント用のセット注文\\n・お誕生日ケーキの予約');
});

// Allergen information modal
const allergenModal = document.getElementById('allergen-modal');
const allergenBtn = document.querySelector('.allergen-info-btn');
const closeBtn = document.querySelector('.close');

allergenBtn.addEventListener('click', function() {
    allergenModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    allergenModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === allergenModal) {
        allergenModal.style.display = 'none';
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

// Initialize - show morning breads by default
document.addEventListener('DOMContentLoaded', function() {
    // Show morning breads initially
    document.querySelectorAll('.bread-card').forEach(card => {
        if (card.dataset.time === 'morning') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show all categories initially
    document.querySelectorAll('.category-item').forEach(item => {
        item.style.display = 'block';
    });
});

// Fresh item animations on scroll
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

document.querySelectorAll('.fresh-item, .bread-card, .class-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});`
  }
}