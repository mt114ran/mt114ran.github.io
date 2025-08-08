# ピクセルペット Chrome拡張機能 設計書

## 1. 拡張機能概要

### 1.1 基本構成
```
pixel-pet-chrome-extension/
├── manifest.json           # 拡張機能の設定
├── popup/
│   ├── popup.html         # ポップアップUI
│   ├── popup.css          # スタイル
│   └── popup.js           # ポップアップロジック
├── background/
│   └── service-worker.js  # バックグラウンド処理
├── content/
│   └── content.js         # コンテンツスクリプト（オプション）
├── shared/
│   ├── pet-logic.js      # ペットロジック（共通）
│   └── storage.js         # ストレージ管理
├── assets/
│   ├── icons/            # アイコン
│   └── sprites/           # スプライト画像
└── options/
    ├── options.html       # 設定ページ
    └── options.js         # 設定ロジック
```

## 2. manifest.json

```json
{
  "manifest_version": 3,
  "name": "ピクセルペット - デジタルペット育成",
  "version": "1.0.0",
  "description": "ブラウザで育てるドット絵ペット。餌やりやトレーニングでペットを成長させよう！",
  
  "permissions": [
    "storage",
    "alarms",
    "notifications"
  ],
  
  "background": {
    "service_worker": "background/service-worker.js"
  },
  
  "action": {
    "default_popup": "popup/popup.html",
    "default_icon": {
      "16": "assets/icons/icon-16.png",
      "32": "assets/icons/icon-32.png",
      "48": "assets/icons/icon-48.png",
      "128": "assets/icons/icon-128.png"
    }
  },
  
  "icons": {
    "16": "assets/icons/icon-16.png",
    "32": "assets/icons/icon-32.png",
    "48": "assets/icons/icon-48.png",
    "128": "assets/icons/icon-128.png"
  },
  
  "options_page": "options/options.html",
  
  "host_permissions": [
    "https://mt114ran.github.io/*"
  ]
}
```

## 3. ポップアップUI実装

### 3.1 popup.html
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="popup.css">
</head>
<body>
    <div class="popup-container">
        <!-- ヘッダー -->
        <div class="header">
            <span class="pet-name" id="petName">ピクセル</span>
            <span class="pet-level">Lv.<span id="level">1</span></span>
        </div>
        
        <!-- ペット表示エリア -->
        <div class="pet-display">
            <canvas id="petCanvas" width="128" height="128"></canvas>
            <div class="speech-bubble" id="speechBubble">
                <span id="speechText"></span>
            </div>
        </div>
        
        <!-- ステータスバー -->
        <div class="status-bars">
            <div class="status-bar">
                <span class="status-icon">🍖</span>
                <div class="status-gauge">
                    <div class="status-fill hunger" id="hungerBar"></div>
                </div>
                <span class="status-value" id="hungerValue">100%</span>
            </div>
            
            <div class="status-bar">
                <span class="status-icon">😊</span>
                <div class="status-gauge">
                    <div class="status-fill happiness" id="happinessBar"></div>
                </div>
                <span class="status-value" id="happinessValue">100%</span>
            </div>
            
            <div class="status-bar">
                <span class="status-icon">❤️</span>
                <div class="status-gauge">
                    <div class="status-fill health" id="healthBar"></div>
                </div>
                <span class="status-value" id="healthValue">100%</span>
            </div>
        </div>
        
        <!-- アクションボタン -->
        <div class="action-buttons">
            <button class="action-btn" id="feedBtn" title="餌やり">🍖</button>
            <button class="action-btn" id="playBtn" title="遊ぶ">🎮</button>
            <button class="action-btn" id="trainBtn" title="訓練">💪</button>
            <button class="action-btn" id="sleepBtn" title="休憩">😴</button>
        </div>
        
        <!-- フッター -->
        <div class="footer">
            <button class="footer-btn" id="fullViewBtn">🖥️ フル画面</button>
            <button class="footer-btn" id="settingsBtn">⚙️ 設定</button>
        </div>
    </div>
    
    <script src="../shared/pet-logic.js"></script>
    <script src="../shared/storage.js"></script>
    <script src="popup.js"></script>
