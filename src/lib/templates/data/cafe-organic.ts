import { WebTemplate, TEMPLATE_CATEGORIES } from '../types'

export const cafeOrganicTemplate: WebTemplate = {
  id: 'cafe-organic',
  title: 'カフェ - オーガニック',
  category: TEMPLATE_CATEGORIES.CAFE,
  description: '自然と健康を大切にするオーガニックカフェのテンプレート',
  thumbnail: '/template-images/cafe-organic.jpg',
  features: [
    '自然をテーマにしたデザイン',
    'オーガニック食材の紹介',
    '環境への取り組み表示',
    'ヘルシーメニュー対応'
  ],
  tags: ['カフェ', 'オーガニック', '健康', '自然'],
  code: {
    html: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Green Valley Café - 自然と健康のカフェ</title>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <span class="logo-icon">🌱</span>
                    <span class="logo-text">Green Valley Café</span>
                </div>
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#philosophy">Philosophy</a></li>
                    <li><a href="#ingredients">Ingredients</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#sustainability">Sustainability</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="nav-badge">
                    <span class="organic-badge">100% Organic</span>
                </div>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-background">
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop" alt="オーガニックカフェの店内">
            </div>
            <div class="hero-particles" id="particles"></div>
        </div>
        <div class="hero-content">
            <div class="hero-badge">
                <span>🌿 Farm to Table</span>
            </div>
            <h1 class="hero-title">Green Valley Café</h1>
            <p class="hero-subtitle">自然と健康のハーモニー</p>
            <p class="hero-description">オーガニック食材にこだわった、体にも地球にも優しいカフェ</p>
            <div class="hero-features">
                <div class="feature-item">
                    <span class="feature-icon">🌱</span>
                    <span>100% オーガニック</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">🌍</span>
                    <span>地球に優しい</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">💚</span>
                    <span>ヘルシー</span>
                </div>
            </div>
            <button class="cta-button" onclick="scrollToMenu()">メニューを見る</button>
        </div>
    </section>

    <section id="philosophy" class="philosophy">
        <div class="container">
            <h2 class="section-title">Our Philosophy</h2>
            <div class="philosophy-content">
                <div class="philosophy-text">
                    <h3>自然との共生</h3>
                    <p>Green Valley Caféは、「自然と人の健康的な関係」を大切にしています。私たちは農薬や化学肥料を一切使用せず、自然の力で育てられたオーガニック食材のみを使用しています。</p>
                    <p>地元の農家さんと直接契約し、顔の見える関係を築くことで、新鮮で安全な食材を皆様にお届けします。また、環境に配慮した持続可能な運営を心がけ、次世代に美しい地球を残すことを使命としています。</p>
                </div>
                <div class="philosophy-image">
                    <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" alt="農場の風景">
                    <div class="image-overlay">
                        <p>契約農家さんの有機農場</p>
                    </div>
                </div>
            </div>
            
            <div class="values-grid">
                <div class="value-card">
                    <div class="value-icon">🌱</div>
                    <h4>オーガニック</h4>
                    <p>認定オーガニック食材を100%使用。農薬・化学肥料不使用で育てられた安全な食材をお届けします。</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">🤝</div>
                    <h4>地産地消</h4>
                    <p>地元農家さんとの直接契約により、新鮮な季節の食材を使用。地域経済の活性化にも貢献します。</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">♻️</div>
                    <h4>サステナブル</h4>
                    <p>環境に配慮した運営を実践。廃棄物削減、再生可能エネルギー利用、リサイクル推進に取り組んでいます。</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">💚</div>
                    <h4>ウェルネス</h4>
                    <p>心と体の健康をサポート。栄養豊富で美味しい食事を通じて、お客様の健康的なライフスタイルを応援します。</p>
                </div>
            </div>
        </div>
    </section>

    <section id="ingredients" class="ingredients">
        <div class="container">
            <h2 class="section-title">Premium Ingredients</h2>
            <div class="ingredients-intro">
                <p>厳選されたオーガニック食材をご紹介します。すべて生産者の顔が見える、安心・安全な食材です。</p>
            </div>
            
            <div class="ingredients-slider">
                <div class="ingredient-item active" data-category="vegetables">
                    <div class="ingredient-image">
                        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop" alt="オーガニック野菜">
                    </div>
                    <div class="ingredient-content">
                        <h3>🥕 オーガニック野菜</h3>
                        <div class="ingredient-details">
                            <div class="detail-item">
                                <strong>産地:</strong> 地元農家（半径50km以内）
                            </div>
                            <div class="detail-item">
                                <strong>認証:</strong> JAS有機認証取得
                            </div>
                            <div class="detail-item">
                                <strong>特徴:</strong> 農薬・化学肥料不使用、土づくりから徹底
                            </div>
                        </div>
                        <p>季節ごとに旬の野菜を厳選。土づくりからこだわり、自然の恵みをそのままお届けします。トマト、レタス、ケール、人参など、色とりどりの新鮮野菜をお楽しみください。</p>
                    </div>
                </div>
                
                <div class="ingredient-item" data-category="coffee">
                    <div class="ingredient-image">
                        <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop" alt="オーガニックコーヒー豆">
                    </div>
                    <div class="ingredient-content">
                        <h3>☕ オーガニックコーヒー</h3>
                        <div class="ingredient-details">
                            <div class="detail-item">
                                <strong>産地:</strong> エチオピア、グアテマラ、ペルー
                            </div>
                            <div class="detail-item">
                                <strong>認証:</strong> レインフォレスト・アライアンス認証
                            </div>
                            <div class="detail-item">
                                <strong>特徴:</strong> フェアトレード、シェードグロウン
                            </div>
                        </div>
                        <p>世界各地の契約農園から直輸入するオーガニックコーヒー豆。環境と農家の生活を守るフェアトレードを実践し、豊かな香りと味わいをお届けします。</p>
                    </div>
                </div>
                
                <div class="ingredient-item" data-category="grains">
                    <div class="ingredient-image">
                        <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop" alt="オーガニック穀物">
                    </div>
                    <div class="ingredient-content">
                        <h3>🌾 オーガニック穀物</h3>
                        <div class="ingredient-details">
                            <div class="detail-item">
                                <strong>産地:</strong> 国内契約農家
                            </div>
                            <div class="detail-item">
                                <strong>認証:</strong> JAS有機認証取得
                            </div>
                            <div class="detail-item">
                                <strong>特徴:</strong> 古代品種、自家採種
                            </div>
                        </div>
                        <p>小麦、玄米、キヌア、オーツ麦など、栄養価の高いオーガニック穀物を使用。古代から受け継がれた在来品種を大切に育て、自然な味わいを追求しています。</p>
                    </div>
                </div>
                
                <div class="ingredient-item" data-category="dairy">
                    <div class="ingredient-image">
                        <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&h=600&fit=crop" alt="オーガニック乳製品">
                    </div>
                    <div class="ingredient-content">
                        <h3>🥛 オーガニック乳製品</h3>
                        <div class="ingredient-details">
                            <div class="detail-item">
                                <strong>産地:</strong> 信州・北海道の牧場
                            </div>
                            <div class="detail-item">
                                <strong>認証:</strong> 有機畜産物認証
                            </div>
                            <div class="detail-item">
                                <strong>特徴:</strong> 放牧飼育、ホルモン剤不使用
                            </div>
                        </div>
                        <p>自然豊かな環境で放牧されている牛から搾った、新鮮なオーガニックミルク。ホルモン剤や抗生物質を使用せず、健康的で美味しい乳製品をお届けします。</p>
                    </div>
                </div>
            </div>
            
            <div class="ingredient-nav">
                <button class="nav-btn active" onclick="showIngredient('vegetables')">野菜</button>
                <button class="nav-btn" onclick="showIngredient('coffee')">コーヒー</button>
                <button class="nav-btn" onclick="showIngredient('grains')">穀物</button>
                <button class="nav-btn" onclick="showIngredient('dairy')">乳製品</button>
            </div>
        </div>
    </section>

    <section id="menu" class="menu">
        <div class="container">
            <h2 class="section-title">Healthy Menu</h2>
            
            <div class="menu-categories">
                <div class="category-header">
                    <button class="category-tab active" onclick="showMenuCategory('breakfast')">
                        <span class="tab-icon">🌅</span>
                        <span>Breakfast</span>
                    </button>
                    <button class="category-tab" onclick="showMenuCategory('lunch')">
                        <span class="tab-icon">🥗</span>
                        <span>Lunch</span>
                    </button>
                    <button class="category-tab" onclick="showMenuCategory('drinks')">
                        <span class="tab-icon">🍹</span>
                        <span>Drinks</span>
                    </button>
                    <button class="category-tab" onclick="showMenuCategory('sweets')">
                        <span class="tab-icon">🍰</span>
                        <span>Sweets</span>
                    </button>
                </div>
                
                <div id="breakfast" class="menu-content active">
                    <div class="menu-grid">
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop" alt="アサイーボウル">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                    <span class="badge vegan">ヴィーガン</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>スーパーフードボウル</h3>
                                <p>アサイー、チアシード、ゴジベリーなどのスーパーフードをたっぷりと。フレッシュフルーツとグラノーラでエネルギーチャージ。</p>
                                <div class="nutrition-info">
                                    <span>カロリー: 320kcal</span>
                                    <span>タンパク質: 12g</span>
                                    <span>食物繊維: 15g</span>
                                </div>
                                <div class="menu-price">¥1,280</div>
                            </div>
                        </div>
                        
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=400&h=300&fit=crop" alt="アボカドトースト">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                    <span class="badge gluten-free">グルテンフリー</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>アボカドトースト</h3>
                                <p>グルテンフリーの古代穀物パンに、クリーミーなアボカド、フレッシュトマト、ハーブをトッピング。</p>
                                <div class="nutrition-info">
                                    <span>カロリー: 380kcal</span>
                                    <span>タンパク質: 8g</span>
                                    <span>良質な脂質: 22g</span>
                                </div>
                                <div class="menu-price">¥980</div>
                            </div>
                        </div>
                        
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop" alt="オーガニックパンケーキ">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>ふわふわパンケーキ</h3>
                                <p>オーガニック小麦粉と自然放牧卵で作る、ふわふわの絶品パンケーキ。メープルシロップとベリーで。</p>
                                <div class="nutrition-info">
                                    <span>カロリー: 420kcal</span>
                                    <span>タンパク質: 14g</span>
                                    <span>炭水化物: 52g</span>
                                </div>
                                <div class="menu-price">¥1,180</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="lunch" class="menu-content">
                    <div class="menu-grid">
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" alt="レインボーサラダ">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                    <span class="badge raw">ロー</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>レインボーサラダプレート</h3>
                                <p>7色の新鮮オーガニック野菜と、自家製ドレッシング。キヌア、アーモンド、シーズンフルーツ入り。</p>
                                <div class="nutrition-info">
                                    <span>カロリー: 350kcal</span>
                                    <span>タンパク質: 15g</span>
                                    <span>ビタミンC: 120mg</span>
                                </div>
                                <div class="menu-price">¥1,480</div>
                            </div>
                        </div>
                        
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop" alt="グレインボウル">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                    <span class="badge vegan">ヴィーガン</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>パワーグレインボウル</h3>
                                <p>キヌア、玄米、レンズ豆のトリプルパワー。ローストベジタブルとタヒニドレッシングで。</p>
                                <div class="nutrition-info">
                                    <span>カロリー: 520kcal</span>
                                    <span>タンパク質: 22g</span>
                                    <span>食物繊維: 18g</span>
                                </div>
                                <div class="menu-price">¥1,680</div>
                            </div>
                        </div>
                        
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" alt="オーガニックピザ">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>ベジタブルピザ</h3>
                                <p>自家製オーガニック生地に、季節野菜とハーブをたっぷり。ヴィーガンチーズオプションあり。</p>
                                <div class="nutrition-info">
                                    <span>カロリー: 480kcal</span>
                                    <span>タンパク質: 18g</span>
                                    <span>炭水化物: 65g</span>
                                </div>
                                <div class="menu-price">¥1,880</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="drinks" class="menu-content">
                    <div class="menu-grid">
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" alt="グリーンスムージー">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                    <span class="badge detox">デトックス</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>デトックスグリーンスムージー</h3>
                                <p>ケール、スピナッチ、セロリ、きゅうり、グリーンアップル、レモンの解毒ブレンド。</p>
                                <div class="nutrition-info">
                                    <span>カロリー: 120kcal</span>
                                    <span>ビタミンK: 180μg</span>
                                    <span>葉酸: 95μg</span>
                                </div>
                                <div class="menu-price">¥680</div>
                            </div>
                        </div>
                        
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop" alt="オーガニックコーヒー">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                    <span class="badge fairtrade">フェアトレード</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>シングルオリジンコーヒー</h3>
                                <p>エチオピア・イルガチェフェの単一農園豆。フローラルな香りと上品な酸味。</p>
                                <div class="nutrition-info">
                                    <span>カフェイン: 85mg</span>
                                    <span>抗酸化物質: 豊富</span>
                                    <span>カロリー: 5kcal</span>
                                </div>
                                <div class="menu-price">¥580</div>
                            </div>
                        </div>
                        
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop" alt="ハーブティー">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                    <span class="badge caffeine-free">ノンカフェイン</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>自家製ハーブティー</h3>
                                <p>カモミール、ラベンダー、レモンバームのリラックスブレンド。夜でも安心のノンカフェイン。</p>
                                <div class="nutrition-info">
                                    <span>カフェイン: 0mg</span>
                                    <span>リラックス効果: ◎</span>
                                    <span>カロリー: 0kcal</span>
                                </div>
                                <div class="menu-price">¥480</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="sweets" class="menu-content">
                    <div class="menu-grid">
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop" alt="ローケーキ">
                                <div class="menu-badges">
                                    <span class="badge raw">ロー</span>
                                    <span class="badge vegan">ヴィーガン</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>ローチョコレートケーキ</h3>
                                <p>生カカオ、デーツ、カシューナッツで作る罪悪感ゼロのケーキ。加熱せずに作る健康スイーツ。</p>
                                <div class="nutrition-info">
                                    <span>カロリー: 280kcal</span>
                                    <span>食物繊維: 8g</span>
                                    <span>マグネシウム: 65mg</span>
                                </div>
                                <div class="menu-price">¥680</div>
                            </div>
                        </div>
                        
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" alt="エナジーボール">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                    <span class="badge energy">エナジー</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>スーパーフードエナジーボール</h3>
                                <p>デーツ、アーモンド、ココナッツ、チアシード、カカオニブの栄養爆弾。3個セット。</p>
                                <div class="nutrition-info">
                                    <span>カロリー: 220kcal</span>
                                    <span>タンパク質: 8g</span>
                                    <span>オメガ3: 豊富</span>
                                </div>
                                <div class="menu-price">¥580</div>
                            </div>
                        </div>
                        
                        <div class="menu-item">
                            <div class="menu-image">
                                <img src="https://images.unsplash.com/photo-1501110594054-7a4899d4b6f3?w=400&h=300&fit=crop" alt="アイスクリーム">
                                <div class="menu-badges">
                                    <span class="badge organic">オーガニック</span>
                                    <span class="badge no-sugar">砂糖不使用</span>
                                </div>
                            </div>
                            <div class="menu-info">
                                <h3>ナイスクリーム</h3>
                                <p>冷凍バナナとココナッツミルクで作る、乳製品・砂糖不使用のヘルシーアイスクリーム。</p>
                                <div class="nutrition-info">
                                    <span>カロリー: 160kcal</span>
                                    <span>カリウム: 350mg</span>
                                    <span>ビタミンB6: 0.3mg</span>
                                </div>
                                <div class="menu-price">¥480</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="sustainability" class="sustainability">
        <div class="container">
            <h2 class="section-title">Sustainability Initiatives</h2>
            
            <div class="sustainability-hero">
                <div class="sustainability-content">
                    <h3>地球と未来への責任</h3>
                    <p>Green Valley Caféは、美味しい食事を提供するだけでなく、地球環境と次世代への責任を果たすことを使命としています。私たちの持続可能な取り組みをご紹介します。</p>
                </div>
                <div class="sustainability-stats">
                    <div class="stat-card">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">再生可能エネルギー</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">0</div>
                        <div class="stat-label">プラスチック容器</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">95%</div>
                        <div class="stat-label">廃棄物リサイクル率</div>
                    </div>
                </div>
            </div>
            
            <div class="initiatives-grid">
                <div class="initiative-card">
                    <div class="initiative-icon">🌱</div>
                    <h4>コンポスト循環システム</h4>
                    <p>店舗から出る生ごみは全て自社コンポストで堆肥化。この堆肥を契約農家さんに提供し、新しい野菜を育てる循環システムを構築しています。</p>
                    <div class="initiative-impact">
                        <span>年間廃棄物削減: 2.5トン</span>
                    </div>
                </div>
                
                <div class="initiative-card">
                    <div class="initiative-icon">☀️</div>
                    <h4>ソーラーパネル発電</h4>
                    <p>店舗屋上に設置したソーラーパネルにより、使用電力の100%を再生可能エネルギーで賄っています。余剰電力は地域に供給。</p>
                    <div class="initiative-impact">
                        <span>年間CO2削減: 8.2トン</span>
                    </div>
                </div>
                
                <div class="initiative-card">
                    <div class="initiative-icon">🥤</div>
                    <h4>プラスチックフリー</h4>
                    <p>使い捨てプラスチックを一切使用せず、竹製やガラス製の容器を採用。お客様にもマイカップ持参を推奨しています。</p>
                    <div class="initiative-impact">
                        <span>年間プラスチック削減: 15,000個</span>
                    </div>
                </div>
                
                <div class="initiative-card">
                    <div class="initiative-icon">🚲</div>
                    <h4>カーボンニュートラル配送</h4>
                    <p>食材の配送は電動バイクや自転車を使用。近距離の配送では排出CO2をゼロに抑えています。</p>
                    <div class="initiative-impact">
                        <span>配送時CO2: 実質ゼロ</span>
                    </div>
                </div>
                
                <div class="initiative-card">
                    <div class="initiative-icon">💧</div>
                    <h4>雨水利用システム</h4>
                    <p>屋根に降った雨水を貯水タンクに集め、植物の水やりや清掃に利用。水資源の有効活用を実践しています。</p>
                    <div class="initiative-impact">
                        <span>年間節水量: 12,000L</span>
                    </div>
                </div>
                
                <div class="initiative-card">
                    <div class="initiative-icon">🌳</div>
                    <h4>カーボンオフセット</h4>
                    <p>事業活動で排出されるCO2は、植林プロジェクトへの参加により相殺。お客様と一緒に地球温暖化防止に貢献しています。</p>
                    <div class="initiative-impact">
                        <span>植樹本数: 500本/年</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Visit Our Green Space</h2>
            
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Green Valley Café</h3>
                    <div class="contact-details">
                        <div class="contact-item">
                            <div class="contact-icon">📍</div>
                            <div class="contact-text">
                                <strong>住所</strong>
                                <p>〒150-0001 東京都渋谷区神宮前6-12-20<br>グリーンビルディング 1F</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">📞</div>
                            <div class="contact-text">
                                <strong>電話番号</strong>
                                <p>03-5678-9012</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">🕒</div>
                            <div class="contact-text">
                                <strong>営業時間</strong>
                                <p>平日: 7:00 - 20:00<br>土日祝: 8:00 - 21:00</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">🚇</div>
                            <div class="contact-text">
                                <strong>アクセス</strong>
                                <p>表参道駅B2出口より徒歩2分<br>明治神宮前駅より徒歩4分</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">✉️</div>
                            <div class="contact-text">
                                <strong>メール</strong>
                                <p>hello@greenvalley-cafe.jp</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">🌱</div>
                            <div class="contact-text">
                                <strong>特徴</strong>
                                <p>テラス席・ペット同伴OK<br>Wi-Fi・電源完備</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="contact-visual">
                    <div class="store-gallery">
                        <div class="gallery-main">
                            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" alt="店内の様子">
                        </div>
                        <div class="gallery-thumbs">
                            <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=150&h=100&fit=crop" alt="テラス席">
                            <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=150&h=100&fit=crop" alt="カウンター席">
                            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=100&fit=crop" alt="ドリンクメイキング">
                        </div>
                    </div>
                    
                    <div class="eco-features">
                        <h4>エコな空間づくり</h4>
                        <div class="eco-list">
                            <div class="eco-item">
                                <span class="eco-icon">🌿</span>
                                <span>空気清浄植物を60種類以上配置</span>
                            </div>
                            <div class="eco-item">
                                <span class="eco-icon">♻️</span>
                                <span>リサイクル素材で作られた家具</span>
                            </div>
                            <div class="eco-item">
                                <span class="eco-icon">💡</span>
                                <span>LED照明で省エネ実現</span>
                            </div>
                            <div class="eco-item">
                                <span class="eco-icon">🌡️</span>
                                <span>自然換気システムで快適空調</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>Green Valley Café</h3>
                    <p>自然と健康のハーモニー</p>
                    <div class="footer-certifications">
                        <span class="cert-badge">JAS有機認証</span>
                        <span class="cert-badge">フェアトレード認証</span>
                        <span class="cert-badge">レインフォレスト・アライアンス</span>
                    </div>
                </div>
                
                <div class="footer-links">
                    <div class="link-group">
                        <h4>Menu</h4>
                        <ul>
                            <li><a href="#menu">ヘルシーメニュー</a></li>
                            <li><a href="#ingredients">オーガニック食材</a></li>
                            <li><a href="#">栄養成分表</a></li>
                            <li><a href="#">アレルギー情報</a></li>
                        </ul>
                    </div>
                    
                    <div class="link-group">
                        <h4>Sustainability</h4>
                        <ul>
                            <li><a href="#sustainability">環境への取り組み</a></li>
                            <li><a href="#">カーボンニュートラル</a></li>
                            <li><a href="#">リサイクル活動</a></li>
                            <li><a href="#">パートナー農家</a></li>
                        </ul>
                    </div>
                    
                    <div class="link-group">
                        <h4>Community</h4>
                        <ul>
                            <li><a href="#">ヘルシーレシピ</a></li>
                            <li><a href="#">ワークショップ</a></li>
                            <li><a href="#">農場見学ツアー</a></li>
                            <li><a href="#">ニュースレター</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-social">
                    <a href="#" aria-label="Instagram">📷</a>
                    <a href="#" aria-label="Facebook">📘</a>
                    <a href="#" aria-label="Twitter">🐦</a>
                    <a href="#" aria-label="YouTube">📺</a>
                </div>
                <p>&copy; 2025 Green Valley Café. All rights reserved. 🌱</p>
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'Nunito', sans-serif;
    line-height: 1.6;
    color: #2d5016;
    background-color: #f8fcf4;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: rgba(248, 252, 244, 0.95);
    backdrop-filter: blur(20px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(45, 80, 22, 0.1);
    border-bottom: 1px solid rgba(106, 158, 59, 0.2);
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
    gap: 0.8rem;
}

.logo-icon {
    font-size: 2rem;
}

.logo-text {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #6a9e3b;
    letter-spacing: 1px;
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
    background-color: #6a9e3b;
    margin: 3px 0;
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: #2d5016;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    letter-spacing: 0.5px;
}

.nav-menu a:hover {
    color: #6a9e3b;
}

.organic-badge {
    background: linear-gradient(135deg, #6a9e3b, #8bc34a);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.5px;
}

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
}

.hero-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="%236a9e3b" opacity="0.3"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/></circle><circle cx="80" cy="30" r="1.5" fill="%238bc34a" opacity="0.4"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite"/></circle><circle cx="60" cy="70" r="2.5" fill="%236a9e3b" opacity="0.2"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite"/></circle></svg>') repeat;
    animation: float 20s linear infinite;
}

@keyframes float {
    0% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-10px) translateX(5px); }
    50% { transform: translateY(-5px) translateX(-5px); }
    75% { transform: translateY(-15px) translateX(3px); }
    100% { transform: translateY(0px) translateX(0px); }
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 1;
    max-width: 800px;
    padding: 0 20px;
}

