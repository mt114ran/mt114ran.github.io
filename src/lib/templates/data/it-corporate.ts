import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const itCorporateTemplate: WebTemplate = {
  id: 'it-corporate',
  title: 'IT企業 - コーポレート',
  category: TEMPLATE_CATEGORIES.IT,
  description: '信頼性と専門性を重視した大手IT企業向けコーポレートサイトテンプレート',
  thumbnail: '/template-images/it-corporate.jpg',
  features: [
    '企業概要と沿革',
    'サービス・ソリューション紹介',
    'ニュース・IR情報',
    '採用情報',
    'CSR・サステナビリティ'
  ],
  tags: ['企業', 'コーポレート', 'IT', 'エンタープライズ', '信頼性'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Solutions Corp - ITで社会を変革する</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1>DSC</h1>
                    <span class="company-name">Digital Solutions Corp</span>
                </div>
                <button class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav class="main-nav" id="main-nav">
                    <ul>
                        <li class="nav-item dropdown">
                            <a href="#about">企業情報</a>
                            <ul class="dropdown-menu">
                                <li><a href="#company">会社概要</a></li>
                                <li><a href="#history">沿革</a></li>
                                <li><a href="#philosophy">企業理念</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#services">事業・サービス</a>
                            <ul class="dropdown-menu">
                                <li><a href="#consulting">ITコンサルティング</a></li>
                                <li><a href="#development">システム開発</a></li>
                                <li><a href="#cloud">クラウドサービス</a></li>
                            </ul>
                        </li>
                        <li><a href="#news">ニュース</a></li>
                        <li><a href="#ir">IR情報</a></li>
                        <li><a href="#careers">採用情報</a></li>
                        <li><a href="#contact">お問い合わせ</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-slider">
            <div class="hero-slide active">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop" alt="オフィス">
                <div class="hero-overlay"></div>
                <div class="container">
                    <div class="hero-content">
                        <h2>デジタル技術で<br>社会課題を解決する</h2>
                        <p>40年の実績と信頼。最先端のIT技術で、お客様のビジネス変革をサポートします。</p>
                        <div class="hero-buttons">
                            <a href="#services" class="btn-primary">サービス一覧</a>
                            <a href="#contact" class="btn-outline">お問い合わせ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="company-overview">
        <div class="container">
            <div class="overview-content">
                <div class="overview-text">
                    <h2>信頼と革新の40年</h2>
                    <p>1984年の創業以来、Digital Solutions Corpは日本のIT業界をリードし続けています。大手企業から官公庁まで、幅広いお客様のデジタル変革を支援し、持続可能な社会の実現に貢献しています。</p>
                    <div class="company-stats">
                        <div class="stat">
                            <div class="stat-number">2,500+</div>
                            <div class="stat-label">導入実績</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">8,000+</div>
                            <div class="stat-label">従業員数</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">40</div>
                            <div class="stat-label">事業年数</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">15</div>
                            <div class="stat-label">国・地域</div>
                        </div>
                    </div>
                </div>
                <div class="overview-visual">
                    <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" alt="チームワーク">
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">事業・サービス</h2>
            <p class="section-subtitle">お客様のあらゆるニーズにお応えする包括的なITソリューション</p>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop" alt="コンサルティング">
                    </div>
                    <h3>ITコンサルティング</h3>
                    <p>戦略立案から実行支援まで、お客様のビジネス変革を総合的にサポートします。</p>
                    <ul class="service-features">
                        <li>デジタル戦略策定</li>
                        <li>業務プロセス改革</li>
                        <li>IT投資最適化</li>
                        <li>リスク管理</li>
                    </ul>
                    <a href="#" class="service-link">詳細を見る →</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop" alt="システム開発">
                    </div>
                    <h3>システム開発</h3>
                    <p>基幹系から情報系まで、あらゆるシステムの設計・開発・運用を行います。</p>
                    <ul class="service-features">
                        <li>Webアプリケーション</li>
                        <li>モバイルアプリ</li>
                        <li>基幹システム</li>
                        <li>データベース設計</li>
                    </ul>
                    <a href="#" class="service-link">詳細を見る →</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=100&h=100&fit=crop" alt="クラウド">
                    </div>
                    <h3>クラウドサービス</h3>
                    <p>AWS、Azure、Google Cloudを活用したクラウドインフラの構築・移行を支援します。</p>
                    <ul class="service-features">
                        <li>クラウド移行</li>
                        <li>インフラ設計</li>
                        <li>セキュリティ対策</li>
                        <li>運用自動化</li>
                    </ul>
                    <a href="#" class="service-link">詳細を見る →</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=100&h=100&fit=crop" alt="AI・データ分析">
                    </div>
                    <h3>AI・データ分析</h3>
                    <p>機械学習とビッグデータ技術で、データから価値を創出します。</p>
                    <ul class="service-features">
                        <li>機械学習モデル構築</li>
                        <li>データ可視化</li>
                        <li>予測分析</li>
                        <li>自然言語処理</li>
                    </ul>
                    <a href="#" class="service-link">詳細を見る →</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop" alt="セキュリティ">
                    </div>
                    <h3>サイバーセキュリティ</h3>
                    <p>包括的なセキュリティソリューションで、企業の重要な資産を守ります。</p>
                    <ul class="service-features">
                        <li>脆弱性診断</li>
                        <li>SOC運用</li>
                        <li>インシデント対応</li>
                        <li>教育研修</li>
                    </ul>
                    <a href="#" class="service-link">詳細を見る →</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop" alt="保守運用">
                    </div>
                    <h3>保守・運用</h3>
                    <p>24時間365日のシステム監視により、安定稼働をお約束します。</p>
                    <ul class="service-features">
                        <li>24/7監視</li>
                        <li>障害対応</li>
                        <li>性能改善</li>
                        <li>バックアップ</li>
                    </ul>
                    <a href="#" class="service-link">詳細を見る →</a>
                </div>
            </div>
        </div>
    </section>

    <section id="news" class="news">
        <div class="container">
            <h2 class="section-title">ニュース</h2>
            <div class="news-content">
                <div class="news-list">
                    <article class="news-item">
                        <time class="news-date">2025.01.15</time>
                        <span class="news-category">プレスリリース</span>
                        <h3><a href="#">新データセンター開設について</a></h3>
                        <p>関西地区における事業拡大に伴い、大阪に新データセンターを開設いたします。</p>
                    </article>
                    
                    <article class="news-item">
                        <time class="news-date">2025.01.08</time>
                        <span class="news-category">サービス</span>
                        <h3><a href="#">AIチャットボットサービス正式リリース</a></h3>
                        <p>自然言語処理技術を活用したエンタープライズ向けチャットボットサービスの提供を開始しました。</p>
                    </article>
                    
                    <article class="news-item">
                        <time class="news-date">2024.12.25</time>
                        <span class="news-category">受賞</span>
                        <h3><a href="#">「DX推進企業大賞」を受賞</a></h3>
                        <p>当社のデジタル変革への取り組みが評価され、経済産業省主催の「DX推進企業大賞」を受賞いたしました。</p>
                    </article>
                    
                    <article class="news-item">
                        <time class="news-date">2024.12.20</time>
                        <span class="news-category">イベント</span>
                        <h3><a href="#">年末年始休業のお知らせ</a></h3>
                        <p>誠に勝手ながら、12月29日（金）から1月3日（水）まで年末年始休業とさせていただきます。</p>
                    </article>
                    
                    <article class="news-item">
                        <time class="news-date">2024.12.15</time>
                        <span class="news-category">採用</span>
                        <h3><a href="#">2025年度新卒採用開始</a></h3>
                        <p>2025年度新卒採用のエントリー受付を開始いたします。皆様のご応募をお待ちしております。</p>
                    </article>
                </div>
                
                <aside class="news-sidebar">
                    <div class="sidebar-section">
                        <h3>カテゴリー</h3>
                        <ul class="category-list">
                            <li><a href="#">すべて <span>(25)</span></a></li>
                            <li><a href="#">プレスリリース <span>(8)</span></a></li>
                            <li><a href="#">サービス <span>(6)</span></a></li>
                            <li><a href="#">受賞 <span>(4)</span></a></li>
                            <li><a href="#">イベント <span>(4)</span></a></li>
                            <li><a href="#">採用 <span>(3)</span></a></li>
                        </ul>
                    </div>
                    
                    <div class="sidebar-section">
                        <h3>月別アーカイブ</h3>
                        <ul class="archive-list">
                            <li><a href="#">2025年1月 <span>(2)</span></a></li>
                            <li><a href="#">2024年12月 <span>(4)</span></a></li>
                            <li><a href="#">2024年11月 <span>(3)</span></a></li>
                            <li><a href="#">2024年10月 <span>(5)</span></a></li>
                        </ul>
                    </div>
                    
                    <div class="sidebar-section">
                        <h3>関連リンク</h3>
                        <ul class="related-links">
                            <li><a href="#">IR情報</a></li>
                            <li><a href="#">採用情報</a></li>
                            <li><a href="#">サステナビリティ</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
            
            <div class="news-actions">
                <a href="#" class="btn-outline">ニュース一覧を見る</a>
            </div>
        </div>
    </section>

    <section id="ir" class="ir">
        <div class="container">
            <h2 class="section-title">IR情報</h2>
            <p class="section-subtitle">投資家の皆様へ</p>
            
            <div class="ir-content">
                <div class="ir-highlights">
                    <div class="highlight-item">
                        <h3>売上高</h3>
                        <div class="highlight-value">1,250億円</div>
                        <div class="highlight-change positive">+12.5%</div>
                        <p>前年同期比</p>
                    </div>
                    
                    <div class="highlight-item">
                        <h3>営業利益</h3>
                        <div class="highlight-value">180億円</div>
                        <div class="highlight-change positive">+8.3%</div>
                        <p>前年同期比</p>
                    </div>
                    
                    <div class="highlight-item">
                        <h3>株価</h3>
                        <div class="highlight-value">3,850円</div>
                        <div class="highlight-change negative">-2.1%</div>
                        <p>前日比</p>
                    </div>
                    
                    <div class="highlight-item">
                        <h3>配当</h3>
                        <div class="highlight-value">95円</div>
                        <div class="highlight-change positive">+5円</div>
                        <p>1株当たり年間</p>
                    </div>
                </div>
                
                <div class="ir-documents">
                    <h3>IR資料</h3>
                    <div class="document-list">
                        <div class="document-item">
                            <div class="document-icon">📊</div>
                            <div class="document-info">
                                <h4>2024年度 第3四半期決算説明資料</h4>
                                <p>2024年12月15日</p>
                            </div>
                            <a href="#" class="download-btn">PDF</a>
                        </div>
                        
                        <div class="document-item">
                            <div class="document-icon">📈</div>
                            <div class="document-info">
                                <h4>中期経営計画（2024-2026）</h4>
                                <p>2024年11月20日</p>
                            </div>
                            <a href="#" class="download-btn">PDF</a>
                        </div>
                        
                        <div class="document-item">
                            <div class="document-icon">📋</div>
                            <div class="document-info">
                                <h4>有価証券報告書</h4>
                                <p>2024年6月30日</p>
                            </div>
                            <a href="#" class="download-btn">PDF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="careers" class="careers">
        <div class="container">
            <h2 class="section-title">採用情報</h2>
            <p class="section-subtitle">共に未来を創る仲間を募集しています</p>
            
            <div class="careers-content">
                <div class="careers-intro">
                    <h3>DSCで働く意味</h3>
                    <p>最先端の技術と豊富な経験を活かし、社会課題の解決に挑戦する。そんな環境で、あなたの可能性を最大限に発揮してみませんか。</p>
                    
                    <div class="career-benefits">
                        <div class="benefit-item">
                            <div class="benefit-icon">🚀</div>
                            <h4>成長機会</h4>
                            <p>最新技術に触れ、スキルアップできる環境</p>
                        </div>
                        
                        <div class="benefit-item">
                            <div class="benefit-icon">🏢</div>
                            <h4>働きやすさ</h4>
                            <p>フレックス制度・リモートワーク完備</p>
                        </div>
                        
                        <div class="benefit-item">
                            <div class="benefit-icon">💰</div>
                            <h4>待遇</h4>
                            <p>業界トップクラスの給与・福利厚生</p>
                        </div>
                    </div>
                </div>
                
                <div class="job-openings">
                    <h3>募集職種</h3>
                    <div class="job-list">
                        <div class="job-item">
                            <h4>システムエンジニア</h4>
                            <div class="job-meta">
                                <span class="job-type">正社員</span>
                                <span class="job-location">東京・大阪</span>
                            </div>
                            <p>大規模システムの設計・開発・運用に携わっていただきます。</p>
                            <a href="#" class="job-link">詳細を見る →</a>
                        </div>
                        
                        <div class="job-item">
                            <h4>データサイエンティスト</h4>
                            <div class="job-meta">
                                <span class="job-type">正社員</span>
                                <span class="job-location">東京</span>
                            </div>
                            <p>AI・機械学習を活用したデータ分析・予測モデル構築を担当していただきます。</p>
                            <a href="#" class="job-link">詳細を見る →</a>
                        </div>
                        
                        <div class="job-item">
                            <h4>ITコンサルタント</h4>
                            <div class="job-meta">
                                <span class="job-type">正社員</span>
                                <span class="job-location">東京・名古屋・大阪</span>
                            </div>
                            <p>お客様のDX推進をリードするコンサルタントとして活躍していただきます。</p>
                            <a href="#" class="job-link">詳細を見る →</a>
                        </div>
                    </div>
                    
                    <div class="careers-actions">
                        <a href="#" class="btn-primary">採用サイトへ</a>
                        <a href="#" class="btn-outline">エントリー</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">お問い合わせ</h2>
            <p class="section-subtitle">お気軽にご相談ください</p>
            
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="method-icon">📞</div>
                            <div class="method-details">
                                <h3>お電話でのお問い合わせ</h3>
                                <p class="phone-number">03-1234-5678</p>
                                <p class="business-hours">平日 9:00～18:00</p>
                            </div>
                        </div>
                        
                        <div class="contact-method">
                            <div class="method-icon">📧</div>
                            <div class="method-details">
                                <h3>メールでのお問い合わせ</h3>
                                <p>info@digitalsolutions.co.jp</p>
                                <p>24時間受付（回答は営業時間内）</p>
                            </div>
                        </div>
                        
                        <div class="contact-method">
                            <div class="method-icon">📍</div>
                            <div class="method-details">
                                <h3>本社アクセス</h3>
                                <p>〒100-0001<br>東京都千代田区千代田1-1-1<br>DSCビル</p>
                                <p>JR東京駅より徒歩5分</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form">
                    <h3>お問い合わせフォーム</h3>
                    <form>
                        <div class="form-group">
                            <label for="inquiry-type">お問い合わせ種別</label>
                            <select id="inquiry-type" required>
                                <option value="">選択してください</option>
                                <option value="service">サービスについて</option>
                                <option value="partnership">パートナーシップ</option>
                                <option value="recruit">採用について</option>
                                <option value="ir">IR・投資家情報</option>
                                <option value="media">取材・広報</option>
                                <option value="other">その他</option>
                            </select>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">お名前</label>
                                <input type="text" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">メールアドレス</label>
                                <input type="email" id="email" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="company">会社名</label>
                                <input type="text" id="company" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">電話番号</label>
                                <input type="tel" id="phone">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="message">お問い合わせ内容</label>
                            <textarea id="message" rows="6" required></textarea>
                        </div>
                        
                        <div class="form-privacy">
                            <label class="checkbox-label">
                                <input type="checkbox" required>
                                <span class="checkmark"></span>
                                <a href="#">プライバシーポリシー</a>に同意する
                            </label>
                        </div>
                        
                        <button type="submit" class="btn-primary">送信する</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Digital Solutions Corp</h3>
                    <p>デジタル技術で社会課題を解決し、持続可能な未来を創造します。</p>
                    <div class="social-links">
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                        <a href="#">Facebook</a>
                        <a href="#">YouTube</a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>企業情報</h4>
                    <ul>
                        <li><a href="#">会社概要</a></li>
                        <li><a href="#">沿革</a></li>
                        <li><a href="#">企業理念</a></li>
                        <li><a href="#">役員紹介</a></li>
                        <li><a href="#">グループ企業</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>事業・サービス</h4>
                    <ul>
                        <li><a href="#">ITコンサルティング</a></li>
                        <li><a href="#">システム開発</a></li>
                        <li><a href="#">クラウドサービス</a></li>
                        <li><a href="#">AI・データ分析</a></li>
                        <li><a href="#">サイバーセキュリティ</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>サポート</h4>
                    <ul>
                        <li><a href="#">お問い合わせ</a></li>
                        <li><a href="#">ニュース</a></li>
                        <li><a href="#">IR情報</a></li>
                        <li><a href="#">採用情報</a></li>
                        <li><a href="#">サイトマップ</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-legal">
                    <p>&copy; 2025 Digital Solutions Corp. All rights reserved.</p>
                    <div class="legal-links">
                        <a href="#">プライバシーポリシー</a>
                        <a href="#">利用規約</a>
                        <a href="#">サイトポリシー</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Sans JP', sans-serif;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #2563eb;
    margin: 0;
    line-height: 1;
}

.company-name {
    font-size: 12px;
    color: #666;
    display: block;
    margin-top: 2px;
    letter-spacing: 1px;
    font-weight: 400;
}

.main-nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
    align-items: center;
}

