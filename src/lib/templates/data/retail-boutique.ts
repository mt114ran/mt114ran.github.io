import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const retailBoutiqueTemplate: WebTemplate = {
  id: 'retail-boutique',
  title: '小売店 - ブティック',
  category: TEMPLATE_CATEGORIES.RETAIL,
  description: 'エレガントで洗練されたブティック向けWebサイトテンプレート',
  thumbnail: '/template-images/retail-boutique.jpg',
  features: [
    'ファッションルックブック',
    'スタイリング提案',
    'オンライン予約',
    'コーディネート相談'
  ],
  tags: ['ブティック', 'ファッション', 'エレガント', 'スタイリング'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ELEGANCE BOUTIQUE - あなたの美しさを輝かせる</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1 class="logo">ELEGANCE</h1>
                <nav class="nav">
                    <ul>
                        <li><a href="#collection">コレクション</a></li>
                        <li><a href="#lookbook">ルックブック</a></li>
                        <li><a href="#styling">スタイリング</a></li>
                        <li><a href="#about">アトリエ</a></li>
                        <li><a href="#contact">予約</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <button class="menu-btn">☰</button>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-slider">
            <div class="slide active">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=800&fit=crop" alt="エレガントなドレス">
                <div class="slide-content">
                    <h2>Spring Couture 2025</h2>
                    <p>あなただけの特別な装いを</p>
                    <a href="#collection" class="btn-elegant">コレクションを見る</a>
                </div>
            </div>
        </div>
    </section>

    <section id="collection" class="collection">
        <div class="container">
            <h2 class="section-title">New Collection</h2>
            <div class="collection-tabs">
                <button class="tab-btn active" data-category="all">すべて</button>
                <button class="tab-btn" data-category="dress">ドレス</button>
                <button class="tab-btn" data-category="blouse">ブラウス</button>
                <button class="tab-btn" data-category="skirt">スカート</button>
                <button class="tab-btn" data-category="jacket">ジャケット</button>
            </div>
            <div class="fashion-grid">
                <div class="fashion-item" data-category="dress">
                    <div class="fashion-image">
                        <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop" alt="シルクドレス">
                        <div class="fashion-overlay">
                            <button class="quick-view">詳細を見る</button>
                            <button class="add-wishlist">♡</button>
                        </div>
                    </div>
                    <div class="fashion-info">
                        <h3>シルクフローラルドレス</h3>
                        <p class="designer">デザイナー: 田中美穂</p>
                        <p class="price">¥89,000</p>
                        <div class="colors">
                            <span class="color-dot" style="background: #ff6b9d"></span>
                            <span class="color-dot" style="background: #4ecdc4"></span>
                            <span class="color-dot" style="background: #ffe66d"></span>
                        </div>
                    </div>
                </div>
                <div class="fashion-item" data-category="blouse">
                    <div class="fashion-image">
                        <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop" alt="レースブラウス">
                        <div class="fashion-overlay">
                            <button class="quick-view">詳細を見る</button>
                            <button class="add-wishlist">♡</button>
                        </div>
                    </div>
                    <div class="fashion-info">
                        <h3>フレンチレースブラウス</h3>
                        <p class="designer">デザイナー: 佐藤雅子</p>
                        <p class="price">¥45,000</p>
                        <div class="colors">
                            <span class="color-dot" style="background: #ffffff; border: 1px solid #ddd"></span>
                            <span class="color-dot" style="background: #f8f8f8; border: 1px solid #ddd"></span>
                            <span class="color-dot" style="background: #000000"></span>
                        </div>
                    </div>
                </div>
                <div class="fashion-item" data-category="skirt">
                    <div class="fashion-image">
                        <img src="https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&h=600&fit=crop" alt="プリーツスカート">
                        <div class="fashion-overlay">
                            <button class="quick-view">詳細を見る</button>
                            <button class="add-wishlist">♡</button>
                        </div>
                    </div>
                    <div class="fashion-info">
                        <h3>シフォンプリーツスカート</h3>
                        <p class="designer">デザイナー: 山田花織</p>
                        <p class="price">¥38,000</p>
                        <div class="colors">
                            <span class="color-dot" style="background: #e8b4cb"></span>
                            <span class="color-dot" style="background: #a8e6cf"></span>
                            <span class="color-dot" style="background: #dcedc1"></span>
                        </div>
                    </div>
                </div>
                <div class="fashion-item" data-category="jacket">
                    <div class="fashion-image">
                        <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=600&fit=crop" alt="テーラードジャケット">
                        <div class="fashion-overlay">
                            <button class="quick-view">詳細を見る</button>
                            <button class="add-wishlist">♡</button>
                        </div>
                    </div>
                    <div class="fashion-info">
                        <h3>ウールテーラードジャケット</h3>
                        <p class="designer">デザイナー: 高橋絵里</p>
                        <p class="price">¥78,000</p>
                        <div class="colors">
                            <span class="color-dot" style="background: #8d6e63"></span>
                            <span class="color-dot" style="background: #37474f"></span>
                            <span class="color-dot" style="background: #5d4037"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="lookbook" class="lookbook">
        <div class="container">
            <h2 class="section-title">Look Book</h2>
            <p class="section-subtitle">スタイリストが提案する季節のコーディネート</p>
            <div class="lookbook-grid">
                <div class="look-item">
                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=700&fit=crop" alt="オフィススタイル">
                    <div class="look-info">
                        <h3>エレガントオフィス</h3>
                        <p>洗練された大人の女性のためのビジネススタイル</p>
                        <a href="#" class="look-details">スタイル詳細</a>
                    </div>
                </div>
                <div class="look-item">
                    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=700&fit=crop" alt="カジュアルエレガント">
                    <div class="look-info">
                        <h3>カジュアルエレガント</h3>
                        <p>週末のお出かけにぴったりなリラックススタイル</p>
                        <a href="#" class="look-details">スタイル詳細</a>
                    </div>
                </div>
                <div class="look-item">
                    <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=700&fit=crop" alt="パーティードレス">
                    <div class="look-info">
                        <h3>パーティーエレガンス</h3>
                        <p>特別な夜を彩る華やかなイブニングスタイル</p>
                        <a href="#" class="look-details">スタイル詳細</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="styling" class="styling-service">
        <div class="container">
            <div class="service-content">
                <div class="service-text">
                    <h2>パーソナルスタイリング</h2>
                    <p>あなたの魅力を最大限に引き出すスタイリングサービス</p>
                    <div class="service-features">
                        <div class="service-item">
                            <h3>🎨 カラー診断</h3>
                            <p>あなたに似合う色を見つけて、より美しく輝かせます</p>
                        </div>
                        <div class="service-item">
                            <h3>👗 体型分析</h3>
                            <p>体型の特徴を活かした最適なシルエットをご提案</p>
                        </div>
                        <div class="service-item">
                            <h3>✨ トータルコーディネート</h3>
                            <p>イベントやシーンに合わせた完璧なスタイリング</p>
                        </div>
                    </div>
                    <a href="#contact" class="btn-elegant">相談予約をする</a>
                </div>
                <div class="service-image">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" alt="スタイリングサービス">
                </div>
            </div>
        </div>
    </section>

    <section class="testimonial">
        <div class="container">
            <h2 class="section-title">お客様の声</h2>
            <div class="testimonial-slider">
                <div class="testimonial-item active">
                    <p>"ELEGANCEでドレスを選んでから、自分に自信が持てるようになりました。スタッフの方々の的確なアドバイスに感謝しています。"</p>
                    <div class="customer-info">
                        <span class="customer-name">田中さま（30代）</span>
                        <span class="customer-occasion">結婚式参列</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>私たちについて</h2>
                    <p>ELEGANCEは、女性の美しさと個性を大切にする上質なブティックです。</p>
                    <p>経験豊富なスタイリストが、お一人お一人に寄り添い、その方だけの特別な装いをご提案いたします。</p>
                    <p>厳選された素材と確かな技術で作られた服は、着る人の魅力を最大限に引き出します。</p>
                    <div class="atelier-info">
                        <h3>アトリエ情報</h3>
                        <p>📍 〒107-0062 東京都港区南青山3-15-8</p>
                        <p>📞 TEL: 03-5678-9012</p>
                        <p>🕐 営業時間: 11:00-20:00（火曜定休）</p>
                        <p>👥 完全予約制（お一人様60分）</p>
                    </div>
                </div>
                <div class="about-gallery">
                    <div class="gallery-grid">
                        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&h=200&fit=crop" alt="アトリエ内観1">
                        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop" alt="アトリエ内観2">
                        <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&h=200&fit=crop" alt="アトリエ内観3">
                        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=200&fit=crop" alt="アトリエ内観4">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">ご予約・お問い合わせ</h2>
            <div class="contact-content">
                <div class="contact-form">
                    <form>
                        <div class="form-group">
                            <label>お名前</label>
                            <input type="text" required>
                        </div>
                        <div class="form-group">
                            <label>お電話番号</label>
                            <input type="tel" required>
                        </div>
                        <div class="form-group">
                            <label>メールアドレス</label>
                            <input type="email" required>
                        </div>
                        <div class="form-group">
                            <label>ご希望サービス</label>
                            <select required>
                                <option value="">選択してください</option>
                                <option value="styling">パーソナルスタイリング</option>
                                <option value="shopping">お買い物同行</option>
                                <option value="color">カラー診断</option>
                                <option value="other">その他</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>ご希望日時</label>
                            <input type="datetime-local" required>
                        </div>
                        <div class="form-group">
                            <label>ご要望・ご質問</label>
                            <textarea rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn-elegant">予約を申し込む</button>
                    </form>
                </div>
                <div class="contact-info">
                    <div class="contact-item">
                        <h3>📞 お電話でのご予約</h3>
                        <p>03-5678-9012</p>
                        <p>営業時間: 11:00-20:00（火曜定休）</p>
                    </div>
                    <div class="contact-item">
                        <h3>📍 アクセス</h3>
                        <p>東京メトロ表参道駅 A4出口徒歩5分</p>
                        <p>東京都港区南青山3-15-8</p>
                    </div>
                    <div class="contact-item">
                        <h3>💎 特別サービス</h3>
                        <p>初回カウンセリング無料</p>
                        <p>VIP会員制度あり</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>ELEGANCE BOUTIQUE</h3>
                    <p>あなたの美しさを輝かせる</p>
                    <div class="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Pinterest</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>サービス</h3>
                    <ul>
                        <li><a href="#">パーソナルスタイリング</a></li>
                        <li><a href="#">カラー診断</a></li>
                        <li><a href="#">お買い物同行</a></li>
                        <li><a href="#">ワードローブ診断</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>ブランド</h3>
                    <ul>
                        <li><a href="#">オリジナルライン</a></li>
                        <li><a href="#">セレクトブランド</a></li>
                        <li><a href="#">オーダーメイド</a></li>
                        <li><a href="#">アクセサリー</a></li>
                    </ul>
                </div>
            </div>
            <p class="copyright">&copy; 2025 ELEGANCE BOUTIQUE. All rights reserved.</p>
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
    font-family: 'Helvetica Neue', 'Hiragino Sans', sans-serif;
    color: #333;
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
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 32px;
    font-weight: 300;
    letter-spacing: 5px;
    color: #d63384;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s;
}

.nav a:hover {
    color: #d63384;
}

.menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

/* Hero */
.hero {
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-slider {
    width: 100%;
    height: 100%;
}

.slide {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 2;
}

.slide-content h2 {
    font-size: 56px;
    font-weight: 300;
    margin-bottom: 20px;
    letter-spacing: 3px;
}

.slide-content p {
    font-size: 20px;
    margin-bottom: 40px;
    font-weight: 300;
}

.btn-elegant {
    display: inline-block;
    padding: 15px 40px;
    background: transparent;
    color: white;
    text-decoration: none;
    border: 2px solid white;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 0.3s;
}

.btn-elegant:hover {
    background: white;
    color: #333;
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
    letter-spacing: 2px;
    color: #333;
}

.section-subtitle {
    text-align: center;
    font-size: 16px;
    color: #666;
    margin-bottom: 60px;
    font-weight: 300;
}

/* Collection */
.collection-tabs {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 60px;
}

.tab-btn {
    background: none;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    color: #999;
    transition: all 0.3s;
    border-bottom: 2px solid transparent;
}

.tab-btn.active,
.tab-btn:hover {
    color: #d63384;
    border-bottom-color: #d63384;
}

.fashion-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 40px;
}

.fashion-item {
    position: relative;
    transition: transform 0.3s;
}

.fashion-item:hover {
    transform: translateY(-10px);
}

.fashion-image {
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
}

.fashion-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s;
}

