import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const restaurantFrenchTemplate: WebTemplate = {
  id: 'restaurant-french',
  title: 'フレンチレストラン',
  category: TEMPLATE_CATEGORIES.RESTAURANT,
  description: '高級感あふれるフランス料理レストランのWebサイトテンプレート',
  thumbnail: '/template-images/restaurant-french.jpg',
  features: [
    'エレガントなデザイン',
    'コース料理メニュー',
    'ワインペアリング',
    'シェフのこだわり紹介'
  ],
  tags: ['レストラン', 'フレンチ', '高級', 'コース料理', 'ワイン'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>L'Étoile - French Restaurant</title>
</head>
<body>
    <div class="wrapper">
        <header class="header">
            <div class="header-inner">
                <div class="logo">
                    <h1>L'Étoile</h1>
                    <span class="logo-subtitle">Restaurant Français</span>
                </div>
                <nav class="nav">
                    <ul class="nav-list">
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#philosophy">Philosophy</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#wine">Vins</a></li>
                        <li><a href="#chef">Chef</a></li>
                        <li><a href="#salon">Salon Privé</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#reservation" class="reservation-btn">Réservation</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <section id="home" class="hero">
                <div class="hero-background">
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=800&fit=crop" alt="Elegant French restaurant" class="hero-image">
                    <div class="hero-gradient"></div>
                </div>
                <div class="hero-content">
                    <div class="hero-text">
                        <h2 class="hero-title">L'Étoile</h2>
                        <p class="hero-tagline">Une expérience culinaire d'exception</p>
                        <p class="hero-description">フランス料理の真髄を極めた、洗練された美食体験</p>
                        <button class="hero-cta">Menu découverte</button>
                    </div>
                </div>
            </section>

            <section id="philosophy" class="philosophy">
                <div class="container">
                    <div class="philosophy-content">
                        <div class="philosophy-text">
                            <h2 class="section-title">Notre Philosophie</h2>
                            <div class="section-divider"></div>
                            <p class="philosophy-lead">伝統と革新が織りなすフランス料理</p>
                            <div class="philosophy-body">
                                <p>L'Étoileでは、フランス料理の伝統的な技法を大切にしながら、現代的な感性と日本の四季の美しさを融合させた独自の料理をご提供しています。</p>
                                <p>厳選された食材、熟練の技術、そして心のこもったサービスで、お客様に忘れられない美食体験をお届けいたします。</p>
                                <p>ソムリエが厳選したワインとのマリアージュも含め、すべてが調和した完璧なひとときをお過ごしください。</p>
                            </div>
                        </div>
                        <div class="philosophy-image">
                            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=800&fit=crop" alt="French cooking art">
                            <div class="image-frame"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="menu" class="menu">
                <div class="container">
                    <h2 class="section-title center">Nos Menus</h2>
                    <div class="section-divider center"></div>
                    <p class="menu-intro">季節の恵みを活かした珠玉のコース料理</p>
                    
                    <div class="menu-collection">
                        <div class="menu-card">
                            <div class="menu-header">
                                <h3>Menu Dégustation</h3>
                                <p class="menu-subtitle">テイスティングメニュー</p>
                            </div>
                            <div class="menu-price">¥15,000</div>
                            <div class="menu-description">
                                <p>シェフが厳選した8品のコース。季節の食材を使用した創作フレンチをお楽しみください。</p>
                            </div>
                            <ul class="menu-items">
                                <li>Amuse-bouche</li>
                                <li>Entrée froide</li>
                                <li>Potage</li>
                                <li>Poisson</li>
                                <li>Viande</li>
                                <li>Fromage</li>
                                <li>Dessert</li>
                                <li>Mignardises</li>
                            </ul>
                        </div>

                        <div class="menu-card featured">
                            <div class="featured-badge">Chef's Special</div>
                            <div class="menu-header">
                                <h3>Menu Saison</h3>
                                <p class="menu-subtitle">季節のスペシャルメニュー</p>
                            </div>
                            <div class="menu-price">¥22,000</div>
                            <div class="menu-description">
                                <p>その時期の最高の食材のみを使用した特別コース。トリュフやフォアグラなどの高級食材をふんだんに使用。</p>
                            </div>
                            <ul class="menu-items">
                                <li>Caviar d'Aquitaine</li>
                                <li>Foie gras poêlé</li>
                                <li>Velouté aux truffes</li>
                                <li>Homard bleu</li>
                                <li>Pigeon de Bresse</li>
                                <li>Sélection de fromages</li>
                                <li>Soufflé au Grand Marnier</li>
                                <li>Café & petits fours</li>
                            </ul>
                        </div>

                        <div class="menu-card">
                            <div class="menu-header">
                                <h3>Menu Déjeuner</h3>
                                <p class="menu-subtitle">ランチコース</p>
                            </div>
                            <div class="menu-price">¥8,500</div>
                            <div class="menu-description">
                                <p>平日限定のランチコース。本格フレンチをカジュアルにお楽しみいただけます。</p>
                            </div>
                            <ul class="menu-items">
                                <li>Amuse-bouche</li>
                                <li>Entrée du jour</li>
                                <li>Plat principal</li>
                                <li>Dessert maison</li>
                                <li>Café</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="wine" class="wine">
                <div class="container">
                    <div class="wine-content">
                        <div class="wine-text">
                            <h2 class="section-title">Cave à Vins</h2>
                            <div class="section-divider"></div>
                            <p class="wine-lead">ソムリエが厳選したワインコレクション</p>
                            <div class="wine-description">
                                <p>フランス各地の名門ワイナリーから厳選した500種類以上のワインをご用意。</p>
                                <p>シャンパーニュからボルドー、ブルゴーニュまで、幅広いセレクションからお料理に最適なワインをご提案いたします。</p>
                            </div>
                            
                            <div class="wine-categories">
                                <div class="wine-category">
                                    <h4>Champagne</h4>
                                    <p>Dom Pérignon, Krug, Louis Roederer</p>
                                </div>
                                <div class="wine-category">
                                    <h4>Bourgogne</h4>
                                    <p>Domaine de la Romanée-Conti, Leroy</p>
                                </div>
                                <div class="wine-category">
                                    <h4>Bordeaux</h4>
                                    <p>Château Margaux, Pétrus, Le Pin</p>
                                </div>
                            </div>
                        </div>
                        <div class="wine-cellar">
                            <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=800&fit=crop" alt="Wine cellar">
                            <div class="wine-stats">
                                <div class="stat">
                                    <span class="stat-number">500+</span>
                                    <span class="stat-label">Références</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">15</span>
                                    <span class="stat-label">Régions</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">50</span>
                                    <span class="stat-label">Millésimes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="chef" class="chef">
                <div class="container">
                    <div class="chef-content">
                        <div class="chef-profile">
                            <div class="chef-image-container">
                                <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&h=800&fit=crop" alt="Chef Pierre Dubois">
                                <div class="chef-overlay">
                                    <div class="chef-quote">
                                        "La cuisine, c'est l'âme qui se nourrit l'âme"
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chef-info">
                            <h2 class="section-title">Chef Exécutif</h2>
                            <div class="section-divider"></div>
                            <h3 class="chef-name">Pierre Dubois</h3>
                            <p class="chef-title">Chef Exécutif & Propriétaire</p>
                            
                            <div class="chef-bio">
                                <p>リヨン出身。ポール・ボキューズ、ジョエル・ロブションの下で修行を積み、パリの三つ星レストラン「L'Ambroisie」で10年間副料理長を務める。</p>
                                <p>2018年に来日し、日本の食材と出会うことで新たなインスピレーションを得る。伝統的なフランス料理の技法に、日本の四季と食材の美しさを融合させた独自のスタイルを確立。</p>
                            </div>
                            
                            <div class="chef-achievements">
                                <h4>受賞歴</h4>
                                <ul>
                                    <li>ミシュラン二つ星（2020年〜現在）</li>
                                    <li>ゴー・エ・ミヨ 18/20点（2021年）</li>
                                    <li>料理マスターズ フレンチ部門 金賞（2022年）</li>
                                    <li>世界ベストレストラン50 アジア部門 15位（2023年）</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="salon" class="salon">
                <div class="container">
                    <h2 class="section-title center">Salon Privé</h2>
                    <div class="section-divider center"></div>
                    <p class="salon-intro">特別なひとときのためのプライベート空間</p>
                    
                    <div class="salon-grid">
                        <div class="salon-item">
                            <div class="salon-image">
                                <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop" alt="Private dining room">
                            </div>
                            <div class="salon-info">
                                <h3>Salon Rose</h3>
                                <p class="salon-capacity">2〜6名様</p>
                                <p>親密なお食事やビジネスディナーに最適な落ち着いた個室です。</p>
                                <div class="salon-features">
                                    <span>個室使用料: ¥20,000</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="salon-item">
                            <div class="salon-image">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop" alt="Grand salon">
                            </div>
                            <div class="salon-info">
                                <h3>Grand Salon</h3>
                                <p class="salon-capacity">8〜16名様</p>
                                <p>重要な接待や記念日のお祝いにふさわしい格調高い個室です。</p>
                                <div class="salon-features">
                                    <span>個室使用料: ¥40,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact">
                <div class="container">
                    <div class="contact-content">
                        <div class="contact-info">
                            <h2 class="section-title">Information</h2>
                            <div class="section-divider"></div>
                            
                            <div class="info-block">
                                <h3>営業時間</h3>
                                <div class="hours-info">
                                    <p><strong>Déjeuner</strong><br>12:00 - 13:30（L.O.）</p>
                                    <p><strong>Dîner</strong><br>18:00 - 21:00（L.O.）</p>
                                    <p><strong>定休日</strong><br>月曜日・第一火曜日</p>
                                </div>
                            </div>
                            
                            <div class="info-block">
                                <h3>アクセス</h3>
                                <div class="address-info">
                                    <p>〒107-0052<br>東京都港区赤坂9-7-1<br>ミッドタウン・タワー 37F</p>
                                    <p>地下鉄六本木駅直結<br>地下鉄乃木坂駅から徒歩3分</p>
                                    <p>TEL: 03-6234-5678</p>
                                </div>
                            </div>
                            
                            <div class="info-block">
                                <h3>ドレスコード</h3>
                                <p>スマートカジュアル<br>（ジャケット着用推奨）</p>
                            </div>
                        </div>
                        
                        <div class="contact-visual">
                            <div class="restaurant-image">
                                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" alt="Restaurant view">
                            </div>
                            <div class="location-badge">
                                <span class="badge-text">37F Midtown Tower</span>
                                <span class="badge-subtitle">Tokyo Skyline View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="reservation" class="reservation">
                <div class="container">
                    <div class="reservation-content">
                        <h2 class="section-title center">Réservation</h2>
                        <div class="section-divider center"></div>
                        <p class="reservation-intro">お電話またはオンラインでご予約を承っております</p>
                        
                        <div class="reservation-options">
                            <a href="tel:03-6234-5678" class="reservation-btn phone">
                                <div class="btn-icon">📞</div>
                                <div class="btn-text">
                                    <span class="btn-label">お電話でのご予約</span>
                                    <span class="btn-number">03-6234-5678</span>
                                </div>
                            </a>
                            
                            <button class="reservation-btn online">
                                <div class="btn-icon">💻</div>
                                <div class="btn-text">
                                    <span class="btn-label">オンライン予約</span>
                                    <span class="btn-subtitle">24時間受付</span>
                                </div>
                            </button>
                        </div>
                        
                        <div class="reservation-notes">
                            <div class="note-item">
                                <h4>ご予約について</h4>
                                <ul>
                                    <li>ご予約は1ヶ月前から承っております</li>
                                    <li>キャンセルは前日までにお願いいたします</li>
                                    <li>お子様のご入店は12歳以上とさせていただいております</li>
                                </ul>
                            </div>
                            <div class="note-item">
                                <h4>アレルギー・食事制限</h4>
                                <p>アレルギーや食事制限がございましたら、ご予約時にお知らせください。可能な限り対応させていただきます。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>L'Étoile</h3>
                    <p>Restaurant Français</p>
                    <p>〒107-0052 東京都港区赤坂9-7-1<br>ミッドタウン・タワー 37F</p>
                </div>
                <div class="footer-hours">
                    <h4>Horaires</h4>
                    <p>Déjeuner: 12:00 - 13:30</p>
                    <p>Dîner: 18:00 - 21:00</p>
                </div>
                <div class="footer-contact">
                    <h4>Contact</h4>
                    <p>TEL: 03-6234-5678</p>
                    <p>Email: info@letoile-tokyo.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright">© 2025 L'Étoile. Tous droits réservés.</p>
            </div>
        </footer>
    </div>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Cormorant+Garamond:wght@300;400;500&family=Noto+Sans+JP:wght@300;400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Sans JP', sans-serif;
    color: #2c2c2c;
    background: #fdfcfb;
    line-height: 1.7;
}

.wrapper {
    min-height: 100vh;
}

/* Header */
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(15px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.header-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.8rem;
    color: #d4af37;
    font-weight: 700;
    letter-spacing: -1px;
}

.logo-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.9rem;
    color: #8b7355;
    font-style: italic;
    display: block;
    text-align: center;
    margin-top: -0.3rem;
}