.main-nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 14px;
    transition: color 0.3s;
    padding: 10px 0;
}

.main-nav a:hover {
    color: #2563eb;
}

/* Dropdown Menu */
.nav-item {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    min-width: 200px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s;
    z-index: 1000;
}

.nav-item:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-menu li {
    border-bottom: 1px solid #f0f0f0;
}

.dropdown-menu li:last-child {
    border-bottom: none;
}

.dropdown-menu a {
    display: block;
    padding: 12px 20px;
    color: #666;
    border-radius: 0;
}

.dropdown-menu a:hover {
    background: #f8f9fa;
    color: #2563eb;
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
    background: #333;
    transition: all 0.3s;
    border-radius: 2px;
}

/* Hero */
.hero {
    position: relative;
    height: 70vh;
    min-height: 500px;
    overflow: hidden;
    margin-top: 70px;
}

.hero-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s;
}

.hero-slide.active {
    opacity: 1;
}

.hero-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(59, 130, 246, 0.6));
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 2;
    max-width: 800px;
}

.hero-content h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 30px;
    opacity: 0.95;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.btn-primary {
    background: #f59e0b;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    display: inline-block;
}

.btn-primary:hover {
    background: #d97706;
    transform: translateY(-2px);
}

.btn-outline {
    background: transparent;
    color: white;
    padding: 15px 30px;
    border: 2px solid white;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    display: inline-block;
}

