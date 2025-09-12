---
layout: post
title: "WebViewの認証トークン管理：500エラーから401エラーへの改善とセキュリティ考察"
date: 2025-09-12
categories: [Firebase, WebView, Authentication, Security]
tags: [Firebase Auth, React Native, Ruby on Rails, JWT, Token Management]
author: mt114ran
description: "WebViewでFirebase認証トークンの期限切れによる500エラーを401エラーに改善し、セキュリティを考慮した実装を行った記録"
create: "2025-09-12 21:18"
---

## はじめに

React Native（Expo）アプリのWebViewでFirebase Authenticationのトークンを使用している際に、トークン期限切れで500エラーが発生する問題に遭遇しました。この問題を解決する過程で、トークン管理の仕組みやセキュリティについて深く理解することができたので、その内容を共有します。

## 問題の背景

### システム構成

```
[React Native App] 
    ↓ Firebase Auth（IDトークン）
[WebView] 
    ↓ Authorizationヘッダー
[Rails Backend]
    ↓ JWT検証
[レスポンス]
```

### 発生していた問題

1日約100件の500 Internal Server Errorが発生していました。エラーログを確認すると：

```ruby
# エラーログ
JWT::ExpiredSignature: Signature has expired
  from firebase_token_decoder.rb:decode
```

## 原因の分析

### なぜ500エラーが発生していたのか

元のRailsコントローラーの実装：

```ruby
def current_user
  # ... 省略 ...
  
  # WebViewからのアクセス時
  token, _option = ActionController::HttpAuthentication::Token.token_and_options(request)
  if token.present?
    res = TokenDecoder.new(token).decode  # ← ここで例外発生！
    @current_user = User.find_by(uid: res['user_id'])
  end
  
  @current_user
end
```

トークンが期限切れの場合、`decode`メソッドが例外を投げて500エラーになっていました。

### トークンの有無と期限切れの違い

重要な気づきは、**「トークンがない」**と**「トークンがあるけど期限切れ」**は全く別の状態だということです：

| 状態 | `token.present?` | 結果 |
|------|-----------------|------|
| トークンなし | false | セッション認証にフォールバック（正常） |
| トークンあり（有効） | true | トークン認証成功（正常） |
| トークンあり（期限切れ） | true | **500エラー！** |

## Firebase Authenticationのトークン管理

### 2種類のトークン

Firebase Authenticationには2種類のトークンがあります：

1. **IDトークン**（1時間有効）
   - JWTフォーマット
   - ユーザー情報を含む
   - APIリクエストで使用
   
2. **リフレッシュトークン**（無期限）
   - IDトークンを更新するために使用
   - Firebase SDKが内部で管理

### トークンのライフサイクル

```javascript
// React Native側のトークン取得
const useIdToken = () => {
  const [idToken, setIdToken] = useState(undefined);
  
  useEffect(() => {
    const fetchIdToken = async () => {
      const currentUser = auth.currentUser;
      // デフォルトではキャッシュされたトークンを返す
      const token = currentUser ? await getIdToken(currentUser) : "";
      setIdToken(token);
    };
    fetchIdToken();
  }, [auth.currentUser]);
  
  return { idToken };
};
```

### なぜ100件/日程度のエラーで済んでいたのか

Firebase SDKには**自動トークンリフレッシュ機能**があります：

- トークンの有効期限が**5分未満**になると自動的にリフレッシュ
- つまり、通常の使用では期限切れになることは稀
- エラーが発生するのは特殊なケースのみ

#### 500エラーが発生する具体的なシナリオ

**パターン1: 長時間アプリを使用**
```
10:00 - アプリ起動、トークン取得（有効期限11:00）
10:55 - Firebase SDKが自動更新を試みるが、ネットワーク不調で失敗
11:01 - WebViewアクセス → 期限切れトークンで500エラー！
```

**パターン2: バックグラウンドからの復帰**
```
10:00 - WebView表示中（トークン有効期限11:00）
10:30 - アプリをバックグラウンドへ
11:30 - アプリを再度開く → 古いトークンで500エラー！
```

## 解決策の実装

### ステップ1: 500エラーを401エラーに変更

Rails側で例外をキャッチして適切なHTTPステータスを返すように修正：

```ruby
# app/controllers/application_controller.rb
def current_user
  # ... 省略 ...
  
  if token.present?
    begin
      res = TokenDecoder.new(token).decode
      @current_user = User.find_by(uid: res['user_id'])
    rescue TokenDecoder::ExpiredTokenError => e
      # 401エラーを返す
      Rails.logger.info "WebView token expired: #{e.message}"
      response.headers['WWW-Authenticate'] = 'Bearer realm="Application", error="invalid_token"'
      render json: { 
        error: 'Token expired', 
        code: 'TOKEN_EXPIRED'
      }, status: :unauthorized
      return nil
    end
  end
  
  @current_user
end
```

### ステップ2: FirebaseTokenDecoderの改善

