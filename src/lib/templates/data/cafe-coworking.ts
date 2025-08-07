import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const cafeCoworkingTemplate: WebTemplate = {
  id: 'cafe-coworking',
  title: 'カフェ - コワーキング',
  category: TEMPLATE_CATEGORIES.CAFE,
  description: '仕事と憩いを両立するコワーキングカフェのテンプレート',
  thumbnail: '/template-images/cafe-coworking.jpg',
  features: [
    'ワークスペース特化デザイン',
    'Wi-Fi・電源情報表示',
    '座席予約システム対応',
    'デジタルノマド向け'
  ],
  tags: ['カフェ', 'コワーキング', 'ワークスペース', 'リモートワーク'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Work Café Hub - 新しい働き方の場所</title>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <span class="logo-icon">💻</span>
                    <span class="logo-text">Work Café Hub</span>
                </div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#workspace">Workspace</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#booking">Booking</a></li>
                </ul>
                <div class="nav-cta">
                    <button class="book-now-btn" onclick="openBookingModal()">今すぐ予約</button>
                </div>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">新しい働き方の場所</h1>
                <p class="hero-subtitle">コーヒーを飲みながら、生産性を最大化</p>
                <div class="hero-features">
                    <div class="feature-badge">
                        <span class="badge-icon">📶</span>
                        <span>高速Wi-Fi</span>
                    </div>
                    <div class="feature-badge">
                        <span class="badge-icon">🔌</span>
                        <span>電源完備</span>
                    </div>
                    <div class="feature-badge">
                        <span class="badge-icon">🤫</span>
                        <span>静音エリア</span>
                    </div>
                </div>
                <div class="hero-buttons">
                    <button class="btn-primary" onclick="openBookingModal()">席を予約する</button>
                    <button class="btn-secondary" onclick="scrollToWorkspace()">詳細を見る</button>
                </div>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1521736947700-36f6b61f2fe8?w=800&h=600&fit=crop" alt="コワーキングスペース">
                <div class="live-status">
                    <div class="status-item">
                        <span class="status-label">現在の利用率</span>
                        <div class="status-bar">
                            <div class="status-fill" style="width: 65%"></div>
                        </div>
                        <span class="status-text">65%</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="workspace" class="workspace">
        <div class="container">
            <h2 class="section-title">Work Spaces</h2>
            <div class="workspace-grid">
                <div class="workspace-card">
                    <div class="workspace-image">
                        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop" alt="オープンワークスペース">
                        <div class="availability-badge available">利用可能</div>
                    </div>
                    <div class="workspace-info">
                        <h3>オープンワークスペース</h3>
                        <p>開放的な空間で集中作業に最適。大きなテーブルでゆったりと作業できます。</p>
                        <div class="workspace-features">
                            <span class="feature-tag">24席</span>
                            <span class="feature-tag">Wi-Fi</span>
                            <span class="feature-tag">電源</span>
                            <span class="feature-tag">モニター貸出</span>
                        </div>
                        <div class="workspace-price">
                            <span class="price">¥500</span>
                            <span class="duration">/時間</span>
                        </div>
                    </div>
                </div>
                
                <div class="workspace-card">
                    <div class="workspace-image">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" alt="サイレントワークエリア">
                        <div class="availability-badge busy">混雑中</div>
                    </div>
                    <div class="workspace-info">
                        <h3>サイレントワークエリア</h3>
                        <p>静寂に包まれた集中特化エリア。通話禁止で深い集中作業が可能です。</p>
                        <div class="workspace-features">
                            <span class="feature-tag">12席</span>
                            <span class="feature-tag">Wi-Fi</span>
                            <span class="feature-tag">電源</span>
                            <span class="feature-tag">通話禁止</span>
                        </div>
                        <div class="workspace-price">
                            <span class="price">¥700</span>
                            <span class="duration">/時間</span>
                        </div>
                    </div>
                </div>
                
                <div class="workspace-card">
                    <div class="workspace-image">
                        <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" alt="プライベートブース">
                        <div class="availability-badge available">利用可能</div>
                    </div>
                    <div class="workspace-info">
                        <h3>プライベートブース</h3>
                        <p>完全個室でWeb会議や電話対応も可能。プライバシーを重視する方に。</p>
                        <div class="workspace-features">
                            <span class="feature-tag">6室</span>
                            <span class="feature-tag">Wi-Fi</span>
                            <span class="feature-tag">電源</span>
                            <span class="feature-tag">防音</span>
                        </div>
                        <div class="workspace-price">
                            <span class="price">¥1,200</span>
                            <span class="duration">/時間</span>
                        </div>
                    </div>
                </div>
                
                <div class="workspace-card">
                    <div class="workspace-image">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop" alt="ミーティングルーム">
                        <div class="availability-badge reserved">予約済</div>
                    </div>
                    <div class="workspace-info">
                        <h3>ミーティングルーム</h3>
                        <p>チームでの打ち合わせや会議に最適。プロジェクターとホワイトボード完備。</p>
                        <div class="workspace-features">
                            <span class="feature-tag">4-8名</span>
                            <span class="feature-tag">Wi-Fi</span>
                            <span class="feature-tag">プロジェクター</span>
                            <span class="feature-tag">ホワイトボード</span>
                        </div>
                        <div class="workspace-price">
                            <span class="price">¥2,000</span>
                            <span class="duration">/時間</span>
                        </div>
                    </div>
                </div>
                
                <div class="workspace-card">
                    <div class="workspace-image">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" alt="カフェラウンジ">
                        <div class="availability-badge available">利用可能</div>
                    </div>
                    <div class="workspace-info">
                        <h3>カフェラウンジ</h3>
                        <p>リラックスした雰囲気で軽作業やブレインストーミングに。ソファ席でくつろぎながら。</p>
                        <div class="workspace-features">
                            <span class="feature-tag">20席</span>
                            <span class="feature-tag">Wi-Fi</span>
                            <span class="feature-tag">電源</span>
                            <span class="feature-tag">ソファ席</span>
                        </div>
                        <div class="workspace-price">
                            <span class="price">¥400</span>
                            <span class="duration">/時間</span>
                        </div>
                    </div>
                </div>
                
                <div class="workspace-card">
                    <div class="workspace-image">
                        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop" alt="テラス席">
                        <div class="availability-badge available">利用可能</div>
                    </div>
                    <div class="workspace-info">
                        <h3>テラス席</h3>
                        <p>開放的なテラスで自然を感じながら作業。天気の良い日におすすめです。</p>
                        <div class="workspace-features">
                            <span class="feature-tag">16席</span>
                            <span class="feature-tag">Wi-Fi</span>
                            <span class="feature-tag">電源</span>
                            <span class="feature-tag">屋外</span>
                        </div>
                        <div class="workspace-price">
                            <span class="price">¥600</span>
                            <span class="duration">/時間</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Services & Amenities</h2>
            <div class="services-grid">
                <div class="service-item">
                    <div class="service-icon">📶</div>
                    <h3>高速Wi-Fi</h3>
                    <p>光回線による安定した高速インターネット接続</p>
                    <div class="service-detail">
                        <span>ダウンロード: 1Gbps</span>
                        <span>アップロード: 1Gbps</span>
                    </div>
                </div>
                <div class="service-item">
                    <div class="service-icon">🔌</div>
                    <h3>電源完備</h3>
                    <p>すべての席に電源コンセントとUSBポートを完備</p>
                    <div class="service-detail">
                        <span>AC電源: 各席2口</span>
                        <span>USB-A/C: 各席4口</span>
                    </div>
                </div>
                <div class="service-item">
                    <div class="service-icon">🖥️</div>
                    <h3>外部モニター</h3>
                    <p>27インチ4Kモニターの無料貸出サービス</p>
                    <div class="service-detail">
                        <span>27インチ 4K対応</span>
                        <span>USB-C/HDMI接続</span>
                    </div>
                </div>
                <div class="service-item">
                    <div class="service-icon">🖨️</div>
                    <h3>プリンター</h3>
                    <p>高画質カラープリンター・スキャナー完備</p>
                    <div class="service-detail">
                        <span>カラー印刷: ¥20/枚</span>
                        <span>モノクロ印刷: ¥10/枚</span>
                    </div>
                </div>
                <div class="service-item">
                    <div class="service-icon">📱</div>
                    <h3>充電ステーション</h3>
                    <p>各種デバイス対応の充電ステーション</p>
                    <div class="service-detail">
                        <span>iPhone/Android対応</span>
                        <span>ワイヤレス充電対応</span>
                    </div>
                </div>
                <div class="service-item">
                    <div class="service-icon">🗄️</div>
                    <h3>ロッカー</h3>
                    <p>貴重品や荷物の保管用ロッカー</p>
                    <div class="service-detail">
                        <span>大: ¥300/日</span>
                        <span>小: ¥200/日</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="pricing" class="pricing">
        <div class="container">
            <h2 class="section-title">Pricing Plans</h2>
            <div class="pricing-tabs">
                <button class="pricing-tab active" onclick="showPricingTab('hourly')">時間利用</button>
                <button class="pricing-tab" onclick="showPricingTab('daily')">1日パス</button>
                <button class="pricing-tab" onclick="showPricingTab('monthly')">月額プラン</button>
            </div>
            
            <div id="hourly" class="pricing-content active">
                <div class="pricing-grid">
                    <div class="pricing-card">
                        <h3>ベーシック</h3>
                        <div class="price-display">
                            <span class="price">¥500</span>
                            <span class="duration">/時間</span>
                        </div>
                        <ul class="pricing-features">
                            <li>オープンワークスペース利用</li>
                            <li>高速Wi-Fi</li>
                            <li>電源・USB完備</li>
                            <li>ドリンクバー</li>
                        </ul>
                    </div>
                    <div class="pricing-card premium">
                        <div class="popular-badge">人気</div>
                        <h3>プレミアム</h3>
                        <div class="price-display">
                            <span class="price">¥800</span>
                            <span class="duration">/時間</span>
                        </div>
                        <ul class="pricing-features">
                            <li>全エリア利用可能</li>
                            <li>外部モニター無料</li>
                            <li>プリンター利用込み</li>
                            <li>軽食サービス</li>
                            <li>ロッカー利用</li>
                        </ul>
                    </div>
                    <div class="pricing-card">
                        <h3>プライベート</h3>
                        <div class="price-display">
                            <span class="price">¥1,500</span>
                            <span class="duration">/時間</span>
                        </div>
                        <ul class="pricing-features">
                            <li>個室ブース利用</li>
                            <li>専用モニター</li>
                            <li>防音環境</li>
                            <li>Web会議対応</li>
                            <li>コンシェルジュサービス</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div id="daily" class="pricing-content">
                <div class="pricing-grid">
                    <div class="pricing-card">
                        <h3>デイパス</h3>
                        <div class="price-display">
                            <span class="price">¥2,500</span>
                            <span class="duration">/日</span>
                        </div>
                        <ul class="pricing-features">
                            <li>9:00-21:00 利用可能</li>
                            <li>全エリア利用</li>
                            <li>ドリンク・軽食込み</li>
                            <li>プリンター利用込み</li>
                            <li>ロッカー利用</li>
                        </ul>
                    </div>
                    <div class="pricing-card premium">
                        <div class="popular-badge">お得</div>
                        <h3>ウィークパス</h3>
                        <div class="price-display">
                            <span class="price">¥12,000</span>
                            <span class="duration">/週</span>
                        </div>
                        <ul class="pricing-features">
                            <li>7日間連続利用</li>
                            <li>プライベートブース優先</li>
                            <li>専用ロッカー</li>
                            <li>コーヒー豆持ち帰り</li>
                            <li>イベント参加無料</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div id="monthly" class="pricing-content">
                <div class="pricing-grid">
                    <div class="pricing-card">
                        <h3>スタンダード</h3>
                        <div class="price-display">
                            <span class="price">¥35,000</span>
                            <span class="duration">/月</span>
                        </div>
                        <ul class="pricing-features">
                            <li>平日 9:00-18:00</li>
                            <li>固定席利用</li>
                            <li>ドリンク飲み放題</li>
                            <li>郵便物受取サービス</li>
                            <li>会議室月10時間無料</li>
                        </ul>
                    </div>
                    <div class="pricing-card premium">
                        <div class="popular-badge">推奨</div>
                        <h3>フルタイム</h3>
                        <div class="price-display">
                            <span class="price">¥55,000</span>
                            <span class="duration">/月</span>
                        </div>
                        <ul class="pricing-features">
                            <li>24時間365日利用</li>
                            <li>専用固定席</li>
                            <li>住所利用可能</li>
                            <li>法人登記対応</li>
                            <li>会議室無制限利用</li>
                            <li>専用ロッカー</li>
                        </ul>
                    </div>
                    <div class="pricing-card">
                        <h3>プレミアム</h3>
                        <div class="price-display">
                            <span class="price">¥85,000</span>
                            <span class="duration">/月</span>
                        </div>
                        <ul class="pricing-features">
                            <li>個室オフィス利用</li>
                            <li>秘書サービス</li>
                            <li>専用電話番号</li>
                            <li>来客対応サービス</li>
                            <li>VIPラウンジアクセス</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="booking" class="booking">
        <div class="container">
            <h2 class="section-title">Location & Access</h2>
            <div class="booking-content">
                <div class="location-info">
                    <h3>Work Café Hub</h3>
                    <div class="location-details">
                        <div class="detail-item">
                            <span class="detail-icon">📍</span>
                            <div>
                                <strong>住所</strong>
                                <p>〒150-0002 東京都渋谷区渋谷2-24-12<br>スクランブルスクエア15F</p>
                            </div>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🚇</span>
                            <div>
                                <strong>アクセス</strong>
                                <p>JR渋谷駅より徒歩3分<br>東京メトロ・東急線各線直結</p>
                            </div>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🕒</span>
                            <div>
                                <strong>営業時間</strong>
                                <p>平日: 7:00 - 23:00<br>土日祝: 8:00 - 22:00</p>
                            </div>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📞</span>
                            <div>
                                <strong>お問い合わせ</strong>
                                <p>03-1234-5678<br>info@workcafehub.jp</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="booking-widget">
                    <h4>席の予約・空き状況確認</h4>
                    <div class="booking-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label>利用日</label>
                                <input type="date" id="bookingDate">
                            </div>
                            <div class="form-group">
                                <label>時間</label>
                                <select id="bookingTime">
                                    <option>9:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>エリア</label>
                            <select id="workspaceType">
                                <option>オープンワークスペース</option>
                                <option>サイレントワークエリア</option>
                                <option>プライベートブース</option>
                                <option>ミーティングルーム</option>
                                <option>カフェラウンジ</option>
                                <option>テラス席</option>
                            </select>
                        </div>
                        <button class="check-availability-btn" onclick="checkAvailability()">
                            空き状況を確認
                        </button>
                    </div>
                    <div id="availabilityResult" class="availability-result" style="display: none;">
                        <div class="result-header">
                            <h5>空き状況</h5>
                            <span class="available-count">12席利用可能</span>
                        </div>
                        <button class="book-seat-btn" onclick="openBookingModal()">この時間で予約する</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 予約モーダル -->
    <div id="bookingModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>席の予約</h3>
                <button class="close-modal" onclick="closeBookingModal()">&times;</button>
            </div>
            <div class="modal-body">
                <form id="bookingForm">
                    <div class="form-group">
                        <label>お名前 <span class="required">*</span></label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label>メールアドレス <span class="required">*</span></label>
                        <input type="email" required>
                    </div>
                    <div class="form-group">
                        <label>電話番号</label>
                        <input type="tel">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>利用日 <span class="required">*</span></label>
                            <input type="date" required>
                        </div>
                        <div class="form-group">
                            <label>開始時間 <span class="required">*</span></label>
                            <select required>
                                <option>9:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                                <option>14:00</option>
                                <option>15:00</option>
                                <option>16:00</option>
                                <option>17:00</option>
                                <option>18:00</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>利用時間 <span class="required">*</span></label>
                        <select required>
                            <option>1時間</option>
                            <option>2時間</option>
                            <option>3時間</option>
                            <option>4時間</option>
                            <option>半日（4時間以上）</option>
                            <option>1日（8時間以上）</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>エリア <span class="required">*</span></label>
                        <select required>
                            <option>オープンワークスペース - ¥500/時間</option>
                            <option>サイレントワークエリア - ¥700/時間</option>
                            <option>プライベートブース - ¥1,200/時間</option>
                            <option>ミーティングルーム - ¥2,000/時間</option>
                            <option>カフェラウンジ - ¥400/時間</option>
                            <option>テラス席 - ¥600/時間</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>特別なご要望</label>
                        <textarea placeholder="モニター貸出希望、静音環境希望など"></textarea>
                    </div>
                    <div class="booking-summary">
                        <h4>予約内容</h4>
                        <div class="summary-item">
                            <span>利用日時:</span>
                            <span id="summaryDateTime">-</span>
                        </div>
                        <div class="summary-item">
                            <span>エリア:</span>
                            <span id="summaryArea">-</span>
                        </div>
                        <div class="summary-item">
                            <span>利用時間:</span>
                            <span id="summaryDuration">-</span>
                        </div>
                        <div class="summary-item total">
                            <span>合計金額:</span>
                            <span id="summaryTotal">¥0</span>
                        </div>
                    </div>
                    <button type="submit" class="submit-booking-btn">予約を確定する</button>
                </form>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>Work Café Hub</h3>
                    <p>新しい働き方の場所</p>
                </div>
                <div class="footer-links">
                    <div class="link-group">
                        <h4>サービス</h4>
                        <ul>
                            <li><a href="#workspace">ワークスペース</a></li>
                            <li><a href="#services">サービス</a></li>
                            <li><a href="#pricing">料金プラン</a></li>
                        </ul>
                    </div>
                    <div class="link-group">
                        <h4>サポート</h4>
                        <ul>
                            <li><a href="#">利用規約</a></li>
                            <li><a href="#">プライバシーポリシー</a></li>
                            <li><a href="#">よくある質問</a></li>
                        </ul>
                    </div>
                    <div class="link-group">
                        <h4>お問い合わせ</h4>
                        <ul>
                            <li>📞 03-1234-5678</li>
                            <li>✉️ info@workcafehub.jp</li>
                            <li>📍 東京都渋谷区渋谷2-24-12</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Work Café Hub. All rights reserved.</p>
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

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #2d3748;
    background-color: #f7fafc;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.navbar {
    padding: 1rem 0;
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
    gap: 0.5rem;
}

.logo-icon {
    font-size: 1.5rem;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3182ce;
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
    background-color: #3182ce;
    margin: 3px 0;
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: #4a5568;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #3182ce;
}

.book-now-btn {
    background: linear-gradient(135deg, #3182ce, #2c5aa0);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.book-now-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(49, 130, 206, 0.4);
}

/* Hero Section */
.hero {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, #edf2f7 0%, #e2e8f0 100%);
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.3rem;
    color: #4a5568;
    margin-bottom: 2rem;
}

.hero-features {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.feature-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.badge-icon {
    font-size: 1.1rem;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
}

.btn-primary {
    background: linear-gradient(135deg, #3182ce, #2c5aa0);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1rem;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(49, 130, 206, 0.4);
}

.btn-secondary {
    background: white;
    color: #3182ce;
    border: 2px solid #3182ce;
    padding: 1rem 2rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1rem;
}

.btn-secondary:hover {
    background: #3182ce;
    color: white;
    transform: translateY(-3px);
}

.hero-image {
    position: relative;
}

.hero-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.live-status {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 10px;
}

.status-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.status-label {
    font-size: 0.9rem;
    font-weight: 500;
    color: #4a5568;
}

.status-bar {
    flex: 1;
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
}

.status-fill {
    height: 100%;
    background: linear-gradient(90deg, #48bb78, #38a169);
    transition: width 0.3s;
}

.status-text {
    font-weight: 600;
    color: #38a169;
}

/* Workspace Section */
.workspace {
    padding: 100px 0;
    background: white;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 3rem;
}

.workspace-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.workspace-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    transition: all 0.3s;
    border: 1px solid #e2e8f0;
}

.workspace-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.workspace-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.workspace-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.workspace-card:hover .workspace-image img {
    transform: scale(1.05);
}

.availability-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.availability-badge.available {
    background: #48bb78;
    color: white;
}

.availability-badge.busy {
    background: #ed8936;
    color: white;
}

.availability-badge.reserved {
    background: #e53e3e;
    color: white;
}

.workspace-info {
    padding: 1.5rem;
}

.workspace-info h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 0.5rem;
}

.workspace-info p {
    color: #4a5568;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.workspace-features {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.feature-tag {
    background: #edf2f7;
    color: #4a5568;
    padding: 0.3rem 0.6rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

.workspace-price {
    display: flex;
    align-items: baseline;
    gap: 0.3rem;
}

.price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3182ce;
}

.duration {
    font-size: 0.9rem;
    color: #718096;
}

/* Services Section */
.services {
    padding: 100px 0;
    background: linear-gradient(135deg, #edf2f7 0%, #e2e8f0 100%);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.service-item {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    transition: transform 0.3s;
}

.service-item:hover {
    transform: translateY(-5px);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.service-item h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 1rem;
}

.service-item p {
    color: #4a5568;
    margin-bottom: 1rem;
}

.service-detail {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    font-size: 0.9rem;
    color: #718096;
}

/* Pricing Section */
.pricing {
    padding: 100px 0;
    background: white;
}

.pricing-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 3rem 0;
}

.pricing-tab {
    padding: 0.8rem 1.5rem;
    background: transparent;
    color: #4a5568;
    border: 2px solid #e2e8f0;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
}

.pricing-tab.active,
.pricing-tab:hover {
    background: #3182ce;
    color: white;
    border-color: #3182ce;
}

.pricing-content {
    display: none;
}

.pricing-content.active {
    display: block;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.pricing-card {
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    position: relative;
    transition: all 0.3s;
}

.pricing-card.premium {
    border-color: #3182ce;
    transform: scale(1.05);
}

.pricing-card:hover {
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #3182ce, #2c5aa0);
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.pricing-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 1rem;
}

.price-display {
    margin-bottom: 2rem;
}

.price-display .price {
    font-size: 2.5rem;
    font-weight: 700;
    color: #3182ce;
}

.price-display .duration {
    font-size: 1rem;
    color: #718096;
}

.pricing-features {
    list-style: none;
    margin-bottom: 2rem;
}

.pricing-features li {
    padding: 0.5rem 0;
    color: #4a5568;
    position: relative;
    padding-left: 1.5rem;
}

.pricing-features li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #48bb78;
    font-weight: bold;
}

/* Booking Section */
.booking {
    padding: 100px 0;
    background: linear-gradient(135deg, #edf2f7 0%, #e2e8f0 100%);
}

.booking-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 3rem;
}

.location-info h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 2rem;
}

.location-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.detail-item {
    display: flex;
    gap: 1rem;
    align-items: start;
}

.detail-icon {
    font-size: 1.2rem;
    margin-top: 0.2rem;
}

.detail-item strong {
    color: #3182ce;
    margin-bottom: 0.5rem;
    display: block;
}

.detail-item p {
    color: #4a5568;
    line-height: 1.6;
}

.booking-widget {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.booking-widget h4 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 2rem;
    text-align: center;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    color: #4a5568;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #3182ce;
}

.check-availability-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #3182ce, #2c5aa0);
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.check-availability-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(49, 130, 206, 0.4);
}

.availability-result {
    margin-top: 1.5rem;
    padding: 1rem;
    background: #f0fff4;
    border: 2px solid #48bb78;
    border-radius: 10px;
}

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.result-header h5 {
    color: #1a202c;
}

.available-count {
    color: #48bb78;
    font-weight: 600;
}

.book-seat-btn {
    width: 100%;
    padding: 0.8rem;
    background: #48bb78;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.book-seat-btn:hover {
    background: #38a169;
    transform: translateY(-2px);
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
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
}

.modal-content {
    background-color: white;
    margin: 2% auto;
    border-radius: 20px;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 25px 50px rgba(0,0,0,0.25);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem 0;
}

.modal-header h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a202c;
}

