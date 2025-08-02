---
id: 5
title: "Webアクセシビリティ実装ガイド：すべての人に使いやすいサイトを"
tags: ["Accessibility", "Web Development", "UX"]
create: "2024-05-10 15:30"
update: "2024-05-15 18:20"
---

# Webアクセシビリティ実装ガイド：すべての人に使いやすいサイトを

## 記事を読むとわかるようになること

1. Webアクセシビリティが重要な理由として、法的要件以外に挙げられているものは何ですか？
2. WCAG 2.1で通常テキストに求められる最小コントラスト比は何対何ですか？
3. スクリーンリーダーに情報を提供するために使用される技術の略語は何ですか？

アクセシブルなWebサイトを構築するための実践的なガイドラインを紹介します。

## なぜアクセシビリティが重要か

- **包括性**: すべてのユーザーがサービスを利用できる
- **法的要件**: 多くの国で法的要件となっている
- **SEO向上**: アクセシブルなサイトは検索エンジンにも優しい
- **UX改善**: すべてのユーザーにとって使いやすくなる

## 1. セマンティックHTML

適切なHTML要素を使用することが基本です。

```html
<!-- 悪い例 -->
<div onclick="handleClick()">クリック</div>

<!-- 良い例 -->
<button type="button" onclick="handleClick()">クリック</button>
```

### 見出しの階層構造

```html
<h1>ページタイトル</h1>
  <h2>セクション1</h2>
    <h3>サブセクション1-1</h3>
    <h3>サブセクション1-2</h3>
  <h2>セクション2</h2>
```

## 2. ARIA属性の活用

```html
<!-- ロールの明示 -->
<nav role="navigation" aria-label="メインナビゲーション">
  <!-- ナビゲーション内容 -->
</nav>

<!-- 状態の通知 -->
<button aria-expanded="false" aria-controls="menu">
  メニュー
</button>

<!-- ライブリージョン -->
<div aria-live="polite" aria-atomic="true">
  <p>更新されました</p>
</div>
```

## 3. キーボードナビゲーション

```typescript
// フォーカス管理の例
const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
    >
      {/* モーダル内容 */}
    </div>
  );
};
```

## 4. 色のコントラスト

WCAG 2.1のガイドラインに従います：

- **通常テキスト**: 最小コントラスト比 4.5:1
- **大きなテキスト** (18pt以上): 最小コントラスト比 3:1
- **AAA準拠**: 通常テキスト 7:1、大きなテキスト 4.5:1

```css
/* 良いコントラストの例 */
.text-primary {
  color: #1a1a1a;  /* 濃いグレー */
  background-color: #ffffff;  /* 白 */
}

/* 色だけに依存しない */
.error {
  color: #d32f2f;
  border: 2px solid #d32f2f;
  background-color: #ffebee;
}
```

## 5. フォームのアクセシビリティ

```html
<form>
  <div class="form-group">
    <label for="email">
      メールアドレス
      <span aria-label="必須" class="required">*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-required="true"
      aria-describedby="email-error"
    />
    <span id="email-error" role="alert" class="error">
      有効なメールアドレスを入力してください
    </span>
  </div>
</form>
```

## 6. 画像とメディア

```html
<!-- 装飾的な画像 -->
<img src="decoration.png" alt="" role="presentation" />

<!-- 情報を含む画像 -->
<img src="chart.png" alt="2024年の売上推移：1月100万円から12月200万円に増加" />

<!-- 動画 -->
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions_ja.vtt" srclang="ja" label="日本語" />
  <track kind="captions" src="captions_en.vtt" srclang="en" label="English" />
</video>
```

## 7. テスト方法

### 自動テスト
```javascript
// axe-coreを使用した例
import { axe } from 'jest-axe';

test('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### 手動テスト
- キーボードのみでナビゲーション
- スクリーンリーダーでのテスト（NVDA、JAWS、VoiceOver）
- ブラウザの拡張機能（Wave、axe DevTools）

## チェックリスト

- [ ] すべての機能がキーボードでアクセス可能
- [ ] 適切な見出し構造
- [ ] フォーム要素にラベルがある
- [ ] 画像に適切なalt属性
- [ ] 色のコントラスト比が基準を満たしている
- [ ] エラーメッセージが明確
- [ ] フォーカスインジケーターが見える
- [ ] ARIAランドマークが適切に設定されている

アクセシビリティは後付けではなく、設計段階から考慮すべき重要な要素です。

## クイズの答え

1. SEO向上、UX改善（包括性も含む）
2. 4.5対1
3. ARIA（Accessible Rich Internet Applications）