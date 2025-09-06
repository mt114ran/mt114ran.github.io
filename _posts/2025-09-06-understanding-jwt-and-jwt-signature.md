---
title: "JWT（JSON Web Token）とJWT Signatureを分かりやすく解説"
date: 2025-09-06 10:13
categories: [Web開発, セキュリティ, 認証]
tags: [JWT, 認証, Firebase, セキュリティ, トークン]
description: "JWTの基本概念から署名の仕組み、Firebase tokenでの実例まで、初心者にも分かりやすく詳しく解説します。"
---

## はじめに

Web開発において「JWT」という言葉をよく耳にしますが、その仕組みを正確に理解していますか？特に「Signature has expired」といったエラーに遭遇した時、なぜこのエラーが発生するのか理解できていると、適切な対処ができるようになります。

本記事では、JWTの基本概念から、その中核を成すSignature（署名）の仕組みまで、初心者にも分かりやすく解説します。

## JWTとは何か

**JWT（JSON Web Token）**は、当事者間で安全に情報を伝送するためのオープンスタンダードです。主にWebアプリケーションの認証・認可に使用されます。

### JWTが生まれた背景

従来のセッション認証では、サーバー側でセッション情報を保持する必要がありました。しかし、マイクロサービスアーキテクチャやSPA（Single Page Application）の普及により、**ステートレス**（状態を持たない）な認証方式が求められるようになりました。

```
従来のセッション認証の課題:
- サーバー側でセッション情報を保持する必要
- 複数のサーバー間でのセッション共有が困難
- スケーラビリティの問題
```

JWTは、これらの課題を解決する認証方式として登場しました。

## JWTの構造

JWTは3つの部分がドット（.）で区切られた文字列です：

```
Header.Payload.Signature
```

### 実際のJWTの例

```
eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2NzAyODA2MDc2In0.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcG9rZWNhLWFwcCIsImF1ZCI6InBva2VjYS1hcHAiLCJhdXRoX3RpbWUiOjE3MjU1ODk5ODQsInVzZXJfaWQiOiJhYmMxMjMiLCJzdWIiOiJhYmMxMjMiLCJpYXQiOjE3MjU1ODk5ODQsImV4cCI6MTcyNTU5MzU4NCwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidXNlckBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K1fVX2pQk3...（Signature部分は省略）
```

一見複雑に見えますが、各部分を分解してみましょう。

**重要**: HeaderとPayloadは、JSON形式のデータを**Base64URLエンコード**という方法で安全な文字列に変換してから結合されています。

### 1. Header（ヘッダー）

```json
{
  "alg": "RS256",
  "kid": "1670280607656"
}
```

**Headerの役割:**
- `alg`: 署名に使用するアルゴリズム
- `kid`: 署名に使用する鍵のID（複数の公開鍵を管理している場合に、どの鍵で検証すればよいかを特定するための識別子）

### 2. Payload（ペイロード）

```json
{
  "iss": "https://securetoken.google.com/pokeca-app",
  "aud": "pokeca-app",
  "auth_time": 1725589984,
  "user_id": "abc123",
  "sub": "abc123",
  "iat": 1725589984,
  "exp": 1725593584,
  "email": "user@example.com",
  "email_verified": true,
  "firebase": {
    "identities": {
      "email": ["user@example.com"]
    },
    "sign_in_provider": "password"
  }
}
```

**重要なフィールド:**
- `iss`: 発行者（Issuer）
- `aud`: 対象者（Audience）
- `exp`: 有効期限（Expiration）← **これが今回の記事の重要ポイント**
- `iat`: 発行時刻（Issued At）
- `user_id`: ユーザーID
- `sub`: 標準クレーム「Subject」（そのトークンが誰に関するものかを示す。Firebaseでは慣例的に`user_id`と同じ値）

### 3. Signature（署名）

```
K1fVX2pQk3...（実際の署名データ）
```

**Signatureの生成方法（例: RS256の場合）:**
```
RSASHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  privateKey
)
```

署名は、エンコードされたHeaderとPayload、そして**秘密鍵（Private Key）**を使って生成されます。この署名は、対になる**公開鍵（Public Key）**でのみ検証できます。これにより、秘密鍵を持つ発行者だけが有効なJWTを生成できることが保証されます。

## JWT Signatureの詳細解説

### Signatureとは

**Signature（署名）**は、JWTの真正性と完全性を保証するための暗号学的な仕組みです。

