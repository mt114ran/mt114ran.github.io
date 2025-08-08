import { WebTemplate } from '../types';

export const threeJsTetrisTemplate: WebTemplate = {
  id: 'three-js-tetris',
  title: '3D テトリスゲーム',
  description: 'Three.jsで作る立体的なテトリス。クラシックなゲームを3D空間で楽しもう！',
  category: '3D Graphics',
  thumbnail: '/templates/three-js-tetris.png',
  tags: ['three.js', '3D', 'game', 'tetris', 'interactive'],
  features: [
    '3D空間でのテトリス',
    'キーボード操作（矢印キー、スペース）',
    'スコアとレベルシステム',
    '次のブロック表示',
    'ゲームオーバー判定',
    'パーティクルエフェクト'
  ],
  isPro: true,
  code: {
    html: `<!-- Three.js CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<div class="game-container">
    <div class="game-header">
        <h1>🎮 3D TETRIS</h1>
        <p class="subtitle">Classic Game in 3D Space</p>
    </div>

    <div class="game-layout">
        <div class="side-panel left">
            <div class="info-box">
                <h3>スコア</h3>
                <div class="score" id="score">0</div>
            </div>
            
            <div class="info-box">
                <h3>レベル</h3>
                <div class="level" id="level">1</div>
            </div>
            
            <div class="info-box">
                <h3>ライン</h3>
                <div class="lines" id="lines">0</div>
            </div>
        </div>

        <div class="game-board">
            <canvas id="tetrisCanvas"></canvas>
            
            <div class="game-overlay" id="gameOverlay">
                <div class="overlay-content">
                    <h2 id="overlayTitle">3D TETRIS</h2>
                    <p id="overlayMessage">スペースキーでスタート</p>
                    <button id="startBtn">▶️ PLAY</button>
                </div>
            </div>
        </div>

        <div class="side-panel right">
            <div class="info-box">
                <h3>次のブロック</h3>
                <canvas id="nextBlockCanvas" width="150" height="150"></canvas>
            </div>
            
            <div class="info-box controls">
                <h3>操作方法</h3>
                <div class="control-item">
                    <span class="key">←→</span>
                    <span>移動</span>
                </div>
                <div class="control-item">
                    <span class="key">↑</span>
                    <span>回転</span>
                </div>
                <div class="control-item">
                    <span class="key">↓</span>
                    <span>落下</span>
                </div>
                <div class="control-item">
                    <span class="key">Space</span>
                    <span>即落下</span>
                </div>
                <div class="control-item">
                    <span class="key">P</span>
                    <span>一時停止</span>
                </div>
            </div>
        </div>
    </div>
</div>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    min-height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.game-container {
    width: 100%;
    max-width: 1400px;
    padding: 2rem;
}

.game-header {
    text-align: center;
    margin-bottom: 2rem;
    animation: slideDown 0.5s ease;
}

.game-header h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    background: linear-gradient(45deg, #00ff88, #00bbff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
}

.game-layout {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
}

.side-panel {
    flex: 0 0 200px;
}

.game-board {
    flex: 1;
    position: relative;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    padding: 1rem;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

#tetrisCanvas {
    width: 100%;
    height: 600px;
    display: block;
    border-radius: 10px;
}

.game-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    transition: opacity 0.3s;
}

.game-overlay.hidden {
    opacity: 0;
    pointer-events: none;
}

.overlay-content {
    text-align: center;
    animation: pulse 2s infinite;
}

.overlay-content h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.overlay-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

#startBtn {
    padding: 1rem 3rem;
    font-size: 1.2rem;
    background: linear-gradient(45deg, #00ff88, #00bbff);
    border: none;
    border-radius: 50px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 5px 20px rgba(0,255,136,0.4);
}

#startBtn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0,255,136,0.6);
}

.info-box {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.info-box h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    opacity: 0.7;
    margin-bottom: 0.5rem;
}

.score, .level, .lines {
    font-size: 2rem;
    font-weight: bold;
    background: linear-gradient(45deg, #ffaa00, #ff00aa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

#nextBlockCanvas {
    width: 100%;
    height: 150px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
}

.controls {
    font-size: 0.85rem;
}

.control-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.3rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
}

.key {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    font-weight: bold;
    min-width: 60px;
    text-align: center;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@media (max-width: 1024px) {
    .game-layout {
        flex-direction: column;
        align-items: center;
    }
    
    .side-panel {
        width: 100%;
        max-width: 400px;
        display: flex;
        gap: 1rem;
    }
    
    .side-panel.left {
        order: 2;
    }
    
    .side-panel.right {
        order: 3;
    }
    
    .game-board {
        order: 1;
        width: 100%;
        max-width: 600px;
    }
    
    .info-box {
        flex: 1;
    }
}

@media (max-width: 640px) {
    .game-header h1 {
        font-size: 2rem;
    }
    
    #tetrisCanvas {
        height: 400px;
    }
    
    .side-panel {
        flex-direction: column;
    }
}`,
    js: `// 3D Tetris Game
class Tetris3D {
    constructor() {
        this.canvas = document.getElementById('tetrisCanvas');
        this.nextCanvas = document.getElementById('nextBlockCanvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.nextRenderer = null;
        
        // Game state
        this.board = [];
        this.currentPiece = null;
        this.nextPiece = null;
        this.score = 0;
        this.level = 1;
        this.lines = 0;
        this.gameRunning = false;
        this.gamePaused = false;
        this.dropTimer = 0;
        this.dropInterval = 1000;
        
        // Board dimensions
        this.BOARD_WIDTH = 10;
        this.BOARD_HEIGHT = 20;
        this.BOARD_DEPTH = 1;
        
        // Tetromino shapes
        this.shapes = {
            I: { shape: [[1,1,1,1]], color: 0x00ffff },
            O: { shape: [[1,1],[1,1]], color: 0xffff00 },
            T: { shape: [[0,1,0],[1,1,1]], color: 0xff00ff },
            S: { shape: [[0,1,1],[1,1,0]], color: 0x00ff00 },
            Z: { shape: [[1,1,0],[0,1,1]], color: 0xff0000 },
            J: { shape: [[1,0,0],[1,1,1]], color: 0x0000ff },
            L: { shape: [[0,0,1],[1,1,1]], color: 0xffa500 }
        };
        
        this.init();
        this.setupEventListeners();
    }
    
    init() {
        // Initialize board
        this.board = Array(this.BOARD_HEIGHT).fill(null).map(() => 
            Array(this.BOARD_WIDTH).fill(0)
        );
        
        // Main scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0a);
        
        // Camera setup
        const aspect = this.canvas.clientWidth / this.canvas.clientHeight;
        this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        this.camera.position.set(0, 10, 25);
        this.camera.lookAt(0, 0, 0);
        
        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(5, 10, 5);
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);
        
        // Create game board
        this.createBoard();
        
        // Setup next block preview
        this.setupNextBlockPreview();
        
        // Start animation loop
        this.lastTime = 0;
        this.animate(0);
    }
    
    createBoard() {
        // Board outline
        const boardGeometry = new THREE.BoxGeometry(
            this.BOARD_WIDTH + 0.2,
            this.BOARD_HEIGHT + 0.2,
            this.BOARD_DEPTH
        );
        const boardMaterial = new THREE.MeshBasicMaterial({
            color: 0x222222,
            wireframe: true
        });
        const boardMesh = new THREE.Mesh(boardGeometry, boardMaterial);
        this.scene.add(boardMesh);
        
        // Grid lines
        const gridMaterial = new THREE.LineBasicMaterial({
            color: 0x333333,
            transparent: true,
            opacity: 0.3
        });
        
        // Vertical lines
        for (let x = -this.BOARD_WIDTH/2 + 1; x < this.BOARD_WIDTH/2; x++) {
            const points = [];
            points.push(new THREE.Vector3(x, -this.BOARD_HEIGHT/2, 0));
            points.push(new THREE.Vector3(x, this.BOARD_HEIGHT/2, 0));
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, gridMaterial);
            this.scene.add(line);
        }
        
        // Horizontal lines
        for (let y = -this.BOARD_HEIGHT/2 + 1; y < this.BOARD_HEIGHT/2; y++) {
            const points = [];
            points.push(new THREE.Vector3(-this.BOARD_WIDTH/2, y, 0));
            points.push(new THREE.Vector3(this.BOARD_WIDTH/2, y, 0));
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, gridMaterial);
            this.scene.add(line);
        }
    }
    
    setupNextBlockPreview() {
        // Scene for next block
        this.nextScene = new THREE.Scene();
        this.nextScene.background = new THREE.Color(0x0a0a0a);
        
        // Camera for next block
        this.nextCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        this.nextCamera.position.set(0, 0, 8);
        this.nextCamera.lookAt(0, 0, 0);
        
        // Renderer for next block
        this.nextRenderer = new THREE.WebGLRenderer({
            canvas: this.nextCanvas,
            antialias: true
        });
        this.nextRenderer.setSize(150, 150);
        
        // Lighting for next block
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.nextScene.add(ambientLight);
    }
    
    createPiece(type) {
        const shapeData = this.shapes[type];
        const shape = shapeData.shape;
        const color = shapeData.color;
        
        return {
            type: type,
            shape: shape,
            color: color,
            x: Math.floor(this.BOARD_WIDTH / 2) - Math.floor(shape[0].length / 2),
            y: this.BOARD_HEIGHT - 1,
            rotation: 0,
            mesh: null
        };
    }
    
    spawnPiece() {
        if (!this.nextPiece) {
            const types = Object.keys(this.shapes);
            const randomType = types[Math.floor(Math.random() * types.length)];
            this.nextPiece = this.createPiece(randomType);
        }
        
        this.currentPiece = this.nextPiece;
        
        // Generate next piece
        const types = Object.keys(this.shapes);
        const randomType = types[Math.floor(Math.random() * types.length)];
        this.nextPiece = this.createPiece(randomType);
        
        // Display next piece
        this.displayNextPiece();
        
        // Check if game over
        if (!this.isValidPosition(this.currentPiece)) {
            this.gameOver();
            return false;
        }
        
        return true;
    }
    
    displayNextPiece() {
        // Clear previous mesh
        while(this.nextScene.children.length > 1) {
            const child = this.nextScene.children[1];
            this.nextScene.remove(child);
            if (child.geometry) child.geometry.dispose();
            if (child.material) child.material.dispose();
        }
        
        // Create mesh for next piece
        const shape = this.nextPiece.shape;
        const color = this.nextPiece.color;
        const group = new THREE.Group();
        
        const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        const material = new THREE.MeshPhongMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: 0.2
        });
        
        for (let y = 0; y < shape.length; y++) {
            for (let x = 0; x < shape[y].length; x++) {
                if (shape[y][x]) {
                    const cube = new THREE.Mesh(geometry, material);
                    cube.position.set(
                        x - shape[y].length / 2 + 0.5,
                        -y + shape.length / 2 - 0.5,
                        0
                    );
                    group.add(cube);
                }
            }
        }
        
        this.nextScene.add(group);
        
        // Rotate preview
        group.rotation.y = Math.PI / 6;
        group.rotation.x = Math.PI / 8;
    }
    
    rotatePiece() {
        if (!this.currentPiece) return;
        
        const rotated = this.rotate(this.currentPiece.shape);
        const testPiece = {...this.currentPiece, shape: rotated};
        
        if (this.isValidPosition(testPiece)) {
            this.currentPiece.shape = rotated;
            this.currentPiece.rotation += 90;
        }
    }
    
    rotate(matrix) {
        const N = matrix.length;
        const M = matrix[0].length;
        const rotated = Array(M).fill(null).map(() => Array(N).fill(0));
        
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                rotated[j][N - 1 - i] = matrix[i][j];
            }
        }
        
        return rotated;
    }
    
    movePiece(dx, dy) {
        if (!this.currentPiece) return;
        
        const testPiece = {
            ...this.currentPiece,
            x: this.currentPiece.x + dx,
            y: this.currentPiece.y + dy
        };
        
        if (this.isValidPosition(testPiece)) {
            this.currentPiece.x += dx;
            this.currentPiece.y += dy;
            return true;
        }
        
        return false;
    }
    
    isValidPosition(piece) {
        const shape = piece.shape;
        
        for (let y = 0; y < shape.length; y++) {
            for (let x = 0; x < shape[y].length; x++) {
                if (shape[y][x]) {
                    const boardX = piece.x + x;
                    const boardY = piece.y - y;
                    
                    // Check boundaries
                    if (boardX < 0 || boardX >= this.BOARD_WIDTH ||
                        boardY < 0 || boardY >= this.BOARD_HEIGHT) {
                        return false;
                    }
                    
                    // Check collision with placed pieces
                    if (this.board[boardY][boardX]) {
                        return false;
                    }
                }
            }
        }
        
        return true;
    }
    
    lockPiece() {
        const shape = this.currentPiece.shape;
        const color = this.currentPiece.color;
        
        for (let y = 0; y < shape.length; y++) {
            for (let x = 0; x < shape[y].length; x++) {
                if (shape[y][x]) {
                    const boardX = this.currentPiece.x + x;
                    const boardY = this.currentPiece.y - y;
                    
                    if (boardY >= 0 && boardY < this.BOARD_HEIGHT) {
                        this.board[boardY][boardX] = color;
                    }
                }
            }
        }
        
        // Check for completed lines
        this.checkLines();
        
        // Spawn new piece
        this.spawnPiece();
    }
    
    checkLines() {
        let linesCleared = 0;
        
        for (let y = 0; y < this.BOARD_HEIGHT; y++) {
            if (this.board[y].every(cell => cell !== 0)) {
                // Remove line
                this.board.splice(y, 1);
                // Add empty line at top
                this.board.push(Array(this.BOARD_WIDTH).fill(0));
                linesCleared++;
                y--; // Check same line again
            }
        }
        
        if (linesCleared > 0) {
            this.lines += linesCleared;
            this.score += linesCleared * 100 * this.level;
            
            // Level up every 10 lines
            this.level = Math.floor(this.lines / 10) + 1;
            this.dropInterval = Math.max(100, 1000 - (this.level - 1) * 100);
            
            this.updateDisplay();
        }
    }
    
    dropPiece() {
        if (!this.movePiece(0, -1)) {
            this.lockPiece();
        }
    }
    
    hardDrop() {
        while (this.movePiece(0, -1)) {
            this.score += 2;
        }
        this.lockPiece();
        this.updateDisplay();
    }
    
    updateDisplay() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('level').textContent = this.level;
        document.getElementById('lines').textContent = this.lines;
    }
    
    render() {
        // Clear previous blocks
        const blocksToRemove = [];
        this.scene.traverse((child) => {
            if (child.userData.isBlock) {
                blocksToRemove.push(child);
            }
        });
        blocksToRemove.forEach(block => {
            this.scene.remove(block);
            if (block.geometry) block.geometry.dispose();
            if (block.material) block.material.dispose();
        });
        
        // Render board
        const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        
        for (let y = 0; y < this.BOARD_HEIGHT; y++) {
            for (let x = 0; x < this.BOARD_WIDTH; x++) {
                if (this.board[y][x]) {
                    const material = new THREE.MeshPhongMaterial({
                        color: this.board[y][x],
                        emissive: this.board[y][x],
                        emissiveIntensity: 0.2
                    });
                    const cube = new THREE.Mesh(geometry, material);
                    cube.position.set(
                        x - this.BOARD_WIDTH / 2 + 0.5,
                        y - this.BOARD_HEIGHT / 2 + 0.5,
                        0
                    );
                    cube.userData.isBlock = true;
                    cube.castShadow = true;
                    cube.receiveShadow = true;
                    this.scene.add(cube);
                }
            }
        }
        
        // Render current piece
        if (this.currentPiece) {
            const shape = this.currentPiece.shape;
            const color = this.currentPiece.color;
            const material = new THREE.MeshPhongMaterial({
                color: color,
                emissive: color,
                emissiveIntensity: 0.3,
                transparent: true,
                opacity: 0.9
            });
            
            for (let y = 0; y < shape.length; y++) {
                for (let x = 0; x < shape[y].length; x++) {
                    if (shape[y][x]) {
                        const cube = new THREE.Mesh(geometry, material);
                        cube.position.set(
                            this.currentPiece.x + x - this.BOARD_WIDTH / 2 + 0.5,
                            this.currentPiece.y - y - this.BOARD_HEIGHT / 2 + 0.5,
                            0
                        );
                        cube.userData.isBlock = true;
                        cube.castShadow = true;
                        this.scene.add(cube);
                    }
                }
            }
        }
    }
    
    animate(currentTime) {
        requestAnimationFrame((time) => this.animate(time));
        
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        
        // Game logic
        if (this.gameRunning && !this.gamePaused) {
            this.dropTimer += deltaTime;
            
            if (this.dropTimer >= this.dropInterval) {
                this.dropPiece();
                this.dropTimer = 0;
            }
        }
        
        // Render
        this.render();
        this.renderer.render(this.scene, this.camera);
        
        // Render next piece
        if (this.nextRenderer) {
            this.nextRenderer.render(this.nextScene, this.nextCamera);
        }
    }
    
    startGame() {
        // Reset game state
        this.board = Array(this.BOARD_HEIGHT).fill(null).map(() => 
            Array(this.BOARD_WIDTH).fill(0)
        );
        this.score = 0;
        this.level = 1;
        this.lines = 0;
        this.dropTimer = 0;
        this.updateDisplay();
        
        // Start game
        this.gameRunning = true;
        this.gamePaused = false;
        this.spawnPiece();
        
        // Hide overlay
        document.getElementById('gameOverlay').classList.add('hidden');
    }
    
    pauseGame() {
        if (this.gameRunning) {
            this.gamePaused = !this.gamePaused;
            
            if (this.gamePaused) {
                document.getElementById('overlayTitle').textContent = 'PAUSED';
                document.getElementById('overlayMessage').textContent = 'Pキーで再開';
                document.getElementById('startBtn').style.display = 'none';
                document.getElementById('gameOverlay').classList.remove('hidden');
            } else {
                document.getElementById('gameOverlay').classList.add('hidden');
                document.getElementById('startBtn').style.display = 'block';
            }
        }
    }
    
    gameOver() {
        this.gameRunning = false;
        document.getElementById('overlayTitle').textContent = 'GAME OVER';
        document.getElementById('overlayMessage').textContent = \`スコア: \${this.score}\`;
        document.getElementById('startBtn').textContent = '🔄 RETRY';
        document.getElementById('startBtn').style.display = 'block';
        document.getElementById('gameOverlay').classList.remove('hidden');
    }
    
    setupEventListeners() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (!this.gameRunning || this.gamePaused) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    this.movePiece(-1, 0);
                    break;
                case 'ArrowRight':
                    this.movePiece(1, 0);
                    break;
                case 'ArrowDown':
                    this.dropPiece();
                    this.score += 1;
                    this.updateDisplay();
                    break;
                case 'ArrowUp':
                    this.rotatePiece();
                    break;
                case ' ':
                    e.preventDefault();
                    this.hardDrop();
                    break;
            }
        });
        
        // Pause
        document.addEventListener('keydown', (e) => {
            if (e.key === 'p' || e.key === 'P') {
                this.pauseGame();
            }
        });
        
        // Start button
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startGame();
        });
        
        // Space to start
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' && !this.gameRunning) {
                e.preventDefault();
                this.startGame();
            }
        });
        
        // Window resize
        window.addEventListener('resize', () => {
            const aspect = this.canvas.clientWidth / this.canvas.clientHeight;
            this.camera.aspect = aspect;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        });
    }
}

// Initialize game
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Tetris3D();
    });
} else {
    new Tetris3D();
}`
  }
};