.btn-outline:hover {
    background: white;
    color: #2563eb;
}

/* Company Overview */
.company-overview {
    padding: 100px 0;
    background: #f8f9fa;
}

.overview-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.overview-text h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 24px;
    color: #1f2937;
}

.overview-text p {
    font-size: 18px;
    color: #6b7280;
    line-height: 1.8;
    margin-bottom: 40px;
}

.company-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 32px;
    font-weight: 700;
    color: #2563eb;
    display: block;
}

.stat-label {
    font-size: 14px;
    color: #6b7280;
    margin-top: 5px;
}

.overview-visual img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
    color: #1f2937;
}

.section-subtitle {
    text-align: center;
    color: #6b7280;
    margin-bottom: 60px;
    font-size: 18px;
}

/* Services */
.services {
    background: white;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.service-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 30px;
    transition: all 0.3s;
}

.service-card:hover {
    border-color: #2563eb;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1);
}

.service-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
}

.service-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.service-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #1f2937;
}

.service-card p {
    color: #6b7280;
    margin-bottom: 20px;
    line-height: 1.7;
}

.service-features {
    list-style: none;
    margin-bottom: 25px;
}

.service-features li {
    padding: 5px 0;
    color: #6b7280;
    position: relative;
    padding-left: 20px;
}

