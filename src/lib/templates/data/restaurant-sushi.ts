import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const restaurantSushiTemplate: WebTemplate = {
  id: 'restaurant-sushi',
  title: '寿司店',
  category: TEMPLATE_CATEGORIES.RESTAURANT,
  description: '伝統的な寿司職人の技と心を表現するWebサイトテンプレート',
  thumbnail: '/template-images/restaurant-sushi.jpg',
  features: [
    '和風ミニマルデザイン',
    'おまかせコース紹介',
    '職人の技法紹介',
    'カウンター予約システム'
  ],
  tags: ['レストラン', '寿司', '和食', '職人', 'おまかせ'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>鮨 雅 - 江戸前寿司</title>
</head>
<body>
    <div class="wrapper">
        <header class="header">
            <div class="header-inner">
                <div class="logo">
                    <h1>鮨 雅</h1>
                    <span class="logo-reading">すし みやび</span>
                </div>
                <nav class="nav">
                    <ul class="nav-list">
                        <li><a href="#home">ホーム</a></li>
                        <li><a href="#concept">想い</a></li>
                        <li><a href="#omakase">おまかせ</a></li>
                        <li><a href="#craftsman">職人</a></li>
                        <li><a href="#ingredients">食材</a></li>
                        <li><a href="#counter">カウンター</a></li>
                        <li><a href="#info">店舗情報</a></li>
                        <li><a href="#reserve" class="reserve-btn">ご予約</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <section id="home" class="hero">
                <div class="hero-container">
                    <div class="hero-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&h=800&fit=crop" alt="Sushi counter" class="hero-image">
                        <div class="hero-overlay"></div>
                    </div>
                    <div class="hero-content">
                        <div class="hero-text">
                            <h2 class="hero-title">鮨 雅</h2>
                            <p class="hero-subtitle">江戸前の伝統を現代に継ぐ</p>
                            <div class="hero-ornament">
                                <span class="ornament-line"></span>
                                <span class="ornament-diamond">◆</span>
                                <span class="ornament-line"></span>
                            </div>
                            <p class="hero-description">職人の技と心が生み出す、究極の一貫</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="concept" class="concept">
                <div class="container">
                    <div class="concept-content">
                        <div class="concept-text">
                            <h2 class="section-title">職人の想い</h2>
                            <div class="title-underline"></div>
                            <p class="concept-lead">一期一会の心で、至高の一貫を</p>
                            <div class="concept-body">
                                <p>江戸前寿司の伝統を受け継ぎ、築地で培った目利きと技術で、最高の魚と米が織りなす調和を追求しています。</p>
                                <p>一貫一貫に込める想い、お客様との対話を大切にしながら、その日その時の最高の寿司をお届けいたします。</p>
                                <p>カウンター越しに感じる職人の息遣い、シャリの温もり、ネタの鮮度。すべてが融合した瞬間の美味しさを、心ゆくまでお楽しみください。</p>
                            </div>
                        </div>
                        <div class="concept-visual">
                            <div class="visual-main">
                                <img src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&h=400&fit=crop" alt="Sushi chef at work">
                            </div>
                            <div class="visual-accent">
                                <div class="zen-circle"></div>
                                <p class="zen-text">一期一会</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="omakase" class="omakase">
                <div class="container">
                    <h2 class="section-title center">おまかせコース</h2>
                    <div class="title-underline center"></div>
                    <p class="omakase-intro">その日の最高の食材で組み立てる珠玉のコース</p>
                    
                    <div class="omakase-courses">
                        <div class="course-item">
                            <div class="course-header">
                                <h3>昼のおまかせ</h3>
                                <div class="course-time">11:30〜14:00</div>
                            </div>
                            <div class="course-price">¥12,000</div>
                            <div class="course-description">
                                <p>厳選したネタ10貫と季節の椀物、デザートをお楽しみいただけるランチコースです。</p>
                            </div>
                            <div class="course-flow">
                                <div class="flow-item">
                                    <span class="flow-number">1</span>
                                    <span class="flow-text">季節の先付け</span>
                                </div>
                                <div class="flow-item">
                                    <span class="flow-number">2</span>
                                    <span class="flow-text">握り10貫</span>
                                </div>
                                <div class="flow-item">
                                    <span class="flow-number">3</span>
                                    <span class="flow-text">お椀</span>
                                </div>
                                <div class="flow-item">
                                    <span class="flow-number">4</span>
                                    <span class="flow-text">デザート</span>
                                </div>
                            </div>
                        </div>

                        <div class="course-item featured">
                            <div class="featured-label">おすすめ</div>
                            <div class="course-header">
                                <h3>夜のおまかせ</h3>
                                <div class="course-time">18:00〜22:00</div>
                            </div>
                            <div class="course-price">¥18,000</div>
                            <div class="course-description">
                                <p>季節の珍味から始まり、選りすぐりのネタ15貫をお楽しみいただける本格コースです。</p>
                            </div>
                            <div class="course-flow">
                                <div class="flow-item">
                                    <span class="flow-number">1</span>
                                    <span class="flow-text">季節の珍味</span>
                                </div>
                                <div class="flow-item">
                                    <span class="flow-number">2</span>
                                    <span class="flow-text">刺身</span>
                                </div>
                                <div class="flow-item">
                                    <span class="flow-number">3</span>
                                    <span class="flow-text">握り15貫</span>
                                </div>
                                <div class="flow-item">
                                    <span class="flow-number">4</span>
                                    <span class="flow-text">お椀・甘味</span>
                                </div>
                            </div>
                        </div>

                        <div class="course-item premium">
                            <div class="premium-label">特別コース</div>
                            <div class="course-header">
                                <h3>特選おまかせ</h3>
                                <div class="course-time">完全予約制</div>
                            </div>
                            <div class="course-price">¥25,000</div>
                            <div class="course-description">
                                <p>最高級の食材のみを使用した特別なコース。大間のマグロ、北海道のウニなど、厳選されたネタをご堪能ください。</p>
                            </div>
                            <div class="premium-features">
                                <span class="feature-tag">大間本マグロ</span>
                                <span class="feature-tag">北海道産ウニ</span>
                                <span class="feature-tag">天然車海老</span>
                                <span class="feature-tag">のどぐろ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="craftsman" class="craftsman">
                <div class="container">
                    <div class="craftsman-content">
                        <div class="craftsman-profile">
                            <div class="profile-image">
                                <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&h=800&fit=crop" alt="Sushi master">
                                <div class="profile-frame"></div>
                            </div>
                        </div>
                        <div class="craftsman-info">
                            <h2 class="section-title">大将</h2>
                            <div class="title-underline"></div>
                            <h3 class="craftsman-name">田中 雅人</h3>
                            <p class="craftsman-title">店主・寿司職人</p>
                            
                            <div class="craftsman-bio">
                                <p>銀座の老舗寿司店で15年の修行を積み、築地市場での仲買人経験も持つ。</p>
                                <p>「寿司は技術だけでなく、心で握るもの」という信念のもと、一貫一貫に魂を込めて握り続けています。</p>
                                <p>お客様との対話を大切にし、その方の好みに合わせた最高の一貫をお届けすることが使命だと考えています。</p>
                            </div>
                            
                            <div class="craftsman-philosophy">
                                <blockquote>
                                    <p>「寿司は生きもの。その日の魚の状態、気温、湿度、すべてを考慮して握らなければならない。そして何より、お客様の笑顔が一番の調味料です。」</p>
                                </blockquote>
                            </div>
                            
                            <div class="craftsman-skills">
                                <h4>職人の技</h4>
                                <div class="skills-grid">
                                    <div class="skill-item">
                                        <span class="skill-icon">🐟</span>
                                        <span class="skill-name">目利き</span>
                                    </div>
                                    <div class="skill-item">
                                        <span class="skill-icon">🍚</span>
                                        <span class="skill-name">シャリ</span>
                                    </div>
                                    <div class="skill-item">
                                        <span class="skill-icon">🔪</span>
                                        <span class="skill-name">包丁さばき</span>
                                    </div>
                                    <div class="skill-item">
                                        <span class="skill-icon">👥</span>
                                        <span class="skill-name">おもてなし</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ingredients" class="ingredients">
                <div class="container">
                    <h2 class="section-title center">厳選食材</h2>
                    <div class="title-underline center"></div>
                    <p class="ingredients-intro">全国各地から取り寄せる最高の食材</p>
                    
                    <div class="ingredients-showcase">
                        <div class="ingredient-category">
                            <h3>魚介類</h3>
                            <div class="ingredient-grid">
                                <div class="ingredient-item">
                                    <div class="ingredient-image">
                                        <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop" alt="マグロ">
                                    </div>
                                    <div class="ingredient-info">
                                        <h4>本マグロ</h4>
                                        <p>大間・戸井産</p>
                                        <span class="ingredient-season">12月〜3月</span>
                                    </div>
                                </div>
                                <div class="ingredient-item">
                                    <div class="ingredient-image">
                                        <img src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop" alt="ウニ">
                                    </div>
                                    <div class="ingredient-info">
                                        <h4>ウニ</h4>
                                        <p>利尻・礼文産</p>
                                        <span class="ingredient-season">6月〜8月</span>
                                    </div>
                                </div>
                                <div class="ingredient-item">
                                    <div class="ingredient-image">
                                        <img src="https://images.unsplash.com/photo-1565299507177-b0ac66763f30?w=400&h=300&fit=crop" alt="車海老">
                                    </div>
                                    <div class="ingredient-info">
                                        <h4>車海老</h4>
                                        <p>愛知・三河湾産</p>
                                        <span class="ingredient-season">通年</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="ingredient-category">
                            <h3>米・調味料</h3>
                            <div class="rice-section">
                                <div class="rice-info">
                                    <h4>シャリ</h4>
                                    <p>新潟県産コシヒカリを使用し、赤酢と白酢をブレンドした特製シャリ。人肌の温度を保ち、口の中でほどける絶妙な食感に仕上げています。</p>
                                </div>
                                <div class="seasoning-info">
                                    <h4>調味料</h4>
                                    <ul>
                                        <li>赤酢（京都・村山造酢）</li>
                                        <li>塩（沖縄・宮古島の雪塩）</li>
                                        <li>醤油（千葉・キッコーマン特選）</li>
                                        <li>わさび（静岡・伊豆産本わさび）</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="counter" class="counter">
                <div class="container">
                    <div class="counter-content">
                        <div class="counter-info">
                            <h2 class="section-title">カウンター席</h2>
                            <div class="title-underline"></div>
                            <p class="counter-lead">職人との会話を楽しむ特等席</p>
                            <div class="counter-description">
                                <p>檜のカウンターに8席のみ。職人の手技を間近で見ながら、できたての寿司をお楽しみいただけます。</p>
                                <p>お客様一人ひとりの好みに合わせて握る、まさに「おまかせ」の醍醐味を味わえる空間です。</p>
                            </div>
                            
                            <div class="counter-features">
                                <div class="feature-item">
                                    <div class="feature-icon">🪑</div>
                                    <div class="feature-text">
                                        <h4>カウンター8席</h4>
                                        <p>一枚板の檜カウンター</p>
                                    </div>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-icon">❄️</div>
                                    <div class="feature-text">
                                        <h4>ネタケース</h4>
                                        <p>その日の厳選ネタを展示</p>
                                    </div>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-icon">🗣️</div>
                                    <div class="feature-text">
                                        <h4>職人との対話</h4>
                                        <p>寿司談義をお楽しみください</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="counter-visual">
                            <div class="counter-image">
                                <img src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop" alt="Sushi counter">
                            </div>
                            <div class="seating-chart">
                                <h4>お席のご案内</h4>
                                <div class="seats">
                                    <div class="seat" data-seat="1">1</div>
                                    <div class="seat" data-seat="2">2</div>
                                    <div class="seat" data-seat="3">3</div>
                                    <div class="seat" data-seat="4">4</div>
                                    <div class="seat" data-seat="5">5</div>
                                    <div class="seat" data-seat="6">6</div>
                                    <div class="seat" data-seat="7">7</div>
                                    <div class="seat" data-seat="8">8</div>
                                </div>
                                <p class="seating-note">※席のご指定は承っておりません</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="info" class="info">
                <div class="container">
                    <div class="info-content">
                        <div class="info-details">
                            <h2 class="section-title">店舗情報</h2>
                            <div class="title-underline"></div>
                            
                            <div class="info-section">
                                <h3>営業時間</h3>
                                <div class="hours-table">
                                    <div class="hours-row">
                                        <span class="hours-label">昼</span>
                                        <span class="hours-time">11:30〜14:00（最終入店 13:00）</span>
                                    </div>
                                    <div class="hours-row">
                                        <span class="hours-label">夜</span>
                                        <span class="hours-time">18:00〜22:00（最終入店 20:00）</span>
                                    </div>
                                    <div class="hours-row">
                                        <span class="hours-label">定休日</span>
                                        <span class="hours-time">日曜日・祝日</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="info-section">
                                <h3>アクセス</h3>
                                <div class="address-info">
                                    <p class="address">〒104-0061<br>東京都中央区銀座8-10-2<br>銀座八丁目ビル B1F</p>
                                    <div class="access-methods">
                                        <p>・JR新橋駅 徒歩5分</p>
                                        <p>・地下鉄銀座駅 徒歩3分</p>
                                        <p>・地下鉄新橋駅 徒歩2分</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="info-section">
                                <h3>お問い合わせ</h3>
                                <div class="contact-info">
                                    <p class="phone">TEL: 03-3571-2345</p>
                                    <p class="note">※ご予約・お問い合わせは電話のみ承っております</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="info-visual">
                            <div class="storefront-image">
                                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" alt="店舗外観">
                            </div>
                            <div class="info-notes">
                                <h4>ご利用にあたって</h4>
                                <ul>
                                    <li>完全予約制となっております</li>
                                    <li>お子様のご入店はご遠慮いただいております</li>
                                    <li>香水の使用はお控えください</li>
                                    <li>お支払いは現金のみとなります</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="reserve" class="reserve">
                <div class="container">
                    <div class="reserve-content">
                        <h2 class="section-title center">ご予約</h2>
                        <div class="title-underline center"></div>
                        <p class="reserve-intro">完全予約制となっております</p>
                        
                        <div class="reservation-info">
                            <div class="reservation-phone">
                                <div class="phone-icon">📞</div>
                                <div class="phone-details">
                                    <h3>お電話でのご予約</h3>
                                    <p class="phone-number">03-3571-2345</p>
                                    <p class="phone-hours">受付時間: 10:00〜17:00（定休日除く）</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="reservation-rules">
                            <h3>ご予約について</h3>
                            <div class="rules-grid">
                                <div class="rule-item">
                                    <h4>予約受付</h4>
                                    <p>1ヶ月前の同日より承ります</p>
                                </div>
                                <div class="rule-item">
                                    <h4>キャンセル</h4>
                                    <p>前日17時までにご連絡ください</p>
                                </div>
                                <div class="rule-item">
                                    <h4>遅刻</h4>
                                    <p>15分以上の遅刻は自動キャンセルとなります</p>
                                </div>
                                <div class="rule-item">
                                    <h4>人数変更</h4>
                                    <p>当日の人数変更はお受けできません</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="reservation-calendar">
                            <h3>営業カレンダー</h3>
                            <p class="calendar-note">定休日: 日曜日・祝日</p>
                            <div class="calendar-info">
                                <p>詳しい営業日程については、お電話でお問い合わせください。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="footer-content">
                <div class="footer-main">
                    <h3>鮨 雅</h3>
                    <p>すし みやび</p>
                    <div class="footer-contact">
                        <p>〒104-0061 東京都中央区銀座8-10-2 銀座八丁目ビル B1F</p>
                        <p>TEL: 03-3571-2345</p>
                    </div>
                </div>
                <div class="footer-hours">
                    <h4>営業時間</h4>
                    <p>昼: 11:30〜14:00</p>
                    <p>夜: 18:00〜22:00</p>
                    <p>定休日: 日曜日・祝日</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright">© 2025 鮨雅. All rights reserved.</p>
            </div>
        </footer>
    </div>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Zen+Kaku+Gothic+New:wght@300;400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Serif JP', serif;
    color: #2c2c2c;
    background: #faf9f7;
    line-height: 1.8;
}

.wrapper {
    min-height: 100vh;
}

/* Header */
.header {
    background: rgba(250, 249, 247, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(44, 44, 44, 0.1);
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-size: 2.5rem;
    color: #2c2c2c;
    font-weight: 700;
    margin-bottom: 0.2rem;
}

.logo-reading {
    font-size: 0.8rem;
    color: #8b7355;
    display: block;
    text-align: center;
    letter-spacing: 2px;
}

.nav-list {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-list a {
    text-decoration: none;
    color: #2c2c2c;
    font-weight: 400;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    position: relative;
}

.nav-list a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -3px;
    left: 50%;
    background: #8b7355;
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-list a:hover {
    color: #8b7355;
}

.nav-list a:hover::after {
    width: 100%;
}

.reserve-btn {
    background: #2c2c2c;
    color: white !important;
    padding: 0.8rem 1.8rem;
    border-radius: 4px;
    font-weight: 500;
}

.reserve-btn:hover {
    background: #8b7355 !important;
}

/* Hero */
.hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.hero-image-wrapper {
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
    background: linear-gradient(135deg, rgba(44, 44, 44, 0.6) 0%, rgba(139, 115, 85, 0.4) 100%);
    z-index: -1;
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
}

.hero-title {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.ornament-line {
    width: 60px;
    height: 1px;
    background: white;
    opacity: 0.7;
}

.ornament-diamond {
    color: white;
    font-size: 1.2rem;
    opacity: 0.8;
}

.hero-description {
    font-size: 1.1rem;
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
    color: #2c2c2c;
    font-weight: 700;
    margin-bottom: 1rem;
}

.section-title.center {
    text-align: center;
}

.title-underline {
    width: 60px;
    height: 2px;
    background: #8b7355;
    margin-bottom: 2rem;
}

.title-underline.center {
    margin: 0 auto 2rem;
}

/* Concept */
.concept {
    background: white;
}

.concept-content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: center;
}

.concept-lead {
    font-size: 1.3rem;
    color: #8b7355;
    font-weight: 500;
    margin-bottom: 2rem;
}

.concept-body p {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
}

.concept-visual {
    position: relative;
}

.visual-main img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
}

.visual-accent {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background: white;
    padding: 2rem;
    border-radius: 50%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.zen-circle {
    width: 40px;
    height: 40px;
    border: 2px solid #8b7355;
    border-radius: 50%;
    margin-bottom: 0.5rem;
}

.zen-text {
    font-size: 0.9rem;
    color: #2c2c2c;
    font-weight: 500;
}

/* Omakase */
.omakase {
    background: #f8f7f5;
}

.omakase-intro {
    text-align: center;
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 4rem;
}

.omakase-courses {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.course-item {
    background: white;
    padding: 2.5rem;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    position: relative;
    transition: transform 0.3s ease;
}

.course-item:hover {
    transform: translateY(-5px);
}

.course-item.featured {
    border: 2px solid #8b7355;
}

.course-item.premium {
    background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
    color: white;
}

.featured-label,
.premium-label {
    position: absolute;
    top: -10px;
    right: 20px;
    background: #8b7355;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 500;
}

.premium-label {
    background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%);
    color: #2c2c2c;
}

.course-header {
    text-align: center;
    margin-bottom: 1.5rem;
}

.course-header h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
}

.course-time {
    color: #8b7355;
    font-size: 0.9rem;
}

.course-price {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: #8b7355;
    margin-bottom: 1.5rem;
}

.premium .course-price {
    color: #d4af37;
}

.course-description {
    margin-bottom: 2rem;
    color: #666;
    text-align: center;
}

.premium .course-description {
    color: #ccc;
}

.course-flow {
    display: grid;
    gap: 1rem;
}

.flow-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid #f0f0f0;
}

.premium .flow-item {
    border-bottom-color: #444;
}

.flow-number {
    background: #8b7355;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 500;
}

.premium .flow-number {
    background: #d4af37;
    color: #2c2c2c;
}

.premium-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.feature-tag {
    background: #d4af37;
    color: #2c2c2c;
    padding: 0.3rem 1rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
}

/* Craftsman */
.craftsman {
    background: white;
}

.craftsman-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: start;
}

