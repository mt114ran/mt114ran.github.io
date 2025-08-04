---
id: 15
title: "TypeScriptのビルドエラー解決！ゲームコンポーネントの型定義とReact Hooks依存関係の修正"
create: "2025-08-04 15:15"
tags: ["TypeScript", "React", "ESLint", "ビルドエラー", "Next.js", "ゲーム開発", "型定義", "個人作業用"]
---

## はじめに：TypeScriptの厳格な型チェックとの戦い

ブラウザゲーム集を実装した後、`npm run build`を実行したところ、TypeScriptとESLintから大量のエラーが...。今回は、これらのビルドエラーを解決する過程で学んだTypeScriptの型定義とReact Hooksの依存関係管理について紹介します。

## 発生した問題の概要

### 遭遇したエラーたち

```bash
# ビルド実行
npm run build

# 結果：6つのTypeScriptエラーと複数のESLint警告
./src/components/games/TetrisGame.tsx
28:34  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
103:16  Error: 'prev' is defined but never used.  @typescript-eslint/no-unused-vars
255:6  Warning: React Hook useEffect has missing dependencies...
```

主なエラーは以下の3種類：
1. **TypeScriptの`any`型エラー** - 型定義が不適切
2. **未使用変数の警告** - 使われていないパラメータ
3. **React Hooksの依存関係警告** - useEffectの依存配列が不完全

## 問題1: TypeScriptの`any`型エラー

### 問題のコード

```typescript
// 問題：any型を使用している
const currentPieceRef = useRef<any>(null)

const collision = (piece: any, board: number[][], offsetX = 0, offsetY = 0) => {
  // ...
}

const rotate = (piece: any) => {
  const rotated = piece.shape[0].map((_: any, i: number) =>
    piece.shape.map((row: number[]) => row[i]).reverse()
  )
  // ...
}
```

### なぜ`any`型は問題なのか？

`any`型は「なんでもあり」を意味し、TypeScriptの型チェックを無効化してしまいます。これでは、TypeScriptを使う意味が半減してしまいます。

### 解決策：適切な型定義を作成

```typescript
// TetrisPiece型インターフェースを定義
interface TetrisPiece {
  shape: number[][]  // テトロミノの形状（2次元配列）
  color: string      // ピースの色
  x: number         // X座標
  y: number         // Y座標
}

// 型定義を適用
const currentPieceRef = useRef<TetrisPiece | null>(null)

const collision = (piece: TetrisPiece, board: (number | string)[][], offsetX = 0, offsetY = 0) => {
  // 型安全なコード
}
```

### 学び：型定義のベストプラクティス

1. **インターフェースで構造を明確に** - オブジェクトの構造を明示的に定義
2. **Union型の活用** - `TetrisPiece | null`で、nullの可能性を型で表現
3. **配列の型も正確に** - `(number | string)[][]`で、複数の型を許容

## 問題2: 配列の型の不一致

### 発生したエラー

```bash
Type error: Type 'string' is not assignable to type 'number'.
board[piece.y + y][piece.x + x] = piece.color  // colorはstring、boardはnumber[][]
```

### 原因の分析

- `boardRef`を`number[][]`として定義
- しかし、実際には色情報（string型）を格納していた
- TypeScriptが型の不一致を検出

### 解決方法

```typescript
// 修正前
const boardRef = useRef<number[][]>([])

// 修正後：stringとnumberの両方を許容
const boardRef = useRef<(number | string)[][]>([])
```

## 問題3: null参照エラー

### 問題のコード

```typescript
// currentPieceRef.currentがnullの可能性があるのにチェックしていない
ctx.fillStyle = currentPieceRef.current.color  // エラー：'currentPieceRef.current' is possibly 'null'
```

### 解決策：変数への代入でnullチェック

```typescript
// 修正版：一度変数に代入することでTypeScriptが型を絞り込める
if (currentPieceRef.current && !gameOver) {
  const piece = currentPieceRef.current  // ここでnullではないことが保証される
  piece.shape.forEach((row: number[], y: number) => {
    row.forEach((value: number, x: number) => {
      if (value) {
        ctx.fillStyle = piece.color  // 安全にアクセス可能
        ctx.fillRect(
          (piece.x + x) * BLOCK_SIZE,
          (piece.y + y) * BLOCK_SIZE,
          BLOCK_SIZE - 1,
          BLOCK_SIZE - 1
        )
      }
    })
  })
}
```

## 問題4: React Hooksの依存関係警告

### 警告の内容

```bash
React Hook useEffect has missing dependencies: 'gameLoop' and 'rotate'.
Either include them or remove the dependency array.
```

### なぜこの警告が出るのか？

React Hooksのルール：
- useEffect内で使用する関数や変数は、依存配列に含める必要がある
- これにより、値が変更されたときに適切に再実行される

### 解決方法の選択肢

#### 方法1: 依存関係を追加（理想的だが...）

```typescript
useEffect(() => {
  // gameLoopとrotateを使用
}, [gameOver, isPaused, level, gameLoop, rotate])  // 依存関係を追加
```

