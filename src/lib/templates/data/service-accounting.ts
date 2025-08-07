import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const serviceAccountingTemplate: WebTemplate = {
  id: 'service-accounting',
  title: 'サービス業 - 会計事務所',
  category: TEMPLATE_CATEGORIES.SERVICE,
  description: '信頼性と専門性を重視した会計事務所向けWebサイトテンプレート',
  thumbnail: '/template-images/service-accounting.jpg',
  features: [
    'サービス案内',
    '料金体系',
    'スタッフ紹介',
    'お問い合わせフォーム'
  ],
  tags: ['サービス業', '会計事務所', '税理士', '経理代行'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>みどり会計事務所 - 企業の成長をサポート</title>
</head>
<body>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <div class="header-info">
                    <span>📞 初回相談無料</span>
                    <span>03-5432-1098</span>
                    <span>平日 9:00-18:00</span>
                    <span>オンライン対応可</span>
                </div>
            </div>
        </div>
        <div class="header-main">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <h1>📊 みどり会計事務所</h1>
                        <p class="tagline">企業の成長をサポート</p>
                    </div>
                    <nav class="main-nav">
                        <ul>
                            <li><a href="#about">事務所について</a></li>
                            <li><a href="#services">サービス</a></li>
                            <li><a href="#fees">料金</a></li>
                            <li><a href="#staff">スタッフ</a></li>
                            <li><a href="#flow">ご利用の流れ</a></li>
                            <li><a href="#access">アクセス</a></li>
                            <li class="nav-contact"><a href="#contact">お問い合わせ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-background">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=800&fit=crop" alt="会計事務所">
        </div>
        <div class="hero-content">
            <h2>経営の数字を見える化</h2>
            <p>税務・会計の専門知識で、お客様の事業発展を全力でサポートいたします</p>
            <div class="hero-buttons">
                <button class="btn-primary">無料相談申込</button>
                <button class="btn-secondary">サービス詳細</button>
            </div>
            <div class="hero-features">
                <div class="feature-item">
                    <span class="feature-icon">💻</span>
                    <span>クラウド会計対応</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">📱</span>
                    <span>オンライン面談</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">⚡</span>
                    <span>スピード対応</span>
                </div>
            </div>
        </div>
    </section>

    <section class="advantages">
        <div class="container">
            <h2 class="section-title">選ばれる理由</h2>
            <div class="advantages-grid">
                <div class="advantage-card">
                    <div class="advantage-icon">🎯</div>
                    <h3>経営支援に強い</h3>
                    <p>単なる記帳代行ではなく、財務分析や経営アドバイスで事業成長をサポート</p>
                </div>
                <div class="advantage-card">
                    <div class="advantage-icon">💰</div>
                    <h3>明確な料金体系</h3>
                    <p>お客様の規模に応じた分かりやすい料金設定で、追加料金の心配なし</p>
                </div>
                <div class="advantage-card">
                    <div class="advantage-icon">🕐</div>
                    <h3>迅速な対応</h3>
                    <p>お問い合わせから24時間以内の回答を心がけ、急ぎの案件にも柔軟に対応</p>
                </div>
                <div class="advantage-card">
                    <div class="advantage-icon">🔒</div>
                    <h3>情報管理徹底</h3>
                    <p>セキュリティ対策を万全にし、お客様の重要な財務情報を安全に管理</p>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">事務所について</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>お客様の成功が私たちの喜び</h3>
                    <p>みどり会計事務所は、2005年の開業以来、中小企業から個人事業主まで、幅広いお客様の税務・会計業務をサポートしてまいりました。</p>
                    <p>「お客様の成功が私たちの喜び」をモットーに、単なる税務処理にとどまらず、経営改善のパートナーとして長期的な関係を築いています。</p>
                    <p>最新のクラウド会計システムを活用し、効率的で正確な会計処理を実現しています。</p>
                    <div class="about-points">
                        <div class="point-item">
                            <h4>📈 経営分析</h4>
                            <p>財務諸表から読み取る経営課題の発見</p>
                        </div>
                        <div class="point-item">
                            <h4>💡 改善提案</h4>
                            <p>具体的な業務改善・コスト削減案の提示</p>
                        </div>
                        <div class="point-item">
                            <h4>🤝 継続サポート</h4>
                            <p>長期的なパートナーシップによる安心感</p>
                        </div>
                    </div>
                </div>
                <div class="about-stats">
                    <div class="stat-box">
                        <div class="stat-number">200</div>
                        <div class="stat-label">顧客数</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-number">18</div>
                        <div class="stat-label">年の実績</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-number">95%</div>
                        <div class="stat-label">顧客満足度</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-number">3</div>
                        <div class="stat-label">税理士数</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">サービス内容</h2>
            <div class="services-tabs">
                <button class="tab-btn active" data-tab="tax">税務サービス</button>
                <button class="tab-btn" data-tab="accounting">会計サービス</button>
                <button class="tab-btn" data-tab="consulting">経営コンサル</button>
                <button class="tab-btn" data-tab="other">その他サービス</button>
            </div>
            <div class="services-content">
                <div class="tab-content active" id="tax">
                    <div class="service-grid">
                        <div class="service-item">
                            <div class="service-icon">📄</div>
                            <h4>法人税申告</h4>
                            <p>法人税、地方税の申告書作成から提出まで一括サポート</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">👤</div>
                            <h4>所得税申告</h4>
                            <p>個人事業主の確定申告、青色申告承認申請書の提出</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">💸</div>
                            <h4>消費税申告</h4>
                            <p>消費税の申告書作成、適格請求書等保存方式への対応</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">📋</div>
                            <h4>税務調査対応</h4>
                            <p>税務調査の立ち会い、事前準備から事後処理まで</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">💡</div>
                            <h4>節税対策</h4>
                            <p>合法的な節税方法のアドバイス、税制改正への対応</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">🏢</div>
                            <h4>法人設立</h4>
                            <p>会社設立の手続きから設立後の税務届出まで</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="accounting">
                    <div class="service-grid">
                        <div class="service-item">
                            <div class="service-icon">📊</div>
                            <h4>記帳代行</h4>
                            <p>日々の取引記録から月次試算表の作成まで</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">💻</div>
                            <h4>クラウド会計導入</h4>
                            <p>freee、弥生会計等のクラウド会計システム導入支援</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">📈</div>
                            <h4>月次監査</h4>
                            <p>毎月の業績確認と経営状況の分析・報告</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">💰</div>
                            <h4>資金繰り管理</h4>
                            <p>キャッシュフロー計算書の作成と資金計画の策定</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">🎯</div>
                            <h4>予算管理</h4>
                            <p>年次予算の策定と月次での実績対比分析</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">📋</div>
                            <h4>決算書作成</h4>
                            <p>正確な決算書の作成と財務分析レポートの提供</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="consulting">
                    <div class="service-grid">
                        <div class="service-item">
                            <div class="service-icon">📊</div>
                            <h4>経営分析</h4>
                            <p>財務指標を用いた経営状況の分析と改善提案</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">💡</div>
                            <h4>業務改善</h4>
                            <p>業務プロセスの見直しと効率化の提案</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">💰</div>
                            <h4>資金調達支援</h4>
                            <p>銀行融資、補助金申請の支援と事業計画書作成</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">🎯</div>
                            <h4>事業計画策定</h4>
                            <p>中長期事業計画の策定と定期的な見直し</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">🏢</div>
                            <h4>事業承継</h4>
                            <p>事業承継の計画策定と税務対策のアドバイス</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">📈</div>
                            <h4>M&A支援</h4>
                            <p>企業買収・売却時の財務デューデリジェンス</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="other">
                    <div class="service-grid">
                        <div class="service-item">
                            <div class="service-icon">👥</div>
                            <h4>給与計算</h4>
                            <p>毎月の給与計算から年末調整まで一括対応</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">📋</div>
                            <h4>社会保険手続き</h4>
                            <p>各種社会保険の加入手続きと届出業務</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">🏦</div>
                            <h4>銀行対応</h4>
                            <p>金融機関との窓口業務と融資相談のサポート</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">📚</div>
                            <h4>経理指導</h4>
                            <p>社内での経理体制構築と経理担当者の教育</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">💻</div>
                            <h4>IT導入支援</h4>
                            <p>会計システムやITツールの導入コンサルティング</p>
                        </div>
                        <div class="service-item">
                            <div class="service-icon">📞</div>
                            <h4>電話サポート</h4>
                            <p>会計・税務に関する日常的な質問への電話対応</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="fees" class="fees">
        <div class="container">
            <h2 class="section-title">料金体系</h2>
            <div class="fees-intro">
                <p>お客様の事業規模に応じた分かりやすい料金体系です</p>
                <p>※表示価格は月額料金（税込み）です</p>
            </div>
            <div class="fees-plans">
                <div class="plan-card">
                    <div class="plan-header">
                        <h3>スタートプラン</h3>
                        <div class="plan-price">
                            <span class="price-amount">¥15,000</span>
                            <span class="price-period">/月</span>
                        </div>
                    </div>
                    <div class="plan-features">
                        <h4>対象</h4>
                        <p>個人事業主・小規模法人</p>
                        <h4>含まれるサービス</h4>
                        <ul>
                            <li>記帳代行（仕訳50件まで）</li>
                            <li>月次試算表作成</li>
                            <li>税務相談（電話・メール）</li>
                            <li>確定申告・法人税申告</li>
                        </ul>
                    </div>
                </div>
                <div class="plan-card featured">
                    <div class="plan-badge">おすすめ</div>
                    <div class="plan-header">
                        <h3>スタンダードプラン</h3>
                        <div class="plan-price">
                            <span class="price-amount">¥30,000</span>
                            <span class="price-period">/月</span>
                        </div>
                    </div>
                    <div class="plan-features">
                        <h4>対象</h4>
                        <p>中小企業・成長企業</p>
                        <h4>含まれるサービス</h4>
                        <ul>
                            <li>記帳代行（仕訳150件まで）</li>
                            <li>月次監査・試算表作成</li>
                            <li>経営分析レポート</li>
                            <li>税務申告書作成</li>
                            <li>節税対策アドバイス</li>
                            <li>資金繰り相談</li>
                        </ul>
                    </div>
                </div>
                <div class="plan-card">
                    <div class="plan-header">
                        <h3>プレミアムプラン</h3>
                        <div class="plan-price">
                            <span class="price-amount">¥50,000</span>
                            <span class="price-period">/月</span>
                        </div>
                    </div>
                    <div class="plan-features">
                        <h4>対象</h4>
                        <p>中堅企業・複雑な取引がある企業</p>
                        <h4>含まれるサービス</h4>
                        <ul>
                            <li>記帳代行（仕訳数無制限）</li>
                            <li>月次監査・経営会議参加</li>
                            <li>詳細な経営分析</li>
                            <li>予算管理・実績対比</li>
                            <li>税務調査対応</li>
                            <li>資金調達支援</li>
                            <li>経営コンサルティング</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="additional-fees">
                <h3>追加サービス料金</h3>
                <div class="additional-grid">
                    <div class="additional-item">
                        <span class="service-name">給与計算（10名まで）</span>
                        <span class="service-price">¥20,000/月</span>
                    </div>
                    <div class="additional-item">
                        <span class="service-name">社会保険手続き</span>
                        <span class="service-price">¥5,000/件</span>
                    </div>
                    <div class="additional-item">
                        <span class="service-name">法人設立手続き</span>
                        <span class="service-price">¥100,000/件</span>
                    </div>
                    <div class="additional-item">
                        <span class="service-name">税務調査立ち会い</span>
                        <span class="service-price">¥50,000/日</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="staff" class="staff">
        <div class="container">
            <h2 class="section-title">スタッフ紹介</h2>
            <div class="staff-grid">
                <div class="staff-card">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="代表税理士">
                    <div class="staff-info">
                        <h3>代表税理士 緑川 太郎</h3>
                        <p class="staff-qualification">税理士登録番号: 第98765号</p>
                        <div class="staff-specialties">
                            <span>法人税務</span>
                            <span>経営分析</span>
                            <span>資金調達</span>
                        </div>
                        <p class="staff-message">お客様の事業発展のために、税務・会計の専門知識を最大限に活用し、経営のパートナーとして全力でサポートいたします。</p>
                        <div class="staff-career">
                            <h4>経歴・資格</h4>
                            <ul>
                                <li>早稲田大学商学部卒業</li>
                                <li>税理士試験合格（平成18年）</li>
                                <li>TKC全国会会員</li>
                                <li>経営革新等支援機関認定</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="staff-card">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616c33495e4?w=400&h=400&fit=crop" alt="税理士">
                    <div class="staff-info">
                        <h3>税理士 田中 花子</h3>
                        <p class="staff-qualification">税理士登録番号: 第87654号</p>
                        <div class="staff-specialties">
                            <span>個人税務</span>
                            <span>相続税</span>
                            <span>事業承継</span>
                        </div>
                        <p class="staff-message">個人事業主から中小企業まで、お客様に寄り添った丁寧なサービスを心がけています。</p>
                        <div class="staff-career">
                            <h4>経歴・資格</h4>
                            <ul>
                                <li>慶応義塾大学経済学部卒業</li>
                                <li>税理士試験合格（平成22年）</li>
                                <li>日本税理士会連合会所属</li>
                                <li>FP技能士1級取得</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="staff-card">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" alt="会計スタッフ">
                    <div class="staff-info">
                        <h3>会計スタッフ 佐藤 次郎</h3>
                        <p class="staff-qualification">日商簿記検定1級・税理士試験科目合格</p>
                        <div class="staff-specialties">
                            <span>記帳代行</span>
                            <span>給与計算</span>
                            <span>決算書作成</span>
                        </div>
                        <p class="staff-message">正確で迅速な会計処理を通じて、お客様の業務効率化に貢献いたします。</p>
                        <div class="staff-career">
                            <h4>経歴・資格</h4>
                            <ul>
                                <li>明治大学商学部卒業</li>
                                <li>日商簿記検定1級取得</li>
                                <li>税理士試験3科目合格</li>
                                <li>弥生検定上級取得</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="flow" class="flow">
        <div class="container">
            <h2 class="section-title">ご利用の流れ</h2>
            <div class="flow-steps">
                <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4>お問い合わせ</h4>
                        <p>お電話またはWebフォームからお気軽にお問い合わせください</p>
                    </div>
                </div>
                <div class="step-arrow">→</div>
                <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4>初回面談（無料）</h4>
                        <p>現在の状況をお聞きし、最適なサービスプランをご提案いたします</p>
                    </div>
                </div>
                <div class="step-arrow">→</div>
                <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h4>契約・業務開始</h4>
                        <p>ご納得いただけましたら契約を締結し、業務を開始いたします</p>
                    </div>
                </div>
                <div class="step-arrow">→</div>
                <div class="step-item">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <h4>継続サポート</h4>
                        <p>定期的な面談と報告で、長期的にサポートいたします</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="access" class="access">
        <div class="container">
            <h2 class="section-title">アクセス</h2>
            <div class="access-content">
                <div class="access-info">
                    <table>
                        <tr>
                            <th>事務所名</th>
                            <td>みどり会計事務所</td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td>〒160-0022 東京都新宿区新宿3-4-5 ビジネスタワー6F</td>
                        </tr>
                        <tr>
                            <th>電話</th>
                            <td>03-5432-1098</td>
                        </tr>
                        <tr>
                            <th>FAX</th>
                            <td>03-5432-1099</td>
                        </tr>
                        <tr>
                            <th>営業時間</th>
                            <td>平日: 9:00-18:00</td>
                        </tr>
                        <tr>
                            <th>定休日</th>
                            <td>土曜・日曜・祝日</td>
                        </tr>
                        <tr>
                            <th>アクセス</th>
                            <td>
                                JR「新宿駅」東口より徒歩5分<br>
                                地下鉄丸ノ内線「新宿三丁目駅」より徒歩2分
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="access-map">
                    <div class="map-placeholder">🗺️ Google Map</div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">お問い合わせ</h2>
            <div class="contact-content">
                <div class="contact-intro">
                    <h3>初回相談無料</h3>
                    <p>税務・会計に関するお悩みは、まずはお気軽にご相談ください。</p>
                    <p>初回のご相談は無料で承っております。</p>
                </div>
                <div class="contact-methods">
                    <div class="method-card">
                        <div class="method-icon">📞</div>
                        <h4>お電話でのお問い合わせ</h4>
                        <p>平日 9:00-18:00</p>
                        <a href="tel:03-5432-1098" class="btn-primary">03-5432-1098</a>
                    </div>
                    <div class="method-card">
                        <div class="method-icon">📧</div>
                        <h4>メールでのお問い合わせ</h4>
                        <p>24時間受付・48時間以内に返信</p>
                        <button class="btn-secondary">メール送信</button>
                    </div>
                    <div class="method-card">
                        <div class="method-icon">💻</div>
                        <h4>オンライン面談</h4>
                        <p>Zoom・Teamsに対応</p>
                        <button class="btn-secondary">面談予約</button>
                    </div>
                </div>
                <div class="contact-note">
                    <h4>よくあるご質問</h4>
                    <div class="faq-item">
                        <h5>Q. 初回相談は本当に無料ですか？</h5>
                        <p>A. はい、初回60分のご相談は完全無料です。お気軽にお問い合わせください。</p>
                    </div>
                    <div class="faq-item">
                        <h5>Q. 小規模な個人事業でも対応してもらえますか？</h5>
                        <p>A. もちろんです。個人事業主向けのスタートプランをご用意しております。</p>
                    </div>
                    <div class="faq-item">
                        <h5>Q. クラウド会計システムは使えますか？</h5>
                        <p>A. freee、弥生会計オンライン、マネーフォワード等に対応しております。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>📊 みどり会計事務所</h3>
                    <p>〒160-0022 東京都新宿区新宿3-4-5 ビジネスタワー6F</p>
                    <p>TEL: 03-5432-1098 / FAX: 03-5432-1099</p>
                    <p>営業時間: 平日 9:00-18:00</p>
                </div>
                <div class="footer-links">
                    <div class="footer-section">
                        <h4>サービス</h4>
                        <ul>
                            <li><a href="#services">税務サービス</a></li>
                            <li><a href="#services">会計サービス</a></li>
                            <li><a href="#services">経営コンサル</a></li>
                            <li><a href="#fees">料金体系</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>事務所情報</h4>
                        <ul>
                            <li><a href="#about">事務所概要</a></li>
                            <li><a href="#staff">スタッフ紹介</a></li>
                            <li><a href="#access">アクセス</a></li>
                            <li><a href="#">プライバシーポリシー</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="copyright">© 2025 みどり会計事務所 All Rights Reserved.</p>
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans JP', sans-serif;
    color: #333;
    line-height: 1.7;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header-top {
    background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
    padding: 8px 0;
    font-size: 13px;
    color: white;
}

.header-info {
    display: flex;
    justify-content: center;
    gap: 25px;
    align-items: center;
}

.header-main {
    background: white;
    box-shadow: 0 2px 15px rgba(46, 125, 50, 0.15);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo h1 {
    color: #2e7d32;
    font-size: 30px;
    font-weight: 700;
}

.tagline {
    font-size: 12px;
    color: #66bb6a;
    margin-top: 5px;
}

.main-nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
}

.main-nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.main-nav a:hover {
    color: #2e7d32;
}

.nav-contact a {
    background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
    color: white !important;
    padding: 12px 24px;
    border-radius: 25px;
    transition: all 0.3s;
}

.nav-contact a:hover {
    background: linear-gradient(135deg, #f57c00 0%, #ef6c00 100%);
    transform: translateY(-2px);
}

/* Hero */
.hero {
    position: relative;
    height: 85vh;
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

.hero-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4);
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(46, 125, 50, 0.8) 0%, rgba(76, 175, 80, 0.6) 100%);
    z-index: -1;
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 1;
    max-width: 800px;
    padding: 0 20px;
}

.hero-content h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 25px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 40px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.hero-buttons {
    display: flex;
    gap: 25px;
    justify-content: center;
    margin-bottom: 60px;
}

.btn-primary, .btn-secondary {
    padding: 18px 35px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
    color: white;
    box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #f57c00 0%, #ef6c00 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 152, 0, 0.5);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
}

.hero-features {
    display: flex;
    justify-content: center;
    gap: 40px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
}

.feature-icon {
    font-size: 24px;
}

/* Advantages */
.advantages {
    background: #f1f8e9;
    padding: 80px 0;
}

.advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
}