</body>
</html>
```

### 3.2 popup.css
```css
body {
    margin: 0;
    padding: 0;
    width: 300px;
    font-family: 'Courier New', monospace;
}

.popup-container {
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 10px;
}

.header {
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 5px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 10px;
}

.pet-name {
    font-weight: bold;
    color: #ffd700;
}

.pet-level {
    color: #00ff00;
}

.pet-display {
    background: #e8f4f8;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    margin-bottom: 10px;
    border: 2px solid #000;
}

#petCanvas {
    display: block;
    width: 100%;
    height: auto;
    image-rendering: pixelated;
}

.speech-bubble {
    position: absolute;
    top: 10px;
    right: 10px;
    background: white;
    padding: 5px 8px;
    border-radius: 5px;
    border: 1px solid #000;
    font-size: 11px;
    display: none;
}

.speech-bubble.show {
    display: block;
}

.status-bars {
    background: rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.status-bar {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
}

.status-bar:last-child {
    margin-bottom: 0;
}

.status-icon {
    font-size: 14px;
    width: 20px;
}

.status-gauge {
    flex: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    overflow: hidden;
}

.status-fill {
    height: 100%;
    transition: width 0.3s ease;
}

.status-fill.hunger {
    background: #ff9800;
}

.status-fill.happiness {
    background: #ffd700;
}

.status-fill.health {
    background: #ff69b4;
}

.status-value {
    font-size: 10px;
    color: white;
    width: 35px;
    text-align: right;
}

.action-buttons {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
}

.action-btn {
    flex: 1;
    padding: 10px;
    font-size: 20px;
    background: white;
    border: 2px solid #000;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s;
}

.action-btn:hover {
    transform: scale(1.1);
    background: #fffacd;
}

.action-btn:active {
    transform: scale(0.95);
}

.footer {
    display: flex;
    gap: 5px;
}

.footer-btn {
    flex: 1;
    padding: 8px;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
}

.footer-btn:hover {
    background: rgba(0, 0, 0, 0.5);
}
```

### 3.3 popup.js
```javascript
// ポップアップスクリプト
class PopupPetManager {
    constructor() {
        this.canvas = document.getElementById('petCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        
        this.pet = null;
        this.animationFrame = 0;
        this.init();
    }
    
    async init() {
        // ペットデータを読み込み
        this.pet = await PetStorage.load();
        
        // イベントリスナー設定
        this.setupEventListeners();
        
        // 表示更新
        this.updateDisplay();
        
        // アニメーション開始
        this.startAnimation();
    }
    
    setupEventListeners() {
        document.getElementById('feedBtn').addEventListener('click', () => this.feed());
        document.getElementById('playBtn').addEventListener('click', () => this.play());
        document.getElementById('trainBtn').addEventListener('click', () => this.train());
        document.getElementById('sleepBtn').addEventListener('click', () => this.sleep());
        
        document.getElementById('fullViewBtn').addEventListener('click', () => {
            chrome.tabs.create({ url: 'https://mt114ran.github.io/note/webpage-temp/pixel-pet-game/preview' });
        });
        
        document.getElementById('settingsBtn').addEventListener('click', () => {
            chrome.runtime.openOptionsPage();
        });
    }
    
    async feed() {
        if (this.pet.hunger >= 100) {
            this.showSpeech('お腹いっぱい！');
            return;
        }
        
        this.pet.hunger = Math.min(100, this.pet.hunger + 30);
        this.pet.happiness = Math.min(100, this.pet.happiness + 10);
        this.pet.exp += 10;
        
        await this.checkLevelUp();
        await PetStorage.save(this.pet);
        
        this.showSpeech('おいしい！');
        this.updateDisplay();
        
        // バックグラウンドに通知
        chrome.runtime.sendMessage({ action: 'petFed' });
    }
    
    async play() {
        if (this.pet.happiness >= 100) {
            this.showSpeech('楽しい〜！');
            return;
        }
        
        this.pet.happiness = Math.min(100, this.pet.happiness + 25);
        this.pet.health = Math.min(100, this.pet.health + 5);
        this.pet.exp += 15;
        
        await this.checkLevelUp();
        await PetStorage.save(this.pet);
        
        this.showSpeech('やったー！');
        this.updateDisplay();
    }
    
    async train() {
        if (this.pet.hunger < 20) {
            this.showSpeech('お腹すいた...');
            return;
        }
        
        this.pet.hunger = Math.max(0, this.pet.hunger - 20);
        this.pet.strength += Math.floor(Math.random() * 3) + 1;
        this.pet.agility += Math.floor(Math.random() * 2) + 1;
        this.pet.exp += 25;
        
        await this.checkLevelUp();
        await PetStorage.save(this.pet);
        
        this.showSpeech('強くなった！');
        this.updateDisplay();
    }
    
    async sleep() {
        this.pet.health = Math.min(100, this.pet.health + 30);
        this.pet.happiness = Math.min(100, this.pet.happiness + 15);
        
        await PetStorage.save(this.pet);
        
        this.showSpeech('Zzz...');
        this.updateDisplay();
    }
    
    async checkLevelUp() {
        const expNeeded = this.pet.level * 100;
        if (this.pet.exp >= expNeeded) {
            this.pet.exp -= expNeeded;
            this.pet.level++;
            this.pet.strength += 2;
            this.pet.intelligence += 2;
            this.pet.agility += 2;
            
            this.showSpeech('レベルアップ！');
            
            // 通知
            chrome.runtime.sendMessage({
                action: 'showNotification',
                title: 'レベルアップ！',
                message: `${this.pet.name}がレベル${this.pet.level}になりました！`
            });
        }
    }
    
    showSpeech(text) {
        const bubble = document.getElementById('speechBubble');
        const speechText = document.getElementById('speechText');
        
        speechText.textContent = text;
        bubble.classList.add('show');
        
        setTimeout(() => {
            bubble.classList.remove('show');
        }, 2000);
    }
    
    updateDisplay() {
        // ステータス更新
        document.getElementById('petName').textContent = this.pet.name;
        document.getElementById('level').textContent = this.pet.level;
        
        document.getElementById('hungerBar').style.width = this.pet.hunger + '%';
        document.getElementById('hungerValue').textContent = this.pet.hunger + '%';
        
        document.getElementById('happinessBar').style.width = this.pet.happiness + '%';
        document.getElementById('happinessValue').textContent = this.pet.happiness + '%';
        
        document.getElementById('healthBar').style.width = this.pet.health + '%';
        document.getElementById('healthValue').textContent = this.pet.health + '%';
    }
    
    startAnimation() {
        const animate = () => {
            this.animationFrame = (this.animationFrame + 1) % 30;
            this.drawPet();
            requestAnimationFrame(animate);
        };
        animate();
    }
    
    drawPet() {
        // キャンバスクリア
        this.ctx.fillStyle = '#e8f4f8';
        this.ctx.fillRect(0, 0, 128, 128);
        
        // ペット描画
        const colors = ['#ffeb3b', '#ff9800', '#ff5722', '#e91e63', '#9c27b0'];
        const color = colors[Math.min(this.pet.evolutionStage - 1, 4)];
        
        // シンプルなドット絵（16x16を8倍拡大）
        const pixelSize = 8;
        const offsetX = 32;
        const offsetY = 40;
        
        // ボディ
        this.ctx.fillStyle = color;
        for (let y = 0; y < 8; y++) {
            for (let x = 2; x < 6; x++) {
                this.ctx.fillRect(offsetX + x * pixelSize, offsetY + y * pixelSize, pixelSize, pixelSize);
            }
        }
        
        // 目
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(offsetX + 2 * pixelSize, offsetY + 2 * pixelSize, pixelSize, pixelSize);
        this.ctx.fillRect(offsetX + 5 * pixelSize, offsetY + 2 * pixelSize, pixelSize, pixelSize);
        
        // アニメーション（ホップ）
        if (this.animationFrame % 15 === 0) {
            this.ctx.save();
            this.ctx.translate(0, -5);
            this.ctx.restore();
        }
    }
}

// 初期化
const popupManager = new PopupPetManager();
```

## 4. バックグラウンドサービスワーカー

### 4.1 service-worker.js
```javascript
// バックグラウンドサービスワーカー

// 定期的な状態更新（1分ごと）
chrome.alarms.create('updatePetStatus', { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === 'updatePetStatus') {
        const pet = await PetStorage.load();
        
        // ステータス減少
        pet.hunger = Math.max(0, pet.hunger - 1);
        pet.happiness = Math.max(0, pet.happiness - 0.5);
        
        if (pet.hunger < 30) {
            pet.health = Math.max(0, pet.health - 0.5);
        }
        
        pet.age++;
        
        // 警告通知
        if (pet.hunger < 20 && !pet.lastHungerWarning) {
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'assets/icons/icon-128.png',
                title: 'ピクセルペット',
                message: `${pet.name}がお腹を空かせています！`,
                priority: 2
            });
            pet.lastHungerWarning = Date.now();
        }
        
        if (pet.happiness < 20 && !pet.lastHappinessWarning) {
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'assets/icons/icon-128.png',
                title: 'ピクセルペット',
                message: `${pet.name}が寂しがっています...`,
                priority: 1
            });
            pet.lastHappinessWarning = Date.now();
        }
        
        // 警告フラグリセット（1時間後）
        if (pet.lastHungerWarning && Date.now() - pet.lastHungerWarning > 3600000) {
            pet.lastHungerWarning = null;
        }
        if (pet.lastHappinessWarning && Date.now() - pet.lastHappinessWarning > 3600000) {
            pet.lastHappinessWarning = null;
        }
        
        await PetStorage.save(pet);
        
        // バッジ更新（空腹度を表示）
        if (pet.hunger < 50) {
            chrome.action.setBadgeText({ text: pet.hunger.toString() });
            chrome.action.setBadgeBackgroundColor({ color: '#ff0000' });
        } else {
            chrome.action.setBadgeText({ text: '' });
        }
    }
});