### Signatureの2つの重要な役割

#### 1. 改ざん検知（完全性の保証）
```
元のトークン: Header.Payload.ValidSignature
改ざん後:     Header.ModifiedPayload.ValidSignature
                    ↑                    ↑
              内容が変更された      署名は元のまま
```

署名を検証することで、トークンが改ざんされていないことを確認できます。

#### 2. 発行者の認証
JWTは特定の秘密鍵（または秘密の文字列）で署名されます。その署名を対応する公開鍵（または同じ文字列）で検証することで、トークンが信頼できる発行者によって作成されたことを確認できます。

### 署名アルゴリズム: HS256とRS256の違い

JWTの署名でよく使われるアルゴリズムにHS256とRS256があります。

#### HS256 (HMAC using SHA-256)
- **方式**: 対称鍵暗号（共通鍵暗号）
- **仕組み**: 署名の生成と検証に、同じ一つの「秘密鍵（secret）」を使用
- **ユースケース**: サーバー内でのみJWTを完結させる場合など、署名と検証を行う主体が同じ場合に適している

#### RS256 (RSA Signature with SHA-256)
- **方式**: 非対称鍵暗号（公開鍵暗号）
- **仕組み**: 署名の生成には「秘密鍵」、検証には「公開鍵」のペアを使用
- **ユースケース**: Firebase認証のように、第三者が発行したJWTを自分のサーバーで安全に検証する場合に適している（本記事の例はこちら）

### JWTの検証プロセス

JWTライブラリ（例: Rubyの`jwt` gem）は、トークンを検証する際に以下のステップを内部的に実行します。

1. **署名の検証**:
   - HeaderとPayloadから署名を再計算
   - 再計算した署名と、トークンに含まれる署名が一致することを確認
   - これにより、改ざんがないことと、正しい発行者であることが保証される

2. **Payloadクレームの検証**:
   - `exp`（有効期限）: 現在時刻が有効期限を過ぎていないか確認（**`JWT::ExpiredSignature`エラーはここで発生**）
   - `nbf`（Not Before）: 現在時刻が、トークンが有効になる時刻を過ぎているか確認
   - `iss`（発行者）、`aud`（対象者）: 期待される値と一致するか確認

### Signatureの検証プロセス（詳細）

```ruby
# Ruby（JWT gem）での検証例
def verify_jwt(token)
  begin
    # JWT.decodeは以下を自動で行う:
    # 1. Header、Payload、Signatureを分離
    # 2. HeaderとPayloadから署名を再計算
    # 3. 再計算した署名と付与された署名を比較
    # 4. Payloadのexpフィールドと現在時刻を比較
    decoded_token = JWT.decode(token, public_key, true, { algorithm: 'RS256' })
    puts "トークンは有効です"
  rescue JWT::ExpiredSignature => e
    puts "トークンが期限切れです: #{e.message}"
  rescue JWT::DecodeError => e  
    puts "トークンが無効です: #{e.message}"
  end
end
```

## Firebase tokenでの実例

### Firebase tokenの特徴

Firebase tokenは**1時間**で自動的に期限切れになります。これは、セキュリティを向上させるための仕組みです。

```json
{
  "iat": 1725589984,  // 発行時刻: 2025-09-06 09:13:04
  "exp": 1725593584   // 有効期限: 2025-09-06 10:13:04（1時間後）
}
```

### IDトークンとリフレッシュトークンの役割分担

Firebaseでは、認証時に2種類のトークンが発行されます：

- **IDトークン**（JWT形式、本記事で扱っているもの）
  - 有効期限が短い（1時間）
  - ユーザーの認証情報を含む
  - APIアクセス時の認証に使用

- **リフレッシュトークン**
  - 有効期限が長い（通常30日〜1年）
  - IDトークンを再発行するためのトークン
  - サーバーに安全に保存

**フロー**: IDトークンの期限が切れたら、リフレッシュトークンを使って新しいIDトークンを取得する仕組みです。これにより、ユーザーは頻繁に再ログインする必要がありません。

### 期限切れエラーが発生する流れ

```
1. ユーザーがアプリにログイン
   ↓
2. Firebase tokenを取得（有効期限: 1時間）
   ↓
3. アプリを1時間以上使用続ける
   ↓
4. WebViewで画面を表示しようとする
   ↓
5. サーバー側でtoken検証
   ↓
6. JWT::ExpiredSignature エラーが発生！
```