.nav-list {
    display: flex;
    list-style: none;
    gap: 2.5rem;
    align-items: center;
}

.nav-list a {
    text-decoration: none;
    color: #2c2c2c;
    font-weight: 400;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
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
    background: #d4af37;
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-list a:hover {
    color: #d4af37;
}

.nav-list a:hover::after {
    width: 100%;
}

.reservation-btn {
    background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%);
    color: #2c2c2c !important;
    padding: 0.8rem 1.8rem;
    border-radius: 30px;
    font-weight: 500;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.reservation-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
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

.hero-background {
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

.hero-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: -1;
}

.hero-content {
    text-align: center;
    color: white;
    max-width: 800px;
    padding: 0 2rem;
}

.hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 5.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    color: #d4af37;
    letter-spacing: -2px;
}

.hero-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem;
    font-style: italic;
    margin-bottom: 0.5rem;
    opacity: 0.95;
}

.hero-description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
}

.hero-cta {
    background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%);
    color: #2c2c2c;
    padding: 1.2rem 3rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
}

.hero-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
}

/* Common Styles */
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

section {
    padding: 6rem 0;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    color: #2c2c2c;
    font-weight: 500;
    margin-bottom: 1.5rem;
}

.section-title.center {
    text-align: center;
}

.section-divider {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, #d4af37, #f4e4bc, #d4af37);
    margin-bottom: 2rem;
}