// メッセージリスナー
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'showNotification') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'assets/icons/icon-128.png',
            title: request.title,
            message: request.message,
            priority: 1
        });
    }
    
    if (request.action === 'petFed') {
        // 餌やり実績
        chrome.storage.local.get(['achievements'], (result) => {
            const achievements = result.achievements || {};
            achievements.totalFeedings = (achievements.totalFeedings || 0) + 1;
            chrome.storage.local.set({ achievements });
        });
    }
});

// 拡張機能インストール時
chrome.runtime.onInstalled.addListener(() => {
    // 初期データ作成
    PetStorage.initialize();
    
    // ウェルカム通知
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'assets/icons/icon-128.png',
        title: 'ピクセルペットへようこそ！',
        message: 'あなたのデジタルペットが待っています。アイコンをクリックして始めましょう！',
        priority: 2
    });
});
```

## 5. 共有モジュール

### 5.1 storage.js
```javascript
// ストレージ管理
const PetStorage = {
    async load() {
        return new Promise((resolve) => {
            chrome.storage.local.get(['petData'], (result) => {
                if (result.petData) {
                    resolve(result.petData);
                } else {
                    resolve(this.getDefaultPet());
                }
            });
        });
    },
    
    async save(petData) {
        return new Promise((resolve) => {
            chrome.storage.local.set({ petData }, resolve);
        });
    },
    
    getDefaultPet() {
        return {
            name: 'ピクセル',
            level: 1,
            exp: 0,
            hunger: 100,
            happiness: 100,
            health: 100,
            strength: 10,
            intelligence: 10,
            agility: 10,
            evolutionStage: 1,
            age: 0,
            lastUpdate: Date.now()
        };
    },
    
    async initialize() {
        const pet = await this.load();
        if (!pet.lastUpdate) {
            await this.save(this.getDefaultPet());
        }
    }
};
```

### 5.2 pet-logic.js
```javascript
// ペットロジック（共有）
const PetLogic = {
    calculateExpNeeded(level) {
        return level * 100;
    },
    
    getEvolutionStage(level) {
        if (level >= 100) return 5;
        if (level >= 50) return 4;
        if (level >= 25) return 3;
        if (level >= 10) return 2;
        return 1;
    },
    
    getStatusColor(value) {
        if (value >= 80) return '#4caf50';
        if (value >= 50) return '#ff9800';
        if (value >= 30) return '#ff5722';
        return '#f44336';
    },
    
    calculateOfflineChanges(pet, minutesPassed) {
        pet.hunger = Math.max(0, pet.hunger - minutesPassed * 2);
        pet.happiness = Math.max(0, pet.happiness - minutesPassed);
        pet.age += minutesPassed;
        
        if (pet.hunger < 30) {
            pet.health = Math.max(0, pet.health - minutesPassed * 0.5);
        }
        
        return pet;
    }
};
```

## 6. 設定ページ

### 6.1 options.html
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>ピクセルペット - 設定</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            padding: 20px;
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
        }
        
        h1 {
            text-align: center;
            color: #ffd700;
        }
        
        .setting-group {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 10px;
        }
        
        input[type="text"], input[type="number"] {
            width: 100%;
            padding: 8px;
            border-radius: 5px;
            border: none;
            margin-top: 5px;
        }
        
        input[type="checkbox"] {
            margin-right: 10px;
        }
        
        button {
            background: #ffd700;
            color: #333;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }
        
        button:hover {
            background: #ffed4e;
        }
        
        .button-group {
            text-align: center;
            margin-top: 20px;
        }
        
        .success-message {
            background: #4caf50;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            margin-top: 10px;
            display: none;
        }
    </style>
</head>
<body>
    <h1>🎮 ピクセルペット 設定</h1>
    
    <div class="setting-group">
        <h2>ペット情報</h2>
        <label>
            ペットの名前:
            <input type="text" id="petName" placeholder="ピクセル">
        </label>
    </div>
    
    <div class="setting-group">
        <h2>通知設定</h2>
        <label>
            <input type="checkbox" id="enableNotifications" checked>
            通知を有効にする
        </label>
        <label>
            <input type="checkbox" id="enableSound" checked>
            サウンドを有効にする
        </label>
        <label>
            通知間隔（分）:
            <input type="number" id="notificationInterval" value="60" min="10" max="360">
        </label>
    </div>
    
    <div class="setting-group">
        <h2>ゲーム設定</h2>
        <label>
            <input type="checkbox" id="hardMode">
            ハードモード（ステータス減少が早い）
        </label>
        <label>
            <input type="checkbox" id="autoSave" checked>
            自動セーブ
        </label>
    </div>
    
    <div class="setting-group">
        <h2>データ管理</h2>
        <button id="exportBtn">📥 データをエクスポート</button>
        <button id="importBtn">📤 データをインポート</button>
        <button id="resetBtn">🔄 リセット</button>
    </div>
    
    <div class="button-group">
        <button id="saveBtn">💾 設定を保存</button>
    </div>
    
    <div class="success-message" id="successMessage">
        設定を保存しました！
    </div>
    
    <script src="options.js"></script>
</body>
</html>
```

