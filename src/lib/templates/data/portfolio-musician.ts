import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const portfolioMusicianTemplate: WebTemplate = {
  id: 'portfolio-musician',
  title: 'ポートフォリオ - ミュージシャン',
  category: TEMPLATE_CATEGORIES.PORTFOLIO,
  description: 'ミュージシャン・バンド・音楽アーティスト向けポートフォリオサイト',
  thumbnail: '/template-images/portfolio-musician.jpg',
  features: [
    '楽曲試聴機能',
    'ライブスケジュール',
    'ディスコグラフィー',
    'ファンクラブ'
  ],
  tags: ['ポートフォリオ', 'ミュージシャン', '音楽', 'アーティスト'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Musician Portfolio - Official Site</title>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">MUSICIAN</div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#music">Music</a></li>
                    <li><a href="#live">Live</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
            <h1 class="hero-title">ARTIST NAME</h1>
            <p class="hero-subtitle">Official Website</p>
            <div class="hero-actions">
                <a href="#music" class="hero-button primary">Latest Album</a>
                <a href="#live" class="hero-button secondary">Live Schedule</a>
            </div>
        </div>
        <div class="hero-player">
            <div class="player-info">
                <span class="now-playing">Now Playing</span>
                <h3 class="track-title">New Single - "Music Title"</h3>
            </div>
            <div class="player-controls">
                <button class="play-btn" id="playBtn">▶</button>
                <div class="progress-bar">
                    <div class="progress"></div>
                </div>
                <span class="time">0:00 / 3:45</span>
            </div>
        </div>
    </section>

    <section id="music" class="music">
        <div class="container">
            <h2 class="section-title">Music</h2>
            <div class="music-tabs">
                <button class="tab-btn active" data-tab="albums">Albums</button>
                <button class="tab-btn" data-tab="singles">Singles</button>
                <button class="tab-btn" data-tab="videos">Music Videos</button>
            </div>
            
            <div class="tab-content active" id="albums">
                <div class="albums-grid">
                    <div class="album-item">
                        <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" alt="Album Cover">
                        <div class="album-info">
                            <h3>Latest Album</h3>
                            <p>2024年リリース</p>
                            <div class="album-actions">
                                <button class="listen-btn">試聴</button>
                                <a href="#" class="buy-btn">購入</a>
                            </div>
                        </div>
                    </div>
                    <div class="album-item">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" alt="Album Cover">
                        <div class="album-info">
                            <h3>Second Album</h3>
                            <p>2023年リリース</p>
                            <div class="album-actions">
                                <button class="listen-btn">試聴</button>
                                <a href="#" class="buy-btn">購入</a>
                            </div>
                        </div>
                    </div>
                    <div class="album-item">
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop" alt="Album Cover">
                        <div class="album-info">
                            <h3>Debut Album</h3>
                            <p>2022年リリース</p>
                            <div class="album-actions">
                                <button class="listen-btn">試聴</button>
                                <a href="#" class="buy-btn">購入</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="singles">
                <div class="singles-list">
                    <div class="single-item">
                        <div class="single-artwork">
                            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" alt="Single">
                        </div>
                        <div class="single-info">
                            <h4>New Single Title</h4>
                            <p>2024.03.15 Release</p>
                        </div>
                        <button class="play-single">▶</button>
                    </div>
                    <div class="single-item">
                        <div class="single-artwork">
                            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop" alt="Single">
                        </div>
                        <div class="single-info">
                            <h4>Previous Single</h4>
                            <p>2024.01.20 Release</p>
                        </div>
                        <button class="play-single">▶</button>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="videos">
                <div class="videos-grid">
                    <div class="video-item">
                        <div class="video-thumbnail">
                            <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop" alt="Music Video">
                            <div class="play-overlay">▶</div>
                        </div>
                        <h4>Music Video Title</h4>
                    </div>
                    <div class="video-item">
                        <div class="video-thumbnail">
                            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop" alt="Music Video">
                            <div class="play-overlay">▶</div>
                        </div>
                        <h4>Live Performance</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="live" class="live">
        <div class="container">
            <h2 class="section-title">Live Schedule</h2>
            <div class="live-list">
                <div class="live-item">
                    <div class="live-date">
                        <span class="month">APR</span>
                        <span class="day">15</span>
                    </div>
                    <div class="live-info">
                        <h3>Spring Tour 2024</h3>
                        <p class="venue">東京・Zepp Tokyo</p>
                        <p class="time">開場 18:00 / 開演 19:00</p>
                    </div>
                    <div class="live-actions">
                        <span class="status sold-out">SOLD OUT</span>
                    </div>
                </div>
                <div class="live-item">
                    <div class="live-date">
                        <span class="month">MAY</span>
                        <span class="day">20</span>
                    </div>
                    <div class="live-info">
                        <h3>Acoustic Live</h3>
                        <p class="venue">大阪・Billboard Live OSAKA</p>
                        <p class="time">開場 18:30 / 開演 19:30</p>
                    </div>
                    <div class="live-actions">
                        <a href="#" class="ticket-btn">チケット</a>
                    </div>
                </div>
                <div class="live-item">
                    <div class="live-date">
                        <span class="month">JUN</span>
                        <span class="day">10</span>
                    </div>
                    <div class="live-info">
                        <h3>Summer Festival</h3>
                        <p class="venue">千葉・幕張メッセ</p>
                        <p class="time">開場 11:00 / 開演 12:00</p>
                    </div>
                    <div class="live-actions">
                        <a href="#" class="ticket-btn">チケット</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About</h2>
            <div class="about-content">
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop" alt="Artist">
                </div>
                <div class="about-text">
                    <h3>ARTIST NAME</h3>
                    <p class="about-genre">Singer-Songwriter / Pop Rock</p>
                    <p>2020年にデビューし、独自の楽曲制作と心に響く歌詞で多くのファンを魅了しているアーティストです。</p>
                    <p>ギターとピアノを中心とした楽曲制作を行い、ライブでは観客との一体感を大切にしたパフォーマンスを展開しています。</p>
                    
                    <div class="discography-stats">
                        <div class="stat">
                            <span class="stat-number">3</span>
                            <span class="stat-label">Albums</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">15</span>
                            <span class="stat-label">Singles</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">50+</span>
                            <span class="stat-label">Live Shows</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="news" class="news">
        <div class="container">
            <h2 class="section-title">News</h2>
            <div class="news-list">
                <article class="news-item">
                    <div class="news-date">2024.03.20</div>
                    <h3>新シングル「Song Title」リリース決定</h3>
                    <p>4月15日に新シングルをリリースすることが決定いたしました。詳細は後日発表いたします。</p>
                </article>
                <article class="news-item">
                    <div class="news-date">2024.03.15</div>
                    <h3>春のツアー追加公演決定</h3>
                    <p>好評につき、春のツアーの追加公演が決定いたしました。チケット販売は3月25日開始予定です。</p>
                </article>
                <article class="news-item">
                    <div class="news-date">2024.03.10</div>
                    <h3>ラジオ出演のお知らせ</h3>
                    <p>3月18日（月）22:00〜FM局「Music Station」に出演いたします。新曲について語る予定です。</p>
                </article>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Contact</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="info-section">
                        <h3>ファンレター・プレゼント</h3>
                        <p>〒000-0000<br>東京都○○区○○1-2-3<br>○○ビル5F<br>ARTIST NAME ファンレター係</p>
                    </div>
                    <div class="info-section">
                        <h3>お仕事のご依頼</h3>
                        <p>Email: management@artist.com<br>Tel: 03-0000-0000<br>担当: マネージメント事務所</p>
                    </div>
                    <div class="info-section">
                        <h3>公式SNS</h3>
                        <div class="social-links">
                            <a href="#" class="social-link">Twitter</a>
                            <a href="#" class="social-link">Instagram</a>
                            <a href="#" class="social-link">YouTube</a>
                            <a href="#" class="social-link">Spotify</a>
                        </div>
                    </div>
                </div>
                <div class="newsletter">
                    <h3>Newsletter</h3>
                    <p>最新情報をお届けします</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="メールアドレス" required>
                        <button type="submit">登録</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 ARTIST NAME. All rights reserved.</p>
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #0a0a0a;
    color: #fff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid #333;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 3px;
    color: #ff6b6b;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
}

.menu-toggle span {
    width: 25px;
    height: 2px;
    background: #fff;
    margin: 3px 0;
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.nav-menu a:hover {
    color: #ff6b6b;
}

/* Hero */
.hero {
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    opacity: 0.1;
    animation: colorShift 10s ease-in-out infinite;
}

@keyframes colorShift {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.2; }
}

.hero-content {
    z-index: 1;
    margin-bottom: 3rem;
}

.hero-title {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 3px;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.8;
    letter-spacing: 2px;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.hero-button {
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s;
    text-transform: uppercase;
}

.hero-button.primary {
    background: #ff6b6b;
    color: white;
}

.hero-button.secondary {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
}

.hero-button:hover {
    transform: translateY(-2px);
}

.hero-player {
    background: rgba(0,0,0,0.8);
    padding: 1.5rem 2rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid #333;
    max-width: 400px;
    width: 100%;
}

.player-info {
    margin-bottom: 1rem;
}

.now-playing {
    font-size: 0.8rem;
    color: #ff6b6b;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.track-title {
    color: #fff;
    font-size: 1.1rem;
    margin-top: 0.5rem;
}

.player-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.play-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ff6b6b;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.progress-bar {
    flex: 1;
    height: 4px;
    background: #333;
    border-radius: 2px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background: #ff6b6b;
    width: 35%;
    transition: width 0.3s;
}

.time {
    font-size: 0.9rem;
    color: #999;
}

/* Music */
.music {
    padding: 100px 0;
    background: #111;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.music-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

.tab-btn {
    padding: 1rem 2rem;
    background: transparent;
    color: #999;
    border: 1px solid #333;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.tab-btn.active,
.tab-btn:hover {
    background: #ff6b6b;
    color: white;
    border-color: #ff6b6b;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.albums-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.album-item {
    background: #1a1a1a;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s;
}

.album-item:hover {
    transform: translateY(-5px);
}

.album-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.album-info {
    padding: 1.5rem;
}

.album-info h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #fff;
}

.album-info p {
    color: #999;
    margin-bottom: 1rem;
}

.album-actions {
    display: flex;
    gap: 1rem;
}

.listen-btn,
.buy-btn {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
}

.listen-btn {
    background: #ff6b6b;
    color: white;
}

.buy-btn {
    background: transparent;
    color: #fff;
    border: 1px solid #fff;
}

.singles-list {
    max-width: 600px;
    margin: 0 auto;
}

.single-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    background: #1a1a1a;
    margin-bottom: 1rem;
    border-radius: 10px;
}

.single-artwork img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    margin-right: 1rem;
}

.single-info {
    flex: 1;
}

.single-info h4 {
    color: #fff;
    margin-bottom: 0.3rem;
}

.single-info p {
    color: #999;
    font-size: 0.9rem;
}

.play-single {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ff6b6b;
    color: white;
    border: none;
    cursor: pointer;
}

.videos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.video-item {
    position: relative;
}

.video-thumbnail {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.video-thumbnail img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.play-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: rgba(255, 107, 107, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

.video-item h4 {
    margin-top: 1rem;
    color: #fff;
}

/* Live */
.live {
    padding: 100px 0;
    background: #0a0a0a;
}

.live-list {
    max-width: 800px;
    margin: 0 auto;
}

.live-item {
    display: flex;
    align-items: center;
    padding: 2rem;
    background: #1a1a1a;
    margin-bottom: 1rem;
    border-radius: 10px;
    border-left: 4px solid #ff6b6b;
}

.live-date {
    text-align: center;
    margin-right: 2rem;
}

.live-date .month {
    display: block;
    color: #ff6b6b;
    font-weight: 700;
    font-size: 0.9rem;
}

.live-date .day {
    display: block;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
}

.live-info {
    flex: 1;
}

.live-info h3 {
    color: #fff;
    margin-bottom: 0.5rem;
}

.venue {
    color: #ff6b6b;
    margin-bottom: 0.3rem;
}

.time {
    color: #999;
    font-size: 0.9rem;
}

.live-actions {
    margin-left: 2rem;
}

.ticket-btn {
    padding: 0.8rem 1.5rem;
    background: #ff6b6b;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 500;
}

.status.sold-out {
    padding: 0.8rem 1.5rem;
    background: #666;
    color: white;
    border-radius: 25px;
    font-weight: 500;
}

/* About */
.about {
    padding: 100px 0;
    background: #111;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: center;
}

.about-image img {
    width: 100%;
    border-radius: 10px;
}

.about-text h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #fff;
}

.about-genre {
    color: #ff6b6b;
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.about-text p {
    color: #ccc;
    margin-bottom: 1.5rem;
    line-height: 1.7;
}

.discography-stats {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #ff6b6b;
}

.stat-label {
    color: #999;
    font-size: 0.9rem;
    text-transform: uppercase;
}

/* News */
.news {
    padding: 100px 0;
    background: #0a0a0a;
}

.news-list {
    max-width: 800px;
    margin: 0 auto;
}

.news-item {
    padding: 2rem;
    background: #1a1a1a;
    margin-bottom: 1rem;
    border-radius: 10px;
    border-left: 4px solid #ff6b6b;
}

.news-date {
    color: #ff6b6b;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.news-item h3 {
    color: #fff;
    margin-bottom: 1rem;
}

.news-item p {
    color: #ccc;
    line-height: 1.6;
}

/* Contact */
.contact {
    padding: 100px 0;
    background: #111;
}

.contact-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-section h3 {
    color: #fff;
    margin-bottom: 1rem;
}

.info-section p {
    color: #ccc;
    line-height: 1.6;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-link {
    color: #ff6b6b;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid #ff6b6b;
    border-radius: 20px;
    font-size: 0.9rem;
    transition: all 0.3s;
}

.social-link:hover {
    background: #ff6b6b;
    color: white;
}

.newsletter {
    background: #1a1a1a;
    padding: 2rem;
    border-radius: 10px;
}

.newsletter h3 {
    color: #fff;
    margin-bottom: 1rem;
}

.newsletter p {
    color: #ccc;
    margin-bottom: 1.5rem;
}

.newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.newsletter-form input {
    padding: 1rem;
    background: #0a0a0a;
    border: 1px solid #333;
    color: #fff;
    border-radius: 5px;
}

.newsletter-form button {
    padding: 1rem;
    background: #ff6b6b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
}

/* Footer */
.footer {
    padding: 2rem 0;
    background: #0a0a0a;
    border-top: 1px solid #333;
    text-align: center;
    color: #666;
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
        background: #0a0a0a;
        flex-direction: column;
        padding: 1rem 0;
        border-top: 1px solid #333;
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-actions {
        flex-direction: column;
        align-items: center;
    }
    
    .albums-grid,
    .videos-grid {
        grid-template-columns: 1fr;
    }
    
    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .live-item {
        flex-direction: column;
        text-align: center;
    }
    
    .live-date {
        margin-right: 0;
        margin-bottom: 1rem;
    }
    
    .live-actions {
        margin-left: 0;
        margin-top: 1rem;
    }
}`,
    js: `// メニュートグル
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// 音楽タブ切り替え
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // アクティブクラス切り替え
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // タブコンテンツ切り替え
        const tabId = this.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
    });
});

// プレイヤー機能（簡易版）
let isPlaying = false;
const playBtn = document.getElementById('playBtn');
const progress = document.querySelector('.progress');

playBtn.addEventListener('click', function() {
    isPlaying = !isPlaying;
    this.textContent = isPlaying ? '⏸' : '▶';
    
    if (isPlaying) {
        // プログレスバーアニメーション（デモ用）
        let width = 35;
        const interval = setInterval(() => {
            if (!isPlaying || width >= 100) {
                clearInterval(interval);
                if (width >= 100) {
                    playBtn.textContent = '▶';
                    isPlaying = false;
                    progress.style.width = '0%';
                }
                return;
            }
            width += 0.5;
            progress.style.width = width + '%';
        }, 100);
    }
});

// シングル再生ボタン
document.querySelectorAll('.play-single').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('楽曲再生機能はデモ版です');
    });
});

// アルバム試聴ボタン
document.querySelectorAll('.listen-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('試聴機能はデモ版です');
    });
});

// ニュースレター登録
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('ニュースレターにご登録ありがとうございます！');
    this.reset();
});`
  }
}