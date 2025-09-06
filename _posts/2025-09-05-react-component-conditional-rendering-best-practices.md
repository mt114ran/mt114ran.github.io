---
id: 100
title: "React コンポーネントの条件分岐レンダリング：判定ロジックはどこに配置するべきか"
tags: ["React", "TypeScript", "条件分岐", "アーキテクチャ", "ベストプラクティス"]
create: "2025-09-05 13:19"
update: "2025-09-05 13:19"
---

# React コンポーネントの条件分岐レンダリング：判定ロジックはどこに配置するべきか

## はじめに

React開発において、コンポーネントの表示/非表示を制御する際に「判定ロジックをどこに配置するべきか」は重要な設計判断です。特に、API から取得したデータに基づく条件分岐では、親コンポーネントで判定するか、子コンポーネント内で判定するかで保守性や再利用性が大きく変わります。

本記事では、実際のReact Nativeアプリでの発送遅延通知機能を例に、条件分岐の配置について詳しく解説します。

## 具体的な事例：発送遅延通知コンポーネント

### 要件
- APIから取得したメタデータに基づいて発送遅延通知を表示
- フラグが `true` かつ テキストが存在する場合のみ表示
- 複数画面で再利用される可能性

### 実装パターン1：親コンポーネントで判定

```tsx
// 親コンポーネント（呼び出し元）
const OriginalPackProductsPage = () => {
  const { metadata } = useAppMetadata();
  
  // 親で表示条件を判定
  const shouldShowNotice = metadata?.isShowShippingDelayNotice && 
                          metadata?.shippingDelayNoticeText;

  return (
    <View>
      {/* 親で条件を判定してから子を呼び出す */}
      {shouldShowNotice && (
        <ShippingDelayNotice text={metadata.shippingDelayNoticeText} />
      )}
    </View>
  );
};

// 子コンポーネント（表示専用）
const ShippingDelayNotice = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
```

### 実装パターン2：子コンポーネントで判定（推奨）

```tsx
// 親コンポーネント（呼び出し元）
const OriginalPackProductsPage = () => {
  return (
    <View>
      {/* シンプルに子コンポーネントを呼び出すだけ */}
      <ShippingDelayNotice />
    </View>
  );
};

// 子コンポーネント（判定＋表示）
const ShippingDelayNotice = () => {
  const { metadata } = useAppMetadata();
  
  const isShowNotice = metadata?.isShowShippingDelayNotice && 
                      metadata?.shippingDelayNoticeText;

  // 発送遅延通知フラグがfalseまたはテキストを取得できていない場合は何も表示しない
  if (!isShowNotice) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {metadata.shippingDelayNoticeText}
      </Text>
    </View>
  );
};
```

## 各パターンの比較分析

### パターン1（親で判定）の特徴

**メリット：**
- 子コンポーネントがシンプル
- propsが明確で単体テストしやすい
- 表示ロジックと描画ロジックが分離されている

**デメリット：**
- 呼び出し元が毎回同じ条件判定を書く必要がある
- APIの構造変更時に複数箇所の修正が必要
- 再利用時に条件判定のコードが重複する

### パターン2（子で判定）の特徴

**メリット：**
- 呼び出し元がシンプル
- 条件判定ロジックが1箇所に集約
- 再利用時の実装が簡単
- APIの構造変更時の影響範囲が限定的

**デメリット：**
- 子コンポーネントがAPI依存になる
- 単体テスト時にAPIモックが必要

## 設計原則から見た判断基準

### 1. 単一責任の原則（Single Responsibility Principle）

```tsx
// ❌ 親が複数の責任を持つ
const Parent = () => {
  // 1. データ取得の責任
  const { metadata } = useAppMetadata();
  
  // 2. 表示判定の責任
  const shouldShow = metadata?.flag && metadata?.text;
  
  // 3. UI構築の責任
  return <View>{shouldShow && <Child />}</View>;
};

// ✅ 責任を適切に分離
const Parent = () => {
  // UI構築の責任のみ
  return <View><Child /></View>;
};

const Child = () => {
  // データ取得と表示判定の責任
  const { metadata } = useAppMetadata();
  const shouldShow = metadata?.flag && metadata?.text;
  if (!shouldShow) return null;
  
  return <View>...</View>;
};
```

### 2. DRY原則（Don't Repeat Yourself）