.advantage-card {
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s;
    box-shadow: 0 4px 20px rgba(46, 125, 50, 0.1);
}

.advantage-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(46, 125, 50, 0.2);
}

.advantage-icon {
    font-size: 50px;
    margin-bottom: 20px;
}

.advantage-card h3 {
    color: #2e7d32;
    margin-bottom: 15px;
    font-size: 22px;
}

.advantage-card p {
    color: #666;
    line-height: 1.6;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 40px;
    color: #2e7d32;
    margin-bottom: 60px;
    position: relative;
    padding-bottom: 20px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #2e7d32, #ff9800);
    border-radius: 2px;
}

/* About */
.about {
    background: white;
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    align-items: start;
}

.about-text h3 {
    color: #2e7d32;
    margin-bottom: 25px;
    font-size: 30px;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.8;
}

.about-points {
    display: grid;
    gap: 20px;
    margin-top: 40px;
}

.point-item {
    padding: 20px;
    background: #f1f8e9;
    border-radius: 15px;
    border-left: 4px solid #ff9800;
}

.point-item h4 {
    color: #2e7d32;
    margin-bottom: 8px;
}

.about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.stat-box {
    text-align: center;
    padding: 30px 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(46, 125, 50, 0.1);
}

.stat-number {
    display: block;
    font-size: 36px;
    font-weight: bold;
    color: #ff9800;
    margin-bottom: 10px;
}

