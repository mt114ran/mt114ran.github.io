import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const retailFlowerTemplate: WebTemplate = {
  id: 'retail-flower',
  title: '小売店 - フラワーショップ',
  category: TEMPLATE_CATEGORIES.RETAIL,
  description: '美しく上品なフラワーショップ向けWebサイトテンプレート',
  thumbnail: '/template-images/retail-flower.jpg',
  features: [
    '季節の花の紹介',
    'フラワーアレンジメント',
    'ブーケオーダー',
    'お手入れガイド'
  ],
  tags: ['フラワーショップ', '美しい', '上品', '花'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BLOOM GARDEN - 花のある暮らしをお手伝い</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1 class="logo">BLOOM GARDEN</h1>
                <nav class="nav">
                    <ul>
                        <li><a href="#flowers">季節の花</a></li>
                        <li><a href="#arrangements">アレンジメント</a></li>
                        <li><a href="#bouquets">ブーケ</a></li>
                        <li><a href="#care">お手入れ</a></li>
                        <li><a href="#about">店舗案内</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <button class="care-guide-btn">お手入れガイド</button>
                    <button class="order-btn">オーダー相談</button>
                </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h2>花のある暮らしを<br>お手伝い</h2>
                <p>季節の美しい花々で、あなたの毎日を彩ります</p>
                <a href="#flowers" class="btn-bloom">季節の花を見る</a>
            </div>
        </div>
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1563241527-3004b7be0fba?w=1920&h=800&fit=crop&q=80" alt="美しい花束">
        </div>
    </section>

    <section class="flower-promise">
        <div class="container">
            <div class="promise-grid">
                <div class="promise-item">
                    <div class="promise-icon">🌸</div>
                    <h3>新鮮な花々</h3>
                    <p>毎日市場から仕入れる新鮮な花</p>
                </div>
                <div class="promise-item">
                    <div class="promise-icon">🎨</div>
                    <h3>オリジナルアレンジ</h3>
                    <p>お客様のご要望に合わせた特別なアレンジ</p>
                </div>
                <div class="promise-item">
                    <div class="promise-icon">💝</div>
                    <h3>ギフトラッピング</h3>
                    <p>大切な方への贈り物を美しく包装</p>
                </div>
                <div class="promise-item">
                    <div class="promise-icon">🌿</div>
                    <h3>アフターケア</h3>
                    <p>お花を長く楽しむためのサポート</p>
                </div>
            </div>
        </div>
    </section>

    <section id="flowers" class="seasonal-flowers">
        <div class="container">
            <h2 class="section-title">季節の花</h2>
            <div class="season-tabs">
                <button class="season-tab active" data-season="summer">夏の花</button>
                <button class="season-tab" data-season="autumn">秋の花</button>
                <button class="season-tab" data-season="winter">冬の花</button>
                <button class="season-tab" data-season="spring">春の花</button>
            </div>
            <div class="flowers-grid">
                <div class="flower-card" data-season="summer">
                    <div class="flower-image">
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop&q=80" alt="ひまわり">
                        <div class="flower-overlay">
                            <button class="flower-detail-btn">詳細を見る</button>
                            <button class="add-to-bouquet" data-flower="sunflower">ブーケに追加</button>
                        </div>
                    </div>
                    <div class="flower-info">
                        <h3>ひまわり</h3>
                        <p class="flower-season">夏の代表花</p>
                        <p class="flower-meaning">花言葉: 愛慕、崇拝</p>
                        <div class="flower-details">
                            <span class="price">¥300/本</span>
                            <span class="availability">在庫あり</span>
                        </div>
                    </div>
                </div>
                <div class="flower-card" data-season="summer">
                    <div class="flower-image">
                        <img src="https://images.unsplash.com/photo-1595808408017-ac790ea0e56c?w=400&h=300&fit=crop&q=80" alt="ガーベラ">
                        <div class="flower-overlay">
                            <button class="flower-detail-btn">詳細を見る</button>
                            <button class="add-to-bouquet" data-flower="gerbera">ブーケに追加</button>
                        </div>
                    </div>
                    <div class="flower-info">
                        <h3>ガーベラ</h3>
                        <p class="flower-season">通年人気</p>
                        <p class="flower-meaning">花言葉: 希望、常に前進</p>
                        <div class="flower-details">
                            <span class="price">¥250/本</span>
                            <span class="availability">在庫あり</span>
                        </div>
                    </div>
                </div>
                <div class="flower-card" data-season="autumn">
                    <div class="flower-image">
                        <img src="https://images.unsplash.com/photo-1541514458730-2a768ebe34a9?w=400&h=300&fit=crop&q=80" alt="菊">
                        <div class="flower-overlay">
                            <button class="flower-detail-btn">詳細を見る</button>
                            <button class="add-to-bouquet" data-flower="chrysanthemum">ブーケに追加</button>
                        </div>
                    </div>
                    <div class="flower-info">
                        <h3>菊</h3>
                        <p class="flower-season">秋の花</p>
                        <p class="flower-meaning">花言葉: 高貴、高尚</p>
                        <div class="flower-details">
                            <span class="price">¥200/本</span>
                            <span class="availability">在庫あり</span>
                        </div>
                    </div>
                </div>
                <div class="flower-card" data-season="autumn">
                    <div class="flower-image">
                        <img src="https://images.unsplash.com/photo-1571149122634-6e4c68aef7b4?w=400&h=300&fit=crop&q=80" alt="コスモス">
                        <div class="flower-overlay">
                            <button class="flower-detail-btn">詳細を見る</button>
                            <button class="add-to-bouquet" data-flower="cosmos">ブーケに追加</button>
                        </div>
                    </div>
                    <div class="flower-info">
                        <h3>コスモス</h3>
                        <p class="flower-season">秋の花</p>
                        <p class="flower-meaning">花言葉: 調和、謙虚</p>
                        <div class="flower-details">
                            <span class="price">¥180/本</span>
                            <span class="availability">在庫あり</span>
                        </div>
                    </div>
                </div>
                <div class="flower-card" data-season="winter">
                    <div class="flower-image">
                        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80" alt="シクラメン">
                        <div class="flower-overlay">
                            <button class="flower-detail-btn">詳細を見る</button>
                            <button class="add-to-bouquet" data-flower="cyclamen">ブーケに追加</button>
                        </div>
                    </div>
                    <div class="flower-info">
                        <h3>シクラメン</h3>
                        <p class="flower-season">冬の花</p>
                        <p class="flower-meaning">花言葉: 遠慮、気後れ</p>
                        <div class="flower-details">
                            <span class="price">¥450/鉢</span>
                            <span class="availability">在庫あり</span>
                        </div>
                    </div>
                </div>
                <div class="flower-card" data-season="spring">
                    <div class="flower-image">
                        <img src="https://images.unsplash.com/photo-1490048642762-5d48e5cb0d90?w=400&h=300&fit=crop&q=80" alt="桜">
                        <div class="flower-overlay">
                            <button class="flower-detail-btn">詳細を見る</button>
                            <button class="add-to-bouquet" data-flower="cherry">ブーケに追加</button>
                        </div>
                    </div>
                    <div class="flower-info">
                        <h3>桜</h3>
                        <p class="flower-season">春の花</p>
                        <p class="flower-meaning">花言葉: 精神美、優美な女性</p>
                        <div class="flower-details">
                            <span class="price">¥500/枝</span>
                            <span class="availability">期間限定</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="arrangements" class="arrangements">
        <div class="container">
            <h2 class="section-title">フラワーアレンジメント</h2>
            <div class="arrangement-categories">
                <button class="arrangement-tab active" data-category="table">テーブル</button>
                <button class="arrangement-tab" data-category="wall">壁掛け</button>
                <button class="arrangement-tab" data-category="standing">スタンディング</button>
                <button class="arrangement-tab" data-category="wreath">リース</button>
            </div>
            <div class="arrangement-grid">
                <div class="arrangement-card" data-category="table">
                    <div class="arrangement-image">
                        <img src="https://images.unsplash.com/photo-1563241527-3004b7be0fba?w=400&h=350&fit=crop&q=80" alt="テーブルアレンジメント">
                        <div class="arrangement-overlay">
                            <button class="order-arrangement" data-type="table-basic">オーダーする</button>
                        </div>
                    </div>
                    <div class="arrangement-info">
                        <h3>テーブルアレンジメント - ベーシック</h3>
                        <p class="arrangement-description">食卓を彩る上品なアレンジメント</p>
                        <div class="arrangement-specs">
                            <span>サイズ: 約30cm</span>
                            <span>花材: 季節の花5-7種</span>
                            <span>所要時間: 2-3日</span>
                        </div>
                        <div class="arrangement-price">
                            <span class="price-range">¥3,500 - ¥6,000</span>
                        </div>
                    </div>
                </div>
                <div class="arrangement-card" data-category="wall">
                    <div class="arrangement-image">
                        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=350&fit=crop&q=80" alt="壁掛けアレンジメント">
                        <div class="arrangement-overlay">
                            <button class="order-arrangement" data-type="wall-basic">オーダーする</button>
                        </div>
                    </div>
                    <div class="arrangement-info">
                        <h3>壁掛けアレンジメント</h3>
                        <p class="arrangement-description">空間を華やかに演出する壁掛けタイプ</p>
                        <div class="arrangement-specs">
                            <span>サイズ: 約40cm</span>
                            <span>花材: ドライフラワー含む</span>
                            <span>所要時間: 3-4日</span>
                        </div>
                        <div class="arrangement-price">
                            <span class="price-range">¥4,500 - ¥8,000</span>
                        </div>
                    </div>
                </div>
                <div class="arrangement-card" data-category="standing">
                    <div class="arrangement-image">
                        <img src="https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=350&fit=crop&q=80" alt="スタンディングアレンジメント">
                        <div class="arrangement-overlay">
                            <button class="order-arrangement" data-type="standing-luxury">オーダーする</button>
                        </div>
                    </div>
                    <div class="arrangement-info">
                        <h3>スタンディングアレンジメント</h3>
                        <p class="arrangement-description">開店祝いやイベントに最適な大型アレンジ</p>
                        <div class="arrangement-specs">
                            <span>サイズ: 約100cm</span>
                            <span>花材: 豪華な花材使用</span>
                            <span>所要時間: 1週間</span>
                        </div>
                        <div class="arrangement-price">
                            <span class="price-range">¥15,000 - ¥30,000</span>
                        </div>
                    </div>
                </div>
                <div class="arrangement-card" data-category="wreath">
                    <div class="arrangement-image">
                        <img src="https://images.unsplash.com/photo-1513081041507-5f1be7e5c8a1?w=400&h=350&fit=crop&q=80" alt="リース">
                        <div class="arrangement-overlay">
                            <button class="order-arrangement" data-type="wreath-seasonal">オーダーする</button>
                        </div>
                    </div>
                    <div class="arrangement-info">
                        <h3>季節のリース</h3>
                        <p class="arrangement-description">玄関やお部屋のドアを彩るリース</p>
                        <div class="arrangement-specs">
                            <span>サイズ: 約35cm</span>
                            <span>花材: 季節の花・葉物</span>
                            <span>所要時間: 2-3日</span>
                        </div>
                        <div class="arrangement-price">
                            <span class="price-range">¥2,800 - ¥5,500</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="bouquets" class="bouquets">
        <div class="container">
            <h2 class="section-title">ブーケ・花束</h2>
            <div class="bouquet-purposes">
                <div class="purpose-tabs">
                    <button class="purpose-tab active" data-purpose="wedding">ウェディング</button>
                    <button class="purpose-tab" data-purpose="gift">ギフト</button>
                    <button class="purpose-tab" data-purpose="celebration">お祝い</button>
                    <button class="purpose-tab" data-purpose="sympathy">お悔やみ</button>
                </div>
            </div>
            <div class="bouquet-grid">
                <div class="bouquet-card" data-purpose="wedding">
                    <div class="bouquet-image">
                        <img src="https://images.unsplash.com/photo-1519566401303-c64a24583d60?w=400&h=400&fit=crop&q=80" alt="ウェディングブーケ">
                        <span class="popular-badge">人気</span>
                        <button class="order-bouquet" data-bouquet="wedding-classic">オーダーする</button>
                    </div>
                    <div class="bouquet-info">
                        <h3>クラシックウェディングブーケ</h3>
                        <p class="bouquet-description">純白のバラを中心とした上品なブーケ</p>
                        <div class="bouquet-features">
                            <span>🌹 白バラメイン</span>
                            <span>🎀 サテンリボン</span>
                            <span>💍 ブートニア付き</span>
                        </div>
                        <div class="bouquet-pricing">
                            <span class="base-price">¥12,000〜</span>
                            <span class="custom-note">カスタマイズ可能</span>
                        </div>
                    </div>
                </div>
                <div class="bouquet-card" data-purpose="gift">
                    <div class="bouquet-image">
                        <img src="https://images.unsplash.com/photo-1586166169097-ab63453abe35?w=400&h=400&fit=crop&q=80" alt="ギフトブーケ">
                        <button class="order-bouquet" data-bouquet="gift-colorful">オーダーする</button>
                    </div>
                    <div class="bouquet-info">
                        <h3>カラフルギフトブーケ</h3>
                        <p class="bouquet-description">明るく華やかな色合いのブーケ</p>
                        <div class="bouquet-features">
                            <span>🌈 季節の色彩</span>
                            <span>📦 ギフトボックス</span>
                            <span>💌 メッセージカード</span>
                        </div>
                        <div class="bouquet-pricing">
                            <span class="base-price">¥4,500〜</span>
                            <span class="custom-note">サイズ選択可</span>
                        </div>
                    </div>
                </div>
                <div class="bouquet-card" data-purpose="celebration">
                    <div class="bouquet-image">
                        <img src="https://images.unsplash.com/photo-1563241527-3004b7be0fba?w=400&h=400&fit=crop&q=80" alt="お祝いブーケ">
                        <span class="premium-badge">プレミアム</span>
                        <button class="order-bouquet" data-bouquet="celebration-luxury">オーダーする</button>
                    </div>
                    <div class="bouquet-info">
                        <h3>お祝い豪華ブーケ</h3>
                        <p class="bouquet-description">特別な日を彩る豪華なブーケ</p>
                        <div class="bouquet-features">
                            <span>👑 高級花材使用</span>
                            <span>🎊 ゴールドリボン</span>
                            <span>📱 お届け写真送付</span>
                        </div>
                        <div class="bouquet-pricing">
                            <span class="base-price">¥8,000〜</span>
                            <span class="custom-note">完全オーダーメイド</span>
                        </div>
                    </div>
                </div>
                <div class="bouquet-card" data-purpose="sympathy">
                    <div class="bouquet-image">
                        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&q=80" alt="お悔やみの花">
                        <button class="order-bouquet" data-bouquet="sympathy-white">オーダーする</button>
                    </div>
                    <div class="bouquet-info">
                        <h3>お悔やみの花束</h3>
                        <p class="bouquet-description">故人を偲ぶ心を込めた花束</p>
                        <div class="bouquet-features">
                            <span>🤍 白色基調</span>
                            <span>🕊️ 上品な仕上がり</span>
                            <span>📞 お急ぎ対応可</span>
                        </div>
                        <div class="bouquet-pricing">
                            <span class="base-price">¥5,000〜</span>
                            <span class="custom-note">当日配送可能</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="custom-order">
        <div class="container">
            <div class="custom-content">
                <div class="custom-text">
                    <h2>オーダーメイドフラワー</h2>
                    <p>お客様のご要望に合わせて、世界に一つだけのフラワーアレンジメントをお作りします。</p>
                    <div class="custom-process">
                        <div class="process-step">
                            <div class="step-number">1</div>
                            <h3>ご相談</h3>
                            <p>用途やご希望をお聞かせください</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">2</div>
                            <h3>デザイン提案</h3>
                            <p>イメージに合わせてデザインをご提案</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">3</div>
                            <h3>制作</h3>
                            <p>丁寧に心を込めてお作りします</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">4</div>
                            <h3>お渡し</h3>
                            <p>店頭受取・配送をお選びいただけます</p>
                        </div>
                    </div>
                    <button class="btn-bloom consultation-btn">無料相談を申し込む</button>
                </div>
                <div class="custom-visual">
                    <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&q=80" alt="オーダーメイドフラワー">
                </div>
            </div>
        </div>
    </section>

    <section id="care" class="flower-care">
        <div class="container">
            <h2 class="section-title">お花のお手入れ方法</h2>
            <div class="care-tabs">
                <button class="care-tab active" data-care="fresh">切り花</button>
                <button class="care-tab" data-care="potted">鉢植え</button>
                <button class="care-tab" data-care="arrangement">アレンジメント</button>
            </div>
            <div class="care-content">
                <div class="care-section active" data-care="fresh">
                    <div class="care-tips">
                        <div class="tip-card">
                            <div class="tip-icon">✂️</div>
                            <h3>茎の切り方</h3>
                            <p>水中でななめに切ることで水の吸い上げが良くなります。</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-icon">💧</div>
                            <h3>水の管理</h3>
                            <p>毎日水を替え、花瓶をきれいに洗いましょう。</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-icon">🌡️</div>
                            <h3>温度管理</h3>
                            <p>直射日光を避け、涼しい場所に置きましょう。</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-icon">🍃</div>
                            <h3>葉の処理</h3>
                            <p>水に浸かる部分の葉は取り除きましょう。</p>
                        </div>
                    </div>
                </div>
                <div class="care-section" data-care="potted">
                    <div class="care-tips">
                        <div class="tip-card">
                            <div class="tip-icon">💧</div>
                            <h3>水やり</h3>
                            <p>土の表面が乾いたらたっぷりと水をあげましょう。</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-icon">☀️</div>
                            <h3>日光</h3>
                            <p>適度な日光を当て、風通しの良い場所に置きましょう。</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-icon">🌱</div>
                            <h3>肥料</h3>
                            <p>月に1-2回、液体肥料を希釈して与えましょう。</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-icon">✂️</div>
                            <h3>剪定</h3>
                            <p>枯れた花や葉を取り除き、形を整えましょう。</p>
                        </div>
                    </div>
                </div>
                <div class="care-section" data-care="arrangement">
                    <div class="care-tips">
                        <div class="tip-card">
                            <div class="tip-icon">💧</div>
                            <h3>水の補給</h3>
                            <p>オアシスが乾燥しないよう、定期的に水を足しましょう。</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-icon">❄️</div>
                            <h3>温度管理</h3>
                            <p>エアコンの風が直接当たらない場所に置きましょう。</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-icon">🍃</div>
                            <h3>お手入れ</h3>
                            <p>枯れた花は取り除き、全体のバランスを保ちましょう。</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-icon">🌿</div>
                            <h3>延命剤</h3>
                            <p>延命剤を使用することで、より長く楽しめます。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about-shop">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>BLOOM GARDENについて</h2>
                    <p>2010年の開店以来、地域の皆様に愛され続けているフラワーショップです。</p>
                    <p>経験豊富なフローリストが、お客様の大切な瞬間を彩る花をご提案いたします。季節の花から特別なオーダーまで、心を込めてお作りします。</p>
                    <div class="shop-features">
                        <div class="feature-item">
                            <h3>🌸 季節の花</h3>
                            <p>市場から毎日仕入れる新鮮な季節の花</p>
                        </div>
                        <div class="feature-item">
                            <h3>🎨 オリジナルアレンジ</h3>
                            <p>お客様のご要望に合わせたオーダーメイド</p>
                        </div>
                        <div class="feature-item">
                            <h3>🚚 配送サービス</h3>
                            <p>大切な方への贈り物を心を込めてお届け</p>
                        </div>
                    </div>
                    <div class="shop-info">
                        <h3>店舗情報</h3>
                        <p>📍 〒107-0052 東京都港区赤坂3-12-5</p>
                        <p>📞 TEL: 03-2345-6789</p>
                        <p>🕐 営業時間: 9:00-19:00（日曜定休）</p>
                        <p>🚇 地下鉄赤坂見附駅 徒歩3分</p>
                    </div>
                </div>
                <div class="about-visual">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80" alt="店舗内観">
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>BLOOM GARDEN</h3>
                    <p>花のある暮らしをお手伝い</p>
                    <div class="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Pinterest</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>商品・サービス</h3>
                    <ul>
                        <li><a href="#">季節の花</a></li>
                        <li><a href="#">フラワーアレンジメント</a></li>
                        <li><a href="#">ブーケ・花束</a></li>
                        <li><a href="#">鉢植え・観葉植物</a></li>
                        <li><a href="#">ドライフラワー</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>サービス</h3>
                    <ul>
                        <li><a href="#">オーダーメイド</a></li>
                        <li><a href="#">配送サービス</a></li>
                        <li><a href="#">ウェディング装花</a></li>
                        <li><a href="#">イベント装花</a></li>
                        <li><a href="#">お手入れサポート</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>お問い合わせ</h3>
                    <p>📞 03-2345-6789</p>
                    <p>✉️ info@bloomgarden.com</p>
                    <p>営業時間: 9:00-19:00（日曜定休）</p>
                </div>
            </div>
            <p class="copyright">&copy; 2025 BLOOM GARDEN. All rights reserved.</p>
        </div>
    </footer>

    <!-- Care Guide Modal -->
    <div class="modal" id="care-guide-modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>お花のお手入れクイックガイド</h3>
            <div class="quick-care-guide">
                <div class="quick-tip">
                    <h4>切り花を長持ちさせるコツ</h4>
                    <ul>
                        <li>茎を水中でななめに切る</li>
                        <li>毎日水を替える</li>
                        <li>延命剤を使用する</li>
                        <li>直射日光を避ける</li>
                    </ul>
                </div>
                <div class="quick-tip">
                    <h4>鉢植えのお手入れ</h4>
                    <ul>
                        <li>土の表面が乾いたら水やり</li>
                        <li>適度な日光と風通し</li>
                        <li>月1-2回の肥料</li>
                        <li>枯れた部分の剪定</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Helvetica Neue', 'Yu Gothic', sans-serif;
    color: #2d5016;
    line-height: 1.6;
    background: #fdfffe;
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
    box-shadow: 0 2px 20px rgba(232, 121, 149, 0.1);
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
    color: #e87995;
    text-shadow: 1px 1px 3px rgba(232, 121, 149, 0.3);
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav a {
    text-decoration: none;
    color: #2d5016;
    font-size: 16px;
    font-weight: 400;
    transition: color 0.3s;
    position: relative;
}

.nav a:hover {
    color: #e87995;
}

.nav a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #e87995;
    transition: width 0.3s;
}

.nav a:hover::after {
    width: 100%;
}

.header-actions {
    display: flex;
    gap: 15px;
}

.care-guide-btn,
.order-btn {
    background: linear-gradient(45deg, #e87995, #f8a5c2);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 2px 10px rgba(232, 121, 149, 0.3);
}

.care-guide-btn:hover,
.order-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(232, 121, 149, 0.4);
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
    filter: brightness(0.7);
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
}

.hero-text h2 {
    font-size: 56px;
    font-weight: 300;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    line-height: 1.2;
}

.hero-text p {
    font-size: 22px;
    margin-bottom: 40px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    font-weight: 300;
}

.btn-bloom {
    display: inline-block;
    padding: 18px 40px;
    background: linear-gradient(45deg, #e87995, #f8a5c2);
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.3s;
    box-shadow: 0 8px 25px rgba(232, 121, 149, 0.4);
    cursor: pointer;
}

.btn-bloom:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(232, 121, 149, 0.5);
}

/* Flower Promise */
.flower-promise {
    background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%);
    padding: 80px 0;
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
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(232, 121, 149, 0.1);
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
    color: #e87995;
    font-weight: 500;
}