```tsx
// ❌ 複数箇所で同じ判定ロジック
const PageA = () => {
  const { metadata } = useAppMetadata();
  const shouldShow = metadata?.isShowShippingDelayNotice && 
                    metadata?.shippingDelayNoticeText;
  return shouldShow && <ShippingDelayNotice />;
};

const PageB = () => {
  const { metadata } = useAppMetadata();
  // 同じ判定ロジックが重複
  const shouldShow = metadata?.isShowShippingDelayNotice && 
                    metadata?.shippingDelayNoticeText;
  return shouldShow && <ShippingDelayNotice />;
};

// ✅ 判定ロジックを1箇所に集約
const PageA = () => <ShippingDelayNotice />;
const PageB = () => <ShippingDelayNotice />;

const ShippingDelayNotice = () => {
  // 判定ロジックが1箇所のみ
  const { metadata } = useAppMetadata();
  const shouldShow = metadata?.isShowShippingDelayNotice && 
                    metadata?.shippingDelayNoticeText;
  if (!shouldShow) return null;
  return <View>...</View>;
};
```

### 3. 関心の分離（Separation of Concerns）

コンポーネントの責任を明確に分離することで、保守性が向上します：

```tsx
// ✅ 各コンポーネントが明確な責任を持つ
const ShippingDelayNotice = () => {
  // 発送遅延通知に関する全ての責任を集約
  const { metadata } = useAppMetadata();
  
  // この条件は「発送遅延通知」の表示条件なので、
  // このコンポーネントが知っているべき知識
  const isShowNotice = metadata?.isShowShippingDelayNotice && 
                      metadata?.shippingDelayNoticeText;

  if (!isShowNotice) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {metadata.shippingDelayNoticeText}
      </Text>
    </View>
  );
};
```

## 実践的な判断基準

### 子コンポーネントで判定すべき場合

1. **コンポーネント固有の表示条件**
   ```tsx
   // ユーザープロフィール画像の表示判定
   const Avatar = () => {
     const { user } = useAuth();
     // アバターコンポーネント自身が判断すべき条件
     if (!user?.avatarUrl) return <DefaultAvatar />;
     return <img src={user.avatarUrl} />;
   };
   ```

2. **複数箇所で再利用される条件**
   ```tsx
   // 通知バッジの表示判定
   const NotificationBadge = () => {
     const { unreadCount } = useNotification();
     // バッジ表示の条件はバッジコンポーネント自身が持つべき
     if (unreadCount === 0) return null;
     return <Badge count={unreadCount} />;
   };
   ```

3. **APIデータ構造に密結合な条件**

### 親コンポーネントで判定すべき場合

1. **ビジネスロジックに関わる条件**
   ```tsx
   const OrderPage = () => {
     const { order } = useOrder();
     // 注文状態は親のビジネスロジック
     const canShowShippingInfo = order.status === 'shipped';
     
     return (
       <div>
         {canShowShippingInfo && <ShippingInfo orderId={order.id} />}
       </div>
     );
   };
   ```

2. **画面固有の表示制御**
   ```tsx
   const Dashboard = () => {
     const [activeTab, setActiveTab] = useState('overview');
     // タブ表示は画面固有のUI制御
     return (
       <div>
         {activeTab === 'analytics' && <AnalyticsChart />}
       </div>
     );
   };
   ```

## TypeScriptでの型安全な実装

条件分岐を子コンポーネントで行う場合の型安全な実装例：

```tsx
// APIレスポンスの型定義
type AppMetadata = {
  minimumAppVersion: string;
  isShowShippingDelayNotice: boolean;
  shippingDelayNoticeText: string;
};

// オプショナルチェーニングを活用した安全な条件判定
const ShippingDelayNotice = () => {
  const { metadata } = useAppMetadata();
  
  // TypeScriptの型システムと組み合わせた安全な判定
  const isShowNotice = metadata?.isShowShippingDelayNotice && 
                      metadata?.shippingDelayNoticeText;

  // 発送遅延通知フラグがfalseまたはテキストを取得できていない場合は何も表示しない
  if (!isShowNotice) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {/* この時点でmetadata.shippingDelayNoticeTextは存在することが保証されている */}
        {metadata.shippingDelayNoticeText}
      </Text>
    </View>
  );
};
```