.stat-label {
    font-size: 14px;
    color: #666;
}

/* Services */
.services {
    background: #f1f8e9;
}

.services-tabs {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.tab-btn {
    padding: 15px 30px;
    background: white;
    border: 2px solid #2e7d32;
    color: #2e7d32;
    cursor: pointer;
    border-radius: 30px;
    transition: all 0.3s;
    font-weight: 500;
}

.tab-btn.active,
.tab-btn:hover {
    background: #2e7d32;
    color: white;
}

.services-content {
    max-width: 1000px;
    margin: 0 auto;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.service-item {
    background: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    transition: transform 0.3s;
    box-shadow: 0 4px 15px rgba(46, 125, 50, 0.1);
}

.service-item:hover {
    transform: translateY(-5px);
}

.service-icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.service-item h4 {
    color: #2e7d32;
    margin-bottom: 10px;
    font-size: 18px;
}

.service-item p {
    color: #666;
    font-size: 14px;
    line-height: 1.6;
}

/* Fees */
.fees {
    background: white;
}

.fees-intro {
    text-align: center;
    margin-bottom: 50px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.fees-intro p {
    margin-bottom: 10px;
    font-size: 16px;
}

.fees-plans {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.plan-card {
    background: white;
    border: 2px solid #e0e0e0;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s;
    position: relative;
}

.plan-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(46, 125, 50, 0.15);
}

.plan-card.featured {
    border-color: #2e7d32;
    transform: scale(1.05);
}

.plan-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
    color: white;
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
}

.plan-header {
    background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
    color: white;
    padding: 30px;
    text-align: center;
}

.plan-header h3 {
    font-size: 24px;
    margin-bottom: 15px;
}

.plan-price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 5px;
}

.price-amount {
    font-size: 36px;
    font-weight: bold;
}

.price-period {
    font-size: 16px;
    opacity: 0.9;
}

.plan-features {
    padding: 30px;
}

.plan-features h4 {
    color: #2e7d32;
    margin-bottom: 10px;
    font-size: 16px;
}

.plan-features p {
    color: #666;
    margin-bottom: 20px;
}

.plan-features ul {
    list-style: none;
}

.plan-features li {
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    color: #555;
}

.plan-features li:before {
    content: "✓";
    color: #4caf50;
    font-weight: bold;
    margin-right: 10px;
}

.additional-fees {
    background: #f1f8e9;
    padding: 40px;
    border-radius: 20px;
}

.additional-fees h3 {
    color: #2e7d32;
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
}

.additional-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.additional-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: white;
    border-radius: 10px;
}