.hero-badge {
    background: rgba(106, 158, 59, 0.2);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(106, 158, 59, 0.3);
    border-radius: 25px;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: 500;
}

.hero-title {
    font-family: 'Poppins', sans-serif;
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
    background: linear-gradient(135deg, #ffffff, #e8f5e8);
    -webkit-background-clip: text;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
}

.hero-description {
    font-size: 1.1rem;
    margin-bottom: 3rem;
    opacity: 0.9;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
}

.hero-features {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-weight: 500;
}

.feature-icon {
    font-size: 1.2rem;
}

.cta-button {
    background: linear-gradient(135deg, #6a9e3b, #8bc34a);
    color: white;
    border: none;
    padding: 1.2rem 3rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 8px 25px rgba(106, 158, 59, 0.4);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(106, 158, 59, 0.6);
}

/* Philosophy Section */
.philosophy {
    padding: 120px 0;
    background: linear-gradient(135deg, #ffffff, #f8fcf4);
}

.section-title {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: #2d5016;
    margin-bottom: 4rem;
    letter-spacing: 1px;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #6a9e3b, #8bc34a);
    border-radius: 2px;
}

.philosophy-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    margin-bottom: 6rem;
}

.philosophy-text h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #6a9e3b;
    margin-bottom: 2rem;
    font-weight: 600;
}

.philosophy-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #2d5016;
}