.section-divider.center {
    margin: 0 auto 2rem;
}

/* Philosophy */
.philosophy {
    background: white;
}

.philosophy-content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 5rem;
    align-items: center;
}

.philosophy-lead {
    font-size: 1.4rem;
    color: #d4af37;
    font-weight: 500;
    margin-bottom: 2rem;
}

.philosophy-body p {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    line-height: 1.8;
}

.philosophy-image {
    position: relative;
}

.philosophy-image img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 10px;
}

.image-frame {
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid #d4af37;
    border-radius: 10px;
    z-index: -1;
}

/* Menu */
.menu {
    background: #faf9f7;
}

.menu-intro {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 4rem;
}

.menu-collection {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
}

.menu-card {
    background: white;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    position: relative;
}

.menu-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.menu-card.featured {
    border: 2px solid #d4af37;
    transform: scale(1.02);
}

.featured-badge {
    position: absolute;
    top: -15px;
    right: 30px;
    background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%);
    color: #2c2c2c;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
}

.menu-header h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: #2c2c2c;
    margin-bottom: 0.5rem;
}

.menu-subtitle {
    color: #d4af37;
    font-size: 1rem;
    margin-bottom: 1.5rem;
}

.menu-price {
    font-size: 2.2rem;
    font-weight: 700;
    color: #d4af37;
    text-align: center;
    margin-bottom: 1.5rem;
}