.service-name {
    font-weight: 500;
}

.service-price {
    font-weight: bold;
    color: #ff9800;
}

/* Staff */
.staff {
    background: #f1f8e9;
}

.staff-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.staff-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s;
    box-shadow: 0 4px 20px rgba(46, 125, 50, 0.1);
}

.staff-card:hover {
    transform: translateY(-5px);
}

.staff-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.staff-info {
    padding: 30px;
}

.staff-info h3 {
    color: #2e7d32;
    margin-bottom: 8px;
    font-size: 22px;
}

.staff-qualification {
    color: #ff9800;
    margin-bottom: 15px;
    font-size: 14px;
}

.staff-specialties {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.staff-specialties span {
    background: #e8f5e8;
    color: #2e7d32;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
}

.staff-message {
    margin-bottom: 25px;
    color: #666;
    line-height: 1.6;
}

.staff-career h4 {
    color: #2e7d32;
    margin-bottom: 10px;
}

.staff-career ul {
    list-style: none;
}

.staff-career li {
    padding: 5px 0;
    color: #666;
}

.staff-career li:before {
    content: "•";
    color: #ff9800;
    margin-right: 10px;
}

/* Flow */
.flow {
    background: white;
}

.flow-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
}

.step-item {
    text-align: center;
    padding: 30px 20px;
    background: #f1f8e9;
    border-radius: 20px;
    flex: 1;
    max-width: 200px;
}

