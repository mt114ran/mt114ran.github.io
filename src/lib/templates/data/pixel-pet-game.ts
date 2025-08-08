import { WebTemplate } from '../types';

export const pixelPetGameTemplate: WebTemplate = {
  id: 'pixel-pet-game',
  title: 'ドット絵ペット育成ゲーム',
  description: 'たまごっち風のレトロなペット育成ゲーム。餌やりやトレーニングでペットを育てよう！',
  category: 'Game',
  thumbnail: '/templates/pixel-pet.png',
  tags: ['game', 'pixel-art', 'pet', 'simulation', 'interactive'],
  features: [
    'ドット絵アニメーション',
    '育成システム（餌やり、遊び、トレーニング）',
    'ステータス管理',
    '進化システム',
    'LocalStorage保存',
    'レスポンシブデザイン'
  ],
  isPro: true,
  code: {
    html: `<div class="game-container">
    <div class="game-device">
        <!-- 画面上部: ステータスバー -->
        <div class="status-bar">
            <div class="pet-info">
                <span class="pet-name">ピクセル</span>
                <span class="pet-level">Lv.<span id="level">1</span></span>
            </div>
            <div class="pet-exp">
                <div class="exp-bar">
                    <div class="exp-fill" id="exp-bar"></div>
                </div>
                <span class="exp-text">EXP: <span id="exp">0</span>/100</span>
            </div>
        </div>

        <!-- メイン画面: ペット表示エリア -->
        <div class="pet-screen">
            <canvas id="petCanvas" width="320" height="240"></canvas>
            
            <!-- 吹き出し -->
            <div class="speech-bubble" id="speechBubble">
                <span id="speechText">こんにちは！</span>
            </div>

            <!-- エフェクトレイヤー -->
            <div class="effects-layer" id="effectsLayer"></div>
        </div>

        <!-- ステータスバー -->
        <div class="stats-container">
            <div class="stat-bar">
                <div class="stat-icon">🍖</div>
                <div class="stat-label">空腹</div>
                <div class="stat-gauge">
                    <div class="stat-fill hunger" id="hungerBar"></div>
                </div>
                <span class="stat-value" id="hungerValue">100%</span>
            </div>
            
            <div class="stat-bar">
                <div class="stat-icon">😊</div>
                <div class="stat-label">幸福</div>
                <div class="stat-gauge">
                    <div class="stat-fill happiness" id="happinessBar"></div>
                </div>
                <span class="stat-value" id="happinessValue">100%</span>
            </div>
            
            <div class="stat-bar">
                <div class="stat-icon">❤️</div>
                <div class="stat-label">健康</div>
                <div class="stat-gauge">
                    <div class="stat-fill health" id="healthBar"></div>
                </div>
                <span class="stat-value" id="healthValue">100%</span>
            </div>
        </div>

        <!-- アクションボタン -->
        <div class="action-buttons">
            <button class="action-btn" id="feedBtn" data-action="feed">
                <span class="btn-icon">🍖</span>
                <span class="btn-label">餌やり</span>
            </button>
            
            <button class="action-btn" id="playBtn" data-action="play">
                <span class="btn-icon">🎮</span>
                <span class="btn-label">遊ぶ</span>
            </button>
            
            <button class="action-btn" id="trainBtn" data-action="train">
                <span class="btn-icon">💪</span>
                <span class="btn-label">訓練</span>
            </button>
            
            <button class="action-btn" id="sleepBtn" data-action="sleep">
                <span class="btn-icon">😴</span>
                <span class="btn-label">休憩</span>
            </button>
        </div>

        <!-- 進化段階表示 -->
        <div class="evolution-stage">
            <span class="stage-label">進化段階:</span>
            <div class="stage-icons">
                <span class="stage-icon active">🥚</span>
                <span class="stage-icon" id="stage2">🐣</span>
                <span class="stage-icon" id="stage3">🐥</span>
                <span class="stage-icon" id="stage4">🐓</span>
                <span class="stage-icon" id="stage5">🦅</span>
            </div>
        </div>
    </div>

    <!-- サイドパネル: 詳細情報 -->
    <div class="side-panel">
        <h3>ペット情報</h3>
        <div class="pet-details">
            <div class="detail-row">
                <span class="detail-label">年齢:</span>
                <span class="detail-value" id="petAge">0日</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">強さ:</span>
                <span class="detail-value" id="petStrength">10</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">知能:</span>
                <span class="detail-value" id="petIntelligence">10</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">素早さ:</span>
                <span class="detail-value" id="petAgility">10</span>
            </div>
        </div>

        <h3>実績</h3>
        <div class="achievements">
            <div class="achievement unlocked">
                <span class="achievement-icon">🏆</span>
                <span>初めての餌やり</span>
            </div>
            <div class="achievement">
                <span class="achievement-icon">🎯</span>
                <span>レベル10到達</span>
            </div>
            <div class="achievement">
                <span class="achievement-icon">⭐</span>
                <span>初めての進化</span>
            </div>
        </div>

        <div class="control-buttons">
            <button class="control-btn" id="saveBtn">💾 セーブ</button>
            <button class="control-btn" id="resetBtn">🔄 リセット</button>
        </div>
    </div>
</div>

<!-- 設定モーダル -->
<div class="modal" id="settingsModal">
    <div class="modal-content">
        <h2>設定</h2>
        <div class="setting-item">
            <label>
                <input type="checkbox" id="soundEnabled" checked>
                サウンド有効
            </label>
        </div>
        <div class="setting-item">
            <label>
                <input type="checkbox" id="autoSave" checked>
                自動セーブ
            </label>
        </div>
        <button class="modal-close" id="closeSettings">閉じる</button>
    </div>
</div>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.game-container {
    display: flex;
    gap: 20px;
    max-width: 1200px;
    width: 100%;
}

.game-device {
    background: #2d2d2d;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    border: 3px solid #444;
    flex: 1;
    max-width: 400px;
}

/* ステータスバー */
.status-bar {
    background: #1a1a1a;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.pet-info {
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 5px;
}

.pet-name {
    font-weight: bold;
    color: #ffd700;
}

.pet-level {
    color: #00ff00;
}

.pet-exp {
    display: flex;
    align-items: center;
    gap: 10px;
}

.exp-bar {
    flex: 1;
    height: 8px;
    background: #444;
    border-radius: 4px;
    overflow: hidden;
}

.exp-fill {
    height: 100%;
    background: linear-gradient(90deg, #00ff00, #00aa00);
    width: 0%;
    transition: width 0.3s ease;
}

.exp-text {
    color: #888;
    font-size: 10px;
}

/* ペット画面 */
.pet-screen {
    background: #e8f4f8;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;
    border: 2px solid #000;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
}

#petCanvas {
    display: block;
    width: 100%;
    height: auto;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
}

.speech-bubble {
    position: absolute;
    top: 20px;
    right: 20px;
    background: white;
    padding: 8px 12px;
    border-radius: 10px;
    border: 2px solid #000;
    display: none;
    animation: bounce 0.5s ease;
}

.speech-bubble::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 20px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #000;
}

.speech-bubble.show {
    display: block;
}

/* エフェクトレイヤー */
.effects-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.effect {
    position: absolute;
    font-size: 24px;
    animation: floatUp 1s ease forwards;
}

@keyframes floatUp {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-50px);
        opacity: 0;
    }
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* ステータスバー */
.stats-container {
    background: #1a1a1a;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
}

.stat-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    color: #fff;
}

.stat-bar:last-child {
    margin-bottom: 0;
}

.stat-icon {
    font-size: 16px;
}

.stat-label {
    width: 50px;
    font-size: 12px;
}

.stat-gauge {
    flex: 1;
    height: 12px;
    background: #444;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #666;
}

.stat-fill {
    height: 100%;
    transition: width 0.3s ease;
}

.stat-fill.hunger {
    background: linear-gradient(90deg, #ff9800, #ff5722);
}

.stat-fill.happiness {
    background: linear-gradient(90deg, #ffd700, #ffb300);
}

.stat-fill.health {
    background: linear-gradient(90deg, #ff69b4, #ff1493);
}

.stat-value {
    width: 40px;
    text-align: right;
    font-size: 11px;
    color: #aaa;
}

/* アクションボタン */
.action-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 15px;
}

.action-btn {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border: none;
    border-radius: 10px;
    padding: 12px;
    color: white;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: inherit;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

.action-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.action-btn.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-icon {
    font-size: 24px;
}

.btn-label {
    font-size: 12px;
    font-weight: bold;
}

/* 進化段階 */
.evolution-stage {
    background: #1a1a1a;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
}

.stage-label {
    color: #888;
    font-size: 12px;
    display: block;
    margin-bottom: 8px;
}

.stage-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.stage-icon {
    font-size: 20px;
    opacity: 0.3;
    transition: opacity 0.3s, transform 0.3s;
}

.stage-icon.active {
    opacity: 1;
    transform: scale(1.2);
}

/* サイドパネル */
.side-panel {
    background: white;
    border-radius: 15px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.side-panel h3 {
    color: #333;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
}

.pet-details {
    margin-bottom: 20px;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
}

.detail-label {
    color: #666;
    font-size: 14px;
}

.detail-value {
    color: #333;
    font-weight: bold;
    font-size: 14px;
}

/* 実績 */
.achievements {
    margin-bottom: 20px;
}

.achievement {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    margin-bottom: 8px;
    background: #f5f5f5;
    border-radius: 8px;
    opacity: 0.5;
}

.achievement.unlocked {
    opacity: 1;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
}

.achievement-icon {
    font-size: 20px;
}

/* コントロールボタン */
.control-buttons {
    display: flex;
    gap: 10px;
}

.control-btn {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #4a5568;
    color: white;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    transition: background 0.2s;
}

.control-btn:hover {
    background: #2d3748;
}

/* モーダル */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 15px;
    max-width: 400px;
    width: 90%;
}

.modal-close {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 8px;
    background: #667eea;
    color: white;
    cursor: pointer;
    font-size: 16px;
}

/* レスポンシブ */
@media (max-width: 768px) {
    .game-container {
        flex-direction: column;
        align-items: center;
    }
    
    .side-panel {
        width: 100%;
        max-width: 400px;
    }
}`,
    js: `// ゲーム状態管理
class PixelPetGame {
    constructor() {
        this.canvas = document.getElementById('petCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        
        // ペット状態
        this.pet = {
            name: 'ピクセル',
            level: 1,
            exp: 0,
            maxExp: 100,
            hunger: 100,
            happiness: 100,
            health: 100,
            strength: 10,
            intelligence: 10,
            agility: 10,
            evolutionStage: 1,
            age: 0,
            x: 160,
            y: 180,
            direction: 1,
            currentAnimation: 'idle',
            animationFrame: 0
        };
        
        // アニメーション設定
        this.animations = {
            idle: { frames: 2, speed: 500 },
            walk: { frames: 4, speed: 200 },
            happy: { frames: 3, speed: 150 },
            eat: { frames: 3, speed: 300 },
            sleep: { frames: 2, speed: 1000 },
            train: { frames: 3, speed: 250 }
        };
        
        this.lastUpdate = Date.now();
        this.lastAnimationUpdate = Date.now();
        this.lastMovement = Date.now();
        
        this.init();
    }
    
    init() {
        this.loadGame();
        this.setupEventListeners();
        this.startGameLoop();
        this.startAutoSave();
        this.updateDisplay();
    }
    
    setupEventListeners() {
        // アクションボタン
        document.getElementById('feedBtn').addEventListener('click', () => this.feed());
        document.getElementById('playBtn').addEventListener('click', () => this.play());
        document.getElementById('trainBtn').addEventListener('click', () => this.train());
        document.getElementById('sleepBtn').addEventListener('click', () => this.sleep());
        
        // コントロールボタン
        document.getElementById('saveBtn').addEventListener('click', () => this.saveGame());
        document.getElementById('resetBtn').addEventListener('click', () => {
            if (confirm('本当にリセットしますか？')) {
                this.resetGame();
            }
        });
    }
    
    startGameLoop() {
        const gameLoop = () => {
            const now = Date.now();
            const deltaTime = now - this.lastUpdate;
            
            // ステータス減少（10秒ごと）
            if (deltaTime > 10000) {
                this.pet.hunger = Math.max(0, this.pet.hunger - 2);
                this.pet.happiness = Math.max(0, this.pet.happiness - 1);
                
                if (this.pet.hunger < 30) {
                    this.pet.health = Math.max(0, this.pet.health - 1);
                    this.showSpeech('お腹すいた...');
                }
                
                if (this.pet.happiness < 30) {
                    this.showSpeech('遊んでほしいな...');
                }
                
                this.pet.age++;
                this.lastUpdate = now;
                this.updateDisplay();
            }
            
            // ランダム移動（3秒ごと）
            if (now - this.lastMovement > 3000 && this.pet.currentAnimation === 'idle') {
                if (Math.random() > 0.5) {
                    this.moveRandomly();
                }
                this.lastMovement = now;
            }
            
            // アニメーション更新
            if (now - this.lastAnimationUpdate > this.animations[this.pet.currentAnimation].speed) {
                this.updateAnimation();
                this.lastAnimationUpdate = now;
            }
            
            this.render();
            requestAnimationFrame(gameLoop);
        };
        
        gameLoop();
    }
    
    updateAnimation() {
        const anim = this.animations[this.pet.currentAnimation];
        this.pet.animationFrame = (this.pet.animationFrame + 1) % anim.frames;
    }
    
    moveRandomly() {
        const direction = Math.random() > 0.5 ? 1 : -1;
        const distance = Math.random() * 50 + 20;
        const targetX = this.pet.x + (distance * direction);
        
        if (targetX > 40 && targetX < 280) {
            this.pet.direction = direction;
            this.pet.currentAnimation = 'walk';
            
            const moveInterval = setInterval(() => {
                this.pet.x += direction * 2;
                if (Math.abs(this.pet.x - targetX) < 2) {
                    clearInterval(moveInterval);
                    this.pet.currentAnimation = 'idle';
                }
            }, 50);
        }
    }
    
    render() {
        // 背景をクリア
        this.ctx.fillStyle = '#e8f4f8';
        this.ctx.fillRect(0, 0, 320, 240);
        
        // 地面を描画
        this.ctx.fillStyle = '#8bc34a';
        this.ctx.fillRect(0, 200, 320, 40);
        
        // ドット絵でペットを描画
        this.drawPixelPet();
    }
    
    drawPixelPet() {
        const size = 32;
        const x = this.pet.x - size/2;
        const y = this.pet.y - size;
        
        // 進化段階に応じた色
        const colors = {
            1: '#ffeb3b', // 黄色（ひよこ）
            2: '#ff9800', // オレンジ
            3: '#ff5722', // 赤
            4: '#e91e63', // ピンク
            5: '#9c27b0'  // 紫
        };
        
        const color = colors[this.pet.evolutionStage];
        
        // シンプルなドット絵キャラクター（8x8ピクセルを4倍拡大）
        const pixelSize = 4;
        const pattern = this.getPixelPattern();
        
        for (let row = 0; row < pattern.length; row++) {
            for (let col = 0; col < pattern[row].length; col++) {
                if (pattern[row][col] === 1) {
                    this.ctx.fillStyle = color;
                } else if (pattern[row][col] === 2) {
                    this.ctx.fillStyle = '#000';
                } else {
                    continue;
                }
                
                const px = x + col * pixelSize;
                const py = y + row * pixelSize;
                this.ctx.fillRect(px, py, pixelSize, pixelSize);
            }
        }
    }
    
    getPixelPattern() {
        // アニメーションフレームに応じたパターンを返す
        const frame = this.pet.animationFrame;
        
        if (this.pet.currentAnimation === 'idle') {
            const patterns = [
                [
                    [0,0,1,1,1,1,0,0],
                    [0,1,1,1,1,1,1,0],
                    [0,1,2,1,1,2,1,0],
                    [0,1,1,1,1,1,1,0],
                    [0,0,1,1,1,1,0,0],
                    [0,0,1,1,1,1,0,0],
                    [0,1,1,0,0,1,1,0],
                    [0,1,1,0,0,1,1,0]
                ],
                [
                    [0,0,1,1,1,1,0,0],
                    [0,1,1,1,1,1,1,0],
                    [0,1,2,1,1,2,1,0],
                    [0,1,1,1,1,1,1,0],
                    [0,0,1,1,1,1,0,0],
                    [0,0,1,1,1,1,0,0],
                    [0,0,1,1,1,1,0,0],
                    [0,1,1,0,0,1,1,0]
                ]
            ];
            return patterns[frame % patterns.length];
        }
        
        // デフォルトパターン
        return [
            [0,0,1,1,1,1,0,0],
            [0,1,1,1,1,1,1,0],
            [0,1,2,1,1,2,1,0],
            [0,1,1,1,1,1,1,0],
            [0,0,1,1,1,1,0,0],
            [0,0,1,1,1,1,0,0],
            [0,1,1,0,0,1,1,0],
            [0,1,1,0,0,1,1,0]
        ];
    }
    
    feed() {
        if (this.pet.hunger >= 100) {
            this.showSpeech('お腹いっぱい！');
            return;
        }
        
        this.pet.currentAnimation = 'eat';
        this.pet.hunger = Math.min(100, this.pet.hunger + 30);
        this.pet.happiness = Math.min(100, this.pet.happiness + 10);
        this.gainExp(10);
        
        this.showEffect('🍖', this.pet.x, this.pet.y - 40);
        this.showSpeech('おいしい！');
        
        setTimeout(() => {
            this.pet.currentAnimation = 'idle';
        }, 1000);
        
        this.updateDisplay();
    }
    
    play() {
        if (this.pet.happiness >= 100) {
            this.showSpeech('楽しい〜！');
            return;
        }
        
        this.pet.currentAnimation = 'happy';
        this.pet.happiness = Math.min(100, this.pet.happiness + 25);
        this.pet.health = Math.min(100, this.pet.health + 5);
        this.gainExp(15);
        
        this.showEffect('❤️', this.pet.x, this.pet.y - 40);
        this.showSpeech('やったー！');
        
        // ジャンプアニメーション
        const originalY = this.pet.y;
        let jumpHeight = 0;
        const jumpInterval = setInterval(() => {
            jumpHeight += 10;
            this.pet.y = originalY - Math.sin(jumpHeight * Math.PI / 180) * 30;
            if (jumpHeight >= 180) {
                clearInterval(jumpInterval);
                this.pet.y = originalY;
                this.pet.currentAnimation = 'idle';
            }
        }, 30);
        
        this.updateDisplay();
    }
    
    train() {
        if (this.pet.hunger < 20) {
            this.showSpeech('お腹すいてて無理...');
            return;
        }
        
        this.pet.currentAnimation = 'train';
        this.pet.hunger = Math.max(0, this.pet.hunger - 20);
        this.pet.strength += Math.floor(Math.random() * 3) + 1;
        this.pet.agility += Math.floor(Math.random() * 2) + 1;
        this.gainExp(25);
        
        this.showEffect('💪', this.pet.x, this.pet.y - 40);
        this.showSpeech('強くなった！');
        
        setTimeout(() => {
            this.pet.currentAnimation = 'idle';
        }, 1500);
        
        this.updateDisplay();
    }
    
    sleep() {
        this.pet.currentAnimation = 'sleep';
        this.pet.health = Math.min(100, this.pet.health + 30);
        this.pet.happiness = Math.min(100, this.pet.happiness + 15);
        
        this.showEffect('💤', this.pet.x + 20, this.pet.y - 30);
        this.showSpeech('Zzz...');
        
        setTimeout(() => {
            this.pet.currentAnimation = 'idle';
            this.showSpeech('すっきり！');
        }, 3000);
        
        this.updateDisplay();
    }
    
    gainExp(amount) {
        this.pet.exp += amount;
        
        while (this.pet.exp >= this.pet.maxExp) {
            this.levelUp();
        }
        
        this.updateDisplay();
    }
    
    levelUp() {
        this.pet.exp -= this.pet.maxExp;
        this.pet.level++;
        this.pet.maxExp = Math.floor(this.pet.maxExp * 1.5);
        
        // ステータス上昇
        this.pet.strength += 2;
        this.pet.intelligence += 2;
        this.pet.agility += 2;
        
        this.showEffect('⭐', this.pet.x, this.pet.y - 40);
        this.showSpeech('レベルアップ！');
        
        // 進化チェック
        this.checkEvolution();
    }
    
    checkEvolution() {
        const evolutionLevels = [1, 10, 25, 50, 100];
        const currentStage = this.pet.evolutionStage;
        
        for (let i = 0; i < evolutionLevels.length; i++) {
            if (this.pet.level >= evolutionLevels[i]) {
                this.pet.evolutionStage = i + 1;
            }
        }
        
        if (this.pet.evolutionStage > currentStage) {
            this.showSpeech('進化した！');
            this.updateEvolutionDisplay();
        }
    }
    
    updateEvolutionDisplay() {
        const stages = ['', 'stage2', 'stage3', 'stage4', 'stage5'];
        stages.forEach((stage, index) => {
            if (stage) {
                const element = document.getElementById(stage);
                if (element) {
                    if (index <= this.pet.evolutionStage - 1) {
                        element.classList.add('active');
                    } else {
                        element.classList.remove('active');
                    }
                }
            }
        });
    }
    
    showSpeech(text) {
        const bubble = document.getElementById('speechBubble');
        const speechText = document.getElementById('speechText');
        
        speechText.textContent = text;
        bubble.classList.add('show');
        
        clearTimeout(this.speechTimeout);
        this.speechTimeout = setTimeout(() => {
            bubble.classList.remove('show');
        }, 2000);
    }
    
    showEffect(emoji, x, y) {
        const effectsLayer = document.getElementById('effectsLayer');
        const effect = document.createElement('div');
        effect.className = 'effect';
        effect.textContent = emoji;
        effect.style.left = x + 'px';
        effect.style.top = y + 'px';
        
        effectsLayer.appendChild(effect);
        
        setTimeout(() => {
            effect.remove();
        }, 1000);
    }
    
    updateDisplay() {
        // レベルと経験値
        document.getElementById('level').textContent = this.pet.level;
        document.getElementById('exp').textContent = this.pet.exp;
        document.getElementById('exp-bar').style.width = (this.pet.exp / this.pet.maxExp * 100) + '%';
        
        // ステータスバー
        document.getElementById('hungerBar').style.width = this.pet.hunger + '%';
        document.getElementById('hungerValue').textContent = this.pet.hunger + '%';
        
        document.getElementById('happinessBar').style.width = this.pet.happiness + '%';
        document.getElementById('happinessValue').textContent = this.pet.happiness + '%';
        
        document.getElementById('healthBar').style.width = this.pet.health + '%';
        document.getElementById('healthValue').textContent = this.pet.health + '%';
        
        // 詳細情報
        document.getElementById('petAge').textContent = Math.floor(this.pet.age / 60) + '日';
        document.getElementById('petStrength').textContent = this.pet.strength;
        document.getElementById('petIntelligence').textContent = this.pet.intelligence;
        document.getElementById('petAgility').textContent = this.pet.agility;
        
        // 進化段階
        this.updateEvolutionDisplay();
    }
    
    saveGame() {
        const saveData = {
            pet: this.pet,
            timestamp: Date.now()
        };
        
        localStorage.setItem('pixelPetSave', JSON.stringify(saveData));
        this.showSpeech('セーブ完了！');
    }
    
    loadGame() {
        const saveData = localStorage.getItem('pixelPetSave');
        
        if (saveData) {
            const data = JSON.parse(saveData);
            this.pet = { ...this.pet, ...data.pet };
            
            // 時間経過を計算
            const timePassed = Date.now() - data.timestamp;
            const minutesPassed = Math.floor(timePassed / 60000);
            
            // オフライン時の変化を適用
            this.pet.hunger = Math.max(0, this.pet.hunger - minutesPassed * 2);
            this.pet.happiness = Math.max(0, this.pet.happiness - minutesPassed);
            this.pet.age += minutesPassed;
            
            this.showSpeech('おかえり！');
        }
    }
    
    resetGame() {
        localStorage.removeItem('pixelPetSave');
        location.reload();
    }
    
    startAutoSave() {
        setInterval(() => {
            if (document.getElementById('autoSave')?.checked) {
                this.saveGame();
            }
        }, 30000); // 30秒ごと
    }
}

// ゲーム開始
const game = new PixelPetGame();`
  }
};