.menu-description {
    margin-bottom: 2rem;
    color: #666;
    line-height: 1.7;
}

.menu-items {
    list-style: none;
}

.menu-items li {
    padding: 0.8rem 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding-left: 1.5rem;
    font-size: 0.95rem;
}

.menu-items li::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: #d4af37;
    font-size: 0.8rem;
}

.menu-items li:last-child {
    border-bottom: none;
}

/* Wine */
.wine {
    background: white;
}

.wine-content {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 5rem;
    align-items: start;
}

.wine-lead {
    font-size: 1.4rem;
    color: #d4af37;
    font-weight: 500;
    margin-bottom: 2rem;
}

.wine-description p {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    line-height: 1.8;
}

.wine-categories {
    display: grid;
    gap: 2rem;
    margin-top: 3rem;
}

.wine-category {
    background: #faf9f7;
    padding: 2rem;
    border-radius: 10px;
    border-left: 4px solid #d4af37;
}

.wine-category h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: #2c2c2c;
    margin-bottom: 0.5rem;
}

.wine-category p {
    color: #666;
    font-size: 0.95rem;
}

.wine-cellar {
    position: relative;
}

.wine-cellar img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
}

.wine-stats {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #d4af37;
}

.stat-label {
    display: block;
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.3rem;
}