.step-number {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 24px;
    font-weight: bold;
}

.step-content h4 {
    color: #2e7d32;
    margin-bottom: 10px;
}

.step-content p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
}

.step-arrow {
    font-size: 24px;
    color: #2e7d32;
    font-weight: bold;
}

/* Access */
.access {
    background: #f1f8e9;
}

.access-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.access-info table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(46, 125, 50, 0.1);
}

.access-info th {
    text-align: left;
    padding: 20px;
    background: #2e7d32;
    color: white;
    width: 120px;
    font-weight: 600;
}

.access-info td {
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
}

.access-info tr:last-child td {
    border-bottom: none;
}

.access-map {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(46, 125, 50, 0.1);
}

.map-placeholder {
    font-size: 60px;
    color: #2e7d32;
}

/* Contact */
.contact {
    background: white;
}

.contact-intro {
    text-align: center;
    margin-bottom: 50px;
}

.contact-intro h3 {
    color: #2e7d32;
    font-size: 28px;
    margin-bottom: 15px;
}

.contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.method-card {
    text-align: center;
    padding: 40px 30px;
    background: #f1f8e9;
    border-radius: 20px;
    transition: transform 0.3s;
}

.method-card:hover {
    transform: translateY(-5px);
}

.method-icon {
    font-size: 50px;
    margin-bottom: 20px;
}

