import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const retailJewelryTemplate: WebTemplate = {
  id: 'retail-jewelry',
  title: '小売店 - ジュエリーショップ',
  category: TEMPLATE_CATEGORIES.RETAIL,
  description: 'ラグジュアリーで上品なジュエリーショップ向けWebサイトテンプレート',
  thumbnail: '/template-images/retail-jewelry.jpg',
  features: [
    'カスタムオーダー',
    'ダイヤモンド鑑定',
    'アクセサリーコレクション',
    'メンテナンスサービス'
  ],
  tags: ['ジュエリー', 'ラグジュアリー', '宝石', 'エレガント'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BRILLIANCE JEWELRY - 永遠の輝きをあなたに</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1 class="logo">BRILLIANCE</h1>
                <nav class="nav">
                    <ul>
                        <li><a href="#collections">コレクション</a></li>
                        <li><a href="#diamonds">ダイヤモンド</a></li>
                        <li><a href="#custom">オーダーメイド</a></li>
                        <li><a href="#services">サービス</a></li>
                        <li><a href="#atelier">アトリエ</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <button class="wishlist-btn">♡ <span class="wishlist-count">0</span></button>
                    <button class="appointment-btn">来店予約</button>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h2>永遠の輝きを<br>あなたに</h2>
                <p>熟練の職人が手がける唯一無二のジュエリー</p>
                <a href="#collections" class="btn-luxury">コレクションを見る</a>
            </div>
        </div>
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=800&fit=crop&q=80" alt="ダイヤモンドリング">
        </div>
    </section>

    <section class="luxury-promise">
        <div class="container">
            <div class="promise-grid">
                <div class="promise-item">
                    <div class="promise-icon">💎</div>
                    <h3>最高品質の宝石</h3>
                    <p>世界各地から厳選した最高級の宝石のみを使用</p>
                </div>
                <div class="promise-item">
                    <div class="promise-icon">👑</div>
                    <h3>熟練の職人技</h3>
                    <p>100年以上の伝統を受け継ぐ職人による手作り</p>
                </div>
                <div class="promise-item">
                    <div class="promise-icon">🛡️</div>
                    <h3>永久保証</h3>
                    <p>生涯にわたるメンテナンスとアフターサービス</p>
                </div>
                <div class="promise-item">
                    <div class="promise-icon">✨</div>
                    <h3>オリジナルデザイン</h3>
                    <p>お客様だけの特別なジュエリーをお作りします</p>
                </div>
            </div>
        </div>
    </section>

    <section id="collections" class="collections">
        <div class="container">
            <h2 class="section-title">コレクション</h2>
            <div class="collection-tabs">
                <button class="tab-btn active" data-collection="all">すべて</button>
                <button class="tab-btn" data-collection="rings">リング</button>
                <button class="tab-btn" data-collection="necklaces">ネックレス</button>
                <button class="tab-btn" data-collection="earrings">イヤリング</button>
                <button class="tab-btn" data-collection="bracelets">ブレスレット</button>
            </div>
            <div class="jewelry-grid">
                <div class="jewelry-item" data-collection="rings">
                    <div class="jewelry-image">
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&q=80" alt="ダイヤモンドエンゲージリング">
                        <div class="jewelry-overlay">
                            <button class="quick-view">詳細を見る</button>
                            <button class="add-wishlist" data-item="engagement-ring">♡</button>
                        </div>
                    </div>
                    <div class="jewelry-info">
                        <h3>エタニティエンゲージリング</h3>
                        <p class="jewelry-type">婚約指輪</p>
                        <div class="specifications">
                            <span>プラチナ950</span>
                            <span>0.5ct ダイヤモンド</span>
                            <span>VS1 / F</span>
                        </div>
                        <p class="price">¥580,000</p>
                    </div>
                </div>
                <div class="jewelry-item" data-collection="necklaces">
                    <div class="jewelry-image">
                        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&q=80" alt="パールネックレス">
                        <div class="jewelry-overlay">
                            <button class="quick-view">詳細を見る</button>
                            <button class="add-wishlist" data-item="pearl-necklace">♡</button>
                        </div>
                    </div>
                    <div class="jewelry-info">
                        <h3>南洋パールネックレス</h3>
                        <p class="jewelry-type">ネックレス</p>
                        <div class="specifications">
                            <span>K18イエローゴールド</span>
                            <span>南洋パール 8-10mm</span>
                            <span>45cm</span>
                        </div>
                        <p class="price">¥320,000</p>
                    </div>
                </div>
                <div class="jewelry-item" data-collection="earrings">
                    <div class="jewelry-image">
                        <img src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=400&fit=crop&q=80" alt="ダイヤモンドイヤリング">
                        <div class="jewelry-overlay">
                            <button class="quick-view">詳細を見る</button>
                            <button class="add-wishlist" data-item="diamond-earrings">♡</button>
                        </div>
                    </div>
                    <div class="jewelry-info">
                        <h3>ダイヤモンドスタッドピアス</h3>
                        <p class="jewelry-type">ピアス</p>
                        <div class="specifications">
                            <span>プラチナ950</span>
                            <span>0.3ct×2 ダイヤモンド</span>
                            <span>VVS2 / E</span>
                        </div>
                        <p class="price">¥180,000</p>
                    </div>
                </div>
                <div class="jewelry-item" data-collection="bracelets">
                    <div class="jewelry-image">
                        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&q=80" alt="テニスブレスレット">
                        <div class="jewelry-overlay">
                            <button class="quick-view">詳細を見る</button>
                            <button class="add-wishlist" data-item="tennis-bracelet">♡</button>
                        </div>
                    </div>
                    <div class="jewelry-info">
                        <h3>ダイヤモンドテニスブレスレット</h3>
                        <p class="jewelry-type">ブレスレット</p>
                        <div class="specifications">
                            <span>プラチナ950</span>
                            <span>2.0ct ダイヤモンド</span>
                            <span>17cm</span>
                        </div>
                        <p class="price">¥850,000</p>
                    </div>
                </div>
                <div class="jewelry-item" data-collection="rings">
                    <div class="jewelry-image">
                        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&q=80" alt="マリッジリング">
                        <div class="jewelry-overlay">
                            <button class="quick-view">詳細を見る</button>
                            <button class="add-wishlist" data-item="wedding-rings">♡</button>
                        </div>
                    </div>
                    <div class="jewelry-info">
                        <h3>クラシックマリッジリング</h3>
                        <p class="jewelry-type">結婚指輪（ペア）</p>
                        <div class="specifications">
                            <span>プラチナ950</span>
                            <span>0.1ct ダイヤモンド</span>
                            <span>幅3.0mm</span>
                        </div>
                        <p class="price">¥240,000</p>
                    </div>
                </div>
                <div class="jewelry-item" data-collection="necklaces">
                    <div class="jewelry-image">
                        <img src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=400&h=400&fit=crop&q=80" alt="エメラルドネックレス">
                        <div class="jewelry-overlay">
                            <button class="quick-view">詳細を見る</button>
                            <button class="add-wishlist" data-item="emerald-necklace">♡</button>
                        </div>
                    </div>
                    <div class="jewelry-info">
                        <h3>コロンビア産エメラルドペンダント</h3>
                        <p class="jewelry-type">ペンダント</p>
                        <div class="specifications">
                            <span>プラチナ950</span>
                            <span>2.5ct エメラルド</span>
                            <span>0.2ct ダイヤモンド</span>
                        </div>
                        <p class="price">¥1,200,000</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="diamonds" class="diamonds">
        <div class="container">
            <div class="diamonds-content">
                <div class="diamonds-text">
                    <h2>ダイヤモンドへのこだわり</h2>
                    <p>BRILLIANCEでは、4Cの基準を満たした最高品質のダイヤモンドのみを厳選しています。</p>
                    <div class="four-c">
                        <div class="c-item">
                            <h3>Carat（カラット）</h3>
                            <p>ダイヤモンドの重量を表す単位</p>
                        </div>
                        <div class="c-item">
                            <h3>Color（カラー）</h3>
                            <p>無色透明に近いほど価値が高い</p>
                        </div>
                        <div class="c-item">
                            <h3>Clarity（クラリティ）</h3>
                            <p>内包物の少なさを表す品質</p>
                        </div>
                        <div class="c-item">
                            <h3>Cut（カット）</h3>
                            <p>輝きを最大限に引き出すカット技術</p>
                        </div>
                    </div>
                    <a href="#" class="btn-luxury">ダイヤモンドを選ぶ</a>
                </div>
                <div class="diamonds-visual">
                    <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=400&fit=crop&q=80" alt="ダイヤモンド鑑定">
                </div>
            </div>
        </div>
    </section>

    <section id="custom" class="custom-order">
        <div class="container">
            <h2 class="section-title">オーダーメイドジュエリー</h2>
            <p class="section-subtitle">あなただけの特別なジュエリーをお作りします</p>
            <div class="custom-process">
                <div class="process-step">
                    <div class="step-number">1</div>
                    <h3>コンサルテーション</h3>
                    <p>ご希望やご予算をお聞かせください</p>
                </div>
                <div class="process-step">
                    <div class="step-number">2</div>
                    <h3>デザイン提案</h3>
                    <p>専門デザイナーがご提案いたします</p>
                </div>
                <div class="process-step">
                    <div class="step-number">3</div>
                    <h3>制作</h3>
                    <p>熟練職人が丁寧にお作りいたします</p>
                </div>
                <div class="process-step">
                    <div class="step-number">4</div>
                    <h3>完成・お渡し</h3>
                    <p>世界に一つだけのジュエリーが完成</p>
                </div>
            </div>
            <div class="custom-examples">
                <h3>オーダーメイド作品例</h3>
                <div class="examples-grid">
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop&q=80" alt="カスタムリング1">
                        <h4>婚約指輪</h4>
                        <p>お客様のご希望に合わせたオリジナルデザイン</p>
                    </div>
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=300&fit=crop&q=80" alt="カスタムネックレス">
                        <h4>記念日ネックレス</h4>
                        <p>特別な日を記念したペンダント</p>
                    </div>
                    <div class="example-item">
                        <img src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=300&h=300&fit=crop&q=80" alt="カスタムピアス">
                        <h4>バースストーンピアス</h4>
                        <p>誕生石を使用したオリジナルピアス</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">充実のサービス</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🔧</div>
                    <h3>メンテナンス・修理</h3>
                    <p>ジュエリーの輝きを保つための定期メンテナンスや修理を承ります。</p>
                    <ul>
                        <li>・クリーニングサービス</li>
                        <li>・サイズ直し</li>
                        <li>・石留め直し</li>
                        <li>・新品仕上げ</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">📜</div>
                    <h3>鑑定・査定</h3>
                    <p>専門の鑑定士による正確な鑑定と査定を行います。</p>
                    <ul>
                        <li>・ダイヤモンド鑑定</li>
                        <li>・カラーストーン鑑別</li>
                        <li>・真珠鑑別</li>
                        <li>・価値査定</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎁</div>
                    <h3>ギフトサービス</h3>
                    <p>大切な方への贈り物を美しく演出いたします。</p>
                    <ul>
                        <li>・高級ギフトボックス</li>
                        <li>・刻印サービス</li>
                        <li>・メッセージカード</li>
                        <li>・配送サービス</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials">
        <div class="container">
            <h2 class="section-title">お客様の声</h2>
            <div class="testimonial-slider">
                <div class="testimonial-item active">
                    <p>"婚約指輪をオーダーメイドでお願いしました。細かな要望まで聞いていただき、想像以上に美しい指輪が完成しました。一生の宝物です。"</p>
                    <div class="customer-info">
                        <span class="customer-name">M様</span>
                        <span class="customer-age">（20代女性）</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="atelier" class="atelier">
        <div class="container">
            <div class="atelier-content">
                <div class="atelier-text">
                    <h2>アトリエのご案内</h2>
                    <p>落ち着いた空間で、ゆっくりとジュエリーをご覧いただけます。</p>
                    <p>経験豊富なジュエリーコンサルタントが、お客様のご要望に合わせて最適なジュエリーをご提案いたします。</p>
                    <div class="atelier-info">
                        <h3>アトリエ情報</h3>
                        <p>📍 〒104-0061 東京都中央区銀座4-5-11</p>
                        <p>📞 TEL: 03-3456-7890</p>
                        <p>🕐 営業時間: 11:00-19:00（水曜定休）</p>
                        <p>🅿️ お車でお越しの方は提携パーキングをご利用ください</p>
                    </div>
                    <a href="#" class="btn-luxury appointment-trigger">来店予約をする</a>
                </div>
                <div class="atelier-gallery">
                    <div class="gallery-main">
                        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80" alt="アトリエ内観">
                    </div>
                    <div class="gallery-thumbs">
                        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=150&fit=crop&q=80" alt="アトリエ内観2">
                        <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=200&h=150&fit=crop&q=80" alt="アトリエ内観3">
                        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&h=150&fit=crop&q=80" alt="アトリエ内観4">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="appointment-form">
        <div class="container">
            <h2 class="section-title">来店予約</h2>
            <form class="reservation-form">
                <div class="form-row">
                    <div class="form-group">
                        <label>お名前</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label>お電話番号</label>
                        <input type="tel" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>メールアドレス</label>
                        <input type="email" required>
                    </div>
                    <div class="form-group">
                        <label>ご希望カテゴリー</label>
                        <select required>
                            <option value="">選択してください</option>
                            <option value="engagement">婚約指輪</option>
                            <option value="wedding">結婚指輪</option>
                            <option value="necklace">ネックレス</option>
                            <option value="custom">オーダーメイド</option>
                            <option value="other">その他</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>ご希望日時（第一希望）</label>
                        <input type="datetime-local" required>
                    </div>
                    <div class="form-group">
                        <label>ご希望日時（第二希望）</label>
                        <input type="datetime-local">
                    </div>
                </div>
                <div class="form-group">
                    <label>ご要望・ご質問</label>
                    <textarea rows="4" placeholder="ご予算、デザインのご希望、その他ご質問がございましたらお聞かせください"></textarea>
                </div>
                <button type="submit" class="btn-luxury">予約を申し込む</button>
            </form>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>BRILLIANCE JEWELRY</h3>
                    <p>永遠の輝きをあなたに</p>
                    <div class="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Pinterest</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>ジュエリー</h3>
                    <ul>
                        <li><a href="#">婚約指輪</a></li>
                        <li><a href="#">結婚指輪</a></li>
                        <li><a href="#">ネックレス</a></li>
                        <li><a href="#">ピアス・イヤリング</a></li>
                        <li><a href="#">ブレスレット</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>サービス</h3>
                    <ul>
                        <li><a href="#">オーダーメイド</a></li>
                        <li><a href="#">メンテナンス</a></li>
                        <li><a href="#">鑑定・査定</a></li>
                        <li><a href="#">ギフトサービス</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>お問い合わせ</h3>
                    <p>📞 03-3456-7890</p>
                    <p>✉️ info@brilliance-jewelry.com</p>
                    <p>営業時間: 11:00-19:00（水曜定休）</p>
                </div>
            </div>
            <p class="copyright">&copy; 2025 BRILLIANCE JEWELRY. All rights reserved.</p>
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
    font-family: 'Times New Roman', 'Yu Mincho', serif;
    color: #2c2c2c;
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
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0,0,0,0.05);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 32px;
    font-weight: 300;
    letter-spacing: 3px;
    color: #8b4513;
    text-shadow: 0 1px 3px rgba(139, 69, 19, 0.3);
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav a {
    text-decoration: none;
    color: #2c2c2c;
    font-size: 15px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s;
    position: relative;
}

.nav a:hover {
    color: #8b4513;
}

.nav a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background: #8b4513;
    transition: width 0.3s;
}