.fashion-item:hover .fashion-image img {
    transform: scale(1.05);
}

.fashion-overlay {
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

.fashion-item:hover .fashion-overlay {
    opacity: 1;
}

.quick-view,
.add-wishlist {
    padding: 10px 20px;
    background: white;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s;
}

.add-wishlist {
    background: transparent;
    color: white;
    border: 1px solid white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.fashion-info h3 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 8px;
}

.designer {
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.price {
    font-size: 20px;
    color: #d63384;
    font-weight: 300;
    margin-bottom: 15px;
}

.colors {
    display: flex;
    gap: 8px;
}

.color-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s;
}

.color-dot:hover {
    transform: scale(1.2);
}

/* Lookbook */
.lookbook {
    background: #f8f8f8;
}

.lookbook-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 40px;
}

.look-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.look-item:hover {
    transform: translateY(-5px);
}

.look-item img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.look-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 40px 30px 30px;
}

.look-info h3 {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 10px;
}

.look-info p {
    font-size: 14px;
    margin-bottom: 20px;
    opacity: 0.9;
}

.look-details {
    color: #d63384;
    text-decoration: none;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #d63384;
    padding-bottom: 2px;
}

/* Styling Service */
.styling-service {
    background: white;
}

.service-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.service-text h2 {
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #d63384;
}

