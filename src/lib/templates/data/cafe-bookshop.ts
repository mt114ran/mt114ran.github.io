import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const cafeBookshopTemplate: WebTemplate = {
  id: 'cafe-bookshop',
  title: 'カフェ - ブックカフェ',
  category: TEMPLATE_CATEGORIES.CAFE,
  description: '本と珈琲の香りに包まれるブックカフェのテンプレート',
  thumbnail: '/template-images/cafe-bookshop.jpg',
  features: [
    '本棚と読書エリアの表現',
    '書籍カテゴリー表示',
    '読書会イベント対応',
    '知的な雰囲気のデザイン'
  ],
  tags: ['カフェ', 'ブックカフェ', '本', '読書'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Café Literati - 本と珈琲の香る空間</title>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <span class="logo-icon">📚</span>
                    <span class="logo-text">Book Café Literati</span>
                </div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#books">Books</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop" alt="ブックカフェの店内">
        </div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 class="hero-title">Book Café Literati</h1>
            <p class="hero-subtitle">本と珈琲の香る空間</p>
            <p class="hero-description">静寂に包まれた読書の時間を、香り高いコーヒーとともに</p>
            <div class="hero-quote">
                <blockquote>"A room without books is like a body without a soul."</blockquote>
                <cite>- Cicero</cite>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Literati</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>本との出会い、人との出会い</h3>
                    <p>Book Café Literatiは、本を愛するすべての人のための特別な空間です。厳選された書籍に囲まれながら、上質なコーヒーをお楽しみいただけます。静かな読書の時間から、本について語り合う活発な議論まで、様々な「読書体験」をご提供します。</p>
                    <p>蔵書数は常時2,000冊以上。文学、哲学、アート、ビジネス書まで幅広いジャンルを取り揃え、新しい本との出会いをお待ちしています。</p>
                </div>
                <div class="about-stats">
                    <div class="stat-item">
                        <div class="stat-number">2,000+</div>
                        <div class="stat-label">蔵書数</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">読書イベント/年</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">5</div>
                        <div class="stat-label">読書エリア</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="books" class="books">
        <div class="container">
            <h2 class="section-title">Book Collection</h2>
            <div class="book-categories">
                <div class="category-nav">
                    <button class="category-btn active" onclick="showCategory('all')">すべて</button>
                    <button class="category-btn" onclick="showCategory('literature')">文学</button>
                    <button class="category-btn" onclick="showCategory('philosophy')">哲学・思想</button>
                    <button class="category-btn" onclick="showCategory('art')">アート・デザイン</button>
                    <button class="category-btn" onclick="showCategory('business')">ビジネス</button>
                    <button class="category-btn" onclick="showCategory('lifestyle')">ライフスタイル</button>
                </div>
                
                <div class="books-grid" id="booksGrid">
                    <div class="book-section" data-category="literature">
                        <h3>📖 文学</h3>
                        <div class="book-list">
                            <div class="book-item">
                                <div class="book-cover">
                                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop" alt="文学書">
                                </div>
                                <div class="book-info">
                                    <h4>現代文学セレクション</h4>
                                    <p>国内外の現代文学作品を中心に、話題の新作から隠れた名作まで幅広く取り揃えています。</p>
                                    <span class="book-count">約400冊</span>
                                </div>
                            </div>
                            <div class="book-item">
                                <div class="book-cover">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop" alt="古典文学">
                                </div>
                                <div class="book-info">
                                    <h4>古典文学コレクション</h4>
                                    <p>時代を超えて愛され続ける古典文学作品。美しい装丁の特別版も多数ご用意。</p>
                                    <span class="book-count">約200冊</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="book-section" data-category="philosophy">
                        <h3>🤔 哲学・思想</h3>
                        <div class="book-list">
                            <div class="book-item">
                                <div class="book-cover">
                                    <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop" alt="哲学書">
                                </div>
                                <div class="book-info">
                                    <h4>西洋哲学</h4>
                                    <p>古代ギリシャから現代まで、西洋哲学の系譜をたどる貴重なコレクション。</p>
                                    <span class="book-count">約300冊</span>
                                </div>
                            </div>
                            <div class="book-item">
                                <div class="book-cover">
                                    <img src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=200&h=300&fit=crop" alt="東洋思想">
                                </div>
                                <div class="book-info">
                                    <h4>東洋思想</h4>
                                    <p>仏教、道教、儒教など、東洋の深い思想を学べる専門書を集めました。</p>
                                    <span class="book-count">約150冊</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="book-section" data-category="art">
                        <h3>🎨 アート・デザイン</h3>
                        <div class="book-list">
                            <div class="book-item">
                                <div class="book-cover">
                                    <img src="https://images.unsplash.com/photo-1541963463532-d68292c34d19?w=200&h=300&fit=crop" alt="アート書">
                                </div>
                                <div class="book-info">
                                    <h4>美術・アート</h4>
                                    <p>絵画、彫刻、現代アートまで、視覚的に美しい大型本を中心としたコレクション。</p>
                                    <span class="book-count">約250冊</span>
                                </div>
                            </div>
                            <div class="book-item">
                                <div class="book-cover">
                                    <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=300&fit=crop" alt="デザイン書">
                                </div>
                                <div class="book-info">
                                    <h4>デザイン・建築</h4>
                                    <p>グラフィックデザインから建築まで、創造性を刺激するデザイン関連書籍。</p>
                                    <span class="book-count">約200冊</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="book-section" data-category="business">
                        <h3>💼 ビジネス</h3>
                        <div class="book-list">
                            <div class="book-item">
                                <div class="book-cover">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop" alt="ビジネス書">
                                </div>
                                <div class="book-info">
                                    <h4>経営・マネジメント</h4>
                                    <p>経営戦略、リーダーシップ、組織運営に関する実践的なビジネス書。</p>
                                    <span class="book-count">約300冊</span>
                                </div>
                            </div>
                            <div class="book-item">
                                <div class="book-cover">
                                    <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=300&fit=crop" alt="自己啓発書">
                                </div>
                                <div class="book-info">
                                    <h4>自己啓発・スキルアップ</h4>
                                    <p>個人の成長とスキル向上を支援する、実用的な自己啓発書。</p>
                                    <span class="book-count">約200冊</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="book-section" data-category="lifestyle">
                        <h3>🌿 ライフスタイル</h3>
                        <div class="book-list">
                            <div class="book-item">
                                <div class="book-cover">
                                    <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=300&fit=crop" alt="料理本">
                                </div>
                                <div class="book-info">
                                    <h4>料理・グルメ</h4>
                                    <p>世界各国の料理レシピから、食文化に関する読み物まで幅広くカバー。</p>
                                    <span class="book-count">約150冊</span>
                                </div>
                            </div>
                            <div class="book-item">
                                <div class="book-cover">
                                    <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop" alt="旅行本">
                                </div>
                                <div class="book-info">
                                    <h4>旅行・紀行</h4>
                                    <p>世界各地の旅行ガイドから、作家による紀行文まで旅心を刺激する本。</p>
                                    <span class="book-count">約200冊</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="menu" class="menu">
        <div class="container">
            <h2 class="section-title">Menu</h2>
            <div class="menu-grid">
                <div class="menu-category">
                    <h3>☕ Coffee & Tea</h3>
                    <div class="menu-items">
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">ドリップコーヒー</span>
                                <span class="item-description">厳選豆の深い味わい</span>
                            </div>
                            <span class="item-price">¥480</span>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">カフェラテ</span>
                                <span class="item-description">ミルクアートでお楽しみください</span>
                            </div>
                            <span class="item-price">¥530</span>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">読書ブレンド</span>
                                <span class="item-description">読書にぴったりの優しい味</span>
                            </div>
                            <span class="item-price">¥550</span>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">紅茶各種</span>
                                <span class="item-description">ダージリン、アールグレイ等</span>
                            </div>
                            <span class="item-price">¥450</span>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">ハーブティー</span>
                                <span class="item-description">季節のブレンド</span>
                            </div>
                            <span class="item-price">¥500</span>
                        </div>
                    </div>
                </div>
                
                <div class="menu-category">
                    <h3>🥪 Light Meals</h3>
                    <div class="menu-items">
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">クロックムッシュ</span>
                                <span class="item-description">チーズとハムの定番サンド</span>
                            </div>
                            <span class="item-price">¥680</span>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">アボカドトースト</span>
                                <span class="item-description">栄養満点のヘルシーメニュー</span>
                            </div>
                            <span class="item-price">¥750</span>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">キッシュプレート</span>
                                <span class="item-description">季節野菜のキッシュ</span>
                            </div>
                            <span class="item-price">¥890</span>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">スープセット</span>
                                <span class="item-description">日替わりスープ＋パン</span>
                            </div>
                            <span class="item-price">¥720</span>
                        </div>
                    </div>
                </div>
                
                <div class="menu-category">
                    <h3>🍰 Sweets</h3>
                    <div class="menu-items">
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">チーズケーキ</span>
                                <span class="item-description">濃厚なニューヨークスタイル</span>
                            </div>
                            <span class="item-price">¥520</span>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">ブラウニー</span>
                                <span class="item-description">ダークチョコレートの深い味</span>
                            </div>
                            <span class="item-price">¥480</span>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">季節のタルト</span>
                                <span class="item-description">旬のフルーツを使用</span>
                            </div>
                            <span class="item-price">¥580</span>
                        </div>
                        <div class="menu-item">
                            <div class="item-info">
                                <span class="item-name">スコーン</span>
                                <span class="item-description">ジャム＆クリーム付き</span>
                            </div>
                            <span class="item-price">¥450</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="events" class="events">
        <div class="container">
            <h2 class="section-title">Events & Activities</h2>
            <div class="events-grid">
                <div class="event-card">
                    <div class="event-image">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop" alt="読書会">
                    </div>
                    <div class="event-content">
                        <div class="event-date">毎月第2土曜日</div>
                        <h3>月例読書会</h3>
                        <p>毎月テーマを決めて、参加者同士で本について語り合います。新しい本との出会いや、異なる視点での読書体験をお楽しみください。</p>
                        <div class="event-details">
                            <span>参加費: ¥500（ドリンク付き）</span>
                            <span>定員: 15名</span>
                        </div>
                    </div>
                </div>
                
                <div class="event-card">
                    <div class="event-image">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop" alt="作家トークイベント">
                    </div>
                    <div class="event-content">
                        <div class="event-date">不定期開催</div>
                        <h3>作家トークイベント</h3>
                        <p>著名な作家や専門家をお招きして、作品の背景や創作秘話をお聞きします。質疑応答の時間もあり、直接お話しできます。</p>
                        <div class="event-details">
                            <span>参加費: ¥1,500（ドリンク付き）</span>
                            <span>定員: 40名</span>
                        </div>
                    </div>
                </div>
                
                <div class="event-card">
                    <div class="event-image">
                        <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop" alt="ブックレビューワークショップ">
                    </div>
                    <div class="event-content">
                        <div class="event-date">毎月第4日曜日</div>
                        <h3>ブックレビューワークショップ</h3>
                        <p>読んだ本の感想を文章にまとめる技術を学びます。書評の書き方から、読書ノートの活用法まで幅広くカバーします。</p>
                        <div class="event-details">
                            <span>参加費: ¥800（ドリンク付き）</span>
                            <span>定員: 12名</span>
                        </div>
                    </div>
                </div>
                
                <div class="event-card">
                    <div class="event-image">
                        <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop" alt="詩の朗読会">
                    </div>
                    <div class="event-content">
                        <div class="event-date">隔月第1金曜日</div>
                        <h3>詩の朗読会</h3>
                        <p>詩を声に出して読む喜びを分かち合います。お気に入りの詩を持参して朗読したり、他の方の朗読を聞いたり、詩の世界に浸ります。</p>
                        <div class="event-details">
                            <span>参加費: ¥600（ドリンク付き）</span>
                            <span>定員: 20名</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Visit Us</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Book Café Literati</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-icon">📍</div>
                            <div class="info-details">
                                <strong>住所</strong>
                                <p>〒150-0001 東京都渋谷区神宮前5-46-16<br>イルミナーレ表参道 2F</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-icon">📞</div>
                            <div class="info-details">
                                <strong>電話番号</strong>
                                <p>03-5678-9012</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-icon">🕒</div>
                            <div class="info-details">
                                <strong>営業時間</strong>
                                <p>平日: 10:00 - 22:00<br>土日祝: 9:00 - 23:00</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-icon">🚇</div>
                            <div class="info-details">
                                <strong>アクセス</strong>
                                <p>表参道駅A2出口より徒歩3分<br>明治神宮前駅より徒歩5分</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-icon">📧</div>
                            <div class="info-details">
                                <strong>メール</strong>
                                <p>info@literati-cafe.jp</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="info-icon">📝</div>
                            <div class="info-details">
                                <strong>その他</strong>
                                <p>Wi-Fi完備・電源利用可<br>持ち込み読書歓迎</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="store-image">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop" alt="店内の様子">
                    <div class="store-features">
                        <div class="feature-item">
                            <span class="feature-icon">📶</span>
                            <span>Free Wi-Fi</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">🔌</span>
                            <span>電源利用可</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">🤫</span>
                            <span>静寂エリア</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">💺</span>
                            <span>ソファ席</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>Book Café Literati</h3>
                    <p>本と珈琲の香る空間</p>
                    <div class="footer-quote">
                        <p>"Books are a uniquely portable magic."</p>
                        <cite>- Stephen King</cite>
                    </div>
                </div>
                <div class="footer-links">
                    <div class="link-group">
                        <h4>Menu</h4>
                        <ul>
                            <li><a href="#books">Books</a></li>
                            <li><a href="#menu">Café Menu</a></li>
                            <li><a href="#events">Events</a></li>
                        </ul>
                    </div>
                    <div class="link-group">
                        <h4>Information</h4>
                        <ul>
                            <li><a href="#">利用規約</a></li>
                            <li><a href="#">プライバシーポリシー</a></li>
                            <li><a href="#">お問い合わせ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Book Café Literati. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');

body {
    font-family: 'Lora', 'Times New Roman', serif;
    line-height: 1.7;
    color: #3a3a3a;
    background-color: #faf8f4;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: rgba(250, 248, 244, 0.95);
    backdrop-filter: blur(15px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}

.navbar {
    padding: 1.2rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.logo-icon {
    font-size: 2rem;
}

.logo-text {
    font-family: 'Crimson Text', serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: #8b4513;
    letter-spacing: 1px;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.menu-toggle span {
    width: 25px;
    height: 2px;
    background-color: #8b4513;
    margin: 3px 0;
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.nav-menu a {
    color: #5d4e37;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    letter-spacing: 0.5px;
}

.nav-menu a:hover {
    color: #8b4513;
}

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
}

.hero-image img {
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
    background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3));
    z-index: -1;
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 1;
    max-width: 800px;
    padding: 0 20px;
}

.hero-title {
    font-family: 'Crimson Text', serif;
    font-size: 4.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}

.hero-subtitle {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
}

.hero-description {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 3rem;
    opacity: 0.9;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
}

.hero-quote {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    max-width: 600px;
    margin: 0 auto;
}

.hero-quote blockquote {
    font-family: 'Crimson Text', serif;
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 1rem;
    color: #f0f0f0;
}

.hero-quote cite {
    font-size: 1rem;
    opacity: 0.8;
}

/* About Section */
.about {
    padding: 120px 0;
    background: white;
}

.section-title {
    font-family: 'Crimson Text', serif;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    color: #8b4513;
    margin-bottom: 4rem;
    letter-spacing: 2px;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #8b4513, #d2b48c);
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: start;
}

.about-text h3 {
    font-family: 'Crimson Text', serif;
    font-size: 2rem;
    color: #8b4513;
    margin-bottom: 2rem;
    font-weight: 600;
}

.about-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #5d4e37;
}

.about-stats {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.stat-item {
    text-align: center;
    background: linear-gradient(135deg, #f5f3f0, #ede8e0);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
}

.stat-number {
    font-family: 'Crimson Text', serif;
    font-size: 2.5rem;
    font-weight: 600;
    color: #8b4513;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 1rem;
    color: #5d4e37;
    font-weight: 500;
}

/* Books Section */
.books {
    padding: 120px 0;
    background: linear-gradient(135deg, #faf8f4, #f5f3f0);
}

.book-categories {
    margin-top: 4rem;
}

.category-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
    flex-wrap: wrap;
}

.category-btn {
    padding: 0.8rem 1.5rem;
    background: white;
    color: #5d4e37;
    border: 2px solid #d2b48c;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: inherit;
    font-weight: 500;
}

.category-btn.active,
.category-btn:hover {
    background: #8b4513;
    color: white;
    border-color: #8b4513;
    transform: translateY(-2px);
}

.books-grid {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.book-section {
    display: block;
}

.book-section.hidden {
    display: none;
}

.book-section h3 {
    font-family: 'Crimson Text', serif;
    font-size: 2rem;
    color: #8b4513;
    margin-bottom: 2rem;
    font-weight: 600;
}

.book-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.book-item {
    display: flex;
    gap: 1.5rem;
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transition: all 0.3s;
}

.book-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.book-cover {
    flex-shrink: 0;
    width: 80px;
    height: 120px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.book-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.book-info h4 {
    font-family: 'Crimson Text', serif;
    font-size: 1.3rem;
    color: #8b4513;
    margin-bottom: 0.8rem;
    font-weight: 600;
}

.book-info p {
    color: #5d4e37;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.book-count {
    display: inline-block;
    background: #8b4513;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 500;
}

/* Menu Section */
.menu {
    padding: 120px 0;
    background: white;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
}

.menu-category {
    background: linear-gradient(135deg, #faf8f4, #f5f3f0);
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.menu-category h3 {
    font-family: 'Crimson Text', serif;
    font-size: 1.8rem;
    color: #8b4513;
    margin-bottom: 2rem;
    font-weight: 600;
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 2px solid #d2b48c;
}

.menu-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(210, 180, 140, 0.3);
}

.menu-item:last-child {
    border-bottom: none;
}

.item-info {
    flex: 1;
}

.item-name {
    font-weight: 600;
    color: #5d4e37;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 0.3rem;
}

.item-description {
    font-size: 0.9rem;
    color: #8b7355;
    font-style: italic;
}

.item-price {
    font-weight: 600;
    color: #8b4513;
    font-size: 1.1rem;
    margin-left: 1rem;
}

/* Events Section */
.events {
    padding: 120px 0;
    background: linear-gradient(135deg, #faf8f4, #f5f3f0);
}

.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
}

.event-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.event-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 60px rgba(0,0,0,0.15);
}

.event-image {
    height: 200px;
    overflow: hidden;
}

.event-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.event-card:hover .event-image img {
    transform: scale(1.05);
}

.event-content {
    padding: 2rem;
}

.event-date {
    background: #8b4513;
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 500;
    display: inline-block;
    margin-bottom: 1rem;
}

.event-content h3 {
    font-family: 'Crimson Text', serif;
    font-size: 1.5rem;
    color: #8b4513;
    margin-bottom: 1rem;
    font-weight: 600;
}

.event-content p {
    color: #5d4e37;
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.event-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #8b7355;
}

/* Contact Section */
.contact {
    padding: 120px 0;
    background: white;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 4rem;
}

.contact-info h3 {
    font-family: 'Crimson Text', serif;
    font-size: 2rem;
    color: #8b4513;
    margin-bottom: 2rem;
    font-weight: 600;
}

.info-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-item {
    display: flex;
    gap: 1rem;
    align-items: start;
}

.info-icon {
    font-size: 1.5rem;
    margin-top: 0.2rem;
}

.info-details strong {
    color: #8b4513;
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 600;
}

.info-details p {
    color: #5d4e37;
    line-height: 1.6;
}

.store-image {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.store-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.store-features {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.7));
    padding: 2rem 1.5rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
}

.feature-icon {
    font-size: 1.2rem;
}

/* Footer */
.footer {
    background: linear-gradient(135deg, #5d4e37, #4a3c28);
    color: #d2b48c;
    padding: 60px 0 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-brand h3 {
    font-family: 'Crimson Text', serif;
    font-size: 1.8rem;
    color: #d2b48c;
    margin-bottom: 1rem;
    font-weight: 600;
}

.footer-brand p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.footer-quote p {
    font-family: 'Crimson Text', serif;
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.footer-quote cite {
    font-size: 0.9rem;
    opacity: 0.8;
}

.link-group h4 {
    color: #d2b48c;
    margin-bottom: 1rem;
    font-weight: 600;
}

.link-group ul {
    list-style: none;
}

.link-group li {
    margin-bottom: 0.5rem;
}

.link-group a {
    color: #a0956b;
    text-decoration: none;
    transition: color 0.3s;
}

.link-group a:hover {
    color: #d2b48c;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(210, 180, 140, 0.3);
}

.footer-bottom p {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }
    
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(250, 248, 244, 0.98);
        flex-direction: column;
        padding: 2rem 0;
        backdrop-filter: blur(15px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        font-size: 1.4rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .about-stats {
        flex-direction: row;
        justify-content: space-around;
    }
    
    .book-list {
        grid-template-columns: 1fr;
    }
    
    .book-item {
        flex-direction: column;
        text-align: center;
    }
    
    .menu-grid {
        grid-template-columns: 1fr;
    }
    
    .events-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
    }
    
    .section-title {
        font-size: 2.5rem;
    }
    
    .category-nav {
        gap: 0.5rem;
    }
    
    .category-btn {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
    }
}`,
    js: `// モバイルメニューのトグル
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

// スムーススクロール
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
            // モバイルメニューを閉じる
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// 書籍カテゴリー切り替え
function showCategory(category) {
    // すべてのカテゴリーボタンからactiveクラスを削除
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // クリックされたボタンにactiveクラスを追加
    event.target.classList.add('active');
    
    // すべてのセクションを表示/非表示
    const sections = document.querySelectorAll('.book-section');
    sections.forEach(section => {
        if (category === 'all') {
            section.classList.remove('hidden');
        } else {
            if (section.dataset.category === category) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        }
    });
}

// スクロール時のヘッダー効果
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(250, 248, 244, 0.98)';
        header.style.boxShadow = '0 4px 25px rgba(0,0,0,0.12)';
    } else {
        header.style.background = 'rgba(250, 248, 244, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    }
    
    lastScroll = currentScroll;
});

// 書籍アイテムのホバーエフェクト
document.querySelectorAll('.book-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// イベントカードのパララックス効果
window.addEventListener('scroll', () => {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const speed = 0.05 * (index + 1);
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const yPos = -(window.pageYOffset * speed);
            card.style.transform = \`translateY(\${yPos}px)\`;
        }
    });
});

// 読書の名言をランダム表示
const quotes = [
    {
        text: "A room without books is like a body without a soul.",
        author: "Cicero"
    },
    {
        text: "Books are a uniquely portable magic.",
        author: "Stephen King"
    },
    {
        text: "The reading of all good books is like a conversation with the finest minds of past centuries.",
        author: "René Descartes"
    },
    {
        text: "There is no friend as loyal as a book.",
        author: "Ernest Hemingway"
    },
    {
        text: "Books fall open, you fall in.",
        author: "David T.W. McCord"
    }
];

function updateHeroQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const blockquote = document.querySelector('.hero-quote blockquote');
    const cite = document.querySelector('.hero-quote cite');
    
    if (blockquote && cite) {
        blockquote.textContent = randomQuote.text;
        cite.textContent = \`- \${randomQuote.author}\`;
    }
}

// ページ読み込み時に名言を設定
document.addEventListener('DOMContentLoaded', function() {
    updateHeroQuote();
    
    // 書籍統計のカウントアップアニメーション
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent);
                let currentNumber = 0;
                const increment = finalNumber / 50;
                
                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        target.textContent = finalNumber + (target.textContent.includes('+') ? '+' : '');
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(currentNumber) + (target.textContent.includes('+') ? '+' : '');
                    }
                }, 40);
                
                observer.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(num => observer.observe(num));
});

// メニューアイテムのアニメーション
document.querySelectorAll('.menu-item').forEach((item, index) => {
    item.style.animationDelay = \`\${index * 0.1}s\`;
    item.classList.add('animate-in');
});

// CSS keyframes for animation
const style = document.createElement('style');
style.textContent = \`
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
\`;
document.head.appendChild(style);`
  }
}