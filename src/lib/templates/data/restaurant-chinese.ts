import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const restaurantChineseTemplate: WebTemplate = {
  id: 'restaurant-chinese',
  title: '中華レストラン',
  category: TEMPLATE_CATEGORIES.RESTAURANT,
  description: '本格中華料理の伝統と美味しさを表現するレストランWebサイトテンプレート',
  thumbnail: '/template-images/restaurant-chinese.jpg',
  features: [
    '中華風デザイン',
    '点心・炒め物メニュー',
    '個室案内',
    '宴会プラン紹介'
  ],
  tags: ['レストラン', '中華', '点心', '宴会', '個室'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>翡翠楼 - 本格中華料理</title>
</head>
<body>
    <div class="wrapper">
        <header class="header">
            <div class="header-inner">
                <div class="logo">
                    <h1>翡翠楼</h1>
                    <span class="logo-reading">ひすいろう</span>
                </div>
                <nav class="nav">
                    <ul class="nav-list">
                        <li><a href="#home">ホーム</a></li>
                        <li><a href="#about">当店について</a></li>
                        <li><a href="#menu">お料理</a></li>
                        <li><a href="#rooms">個室案内</a></li>
                        <li><a href="#banquet">宴会</a></li>
                        <li><a href="#access">アクセス</a></li>
                        <li><a href="#reserve" class="reserve-btn">ご予約</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <section id="home" class="hero">
                <div class="hero-bg">
                    <img src="https://images.unsplash.com/photo-1526735392772-4be4b5b3b01b?w=1920&h=800&fit=crop" alt="Chinese restaurant" class="hero-image">
                    <div class="hero-overlay"></div>
                </div>
                <div class="hero-content">
                    <h2 class="hero-title">翡翠楼</h2>
                    <p class="hero-subtitle">本格四川料理から上海料理まで</p>
                    <p class="hero-description">代々受け継がれる伝統の味をお楽しみください</p>
                    <div class="hero-ornament">◇◆◇</div>
                </div>
            </section>

            <section id="about" class="about">
                <div class="container">
                    <div class="about-content">
                        <div class="about-text">
                            <h2 class="section-title">当店について</h2>
                            <div class="title-ornament"></div>
                            <p class="about-intro">創業1985年、本格中華料理一筋</p>
                            <div class="about-description">
                                <p>翡翠楼は、中国各地の伝統的な調理法を受け継ぎながら、日本人の味覚に合わせて仕上げた本格中華料理をご提供しております。</p>
                                <p>四川料理の辛味、広東料理の繊細さ、上海料理の濃厚な味わいを、熟練の料理人が一品一品丹精込めて調理いたします。</p>
                                <p>ご家族でのお食事から、大切なご接待、慶事まで、様々なシーンでご利用いただけるよう、個室も多数ご用意しております。</p>
                            </div>
                        </div>
                        <div class="about-features">
                            <div class="feature-item">
                                <div class="feature-icon">🍜</div>
                                <h3>本格調理</h3>
                                <p>中国各地の伝統的な調理法で作る本格的な味わい</p>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">🏮</div>
                                <h3>個室完備</h3>
                                <p>2名様から50名様まで対応可能な個室をご用意</p>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">🎉</div>
                                <h3>宴会プラン</h3>
                                <p>歓送迎会、忘年会などの宴会プランも充実</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="menu" class="menu">
                <div class="container">
                    <h2 class="section-title center">お料理</h2>
                    <div class="title-ornament center"></div>
                    <p class="menu-subtitle">厳選食材を使用した本格中華料理</p>
                    
                    <div class="menu-tabs">
                        <button class="tab-btn active" data-tab="dim-sum">点心</button>
                        <button class="tab-btn" data-tab="stir-fry">炒め物</button>
                        <button class="tab-btn" data-tab="soup">スープ</button>
                        <button class="tab-btn" data-tab="course">コース</button>
                    </div>

                    <div class="menu-content">
                        <div class="tab-content active" id="dim-sum">
                            <div class="menu-grid">
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop" alt="小籠包">
                                    </div>
                                    <div class="menu-info">
                                        <h3>小籠包（8個）</h3>
                                        <p>上海風蒸し小籠包。肉汁たっぷりの定番人気</p>
                                        <span class="price">¥1,200</span>
                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop" alt="餃子">
                                    </div>
                                    <div class="menu-info">
                                        <h3>焼き餃子（6個）</h3>
                                        <p>パリッと焼き上げた自家製餃子</p>
                                        <span class="price">¥800</span>
                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?w=400&h=300&fit=crop" alt="シュウマイ">
                                    </div>
                                    <div class="menu-info">
                                        <h3>シュウマイ（6個）</h3>
                                        <p>ジューシーな豚肉と海老のシュウマイ</p>
                                        <span class="price">¥900</span>
                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop" alt="春巻き">
                                    </div>
                                    <div class="menu-info">
                                        <h3>春巻き（4本）</h3>
                                        <p>サクサクの皮に包まれた野菜たっぷり春巻き</p>
                                        <span class="price">¥700</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-content" id="stir-fry">
                            <div class="menu-grid">
                                <div class="menu-item featured">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop" alt="エビチリ">
                                    </div>
                                    <div class="menu-info">
                                        <h3>エビのチリソース炒め</h3>
                                        <p>プリプリ海老の四川風チリソース炒め</p>
                                        <span class="price">¥2,200</span>
                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop" alt="酢豚">
                                    </div>
                                    <div class="menu-info">
                                        <h3>酢豚</h3>
                                        <p>定番人気の甘酸っぱい酢豚</p>
                                        <span class="price">¥1,800</span>
                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop" alt="麻婆豆腐">
                                    </div>
                                    <div class="menu-info">
                                        <h3>麻婆豆腐</h3>
                                        <p>本格四川風の辛味と痺れが効いた麻婆豆腐</p>
                                        <span class="price">¥1,600</span>
                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop" alt="青椒肉絲">
                                    </div>
                                    <div class="menu-info">
                                        <h3>青椒肉絲</h3>
                                        <p>ピーマンと豚肉の細切り炒め</p>
                                        <span class="price">¥1,500</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-content" id="soup">
                            <div class="menu-grid">
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" alt="フカヒレスープ">
                                    </div>
                                    <div class="menu-info">
                                        <h3>フカヒレスープ</h3>
                                        <p>高級食材フカヒレの贅沢スープ</p>
                                        <span class="price">¥3,800</span>
                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop" alt="コーンスープ">
                                    </div>
                                    <div class="menu-info">
                                        <h3>蟹肉入りコーンスープ</h3>
                                        <p>まろやかなコーンと蟹肉の優しいスープ</p>
                                        <span class="price">¥1,200</span>
                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" alt="酸辣湯">
                                    </div>
                                    <div class="menu-info">
                                        <h3>酸辣湯</h3>
                                        <p>酸味と辛味のバランスが絶妙なスープ</p>
                                        <span class="price">¥900</span>
                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="menu-image">
                                        <img src="https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400&h=300&fit=crop" alt="ワンタンスープ">
                                    </div>
                                    <div class="menu-info">
                                        <h3>ワンタンスープ</h3>
                                        <p>つるんとした食感のワンタン入りスープ</p>
                                        <span class="price">¥1,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-content" id="course">
                            <div class="course-list">
                                <div class="course-item">
                                    <h3>翡翠コース</h3>
                                    <p class="course-price">¥3,500（税込）</p>
                                    <ul class="course-menu">
                                        <li>前菜三種盛り</li>
                                        <li>小籠包</li>
                                        <li>エビチリ</li>
                                        <li>酢豚</li>
                                        <li>チャーハン</li>
                                        <li>デザート</li>
                                    </ul>
                                </div>
                                <div class="course-item recommended">
                                    <div class="recommend-badge">おすすめ</div>
                                    <h3>特選コース</h3>
                                    <p class="course-price">¥5,800（税込）</p>
                                    <ul class="course-menu">
                                        <li>前菜五種盛り</li>
                                        <li>フカヒレスープ</li>
                                        <li>北京ダック</li>
                                        <li>エビチリ</li>
                                        <li>麻婆豆腐</li>
                                        <li>炒飯</li>
                                        <li>杏仁豆腐</li>
                                    </ul>
                                </div>
                                <div class="course-item">
                                    <h3>宴会コース</h3>
                                    <p class="course-price">¥8,000（税込）</p>
                                    <ul class="course-menu">
                                        <li>季節の前菜盛り合わせ</li>
                                        <li>フカヒレの姿煮</li>
                                        <li>北京ダック</li>
                                        <li>大海老のチリソース</li>
                                        <li>上海蟹の紹興酒蒸し</li>
                                        <li>牛肉の黒胡椒炒め</li>
                                        <li>特製チャーハン</li>
                                        <li>季節のデザート</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="rooms" class="rooms">
                <div class="container">
                    <h2 class="section-title center">個室案内</h2>
                    <div class="title-ornament center"></div>
                    <p class="rooms-subtitle">大切なお時間を特別な空間で</p>
                    
                    <div class="rooms-grid">
                        <div class="room-item">
                            <div class="room-image">
                                <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop" alt="小個室">
                            </div>
                            <div class="room-info">
                                <h3>小個室「蘭」</h3>
                                <p class="room-capacity">2〜4名様</p>
                                <p>ご夫婦やカップルでのお食事に最適な落ち着いた個室です。</p>
                                <span class="room-charge">個室料: ¥3,000</span>
                            </div>
                        </div>
                        <div class="room-item">
                            <div class="room-image">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop" alt="中個室">
                            </div>
                            <div class="room-info">
                                <h3>中個室「竹」</h3>
                                <p class="room-capacity">6〜8名様</p>
                                <p>ご家族でのお祝いやご接待にご利用いただけます。</p>
                                <span class="room-charge">個室料: ¥5,000</span>
                            </div>
                        </div>
                        <div class="room-item">
                            <div class="room-image">
                                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop" alt="大個室">
                            </div>
                            <div class="room-info">
                                <h3>大個室「梅」</h3>
                                <p class="room-capacity">10〜20名様</p>
                                <p>歓送迎会や忘年会などの宴会に最適な広々とした個室です。</p>
                                <span class="room-charge">個室料: ¥10,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="banquet" class="banquet">
                <div class="container">
                    <h2 class="section-title center">宴会プラン</h2>
                    <div class="title-ornament center"></div>
                    
                    <div class="banquet-content">
                        <div class="banquet-info">
                            <h3>各種ご宴会承ります</h3>
                            <ul class="banquet-list">
                                <li>歓送迎会</li>
                                <li>忘年会・新年会</li>
                                <li>結婚式二次会</li>
                                <li>法事・法要</li>
                                <li>同窓会</li>
                                <li>企業パーティー</li>
                            </ul>
                            <div class="banquet-features">
                                <div class="feature">
                                    <h4>飲み放題プラン</h4>
                                    <p>2時間 ¥2,000〜</p>
                                </div>
                                <div class="feature">
                                    <h4>送迎サービス</h4>
                                    <p>最寄り駅まで無料送迎</p>
                                </div>
                            </div>
                        </div>
                        <div class="banquet-image">
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop" alt="宴会場">
                        </div>
                    </div>
                </div>
            </section>

            <section id="access" class="access">
                <div class="container">
                    <h2 class="section-title center">アクセス</h2>
                    <div class="title-ornament center"></div>
                    
                    <div class="access-content">
                        <div class="access-info">
                            <div class="info-group">
                                <h3>店舗情報</h3>
                                <dl>
                                    <dt>住所</dt>
                                    <dd>〒100-0005 東京都千代田区丸の内1-1-1<br>丸の内ビル3F</dd>
                                    <dt>電話</dt>
                                    <dd>03-1234-5678</dd>
                                    <dt>営業時間</dt>
                                    <dd>
                                        ランチ: 11:30〜15:00（L.O. 14:30）<br>
                                        ディナー: 17:00〜22:30（L.O. 21:30）
                                    </dd>
                                    <dt>定休日</dt>
                                    <dd>日曜日・祝日</dd>
                                </dl>
                            </div>
                            
                            <div class="info-group">
                                <h3>アクセス</h3>
                                <ul>
                                    <li>JR東京駅 徒歩3分</li>
                                    <li>地下鉄丸ノ内線東京駅 徒歩1分</li>
                                    <li>地下鉄東西線大手町駅 徒歩5分</li>
                                </ul>
                            </div>
                        </div>
                        <div class="access-map">
                            <img src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&h=400&fit=crop" alt="店舗外観">
                        </div>
                    </div>
                </div>
            </section>

            <section id="reserve" class="reserve">
                <div class="container">
                    <h2 class="section-title center">ご予約</h2>
                    <div class="title-ornament center"></div>
                    
                    <div class="reserve-content">
                        <p>お電話またはオンラインでご予約を承っております</p>
                        <div class="reserve-buttons">
                            <a href="tel:03-1234-5678" class="btn-phone">
                                お電話でのご予約<br>
                                <span>03-1234-5678</span>
                            </a>
                            <button class="btn-online">オンライン予約</button>
                        </div>
                        <div class="reserve-notes">
                            <p>※個室ご利用の場合は、別途個室料を申し受けます</p>
                            <p>※ご予約は2日前までにお願いいたします</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>翡翠楼</h3>
                    <p>〒100-0005 東京都千代田区丸の内1-1-1 丸の内ビル3F</p>
                    <p>TEL: 03-1234-5678</p>
                </div>
                <div class="footer-hours">
                    <h4>営業時間</h4>
                    <p>ランチ: 11:30〜15:00</p>
                    <p>ディナー: 17:00〜22:30</p>
                    <p>定休日: 日曜日・祝日</p>
                </div>
            </div>
            <p class="copyright">© 2025 翡翠楼. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Crimson+Text:wght@400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Serif JP', serif;
    color: #2c2c2c;
    background: #fdf9f5;
    line-height: 1.7;
}

.wrapper {
    min-height: 100vh;
}

/* Header */
.header {
    background: rgba(139, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-size: 2.5rem;
    color: #ffd700;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.logo-reading {
    font-size: 0.9rem;
    color: #ffd700;
    opacity: 0.8;
    display: block;
    text-align: center;
    margin-top: -0.5rem;
}

.nav-list {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-list a {
    text-decoration: none;
    color: #ffd700;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-list a:hover {
    color: #fff;
}

.nav-list a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    background: #ffd700;
    transition: all 0.3s;
    transform: translateX(-50%);
}

.nav-list a:hover::after {
    width: 100%;
}

.reserve-btn {
    background: #ffd700;
    color: #8b0000 !important;
    padding: 0.7rem 1.5rem;
    border-radius: 25px;
    font-weight: 700;
}

.reserve-btn:hover {
    background: #fff !important;
    transform: scale(1.05);
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
    width: 100%;
    height: 100%;
    z-index: -1;
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
    background: linear-gradient(135deg, rgba(139, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 1;
}

.hero-title {
    font-size: 5rem;
    margin-bottom: 1rem;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
    color: #ffd700;
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    opacity: 0.9;
}

.hero-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.8;
}

.hero-ornament {
    font-size: 2rem;
    color: #ffd700;
    opacity: 0.8;
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
    font-size: 2.5rem;
    color: #8b0000;
    margin-bottom: 1rem;
    font-weight: 700;
}

.section-title.center {
    text-align: center;
}

.title-ornament {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #8b0000, #ffd700, #8b0000);
    margin-bottom: 2rem;
}

.title-ornament.center {
    margin: 0 auto 2rem;
}

/* About */
.about {
    background: white;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.about-intro {
    font-size: 1.2rem;
    color: #8b0000;
    font-weight: 600;
    margin-bottom: 2rem;
}

.about-description p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

.about-features {
    display: grid;
    gap: 2rem;
}

.feature-item {
    text-align: center;
    padding: 2rem;
    border: 2px solid #ffd700;
    border-radius: 10px;
    background: linear-gradient(135deg, #fff9e6 0%, #fff 100%);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature-item h3 {
    font-size: 1.3rem;
    color: #8b0000;
    margin-bottom: 0.5rem;
}

/* Menu */
.menu {
    background: #f8f5f0;
}

.menu-subtitle {
    text-align: center;
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 3rem;
}

.menu-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

.tab-btn {
    padding: 1rem 2rem;
    background: white;
    border: 2px solid #8b0000;
    color: #8b0000;
    cursor: pointer;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s;
    font-family: 'Noto Serif JP', serif;
}

.tab-btn.active,
.tab-btn:hover {
    background: #8b0000;
    color: white;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.menu-item {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.menu-item:hover {
    transform: translateY(-5px);
}

.menu-item.featured {
    border: 3px solid #ffd700;
}

.menu-image {
    height: 200px;
    overflow: hidden;
}

.menu-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.menu-item:hover .menu-image img {
    transform: scale(1.1);
}

.menu-info {
    padding: 1.5rem;
}

.menu-info h3 {
    font-size: 1.3rem;
    color: #8b0000;
    margin-bottom: 0.5rem;
}

.menu-info p {
    color: #666;
    margin-bottom: 1rem;
    font-size: 0.95rem;
}

.price {
    font-size: 1.2rem;
    font-weight: 700;
    color: #8b0000;
}

/* Course Menu */
.course-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.course-item {
    background: white;
    padding: 2.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    position: relative;
}

.course-item.recommended {
    border: 3px solid #ffd700;
}

.recommend-badge {
    position: absolute;
    top: -10px;
    right: 20px;
    background: #ffd700;
    color: #8b0000;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.9rem;
}

.course-item h3 {
    font-size: 1.8rem;
    color: #8b0000;
    margin-bottom: 0.5rem;
    text-align: center;
}

.course-price {
    text-align: center;
    font-size: 1.3rem;
    color: #8b0000;
    font-weight: 700;
    margin-bottom: 2rem;
}

.course-menu {
    list-style: none;
}

.course-menu li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding-left: 1.5rem;
}

.course-menu li::before {
    content: '◇';
    position: absolute;
    left: 0;
    color: #ffd700;
}

.course-menu li:last-child {
    border-bottom: none;
}

/* Rooms */
.rooms {
    background: white;
}

.rooms-subtitle {
    text-align: center;
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 3rem;
}

.rooms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.room-item {
    background: #f8f5f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.room-image {
    height: 250px;
    overflow: hidden;
}

.room-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.room-info {
    padding: 2rem;
}

.room-info h3 {
    font-size: 1.5rem;
    color: #8b0000;
    margin-bottom: 0.5rem;
}

.room-capacity {
    color: #ffd700;
    font-weight: 600;
    margin-bottom: 1rem;
    background: #8b0000;
    display: inline-block;
    padding: 0.3rem 1rem;
    border-radius: 15px;
}

.room-info p {
    margin-bottom: 1rem;
    color: #666;
}

.room-charge {
    color: #8b0000;
    font-weight: 700;
}

/* Banquet */
.banquet {
    background: #f8f5f0;
}

.banquet-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.banquet-info h3 {
    font-size: 1.8rem;
    color: #8b0000;
    margin-bottom: 2rem;
}

.banquet-list {
    list-style: none;
    margin-bottom: 3rem;
}

.banquet-list li {
    padding: 0.7rem 0;
    border-bottom: 1px solid #ddd;
    position: relative;
    padding-left: 2rem;
}

.banquet-list li::before {
    content: '🏮';
    position: absolute;
    left: 0;
}

.banquet-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.feature {
    background: white;
    padding: 2rem;
    text-align: center;
    border-radius: 10px;
    border: 2px solid #ffd700;
}

.feature h4 {
    color: #8b0000;
    margin-bottom: 0.5rem;
}

.banquet-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}

/* Access */
.access {
    background: white;
}

.access-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.info-group {
    margin-bottom: 3rem;
}

.info-group h3 {
    font-size: 1.5rem;
    color: #8b0000;
    margin-bottom: 1rem;
}

.info-group dl {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 1rem;
    align-items: start;
}

.info-group dt {
    font-weight: 700;
    color: #8b0000;
}

.info-group dd {
    color: #444;
}

.info-group ul {
    list-style: none;
}

.info-group li {
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
}

.info-group li::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #ffd700;
}

.access-map img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}

/* Reserve */
.reserve {
    background: linear-gradient(135deg, #8b0000 0%, #a52a2a 100%);
    color: white;
}

.reserve .section-title {
    color: white;
}

.reserve .title-ornament {
    background: linear-gradient(90deg, #ffd700, #fff, #ffd700);
}

.reserve-content {
    text-align: center;
}

.reserve-content > p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
}

.reserve-buttons {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 2rem;
}

.btn-phone, .btn-online {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
    border: 2px solid #ffd700;
    border-radius: 25px;
    background: transparent;
    color: #ffd700;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'Noto Serif JP', serif;
    font-weight: 600;
}

.btn-phone:hover, .btn-online:hover {
    background: #ffd700;
    color: #8b0000;
}

.btn-phone span {
    display: block;
    font-size: 1.3rem;
    margin-top: 0.3rem;
}

.reserve-notes {
    margin-top: 2rem;
}

.reserve-notes p {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
}

/* Footer */
.footer {
    background: #2c2017;
    color: #ccc;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.footer-info h3 {
    font-size: 2rem;
    color: #ffd700;
    margin-bottom: 1rem;
}

.footer-info p {
    margin-bottom: 0.3rem;
}

.footer-hours h4 {
    color: #ffd700;
    margin-bottom: 1rem;
}

.footer-hours p {
    margin-bottom: 0.3rem;
}

.copyright {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #444;
    color: #999;
    font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-list {
        flex-direction: column;
        gap: 1rem;
    }
    
    .hero-title {
        font-size: 3rem;
    }
    
    .about-content,
    .banquet-content,
    .access-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .menu-tabs {
        flex-wrap: wrap;
    }
    
    .reserve-buttons {
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
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // アクティブなタブを削除
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // 新しいアクティブタブを設定
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
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

// 予約ボタン
document.querySelector('.btn-online').addEventListener('click', function() {
    alert('オンライン予約システムへ移動します（実装予定）');
});

// ヘッダーのスクロール効果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(139, 0, 0, 0.98)';
    } else {
        header.style.background = 'rgba(139, 0, 0, 0.95)';
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

// メニューアイテムにアニメーション追加
document.querySelectorAll('.menu-item, .room-item, .course-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
});

// 個室アイテムのホバー効果
document.querySelectorAll('.room-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});`
  }
}