.philosophy-image {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(106, 158, 59, 0.2);
}

.philosophy-image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    transition: transform 0.3s;
}

.philosophy-image:hover img {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 2rem 1.5rem 1.5rem;
    text-align: center;
    font-weight: 500;
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.value-card {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 15px 40px rgba(106, 158, 59, 0.1);
    transition: all 0.3s;
    border: 2px solid transparent;
}

.value-card:hover {
    transform: translateY(-10px);
    border-color: #6a9e3b;
    box-shadow: 0 25px 60px rgba(106, 158, 59, 0.2);
}

.value-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.value-card h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    color: #6a9e3b;
    margin-bottom: 1rem;
    font-weight: 600;
}

.value-card p {
    color: #2d5016;
    line-height: 1.7;
}

/* Ingredients Section */
.ingredients {
    padding: 120px 0;
    background: linear-gradient(135deg, #f8fcf4, #e8f5e8);
}

.ingredients-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
    font-size: 1.1rem;
    color: #2d5016;
}

.ingredients-slider {
    margin-bottom: 3rem;
}

.ingredient-item {
    display: none;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    background: white;
    padding: 3rem;
    border-radius: 25px;
    box-shadow: 0 20px 50px rgba(106, 158, 59, 0.15);
}

.ingredient-item.active {
    display: grid;
}