### 6.2 options.js
```javascript
// 設定ページのロジック
document.addEventListener('DOMContentLoaded', async () => {
    // 現在の設定を読み込み
    const settings = await loadSettings();
    
    // フォームに反映
    document.getElementById('petName').value = settings.petName || 'ピクセル';
    document.getElementById('enableNotifications').checked = settings.enableNotifications !== false;
    document.getElementById('enableSound').checked = settings.enableSound !== false;
    document.getElementById('notificationInterval').value = settings.notificationInterval || 60;
    document.getElementById('hardMode').checked = settings.hardMode || false;
    document.getElementById('autoSave').checked = settings.autoSave !== false;
    
    // 保存ボタン
    document.getElementById('saveBtn').addEventListener('click', saveSettings);
    
    // エクスポート
    document.getElementById('exportBtn').addEventListener('click', exportData);
    
    // インポート
    document.getElementById('importBtn').addEventListener('click', importData);
    
    // リセット
    document.getElementById('resetBtn').addEventListener('click', resetData);
});

async function loadSettings() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['settings'], (result) => {
            resolve(result.settings || {});
        });
    });
}

async function saveSettings() {
    const settings = {
        petName: document.getElementById('petName').value,
        enableNotifications: document.getElementById('enableNotifications').checked,
        enableSound: document.getElementById('enableSound').checked,
        notificationInterval: parseInt(document.getElementById('notificationInterval').value),
        hardMode: document.getElementById('hardMode').checked,
        autoSave: document.getElementById('autoSave').checked
    };
    
    chrome.storage.local.set({ settings }, () => {
        // 成功メッセージ表示
        const message = document.getElementById('successMessage');
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
        
        // ペット名を更新
        chrome.storage.local.get(['petData'], (result) => {
            if (result.petData) {
                result.petData.name = settings.petName;
                chrome.storage.local.set({ petData: result.petData });
            }
        });
    });
}

async function exportData() {
    chrome.storage.local.get(null, (data) => {
        const dataStr = JSON.stringify(data, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `pixel-pet-backup-${Date.now()}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    });
}

