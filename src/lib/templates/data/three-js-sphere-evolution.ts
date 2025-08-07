import { WebTemplate } from '../types';

export const threeJsSphereEvolutionTemplate: WebTemplate = {
  id: 'three-js-sphere-evolution',
  title: 'Three.js 球体進化デモ',
  description: '平面の円から3D球体まで段階的に進化する実装例',
  category: '3D Graphics',
  thumbnail: '/templates/three-js-sphere.png',
  tags: ['three.js', '3D', 'WebGL', 'animation', 'sphere'],
  features: [
    '段階的な実装例（円→グラデーション→影→3D球体）',
    'Three.jsによる3D球体',
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
    <h1>⚪ Three.js 球体進化デモ</h1>
    <p class="intro">
        平面の円から始まり、段階的に3D球体へと進化する過程を体験してください。
        各ステージのコードと実装例を確認できます。
    </p>

    <div class="evolution-grid">
        <!-- Stage 1: 平面の円（色なし） -->
        <div class="stage">
            <div class="stage-header">
                <span class="stage-number">STAGE 1</span>
                <h2 class="stage-title">平面の円（色なし）</h2>
                <p class="stage-description">
                    最もシンプルな円。HTMLとCSSのborderプロパティのみで実装。
                </p>
            </div>

            <div class="preview-container">
                <div class="plain-circle"></div>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span>HTML + CSS</span>
                    <button class="copy-button" onclick="copyCode('stage1')">コピー</button>
                </div>
                <pre class="code-block" id="stage1"><code>&lt;div class="plain-circle"&gt;&lt;/div&gt;

&lt;style&gt;
.plain-circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #333;
}
&lt;/style&gt;</code></pre>
            </div>
        </div>

        <!-- Stage 2: グラデーション円 -->
        <div class="stage">
            <div class="stage-header">
                <span class="stage-number">STAGE 2</span>
                <h2 class="stage-title">グラデーション円</h2>
                <p class="stage-description">
                    放射状グラデーションで立体感を演出。中心から外側へ色が変化。
                </p>
            </div>

            <div class="preview-container">
                <div class="gradient-circle"></div>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span>HTML + CSS</span>
                    <button class="copy-button" onclick="copyCode('stage2')">コピー</button>
                </div>
                <pre class="code-block" id="stage2"><code>&lt;div class="gradient-circle"&gt;&lt;/div&gt;

&lt;style&gt;
.gradient-circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%,
        #a78bfa 0%,
        #7c3aed 50%,
        #5b21b6 100%);
}
&lt;/style&gt;</code></pre>
            </div>
        </div>

        <!-- Stage 3: 影付き球体風 -->
        <div class="stage">
            <div class="stage-header">
                <span class="stage-number">STAGE 3</span>
                <h2 class="stage-title">影付き球体風（CSS 3D効果）</h2>
                <p class="stage-description">
                    複数の影とグラデーションを組み合わせて球体感を演出。内側の影で凹凸を表現。
                </p>
            </div>

            <div class="preview-container">
                <div class="shadow-sphere"></div>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span>HTML + CSS</span>
                    <button class="copy-button" onclick="copyCode('stage3')">コピー</button>
                </div>
                <pre class="code-block" id="stage3"><code>&lt;div class="shadow-sphere"&gt;&lt;/div&gt;

&lt;style&gt;
.shadow-sphere {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%,
        #c4b5fd 0%,
        #8b5cf6 40%,
        #6d28d9 100%);
    box-shadow:
        0 20px 40px rgba(109, 40, 217, 0.4),
        0 10px 20px rgba(139, 92, 246, 0.3),
        inset -20px -20px 40px rgba(0, 0, 0, 0.3),
        inset 10px 10px 20px rgba(255, 255, 255, 0.3);
    transform: translateZ(0);
    transition: transform 0.3s ease;
}

.shadow-sphere:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow:
        0 30px 60px rgba(109, 40, 217, 0.5),
        0 15px 30px rgba(139, 92, 246, 0.4),
        inset -20px -20px 40px rgba(0, 0, 0, 0.3),
        inset 10px 10px 20px rgba(255, 255, 255, 0.3);
}
&lt;/style&gt;</code></pre>
            </div>
        </div>

        <!-- Stage 4: Three.js 3D球体 -->
        <div class="stage">
            <div class="stage-header">
                <span class="stage-number">STAGE 4</span>
                <h2 class="stage-title">Three.js 3D球体</h2>
                <p class="stage-description">
                    WebGLとThree.jsを使用した本格的な3D球体。環境マッピングで反射も表現。
                </p>
            </div>

            <div class="preview-container">
                <canvas id="three-sphere-canvas" class="three-canvas"></canvas>
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

// 球体の作成
const geometry = new THREE.SphereGeometry(1.5, 64, 64);
const material = new THREE.MeshPhongMaterial({
    color: 0x8b5cf6,
    specular: 0x4a3b8c,
    shininess: 30,
    emissive: 0x6d28d9,
    emissiveIntensity: 0.05
});
const sphere = new THREE.Mesh(geometry, material);
sphere.castShadow = true;
scene.add(sphere);

