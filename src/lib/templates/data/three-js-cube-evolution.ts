import { WebTemplate } from '../types';

export const threeJsCubeEvolutionTemplate: WebTemplate = {
  id: 'three-js-cube-evolution',
  title: 'Three.js 立方体進化デモ',
  description: '平面の四角形から3D立方体まで段階的に進化する実装例',
  category: '3D Graphics',
  thumbnail: '/templates/three-js-cube.png',
  tags: ['three.js', '3D', 'WebGL', 'animation', 'interactive'],
  features: [
    '段階的な実装例（平面→色付き→影→3D）',
    'Three.jsによる3D立方体',
    'マウス操作による回転・ズーム',
    '各ステージのコード例',
    'リアルタイムプレビュー',
    'レスポンシブデザイン'
  ],
  isPro: true,
  code: {
    html: `<!-- Three.js CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<div class="container">
    <h1>🎨 Three.js 立方体進化デモ</h1>
    <p class="intro">
        平面の四角形から始まり、段階的に3D立方体へと進化する過程を体験してください。
        各ステージのコードと実装例を確認できます。
    </p>

    <div class="evolution-grid">
        <!-- Stage 1: 平面の四角形（色なし） -->
        <div class="stage">
            <div class="stage-header">
                <span class="stage-number">STAGE 1</span>
                <h2 class="stage-title">平面の四角形（色なし）</h2>
                <p class="stage-description">
                    最もシンプルな四角形。HTMLとCSSのborderプロパティのみで実装。
                </p>
            </div>

            <div class="preview-container">
                <div class="plain-square"></div>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span>HTML + CSS</span>
                    <button class="copy-button" onclick="copyCode('stage1')">コピー</button>
                </div>
                <pre class="code-block" id="stage1"><code>&lt;div class="plain-square"&gt;&lt;/div&gt;

&lt;style&gt;
.plain-square {
    width: min(150px, 100%);
    height: min(150px, 100%);
    aspect-ratio: 1;
    border: 2px solid #333;
}
&lt;/style&gt;</code></pre>
            </div>
        </div>

        <!-- Stage 2: 色付き四角形 -->
        <div class="stage">
            <div class="stage-header">
                <span class="stage-number">STAGE 2</span>
                <h2 class="stage-title">色付き四角形</h2>
                <p class="stage-description">
                    グラデーション背景を追加して、視覚的な魅力を向上。
                </p>
            </div>

            <div class="preview-container">
                <div class="colored-square"></div>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span>HTML + CSS</span>
                    <button class="copy-button" onclick="copyCode('stage2')">コピー</button>
                </div>
                <pre class="code-block" id="stage2"><code>&lt;div class="colored-square"&gt;&lt;/div&gt;

&lt;style&gt;
.colored-square {
    width: min(150px, 100%);
    height: min(150px, 100%);
    aspect-ratio: 1;
    background: linear-gradient(135deg, #667eea, #764ba2);
}
&lt;/style&gt;</code></pre>
            </div>
        </div>

        <!-- Stage 3: 影付き四角形 -->
        <div class="stage">
            <div class="stage-header">
                <span class="stage-number">STAGE 3</span>
                <h2 class="stage-title">影付き四角形（立体感）</h2>
                <p class="stage-description">
                    box-shadowを使用して奥行きと立体感を演出。ホバー効果も追加。
                </p>
            </div>

            <div class="preview-container">
                <div class="shadow-square"></div>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span>HTML + CSS</span>
                    <button class="copy-button" onclick="copyCode('stage3')">コピー</button>
                </div>
                <pre class="code-block" id="stage3"><code>&lt;div class="shadow-square"&gt;&lt;/div&gt;

&lt;style&gt;
.shadow-square {
    width: min(150px, 100%);
    height: min(150px, 100%);
    aspect-ratio: 1;
    background: linear-gradient(135deg, #667eea, #764ba2);
    box-shadow:
        0 10px 20px rgba(0,0,0,0.3),
        0 6px 6px rgba(0,0,0,0.2);
    transform: translateZ(0);
    transition: transform 0.3s ease;
}

.shadow-square:hover {
    transform: translateY(-5px);
    box-shadow:
        0 15px 30px rgba(0,0,0,0.4),
        0 10px 10px rgba(0,0,0,0.3);
}
&lt;/style&gt;</code></pre>
            </div>
        </div>

        <!-- Stage 4: Three.js 3D立方体 -->
        <div class="stage">
            <div class="stage-header">
                <span class="stage-number">STAGE 4</span>
                <h2 class="stage-title">Three.js 3D立方体</h2>
                <p class="stage-description">
                    WebGLとThree.jsを使用した本格的な3D立方体。マウスでドラッグして回転できます。
                </p>
            </div>

            <div class="preview-container">
                <canvas id="three-canvas" class="three-canvas"></canvas>
            </div>

            <div class="controls-info">
                <strong>操作方法:</strong> マウスでドラッグして回転 | スクロールでズーム
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span>JavaScript (Three.js)</span>
                    <button class="copy-button" onclick="copyCode('stage4')">コピー</button>
                </div>
                <pre class="code-block" id="stage4"><code>// Three.jsのセットアップ
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf5f5f5);

// カメラの設定
const camera = new THREE.PerspectiveCamera(
    75,
    canvas.width / canvas.height,
    0.1,
    1000
);
camera.position.z = 5;

// レンダラーの設定
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
renderer.setSize(canvas.width, canvas.height);
renderer.shadowMap.enabled = true;

// 立方体の作成
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshPhongMaterial({
    color: 0x667eea,
    specular: 0x764ba2,
    shininess: 100
});
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
scene.add(cube);

// ライティング
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

// OrbitControlsの追加
const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);

    // 自動回転
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    controls.update();
    renderer.render(scene, camera);
}

animate();</code></pre>
            </div>
        </div>
    </div>

    <!-- 追加情報セクション -->
    <div class="stage">
        <h2 class="stage-title">📚 Three.jsについて</h2>
        <p class="stage-description">
            Three.jsは、WebGLを簡単に扱えるようにするJavaScriptライブラリです。
            複雑な3Dグラフィックスを、わかりやすいAPIで実装できます。
        </p>

        <div class="code-container">
            <div class="code-header">
                <span>CDNからThree.jsを読み込む</span>
                <button class="copy-button" onclick="copyCode('cdn')">コピー</button>
            </div>
            <pre class="code-block" id="cdn"><code>&lt;!-- Three.js本体 --&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"&gt;&lt;/script&gt;

&lt;!-- OrbitControls（マウス操作用） --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"&gt;&lt;/script&gt;</code></pre>
        </div>
    </div>
</div>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

@media (max-width: 640px) {
    .container {
        padding: 1rem;
    }
}

h1 {
    text-align: center;
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

@media (max-width: 640px) {
    h1 {
        font-size: 1.8rem;
    }
}

.intro {
    text-align: center;
    color: white;
    margin-bottom: 3rem;
    font-size: 1.1rem;
    opacity: 0.95;
}

.evolution-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    min-width: 0;
    width: 100%;
}

@media (min-width: 768px) {
    .evolution-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 420px) {
    .evolution-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .three-canvas {
        width: calc(100% + 1rem);
        margin: 0 -0.5rem;
    }
}

.stage {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
    min-width: 0;
    width: 100%;
}

@media (max-width: 640px) {
    .stage {
        padding: 1rem;
    }
}

.stage:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(0,0,0,0.3);
}

.stage-header {
    margin-bottom: 1rem;
}

.stage-number {
    display: inline-block;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.stage-title {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.stage-description {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 1rem;
}

.preview-container {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 1rem;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: visible;
}

@media (max-width: 420px) {
    .preview-container {
        padding: 1rem;
    }
}

.code-container {
    margin-top: 1rem;
    overflow: hidden;
    max-width: 100%;
}

.code-header {
    background: #2d2d2d;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px 8px 0 0;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.copy-button {
    background: #667eea;
    color: white;
    border: none;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background 0.3s ease;
}

.copy-button:hover {
    background: #5a67d8;
}

.code-block {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 1rem;
    border-radius: 0 0 8px 8px;
    overflow-x: auto;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
    max-height: 300px;
    overflow-y: auto;
    white-space: pre-wrap;
    word-break: break-all;
    max-width: 100%;
}

@media (max-width: 640px) {
    .code-block {
        font-size: 0.8rem;
        padding: 0.8rem;
    }
}

/* Stage 1: 平面の四角形（色なし） */
.plain-square {
    width: min(150px, 100%);
    height: min(150px, 100%);
    aspect-ratio: 1;
    border: 2px solid #333;
}

/* Stage 2: 色付き四角形 */
.colored-square {
    width: min(150px, 100%);
    height: min(150px, 100%);
    aspect-ratio: 1;
    background: linear-gradient(135deg, #667eea, #764ba2);
}

/* Stage 3: 影付き四角形 */
.shadow-square {
    width: min(150px, 100%);
    height: min(150px, 100%);
    aspect-ratio: 1;
    background: linear-gradient(135deg, #667eea, #764ba2);
    box-shadow:
        0 10px 20px rgba(0,0,0,0.3),
        0 6px 6px rgba(0,0,0,0.2);
    transform: translateZ(0);
    transition: transform 0.3s ease;
}

.shadow-square:hover {
    transform: translateY(-5px);
    box-shadow:
        0 15px 30px rgba(0,0,0,0.4),
        0 10px 10px rgba(0,0,0,0.3);
}

/* Three.js Canvas */
.three-canvas {
    width: calc(100% + 2rem);
    margin: 0 -1rem;
    height: 300px;
    border-radius: 8px;
}

.controls-info {
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #666;
}

.controls-info strong {
    color: #333;
}

@media (max-width: 768px) {
    .evolution-grid {
        grid-template-columns: 1fr;
    }

    h1 {
        font-size: 2rem;
    }
}`,
    js: `// Wait for DOM to be ready
setTimeout(() => {
    // Three.js 3D Cube Implementation
    const canvas = document.getElementById('three-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    // Get canvas dimensions
    const canvasRect = canvas.getBoundingClientRect();
    const width = canvasRect.width;
    const height = 300;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(4, 4, 6);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Create cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({
        color: 0x667eea,
        specular: 0x764ba2,
        shininess: 100,
        flatShading: false
    });

    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    // Add wireframe overlay
    const wireframeGeometry = new THREE.BoxGeometry(2.01, 2.01, 2.01);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x333333,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    cube.add(wireframe);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 20;
    directionalLight.shadow.camera.left = -3;
    directionalLight.shadow.camera.right = 3;
    directionalLight.shadow.camera.top = 3;
    directionalLight.shadow.camera.bottom = -3;
    scene.add(directionalLight);

    // Add a plane to receive shadows
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.1 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -2;
    plane.receiveShadow = true;
    scene.add(plane);

    // OrbitControls
    const controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Auto rotation when not interacting
        if (!controls.autoRotate) {
            cube.rotation.x += 0.003;
            cube.rotation.y += 0.003;
        }

        controls.update();
        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        const newRect = canvas.getBoundingClientRect();
        const newWidth = newRect.width;

        camera.aspect = newWidth / height;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, height);
    });
}, 100);

// Copy code function
function copyCode(elementId) {
    const codeBlock = document.getElementById(elementId);
    if (!codeBlock) return;

    const text = codeBlock.textContent;

    navigator.clipboard.writeText(text).then(() => {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'コピーしました！';
        button.style.background = '#48bb78';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#667eea';
        }, 2000);
    }).catch(err => {
        console.error('コピーに失敗しました:', err);
    });
}`
  }
};