.promise-item p {
    color: #666;
    line-height: 1.7;
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
    color: #2d5016;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #e87995, #f8a5c2);
    margin: 20px auto;
    border-radius: 2px;
}

/* Seasonal Flowers */
.seasonal-flowers {
    background: white;
}

.season-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.season-tab {
    background: white;
    border: 2px solid #e0e0e0;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    color: #666;
    position: relative;
}

.season-tab.active,
.season-tab:hover {
    background: linear-gradient(45deg, #e87995, #f8a5c2);
    border-color: transparent;
    color: white;
}

.flowers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.flower-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.flower-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

.flower-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.flower-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.flower-card:hover .flower-image img {
    transform: scale(1.05);
}

.flower-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    opacity: 0;
    transition: opacity 0.3s;
}

.flower-card:hover .flower-overlay {
    opacity: 1;
}

.flower-detail-btn,
.add-to-bouquet {
    background: rgba(232, 121, 149, 0.9);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 15px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s;
}

.add-to-bouquet {
    background: rgba(45, 80, 22, 0.9);
}

.flower-info {
    padding: 25px;
}

.flower-info h3 {
    font-size: 20px;
    margin-bottom: 8px;
    color: #2d5016;
    font-weight: 500;
}

.flower-season {
    color: #e87995;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
}