async function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                chrome.storage.local.set(data, () => {
                    alert('データをインポートしました！');
                    location.reload();
                });
            } catch (error) {
                alert('インポートに失敗しました: ' + error.message);
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

async function resetData() {
    if (confirm('本当にすべてのデータをリセットしますか？この操作は取り消せません。')) {
        chrome.storage.local.clear(() => {
            alert('データをリセットしました。');
            location.reload();
        });
    }
}
```

## 7. デプロイ手順

1. **フォルダ構造の作成**
   ```bash
   mkdir pixel-pet-extension
   cd pixel-pet-extension
   mkdir -p popup background content shared assets/icons options
   ```

2. **アイコンの作成**
   - 16x16, 32x32, 48x48, 128x128のPNGアイコンを作成

3. **Chrome拡張機能として読み込み**
   - Chrome://extensions/にアクセス
   - 「デベロッパーモード」をON
   - 「パッケージ化されていない拡張機能を読み込む」
   - フォルダを選択

4. **テスト**
   - ポップアップの動作確認
   - バックグラウンド処理の確認
   - 通知機能の確認
   - データ永続化の確認

5. **Chrome Web Storeへの公開**
   - 開発者アカウント登録（$5）
   - ZIPファイル作成
   - ストア掲載情報の作成
   - 審査提出

## 8. 今後の拡張アイデア

1. **クロスプラットフォーム同期**
   - Google Driveとの連携
   - QRコードでモバイル連携

2. **ソーシャル機能**
   - フレンドシステム
   - ペット対戦
   - ランキング

3. **カスタマイズ**
   - スキン機能
   - 背景変更
   - アクセサリー

4. **ミニゲーム**
   - ペットとのミニゲーム
   - 報酬システム

5. **AI機能**
   - ペットの性格AI
   - 会話機能
   - 学習機能