### エラーハンドリングの重要性

```ruby
# 悪い例: すべてのエラーを一律に処理
begin
  JWT.decode(token, public_key, true)
rescue StandardError => e
  raise InternalServerError  # 500エラーが発生
end

# 良い例: エラーを適切に分類
begin
  JWT.decode(token, public_key, true)
rescue JWT::ExpiredSignature => e
  # 期限切れは正常な挙動なので、適切にハンドリング
  handle_expired_token
rescue JWT::DecodeError => e
  # その他の無効tokenはエラーログ出力
  logger.error("無効なtoken: #{e.message}")
  handle_invalid_token
end
```

## 実開発でよくある問題と対策

### 問題1: 期限切れtokenで500エラー

**原因:**
期限切れを例外的な状況として扱い、適切なエラーハンドリングをしていない。

**対策:**
```ruby
# フォールバック戦略の実装
def authenticate_user
  # 1st priority: Firebase token認証
  if firebase_token.present?
    begin
      user = verify_firebase_token(firebase_token)
      return user if user
    rescue JWT::ExpiredSignature
      # 期限切れの場合は既存セッションにフォールバック
      logger.info("Firebase tokenが期限切れのため、セッション認証にフォールバック")
    rescue JWT::DecodeError => e
      # 無効tokenの場合はログ出力
      logger.warn("無効なFirebase token: #{e.message}")
    end
  end
  
  # 2nd priority: セッション認証
  authenticate_by_session
end
```

### 問題2: token更新タイミングの制御

**課題:**
tokenを更新するタイミングを適切に制御しないと、パフォーマンスの問題やエラーが発生する。

**対策:**
```ruby
def token_needs_refresh?
  return true if current_user.firebase_id_token.blank?
  
  begin
    decoded = JWT.decode(current_user.firebase_id_token, nil, false)
    exp_time = Time.zone.at(decoded[0]['exp'])
    
    # 5分前にリフレッシュ（バッファ時間を設ける）
    exp_time <= 5.minutes.from_now
  rescue JWT::DecodeError
    true  # デコードできない場合はリフレッシュが必要
  end
end
```

### 問題3: デバッグの困難さ

**JWTのデバッグツール:**

1. **[jwt.io](https://jwt.io/)**
   - JWTの内容を視覚的に確認できるWebサイト
   - Header、Payload、Signatureを分離して表示

2. **コマンドライン での確認**
   ```bash
   # Base64デコードでPayloadを確認
   # 注意: macOSでは base64 -D を使用する必要がある場合があります
   echo "eyJpc3MiOiJodHRwczov..." | base64 -d | jq .
   ```

3. **Railsコンソールでの確認**
   ```ruby
   # 期限切れかどうかを確認
   token = "your_jwt_token_here"
   decoded = JWT.decode(token, nil, false)  # 署名検証なし
   exp_time = Time.zone.at(decoded[0]['exp'])
   puts "有効期限: #{exp_time}"
   puts "期限切れ: #{exp_time < Time.current}"
   ```

## まとめ

### JWTの重要ポイント

| 要素 | 説明 | 重要性 |
|------|------|--------|
| **Header** | アルゴリズム情報 | 署名方式を定義 |
| **Payload** | 実際のデータ | ユーザー情報や有効期限を含む |
| **Signature** | 真正性の保証 | 改ざん検知と発行者確認 |

### Signature expired への対処法

1. **期限切れを正常な挙動として扱う**
2. **適切なエラーハンドリングを実装**
3. **フォールバック戦略を用意**
4. **token更新タイミングを最適化**

### セキュリティのベストプラクティス

- **短い有効期限**: 1時間程度が推奨
- **適切なアルゴリズム**: RS256やHS256
- **秘密鍵の管理**: 環境変数での管理
- **HTTPSの使用**: token送信時は必須
- **アルゴリズム明示**: 検証時にアルゴリズムを明示的に指定（`alg: none`攻撃対策）
- **JWTの保存場所**: XSS対策でHttpOnly Cookie推奨、CSRF対策も併用

JWTとSignatureの仕組みを理解することで、認証エラーの適切な対処ができるようになり、より堅牢なWebアプリケーションを構築できます。

## 参考リンク

- [RFC 7519 - JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)
- [JWT.io - JWT Debugger](https://jwt.io/)
- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Ruby JWT gem](https://github.com/jwt/ruby-jwt)