/* Chef */
.chef {
    background: #faf9f7;
}

.chef-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 5rem;
    align-items: start;
}

.chef-image-container {
    position: relative;
}

.chef-image-container img {
    width: 100%;
    height: 700px;
    object-fit: cover;
    border-radius: 10px;
}

.chef-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 3rem 2rem 2rem;
    border-radius: 0 0 10px 10px;
    color: white;
}

.chef-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-style: italic;
    text-align: center;
}

.chef-name {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #d4af37;
    margin-bottom: 0.5rem;
}

.chef-title {
    color: #8b7355;
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
}

.chef-bio p {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    line-height: 1.8;
}

.chef-achievements {
    background: white;
    padding: 2.5rem;
    border-radius: 10px;
    border-left: 4px solid #d4af37;
    margin-top: 3rem;
}

.chef-achievements h4 {
    font-size: 1.3rem;
    color: #2c2c2c;
    margin-bottom: 1.5rem;
}

.chef-achievements ul {
    list-style: none;
}

.chef-achievements li {
    padding: 0.7rem 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding-left: 2rem;
}

.chef-achievements li::before {
    content: '🌟';
    position: absolute;
    left: 0;
}

.chef-achievements li:last-child {
    border-bottom: none;
}

/* Salon */
.salon {
    background: white;
}

.salon-intro {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 4rem;
}

.salon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 3rem;
}

.salon-item {
    background: #faf9f7;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
}

.salon-item:hover {
    transform: translateY(-5px);
}

.salon-image {
    height: 300px;
    overflow: hidden;
}

.salon-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.salon-item:hover .salon-image img {
    transform: scale(1.05);
}

.salon-info {
    padding: 2.5rem;
}

.salon-info h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: #2c2c2c;
    margin-bottom: 0.5rem;
}

.salon-capacity {
    color: #d4af37;
    font-weight: 600;
    margin-bottom: 1rem;
    background: rgba(212, 175, 55, 0.1);
    padding: 0.3rem 1rem;
    border-radius: 15px;
    display: inline-block;
}

.salon-info p {
    margin-bottom: 1.5rem;
    color: #666;
    line-height: 1.7;
}

.salon-features span {
    color: #2c2c2c;
    font-weight: 600;
}

/* Contact */
.contact {
    background: #faf9f7;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
}

.info-block {
    margin-bottom: 3rem;
}

.info-block h3 {
    font-size: 1.4rem;
    color: #d4af37;
    margin-bottom: 1rem;
}

.hours-info p {
    margin-bottom: 1rem;
    line-height: 1.6;
}

.hours-info strong {
    color: #2c2c2c;
}

.address-info p {
    margin-bottom: 0.8rem;
    line-height: 1.6;
}

.contact-visual {
    position: relative;
}

.restaurant-image {
    position: relative;
}