.close-modal {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #718096;
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.close-modal:hover {
    background: #edf2f7;
    color: #4a5568;
}

.modal-body {
    padding: 2rem;
}

.required {
    color: #e53e3e;
}

.booking-summary {
    background: #f7fafc;
    padding: 1.5rem;
    border-radius: 10px;
    margin: 2rem 0;
}

.booking-summary h4 {
    color: #1a202c;
    margin-bottom: 1rem;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: #4a5568;
}

.summary-item.total {
    border-top: 1px solid #e2e8f0;
    padding-top: 0.5rem;
    margin-top: 1rem;
    font-weight: 600;
    color: #1a202c;
}

.submit-booking-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #3182ce, #2c5aa0);
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1rem;
}

.submit-booking-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(49, 130, 206, 0.4);
}

/* Footer */
.footer {
    background: #1a202c;
    color: white;
    padding: 60px 0 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-brand h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3182ce;
    margin-bottom: 0.5rem;
}

.footer-brand p {
    color: #a0aec0;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.link-group h4 {
    color: white;
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
    color: #a0aec0;
    text-decoration: none;
    transition: color 0.3s;
}

.link-group a:hover {
    color: #3182ce;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #2d3748;
}

.footer-bottom p {
    color: #a0aec0;
    font-size: 0.9rem;
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
        background: rgba(255, 255, 255, 0.98);
        flex-direction: column;
        padding: 2rem 0;
        backdrop-filter: blur(20px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .nav-cta {
        display: none;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .workspace-grid {
        grid-template-columns: 1fr;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .pricing-grid {
        grid-template-columns: 1fr;
    }
    
    .pricing-card.premium {
        transform: none;
    }
    
    .booking-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
    }
    
    .footer-links {
        grid-template-columns: 1fr;
    }
    
    .modal-content {
        width: 95%;
        margin: 5% auto;
    }
    
    .section-title {
        font-size: 2rem;
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

// ワークスペースセクションへのスクロール
function scrollToWorkspace() {
    const target = document.querySelector('#workspace');
    if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// 料金タブ切り替え
function showPricingTab(tabName) {
    // すべてのタブコンテンツを非表示
    document.querySelectorAll('.pricing-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // すべてのタブボタンからactiveクラスを削除
    document.querySelectorAll('.pricing-tab').forEach(button => {
        button.classList.remove('active');
    });
    
    // 選択されたタブコンテンツを表示
    document.getElementById(tabName).classList.add('active');
    
    // クリックされたタブボタンにactiveクラスを追加
    event.target.classList.add('active');
}

// 空き状況確認
function checkAvailability() {
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const workspace = document.getElementById('workspaceType').value;
    
    if (!date || !time || !workspace) {
        alert('すべての項目を入力してください。');
        return;
    }
    
    // 模拟的な空き状況チェック（実際にはAPIコールを行う）
    setTimeout(() => {
        document.getElementById('availabilityResult').style.display = 'block';
        
        // ランダムな空き状況を生成
        const availableSeats = Math.floor(Math.random() * 20) + 5;
        document.querySelector('.available-count').textContent = \`\${availableSeats}席利用可能\`;
    }, 1000);
}

// 予約モーダルの開閉
function openBookingModal() {
    document.getElementById('bookingModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// モーダル外クリックで閉じる
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        closeBookingModal();
    }
}

// 予約フォーム送信処理
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // フォームデータの取得と検証
    const formData = new FormData(this);
    
    // 予約内容のサマリー更新
    updateBookingSummary();
    
    // 実際の予約処理（APIコール）をここに実装
    alert('予約が完了しました。確認メールをお送りいたします。');
    closeBookingModal();
});

// 予約サマリーの更新
function updateBookingSummary() {
    // この関数では予約内容を動的に更新する
    // 実際の実装では、フォームの値を監視して自動更新する
}

// 利用率の動的更新（リアルタイム風）
function updateOccupancyRate() {
    const statusFill = document.querySelector('.status-fill');
    const statusText = document.querySelector('.status-text');
    
    if (statusFill && statusText) {
        const newRate = Math.floor(Math.random() * 40) + 40; // 40-80%の範囲
        statusFill.style.width = newRate + '%';
        statusText.textContent = newRate + '%';
    }
}

// 5分ごとに利用率を更新
setInterval(updateOccupancyRate, 300000);

// ワークスペースカードのホバーエフェクト
document.querySelectorAll('.workspace-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px)';
    });
});

// 初期化時の処理
document.addEventListener('DOMContentLoaded', function() {
    // 今日の日付をデフォルトに設定
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.value = today;
        input.min = today;
    });
    
    // ヘッダーのスクロール効果
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const header = document.querySelector('.header');
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
});`
  }
}