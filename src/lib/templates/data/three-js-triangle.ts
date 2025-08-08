import { WebTemplate } from '../types';

export const threeJsTriangleTemplate: WebTemplate = {
  id: 'three-js-triangle',
  title: 'Three.js 回転する三角形デモ',
  description: 'カラフルな三角形が3D空間で回転する美しいビジュアルデモ',
  category: '3D Graphics',
  thumbnail: '/templates/three-js-triangle.png',
  tags: ['three.js', '3D', 'WebGL', 'animation', 'triangle'],
  features: [
    'カラフルなグラデーション三角形',
    'マウス操作による視点変更',
    '自動回転アニメーション',
    'パーティクルエフェクト',
    'レスポンシブデザイン',
    'パフォーマンス最適化'
  ],
  isPro: true,
  code: {
    html: `<!-- Three.js CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<div class="container">
    <div class="header">
        <h1>✨ Three.js Triangle Demo</h1>
        <p class="subtitle">Interactive 3D Triangle with Particles</p>
    </div>

    <div class="canvas-container">
        <canvas id="triangleCanvas"></canvas>
        
        <div class="controls">
            <div class="control-group">
                <label>回転速度</label>
                <input type="range" id="rotationSpeed" min="0" max="100" value="50">
                <span id="speedValue">50</span>
            </div>
            
            <div class="control-group">
                <label>三角形サイズ</label>
                <input type="range" id="triangleSize" min="50" max="200" value="100">
                <span id="sizeValue">100</span>
            </div>
            
            <div class="control-group">
                <label>パーティクル数</label>
                <input type="range" id="particleCount" min="0" max="500" value="200">
                <span id="particleValue">200</span>
            </div>
            
            <div class="button-group">
                <button id="resetBtn">🔄 リセット</button>
                <button id="randomColorBtn">🎨 ランダムカラー</button>
                <button id="toggleParticlesBtn">✨ パーティクル切替</button>
            </div>
        </div>
    </div>

    <div class="info-section">
        <h2>🎮 操作方法</h2>
        <div class="info-grid">
            <div class="info-card">
                <span class="icon">🖱️</span>
                <h3>マウス操作</h3>
                <p>ドラッグで視点を回転<br>スクロールでズーム</p>
            </div>
            <div class="info-card">
                <span class="icon">⚡</span>
                <h3>パフォーマンス</h3>
                <p>60 FPS<br>GPU最適化</p>
            </div>
            <div class="info-card">
                <span class="icon">🎨</span>
                <h3>カラフル</h3>
                <p>頂点カラー<br>グラデーション効果</p>
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: white;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.header {
    text-align: center;
    margin-bottom: 2rem;
    animation: fadeInDown 0.8s ease;
}

h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
}

.canvas-container {
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    margin-bottom: 2rem;
    animation: fadeInUp 0.8s ease;
}

#triangleCanvas {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    display: block;
}

.controls {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    padding: 1.5rem;
    margin-top: 1.5rem;
}

.control-group {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.control-group label {
    width: 120px;
    font-size: 0.9rem;
}

.control-group input[type="range"] {
    flex: 1;
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    outline: none;
    -webkit-appearance: none;
}

.control-group input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.control-group input[type="range"]::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.control-group span {
    width: 40px;
    text-align: right;
}

.button-group {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
}

.button-group button {
    flex: 1;
    padding: 0.8rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.button-group button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.button-group button:active {
    transform: translateY(0);
}

.info-section {
    animation: fadeInUp 0.8s ease 0.2s both;
}

.info-section h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.info-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1.5rem;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s, box-shadow 0.3s;
}

.info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.info-card .icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 1rem;
}

.info-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.info-card p {
    opacity: 0.9;
    font-size: 0.9rem;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    #triangleCanvas {
        height: 350px;
    }
    
    .control-group {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .control-group label {
        width: 100%;
    }
    
    .button-group {
        flex-direction: column;
    }
}`,
    js: `// Three.js Triangle Demo
class TriangleDemo {
    constructor() {
        this.canvas = document.getElementById('triangleCanvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.triangle = null;
        this.particles = null;
        this.controls = null;
        this.rotationSpeed = 0.5;
        this.triangleSize = 1;
        this.particlesEnabled = true;
        this.clock = new THREE.Clock();
        
        this.init();
        this.setupEventListeners();
    }
    
    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0a);
        this.scene.fog = new THREE.Fog(0x0a0a0a, 10, 50);
        
        // Canvas dimensions
        const rect = this.canvas.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );
        this.camera.position.z = 5;
        
        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        
        // Create triangle
        this.createTriangle();
        
        // Create particles
        this.createParticles();
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        this.scene.add(pointLight);
        
        // Controls
        this.controls = new THREE.OrbitControls(this.camera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 2;
        this.controls.maxDistance = 10;
        
        // Start animation
        this.animate();
        
        // Handle resize
        window.addEventListener('resize', () => this.onResize());
    }
    
    createTriangle() {
        // Custom triangle geometry
        const geometry = new THREE.BufferGeometry();
        
        // Vertices
        const vertices = new Float32Array([
            0, 1.5, 0,     // top
            -1.3, -0.75, 0, // bottom left
            1.3, -0.75, 0   // bottom right
        ]);
        
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        
        // Colors for each vertex
        const colors = new Float32Array([
            1.0, 0.0, 0.0,  // red
            0.0, 1.0, 0.0,  // green
            0.0, 0.0, 1.0   // blue
        ]);
        
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        // Compute normals for lighting
        geometry.computeVertexNormals();
        
        // Material with vertex colors
        const material = new THREE.MeshPhongMaterial({
            vertexColors: true,
            side: THREE.DoubleSide,
            shininess: 100,
            specular: 0xffffff,
            emissive: 0x111111
        });
        
        // Create mesh
        this.triangle = new THREE.Mesh(geometry, material);
        this.scene.add(this.triangle);
        
        // Add wireframe overlay
        const wireframeGeometry = new THREE.WireframeGeometry(geometry);
        const wireframeMaterial = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.2
        });
        const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
        this.triangle.add(wireframe);
    }
    
    createParticles() {
        const particleCount = 200;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount * 3; i += 3) {
            // Random positions in a sphere
            const radius = 10;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            positions[i] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = radius * Math.cos(phi);
            
            // Random colors
            colors[i] = Math.random();
            colors[i + 1] = Math.random();
            colors[i + 2] = Math.random();
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }
    
    updateParticleCount(count) {
        // Remove old particles
        if (this.particles) {
            this.scene.remove(this.particles);
            this.particles.geometry.dispose();
            this.particles.material.dispose();
        }
        
        // Create new particles with updated count
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        
        for (let i = 0; i < count * 3; i += 3) {
            const radius = 10;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            positions[i] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = radius * Math.cos(phi);
            
            colors[i] = Math.random();
            colors[i + 1] = Math.random();
            colors[i + 2] = Math.random();
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        this.particles = new THREE.Points(geometry, material);
        if (this.particlesEnabled) {
            this.scene.add(this.particles);
        }
    }
    
    setRandomColors() {
        const colors = new Float32Array([
            Math.random(), Math.random(), Math.random(),
            Math.random(), Math.random(), Math.random(),
            Math.random(), Math.random(), Math.random()
        ]);
        
        this.triangle.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();
        
        // Rotate triangle
        if (this.triangle) {
            this.triangle.rotation.x += 0.01 * this.rotationSpeed;
            this.triangle.rotation.y += 0.01 * this.rotationSpeed;
        }
        
        // Rotate particles
        if (this.particles && this.particlesEnabled) {
            this.particles.rotation.x += 0.001;
            this.particles.rotation.y += 0.002;
        }
        
        // Update controls
        this.controls.update();
        
        // Render
        this.renderer.render(this.scene, this.camera);
    }
    
    onResize() {
        const rect = this.canvas.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
    
    setupEventListeners() {
        // Rotation speed
        document.getElementById('rotationSpeed').addEventListener('input', (e) => {
            this.rotationSpeed = e.target.value / 50;
            document.getElementById('speedValue').textContent = e.target.value;
        });
        
        // Triangle size
        document.getElementById('triangleSize').addEventListener('input', (e) => {
            const scale = e.target.value / 100;
            this.triangle.scale.set(scale, scale, scale);
            document.getElementById('sizeValue').textContent = e.target.value;
        });
        
        // Particle count
        document.getElementById('particleCount').addEventListener('input', (e) => {
            const count = parseInt(e.target.value);
            this.updateParticleCount(count);
            document.getElementById('particleValue').textContent = count;
        });
        
        // Reset button
        document.getElementById('resetBtn').addEventListener('click', () => {
            document.getElementById('rotationSpeed').value = 50;
            document.getElementById('triangleSize').value = 100;
            document.getElementById('particleCount').value = 200;
            
            this.rotationSpeed = 0.5;
            this.triangle.scale.set(1, 1, 1);
            this.updateParticleCount(200);
            
            document.getElementById('speedValue').textContent = '50';
            document.getElementById('sizeValue').textContent = '100';
            document.getElementById('particleValue').textContent = '200';
            
            this.camera.position.set(0, 0, 5);
            this.controls.reset();
        });
        
        // Random color button
        document.getElementById('randomColorBtn').addEventListener('click', () => {
            this.setRandomColors();
        });
        
        // Toggle particles button
        document.getElementById('toggleParticlesBtn').addEventListener('click', () => {
            this.particlesEnabled = !this.particlesEnabled;
            if (this.particlesEnabled) {
                this.scene.add(this.particles);
            } else {
                this.scene.remove(this.particles);
            }
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new TriangleDemo();
    });
} else {
    new TriangleDemo();
}`
  }
};