.service-text > p {
    font-size: 18px;
    margin-bottom: 40px;
    color: #666;
}

.service-features {
    margin-bottom: 40px;
}

.service-item {
    margin-bottom: 30px;
}

.service-item h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
}

.service-item p {
    color: #666;
    line-height: 1.7;
}

.service-image img {
    border-radius: 10px;
}

/* Testimonial */
.testimonial {
    background: #d63384;
    color: white;
    text-align: center;
}

.testimonial .section-title {
    color: white;
}

.testimonial-item {
    max-width: 800px;
    margin: 0 auto;
}

.testimonial-item p {
    font-size: 20px;
    font-style: italic;
    margin-bottom: 30px;
    line-height: 1.8;
}

.customer-info {
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 14px;
    opacity: 0.9;
}

/* About */
.about {
    background: #f8f8f8;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.about-text h2 {
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 30px;
    color: #333;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.8;
    color: #666;
}

.atelier-info {
    background: white;
    padding: 30px;
    border-radius: 10px;
    margin-top: 40px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.atelier-info h3 {
    font-size: 20px;
    margin-bottom: 20px;
    color: #d63384;
}

.atelier-info p {
    margin-bottom: 10px;
}

.gallery-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.gallery-grid img {
    border-radius: 10px;
    width: 100%;
    height: 150px;
    object-fit: cover;
}

/* Contact */
.contact {
    background: white;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
}

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #d63384;
}

