import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const eventConferenceTemplate: WebTemplate = {
  id: 'event-conference',
  title: 'カンファレンス・セミナー',
  category: TEMPLATE_CATEGORIES.EVENT,
  description: 'ビジネスカンファレンスや技術セミナー向けの専門的なイベントサイトテンプレート',
  thumbnail: '/template-images/event-conference.jpg',
  features: [
    'イベント概要・スケジュール',
    'スピーカー紹介',
    'チケット販売・参加登録',
    'スポンサー企業紹介',
    'ライブ配信・録画視聴'
  ],
  tags: ['カンファレンス', 'セミナー', 'ビジネス', '講演', 'ネットワーキング'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Summit 2025 - 未来を創るテクノロジーカンファレンス</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1>Tech Summit 2025</h1>
                    <span class="tagline">Future Technology Conference</span>
                </div>
                <button class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav class="main-nav" id="main-nav">
                    <ul>
                        <li><a href="#about">イベント概要</a></li>
                        <li><a href="#speakers">スピーカー</a></li>
                        <li><a href="#schedule">スケジュール</a></li>
                        <li><a href="#sponsors">スポンサー</a></li>
                        <li><a href="#venue">会場・アクセス</a></li>
                        <li class="nav-cta"><a href="#registration">参加登録</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-background">
            <video autoplay muted loop>
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
            </video>
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <div class="hero-content">
                <div class="event-badge">2025年3月15日-16日</div>
                <h2>未来を創る<br><span class="highlight">テクノロジー</span><br>カンファレンス</h2>
                <p class="hero-subtitle">AI、IoT、ブロックチェーンなど最先端技術のトレンドと実践を学ぶ2日間</p>
                
                <div class="hero-stats">
                    <div class="stat-item">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">登壇者</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">2,000+</div>
                        <div class="stat-label">参加者</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">30+</div>
                        <div class="stat-label">セッション</div>
                    </div>
                </div>
                
                <div class="hero-buttons">
                    <a href="#registration" class="btn-primary">今すぐ参加登録</a>
                    <a href="#about" class="btn-outline">詳細を見る</a>
                </div>
                
                <div class="countdown-timer" id="countdown">
                    <div class="countdown-item">
                        <div class="countdown-number" id="days">00</div>
                        <div class="countdown-label">日</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number" id="hours">00</div>
                        <div class="countdown-label">時間</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number" id="minutes">00</div>
                        <div class="countdown-label">分</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number" id="seconds">00</div>
                        <div class="countdown-label">秒</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="event-info">
        <div class="container">
            <div class="info-cards">
                <div class="info-card">
                    <div class="info-icon">📅</div>
                    <h3>開催日程</h3>
                    <p>2025年3月15日(土) - 16日(日)<br>2日間開催</p>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">📍</div>
                    <h3>会場</h3>
                    <p>東京国際フォーラム<br>ホールA・B・C</p>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">👥</div>
                    <h3>参加者</h3>
                    <p>エンジニア・CTO・研究者<br>学生・起業家</p>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">🎯</div>
                    <h3>テーマ</h3>
                    <p>AI・IoT・ブロックチェーン<br>Web3・量子コンピューティング</p>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2 class="section-title">イベント概要</h2>
                    <p class="section-subtitle">Technology for the Future</p>
                    
                    <div class="about-description">
                        <p>Tech Summit 2025は、最先端テクノロジーの今と未来を体験する日本最大級のテクノロジーカンファレンスです。</p>
                        <p>AI、IoT、ブロックチェーン、Web3、量子コンピューティングなど、注目のテクノロジー分野で活躍する国内外の専門家が一堂に会し、最新のトレンドと実践的な知見を共有します。</p>
                        <p>技術者、研究者、経営者、学生まで、テクノロジーに関心のあるすべての方にとって価値のある2日間をお届けします。</p>
                    </div>
                    
                    <div class="event-highlights">
                        <div class="highlight-item">
                            <div class="highlight-icon">🚀</div>
                            <h4>最先端技術</h4>
                            <p>業界をリードする最新技術とトレンドを体験</p>
                        </div>
                        
                        <div class="highlight-item">
                            <div class="highlight-icon">🌐</div>
                            <h4>グローバル視点</h4>
                            <p>海外から招待したトップスピーカーによる講演</p>
                        </div>
                        
                        <div class="highlight-item">
                            <div class="highlight-icon">🤝</div>
                            <h4>ネットワーキング</h4>
                            <p>同業者や専門家との貴重な交流機会</p>
                        </div>
                        
                        <div class="highlight-item">
                            <div class="highlight-icon">🎓</div>
                            <h4>実践的学習</h4>
                            <p>ハンズオンワークショップとデモンストレーション</p>
                        </div>
                    </div>
                </div>
                
                <div class="about-visual">
                    <div class="event-stats-visual">
                        <div class="stat-circle">
                            <div class="stat-value">50+</div>
                            <div class="stat-desc">世界トップクラス<br>スピーカー</div>
                        </div>
                        <div class="stat-circle">
                            <div class="stat-value">30+</div>
                            <div class="stat-desc">セッション<br>＆ワークショップ</div>
                        </div>
                        <div class="stat-circle">
                            <div class="stat-value">2000+</div>
                            <div class="stat-desc">参加者<br>ネットワーキング</div>
                        </div>
                    </div>
                    
                    <div class="about-image">
                        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" alt="カンファレンス会場">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="speakers" class="speakers">
        <div class="container">
            <h2 class="section-title">キーノートスピーカー</h2>
            <p class="section-subtitle">業界をリードする専門家たちが登壇</p>
            
            <div class="keynote-speakers">
                <div class="speaker-card keynote">
                    <div class="speaker-image">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" alt="Dr. Hiroshi Tanaka">
                        <div class="speaker-badge">Keynote Speaker</div>
                    </div>
                    <div class="speaker-info">
                        <h3>Dr. 田中 博</h3>
                        <p class="speaker-title">AI研究所 所長 / 東京大学教授</p>
                        <p class="speaker-company">Future AI Labs</p>
                        
                        <div class="speaker-bio">
                            <p>人工知能分野の世界的権威。機械学習とディープラーニングの研究で数々の受賞歴を持つ。著書「AI革命」は世界50カ国で翻訳され、AI教育の礎となっている。</p>
                        </div>
                        
                        <div class="speaker-session">
                            <h4>講演テーマ</h4>
                            <p>「AGIへの道筋：次世代人工知能が変える世界」</p>
                            <div class="session-time">3月15日 10:00-11:00 | メインホール</div>
                        </div>
                        
                        <div class="speaker-social">
                            <a href="#" class="social-link">Twitter</a>
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">Research</a>
                        </div>
                    </div>
                </div>
                
                <div class="speaker-card keynote">
                    <div class="speaker-image">
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b890?w=300&h=300&fit=crop&crop=face" alt="Sarah Johnson">
                        <div class="speaker-badge">Keynote Speaker</div>
                    </div>
                    <div class="speaker-info">
                        <h3>Sarah Johnson</h3>
                        <p class="speaker-title">CTO / Blockchain Pioneer</p>
                        <p class="speaker-company">CryptoTech Solutions</p>
                        
                        <div class="speaker-bio">
                            <p>ブロックチェーン技術のパイオニアとして、複数のスタートアップを成功に導く。Web3とDeFi分野での実績により、Forbes「40 Under 40」に選出された。</p>
                        </div>
                        
                        <div class="speaker-session">
                            <h4>講演テーマ</h4>
                            <p>「Web3の未来：分散型インターネットの実現」</p>
                            <div class="session-time">3月15日 14:00-15:00 | メインホール</div>
                        </div>
                        
                        <div class="speaker-social">
                            <a href="#" class="social-link">Twitter</a>
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="speakers-grid">
                <div class="speaker-card">
                    <div class="speaker-image">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" alt="Dr. Yuki Sato">
                    </div>
                    <div class="speaker-info">
                        <h3>Dr. 佐藤 雪</h3>
                        <p class="speaker-title">量子コンピューティング研究者</p>
                        <p class="speaker-company">IBM Quantum</p>
                        
                        <div class="speaker-session">
                            <h4>「量子優位性の実現と産業応用」</h4>
                            <div class="session-time">3月16日 11:00-11:45</div>
                        </div>
                    </div>
                </div>
                
                <div class="speaker-card">
                    <div class="speaker-image">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face" alt="Mark Chen">
                    </div>
                    <div class="speaker-info">
                        <h3>Mark Chen</h3>
                        <p class="speaker-title">IoT Solutions Architect</p>
                        <p class="speaker-company">Google Cloud</p>
                        
                        <div class="speaker-session">
                            <h4>「IoTエコシステムの設計戦略」</h4>
                            <div class="session-time">3月15日 16:30-17:15</div>
                        </div>
                    </div>
                </div>
                
                <div class="speaker-card">
                    <div class="speaker-image">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face" alt="Anna Rodriguez">
                    </div>
                    <div class="speaker-info">
                        <h3>Anna Rodriguez</h3>
                        <p class="speaker-title">Cybersecurity Expert</p>
                        <p class="speaker-company">Meta Security</p>
                        
                        <div class="speaker-session">
                            <h4>「ゼロトラスト時代のセキュリティ」</h4>
                            <div class="session-time">3月16日 14:30-15:15</div>
                        </div>
                    </div>
                </div>
                
                <div class="speaker-card">
                    <div class="speaker-image">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face" alt="Kenji Yamamoto">
                    </div>
                    <div class="speaker-info">
                        <h3>山本 健二</h3>
                        <p class="speaker-title">スタートアップ起業家</p>
                        <p class="speaker-company">NextGen Robotics</p>
                        
                        <div class="speaker-session">
                            <h4>「ロボティクス×AI の可能性」</h4>
                            <div class="session-time">3月16日 10:00-10:45</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="speakers-cta">
                <p>その他50名以上の専門家が登壇予定</p>
                <a href="#" class="btn-outline">全スピーカーを見る</a>
            </div>
        </div>
    </section>

    <section id="schedule" class="schedule">
        <div class="container">
            <h2 class="section-title">イベントスケジュール</h2>
            <p class="section-subtitle">2日間のプログラム概要</p>
            
            <div class="schedule-tabs">
                <button class="schedule-tab active" data-day="day1">Day 1 - 3月15日(土)</button>
                <button class="schedule-tab" data-day="day2">Day 2 - 3月16日(日)</button>
            </div>
            
            <div class="schedule-content">
                <div class="schedule-day active" id="day1">
                    <div class="day-header">
                        <h3>3月15日（土）- メインデー</h3>
                        <p>キーノート講演とコアテクノロジーセッション</p>
                    </div>
                    
                    <div class="schedule-timeline">
                        <div class="timeline-item">
                            <div class="timeline-time">9:00-9:30</div>
                            <div class="timeline-content">
                                <h4>受付・開場</h4>
                                <p>参加者登録とネットワーキング</p>
                                <div class="timeline-venue">メインロビー</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item keynote">
                            <div class="timeline-time">10:00-11:00</div>
                            <div class="timeline-content">
                                <h4>キーノート講演</h4>
                                <p>「AGIへの道筋：次世代人工知能が変える世界」</p>
                                <div class="timeline-speaker">Dr. 田中 博 (AI研究所)</div>
                                <div class="timeline-venue">メインホール</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-time">11:30-12:15</div>
                            <div class="timeline-content">
                                <h4>技術セッション A</h4>
                                <div class="parallel-sessions">
                                    <div class="session-track">
                                        <h5>Track 1: 機械学習の実践</h5>
                                        <p>MLOpsとモデル運用</p>
                                        <span class="venue">ホールA</span>
                                    </div>
                                    <div class="session-track">
                                        <h5>Track 2: クラウドネイティブ</h5>
                                        <p>Kubernetesとマイクロサービス</p>
                                        <span class="venue">ホールB</span>
                                    </div>
                                    <div class="session-track">
                                        <h5>Track 3: フロントエンド最新動向</h5>
                                        <p>React 19とNext.js 15</p>
                                        <span class="venue">ホールC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="timeline-item break">
                            <div class="timeline-time">12:15-13:15</div>
                            <div class="timeline-content">
                                <h4>ランチ休憩</h4>
                                <p>ネットワーキングランチ・スポンサー展示</p>
                                <div class="timeline-venue">展示エリア</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item keynote">
                            <div class="timeline-time">14:00-15:00</div>
                            <div class="timeline-content">
                                <h4>キーノート講演</h4>
                                <p>「Web3の未来：分散型インターネットの実現」</p>
                                <div class="timeline-speaker">Sarah Johnson (CryptoTech Solutions)</div>
                                <div class="timeline-venue">メインホール</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-time">15:30-16:15</div>
                            <div class="timeline-content">
                                <h4>技術セッション B</h4>
                                <div class="parallel-sessions">
                                    <div class="session-track">
                                        <h5>Track 1: ブロックチェーン実装</h5>
                                        <p>DeFiプロトコルの構築</p>
                                        <span class="venue">ホールA</span>
                                    </div>
                                    <div class="session-track">
                                        <h5>Track 2: DevOps進化</h5>
                                        <p>GitOpsとCI/CDパイプライン</p>
                                        <span class="venue">ホールB</span>
                                    </div>
                                    <div class="session-track">
                                        <h5>Track 3: モバイル開発</h5>
                                        <p>React NativeとFlutter</p>
                                        <span class="venue">ホールC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-time">16:30-17:15</div>
                            <div class="timeline-content">
                                <h4>IoTセッション</h4>
                                <p>「IoTエコシステムの設計戦略」</p>
                                <div class="timeline-speaker">Mark Chen (Google Cloud)</div>
                                <div class="timeline-venue">メインホール</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-time">18:00-20:00</div>
                            <div class="timeline-content">
                                <h4>ウェルカムパーティー</h4>
                                <p>参加者・スピーカー・スポンサー交流会</p>
                                <div class="timeline-venue">レセプションホール</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="schedule-day" id="day2">
                    <div class="day-header">
                        <h3>3月16日（日）- イノベーションデー</h3>
                        <p>新技術とワークショップ中心のプログラム</p>
                    </div>
                    
                    <div class="schedule-timeline">
                        <div class="timeline-item">
                            <div class="timeline-time">9:00-9:45</div>
                            <div class="timeline-content">
                                <h4>モーニングセッション</h4>
                                <p>「スタートアップエコシステムの現在」</p>
                                <div class="timeline-speaker">パネルディスカッション</div>
                                <div class="timeline-venue">メインホール</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-time">10:00-10:45</div>
                            <div class="timeline-content">
                                <h4>ロボティクスセッション</h4>
                                <p>「ロボティクス×AI の可能性」</p>
                                <div class="timeline-speaker">山本 健二 (NextGen Robotics)</div>
                                <div class="timeline-venue">ホールA</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-time">11:00-11:45</div>
                            <div class="timeline-content">
                                <h4>量子コンピューティング</h4>
                                <p>「量子優位性の実現と産業応用」</p>
                                <div class="timeline-speaker">Dr. 佐藤 雪 (IBM Quantum)</div>
                                <div class="timeline-venue">メインホール</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-time">13:00-15:00</div>
                            <div class="timeline-content">
                                <h4>ハンズオンワークショップ</h4>
                                <div class="parallel-sessions">
                                    <div class="session-track">
                                        <h5>Workshop 1: ChatGPT API活用</h5>
                                        <p>実践的なアプリケーション開発</p>
                                        <span class="venue">ワークショップルーム1</span>
                                    </div>
                                    <div class="session-track">
                                        <h5>Workshop 2: Dockerコンテナ</h5>
                                        <p>本格的なコンテナ運用</p>
                                        <span class="venue">ワークショップルーム2</span>
                                    </div>
                                    <div class="session-track">
                                        <h5>Workshop 3: NFT開発</h5>
                                        <p>スマートコントラクト作成</p>
                                        <span class="venue">ワークショップルーム3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-time">15:30-16:15</div>
                            <div class="timeline-content">
                                <h4>クロージングセッション</h4>
                                <p>「テクノロジーの未来を切り拓く」</p>
                                <div class="timeline-speaker">全登壇者パネル</div>
                                <div class="timeline-venue">メインホール</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-time">16:15-16:30</div>
                            <div class="timeline-content">
                                <h4>閉会式</h4>
                                <p>来年度の告知・記念撮影</p>
                                <div class="timeline-venue">メインホール</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="sponsors" class="sponsors">
        <div class="container">
            <h2 class="section-title">スポンサー企業</h2>
            <p class="section-subtitle">Tech Summit 2025を支援いただく企業様</p>
            
            <div class="sponsors-tiers">
                <div class="sponsor-tier">
                    <h3>プラチナスポンサー</h3>
                    <div class="sponsor-logos platinum">
                        <div class="sponsor-logo">
                            <img src="https://via.placeholder.com/300x120/4285f4/ffffff?text=Google" alt="Google">
                        </div>
                        <div class="sponsor-logo">
                            <img src="https://via.placeholder.com/300x120/ff6900/ffffff?text=Amazon" alt="Amazon">
                        </div>
                    </div>
                </div>
                
                <div class="sponsor-tier">
                    <h3>ゴールドスポンサー</h3>
                    <div class="sponsor-logos gold">
                        <div class="sponsor-logo">
                            <img src="https://via.placeholder.com/250x100/0078d4/ffffff?text=Microsoft" alt="Microsoft">
                        </div>
                        <div class="sponsor-logo">
                            <img src="https://via.placeholder.com/250x100/1877f2/ffffff?text=Meta" alt="Meta">
                        </div>
                        <div class="sponsor-logo">
                            <img src="https://via.placeholder.com/250x100/ff0000/ffffff?text=Oracle" alt="Oracle">
                        </div>
                    </div>
                </div>
                
                <div class="sponsor-tier">
                    <h3>シルバースポンサー</h3>
                    <div class="sponsor-logos silver">
                        <div class="sponsor-logo">
                            <img src="https://via.placeholder.com/200x80/000000/ffffff?text=IBM" alt="IBM">
                        </div>
                        <div class="sponsor-logo">
                            <img src="https://via.placeholder.com/200x80/ff6b6b/ffffff?text=Salesforce" alt="Salesforce">
                        </div>
                        <div class="sponsor-logo">
                            <img src="https://via.placeholder.com/200x80/764abc/ffffff?text=Slack" alt="Slack">
                        </div>
                        <div class="sponsor-logo">
                            <img src="https://via.placeholder.com/200x80/00d4aa/ffffff?text=Figma" alt="Figma">
                        </div>
                    </div>
                </div>
                
                <div class="sponsor-tier">
                    <h3>ブロンズスポンサー</h3>
                    <div class="sponsor-logos bronze">
                        <div class="sponsor-logo">Atlassian</div>
                        <div class="sponsor-logo">Stripe</div>
                        <div class="sponsor-logo">Zoom</div>
                        <div class="sponsor-logo">Notion</div>
                        <div class="sponsor-logo">GitHub</div>
                        <div class="sponsor-logo">Vercel</div>
                    </div>
                </div>
            </div>
            
            <div class="sponsor-benefits">
                <h3>スポンサーシップのご案内</h3>
                <p>Tech Summit 2025では、イベントを支援いただくスポンサー企業様を募集しています。</p>
                <div class="benefits-grid">
                    <div class="benefit-item">
                        <h4>ブランド露出</h4>
                        <p>2,000名以上の参加者への効果的なブランディング</p>
                    </div>
                    <div class="benefit-item">
                        <h4>リードジェネレーション</h4>
                        <p>質の高い見込み客との接点創出</p>
                    </div>
                    <div class="benefit-item">
                        <h4>採用機会</h4>
                        <p>優秀なエンジニア・研究者との出会い</p>
                    </div>
                    <div class="benefit-item">
                        <h4>技術交流</h4>
                        <p>最新技術動向の情報収集と発信</p>
                    </div>
                </div>
                <a href="#" class="btn-outline">スポンサー資料請求</a>
            </div>
        </div>
    </section>

    <section id="venue" class="venue">
        <div class="container">
            <h2 class="section-title">会場・アクセス</h2>
            
            <div class="venue-content">
                <div class="venue-info">
                    <h3>東京国際フォーラム</h3>
                    <p class="venue-description">東京の中心地に位置する国際的なコンベンション施設。最新の設備と優れたアクセス性を備えた会場です。</p>
                    
                    <div class="venue-details">
                        <div class="detail-item">
                            <div class="detail-icon">📍</div>
                            <div>
                                <h4>住所</h4>
                                <p>〒100-0005<br>東京都千代田区丸の内3丁目5番1号</p>
                            </div>
                        </div>
                        
                        <div class="detail-item">
                            <div class="detail-icon">🚃</div>
                            <div>
                                <h4>アクセス</h4>
                                <p>JR有楽町駅 徒歩1分<br>JR東京駅 徒歩5分<br>地下鉄有楽町線有楽町駅 直結</p>
                            </div>
                        </div>
                        
                        <div class="detail-item">
                            <div class="detail-icon">🅿️</div>
                            <div>
                                <h4>駐車場</h4>
                                <p>地下駐車場あり（有料）<br>周辺コインパーキング多数</p>
                            </div>
                        </div>
                        
                        <div class="detail-item">
                            <div class="detail-icon">♿</div>
                            <div>
                                <h4>バリアフリー</h4>
                                <p>車椅子対応<br>多目的トイレ完備<br>エレベーター設置</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="venue-facilities">
                        <h4>会場設備</h4>
                        <div class="facilities-grid">
                            <div class="facility-item">
                                <span class="facility-icon">🎤</span>
                                <span>高性能音響システム</span>
                            </div>
                            <div class="facility-item">
                                <span class="facility-icon">📺</span>
                                <span>4K大型スクリーン</span>
                            </div>
                            <div class="facility-item">
                                <span class="facility-icon">📶</span>
                                <span>高速Wi-Fi完備</span>
                            </div>
                            <div class="facility-item">
                                <span class="facility-icon">🍽️</span>
                                <span>レストラン・カフェ</span>
                            </div>
                            <div class="facility-item">
                                <span class="facility-icon">🔌</span>
                                <span>電源コンセント完備</span>
                            </div>
                            <div class="facility-item">
                                <span class="facility-icon">📞</span>
                                <span>同時通訳設備</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="venue-map">
                    <div class="map-placeholder">
                        <h4>会場マップ</h4>
                        <p>東京国際フォーラム周辺</p>
                        <button class="btn-outline">Googleマップで開く</button>
                    </div>
                    
                    <div class="floor-plan">
                        <h4>フロアプラン</h4>
                        <div class="floor-info">
                            <div class="floor-item">
                                <span class="floor-name">メインホール</span>
                                <span class="floor-capacity">1,500席</span>
                            </div>
                            <div class="floor-item">
                                <span class="floor-name">ホールA</span>
                                <span class="floor-capacity">400席</span>
                            </div>
                            <div class="floor-item">
                                <span class="floor-name">ホールB</span>
                                <span class="floor-capacity">300席</span>
                            </div>
                            <div class="floor-item">
                                <span class="floor-name">ホールC</span>
                                <span class="floor-capacity">200席</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="registration" class="registration">
        <div class="container">
            <h2 class="section-title">参加登録</h2>
            <p class="section-subtitle">今すぐ登録して席を確保しましょう</p>
            
            <div class="ticket-types">
                <div class="ticket-card">
                    <div class="ticket-header">
                        <h3>アーリーバード</h3>
                        <div class="ticket-price">¥15,000</div>
                        <div class="ticket-original">通常価格 ¥25,000</div>
                    </div>
                    <div class="ticket-content">
                        <div class="ticket-deadline">2月15日まで限定</div>
                        <ul class="ticket-includes">
                            <li>✓ 2日間全セッション参加</li>
                            <li>✓ ランチ・コーヒー提供</li>
                            <li>✓ ネットワーキングパーティー</li>
                            <li>✓ 資料・ノベルティ</li>
                            <li>✓ オンライン録画視聴（30日間）</li>
                        </ul>
                        <button class="btn-primary ticket-btn">今すぐ登録</button>
                        <div class="tickets-remaining">残り 127 席</div>
                    </div>
                </div>
                
                <div class="ticket-card featured">
                    <div class="ticket-badge">人気</div>
                    <div class="ticket-header">
                        <h3>一般チケット</h3>
                        <div class="ticket-price">¥25,000</div>
                    </div>
                    <div class="ticket-content">
                        <div class="ticket-deadline">一般販売</div>
                        <ul class="ticket-includes">
                            <li>✓ 2日間全セッション参加</li>
                            <li>✓ ランチ・コーヒー提供</li>
                            <li>✓ ネットワーキングパーティー</li>
                            <li>✓ 資料・ノベルティ</li>
                            <li>✓ オンライン録画視聴（30日間）</li>
                        </ul>
                        <button class="btn-primary ticket-btn">今すぐ登録</button>
                        <div class="tickets-remaining">残り 890 席</div>
                    </div>
                </div>
                
                <div class="ticket-card">
                    <div class="ticket-header">
                        <h3>学生チケット</h3>
                        <div class="ticket-price">¥5,000</div>
                    </div>
                    <div class="ticket-content">
                        <div class="ticket-deadline">学生証提示必要</div>
                        <ul class="ticket-includes">
                            <li>✓ 2日間全セッション参加</li>
                            <li>✓ ランチ・コーヒー提供</li>
                            <li>✓ 資料・ノベルティ</li>
                            <li>✓ オンライン録画視聴（30日間）</li>
                            <li>✗ ネットワーキングパーティー</li>
                        </ul>
                        <button class="btn-outline ticket-btn">今すぐ登録</button>
                        <div class="tickets-remaining">残り 243 席</div>
                    </div>
                </div>
                
                <div class="ticket-card">
                    <div class="ticket-header">
                        <h3>オンライン参加</h3>
                        <div class="ticket-price">¥8,000</div>
                    </div>
                    <div class="ticket-content">
                        <div class="ticket-deadline">ライブ配信視聴</div>
                        <ul class="ticket-includes">
                            <li>✓ キーノート講演ライブ視聴</li>
                            <li>✓ 主要セッションライブ視聴</li>
                            <li>✓ チャットでの質疑参加</li>
                            <li>✓ 録画視聴（60日間）</li>
                            <li>✓ デジタル資料</li>
                        </ul>
                        <button class="btn-outline ticket-btn">今すぐ登録</button>
                        <div class="tickets-remaining">制限なし</div>
                    </div>
                </div>
            </div>
            
            <div class="registration-info">
                <h3>参加登録について</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <h4>キャンセルポリシー</h4>
                        <p>開催1週間前まで：全額返金<br>開催3日前まで：50%返金<br>それ以降：返金不可</p>
                    </div>
                    <div class="info-item">
                        <h4>お支払い方法</h4>
                        <p>クレジットカード・銀行振込・コンビニ決済に対応</p>
                    </div>
                    <div class="info-item">
                        <h4>領収書発行</h4>
                        <p>参加登録完了後、マイページより発行可能</p>
                    </div>
                    <div class="info-item">
                        <h4>お問い合わせ</h4>
                        <p>registration@techsummit2025.jp<br>03-1234-5678</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Tech Summit 2025</h3>
                    <p>未来を創るテクノロジーカンファレンス</p>
                    <div class="event-info-footer">
                        <p>2025年3月15日-16日</p>
                        <p>東京国際フォーラム</p>
                    </div>
                    <div class="social-links">
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">YouTube</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>イベント情報</h4>
                    <ul>
                        <li><a href="#about">イベント概要</a></li>
                        <li><a href="#speakers">スピーカー</a></li>
                        <li><a href="#schedule">スケジュール</a></li>
                        <li><a href="#venue">会場・アクセス</a></li>
                        <li><a href="#sponsors">スポンサー</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>参加者向け</h4>
                    <ul>
                        <li><a href="#registration">参加登録</a></li>
                        <li><a href="#">マイページ</a></li>
                        <li><a href="#">よくある質問</a></li>
                        <li><a href="#">参加者ガイド</a></li>
                        <li><a href="#">コミュニティ</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>お問い合わせ</h4>
                    <div class="contact-info-footer">
                        <p>運営事務局</p>
                        <p>Email: info@techsummit2025.jp</p>
                        <p>Tel: 03-1234-5678</p>
                        <p>受付時間: 平日 10:00-18:00</p>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-legal">
                    <p>&copy; 2025 Tech Summit. All rights reserved.</p>
                    <div class="legal-links">
                        <a href="#">プライバシーポリシー</a>
                        <a href="#">利用規約</a>
                        <a href="#">特定商取引法</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    color: #1a202c;
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: rgba(26, 32, 44, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo h1 {
    font-size: 24px;
    font-weight: 800;
    color: #00f5ff;
    margin: 0;
    background: linear-gradient(45deg, #00f5ff, #ff6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.tagline {
    font-size: 11px;
    color: #a0aec0;
    display: block;
    margin-top: 2px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.main-nav ul {
    display: flex;
    list-style: none;
    gap: 35px;
    align-items: center;
}

.main-nav a {
    text-decoration: none;
    color: #e2e8f0;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.3s;
    padding: 8px 0;
}

.main-nav a:hover {
    color: #00f5ff;
}

.nav-cta a {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white !important;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.nav-cta a:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

/* Hamburger Menu */
.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
}

.hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background: #e2e8f0;
    transition: all 0.3s;
    border-radius: 2px;
}

/* Hero */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
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

.hero-background video {
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
    background: linear-gradient(135deg, rgba(26, 32, 44, 0.9), rgba(45, 55, 72, 0.8));
    z-index: -1;
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 2;
    padding-top: 100px;
}

.event-badge {
    background: linear-gradient(45deg, #00f5ff, #ff6b6b);
    color: white;
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 30px;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.hero-content h2 {
    font-size: 64px;
    font-weight: 800;
    margin-bottom: 30px;
    line-height: 1.1;
}

.highlight {
    background: linear-gradient(45deg, #00f5ff, #ff6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 24px;
    margin-bottom: 40px;
    opacity: 0.9;
    font-weight: 300;
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-bottom: 50px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 36px;
    font-weight: 800;
    color: #00f5ff;
    display: block;
    margin-bottom: 5px;
}

.stat-label {
    font-size: 14px;
    color: #a0aec0;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 60px;
}

.btn-primary {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    padding: 18px 36px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    display: inline-block;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
}

.btn-outline {
    background: transparent;
    color: white;
    padding: 18px 36px;
    border: 2px solid white;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    display: inline-block;
}

.btn-outline:hover {
    background: white;
    color: #1a202c;
}

/* Countdown Timer */
.countdown-timer {
    display: flex;
    justify-content: center;
    gap: 30px;
}

.countdown-item {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.countdown-number {
    font-size: 32px;
    font-weight: 800;
    color: #00f5ff;
    display: block;
    font-family: 'JetBrains Mono', monospace;
}

.countdown-label {
    font-size: 12px;
    color: #a0aec0;
    margin-top: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Event Info */
.event-info {
    padding: 80px 0;
    background: #f7fafc;
}

.info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.info-card {
    background: white;
    padding: 40px 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    border: 2px solid transparent;
}

.info-card:hover {
    transform: translateY(-5px);
    border-color: #00f5ff;
}

.info-icon {
    font-size: 40px;
    margin-bottom: 20px;
    display: block;
}

.info-card h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #2d3748;
}

.info-card p {
    color: #718096;
    line-height: 1.6;
}

/* Sections */
section {
    padding: 100px 0;
}

.section-title {
    font-size: 48px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 20px;
    color: #1a202c;
}

.section-subtitle {
    text-align: center;
    color: #718096;
    margin-bottom: 80px;
    font-size: 20px;
    font-weight: 300;
}

/* About */
.about {
    background: white;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.about-description {
    margin-bottom: 50px;
}

.about-description p {
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 18px;
}

.event-highlights {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.highlight-item {
    padding: 25px;
    background: #f7fafc;
    border-radius: 12px;
    border-left: 4px solid #00f5ff;
}

.highlight-icon {
    font-size: 28px;
    margin-bottom: 15px;
    display: block;
}

.highlight-item h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2d3748;
}

.highlight-item p {
    color: #718096;
    line-height: 1.6;
}

.about-visual {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.event-stats-visual {
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
}

.stat-circle {
    text-align: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(45deg, #667eea, #764ba2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.stat-value {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 5px;
}

.stat-desc {
    font-size: 10px;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.about-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
}

/* Speakers */
.speakers {
    background: #f7fafc;
}

.keynote-speakers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin-bottom: 80px;
}

.speaker-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.speaker-card:hover {
    transform: translateY(-10px);
}

.speaker-card.keynote {
    padding: 0;
}

.speaker-image {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.keynote .speaker-image {
    height: 200px;
}

.speaker-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.speaker-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    padding: 6px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
}

.speaker-info {
    padding: 30px;
}

.speaker-info h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #1a202c;
}

.speaker-title {
    font-size: 16px;
    color: #667eea;
    font-weight: 600;
    margin-bottom: 4px;
}

.speaker-company {
    font-size: 14px;
    color: #718096;
    margin-bottom: 20px;
}

.speaker-bio {
    margin-bottom: 25px;
}

.speaker-bio p {
    color: #4a5568;
    line-height: 1.7;
    font-size: 14px;
}

.speaker-session {
    margin-bottom: 25px;
    padding: 20px;
    background: #f7fafc;
    border-radius: 10px;
}

.speaker-session h4 {
    font-size: 14px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.speaker-session p {
    color: #1a202c;
    font-weight: 600;
    margin-bottom: 10px;
}

.session-time {
    color: #00f5ff;
    font-size: 12px;
    font-weight: 500;
}

.speaker-social {
    display: flex;
    gap: 15px;
}

.social-link {
    color: #718096;
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    transition: color 0.3s;
}

.social-link:hover {
    color: #667eea;
}

.speakers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.speakers-grid .speaker-card {
    padding: 20px;
}

.speakers-grid .speaker-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto 20px;
}

.speakers-grid .speaker-info {
    padding: 0;
    text-align: center;
}

.speakers-cta {
    text-align: center;
}

.speakers-cta p {
    font-size: 18px;
    color: #4a5568;
    margin-bottom: 30px;
}

/* Schedule */
.schedule {
    background: white;
}

.schedule-tabs {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 60px;
    background: #f7fafc;
    padding: 8px;
    border-radius: 50px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.schedule-tab {
    background: transparent;
    border: none;
    padding: 15px 30px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: 600;
    color: #718096;
    cursor: pointer;
    transition: all 0.3s;
}

.schedule-tab.active {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.schedule-day {
    display: none;
}

.schedule-day.active {
    display: block;
}

.day-header {
    text-align: center;
    margin-bottom: 50px;
}

.day-header h3 {
    font-size: 32px;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 10px;
}

.day-header p {
    color: #718096;
    font-size: 18px;
}

.schedule-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.schedule-timeline::before {
    content: '';
    position: absolute;
    left: 150px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #667eea, #764ba2);
}

.timeline-item {
    display: flex;
    margin-bottom: 30px;
    position: relative;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 139px;
    top: 10px;
    width: 25px;
    height: 25px;
    background: white;
    border: 4px solid #667eea;
    border-radius: 50%;
    z-index: 2;
}

.timeline-item.keynote::before {
    background: #667eea;
    border-color: #667eea;
}

.timeline-item.break::before {
    background: #48bb78;
    border-color: #48bb78;
}

.timeline-time {
    width: 120px;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    color: #1a202c;
    font-size: 14px;
    padding-top: 5px;
}

.timeline-content {
    flex: 1;
    margin-left: 50px;
    background: white;
    padding: 25px;
    border-radius: 12px;
    border: 2px solid #e2e8f0;
    transition: all 0.3s;
}

.timeline-item:hover .timeline-content {
    border-color: #667eea;
    transform: translateX(5px);
}

.timeline-item.keynote .timeline-content {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-color: transparent;
}

.timeline-content h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #1a202c;
}

.keynote .timeline-content h4 {
    color: white;
}

.timeline-content p {
    color: #4a5568;
    margin-bottom: 15px;
    line-height: 1.6;
}

.keynote .timeline-content p {
    color: rgba(255, 255, 255, 0.9);
}

.timeline-speaker {
    font-size: 14px;
    color: #667eea;
    font-weight: 600;
    margin-bottom: 8px;
}

.keynote .timeline-speaker {
    color: #ffd700;
}

.timeline-venue {
    font-size: 12px;
    color: #718096;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.keynote .timeline-venue {
    color: rgba(255, 255, 255, 0.8);
}

.parallel-sessions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.session-track {
    background: #f7fafc;
    padding: 20px;
    border-radius: 10px;
    border-left: 4px solid #00f5ff;
}

.session-track h5 {
    font-size: 16px;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 8px;
}

.session-track p {
    color: #4a5568;
    font-size: 14px;
    margin-bottom: 10px;
}

.venue {
    font-size: 12px;
    color: #00f5ff;
    font-weight: 500;
    text-transform: uppercase;
}

/* Sponsors */
.sponsors {
    background: #f7fafc;
}

.sponsors-tiers {
    margin-bottom: 80px;
}

.sponsor-tier {
    margin-bottom: 60px;
}

.sponsor-tier h3 {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 40px;
}

.sponsor-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
}

.sponsor-logos.platinum .sponsor-logo {
    height: 120px;
    width: 300px;
}

.sponsor-logos.gold .sponsor-logo {
    height: 100px;
    width: 250px;
}

.sponsor-logos.silver .sponsor-logo {
    height: 80px;
    width: 200px;
}

.sponsor-logos.bronze .sponsor-logo {
    height: 60px;
    width: 150px;
    background: #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #4a5568;
    font-weight: 600;
    font-size: 14px;
}

.sponsor-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.sponsor-logo:hover img {
    transform: scale(1.05);
}

.sponsor-benefits {
    text-align: center;
    background: white;
    padding: 60px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.sponsor-benefits h3 {
    font-size: 32px;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 20px;
}

.sponsor-benefits p {
    color: #4a5568;
    font-size: 18px;
    margin-bottom: 40px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.benefit-item {
    text-align: center;
}

.benefit-item h4 {
    font-size: 18px;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 10px;
}

.benefit-item p {
    color: #718096;
    font-size: 14px;
    line-height: 1.6;
}

/* Venue */
.venue {
    background: white;
}

.venue-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
}

.venue-info h3 {
    font-size: 32px;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 20px;
}

.venue-description {
    color: #4a5568;
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 40px;
}

.venue-details {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 40px;
}

.detail-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
}

.detail-icon {
    font-size: 24px;
    color: #667eea;
    min-width: 30px;
    margin-top: 2px;
}

.detail-item h4 {
    font-size: 16px;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 5px;
}

.detail-item p {
    color: #4a5568;
    line-height: 1.6;
}

.venue-facilities h4 {
    font-size: 20px;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 20px;
}

.facilities-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.facility-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: #f7fafc;
    border-radius: 8px;
}

.facility-icon {
    font-size: 18px;
    min-width: 20px;
}

.venue-map {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.map-placeholder {
    background: #f7fafc;
    border: 2px dashed #cbd5e1;
    border-radius: 15px;
    padding: 60px 40px;
    text-align: center;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.map-placeholder h4 {
    font-size: 20px;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 10px;
}

.map-placeholder p {
    color: #718096;
    margin-bottom: 20px;
}

.floor-plan {
    background: white;
    padding: 30px;
    border-radius: 15px;
    border: 2px solid #e2e8f0;
}

.floor-plan h4 {
    font-size: 20px;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 20px;
    text-align: center;
}

.floor-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.floor-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #f7fafc;
    border-radius: 8px;
}

.floor-name {
    font-weight: 600;
    color: #1a202c;
}

.floor-capacity {
    color: #667eea;
    font-weight: 500;
    font-size: 14px;
}

/* Registration */
.registration {
    background: #f7fafc;
}

.ticket-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 80px;
}

.ticket-card {
    background: white;
    border-radius: 20px;
    padding: 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    position: relative;
    overflow: hidden;
}

.ticket-card:hover {
    transform: translateY(-10px);
}

.ticket-card.featured {
    border: 3px solid #667eea;
    transform: scale(1.05);
}

.ticket-badge {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    z-index: 2;
}

.ticket-header {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 40px 30px 30px;
    text-align: center;
}

.ticket-header h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
}

.ticket-price {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 5px;
}

.ticket-original {
    font-size: 16px;
    opacity: 0.8;
    text-decoration: line-through;
}

.ticket-content {
    padding: 30px;
}

.ticket-deadline {
    text-align: center;
    color: #e53e3e;
    font-weight: 600;
    margin-bottom: 25px;
    font-size: 14px;
}

.ticket-includes {
    list-style: none;
    margin-bottom: 30px;
}

.ticket-includes li {
    padding: 8px 0;
    font-size: 14px;
    color: #4a5568;
}

.ticket-btn {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 15px;
}

.tickets-remaining {
    text-align: center;
    color: #e53e3e;
    font-size: 12px;
    font-weight: 600;
}

.registration-info {
    background: white;
    padding: 60px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.registration-info h3 {
    font-size: 32px;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 40px;
    text-align: center;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.info-item h4 {
    font-size: 18px;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 10px;
}

.info-item p {
    color: #4a5568;
    line-height: 1.6;
}

/* Footer */
.footer {
    background: #1a202c;
    color: white;
    padding: 80px 0 40px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 60px;
    margin-bottom: 60px;
}

.footer-section h3 {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #00f5ff, #ff6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.footer-section h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 25px;
    color: white;
}

.footer-section p {
    color: #a0aec0;
    line-height: 1.7;
    margin-bottom: 15px;
}

.event-info-footer p {
    margin-bottom: 8px;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 12px;
}

.footer-section a {
    color: #a0aec0;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #00f5ff;
}

.social-links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.social-links a {
    background: #2d3748;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s;
}

.social-links a:hover {
    background: #667eea;
    transform: translateY(-2px);
}

.contact-info-footer p {
    margin-bottom: 8px;
    font-size: 14px;
}

.footer-bottom {
    padding-top: 40px;
    border-top: 1px solid #2d3748;
}

.footer-legal {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.legal-links {
    display: flex;
    gap: 30px;
}

.legal-links a {
    color: #a0aec0;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
}

.legal-links a:hover {
    color: #00f5ff;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .main-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(26, 32, 44, 0.98);
        backdrop-filter: blur(10px);
    }
    
    .main-nav.active {
        display: block;
    }
    
    .main-nav ul {
        flex-direction: column;
        padding: 30px 20px;
        gap: 20px;
    }
    
    .main-nav ul li {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        width: 100%;
    }
    
    .main-nav a {
        padding: 15px 0;
        display: block;
    }
    
    .hero-content h2 {
        font-size: 42px;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .countdown-timer {
        flex-wrap: wrap;
        gap: 15px;
    }
    
    .info-cards {
        grid-template-columns: 1fr;
    }
    
    .about-content,
    .venue-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .keynote-speakers {
        grid-template-columns: 1fr;
    }
    
    .speakers-grid {
        grid-template-columns: 1fr;
    }
    
    .event-highlights,
    .event-stats-visual {
        grid-template-columns: 1fr;
    }
    
    .schedule-timeline::before {
        left: 30px;
    }
    
    .timeline-item::before {
        left: 19px;
    }
    
    .timeline-time {
        width: 80px;
        font-size: 12px;
    }
    
    .timeline-content {
        margin-left: 30px;
    }
    
    .parallel-sessions {
        grid-template-columns: 1fr;
    }
    
    .sponsor-logos {
        flex-direction: column;
        gap: 20px;
    }
    
    .benefits-grid,
    .facilities-grid {
        grid-template-columns: 1fr;
    }
    
    .ticket-types {
        grid-template-columns: 1fr;
    }
    
    .ticket-card.featured {
        transform: none;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .footer-legal {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
    
    .legal-links {
        justify-content: center;
    }
}`,
    js: `// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

if (hamburger && mainNav) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // メニューリンクをクリックしたら閉じる
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
}

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// カウントダウンタイマー
function updateCountdown() {
    const eventDate = new Date('2025-03-15T10:00:00+09:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById('countdown').innerHTML = '<div class="countdown-finished">イベント開催中！</div>';
    }
}

// カウントダウンを1秒ごとに更新
setInterval(updateCountdown, 1000);
updateCountdown();

// スケジュールタブ切り替え
const scheduleTabs = document.querySelectorAll('.schedule-tab');
const scheduleDays = document.querySelectorAll('.schedule-day');

scheduleTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const day = this.getAttribute('data-day');
        
        // アクティブなタブと日程をリセット
        scheduleTabs.forEach(t => t.classList.remove('active'));
        scheduleDays.forEach(d => d.classList.remove('active'));
        
        // 新しいタブと日程をアクティブに
        this.classList.add('active');
        document.getElementById(day).classList.add('active');
    });
});

// チケット購入ボタン
document.querySelectorAll('.ticket-btn').forEach(button => {
    button.addEventListener('click', function() {
        const ticketType = this.closest('.ticket-card').querySelector('h3').textContent;
        alert(ticketType + 'チケットの購入ページへ遷移します（実装予定）');
    });
});

// Googleマップボタン
document.querySelector('.map-placeholder button')?.addEventListener('click', function() {
    alert('Googleマップで東京国際フォーラムの場所を開きます（実装予定）');
});

// スポンサー資料請求
document.querySelector('.sponsor-benefits .btn-outline')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('スポンサーシップ資料請求フォームへ遷移します（実装予定）');
});

// 全スピーカー表示
document.querySelector('.speakers-cta .btn-outline')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('全スピーカー一覧ページへ遷移します（実装予定）');
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素を観察
window.addEventListener('load', () => {
    const animateElements = document.querySelectorAll('.info-card, .speaker-card, .timeline-item, .ticket-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// 統計数字のカウントアニメーション
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 統計セクションが表示されたときのアニメーション
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(statNumber => {
                if (!statNumber.classList.contains('animated')) {
                    const text = statNumber.textContent;
                    const number = parseInt(text.replace(/[^0-9]/g, ''));
                    if (!isNaN(number)) {
                        statNumber.dataset.suffix = text.replace(/[0-9]/g, '');
                        statNumber.textContent = '0';
                        animateValue(statNumber, 0, number, 2000);
                        statNumber.classList.add('animated');
                    }
                }
            });
        }
    });
}, { threshold: 0.5 });

// 統計セクションを観察
document.querySelectorAll('.hero-stats, .event-stats-visual').forEach(stats => {
    statsObserver.observe(stats);
});

// パララックス効果（ヒーロー背景）
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
});

// タイムラインアイテムのクリックイベント
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h4').textContent;
        if (!title.includes('受付') && !title.includes('休憩')) {
            alert('"' + title + '"の詳細情報を表示します（実装予定）');
        }
    });
});

// スピーカーカードのクリックイベント
document.querySelectorAll('.speaker-card').forEach(card => {
    card.addEventListener('click', function() {
        const speakerName = this.querySelector('h3').textContent;
        alert(speakerName + 'のプロフィール詳細ページへ遷移します（実装予定）');
    });
});

// ソーシャルリンクのクリック
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const platform = this.textContent;
        alert(platform + 'プロフィールを開きます（実装予定）');
    });
});

// ページ読み込み時のアニメーション
window.addEventListener('load', function() {
    // ヒーローコンテンツのアニメーション
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1.5s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // イベントバッジのアニメーション
    const eventBadge = document.querySelector('.event-badge');
    if (eventBadge) {
        eventBadge.style.animation = 'pulse 2s infinite';
    }
});

// スクロール時のヘッダー背景変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 32, 44, 0.98)';
    } else {
        header.style.background = 'rgba(26, 32, 44, 0.95)';
    }
});`
  }
}