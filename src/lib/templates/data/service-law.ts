import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const serviceLawTemplate: WebTemplate = {
  id: 'service-law',
  title: 'サービス業 - 法律事務所',
  category: TEMPLATE_CATEGORIES.SERVICE,
  description: '信頼性と専門性を重視した法律事務所向けWebサイトテンプレート',
  thumbnail: '/template-images/service-law.jpg',
  features: [
    '取扱業務案内',
    '弁護士プロフィール',
    '解決事例紹介',
    'オンライン相談予約'
  ],
  tags: ['サービス業', '法律事務所', '弁護士', '法律相談'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>東京中央法律事務所 - あなたの権利を守ります</title>
</head>
<body>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <div class="header-info">
                    <span>📞 初回相談無料</span>
                    <span>03-6789-0123</span>
                    <span>平日 9:00-20:00 / 土曜 10:00-18:00</span>
                </div>
            </div>
        </div>
        <div class="header-main">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <h1>⚖️ 東京中央法律事務所</h1>
                        <p class="tagline">あなたの権利を守ります</p>
                    </div>
                    <nav class="main-nav">
                        <ul>
                            <li><a href="#about">事務所について</a></li>
                            <li><a href="#services">取扱業務</a></li>
                            <li><a href="#cases">解決事例</a></li>
                            <li><a href="#lawyers">弁護士紹介</a></li>
                            <li><a href="#fees">費用</a></li>
                            <li><a href="#access">アクセス</a></li>
                            <li class="nav-consultation"><a href="#consultation">法律相談</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-background">
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=800&fit=crop" alt="法律事務所">
        </div>
        <div class="hero-content">
            <h2>法的トラブルの解決をサポート</h2>
            <p>豊富な経験と専門知識で、お客様の権利と利益を最大限に保護いたします</p>
            <div class="hero-buttons">
                <button class="btn-primary">無料相談予約</button>
                <button class="btn-secondary">取扱業務を見る</button>
            </div>
            <div class="hero-features">
                <div class="feature-item">
                    <span class="feature-icon">🆓</span>
                    <span>初回相談無料</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">📱</span>
                    <span>オンライン相談対応</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">⏰</span>
                    <span>夜間・土日相談可</span>
                </div>
            </div>
        </div>
    </section>

    <section class="urgent-contact">
        <div class="container">
            <div class="urgent-box">
                <div class="urgent-icon">🚨</div>
                <div class="urgent-content">
                    <h3>緊急のご相談・お急ぎの案件</h3>
                    <p>刑事事件・逮捕案件・緊急差し止めなど、お急ぎの案件は24時間対応いたします</p>
                    <a href="tel:03-6789-0123" class="urgent-tel">緊急相談ダイヤル: 03-6789-0123</a>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">事務所について</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>信頼と実績の法律サービス</h3>
                    <p>東京中央法律事務所は、2010年の設立以来、企業法務から個人の権利保護まで、幅広い法的サービスを提供してまいりました。</p>
                    <p>「依頼者第一主義」を基本理念とし、お客様の立場に立った最善の解決策をご提案いたします。</p>
                    <p>複雑な法的問題も、分かりやすい説明と丁寧なサポートで、安心してお任せいただけます。</p>
                    <div class="about-values">
                        <div class="value-item">
                            <h4>迅速対応</h4>
                            <p>お急ぎの案件にも素早く対応</p>
                        </div>
                        <div class="value-item">
                            <h4>明朗会計</h4>
                            <p>費用は事前に明確にご提示</p>
                        </div>
                        <div class="value-item">
                            <h4>守秘徹底</h4>
                            <p>お客様の秘密を厳格に管理</p>
                        </div>
                    </div>
                </div>
                <div class="about-stats">
                    <div class="stat-item">
                        <div class="stat-number">1,200</div>
                        <div class="stat-label">年間相談件数</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">98%</div>
                        <div class="stat-label">解決率</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">13</div>
                        <div class="stat-label">年の実績</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">5</div>
                        <div class="stat-label">専門弁護士数</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">取扱業務</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">⚖️</div>
                    <h3>民事訴訟</h3>
                    <p>契約紛争、損害賠償請求、不動産トラブルなど、民事に関する訴訟案件を取り扱います。</p>
                    <ul class="service-details">
                        <li>契約書作成・チェック</li>
                        <li>債権回収</li>
                        <li>不動産取引トラブル</li>
                        <li>損害賠償請求</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏢</div>
                    <h3>企業法務</h3>
                    <p>企業経営に関する法的サポートを提供。コンプライアンス体制の構築もお任せください。</p>
                    <ul class="service-details">
                        <li>契約書作成・レビュー</li>
                        <li>労働問題対応</li>
                        <li>M&A・事業承継</li>
                        <li>コンプライアンス</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">👥</div>
                    <h3>離婚・家事事件</h3>
                    <p>離婚問題、親権、養育費など、家庭内の法的問題を専門的にサポートします。</p>
                    <ul class="service-details">
                        <li>離婚協議・調停</li>
                        <li>親権・面会交流</li>
                        <li>養育費・財産分与</li>
                        <li>DV・モラハラ対応</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔒</div>
                    <h3>刑事事件</h3>
                    <p>刑事事件の弁護、被害者支援など、刑事法分野の専門的なサービスを提供します。</p>
                    <ul class="service-details">
                        <li>刑事弁護</li>
                        <li>被害者支援</li>
                        <li>少年事件</li>
                        <li>告訴・告発手続き</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">💰</div>
                    <h3>破産・債務整理</h3>
                    <p>個人・法人の破産、民事再生、任意整理など、債務問題の解決をサポートします。</p>
                    <ul class="service-details">
                        <li>自己破産</li>
                        <li>個人再生</li>
                        <li>任意整理</li>
                        <li>法人破産・再生</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏠</div>
                    <h3>不動産法務</h3>
                    <p>不動産売買、賃貸借契約、建築紛争など、不動産に関する法的問題を解決します。</p>
                    <ul class="service-details">
                        <li>売買契約書作成</li>
                        <li>賃貸借トラブル</li>
                        <li>建築紛争</li>
                        <li>境界確定</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="cases" class="cases">
        <div class="container">
            <h2 class="section-title">解決事例</h2>
            <div class="cases-tabs">
                <button class="tab-btn active" data-tab="civil">民事事件</button>
                <button class="tab-btn" data-tab="corporate">企業法務</button>
                <button class="tab-btn" data-tab="family">家事事件</button>
                <button class="tab-btn" data-tab="criminal">刑事事件</button>
            </div>
            <div class="cases-content">
                <div class="tab-content active" id="civil">
                    <div class="case-item">
                        <h4>契約違反による損害賠償請求事件</h4>
                        <div class="case-details">
                            <div class="case-info">
                                <span class="case-type">民事訴訟</span>
                                <span class="case-amount">請求額: 2,000万円</span>
                            </div>
                            <p>建設工事の契約違反により発生した損害について、適切な証拠収集と法的論理構成により、依頼者の請求を全面的に認める判決を獲得。</p>
                        </div>
                    </div>
                    <div class="case-item">
                        <h4>不動産売買契約の解除・原状回復請求</h4>
                        <div class="case-details">
                            <div class="case-info">
                                <span class="case-type">民事調停</span>
                                <span class="case-amount">解決額: 1,500万円</span>
                            </div>
                            <p>欠陥住宅の売買契約について、調停による早期解決を実現。全額返金と慰謝料の支払いを獲得。</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="corporate">
                    <div class="case-item">
                        <h4>労働紛争の解決</h4>
                        <div class="case-details">
                            <div class="case-info">
                                <span class="case-type">労働審判</span>
                                <span class="case-amount">解決額: 800万円</span>
                            </div>
                            <p>不当解雇された従業員からの未払い賃金・慰謝料請求について、労働審判による迅速な解決を実現。</p>
                        </div>
                    </div>
                    <div class="case-item">
                        <h4>企業のM&A取引サポート</h4>
                        <div class="case-details">
                            <div class="case-info">
                                <span class="case-type">企業買収</span>
                                <span class="case-amount">取引額: 5億円</span>
                            </div>
                            <p>中小企業の買収案件において、デューデリジェンスから契約書作成まで包括的にサポート。</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="family">
                    <div class="case-item">
                        <h4>離婚調停での財産分与</h4>
                        <div class="case-details">
                            <div class="case-info">
                                <span class="case-type">家事調停</span>
                                <span class="case-amount">分与額: 3,000万円</span>
                            </div>
                            <p>高額な財産を有する夫婦の離婚事件において、適正な財産評価により依頼者に有利な分与を実現。</p>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="criminal">
                    <div class="case-item">
                        <h4>詐欺罪での無罪判決獲得</h4>
                        <div class="case-details">
                            <div class="case-info">
                                <span class="case-type">刑事弁護</span>
                                <span class="case-amount">結果: 無罪</span>
                            </div>
                            <p>複雑な経済事件における詐欺罪の起訴について、綿密な事実調査と法的論証により無罪判決を獲得。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="lawyers" class="lawyers">
        <div class="container">
            <h2 class="section-title">弁護士紹介</h2>
            <div class="lawyers-grid">
                <div class="lawyer-card">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="代表弁護士">
                    <div class="lawyer-info">
                        <h3>代表弁護士 鈴木 一郎</h3>
                        <p class="lawyer-qualification">弁護士登録: 第12345号</p>
                        <div class="specialties">
                            <span>民事訴訟</span>
                            <span>企業法務</span>
                            <span>不動産法務</span>
                        </div>
                        <p class="lawyer-message">20年以上の豊富な経験で、お客様の法的問題を根本から解決いたします。</p>
                        <div class="lawyer-career">
                            <h4>経歴・資格</h4>
                            <ul>
                                <li>東京大学法学部卒業</li>
                                <li>司法試験合格（平成15年）</li>
                                <li>第二東京弁護士会所属</li>
                                <li>民事調停委員（東京地裁）</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="lawyer-card">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616c33495e4?w=400&h=400&fit=crop" alt="弁護士">
                    <div class="lawyer-info">
                        <h3>弁護士 田中 花子</h3>
                        <p class="lawyer-qualification">弁護士登録: 第67890号</p>
                        <div class="specialties">
                            <span>家事事件</span>
                            <span>刑事事件</span>
                            <span>労働問題</span>
                        </div>
                        <p class="lawyer-message">家庭問題や刑事事件など、デリケートな案件を丁寧にサポートします。</p>
                        <div class="lawyer-career">
                            <h4>経歴・資格</h4>
                            <ul>
                                <li>早稲田大学法学部卒業</li>
                                <li>司法試験合格（平成20年）</li>
                                <li>第一東京弁護士会所属</li>
                                <li>家事調停委員（東京家裁）</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="lawyer-card">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="弁護士">
                    <div class="lawyer-info">
                        <h3>弁護士 佐藤 次郎</h3>
                        <p class="lawyer-qualification">弁護士登録: 第24680号</p>
                        <div class="specialties">
                            <span>破産・再生</span>
                            <span>債務整理</span>
                            <span>企業法務</span>
                        </div>
                        <p class="lawyer-message">債務問題や企業再生の専門家として、最適な解決策をご提案します。</p>
                        <div class="lawyer-career">
                            <h4>経歴・資格</h4>
                            <ul>
                                <li>慶応義塾大学法学部卒業</li>
                                <li>司法試験合格（平成25年）</li>
                                <li>東京弁護士会所属</li>
                                <li>事業再生実務家協会会員</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="fees" class="fees">
        <div class="container">
            <h2 class="section-title">弁護士費用</h2>
            <div class="fees-intro">
                <p>料金体系を明確にし、安心してご依頼いただけるよう心がけています。</p>
                <p>※表示価格は全て税込み価格です。事案の難易度により変動する場合があります。</p>
            </div>
            <div class="fees-grid">
                <div class="fee-category">
                    <h3>相談料</h3>
                    <div class="fee-table">
                        <div class="fee-row">
                            <span class="fee-item">初回相談（60分）</span>
                            <span class="fee-price">無料</span>
                        </div>
                        <div class="fee-row">
                            <span class="fee-item">継続相談（30分）</span>
                            <span class="fee-price">¥11,000</span>
                        </div>
                    </div>
                </div>
                <div class="fee-category">
                    <h3>民事事件</h3>
                    <div class="fee-table">
                        <div class="fee-row">
                            <span class="fee-item">着手金</span>
                            <span class="fee-price">¥330,000〜</span>
                        </div>
                        <div class="fee-row">
                            <span class="fee-item">報酬金</span>
                            <span class="fee-price">回収額の16.5%</span>
                        </div>
                    </div>
                </div>
                <div class="fee-category">
                    <h3>家事事件</h3>
                    <div class="fee-table">
                        <div class="fee-row">
                            <span class="fee-item">離婚調停</span>
                            <span class="fee-price">¥550,000</span>
                        </div>
                        <div class="fee-row">
                            <span class="fee-item">離婚訴訟</span>
                            <span class="fee-price">¥770,000</span>
                        </div>
                    </div>
                </div>
                <div class="fee-category">
                    <h3>刑事事件</h3>
                    <div class="fee-table">
                        <div class="fee-row">
                            <span class="fee-item">接見（1回）</span>
                            <span class="fee-price">¥55,000</span>
                        </div>
                        <div class="fee-row">
                            <span class="fee-item">刑事弁護</span>
                            <span class="fee-price">¥880,000〜</span>
                        </div>
                    </div>
                </div>
                <div class="fee-category">
                    <h3>債務整理</h3>
                    <div class="fee-table">
                        <div class="fee-row">
                            <span class="fee-item">任意整理（1社）</span>
                            <span class="fee-price">¥44,000</span>
                        </div>
                        <div class="fee-row">
                            <span class="fee-item">自己破産</span>
                            <span class="fee-price">¥440,000〜</span>
                        </div>
                    </div>
                </div>
                <div class="fee-category">
                    <h3>企業法務</h3>
                    <div class="fee-table">
                        <div class="fee-row">
                            <span class="fee-item">契約書作成</span>
                            <span class="fee-price">¥110,000〜</span>
                        </div>
                        <div class="fee-row">
                            <span class="fee-item">顧問契約（月額）</span>
                            <span class="fee-price">¥110,000〜</span>
                        </div>
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
                            <td>東京中央法律事務所</td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td>〒100-0001 東京都千代田区千代田1-2-3 リーガルビル8F</td>
                        </tr>
                        <tr>
                            <th>電話</th>
                            <td>03-6789-0123</td>
                        </tr>
                        <tr>
                            <th>受付時間</th>
                            <td>
                                平日: 9:00-20:00<br>
                                土曜: 10:00-18:00
                            </td>
                        </tr>
                        <tr>
                            <th>定休日</th>
                            <td>日曜・祝日（緊急時は対応）</td>
                        </tr>
                        <tr>
                            <th>アクセス</th>
                            <td>
                                JR「東京駅」徒歩5分<br>
                                地下鉄「大手町駅」徒歩3分
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

    <section id="consultation" class="consultation">
        <div class="container">
            <h2 class="section-title">法律相談のご予約</h2>
            <div class="consultation-content">
                <div class="consultation-intro">
                    <h3>初回相談無料</h3>
                    <p>法的トラブルでお困りの方は、まずはお気軽にご相談ください。</p>
                    <p>初回60分のご相談は無料で承っております。</p>
                </div>
                <div class="consultation-methods">
                    <div class="method-card">
                        <div class="method-icon">📞</div>
                        <h4>お電話でのご予約</h4>
                        <p>平日・土曜の受付時間内</p>
                        <a href="tel:03-6789-0123" class="btn-primary">03-6789-0123</a>
                    </div>
                    <div class="method-card">
                        <div class="method-icon">💻</div>
                        <h4>オンライン予約</h4>
                        <p>24時間いつでも予約可能</p>
                        <button class="btn-secondary">予約フォームへ</button>
                    </div>
                    <div class="method-card">
                        <div class="method-icon">📧</div>
                        <h4>メール相談</h4>
                        <p>簡単な質問はメールでも</p>
                        <button class="btn-secondary">メール送信</button>
                    </div>
                </div>
                <div class="consultation-flow">
                    <h4>相談の流れ</h4>
                    <div class="flow-steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <h5>ご予約</h5>
                            <p>お電話またはWebで予約</p>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <h5>ご来所</h5>
                            <p>事務所にてお話をお聞きします</p>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <h5>方針決定</h5>
                            <p>最適な解決策をご提案</p>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <h5>契約・着手</h5>
                            <p>委任契約後、手続き開始</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>⚖️ 東京中央法律事務所</h3>
                    <p>〒100-0001 東京都千代田区千代田1-2-3 リーガルビル8F</p>
                    <p>TEL: 03-6789-0123</p>
                    <p>受付時間: 平日 9:00-20:00 / 土曜 10:00-18:00</p>
                </div>
                <div class="footer-links">
                    <div class="footer-section">
                        <h4>取扱業務</h4>
                        <ul>
                            <li><a href="#services">民事訴訟</a></li>
                            <li><a href="#services">企業法務</a></li>
                            <li><a href="#services">家事事件</a></li>
                            <li><a href="#services">刑事事件</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>事務所情報</h4>
                        <ul>
                            <li><a href="#about">事務所概要</a></li>
                            <li><a href="#lawyers">弁護士紹介</a></li>
                            <li><a href="#fees">費用について</a></li>
                            <li><a href="#">プライバシーポリシー</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="copyright">© 2025 東京中央法律事務所 All Rights Reserved.</p>
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
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    padding: 8px 0;
    font-size: 13px;
    color: white;
}

.header-info {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
}

.header-main {
    background: white;
    box-shadow: 0 2px 15px rgba(26, 35, 126, 0.15);
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
    color: #1a237e;
    font-size: 30px;
    font-weight: 700;
}

.tagline {
    font-size: 12px;
    color: #c7a96b;
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
    color: #1a237e;
}

.nav-consultation a {
    background: linear-gradient(135deg, #c7a96b 0%, #b8935f 100%);
    color: white !important;
    padding: 12px 24px;
    border-radius: 25px;
    transition: all 0.3s;
}

.nav-consultation a:hover {
    background: linear-gradient(135deg, #b8935f 0%, #a08249 100%);
    transform: translateY(-2px);
}

/* Hero */
.hero {
    position: relative;
    height: 90vh;
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
    filter: brightness(0.3);
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(26, 35, 126, 0.8) 0%, rgba(199, 169, 107, 0.6) 100%);
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
    background: linear-gradient(135deg, #c7a96b 0%, #b8935f 100%);
    color: white;
    box-shadow: 0 6px 20px rgba(199, 169, 107, 0.4);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #b8935f 0%, #a08249 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(199, 169, 107, 0.5);
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

/* Urgent Contact */
.urgent-contact {
    background: linear-gradient(135deg, #d32f2f 0%, #f44336 100%);
    padding: 25px 0;
    color: white;
}

.urgent-box {
    display: flex;
    align-items: center;
    gap: 25px;
    max-width: 900px;
    margin: 0 auto;
}

.urgent-icon {
    font-size: 40px;
}

.urgent-content h3 {
    font-size: 22px;
    margin-bottom: 8px;
}

.urgent-tel {
    display: inline-block;
    background: white;
    color: #d32f2f;
    padding: 10px 25px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 15px;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 40px;
    color: #1a237e;
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
    background: linear-gradient(90deg, #1a237e, #c7a96b);
    border-radius: 2px;
}

/* About */
.about {
    background: #f8f9fc;
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    align-items: start;
}

.about-text h3 {
    color: #1a237e;
    margin-bottom: 25px;
    font-size: 30px;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.8;
}

.about-values {
    display: grid;
    gap: 20px;
    margin-top: 40px;
}

.value-item {
    padding: 20px;
    background: white;
    border-radius: 15px;
    border-left: 4px solid #c7a96b;
}

.value-item h4 {
    color: #1a237e;
    margin-bottom: 8px;
}

.about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.stat-item {
    text-align: center;
    padding: 30px 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(26, 35, 126, 0.1);
}

.stat-number {
    display: block;
    font-size: 36px;
    font-weight: bold;
    color: #c7a96b;
    margin-bottom: 10px;
}

.stat-label {
    font-size: 14px;
    color: #666;
}

/* Services */
.services {
    background: white;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
}

.service-card {
    background: #f8f9fc;
    padding: 40px 30px;
    border-radius: 20px;
    transition: all 0.3s;
    border: 2px solid transparent;
}

.service-card:hover {
    transform: translateY(-10px);
    border-color: #1a237e;
    box-shadow: 0 15px 40px rgba(26, 35, 126, 0.15);
}

.service-icon {
    font-size: 50px;
    margin-bottom: 20px;
}

.service-card h3 {
    color: #1a237e;
    margin-bottom: 15px;
    font-size: 24px;
}

.service-card > p {
    margin-bottom: 20px;
    color: #666;
}

.service-details {
    list-style: none;
}

.service-details li {
    padding: 8px 0;
    border-bottom: 1px solid #e0e0e0;
    color: #555;
}

.service-details li:before {
    content: "✓";
    color: #c7a96b;
    font-weight: bold;
    margin-right: 10px;
}

/* Cases */
.cases {
    background: #f8f9fc;
}

.cases-tabs {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.tab-btn {
    padding: 15px 30px;
    background: white;
    border: 2px solid #1a237e;
    color: #1a237e;
    cursor: pointer;
    border-radius: 30px;
    transition: all 0.3s;
    font-weight: 500;
}

.tab-btn.active,
.tab-btn:hover {
    background: #1a237e;
    color: white;
}

.cases-content {
    max-width: 900px;
    margin: 0 auto;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.case-item {
    background: white;
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 25px;
    box-shadow: 0 4px 20px rgba(26, 35, 126, 0.1);
}

.case-item h4 {
    color: #1a237e;
    margin-bottom: 15px;
    font-size: 20px;
}

.case-info {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
}

.case-type {
    background: #1a237e;
    color: white;
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 12px;
}

.case-amount {
    background: #c7a96b;
    color: white;
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 12px;
}

/* Lawyers */
.lawyers {
    background: white;
}

.lawyers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.lawyer-card {
    background: #f8f9fc;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s;
}

.lawyer-card:hover {
    transform: translateY(-5px);
}

.lawyer-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.lawyer-info {
    padding: 30px;
}

.lawyer-info h3 {
    color: #1a237e;
    margin-bottom: 8px;
    font-size: 22px;
}

.lawyer-qualification {
    color: #c7a96b;
    margin-bottom: 15px;
    font-size: 14px;
}

.specialties {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.specialties span {
    background: #e3f2fd;
    color: #1a237e;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
}

.lawyer-message {
    margin-bottom: 25px;
    color: #666;
    line-height: 1.6;
}

.lawyer-career h4 {
    color: #1a237e;
    margin-bottom: 10px;
}

.lawyer-career ul {
    list-style: none;
}

.lawyer-career li {
    padding: 5px 0;
    color: #666;
}

.lawyer-career li:before {
    content: "•";
    color: #c7a96b;
    margin-right: 10px;
}

/* Fees */
.fees {
    background: #f8f9fc;
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

.fees-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
}

.fee-category {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(26, 35, 126, 0.1);
}

.fee-category h3 {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: white;
    padding: 20px;
    margin: 0;
    text-align: center;
    font-size: 20px;
}

.fee-table {
    padding: 20px;
}

.fee-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
}

.fee-row:last-child {
    border-bottom: none;
}

.fee-item {
    font-weight: 500;
}

.fee-price {
    font-size: 18px;
    font-weight: bold;
    color: #c7a96b;
}

/* Access */
.access {
    background: white;
}

.access-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.access-info table {
    width: 100%;
    border-collapse: collapse;
    background: #f8f9fc;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(26, 35, 126, 0.1);
}

.access-info th {
    text-align: left;
    padding: 20px;
    background: #1a237e;
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
    background: #f8f9fc;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(26, 35, 126, 0.1);
}

.map-placeholder {
    font-size: 60px;
    color: #1a237e;
}

/* Consultation */
.consultation {
    background: linear-gradient(135deg, #f8f9fc 0%, #e8eaf6 100%);
}

.consultation-intro {
    text-align: center;
    margin-bottom: 50px;
}

.consultation-intro h3 {
    color: #1a237e;
    font-size: 28px;
    margin-bottom: 15px;
}

.consultation-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.method-card {
    text-align: center;
    padding: 40px 30px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(26, 35, 126, 0.1);
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
    color: #1a237e;
    margin-bottom: 10px;
}

.method-card p {
    margin-bottom: 20px;
    color: #666;
}

.consultation-flow {
    max-width: 800px;
    margin: 0 auto;
}

.consultation-flow h4 {
    text-align: center;
    color: #1a237e;
    margin-bottom: 30px;
    font-size: 24px;
}

.flow-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
}

.step {
    text-align: center;
    padding: 30px 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.1);
}

.step-number {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #c7a96b 0%, #b8935f 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 20px;
    font-weight: bold;
}

.step h5 {
    color: #1a237e;
    margin-bottom: 10px;
}

.step p {
    font-size: 14px;
    color: #666;
}

/* Footer */
.footer {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
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
    color: #c7a96b;
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
    color: #c7a96b;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255,255,255,0.2);
    color: #9fa8da;
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
    
    .urgent-box {
        flex-direction: column;
        text-align: center;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .about-stats {
        grid-template-columns: 1fr 1fr;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .cases-tabs {
        flex-direction: column;
        align-items: center;
    }
    
    .lawyers-grid {
        grid-template-columns: 1fr;
    }
    
    .fees-grid {
        grid-template-columns: 1fr;
    }
    
    .access-content {
        grid-template-columns: 1fr;
    }
    
    .consultation-methods {
        grid-template-columns: 1fr;
    }
    
    .flow-steps {
        grid-template-columns: 1fr 1fr;
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

// 相談予約ボタンのクリック処理
document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.textContent.includes('03-6789-0123')) return;
    
    button.addEventListener('click', function() {
        if (button.textContent.includes('無料相談予約') || button.textContent.includes('初回相談無料')) {
            alert('法律相談の予約を承ります。お電話またはWebフォームからお申し込みください。');
        }
    });
});

// その他のボタンのクリック処理
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        if (button.textContent === '取扱業務を見る') {
            e.preventDefault();
            document.getElementById('services').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        } else if (button.textContent === '予約フォームへ') {
            alert('オンライン予約フォームへ移動します（実装予定）');
        } else if (button.textContent === 'メール送信') {
            alert('メール相談フォームへ移動します（実装予定）');
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
            alert('お電話でのご相談: ' + this.textContent);
        }
    });
});

// サービスカードのホバー効果
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// 料金表の行にホバー効果
document.querySelectorAll('.fee-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f5f5f5';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

// 事例カードのクリック処理
document.querySelectorAll('.case-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        const title = this.querySelector('h4').textContent;
        alert(\`解決事例の詳細: \${title}\n\n詳細な内容については、直接お問い合わせください。\`);
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
        const increment = finalValue / 50;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = stat.textContent; // 元の値（%記号等を保持）
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue);
            }
        }, 30);
    });
});

// 緊急相談ボックスの点滅効果
setInterval(() => {
    const urgentIcon = document.querySelector('.urgent-icon');
    if (urgentIcon) {
        urgentIcon.style.opacity = urgentIcon.style.opacity === '0.5' ? '1' : '0.5';
    }
}, 1000);`
  }
}