期限切れエラーを区別できるように例外クラスを追加：

```ruby
# lib/services/token_decoder.rb
class TokenDecoder
  class InvalidTokenError < StandardError; end
  class ExpiredTokenError < StandardError; end  # 追加
  
  def decode
    # ... 省略 ...
  rescue JWT::ExpiredSignature => e
    Rails.logger.info "Token expired: #{e.message}"
    raise ExpiredTokenError, e.message  # 専用の例外を投げる
  end
end
```

## セキュリティの考慮

### 当初検討した自動リトライの問題点

最初は「401エラー時に自動的にトークンをリフレッシュして再試行」する実装を検討しました：

```javascript
// ❌ セキュリティ上問題のある実装
const handleHttpError = async (event) => {
  if (event.nativeEvent.statusCode === 401) {
    // トークンを強制リフレッシュ
    const newToken = await getIdToken(currentUser, true);
    // 新しいトークンでリトライ
    webView.reload();
  }
};
```

しかし、これには**重大なセキュリティホール**があります：

1. Firebaseのリフレッシュトークンは**無期限**
2. ユーザーをBANしても、リフレッシュトークンがある限り新しいIDトークンを取得可能
3. 永続的にアクセスを継続できてしまう

### 最終的な実装：再認証を促す

セキュリティを重視し、401エラー時は再ログインを要求する実装にしました：

```javascript
// components/WebViewWithRetry.tsx
export const WebViewWithRetry = ({ onHttpError, ...props }) => {
  const handleHttpError = useCallback((event) => {
    if (event.nativeEvent.statusCode === 401) {
      console.log("WebView received 401, re-authentication required");
      
      // 再認証が必要であることを通知
      onHttpError?.({
        ...event,
        nativeEvent: {
          ...event.nativeEvent,
          description: "Authentication required",
        },
      });
    } else {
      onHttpError?.(event);
    }
  }, [onHttpError]);

  return <RNWebView {...props} onHttpError={handleHttpError} />;
};
```

使用側：

```javascript
// app/settings/account.tsx
<WebViewWithRetry
  source={{ uri: url, headers: { Authorization: `Bearer ${idToken}` } }}
  onHttpError={(event) => {
    if (event.nativeEvent.description?.includes("authentication required")) {
      Alert.alert(
        "再ログインが必要です",
        "セキュリティ上の理由により、再度ログインが必要です。",
        [{ text: "OK", onPress: () => router.replace("/") }]
      );
    }
  }}
/>
```

## トークン管理のベストプラクティス

### 1. Firebase SDKの自動リフレッシュを活用

```javascript
// 明示的なリフレッシュは不要
const token = await getIdToken(currentUser);  // 自動で5分前にリフレッシュされる
```

### 2. エラーハンドリングの使い分け

- **401 Unauthorized**: 再認証を要求
- **403 Forbidden**: アクセス権限なし
- **500 Internal Server Error**: 避けるべき（今回の改善点）

### 3. セキュリティファースト

- 自動リトライよりも明示的な再認証
- リフレッシュトークンの無期限利用を防ぐ
- ユーザーへの適切なフィードバック

## WebViewの独立性について

重要な発見は、**WebViewのセッションは完全に独立している**ということです：

```javascript
// WebViewのリクエスト
Authorization: Bearer [IDトークン]  // アプリから渡されたトークン

// 通常のブラウザのリクエスト
Cookie: _session_id=...  // ブラウザのセッションクッキー
```

WebViewは：
- ブラウザのCookieを共有しない
- 独自のセッション管理が必要
- 明示的にトークンを渡す必要がある

## まとめ

### 改善結果

- **500エラー → 401エラー**: 適切なHTTPステータスコード
- **UX向上**: エラー時も分かりやすいメッセージ
- **セキュリティ強化**: BANされたユーザーのアクセスを確実に遮断

### 学んだこと

1. **トークンの有無と期限切れは別物**
   - トークンなし → フォールバック可能
   - トークン期限切れ → 明示的なエラー処理が必要

2. **Firebase SDKの自動リフレッシュ機能を信頼する**
   - 5分前の自動更新で通常は問題なし
   - エッジケースのみ考慮すればよい

3. **セキュリティと利便性のバランス**
   - 自動リトライは便利だが、セキュリティリスクがある
   - 明示的な再認証の方が安全

4. **WebViewは独立した環境**
   - ブラウザセッションとは別物
   - 専用の認証フローが必要

### 今後の課題

- リフレッシュトークンの有効期限管理
- より賢いトークンキャッシュ戦略
- オフライン時の対応

## 参考リンク

- [Firebase Authentication REST API](https://firebase.google.com/docs/reference/rest/auth)
- [JWT Token Expiration](https://jwt.io/introduction)
- [React Native WebView Documentation](https://github.com/react-native-webview/react-native-webview)
- [Rails Action Controller HTTP Authentication](https://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token.html)