.flower-meaning {
    color: #666;
    font-size: 14px;
    margin-bottom: 15px;
    font-style: italic;
}

.flower-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flower-details .price {
    font-size: 18px;
    color: #e87995;
    font-weight: bold;
}

.availability {
    background: #e8f5e9;
    color: #2e7d32;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 500;
}

/* Arrangements */
.arrangements {
    background: #f8f9fa;
}

.arrangement-categories {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.arrangement-tab {
    background: white;
    border: 2px solid #e0e0e0;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    color: #666;
}

.arrangement-tab.active,
.arrangement-tab:hover {
    background: linear-gradient(45deg, #2d5016, #4caf50);
    border-color: transparent;
    color: white;
}

.arrangement-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
}

.arrangement-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.arrangement-card:hover {
    transform: translateY(-5px);
}

.arrangement-image {
    position: relative;
    height: 280px;
    overflow: hidden;
}

.arrangement-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.arrangement-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.arrangement-card:hover .arrangement-overlay {
    opacity: 1;
}

.order-arrangement {
    background: #e87995;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.arrangement-info {
    padding: 25px;
}

.arrangement-info h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #2d5016;
    font-weight: 500;
}

.arrangement-description {
    color: #666;
    margin-bottom: 15px;
    font-size: 14px;
}