.restaurant-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
}

.location-badge {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 1.5rem;
    border-radius: 10px;
    border-left: 4px solid #d4af37;
}

.badge-text {
    display: block;
    font-weight: 600;
    color: #2c2c2c;
}

.badge-subtitle {
    display: block;
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.2rem;
}

/* Reservation */
.reservation {
    background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
    color: white;
}

.reservation .section-title {
    color: white;
}

.reservation .section-divider {
    background: linear-gradient(90deg, #d4af37, #f4e4bc, #d4af37);
}

.reservation-intro {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 3rem;
    opacity: 0.9;
}

.reservation-options {
    display: flex;
    gap: 3rem;
    justify-content: center;
    margin-bottom: 4rem;
}

.reservation-btn {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem 3rem;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #d4af37;
    border-radius: 15px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.reservation-btn:hover {
    background: rgba(212, 175, 55, 0.2);
    transform: translateY(-5px);
}

.btn-icon {
    font-size: 2rem;
}

.btn-label {
    display: block;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
}

.btn-number,
.btn-subtitle {
    display: block;
    font-size: 1.3rem;
    color: #d4af37;
    font-weight: 600;
}

.reservation-notes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 800px;
    margin: 0 auto;
}

.note-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 10px;
    border-left: 3px solid #d4af37;
}

.note-item h4 {
    color: #d4af37;
    margin-bottom: 1rem;
}

.note-item ul {
    list-style: none;
}

.note-item li {
    padding: 0.3rem 0;
    position: relative;
    padding-left: 1.5rem;
}

.note-item li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #d4af37;
}

/* Footer */
.footer {
    background: #1a1a1a;
    color: #ccc;
    padding: 4rem 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-brand h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: #d4af37;
    margin-bottom: 0.5rem;
}

.footer-brand > p:first-of-type {
    font-style: italic;
    color: #d4af37;
    margin-bottom: 1.5rem;
}

.footer-brand p,
.footer-hours p,
.footer-contact p {
    margin-bottom: 0.3rem;
    font-size: 0.95rem;
}

.footer-hours h4,
.footer-contact h4 {
    color: #d4af37;
    margin-bottom: 1rem;
}

.footer-bottom {
    border-top: 1px solid #333;
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
        font-size: 3.5rem;
    }
    
    .philosophy-content,
    .wine-content,
    .chef-content,
    .contact-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .menu-collection {
        grid-template-columns: 1fr;
    }
    
    .salon-grid {
        grid-template-columns: 1fr;
    }
    
    .reservation-options {
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .reservation-notes {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
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

// ヒーローボタン
document.querySelector('.hero-cta').addEventListener('click', function() {
    const menuSection = document.querySelector('#menu');
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = menuSection.offsetTop - headerHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

// オンライン予約ボタン
document.querySelector('.reservation-btn.online').addEventListener('click', function() {
    alert('オンライン予約システムへ移動します（実装予定）');
});

// ヘッダー背景の変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.borderBottom = '1px solid rgba(212, 175, 55, 0.3)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.borderBottom = '1px solid rgba(212, 175, 55, 0.2)';
    }
});

// パララックス効果
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = \`translateY(\${scrolled * speed}px)\`;
    });
});

// メニューカードのアニメーション
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
document.querySelectorAll('.menu-card, .salon-item, .wine-category').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'all 0.8s ease';
    observer.observe(item);
});

// メニューカードのホバー効果強化
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 25px 80px rgba(212, 175, 55, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
    });
});

// サロンアイテムの詳細表示
document.querySelectorAll('.salon-item').forEach(item => {
    item.addEventListener('click', function() {
        const salonName = this.querySelector('h3').textContent;
        alert(\`\${salonName}の詳細情報とご予約については、お電話でお問い合わせください。\`);
    });
});

// ワインカテゴリーのインタラクション
document.querySelectorAll('.wine-category').forEach(category => {
    category.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.borderLeftWidth = '6px';
        this.style.transition = 'all 0.3s ease';
    });
    
    category.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.borderLeftWidth = '4px';
    });
});`
  }
}