.profile-image {
    position: relative;
}

.profile-image img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 8px;
}

.profile-frame {
    position: absolute;
    top: -15px;
    left: -15px;
    right: 15px;
    bottom: 15px;
    border: 3px solid #8b7355;
    border-radius: 8px;
    z-index: -1;
}

.craftsman-name {
    font-size: 2rem;
    color: #2c2c2c;
    margin-bottom: 0.5rem;
}

.craftsman-title {
    color: #8b7355;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

.craftsman-bio p {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
}

.craftsman-philosophy {
    background: #f8f7f5;
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid #8b7355;
    margin: 2rem 0;
}

.craftsman-philosophy blockquote p {
    font-style: italic;
    color: #444;
    margin-bottom: 0;
}

.craftsman-skills h4 {
    font-size: 1.3rem;
    color: #2c2c2c;
    margin-bottom: 1.5rem;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #f8f7f5;
    border-radius: 8px;
}

.skill-icon {
    font-size: 1.5rem;
}

.skill-name {
    font-weight: 500;
    color: #2c2c2c;
}

/* Ingredients */
.ingredients {
    background: #f8f7f5;
}

.ingredients-intro {
    text-align: center;
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 4rem;
}

.ingredients-showcase {
    display: grid;
    gap: 4rem;
}

.ingredient-category h3 {
    font-size: 1.8rem;
    color: #2c2c2c;
    margin-bottom: 2rem;
    text-align: center;
}

.ingredient-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.ingredient-item {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
}

.ingredient-item:hover {
    transform: translateY(-5px);
}

.ingredient-image {
    height: 200px;
    overflow: hidden;
}

.ingredient-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ingredient-info {
    padding: 1.5rem;
    text-align: center;
}

.ingredient-info h4 {
    font-size: 1.3rem;
    color: #2c2c2c;
    margin-bottom: 0.5rem;
}

.ingredient-info p {
    color: #8b7355;
    margin-bottom: 0.5rem;
}

.ingredient-season {
    background: #8b7355;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 15px;
    font-size: 0.8rem;
}

.rice-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    background: white;
    padding: 3rem;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.rice-info h4,
.seasoning-info h4 {
    font-size: 1.3rem;
    color: #2c2c2c;
    margin-bottom: 1rem;
}

.rice-info p {
    line-height: 1.8;
}

.seasoning-info ul {
    list-style: none;
    padding-left: 0;
}

.seasoning-info li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding-left: 1.5rem;
}

