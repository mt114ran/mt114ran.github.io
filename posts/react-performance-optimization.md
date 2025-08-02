---
id: 3
title: "Reactアプリケーションのパフォーマンス最適化テクニック"
tags: ["React", "Performance", "Optimization"]
create: "2024-03-15 11:20"
update: "2024-03-20 13:55"
---

# Reactアプリケーションのパフォーマンス最適化テクニック

## 記事を読むとわかるようになること

1. Reactで再レンダリングを防ぐために使用するAPIは何ですか？
2. 計算コストの高い処理結果をメモ化するReact Hookは何ですか？
3. 大量のリストデータを効率的に表示するために使用される技術は何ですか？

大規模なReactアプリケーションでパフォーマンスを維持するための最適化テクニックを紹介します。

## 1. React.memoによる再レンダリング防止

```typescript
const ExpensiveComponent = React.memo(({ data }: Props) => {
  return <div>{/* 複雑な処理 */}</div>;
}, (prevProps, nextProps) => {
  // カスタム比較ロジック
  return prevProps.data.id === nextProps.data.id;
});
```

## 2. useMemoとuseCallback

### useMemo
計算コストの高い処理結果をメモ化します。

```typescript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

### useCallback
関数をメモ化して、不要な再生成を防ぎます。

```typescript
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

## 3. 仮想スクロール

大量のリストデータを扱う場合は、react-windowやreact-virtualizedを使用します。

```typescript
import { FixedSizeList } from 'react-window';

const VirtualList = ({ items }) => (
  <FixedSizeList
    height={600}
    itemCount={items.length}
    itemSize={50}
    width="100%"
  >
    {({ index, style }) => (
      <div style={style}>
        {items[index].name}
      </div>
    )}
  </FixedSizeList>
);
```

## 4. コード分割とLazy Loading

```typescript
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

## 5. 状態管理の最適化

### Context APIの分割
Contextを細かく分割して、不要な再レンダリングを防ぎます。

```typescript
const UserContext = createContext();
const ThemeContext = createContext();

// 別々のProviderとして提供
<UserContext.Provider value={user}>
  <ThemeContext.Provider value={theme}>
    <App />
  </ThemeContext.Provider>
</UserContext.Provider>
```

## 6. DevToolsでのパフォーマンス分析

React DevToolsのProfilerを使用して、パフォーマンスボトルネックを特定します。

- Render時間の計測
- コンポーネントの再レンダリング頻度の確認
- Props変更の追跡

これらのテクニックを適切に組み合わせることで、スムーズなユーザー体験を提供できます。

## クイズの答え

1. React.memo
2. useMemo
3. 仮想スクロール（Virtual Scrolling）