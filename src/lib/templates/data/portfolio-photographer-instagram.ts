import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioPhotographerInstagramTemplate: WebTemplate = {
  id: 'portfolio-photographer-instagram',
  title: 'ポートフォリオ - インスタグラムカメラマン',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: 'インスタグラムと連携したカメラマンの営業用ポートフォリオサイト',
  thumbnail: '/template-images/portfolio-photographer-instagram.jpg',
  features: [
    'インスタグラム連携デザイン',
    'フォトギャラリー',
    '料金プラン表示',
    'お問い合わせフォーム'
  ],
  tags: ['ポートフォリオ', 'カメラマン', 'インスタグラム', '営業'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tomoya Photography - プロフェッショナル撮影サービス</title>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav-container">
            <div class="logo">
                <h1>Tomoya Photography</h1>
                <span class="tagline">あなたの特別な瞬間を永遠に</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home">ホーム</a></li>
                <li><a href="#gallery">ギャラリー</a></li>
                <li><a href="#services">サービス</a></li>
                <li><a href="#pricing">料金</a></li>
                <li><a href="#about">プロフィール</a></li>
                <li><a href="#contact">お問い合わせ</a></li>
            </ul>
            <div class="social-links">
                <a href="https://www.instagram.com/m_tomoya831?igsh=dzFpb2JnNGUwNjFm&utm_source=qr" target="_blank" class="instagram-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                </a>
            </div>
            <button class="mobile-menu-toggle">☰</button>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h2 class="hero-title">プロフェッショナル撮影サービス</h2>
            <p class="hero-subtitle">ポートレート、ウェディング、イベント撮影まで<br>あなたの大切な瞬間を美しく切り取ります</p>
            <div class="hero-buttons">
                <a href="#gallery" class="btn btn-primary">作品を見る</a>
                <a href="#contact" class="btn btn-secondary">お問い合わせ</a>
            </div>
            <div class="instagram-embed">
                <a href="https://www.instagram.com/m_tomoya831" target="_blank" class="instagram-follow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                    @m_tomoya831をフォロー
                </a>
            </div>
        </div>
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop" alt="カメラマン">
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery">
        <div class="container">
            <h2 class="section-title">フォトギャラリー</h2>
            <p class="section-subtitle">最新の作品をご覧ください</p>
            <div class="filter-buttons">
                <button class="filter-btn active" data-filter="all">すべて</button>
                <button class="filter-btn" data-filter="portrait">ポートレート</button>
                <button class="filter-btn" data-filter="wedding">ウェディング</button>
                <button class="filter-btn" data-filter="event">イベント</button>
                <button class="filter-btn" data-filter="landscape">風景</button>
            </div>
            <div class="gallery-grid">
                <div class="gallery-item" data-category="portrait">
                    <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop" alt="ポートレート作品1">
                    <div class="gallery-overlay">
                        <h3>ポートレート撮影</h3>
                        <p>自然光での撮影</p>
                    </div>
                </div>
                <div class="gallery-item" data-category="wedding">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop" alt="ウェディング作品1">
                    <div class="gallery-overlay">
                        <h3>ウェディング撮影</h3>
                        <p>特別な一日を記録</p>
                    </div>
                </div>
                <div class="gallery-item" data-category="event">
                    <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop" alt="イベント作品1">
                    <div class="gallery-overlay">
                        <h3>イベント撮影</h3>
                        <p>企業イベント</p>
                    </div>
                </div>
                <div class="gallery-item" data-category="landscape">
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop" alt="風景作品1">
                    <div class="gallery-overlay">
                        <h3>風景撮影</h3>
                        <p>日本の美しい風景</p>
                    </div>
                </div>
                <div class="gallery-item" data-category="portrait">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" alt="ポートレート作品2">
                    <div class="gallery-overlay">
                        <h3>ポートレート撮影</h3>
                        <p>スタジオ撮影</p>
                    </div>
                </div>
                <div class="gallery-item" data-category="wedding">
                    <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=400&fit=crop" alt="ウェディング作品2">
                    <div class="gallery-overlay">
                        <h3>ウェディング撮影</h3>
                        <p>前撮り撮影</p>
                    </div>
                </div>
            </div>
            <div class="gallery-cta">
                <p>もっと多くの作品はInstagramでご覧いただけます</p>
                <a href="https://www.instagram.com/m_tomoya831" target="_blank" class="btn btn-instagram">
                    Instagramで見る
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">サービス内容</h2>
            <p class="section-subtitle">お客様のニーズに合わせた撮影プランをご用意</p>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">📸</div>
                    <h3>ポートレート撮影</h3>
                    <p>プロフィール写真、宣材写真、記念写真など、あなたの魅力を最大限に引き出します。</p>
                    <ul>
                        <li>スタジオ撮影</li>
                        <li>ロケーション撮影</li>
                        <li>ヘアメイク手配可能</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">💒</div>
                    <h3>ウェディング撮影</h3>
                    <p>人生で最も特別な日を、美しく感動的に記録します。</p>
                    <ul>
                        <li>挙式・披露宴撮影</li>
                        <li>前撮り・後撮り</li>
                        <li>フォトアルバム制作</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎉</div>
                    <h3>イベント撮影</h3>
                    <p>企業イベント、パーティー、セミナーなど、大切なイベントを記録します。</p>
                    <ul>
                        <li>企業イベント</li>
                        <li>セミナー・講演会</li>
                        <li>パーティー撮影</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏢</div>
                    <h3>商業撮影</h3>
                    <p>商品撮影、店舗撮影、料理撮影など、ビジネス用途の撮影に対応。</p>
                    <ul>
                        <li>商品撮影</li>
                        <li>店舗・施設撮影</li>
                        <li>料理・メニュー撮影</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
        <div class="container">
            <h2 class="section-title">料金プラン</h2>
            <p class="section-subtitle">明確でわかりやすい料金体系</p>
            <div class="pricing-grid">
                <div class="pricing-card">
                    <h3 class="pricing-title">ベーシック</h3>
                    <div class="pricing-price">
                        <span class="currency">¥</span>
                        <span class="amount">30,000</span>
                        <span class="period">〜</span>
                    </div>
                    <ul class="pricing-features">
                        <li>撮影時間：1時間</li>
                        <li>納品枚数：20枚</li>
                        <li>基本レタッチ込み</li>
                        <li>データ納品</li>
                        <li>1ロケーション</li>
                    </ul>
                    <button class="btn btn-outline">お問い合わせ</button>
                </div>
                <div class="pricing-card featured">
                    <div class="pricing-badge">おすすめ</div>
                    <h3 class="pricing-title">スタンダード</h3>
                    <div class="pricing-price">
                        <span class="currency">¥</span>
                        <span class="amount">50,000</span>
                        <span class="period">〜</span>
                    </div>
                    <ul class="pricing-features">
                        <li>撮影時間：2時間</li>
                        <li>納品枚数：50枚</li>
                        <li>詳細レタッチ込み</li>
                        <li>データ納品</li>
                        <li>2ロケーション対応</li>
                        <li>衣装チェンジ可能</li>
                    </ul>
                    <button class="btn btn-primary">お問い合わせ</button>
                </div>
                <div class="pricing-card">
                    <h3 class="pricing-title">プレミアム</h3>
                    <div class="pricing-price">
                        <span class="currency">¥</span>
                        <span class="amount">80,000</span>
                        <span class="period">〜</span>
                    </div>
                    <ul class="pricing-features">
                        <li>撮影時間：4時間</li>
                        <li>納品枚数：100枚</li>
                        <li>詳細レタッチ込み</li>
                        <li>データ納品＋プリント</li>
                        <li>複数ロケーション</li>
                        <li>ヘアメイク込み</li>
                        <li>アルバム制作</li>
                    </ul>
                    <button class="btn btn-outline">お問い合わせ</button>
                </div>
            </div>
            <p class="pricing-note">※料金は撮影内容により変動する場合があります。詳細はお問い合わせください。</p>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">プロフィール</h2>
            <div class="about-content">
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="カメラマン Tomoya">
                </div>
                <div class="about-text">
                    <h3>Tomoya</h3>
                    <p class="about-role">フリーランスフォトグラファー</p>
                    <p class="about-description">
                        写真を通じて、人々の大切な瞬間や感情を永遠に残すことを使命としています。
                        10年以上の撮影経験を活かし、お客様一人ひとりのストーリーを大切にした撮影を心がけています。
                    </p>
                    <div class="about-stats">
                        <div class="stat">
                            <span class="stat-number">10+</span>
                            <span class="stat-label">年の経験</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">500+</span>
                            <span class="stat-label">撮影実績</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">100%</span>
                            <span class="stat-label">満足度</span>
                        </div>
                    </div>
                    <div class="about-skills">
                        <h4>得意分野</h4>
                        <div class="skill-tags">
                            <span class="skill-tag">ポートレート</span>
                            <span class="skill-tag">ウェディング</span>
                            <span class="skill-tag">イベント</span>
                            <span class="skill-tag">商品撮影</span>
                            <span class="skill-tag">風景写真</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Instagram Feed Section -->
    <section class="instagram-feed">
        <div class="container">
            <h2 class="section-title">Instagram</h2>
            <p class="section-subtitle">最新の作品をチェック</p>
            <div class="instagram-grid">
                <div class="instagram-post">
                    <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop" alt="Instagram post 1">
                    <div class="instagram-overlay">
                        <span>❤️ 234</span>
                        <span>💬 12</span>
                    </div>
                </div>
                <div class="instagram-post">
                    <img src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=300&h=300&fit=crop" alt="Instagram post 2">
                    <div class="instagram-overlay">
                        <span>❤️ 189</span>
                        <span>💬 8</span>
                    </div>
                </div>
                <div class="instagram-post">
                    <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop" alt="Instagram post 3">
                    <div class="instagram-overlay">
                        <span>❤️ 456</span>
                        <span>💬 23</span>
                    </div>
                </div>
                <div class="instagram-post">
                    <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop" alt="Instagram post 4">
                    <div class="instagram-overlay">
                        <span>❤️ 321</span>
                        <span>💬 15</span>
                    </div>
                </div>
                <div class="instagram-post">
                    <img src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=300&h=300&fit=crop" alt="Instagram post 5">
                    <div class="instagram-overlay">
                        <span>❤️ 567</span>
                        <span>💬 34</span>
                    </div>
                </div>
                <div class="instagram-post">
                    <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=300&h=300&fit=crop" alt="Instagram post 6">
                    <div class="instagram-overlay">
                        <span>❤️ 412</span>
                        <span>💬 19</span>
                    </div>
                </div>
            </div>
            <div class="instagram-cta">
                <a href="https://www.instagram.com/m_tomoya831" target="_blank" class="btn btn-instagram-large">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                    Instagramをフォロー
                </a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">お問い合わせ</h2>
            <p class="section-subtitle">撮影のご依頼・ご相談はお気軽にどうぞ</p>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>連絡先情報</h3>
                    <div class="contact-item">
                        <span class="contact-icon">📧</span>
                        <div>
                            <h4>メール</h4>
                            <p>info@tomoya-photography.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📱</span>
                        <div>
                            <h4>電話</h4>
                            <p>090-1234-5678</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📍</span>
                        <div>
                            <h4>拠点</h4>
                            <p>東京都内（全国出張可能）</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">⏰</span>
                        <div>
                            <h4>営業時間</h4>
                            <p>10:00 - 19:00（不定休）</p>
                        </div>
                    </div>
                </div>
                <form class="contact-form">
                    <div class="form-group">
                        <input type="text" placeholder="お名前 *" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="メールアドレス *" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" placeholder="電話番号">
                    </div>
                    <div class="form-group">
                        <select>
                            <option value="">撮影の種類を選択</option>
                            <option value="portrait">ポートレート撮影</option>
                            <option value="wedding">ウェディング撮影</option>
                            <option value="event">イベント撮影</option>
                            <option value="commercial">商業撮影</option>
                            <option value="other">その他</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="メッセージ *" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">送信する</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>Tomoya Photography</h3>
                    <p>あなたの特別な瞬間を永遠に</p>
                </div>
                <div class="footer-links">
                    <h4>リンク</h4>
                    <ul>
                        <li><a href="#gallery">ギャラリー</a></li>
                        <li><a href="#services">サービス</a></li>
                        <li><a href="#pricing">料金</a></li>
                        <li><a href="#contact">お問い合わせ</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h4>フォローする</h4>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/m_tomoya831" target="_blank">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Tomoya Photography. All rights reserved.</p>
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

body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

.logo h1 {
    font-size: 1.5rem;
    color: #333;
}

.tagline {
    font-size: 0.8rem;
    color: #666;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #e1306c;
}

.social-links a {
    color: #333;
    transition: color 0.3s;
}

.social-links a:hover {
    color: #e1306c;
}

.mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    display: flex;
    align-items: center;
    min-height: 80vh;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-content {
    flex: 1;
    color: white;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: transform 0.3s, box-shadow 0.3s;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary {
    background: #e1306c;
    color: white;
}

.btn-secondary {
    background: white;
    color: #764ba2;
}

.btn-outline {
    background: transparent;
    color: #333;
    border: 2px solid #333;
}

.btn-instagram {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    color: white;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.btn-instagram-large {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    color: white;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.instagram-follow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background 0.3s;
}

.instagram-follow:hover {
    background: rgba(255, 255, 255, 0.3);
}

.hero-image {
    flex: 1;
    text-align: center;
}

.hero-image img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Section Styles */
.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
}

.section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
}

/* Gallery */
.gallery {
    padding: 4rem 0;
    background: #f8f9fa;
}

.filter-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.filter-btn {
    padding: 0.5rem 1rem;
    border: 2px solid #e1306c;
    background: white;
    color: #e1306c;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
}

.filter-btn:hover,
.filter-btn.active {
    background: #e1306c;
    color: white;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.3s;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-cta {
    text-align: center;
    margin-top: 2rem;
}

/* Services */
.services {
    padding: 4rem 0;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s;
}

.service-card:hover {
    transform: translateY(-5px);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.service-card h3 {
    margin-bottom: 1rem;
    color: #333;
}

.service-card ul {
    list-style: none;
    margin-top: 1rem;
}

.service-card li {
    padding: 0.5rem 0;
    color: #666;
}

/* Pricing */
.pricing {
    padding: 4rem 0;
    background: #f8f9fa;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.pricing-card {
    background: white;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.pricing-card.featured {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.pricing-badge {
    position: absolute;
    top: -10px;
    right: 20px;
    background: #e1306c;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
}

.pricing-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.pricing-price {
    margin: 1rem 0;
}

.currency {
    font-size: 1.5rem;
}

.amount {
    font-size: 3rem;
    font-weight: bold;
    color: #e1306c;
}

.period {
    color: #666;
}

.pricing-features {
    list-style: none;
    margin: 2rem 0;
}

.pricing-features li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
}

.pricing-note {
    text-align: center;
    margin-top: 2rem;
    color: #666;
    font-size: 0.9rem;
}

/* About */
.about {
    padding: 4rem 0;
}

.about-content {
    display: flex;
    gap: 3rem;
    align-items: center;
}

.about-image img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}

.about-text {
    flex: 1;
}

.about-text h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.about-role {
    color: #e1306c;
    margin-bottom: 1rem;
}

.about-description {
    color: #666;
    margin-bottom: 2rem;
}

.about-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: #e1306c;
}

.stat-label {
    color: #666;
    font-size: 0.9rem;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.skill-tag {
    background: #f0f0f0;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
}

/* Instagram Feed */
.instagram-feed {
    padding: 4rem 0;
    background: #f8f9fa;
}

.instagram-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
}

.instagram-post {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
}

.instagram-post img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.instagram-post:hover img {
    transform: scale(1.1);
}

.instagram-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
}

.instagram-post:hover .instagram-overlay {
    opacity: 1;
}

.instagram-cta {
    text-align: center;
}

/* Contact */
.contact {
    padding: 4rem 0;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-info h3 {
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.contact-icon {
    font-size: 2rem;
}

.contact-item h4 {
    margin-bottom: 0.3rem;
}

.contact-item p {
    color: #666;
}

.contact-form {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #e1306c;
}

.btn-block {
    width: 100%;
}

/* Footer */
.footer {
    background: #333;
    color: white;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer h3,
.footer h4 {
    margin-bottom: 1rem;
}

.footer-links ul {
    list-style: none;
}

.footer-links a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: #e1306c;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-icons a {
    color: #ccc;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: #e1306c;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #555;
    color: #999;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
    
    .mobile-menu-toggle {
        display: block;
    }
    
    .hero {
        flex-direction: column;
        text-align: center;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .about-content {
        flex-direction: column;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .pricing-card.featured {
        transform: scale(1);
    }
}`,
    js: `// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// モバイルメニュー
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '60px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'white';
        navMenu.style.padding = '1rem';
        navMenu.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    });
}

// ギャラリーフィルター
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // アクティブクラスの切り替え
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// フォーム送信
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('お問い合わせありがとうございます。後日ご連絡させていただきます。');
        contactForm.reset();
    });
}

// Instagram投稿のクリックイベント
document.querySelectorAll('.instagram-post').forEach(post => {
    post.addEventListener('click', () => {
        window.open('https://www.instagram.com/m_tomoya831', '_blank');
    });
});

// 料金カードのアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.pricing-card, .service-card, .gallery-item').forEach(el => {
    observer.observe(el);
});

// アニメーションの定義
const style = document.createElement('style');
style.textContent = \`
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
\`;
document.head.appendChild(style);

// ヘッダーのスクロールエフェクト
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});`
  }
}