.seasoning-info li::before {
    content: '・';
    position: absolute;
    left: 0;
    color: #8b7355;
}

.seasoning-info li:last-child {
    border-bottom: none;
}

/* Counter */
.counter {
    background: white;
}

.counter-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.counter-lead {
    font-size: 1.3rem;
    color: #8b7355;
    font-weight: 500;
    margin-bottom: 2rem;
}

.counter-description p {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
}

.counter-features {
    margin-top: 3rem;
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: #f8f7f5;
    border-radius: 8px;
}

.feature-icon {
    font-size: 2rem;
    margin-top: 0.5rem;
}

.feature-text h4 {
    font-size: 1.2rem;
    color: #2c2c2c;
    margin-bottom: 0.5rem;
}

.feature-text p {
    color: #666;
}

.counter-visual {
    position: relative;
}

.counter-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
}

.seating-chart {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    margin-top: 2rem;
}

.seating-chart h4 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #2c2c2c;
}

.seats {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 1rem;
}

.seat {
    width: 40px;
    height: 40px;
    background: #8b7355;
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.seat:hover {
    background: #2c2c2c;
    transform: scale(1.1);
}

.seating-note {
    text-align: center;
    font-size: 0.9rem;
    color: #666;
}

/* Info */
.info {
    background: #f8f7f5;
}

.info-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.info-section {
    margin-bottom: 3rem;
}

.info-section h3 {
    font-size: 1.5rem;
    color: #2c2c2c;
    margin-bottom: 1.5rem;
}

.hours-table {
    display: grid;
    gap: 1rem;
}

.hours-row {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: white;
    border-radius: 4px;
    border-left: 4px solid #8b7355;
}

.hours-label {
    font-weight: 500;
    color: #2c2c2c;
}

.hours-time {
    color: #666;
}

.address-info .address {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.access-methods p {
    margin-bottom: 0.5rem;
    color: #666;
}

.contact-info .phone {
    font-size: 1.3rem;
    font-weight: 500;
    color: #8b7355;
    margin-bottom: 1rem;
}

.contact-info .note {
    color: #666;
    font-size: 0.9rem;
}

.storefront-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 2rem;
}

.info-notes {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid #8b7355;
}

.info-notes h4 {
    margin-bottom: 1rem;
    color: #2c2c2c;
}

.info-notes ul {
    list-style: none;
}

.info-notes li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding-left: 1.5rem;
}