.nav a:hover::after {
    width: 100%;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 20px;
}

.wishlist-btn {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #2c2c2c;
    transition: color 0.3s;
    position: relative;
}

.wishlist-btn:hover {
    color: #8b4513;
}

.wishlist-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #8b4513;
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 12px;
    display: none;
    align-items: center;
    justify-content: center;
}

.appointment-btn {
    background: linear-gradient(45deg, #8b4513, #a0522d);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 3px 10px rgba(139, 69, 19, 0.3);
}

.appointment-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(139, 69, 19, 0.4);
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
    filter: brightness(0.6);
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
}

.hero-text h2 {
    font-size: 64px;
    font-weight: 300;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    line-height: 1.2;
}

.hero-text p {
    font-size: 22px;
    margin-bottom: 40px;
    font-weight: 300;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.btn-luxury {
    display: inline-block;
    padding: 18px 40px;
    background: linear-gradient(45deg, #8b4513, #a0522d);
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 0.3s;
    box-shadow: 0 5px 20px rgba(139, 69, 19, 0.4);
    cursor: pointer;
}

.btn-luxury:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(139, 69, 19, 0.5);
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
    color: #2c2c2c;
    letter-spacing: 2px;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 2px;
    background: linear-gradient(45deg, #8b4513, #a0522d);
    margin: 20px auto;
}

.section-subtitle {
    text-align: center;
    font-size: 18px;
    color: #666;
    margin-bottom: 60px;
    font-weight: 300;
}

/* Luxury Promise */
.luxury-promise {
    background: linear-gradient(135deg, #f8f5f0 0%, #f5f0e8 100%);
}

.promise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.promise-item {
    text-align: center;
    padding: 40px 30px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(139, 69, 19, 0.1);
    transition: transform 0.3s;
}

.promise-item:hover {
    transform: translateY(-10px);
}

.promise-icon {
    font-size: 48px;
    margin-bottom: 25px;
    display: block;
}

.promise-item h3 {
    font-size: 22px;
    margin-bottom: 15px;
    color: #8b4513;
    font-weight: 400;
}

.promise-item p {
    color: #666;
    line-height: 1.7;
}

/* Collections */
.collections {
    background: white;
}

.collection-tabs {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 60px;
    flex-wrap: wrap;
}

.tab-btn {
    background: none;
    border: 2px solid #e0e0e0;
    padding: 12px 25px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    color: #666;
    border-radius: 25px;
    transition: all 0.3s;
}

.tab-btn.active,
.tab-btn:hover {
    border-color: #8b4513;
    color: #8b4513;
    background: rgba(139, 69, 19, 0.05);
}

.jewelry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.jewelry-item {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.jewelry-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

.jewelry-image {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.jewelry-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.jewelry-item:hover .jewelry-image img {
    transform: scale(1.1);
}

.jewelry-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    opacity: 0;
    transition: opacity 0.3s;
}

.jewelry-item:hover .jewelry-overlay {
    opacity: 1;
}

.quick-view {
    background: white;
    color: #2c2c2c;
    border: none;
    padding: 12px 25px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.add-wishlist {
    background: transparent;
    color: white;
    border: 2px solid white;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s;
}

.add-wishlist.active {
    background: white;
    color: #ff4757;
}

.jewelry-info {
    padding: 30px;
}

.jewelry-info h3 {
    font-size: 20px;
    margin-bottom: 8px;
    color: #2c2c2c;
    font-weight: 400;
}

.jewelry-type {
    color: #8b4513;
    font-size: 14px;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.specifications {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.specifications span {
    background: #f8f5f0;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 12px;
    color: #8b4513;
}

.price {
    font-size: 24px;
    color: #8b4513;
    font-weight: 400;
}

/* Diamonds */
.diamonds {
    background: linear-gradient(135deg, #f8f5f0 0%, #f5f0e8 100%);
}

.diamonds-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.diamonds-text h2 {
    font-size: 36px;
    margin-bottom: 25px;
    color: #2c2c2c;
    font-weight: 300;
}

.diamonds-text > p {
    font-size: 18px;
    margin-bottom: 40px;
    color: #666;
    line-height: 1.8;
}

.four-c {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin-bottom: 40px;
}

.c-item h3 {
    font-size: 18px;
    margin-bottom: 8px;
    color: #8b4513;
}

.c-item p {
    font-size: 14px;
    color: #666;
}

.diamonds-visual img {
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

/* Custom Order */
.custom-order {
    background: white;
}

.custom-process {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 80px;
}

.process-step {
    text-align: center;
    position: relative;
}

.step-number {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, #8b4513, #a0522d);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    margin: 0 auto 20px;
}

.process-step h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #2c2c2c;
}

.process-step p {
    color: #666;
    line-height: 1.7;
}

.custom-examples h3 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 40px;
    color: #8b4513;
}

.examples-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.example-item {
    text-align: center;
    background: #f8f5f0;
    padding: 30px;
    border-radius: 15px;
}

.example-item img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
    border-radius: 10px;
}

.example-item h4 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #8b4513;
}

.example-item p {
    color: #666;
    font-size: 14px;
}

/* Services */
.services {
    background: linear-gradient(135deg, #f8f5f0 0%, #f5f0e8 100%);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
    color: #8b4513;
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
    padding-left: 10px;
}

/* Testimonials */
.testimonials {
    background: white;
    text-align: center;
}

.testimonial-item {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
}

.testimonial-item p {
    font-size: 20px;
    font-style: italic;
    color: #2c2c2c;
    line-height: 1.8;
    margin-bottom: 30px;
}

.customer-info {
    color: #8b4513;
    font-size: 16px;
}

.customer-name {
    font-weight: bold;
    margin-right: 10px;
}

/* Atelier */
.atelier {
    background: linear-gradient(135deg, #f8f5f0 0%, #f5f0e8 100%);
}

.atelier-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.atelier-text h2 {
    font-size: 36px;
    margin-bottom: 25px;
    color: #2c2c2c;
    font-weight: 300;
}

.atelier-text p {
    margin-bottom: 20px;
    color: #666;
    line-height: 1.8;
}

.atelier-info {
    background: white;
    padding: 30px;
    border-radius: 15px;
    margin: 30px 0;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.atelier-info h3 {
    font-size: 20px;
    margin-bottom: 20px;
    color: #8b4513;
}

.atelier-info p {
    margin-bottom: 10px;
}

.gallery-main img {
    border-radius: 15px;
    margin-bottom: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.gallery-thumbs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.gallery-thumbs img {
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s;
}

.gallery-thumbs img:hover {
    transform: scale(1.05);
}

/* Appointment Form */
.appointment-form {
    background: white;
}

.reservation-form {
    max-width: 800px;
    margin: 0 auto;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 25px;
}

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    color: #2c2c2c;
    font-weight: 300;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 15px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #8b4513;
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
    color: #8b4513;
    font-size: 18px;
    font-weight: 400;
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
    color: #8b4513;
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

/* Responsive */
@media (max-width: 768px) {
    .hero-text h2 {
        font-size: 40px;
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
    
    .diamonds-content,
    .atelier-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .collection-tabs {
        justify-content: center;
        gap: 15px;
    }
    
    .tab-btn {
        padding: 8px 15px;
        font-size: 12px;
    }
}`,
    js: `// Collection filter functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        const collection = this.dataset.collection;
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter jewelry items
        document.querySelectorAll('.jewelry-item').forEach(item => {
            if (collection === 'all' || item.dataset.collection === collection) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Wishlist functionality
let wishlistItems = [];

document.querySelectorAll('.add-wishlist').forEach(button => {
    button.addEventListener('click', function() {
        const itemId = this.dataset.item;
        
        if (wishlistItems.includes(itemId)) {
            // Remove from wishlist
            wishlistItems = wishlistItems.filter(id => id !== itemId);
            this.classList.remove('active');
            this.textContent = '♡';
        } else {
            // Add to wishlist
            wishlistItems.push(itemId);
            this.classList.add('active');
            this.textContent = '♥';
        }
        
        updateWishlistCount();
    });
});

function updateWishlistCount() {
    const countElement = document.querySelector('.wishlist-count');
    countElement.textContent = wishlistItems.length;
    
    if (wishlistItems.length > 0) {
        countElement.style.display = 'inline-flex';
    } else {
        countElement.style.display = 'none';
    }
}

// Wishlist button click
document.querySelector('.wishlist-btn').addEventListener('click', function() {
    if (wishlistItems.length > 0) {
        alert(\`お気に入りリスト（\${wishlistItems.length}点）\\n\\n\${wishlistItems.join('\\n')}\`);
    } else {
        alert('お気に入りリストは空です');
    }
});

// Quick view functionality
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.closest('.jewelry-item');
        const title = item.querySelector('h3').textContent;
        const type = item.querySelector('.jewelry-type').textContent;
        const price = item.querySelector('.price').textContent;
        
        alert(\`\${title}\\n\${type}\\n\${price}\\n\\n詳細ページに移動します\`);
    });
});

// Appointment booking
document.querySelectorAll('.appointment-btn, .appointment-trigger').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.appointment-form').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reservation form submission
document.querySelector('.reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const category = this.querySelector('select').value;
    const datetime1 = this.querySelector('input[type="datetime-local"]').value;
    
    if (name && phone && email && category && datetime1) {
        alert(\`\${name}様\\n\\nご予約を承りました。\\n\\nカテゴリー: \${category}\\n希望日時: \${datetime1}\\n\\n確認のお電話をいたします。\`);
        this.reset();
    }
});

// Gallery thumbnail click
document.querySelectorAll('.gallery-thumbs img').forEach((thumb, index) => {
    thumb.addEventListener('click', function() {
        const mainImage = document.querySelector('.gallery-main img');
        const tempSrc = mainImage.src;
        mainImage.src = this.src;
        this.src = tempSrc;
    });
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

// Header scroll effect
let lastScrollY = window.scrollY;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    }
    lastScrollY = window.scrollY;
});

// Initialize
updateWishlistCount();`
  }
}