問題：関数が毎回再生成されるため、無限ループに陥る可能性がある

#### 方法2: ESLintの警告を無効化（今回採用）

```typescript
useEffect(() => {
  // 初期化処理
  initBoard()
  currentPieceRef.current = randomTetromino()
  animationIdRef.current = requestAnimationFrame(gameLoop)

  return () => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current)
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])  // 意図的に空の依存配列（初回のみ実行）
```

#### 方法3: useCallbackでメモ化（より高度な解決策）

```typescript
const gameLoop = useCallback((time: number = 0) => {
  // ゲームループの処理
}, [/* 必要な依存関係 */])

useEffect(() => {
  // gameLoopを使用
}, [gameLoop])  // メモ化された関数を依存関係に含める
```

## 問題5: 未使用変数の警告

### 問題のコード

```typescript
setLevel(prev => Math.floor((lines + linesCleared) / 10) + 1)
// prevパラメータが未使用
```

### 解決策：不要なパラメータを削除

```typescript
setLevel(() => Math.floor((lines + linesCleared) / 10) + 1)
// prevを使わないなら、引数なしの関数に
```

## 実装手順とデバッグプロセス

### 1. エラーの詳細確認

```bash
# ビルドエラーの詳細を確認
npm run build 2>&1 | head -100
```

### 2. 新しいブランチで修正作業

```bash
# 修正用ブランチを作成
git checkout -b fix/build-errors
```

### 3. 段階的な修正とテスト

1. TypeScriptエラーを修正
2. ビルドを実行して確認
3. 新たなエラーが出たら修正
4. すべてのエラーが解消されるまで繰り返し

### 4. 最終確認

```bash
# ビルド成功！
> mt114ran.github.io@0.1.0 build
> next build && touch out/.nojekyll

✓ Generating static pages (158/158)
✓ Exporting (3/3)
```

## 学んだベストプラクティス

### TypeScriptの型定義

1. **`any`型は避ける** - 具体的な型定義を作成
2. **インターフェースを活用** - 複雑なオブジェクトには型定義
3. **Union型で柔軟に** - 複数の型を許容する場合は`|`を使用
4. **nullチェックは確実に** - null許容型（`Type | null`）を使用

### React Hooksの管理

1. **依存配列は正確に** - 使用する値をすべて含める
2. **メモ化を検討** - useCallbackやuseMemoで最適化
3. **ESLintルールの理解** - 警告の意味を理解して対処
4. **意図的な無視は明示的に** - eslint-disable-next-lineでコメント

### デバッグのコツ

1. **エラーメッセージを丁寧に読む** - TypeScriptのエラーは詳細
2. **一つずつ解決** - 複数のエラーがある場合は順番に
3. **型推論を活用** - TypeScriptの型推論機能を理解
4. **VSCodeの補完を活用** - 型情報がリアルタイムで確認できる

## トラブルシューティングのヒント

### よくある型エラーと対処法

```typescript
// エラー：Object is possibly 'null'
// 対処法1：オプショナルチェイニング
const value = ref.current?.property

// 対処法2：nullチェック
if (ref.current) {
  const value = ref.current.property
}

// エラー：Type 'string' is not assignable to type 'number'
// 対処法：型変換または型定義の修正
const num = parseInt(str, 10)  // 文字列を数値に変換
// または
type FlexibleType = string | number  // 両方を許容
```

## まとめ：型安全なコードの重要性

TypeScriptの厳格な型チェックは、最初は面倒に感じるかもしれません。しかし、これらのエラーを解決することで：

1. **バグの早期発見** - 実行時エラーを未然に防ぐ
2. **コードの可読性向上** - 型定義がドキュメントの役割を果たす
3. **リファクタリングの安全性** - 型チェックが変更の影響を教えてくれる
4. **開発体験の向上** - IDEの補完が効果的に働く

今回の経験を通じて、TypeScriptの型システムとReact Hooksの依存関係管理について深く理解できました。エラーメッセージは友達です！丁寧に読み解いて、より良いコードを書いていきましょう。

## 参考リソース

### TypeScript関連
- [TypeScript Handbook - Type Checking](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript Deep Dive - Type System](https://basarat.gitbook.io/typescript/type-system)
- [Understanding TypeScript's any type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)

### React Hooks関連
- [React公式 - Hooks のルール](https://ja.react.dev/reference/rules/rules-of-hooks)
- [ESLint Plugin React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [useEffect 完全ガイド](https://overreacted.io/a-complete-guide-to-useeffect/)

### Next.js & ESLint
- [Next.js - ESLint](https://nextjs.org/docs/app/api-reference/config/eslint)
- [Disabling ESLint Rules](https://eslint.org/docs/latest/use/configure/rules#disabling-rules)

---

**今回の教訓：** TypeScriptのエラーは敵ではなく、より良いコードへの道しるべ。エラーメッセージを恐れずに、一つずつ丁寧に解決していきましょう！