.info-notes li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #8b7355;
}

.info-notes li:last-child {
    border-bottom: none;
}

/* Reserve */
.reserve {
    background: white;
}

.reserve-intro {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 3rem;
}

.reservation-info {
    margin-bottom: 4rem;
}

.reservation-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background: #f8f7f5;
    padding: 3rem;
    border-radius: 8px;
    border: 2px solid #8b7355;
}

.phone-icon {
    font-size: 3rem;
}

.phone-details h3 {
    font-size: 1.5rem;
    color: #2c2c2c;
    margin-bottom: 0.5rem;
}

.phone-number {
    font-size: 2rem;
    font-weight: 700;
    color: #8b7355;
    margin-bottom: 0.5rem;
}

.phone-hours {
    color: #666;
}

.reservation-rules {
    margin-bottom: 4rem;
}

.reservation-rules h3 {
    text-align: center;
    font-size: 1.8rem;
    color: #2c2c2c;
    margin-bottom: 2rem;
}

.rules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.rule-item {
    background: #f8f7f5;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    border-top: 4px solid #8b7355;
}

.rule-item h4 {
    font-size: 1.2rem;
    color: #2c2c2c;
    margin-bottom: 1rem;
}

.rule-item p {
    color: #666;
}

.reservation-calendar {
    text-align: center;
}