.arrangement-specs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
}

.arrangement-specs span {
    background: #f1f3f4;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    color: #666;
}

.price-range {
    font-size: 18px;
    color: #e87995;
    font-weight: bold;
}

/* Bouquets */
.bouquets {
    background: white;
}

.bouquet-purposes {
    margin-bottom: 50px;
}

.purpose-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.purpose-tab {
    background: white;
    border: 2px solid #e0e0e0;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    color: #666;
}

.purpose-tab.active,
.purpose-tab:hover {
    background: linear-gradient(45deg, #e87995, #f8a5c2);
    border-color: transparent;
    color: white;
}

.bouquet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.bouquet-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.bouquet-card:hover {
    transform: translateY(-5px);
}

.bouquet-image {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.bouquet-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.popular-badge,
.premium-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
    color: white;
}

.popular-badge {
    background: #ff9800;
}

.premium-badge {
    background: #9c27b0;
}

.order-bouquet {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(232, 121, 149, 0.9);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 15px;
    font-size: 12px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s;
}

.bouquet-card:hover .order-bouquet {
    opacity: 1;
}

.bouquet-info {
    padding: 25px;
}

.bouquet-info h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #2d5016;
    font-weight: 500;
}

.bouquet-description {
    color: #666;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.6;
}

.bouquet-features {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
}