.service-features li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: 600;
}

.service-link {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.service-link:hover {
    color: #1d4ed8;
}

/* News */
.news {
    background: #f8f9fa;
}

.news-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
}

.news-item {
    background: white;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.news-date {
    font-size: 14px;
    color: #6b7280;
    margin-right: 15px;
}

.news-category {
    background: #dbeafe;
    color: #2563eb;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
}

.news-item h3 {
    margin: 15px 0 10px;
    font-size: 20px;
    font-weight: 600;
}

.news-item h3 a {
    color: #1f2937;
    text-decoration: none;
    transition: color 0.3s;
}

.news-item h3 a:hover {
    color: #2563eb;
}

.news-item p {
    color: #6b7280;
    line-height: 1.7;
}

/* News Sidebar */
.news-sidebar {
    background: white;
    padding: 30px;
    border-radius: 10px;
    height: fit-content;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.sidebar-section {
    margin-bottom: 40px;
}

.sidebar-section:last-child {
    margin-bottom: 0;
}

.sidebar-section h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #1f2937;
    border-bottom: 2px solid #2563eb;
    padding-bottom: 10px;
}

.category-list,
.archive-list,
.related-links {
    list-style: none;
}

.category-list li,
.archive-list li,
.related-links li {
    margin-bottom: 10px;
}

.category-list a,
.archive-list a,
.related-links a {
    color: #6b7280;
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.category-list a:hover,
.archive-list a:hover,
.related-links a:hover {
    color: #2563eb;
}

.category-list span,
.archive-list span {
    color: #9ca3af;
    font-size: 12px;
}

.news-actions {
    text-align: center;
    margin-top: 40px;
}

/* IR */
.ir {
    background: white;
}

.ir-highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.highlight-item {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    border: 1px solid #e5e7eb;
}

.highlight-item h3 {
    font-size: 16px;
    color: #6b7280;
    margin-bottom: 15px;
}

.highlight-value {
    font-size: 32px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 10px;
}

.highlight-change {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
}

.highlight-change.positive {
    color: #10b981;
}

.highlight-change.negative {
    color: #ef4444;
}

.highlight-item p {
    font-size: 12px;
    color: #9ca3af;
}

.ir-documents h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #1f2937;
}

.document-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.document-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
}