.contact-info {
    padding-left: 40px;
}

.contact-item {
    margin-bottom: 40px;
}

.contact-item h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #d63384;
}

.contact-item p {
    color: #666;
    margin-bottom: 8px;
}

/* Footer */
.footer {
    background: #1a1a1a;
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
    color: #d63384;
    font-size: 18px;
    font-weight: 300;
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
    color: #d63384;
}

.social-links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #333;
    color: #999;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Responsive */
@media (max-width: 768px) {
    .nav ul {
        display: none;
    }
    
    .menu-btn {
        display: block;
    }
    
    .slide-content h2 {
        font-size: 36px;
    }
    
    .service-content,
    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .lookbook-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-info {
        padding-left: 0;
    }
}`,
    js: `// Collection filter functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter items
        document.querySelectorAll('.fashion-item').forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Quick view functionality
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.closest('.fashion-item');
        const title = item.querySelector('h3').textContent;
        const price = item.querySelector('.price').textContent;
        alert(\`\${title}\\n\${price}\\n\\n詳細ページに移動します\`);
    });
});

// Wishlist functionality
document.querySelectorAll('.add-wishlist').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === '♡') {
            this.textContent = '♥';
            this.style.color = '#d63384';
            this.style.backgroundColor = 'white';
        } else {
            this.textContent = '♡';
            this.style.color = 'white';
            this.style.backgroundColor = 'transparent';
        }
    });
});

// Color selection
document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', function() {
        const colorGroup = this.parentElement;
        colorGroup.querySelectorAll('.color-dot').forEach(d => d.style.outline = 'none');
        this.style.outline = '2px solid #d63384';
        this.style.outlineOffset = '2px';
    });
});

// Look book details
document.querySelectorAll('.look-details').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const lookTitle = this.closest('.look-item').querySelector('h3').textContent;
        alert(\`\${lookTitle} の詳細を表示します\\n\\n・使用アイテム一覧\\n・スタイリングのポイント\\n・類似コーディネート\`);
    });
});

// Contact form submission
document.querySelector('.contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const service = this.querySelector('select').value;
    const datetime = this.querySelector('input[type="datetime-local"]').value;
    
    if (name && service && datetime) {
        alert(\`\${name}様\\n\\nご予約を承りました。\\nサービス: \${service}\\n日時: \${datetime}\\n\\n確認のご連絡をいたします。\`);
        this.reset();
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

// Mobile menu toggle
document.querySelector('.menu-btn').addEventListener('click', function() {
    const nav = document.querySelector('.nav ul');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'white';
        nav.style.padding = '20px';
        nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    }
});

// Header scroll effect
let lastScrollY = window.scrollY;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > lastScrollY) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});`
  }
}