.method-card h4 {
    color: #2e7d32;
    margin-bottom: 10px;
}

.method-card p {
    margin-bottom: 20px;
    color: #666;
}

.contact-note {
    background: #f1f8e9;
    padding: 40px;
    border-radius: 20px;
}

.contact-note h4 {
    color: #2e7d32;
    margin-bottom: 25px;
    text-align: center;
    font-size: 22px;
}

.faq-item {
    margin-bottom: 20px;
    padding: 20px;
    background: white;
    border-radius: 10px;
}

.faq-item h5 {
    color: #2e7d32;
    margin-bottom: 8px;
}

.faq-item p {
    color: #666;
    line-height: 1.6;
}

/* Footer */
.footer {
    background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
    color: white;
    padding: 60px 0 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-bottom: 40px;
}

.footer-info h3 {
    margin-bottom: 20px;
    font-size: 26px;
}

.footer-info p {
    margin-bottom: 10px;
    line-height: 1.6;
}

.footer-links {
    display: flex;
    gap: 60px;
}

.footer-section h4 {
    margin-bottom: 20px;
    color: #ff9800;
    font-size: 18px;
}

.footer-section ul {
    list-style: none;
}

.footer-section li {
    margin-bottom: 10px;
}

.footer-section a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #ff9800;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255,255,255,0.2);
    color: #c8e6c9;
}

