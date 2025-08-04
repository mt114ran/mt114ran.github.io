---
layout: post
title: "ブラウザで遊べるミニゲーム集を作ってみた"
date: 2025-01-05
categories: [Web開発, JavaScript, ゲーム開発]
tags: [HTML5, Canvas, ゲーム, JavaScript]
description: "JavaScriptとHTML5 Canvasを使って、ブラウザで動作するミニゲームコレクションを作成しました。テトリス、スネーク、2048などのクラシックゲームを実装。"
author: MT
---

## はじめに

週末のプロジェクトとして、ブラウザで遊べるミニゲーム集を作成しました。懐かしのクラシックゲームをJavaScriptで実装し、デスクトップでもモバイルでも快適に遊べるようにレスポンシブ対応しています。

## 🎮 ゲームコレクションへのアクセス

作成したゲームは以下のリンクからプレイできます：

**[→ ゲームコレクションを見る](/note/game)**

## 実装したゲーム

今回実装したのは以下の3つのクラシックゲームです：

### 1. テトリス 🧱
- **操作方法**:
  - PC: 矢印キー（←→↓）で移動、↑で回転
  - モバイル: タッチボタンで操作
- **特徴**: 
  - 7種類のテトロミノ
  - レベルアップによる速度上昇
  - ライン消去でスコア獲得

### 2. スネークゲーム 🐍
- **操作方法**:
  - PC: 矢印キーまたはWASDで方向転換
  - モバイル: スワイプで操作
- **特徴**:
  - 餌を食べて成長
  - 壁や自分の体に当たるとゲームオーバー
  - スコアに応じて速度上昇

### 3. 2048 🔢
- **操作方法**:
  - PC: 矢印キーで全体をスライド
  - モバイル: スワイプで操作
- **特徴**:
  - 同じ数字を合わせて2048を目指す
  - シンプルながら奥深いパズル性
  - アンドゥ機能付き

## 技術的な実装

### 使用技術
- **フロントエンド**: Next.js 15 + TypeScript
- **ゲームロジック**: Pure JavaScript
- **グラフィックス**: HTML5 Canvas API
- **スタイリング**: CSS3 + Tailwind CSS
- **レスポンシブ対応**: タッチイベント + ポインターイベント

### 工夫したポイント

#### 1. レスポンシブデザイン
```javascript
// デバイスタイプの判定
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Canvasのサイズを動的に調整
function resizeCanvas() {
  const container = canvas.parentElement;
  const aspectRatio = 4 / 3;
  
  if (container.clientWidth / container.clientHeight > aspectRatio) {
    canvas.height = container.clientHeight;
    canvas.width = canvas.height * aspectRatio;
  } else {
    canvas.width = container.clientWidth;
    canvas.height = canvas.width / aspectRatio;
  }
}
```

#### 2. タッチ操作の実装
```javascript
// スワイプ検出
let touchStartX = 0;
let touchStartY = 0;

canvas.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

canvas.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;
  
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  
  // スワイプ方向の判定
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) handleSwipeRight();
    else handleSwipeLeft();
  } else {
    if (deltaY > 0) handleSwipeDown();
    else handleSwipeUp();
  }
});
```

#### 3. ゲームループの最適化
```javascript
// requestAnimationFrameを使用した滑らかなアニメーション
let lastTime = 0;
const targetFPS = 60;
const frameInterval = 1000 / targetFPS;

function gameLoop(currentTime) {
  const deltaTime = currentTime - lastTime;
  
  if (deltaTime >= frameInterval) {
    update(deltaTime);
    render();
    lastTime = currentTime;
  }
  
  requestAnimationFrame(gameLoop);
}
```

## 開発で学んだこと

### 1. Canvas APIの活用
HTML5 CanvasはゲームグラフィックスのレンダリングにとてもMachine powerful。ピクセル単位の描画制御が可能で、パフォーマンスも良好でした。

### 2. モバイル最適化の重要性
タッチ操作とマウス操作の両方に対応することで、幅広いデバイスで快適にプレイできるようになりました。特にスワイプ操作の実装は、モバイルユーザビリティを大幅に向上させました。

### 3. ゲームロジックの分離
ゲームロジックとレンダリング処理を分離することで、コードの保守性が向上。テストも書きやすくなりました。

## 今後の改善点

- [ ] オンラインランキング機能
- [ ] ゲームの種類を増やす（パックマン、ブロック崩しなど）
- [ ] サウンドエフェクトの追加
- [ ] PWA対応でオフラインプレイ可能に
- [ ] マルチプレイヤーモードの実装

## まとめ

ブラウザゲーム開発は、JavaScriptの基礎を学ぶのに最適な題材です。視覚的なフィードバックがすぐに得られ、作ったものをすぐに友人と共有できるのも魅力的。

ぜひ[ゲームコレクション](/note/game)で遊んでみてください！フィードバックや改善提案があれば、GitHubのIssueでお知らせください。

## 参考リソース

- [MDN - Canvas API](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API)
- [Game Programming Patterns](https://gameprogrammingpatterns.com/)
- [2048 Original](https://play2048.co/)
- [Tetris Guidelines](https://tetris.wiki/Tetris_Guideline)