// ライティング
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xc4b5fd, 0.5);
pointLight.position.set(-5, 3, -5);
scene.add(pointLight);

// OrbitControlsの追加
const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);

    // 自動回転
    sphere.rotation.y += 0.005;

    controls.update();
    renderer.render(scene, camera);
}

animate();</code></pre>
            </div>
        </div>
    </div>

    <!-- 追加情報セクション -->
    <div class="stage">
        <h2 class="stage-title">📚 球体レンダリングの技術</h2>
        <p class="stage-description">
            球体は3Dグラフィックスの基本形状の一つです。光の反射や影の落ち方が美しく、
            マテリアルの質感を表現するのに最適な形状です。
        </p>

        <div class="code-container">
            <div class="code-header">
                <span>高度な球体マテリアル</span>
                <button class="copy-button" onclick="copyCode('advanced')">コピー</button>
            </div>
            <pre class="code-block" id="advanced"><code>// メタリックな球体
const metalMaterial = new THREE.MeshStandardMaterial({
    color: 0x8b5cf6,
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 1.0
});

// ガラスのような球体
const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transmission: 1,
    opacity: 0.5,
    metalness: 0,
    roughness: 0,
    ior: 1.5,
    thickness: 0.5,
    specularIntensity: 1,
    specularColor: 0xffffff
});</code></pre>
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
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

@media (max-width: 640px) {
    .evolution-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

.stage {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
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
    background: linear-gradient(135deg, #8b5cf6, #6d28d9);
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
}

.code-container {
    margin-top: 1rem;
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
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background 0.3s ease;
}

.copy-button:hover {
    background: #7c3aed;
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
    white-space: pre;
}

@media (max-width: 640px) {
    .code-block {
        font-size: 0.8rem;
        padding: 0.8rem;
    }
}

/* Stage 1: 平面の円（色なし） */
.plain-circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #333;
}

/* Stage 2: グラデーション円 */
.gradient-circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%,
        #a78bfa 0%,
        #7c3aed 50%,
        #5b21b6 100%);
}

/* Stage 3: 影付き球体風 */
.shadow-sphere {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%,
        #c4b5fd 0%,
        #8b5cf6 40%,
        #6d28d9 100%);
    box-shadow:
        0 20px 40px rgba(109, 40, 217, 0.4),
        0 10px 20px rgba(139, 92, 246, 0.3),
        inset -20px -20px 40px rgba(0, 0, 0, 0.3),
        inset 10px 10px 20px rgba(255, 255, 255, 0.3);
    transform: translateZ(0);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.shadow-sphere:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow:
        0 30px 60px rgba(109, 40, 217, 0.5),
        0 15px 30px rgba(139, 92, 246, 0.4),
        inset -20px -20px 40px rgba(0, 0, 0, 0.3),
        inset 10px 10px 20px rgba(255, 255, 255, 0.3);
}

/* Three.js Canvas */
.three-canvas {
    width: 100%;
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
    // Three.js 3D Sphere Implementation
    const canvas = document.getElementById('three-sphere-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    // Get canvas dimensions
    const canvasRect = canvas.getBoundingClientRect();
    const width = canvasRect.width;
    const height = 300;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(3, 3, 5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Create sphere with high detail
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshPhongMaterial({
        color: 0x8b5cf6,
        specular: 0x4a3b8c,
        shininess: 30,
        emissive: 0x6d28d9,
        emissiveIntensity: 0.05
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add(sphere);

    // Add subtle wireframe for visual interest
    const wireframeGeometry = new THREE.SphereGeometry(1.51, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x6d28d9,
        wireframe: true,
        transparent: true,
        opacity: 0.05
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    sphere.add(wireframe);

    // Multiple light sources for better shading
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 20;
    directionalLight.shadow.camera.left = -3;
    directionalLight.shadow.camera.right = 3;
    directionalLight.shadow.camera.top = 3;
    directionalLight.shadow.camera.bottom = -3;
    scene.add(directionalLight);

    // Add colored point light for interesting reflections
    const pointLight = new THREE.PointLight(0xc4b5fd, 0.5);
    pointLight.position.set(-5, 3, -5);
    scene.add(pointLight);

    // Add another point light from different angle
    const pointLight2 = new THREE.PointLight(0xffffff, 0.3);
    pointLight2.position.set(3, -3, 3);
    scene.add(pointLight2);

    // Add a plane to receive shadows
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.1 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -2.5;
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

    // Animation loop with smooth rotation
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;

        // Smooth floating animation
        sphere.position.y = Math.sin(time) * 0.2;

        // Auto rotation
        if (!controls.autoRotate) {
            sphere.rotation.y += 0.005;
        }

        // Pulsing emissive effect
        material.emissiveIntensity = 0.05 + Math.sin(time * 2) * 0.02;

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
            button.style.background = '#8b5cf6';
        }, 2000);
    }).catch(err => {
        console.error('コピーに失敗しました:', err);
    });
}`
  }
};