/* Responsive */
@media (max-width: 768px) {
    .header-info {
        flex-direction: column;
        gap: 8px;
        text-align: center;
        font-size: 12px;
    }
    
    .header-content {
        flex-direction: column;
        gap: 20px;
    }
    
    .main-nav ul {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
    
    .hero-content h2 {
        font-size: 32px;
    }
    
    .hero-buttons {
        flex-direction: column;
        gap: 15px;
    }
    
    .hero-features {
        flex-direction: column;
        gap: 20px;
    }
    
    .advantages-grid {
        grid-template-columns: 1fr;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .about-stats {
        grid-template-columns: 1fr 1fr;
    }
    
    .services-tabs {
        flex-direction: column;
        align-items: center;
    }
    
    .service-grid {
        grid-template-columns: 1fr;
    }
    
    .fees-plans {
        grid-template-columns: 1fr;
    }
    
    .staff-grid {
        grid-template-columns: 1fr;
    }
    
    .flow-steps {
        flex-direction: column;
    }
    
    .step-arrow {
        transform: rotate(90deg);
    }
    
    .access-content {
        grid-template-columns: 1fr;
    }
    
    .contact-methods {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
    }
    
    .footer-links {
        flex-direction: column;
        gap: 30px;
    }
}`,
    js: `// タブ切り替え機能
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        // タブボタンのアクティブ状態を切り替え
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // タブコンテンツの表示を切り替え
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tab) {
                content.classList.add('active');
            }
        });
    });
});