.document-icon {
    font-size: 24px;
    min-width: 40px;
}

.document-info {
    flex: 1;
}

.document-info h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #1f2937;
}

.document-info p {
    font-size: 14px;
    color: #6b7280;
}

.download-btn {
    background: #2563eb;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    transition: background 0.3s;
}

.download-btn:hover {
    background: #1d4ed8;
}

/* Careers */
.careers {
    background: #f8f9fa;
}

.careers-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
}

.careers-intro h3 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #1f2937;
}

.careers-intro p {
    font-size: 18px;
    color: #6b7280;
    line-height: 1.8;
    margin-bottom: 40px;
}

.career-benefits {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.benefit-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
}

.benefit-icon {
    font-size: 24px;
    min-width: 30px;
    margin-top: 5px;
}

.benefit-item h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #1f2937;
}

.benefit-item p {
    color: #6b7280;
}

.job-openings h3 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #1f2937;
}

.job-list {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 40px;
}

.job-item {
    background: white;
    padding: 25px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
}

.job-item h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #1f2937;
}

.job-meta {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
}

.job-type,
.job-location {
    background: #dbeafe;
    color: #2563eb;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
}

.job-item p {
    color: #6b7280;
    margin-bottom: 15px;
    line-height: 1.7;
}

.job-link {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.job-link:hover {
    color: #1d4ed8;
}

.careers-actions {
    display: flex;
    gap: 20px;
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

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.contact-method {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.method-icon {
    font-size: 28px;
    min-width: 50px;
    color: #2563eb;
}

.method-details h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #1f2937;
}

.phone-number {
    font-size: 24px;
    font-weight: 600;
    color: #2563eb;
    margin-bottom: 5px;
}

.business-hours {
    color: #6b7280;
    font-size: 14px;
}

.method-details p {
    color: #6b7280;
    line-height: 1.6;
}

.contact-form {
    background: #f8f9fa;
    padding: 40px;
    border-radius: 10px;
}

.contact-form h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #1f2937;
}

.form-group {
    margin-bottom: 20px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #374151;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-privacy {
    margin-bottom: 30px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #6b7280;
}

.checkbox-label input[type="checkbox"] {
    width: auto;
    margin: 0;
}

.checkbox-label a {
    color: #2563eb;
    text-decoration: none;
}

.checkbox-label a:hover {
    text-decoration: underline;
}

/* Footer */
.footer {
    background: #1f2937;
    color: white;
    padding: 60px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-section h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #2563eb;
}

.footer-section h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    color: white;
}