.bouquet-features span {
    background: #fce4ec;
    color: #e87995;
    padding: 4px 8px;
    border-radius: 10px;
    font-size: 12px;
}

.bouquet-pricing {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.base-price {
    font-size: 18px;
    color: #e87995;
    font-weight: bold;
}

.custom-note {
    font-size: 12px;
    color: #666;
    font-style: italic;
}

/* Custom Order */
.custom-order {
    background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%);
}

.custom-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.custom-text h2 {
    font-size: 36px;
    margin-bottom: 25px;
    color: #2d5016;
    font-weight: 300;
}

.custom-text > p {
    margin-bottom: 40px;
    color: #666;
    line-height: 1.8;
    font-size: 16px;
}

.custom-process {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin-bottom: 40px;
}

.process-step {
    text-align: center;
    padding: 25px 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.step-number {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #e87995, #f8a5c2);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: 0 auto 15px;
}

.process-step h3 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #2d5016;
}

.process-step p {
    color: #666;
    font-size: 14px;
}

.custom-visual img {
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

/* Flower Care */
.flower-care {
    background: white;
}

.care-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.care-tab {
    background: white;
    border: 2px solid #e0e0e0;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    color: #666;
}

.care-tab.active,
.care-tab:hover {
    background: linear-gradient(45deg, #2d5016, #4caf50);
    border-color: transparent;
    color: white;
}

.care-content {
    position: relative;
}

.care-section {
    display: none;
}

.care-section.active {
    display: block;
}

.care-tips {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.tip-card {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s;
}

.tip-card:hover {
    background: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transform: translateY(-5px);
}

.tip-icon {
    font-size: 36px;
    margin-bottom: 20px;
    display: block;
}

.tip-card h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #2d5016;
}

.tip-card p {
    color: #666;
    font-size: 14px;
    line-height: 1.6;
}

/* About Shop */
.about-shop {
    background: #f8f9fa;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

.about-text h2 {
    font-size: 36px;
    margin-bottom: 25px;
    color: #2d5016;
    font-weight: 300;
}

.about-text p {
    margin-bottom: 20px;
    color: #666;
    line-height: 1.8;
}

.shop-features {
    margin: 40px 0;
}

.feature-item {
    margin-bottom: 25px;
    padding: 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.feature-item h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #e87995;
}

.feature-item p {
    color: #666;
    font-size: 14px;
    margin: 0;
}

.shop-info {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.shop-info h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #e87995;
}

.shop-info p {
    margin-bottom: 8px;
    color: #666;
}

.about-visual img {
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

/* Footer */
.footer {
    background: #2d5016;
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
    color: #f8a5c2;
    font-size: 18px;
    font-weight: 500;
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
    color: #f8a5c2;
}

.social-links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid #4a6741;
    color: #ccc;
    font-size: 14px;
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
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
}

.modal-content {
    background-color: white;
    margin: 10% auto;
    padding: 40px;
    border-radius: 20px;
    width: 80%;
    max-width: 600px;
    position: relative;
}

.close {
    position: absolute;
    top: 15px;
    right: 25px;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover {
    color: #e87995;
}

.quick-care-guide {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.quick-tip h4 {
    margin-bottom: 15px;
    color: #2d5016;
    font-size: 18px;
}

.quick-tip ul {
    list-style: none;
}

.quick-tip ul li {
    margin-bottom: 8px;
    color: #666;
    padding-left: 20px;
    position: relative;
}

.quick-tip ul li::before {
    content: '🌸';
    position: absolute;
    left: 0;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-text h2 {
        font-size: 36px;
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
    
    .about-content,
    .custom-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .custom-process {
        grid-template-columns: 1fr;
    }
    
    .quick-care-guide {
        grid-template-columns: 1fr;
    }
    
    .modal-content {
        width: 95%;
        margin: 20% auto;
    }
    
    .season-tabs,
    .arrangement-categories,
    .purpose-tabs,
    .care-tabs {
        justify-content: center;
        gap: 10px;
    }
}`,
    js: `// Season tabs for flowers
document.querySelectorAll('.season-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const season = this.dataset.season;
        
        // Update active tab
        document.querySelectorAll('.season-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide flower cards
        document.querySelectorAll('.flower-card').forEach(card => {
            if (card.dataset.season === season) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Arrangement category tabs
document.querySelectorAll('.arrangement-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Update active tab
        document.querySelectorAll('.arrangement-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide arrangement cards
        document.querySelectorAll('.arrangement-card').forEach(card => {
            if (card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Bouquet purpose tabs
document.querySelectorAll('.purpose-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const purpose = this.dataset.purpose;
        
        // Update active tab
        document.querySelectorAll('.purpose-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide bouquet cards
        document.querySelectorAll('.bouquet-card').forEach(card => {
            if (card.dataset.purpose === purpose) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Care tabs
document.querySelectorAll('.care-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const care = this.dataset.care;
        
        // Update active tab
        document.querySelectorAll('.care-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Show/hide care sections
        document.querySelectorAll('.care-section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(\`[data-care="\${care}"]\`).classList.add('active');
    });
});

// Flower detail and bouquet actions
document.querySelectorAll('.flower-detail-btn').forEach(button => {
    button.addEventListener('click', function() {
        const flowerCard = this.closest('.flower-card');
        const flowerName = flowerCard.querySelector('h3').textContent;
        const meaning = flowerCard.querySelector('.flower-meaning').textContent;
        const price = flowerCard.querySelector('.price').textContent;
        
        alert(\`\${flowerName}\\n\${meaning}\\n価格: \${price}\\n\\n詳細情報：\\n・お手入れ方法\\n・花持ち期間\\n・おすすめの組み合わせ\`);
    });
});

document.querySelectorAll('.add-to-bouquet').forEach(button => {
    button.addEventListener('click', function() {
        const flowerId = this.dataset.flower;
        const flowerCard = this.closest('.flower-card');
        const flowerName = flowerCard.querySelector('h3').textContent;
        
        alert(\`\${flowerName} をブーケの花材に追加しました\\n\\n現在の選択：\\n・\${flowerName}\\n\\nブーケのオーダーメイドをご希望の場合は、お気軽にご相談ください。\`);
    });
});

// Arrangement and bouquet ordering
document.querySelectorAll('.order-arrangement').forEach(button => {
    button.addEventListener('click', function() {
        const arrangementType = this.dataset.type;
        const card = this.closest('.arrangement-card');
        const title = card.querySelector('h3').textContent;
        const priceRange = card.querySelector('.price-range').textContent;
        
        alert(\`\${title} のオーダーページに移動します\\n\\n価格帯: \${priceRange}\\n\\nご希望をお聞かせください：\\n・使用用途\\n・色合いのご希望\\n・お届け日時\\n・ご予算\`);
    });
});

document.querySelectorAll('.order-bouquet').forEach(button => {
    button.addEventListener('click', function() {
        const bouquetType = this.dataset.bouquet;
        const card = this.closest('.bouquet-card');
        const title = card.querySelector('h3').textContent;
        const basePrice = card.querySelector('.base-price').textContent;
        
        alert(\`\${title} のオーダーページに移動します\\n\\n基本価格: \${basePrice}\\n\\nカスタマイズオプション：\\n・サイズ変更\\n・花材の追加・変更\\n・リボンの色\\n・メッセージカード\`);
    });
});

// Header action buttons
document.querySelector('.order-btn').addEventListener('click', function() {
    alert('オーダー相談ページに移動します\\n\\n以下のサービスをご利用いただけます：\\n・フラワーアレンジメント\\n・ブーケ・花束\\n・ウェディング装花\\n・イベント装花\\n\\nお気軽にご相談ください。');
});

document.querySelector('.consultation-btn').addEventListener('click', function() {
    alert('無料相談のご予約ページに移動します\\n\\nご相談内容：\\n・オーダーメイドアレンジメント\\n・ウェディング装花\\n・イベントや店舗装花\\n・季節の花の組み合わせ\\n\\n経験豊富なフローリストがお答えします。');
});

// Care guide modal
const careModal = document.getElementById('care-guide-modal');
const careGuideBtn = document.querySelector('.care-guide-btn');
const closeBtn = document.querySelector('.close');

careGuideBtn.addEventListener('click', function() {
    careModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    careModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === careModal) {
        careModal.style.display = 'none';
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

// Initialize - show summer flowers by default
document.addEventListener('DOMContentLoaded', function() {
    // Show summer flowers initially
    document.querySelectorAll('.flower-card').forEach(card => {
        if (card.dataset.season === 'summer') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show table arrangements initially
    document.querySelectorAll('.arrangement-card').forEach(card => {
        if (card.dataset.category === 'table') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show wedding bouquets initially
    document.querySelectorAll('.bouquet-card').forEach(card => {
        if (card.dataset.purpose === 'wedding') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.promise-item, .flower-card, .arrangement-card, .bouquet-card, .tip-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});`
  }
}