.reservation-calendar h3 {
    font-size: 1.8rem;
    color: #2c2c2c;
    margin-bottom: 1rem;
}

.calendar-note {
    font-size: 1.2rem;
    color: #8b7355;
    margin-bottom: 2rem;
}

.calendar-info {
    background: #f8f7f5;
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid #8b7355;
}

/* Footer */
.footer {
    background: #2c2c2c;
    color: #ccc;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.footer-main h3 {
    font-size: 2rem;
    color: #8b7355;
    margin-bottom: 0.3rem;
}

.footer-main > p {
    color: #8b7355;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
}

.footer-contact p {
    margin-bottom: 0.3rem;
    font-size: 0.95rem;
}

.footer-hours h4 {
    color: #8b7355;
    margin-bottom: 1rem;
}

.footer-hours p {
    margin-bottom: 0.3rem;
    font-size: 0.95rem;
}

.footer-bottom {
    border-top: 1px solid #444;
    padding-top: 2rem;
    text-align: center;
}

.copyright {
    color: #888;
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
    
    .concept-content,
    .craftsman-content,
    .counter-content,
    .info-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .omakase-courses {
        grid-template-columns: 1fr;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .rice-section {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .rules-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }
}`,
    js: `// スムーズスクロール
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

// ヘッダーのスクロール効果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(250, 249, 247, 0.98)';
        header.style.borderBottomColor = 'rgba(44, 44, 44, 0.15)';
    } else {
        header.style.background = 'rgba(250, 249, 247, 0.95)';
        header.style.borderBottomColor = 'rgba(44, 44, 44, 0.1)';
    }
});