// お問い合わせボタンのクリック処理
document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.textContent.includes('03-5432-1098')) return;
    
    button.addEventListener('click', function() {
        if (button.textContent.includes('無料相談申込') || button.textContent.includes('03-5432-1098')) {
            alert('無料相談を受け付けております。お電話またはメールでお気軽にお問い合わせください。');
        }
    });
});

// その他のボタンのクリック処理
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        if (button.textContent === 'サービス詳細') {
            e.preventDefault();
            document.getElementById('services').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        } else if (button.textContent === 'メール送信') {
            alert('メールでのお問い合わせフォームへ移動します（実装予定）');
        } else if (button.textContent === '面談予約') {
            alert('オンライン面談の予約フォームへ移動します（実装予定）');
        }
    });
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header-main').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 電話番号のクリック処理
document.querySelectorAll('a[href^="tel:"]').forEach(tel => {
    tel.addEventListener('click', function(e) {
        if (!tel.href.includes('tel:')) return;
        
        // デスクトップの場合はアラートを表示
        if (!/Mobi|Android/i.test(navigator.userAgent)) {
            e.preventDefault();
            alert('お電話でのお問い合わせ: ' + this.textContent);
        }
    });
});

// プランカードのホバー効果
document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('featured')) {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('featured')) {
            this.style.transform = '';
        }
    });
});

// サービス項目のクリック処理
document.querySelectorAll('.service-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        const title = this.querySelector('h4').textContent;
        const description = this.querySelector('p').textContent;
        alert(\`サービス詳細: \${title}\n\n\${description}\n\n詳細についてはお気軽にお問い合わせください。\`);
    });
});

// FAQ項目のクリック処理
document.querySelectorAll('.faq-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        const question = this.querySelector('h5').textContent;
        const answer = this.querySelector('p').textContent;
        alert(\`\${question}\n\n\${answer}\`);
    });
});

// ページ読み込み時のアニメーション
window.addEventListener('load', function() {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(50px)';
        hero.style.transition = 'all 1.2s ease';
        
        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // 統計データのカウントアップアニメーション
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        let currentValue = 0;
        const increment = finalValue / 60;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = stat.textContent; // 元の値（%記号等を保持）
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue);
            }
        }, 25);
    });
});

// スクロールでヘッダーの背景を変更
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-main');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'white';
        header.style.backdropFilter = 'none';
    }
});

// 料金プランの詳細表示
document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('click', function() {
        const planName = this.querySelector('h3').textContent;
        const features = Array.from(this.querySelectorAll('li')).map(li => li.textContent).join('\\n• ');
        alert(\`\${planName}の詳細\n\n• \${features}\n\nご不明な点がございましたら、お気軽にお問い合わせください。\`);
    });
});`
  }
}