## オプショナルチェーニング（?.）の重要性

APIから取得したデータの条件判定では、オプショナルチェーニングが重要な役割を果たします：

```tsx
// ❌ unsafe - metadataがnullの場合エラー
if (metadata.isShowShippingDelayNotice && metadata.shippingDelayNoticeText) {
  // TypeError: Cannot read property 'isShowShippingDelayNotice' of null
}

// ✅ safe - metadataがnull/undefinedでも安全
if (metadata?.isShowShippingDelayNotice && metadata?.shippingDelayNoticeText) {
  // metadataがnullの場合、undefinedが返される
}
```

**解説：**
- `metadata?.isShowShippingDelayNotice` は metadata が null/undefined の場合に undefined を返す
- `&&` 演算子により、左辺が falsy な場合は右辺を評価しない
- この組み合わせで安全な条件判定が実現できる

## テスト観点での考慮事項

### 子コンポーネントで判定する場合のテスト

```tsx
// APIモックを使った統合テスト
describe('ShippingDelayNotice', () => {
  it('フラグがtrueでテキストがある場合に表示される', async () => {
    // APIレスポンスをモック
    const mockMetadata = {
      isShowShippingDelayNotice: true,
      shippingDelayNoticeText: '発送が遅延しています'
    };
    
    jest.mocked(useAppMetadata).mockReturnValue({
      metadata: mockMetadata,
      isLoading: false,
      error: null
    });

    const { getByText } = render(<ShippingDelayNotice />);
    expect(getByText('発送が遅延しています')).toBeInTheDocument();
  });

  it('フラグがfalseの場合は表示されない', () => {
    const mockMetadata = {
      isShowShippingDelayNotice: false,
      shippingDelayNoticeText: '発送が遅延しています'
    };
    
    jest.mocked(useAppMetadata).mockReturnValue({
      metadata: mockMetadata,
      isLoading: false,
      error: null
    });

    const { container } = render(<ShippingDelayNotice />);
    expect(container.firstChild).toBeNull();
  });

  it('テキストが空文字の場合は表示されない', () => {
    const mockMetadata = {
      isShowShippingDelayNotice: true,
      shippingDelayNoticeText: ''
    };
    
    jest.mocked(useAppMetadata).mockReturnValue({
      metadata: mockMetadata,
      isLoading: false,
      error: null
    });

    const { container } = render(<ShippingDelayNotice />);
    expect(container.firstChild).toBeNull();
  });
});
```

## 実際の開発での判断フロー

条件分岐の配置を決める際の判断フローチャート：

```
1. この条件はコンポーネント固有のものか？
   YES → 子コンポーネントで判定
   NO → 次へ

2. 複数箇所で同じ条件を使用するか？
   YES → 子コンポーネントで判定
   NO → 次へ

3. 画面やビジネスロジック固有の条件か？
   YES → 親コンポーネントで判定
   NO → プロジェクト方針に従う
```

## 結論

**推奨：子コンポーネント内での条件判定**

今回の発送遅延通知のような場合、以下の理由から子コンポーネント内での判定が適している：

1. **保守性**: 条件変更時の影響範囲が限定的
2. **再利用性**: 他画面での利用時に実装が簡単
3. **責任の明確化**: コンポーネント自身が表示条件を管理
4. **DRY原則**: 条件判定ロジックの重複を防止

ただし、画面固有のビジネスロジックや複雑な状態管理が絡む場合は、親コンポーネントでの判定も有効です。重要なのは、プロジェクトのアーキテクチャと要件に応じて一貫した方針を採用することです。

## まとめのポイント

- **コンポーネント固有の条件**は子コンポーネントで判定する
- **DRY原則**を重視して重複コードを避ける
- **TypeScript**とオプショナルチェーニングで型安全性を確保
- **テストしやすさ**も考慮してアーキテクチャを決定する
- **一貫性**のある方針をプロジェクト全体で採用する

適切な条件分岐の配置により、保守性が高く拡張しやすいReactアプリケーションを構築できます。

## 参考記事

- [React 公式ドキュメント - 条件付きレンダー](https://react.dev/learn/conditional-rendering)
- [React Design Patterns and Best Practices](https://www.patterns.dev/posts/react-design-patterns)
- [TypeScript 公式ドキュメント - Optional Chaining](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)