.ingredient-image {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.ingredient-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s;
}

.ingredient-item:hover .ingredient-image img {
    transform: scale(1.05);
}

.ingredient-content h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #6a9e3b;
    margin-bottom: 2rem;
    font-weight: 600;
}

.ingredient-details {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #f8fcf4, #e8f5e8);
    padding: 1.5rem;
    border-radius: 15px;
    border-left: 4px solid #6a9e3b;
}

.detail-item {
    font-size: 0.95rem;
    color: #2d5016;
}

.detail-item strong {
    color: #6a9e3b;
    margin-right: 0.5rem;
}

.ingredient-content p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #2d5016;
}

.ingredient-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.nav-btn {
    padding: 0.8rem 1.5rem;
    background: white;
    color: #6a9e3b;
    border: 2px solid #6a9e3b;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: inherit;
    font-weight: 500;
}

.nav-btn.active,
.nav-btn:hover {
    background: linear-gradient(135deg, #6a9e3b, #8bc34a);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(106, 158, 59, 0.4);
}

/* Menu Section */
.menu {
    padding: 120px 0;
    background: white;
}

.menu-categories {
    margin-top: 4rem;
}

.category-header {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
    flex-wrap: wrap;
}

.category-tab {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: transparent;
    color: #2d5016;
    border: 2px solid #e8f5e8;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: inherit;
    font-weight: 500;
    font-size: 1rem;
}

.category-tab.active,
.category-tab:hover {
    background: linear-gradient(135deg, #6a9e3b, #8bc34a);
    color: white;
    border-color: #6a9e3b;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(106, 158, 59, 0.3);
}

.tab-icon {
    font-size: 1.2rem;
}

.menu-content {
    display: none;
}

.menu-content.active {
    display: block;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
}

.menu-item {
    background: linear-gradient(135deg, #ffffff, #f8fcf4);
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(106, 158, 59, 0.1);
    transition: all 0.3s;
    border: 2px solid transparent;
}

.menu-item:hover {
    transform: translateY(-8px);
    border-color: #6a9e3b;
    box-shadow: 0 25px 60px rgba(106, 158, 59, 0.2);
}

.menu-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.menu-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.menu-item:hover .menu-image img {
    transform: scale(1.1);
}

.menu-badges {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.badge {
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge.organic {
    background: linear-gradient(135deg, #6a9e3b, #8bc34a);
    color: white;
}

.badge.vegan {
    background: linear-gradient(135deg, #4caf50, #8bc34a);
    color: white;
}

.badge.raw {
    background: linear-gradient(135deg, #ff9800, #ffc107);
    color: white;
}

.badge.gluten-free {
    background: linear-gradient(135deg, #9c27b0, #e91e63);
    color: white;
}

.badge.detox {
    background: linear-gradient(135deg, #00bcd4, #4caf50);
    color: white;
}

.badge.fairtrade {
    background: linear-gradient(135deg, #795548, #8d6e63);
    color: white;
}

.badge.caffeine-free {
    background: linear-gradient(135deg, #607d8b, #90a4ae);
    color: white;
}

.badge.energy {
    background: linear-gradient(135deg, #ff5722, #ff9800);
    color: white;
}

.badge.no-sugar {
    background: linear-gradient(135deg, #2196f3, #03a9f4);
    color: white;
}

.menu-info {
    padding: 2rem;
}

.menu-info h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: #2d5016;
    margin-bottom: 1rem;
    font-weight: 600;
}

.menu-info p {
    color: #2d5016;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.nutrition-info {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: linear-gradient(135deg, #e8f5e8, #f0f8f0);
    border-radius: 12px;
    font-size: 0.9rem;
    color: #2d5016;
}

.menu-price {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #6a9e3b;
    text-align: right;
}

/* Sustainability Section */
.sustainability {
    padding: 120px 0;
    background: linear-gradient(135deg, #f8fcf4, #e8f5e8);
}

.sustainability-hero {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
    margin-bottom: 6rem;
}

.sustainability-content h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #6a9e3b;
    margin-bottom: 2rem;
    font-weight: 600;
}

.sustainability-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #2d5016;
}

.sustainability-stats {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.stat-card {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(106, 158, 59, 0.15);
    border: 2px solid #6a9e3b;
}

.stat-number {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #6a9e3b;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.9rem;
    color: #2d5016;
    font-weight: 500;
}

.initiatives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
}

.initiative-card {
    background: white;
    padding: 2.5rem;
    border-radius: 25px;
    box-shadow: 0 15px 40px rgba(106, 158, 59, 0.1);
    transition: all 0.3s;
    border: 2px solid transparent;
}

.initiative-card:hover {
    transform: translateY(-8px);
    border-color: #6a9e3b;
    box-shadow: 0 25px 60px rgba(106, 158, 59, 0.2);
}

.initiative-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.initiative-card h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    color: #6a9e3b;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.initiative-card p {
    color: #2d5016;
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.initiative-impact {
    background: linear-gradient(135deg, #e8f5e8, #f0f8f0);
    padding: 1rem;
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
    color: #6a9e3b;
    border-left: 4px solid #6a9e3b;
}

/* Contact Section */
.contact {
    padding: 120px 0;
    background: white;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 4rem;
}

.contact-info h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #6a9e3b;
    margin-bottom: 2rem;
    font-weight: 600;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.contact-item {
    display: flex;
    gap: 1rem;
    align-items: start;
}

.contact-icon {
    font-size: 1.5rem;
    margin-top: 0.2rem;
}

.contact-text strong {
    color: #6a9e3b;
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 600;
}

.contact-text p {
    color: #2d5016;
    line-height: 1.6;
}

.store-gallery {
    margin-bottom: 2rem;
}

.gallery-main {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(106, 158, 59, 0.2);
    margin-bottom: 1rem;
}

.gallery-main img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.gallery-thumbs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
}

.gallery-thumbs img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
}

.gallery-thumbs img:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(106, 158, 59, 0.3);
}

.eco-features {
    background: linear-gradient(135deg, #f8fcf4, #e8f5e8);
    padding: 2rem;
    border-radius: 20px;
    border: 2px solid #6a9e3b;
}

.eco-features h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    color: #6a9e3b;
    margin-bottom: 1.5rem;
    font-weight: 600;
    text-align: center;
}

.eco-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.eco-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.95rem;
    color: #2d5016;
    font-weight: 500;
}

.eco-icon {
    font-size: 1.2rem;
}

/* Footer */
.footer {
    background: linear-gradient(135deg, #2d5016, #1a3009);
    color: #e8f5e8;
    padding: 80px 0 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-brand h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    color: #8bc34a;
    margin-bottom: 1rem;
    font-weight: 600;
}

.footer-brand p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.footer-certifications {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.cert-badge {
    background: rgba(139, 195, 74, 0.2);
    border: 1px solid #8bc34a;
    color: #8bc34a;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;
}

.link-group h4 {
    font-family: 'Poppins', sans-serif;
    color: #8bc34a;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.link-group ul {
    list-style: none;
}

.link-group li {
    margin-bottom: 0.8rem;
}

.link-group a {
    color: #b8d8a7;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.95rem;
}

.link-group a:hover {
    color: #8bc34a;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 3rem;
    border-top: 1px solid rgba(139, 195, 74, 0.3);
}

.footer-social {
    display: flex;
    gap: 1rem;
}

.footer-social a {
    font-size: 1.5rem;
    text-decoration: none;
    transition: transform 0.3s;
}

.footer-social a:hover {
    transform: scale(1.2);
}

.footer-bottom p {
    font-size: 0.9rem;
    opacity: 0.8;
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
        background: rgba(248, 252, 244, 0.98);
        flex-direction: column;
        padding: 2rem 0;
        backdrop-filter: blur(20px);
        box-shadow: 0 4px 20px rgba(45, 80, 22, 0.1);
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .nav-badge {
        display: none;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-features {
        flex-direction: column;
        gap: 1rem;
    }
    
    .philosophy-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .ingredient-item {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .menu-grid {
        grid-template-columns: 1fr;
    }
    
    .sustainability-hero {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .footer-bottom {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }
    
    .section-title {
        font-size: 2.5rem;
    }
    
    .category-header {
        gap: 0.5rem;
    }
    
    .category-tab {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
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

// メニューセクションへのスクロール
function scrollToMenu() {
    const target = document.querySelector('#menu');
    if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// 食材スライダー切り替え
function showIngredient(category) {
    // すべての食材アイテムを非表示
    document.querySelectorAll('.ingredient-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // すべてのナビボタンからactiveクラスを削除
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 選択された食材アイテムを表示
    const targetItem = document.querySelector(\`[data-category="\${category}"]\`);
    if (targetItem) {
        targetItem.classList.add('active');
    }
    
    // クリックされたボタンにactiveクラスを追加
    event.target.classList.add('active');
}

// メニューカテゴリー切り替え
function showMenuCategory(category) {
    // すべてのメニューコンテンツを非表示
    document.querySelectorAll('.menu-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // すべてのタブボタンからactiveクラスを削除
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 選択されたメニューコンテンツを表示
    document.getElementById(category).classList.add('active');
    
    // クリックされたタブボタンにactiveクラスを追加
    event.target.classList.add('active');
}

// パーティクルアニメーション
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = \`
            position: absolute;
            width: \${Math.random() * 4 + 2}px;
            height: \${Math.random() * 4 + 2}px;
            background: \${Math.random() > 0.5 ? '#6a9e3b' : '#8bc34a'};
            border-radius: 50%;
            left: \${Math.random() * 100}%;
            top: \${Math.random() * 100}%;
            opacity: \${Math.random() * 0.5 + 0.2};
            animation: float \${Math.random() * 10 + 10}s linear infinite;
        \`;
        particles?.appendChild(particle);
    }
}

// スクロール時のヘッダー効果
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(248, 252, 244, 0.98)';
        header.style.boxShadow = '0 4px 25px rgba(45, 80, 22, 0.15)';
    } else {
        header.style.background = 'rgba(248, 252, 244, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(45, 80, 22, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// 統計数値のカウントアップアニメーション
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                let currentValue = 0;
                
                if (finalValue.includes('%')) {
                    const number = parseInt(finalValue);
                    const increment = number / 50;
                    
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= number) {
                            target.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            target.textContent = Math.floor(currentValue) + '%';
                        }
                    }, 40);
                } else if (finalValue === '0') {
                    target.textContent = '0';
                }
                
                observer.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(num => observer.observe(num));
}

// メニューアイテムのホバーエフェクト
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ギャラリー画像の切り替え
document.querySelectorAll('.gallery-thumbs img').forEach((thumb, index) => {
    thumb.addEventListener('click', function() {
        const mainImage = document.querySelector('.gallery-main img');
        mainImage.src = this.src.replace('w=150&h=100', 'w=600&h=400');
        
        // アクティブなサムネイルのスタイル
        document.querySelectorAll('.gallery-thumbs img').forEach(img => {
            img.style.border = 'none';
        });
        this.style.border = '3px solid #6a9e3b';
    });
});

// 初期化処理
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    animateStats();
    
    // 初期状態のギャラリーサムネイル設定
    const firstThumb = document.querySelector('.gallery-thumbs img');
    if (firstThumb) {
        firstThumb.style.border = '3px solid #6a9e3b';
    }
});

// 季節に応じた動的コンテンツ
function updateSeasonalContent() {
    const now = new Date();
    const month = now.getMonth() + 1;
    let season = '';
    
    if (month >= 3 && month <= 5) season = '春';
    else if (month >= 6 && month <= 8) season = '夏';
    else if (month >= 9 && month <= 11) season = '秋';
    else season = '冬';
    
    // 季節のメッセージを更新
    const seasonalElements = document.querySelectorAll('.seasonal-content');
    seasonalElements.forEach(element => {
        element.textContent = element.textContent.replace(/春|夏|秋|冬/g, season);
    });
}

// ページ読み込み時に季節コンテンツを更新
updateSeasonalContent();

// 環境データの動的更新（デモ用）
function updateEnvironmentalData() {
    const co2Reduction = document.querySelector('.stat-number');
    if (co2Reduction && co2Reduction.textContent.includes('8.2')) {
        // 年間を通じて動的に更新（実際のAPIから取得することを想定）
        const monthlyIncrease = 0.7;
        const currentMonth = new Date().getMonth() + 1;
        const updatedValue = (8.2 + (monthlyIncrease * currentMonth / 12)).toFixed(1);
        co2Reduction.textContent = updatedValue + 'トン';
    }
}

// 3秒後に環境データを更新
setTimeout(updateEnvironmentalData, 3000);`
  }
}