.footer-section p {
    color: #9ca3af;
    line-height: 1.7;
    margin-bottom: 25px;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #2563eb;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    background: #374151;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 14px;
    transition: background 0.3s;
}

.social-links a:hover {
    background: #2563eb;
}

.footer-bottom {
    padding-top: 30px;
    border-top: 1px solid #374151;
}

.footer-legal {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.legal-links {
    display: flex;
    gap: 20px;
}

.legal-links a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
}

.legal-links a:hover {
    color: #2563eb;
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
        background: white;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .main-nav.active {
        display: block;
    }
    
    .main-nav ul {
        flex-direction: column;
        padding: 20px;
        gap: 0;
    }
    
    .main-nav ul li {
        border-bottom: 1px solid #f0f0f0;
        width: 100%;
    }
    
    .main-nav a {
        padding: 15px 0;
        display: block;
    }
    
    .dropdown-menu {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        background: #f8f9fa;
        margin-top: 10px;
    }
    
    .hero-content h2 {
        font-size: 32px;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .overview-content,
    .careers-content,
    .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .company-stats {
        grid-template-columns: 1fr 1fr;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .news-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .ir-highlights {
        grid-template-columns: 1fr 1fr;
    }
    
    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
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

// フォーム送信
document.querySelector('.contact-form form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('お問い合わせを送信しました。担当者よりご連絡いたします。');
});

// サービスリンク
document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('サービス詳細ページへ遷移します（実装予定）');
    });
});

// ニュースリンク
document.querySelectorAll('.news-item h3 a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('ニュース詳細ページへ遷移します（実装予定）');
    });
});

// ダウンロードボタン
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert('PDFファイルをダウンロードします（実装予定）');
    });
});

// 採用リンク
document.querySelectorAll('.job-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('求人詳細ページへ遷移します（実装予定）');
    });
});

// カテゴリ・アーカイブリンク
document.querySelectorAll('.category-list a, .archive-list a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('フィルタリング機能（実装予定）');
    });
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
    const animateElements = document.querySelectorAll('.service-card, .news-item, .highlight-item, .document-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// 数字カウントアニメーション
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString() + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 統計数字のアニメーション
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                const text = statNumber.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                if (!isNaN(number)) {
                    statNumber.dataset.suffix = text.replace(/[0-9,]/g, '');
                    statNumber.textContent = '0';
                    animateValue(statNumber, 0, number, 2000);
                    statNumber.classList.add('animated');
                }
            }
        }
    });
}, { threshold: 0.5 });

// 統計要素を観察
document.querySelectorAll('.stat, .highlight-item').forEach(stat => {
    statObserver.observe(stat);
});`
  }
}