// コースアイテムのアニメーション
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
document.querySelectorAll('.course-item, .ingredient-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
});

// カウンター席のインタラクション
document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', function() {
        const seatNumber = this.getAttribute('data-seat');
        // 全ての席をリセット
        document.querySelectorAll('.seat').forEach(s => {
            s.style.background = '#8b7355';
            s.textContent = s.getAttribute('data-seat');
        });
        
        // 選択された席を強調
        this.style.background = '#2c2c2c';
        this.textContent = '選択';
        
        // 簡単なフィードバック
        setTimeout(() => {
            this.style.background = '#8b7355';
            this.textContent = seatNumber;
        }, 2000);
    });
});

// 食材アイテムのホバー効果
document.querySelectorAll('.ingredient-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const img = this.querySelector('.ingredient-image img');
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        const img = this.querySelector('.ingredient-image img');
        img.style.transform = 'scale(1)';
    });
});

// 職人のスキルアイテムのアニメーション
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.background = '#fff';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.background = '#f8f7f5';
        this.style.boxShadow = 'none';
    });
});

// 営業時間の行のインタラクション
document.querySelectorAll('.hours-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.borderLeftWidth = '8px';
        this.style.transform = 'translateX(5px)';
        this.style.transition = 'all 0.3s ease';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.borderLeftWidth = '4px';
        this.style.transform = 'translateX(0)';
    });
});

// 電話番号のクリック効果
document.querySelector('.reservation-phone').addEventListener('click', function() {
    this.style.transform = 'scale(1.02)';
    this.style.boxShadow = '0 10px 30px rgba(139, 115, 85, 0.2)';
    this.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    }, 200);
});

// パララックス効果（軽微）
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image');
    
    parallaxElements.forEach(element => {
        const speed = 0.3;
        element.style.transform = \`translateY(\${scrolled * speed}px)\`;
    });
});

// 禅円のアニメーション
const zenCircle = document.querySelector('.zen-circle');
if (zenCircle) {
    setInterval(() => {
        zenCircle.style.transform = 'rotate(360deg)';
        zenCircle.style.transition = 'transform 2s ease-in-out';
        
        setTimeout(() => {
            zenCircle.style.transform = 'rotate(0deg)';
            zenCircle.style.transition = 'none';
        }, 2000);
    }, 5000);
}`
  }
}