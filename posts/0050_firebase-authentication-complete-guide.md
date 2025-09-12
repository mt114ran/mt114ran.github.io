---
id: 50
title: "Firebase認証完全ガイド：初心者からミドルクラスエンジニアまで"
tags: ["Firebase", "Authentication", "JavaScript", "React", "Web Development", "Security", "OAuth"]
create: "2025-09-10 22:46"
update: "2025-09-10 22:46"
---

# Firebase認証完全ガイド：初心者からミドルクラスエンジニアまで

Webアプリケーション開発において、ユーザー認証は最も重要な機能の一つです。Firebase Authentication（Firebase認証）を使えば、複雑な認証システムを簡単に実装できますが、初心者にとって「どの認証方式を選べば良いのか」「どう実装すれば良いのか」は悩ましい問題です。

この記事では、Firebase認証の基本概念から実際のコード実装、実践的な使い方まで、初心者エンジニアにもミドルクラスエンジニアにも価値のある内容を体系的に解説します。

## この記事で学べること

- ✅ **Firebase認証の基本概念と仕組み**
- ✅ **主要な認証方式（メール、SNS、電話番号）の実装方法**
- ✅ **認証状態の管理とルーティング**
- ✅ **セキュリティベストプラクティス**
- ✅ **実際のプロジェクトでの活用法**

## Firebase認証とは

### 認証と認可の違い

まず、認証システムを理解する上で重要な概念を整理しましょう：

| 概念 | 英語 | 意味 | 例 |
|------|------|------|-----|
| **認証** | Authentication | 「あなたは誰ですか？」 | ログイン、パスワード確認 |
| **認可** | Authorization | 「あなたは何ができますか？」 | 管理者権限、リソースアクセス権 |

Firebase Authenticationは**認証**を担当し、ユーザーが本当にその人であるかを確認します。

### Firebase Authenticationの特徴

Firebase Authenticationは、Googleが提供する認証サービスで、以下のメリットがあります：

#### 🚀 開発効率
- **簡単な実装**：数行のコードで認証機能を実装
- **豊富な認証プロバイダー**：メール、Google、GitHub、Twitter、電話番号など
- **リアルタイム同期**：認証状態の変化を自動で検知

#### 🔒 セキュリティ
- **業界標準の暗号化**：トークンの安全な管理
- **不正アクセス対策**：レート制限、異常検知
- **GDPR準拠**：プライバシー保護対応

#### 📱 クロスプラットフォーム
- **Web、iOS、Android**：同一のユーザーベース
- **リアルタイムDatabase/Firestore**との連携

詳細は[Firebase Authentication公式ドキュメント](https://firebase.google.com/docs/auth)をご覧ください。

## 基本セットアップ

### 1. Firebaseプロジェクトの作成

1. **Firebase Console**でプロジェクトを作成
   - [Firebase Console](https://console.firebase.google.com/)にアクセス
   - 「プロジェクトを作成」をクリック
   - プロジェクト名を入力

2. **Webアプリを追加**
   - プロジェクト設定から「Webアプリを追加」
   - アプリのニックネームを入力
   - Firebase SDKの設定を取得

3. **Authentication機能を有効化**
   - Firebase Console > Authentication > Sign-in method
   - 使用したい認証プロバイダーを有効化

### 2. Firebase SDKの導入

```bash
# npm を使用する場合
npm install firebase

# yarn を使用する場合
yarn add firebase
```

### 3. Firebase初期化

```javascript
// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase設定（Firebase Consoleから取得）
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

// Authentication インスタンスの取得
export const auth = getAuth(app);
export default app;
```

## 主要な認証方式の実装

### 1. メール/パスワード認証

最も基本的な認証方式です。ユーザー名とパスワードでアカウントを作成し、認証を行います。

```javascript
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { auth } from './firebase-config.js';

// 新規登録
export const signUp = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // ユーザープロフィールの更新
    if (displayName) {
      await updateProfile(user, {
        displayName: displayName
      });
    }
    
    console.log('新規登録成功:', user);
    return { success: true, user };
  } catch (error) {
    console.error('新規登録エラー:', error);
    return { success: false, error: getErrorMessage(error) };
  }
};

// ログイン
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log('ログイン成功:', user);
    return { success: true, user };
  } catch (error) {
    console.error('ログインエラー:', error);
    return { success: false, error: getErrorMessage(error) };
  }
};

// ログアウト
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log('ログアウト成功');
    return { success: true };
  } catch (error) {
    console.error('ログアウトエラー:', error);
    return { success: false, error: getErrorMessage(error) };
  }
};

// パスワードリセット
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('パスワードリセットメール送信完了');
    return { success: true };
  } catch (error) {
    console.error('パスワードリセットエラー:', error);
    return { success: false, error: getErrorMessage(error) };
  }
};

// エラーメッセージの変換
const getErrorMessage = (error) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'このメールアドレスは既に使用されています';
    case 'auth/weak-password':
      return 'パスワードは6文字以上で設定してください';
    case 'auth/invalid-email':
      return 'メールアドレスの形式が正しくありません';
    case 'auth/user-not-found':
      return 'ユーザーが見つかりません';
    case 'auth/wrong-password':
      return 'パスワードが間違っています';
    default:
      return error.message;
  }
};
```

#### React での使用例

```jsx
import React, { useState } from 'react';
import { signUp, signIn, resetPassword } from './auth-service';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      let result;
      if (isLogin) {
        result = await signIn(formData.email, formData.password);
      } else {
        result = await signUp(formData.email, formData.password, formData.displayName);
      }

      if (result.success) {
        setMessage('成功しました！');
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      setMessage('予期せぬエラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!formData.email) {
      setMessage('メールアドレスを入力してください');
      return;
    }

    const result = await resetPassword(formData.email);
    setMessage(
      result.success 
        ? 'パスワードリセットメールを送信しました' 
        : result.error
    );
  };

  return (
    <div className="auth-form">
      <h2>{isLogin ? 'ログイン' : '新規登録'}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="メールアドレス"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="パスワード"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <input
              type="text"
              placeholder="表示名"
              value={formData.displayName}
              onChange={(e) => setFormData({...formData, displayName: e.target.value})}
            />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? '処理中...' : (isLogin ? 'ログイン' : '登録')}
        </button>
      </form>

      <div className="auth-options">
        <button 
          type="button" 
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? '新規登録はこちら' : 'ログインはこちら'}
        </button>

        {isLogin && (
          <button 
            type="button" 
            onClick={handlePasswordReset}
          >
            パスワードを忘れた方
          </button>
        )}
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AuthForm;
```

### 2. ソーシャルログイン

SNSアカウントを使った認証は、ユーザーの手間を大幅に削減できる人気の認証方式です。

#### Google認証

```javascript
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult 
} from 'firebase/auth';
import { auth } from './firebase-config.js';

// Googleプロバイダーの設定
const googleProvider = new GoogleAuthProvider();

// スコープの追加（オプション）
googleProvider.addScope('profile');
googleProvider.addScope('email');

// ポップアップでGoogleログイン
export const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Google認証の追加情報
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    
    console.log('Googleログイン成功:', {
      user,
      accessToken
    });
    
    return { success: true, user, accessToken };
  } catch (error) {
    console.error('Googleログインエラー:', error);
    return { success: false, error: getGoogleErrorMessage(error) };
  }
};

// リダイレクトでGoogleログイン（モバイル推奨）
export const signInWithGoogleRedirect = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
    return { success: true };
  } catch (error) {
    console.error('Googleリダイレクトエラー:', error);
    return { success: false, error: getGoogleErrorMessage(error) };
  }
};

// リダイレクト後の結果を取得
export const getGoogleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      
      return { success: true, user, accessToken };
    }
    return { success: true, user: null };
  } catch (error) {
    console.error('Googleリダイレクト結果エラー:', error);
    return { success: false, error: getGoogleErrorMessage(error) };
  }
};

const getGoogleErrorMessage = (error) => {
  switch (error.code) {
    case 'auth/account-exists-with-different-credential':
      return '別の認証方法で既に登録されているアカウントです';
    case 'auth/cancelled-popup-request':
      return 'ポップアップがキャンセルされました';
    case 'auth/popup-blocked':
      return 'ポップアップがブロックされています';
    case 'auth/popup-closed-by-user':
      return 'ユーザーがポップアップを閉じました';
    default:
      return error.message;
  }
};
```

#### GitHub認証

```javascript
import { 
  GithubAuthProvider, 
  signInWithPopup 
} from 'firebase/auth';
import { auth } from './firebase-config.js';

const githubProvider = new GithubAuthProvider();

// GitHubログイン
export const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    const user = result.user;
    
    // GitHub認証の追加情報
    const credential = GithubAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    
    console.log('GitHubログイン成功:', {
      user,
      accessToken
    });
    
    return { success: true, user, accessToken };
  } catch (error) {
    console.error('GitHubログインエラー:', error);
    return { success: false, error: error.message };
  }
};
```

#### React での使用例

```jsx
import React from 'react';
import { 
  signInWithGooglePopup, 
  signInWithGithub,
  getGoogleRedirectResult 
} from './social-auth-service';

const SocialAuth = () => {
  const [loading, setLoading] = useState(false);

  // コンポーネントマウント時にリダイレクト結果をチェック
  useEffect(() => {
    const checkRedirectResult = async () => {
      const result = await getGoogleRedirectResult();
      if (result.success && result.user) {
        console.log('リダイレクト認証成功:', result.user);
      }
    };
    
    checkRedirectResult();
  }, []);

  const handleGoogleLogin = async () => {
    setLoading(true);
    const result = await signInWithGooglePopup();
    setLoading(false);
    
    if (result.success) {
      console.log('Google認証成功');
    } else {
      alert(result.error);
    }
  };

  const handleGithubLogin = async () => {
    setLoading(true);
    const result = await signInWithGithub();
    setLoading(false);
    
    if (result.success) {
      console.log('GitHub認証成功');
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="social-auth">
      <h3>ソーシャルログイン</h3>
      
      <button 
        onClick={handleGoogleLogin} 
        disabled={loading}
        className="google-login-btn"
      >
        <img src="/google-icon.svg" alt="Google" />
        Googleでログイン
      </button>
      
      <button 
        onClick={handleGithubLogin} 
        disabled={loading}
        className="github-login-btn"
      >
        <img src="/github-icon.svg" alt="GitHub" />
        GitHubでログイン
      </button>
    </div>
  );
};

export default SocialAuth;
```

### 3. 電話番号認証

SMS認証による電話番号認証は、セキュリティが高く、グローバルで利用できる認証方式です。

```javascript
import { 
  signInWithPhoneNumber, 
  RecaptchaVerifier,
  linkWithCredential,
  PhoneAuthProvider 
} from 'firebase/auth';
import { auth } from './firebase-config.js';

// reCAPTCHA設定
export const setupRecaptcha = (elementId = 'recaptcha-container') => {
  if (window.recaptchaVerifier) {
    window.recaptchaVerifier.clear();
  }

  window.recaptchaVerifier = new RecaptchaVerifier(auth, elementId, {
    'size': 'normal',
    'callback': (response) => {
      console.log('reCAPTCHA solved');
    },
    'expired-callback': () => {
      console.log('reCAPTCHA expired');
    }
  });
};

// 電話番号でサインイン
export const signInWithPhone = async (phoneNumber) => {
  try {
    if (!window.recaptchaVerifier) {
      setupRecaptcha();
    }

    const confirmationResult = await signInWithPhoneNumber(
      auth, 
      phoneNumber, 
      window.recaptchaVerifier
    );
    
    console.log('SMS送信成功');
    return { success: true, confirmationResult };
  } catch (error) {
    console.error('電話番号認証エラー:', error);
    return { success: false, error: getPhoneErrorMessage(error) };
  }
};

// SMS認証コードを確認
export const confirmPhoneCode = async (confirmationResult, code) => {
  try {
    const result = await confirmationResult.confirm(code);
    const user = result.user;
    
    console.log('電話番号認証成功:', user);
    return { success: true, user };
  } catch (error) {
    console.error('認証コード確認エラー:', error);
    return { success: false, error: getPhoneErrorMessage(error) };
  }
};

// 既存アカウントに電話番号を追加
export const linkPhoneNumber = async (phoneNumber) => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error('ユーザーがサインインしていません');
    }

    if (!window.recaptchaVerifier) {
      setupRecaptcha();
    }

    const confirmationResult = await signInWithPhoneNumber(
      auth, 
      phoneNumber, 
      window.recaptchaVerifier
    );

    return { success: true, confirmationResult };
  } catch (error) {
    console.error('電話番号追加エラー:', error);
    return { success: false, error: getPhoneErrorMessage(error) };
  }
};

// 電話番号リンクを確認
export const confirmPhoneLink = async (confirmationResult, code) => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error('ユーザーがサインインしていません');
    }

    const phoneCredential = PhoneAuthProvider.credential(
      confirmationResult.verificationId,
      code
    );

    const result = await linkWithCredential(currentUser, phoneCredential);
    console.log('電話番号追加成功:', result.user);
    return { success: true, user: result.user };
  } catch (error) {
    console.error('電話番号リンクエラー:', error);
    return { success: false, error: getPhoneErrorMessage(error) };
  }
};

const getPhoneErrorMessage = (error) => {
  switch (error.code) {
    case 'auth/invalid-phone-number':
      return '電話番号の形式が正しくありません';
    case 'auth/missing-phone-number':
      return '電話番号が入力されていません';
    case 'auth/quota-exceeded':
      return 'SMS送信の制限に達しました';
    case 'auth/invalid-verification-code':
      return '認証コードが正しくありません';
    case 'auth/credential-already-in-use':
      return 'この電話番号は既に他のアカウントで使用されています';
    default:
      return error.message;
  }
};
```

電話番号認証については[Firebase電話番号認証完全ガイド](../0046_firebase-phone-authentication-guide)でより詳しく解説しています。

## 認証状態の管理

Firebase認証の重要な機能の一つが、認証状態の自動監視です。

### React での認証状態管理

```jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

// 認証コンテキストの作成
const AuthContext = createContext({});

// 認証プロバイダー
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 認証状態の監視
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('認証状態変更:', user);
      setUser(user);
      setLoading(false);
    });

    // クリーンアップ
    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// カスタムフック
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthはAuthProvider内で使用してください');
  }
  return context;
};

// 使用例: App.js
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// プロテクトされたルート
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
```

### Vue.js での認証状態管理

```javascript
// composables/useAuth.js
import { ref, onMounted, onUnmounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

export const useAuth = () => {
  const user = ref(null);
  const loading = ref(true);
  const isAuthenticated = computed(() => !!user.value);

  let unsubscribe;

  onMounted(() => {
    unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log('認証状態変更:', firebaseUser);
      user.value = firebaseUser;
      loading.value = false;
    });
  });

  onUnmounted(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  return {
    user: readonly(user),
    loading: readonly(loading),
    isAuthenticated
  };
};

// 使用例: App.vue
<template>
  <div id="app">
    <div v-if="loading">Loading...</div>
    <router-view v-else />
  </div>
</template>

<script setup>
import { useAuth } from './composables/useAuth';

const { loading } = useAuth();
</script>
```

## 応用的な使い方

### 1. 複数認証プロバイダーの連携

ユーザーが複数の認証方法を使えるようにする実装例：

```javascript
import { 
  linkWithCredential, 
  unlink,
  reauthenticateWithCredential 
} from 'firebase/auth';
import { auth } from './firebase-config';

// アカウントに認証プロバイダーを追加
export const linkProvider = async (credential) => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error('ユーザーがサインインしていません');
    }

    const result = await linkWithCredential(currentUser, credential);
    console.log('プロバイダー追加成功:', result.user);
    return { success: true, user: result.user };
  } catch (error) {
    console.error('プロバイダー追加エラー:', error);
    
    if (error.code === 'auth/requires-recent-login') {
      return { success: false, error: '再認証が必要です', needsReauth: true };
    }
    
    return { success: false, error: error.message };
  }
};

// 認証プロバイダーを削除
export const unlinkProvider = async (providerId) => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error('ユーザーがサインインしていません');
    }

    const result = await unlink(currentUser, providerId);
    console.log('プロバイダー削除成功:', result);
    return { success: true, user: result };
  } catch (error) {
    console.error('プロバイダー削除エラー:', error);
    return { success: false, error: error.message };
  }
};

// 連携済みプロバイダーの取得
export const getLinkedProviders = () => {
  const currentUser = auth.currentUser;
  if (!currentUser) return [];

  return currentUser.providerData.map(provider => ({
    providerId: provider.providerId,
    uid: provider.uid,
    displayName: provider.displayName,
    email: provider.email,
    phoneNumber: provider.phoneNumber
  }));
};

// 使用例: プロバイダー管理コンポーネント
const ProviderManager = () => {
  const [linkedProviders, setLinkedProviders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setLinkedProviders(getLinkedProviders());
    }
  }, [user]);

  const handleLinkGoogle = async () => {
    const result = await signInWithGooglePopup();
    if (result.success && result.credential) {
      const linkResult = await linkProvider(result.credential);
      if (linkResult.success) {
        setLinkedProviders(getLinkedProviders());
        alert('Google認証が追加されました');
      }
    }
  };

  const handleUnlinkProvider = async (providerId) => {
    const result = await unlinkProvider(providerId);
    if (result.success) {
      setLinkedProviders(getLinkedProviders());
      alert('認証プロバイダーが削除されました');
    }
  };

  return (
    <div className="provider-manager">
      <h3>認証方法の管理</h3>
      
      <div className="linked-providers">
        <h4>連携済み認証方法</h4>
        {linkedProviders.map(provider => (
          <div key={provider.providerId} className="provider-item">
            <span>{provider.providerId}</span>
            <span>{provider.email || provider.phoneNumber}</span>
            {linkedProviders.length > 1 && (
              <button onClick={() => handleUnlinkProvider(provider.providerId)}>
                削除
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="available-providers">
        <h4>追加可能な認証方法</h4>
        {!linkedProviders.find(p => p.providerId === 'google.com') && (
          <button onClick={handleLinkGoogle}>
            Google認証を追加
          </button>
        )}
      </div>
    </div>
  );
};
```

### 2. カスタム認証

独自の認証システムがある場合に、Firebase認証と連携する方法：

```javascript
// カスタムトークンを使った認証
import { signInWithCustomToken } from 'firebase/auth';
import { auth } from './firebase-config';

export const signInWithCustom = async (customToken) => {
  try {
    const userCredential = await signInWithCustomToken(auth, customToken);
    const user = userCredential.user;
    
    console.log('カスタム認証成功:', user);
    return { success: true, user };
  } catch (error) {
    console.error('カスタム認証エラー:', error);
    return { success: false, error: error.message };
  }
};

// サーバーサイドでカスタムトークンを生成する例（Node.js）
// この部分は通常、バックエンドで実装します
/*
const admin = require('firebase-admin');

// カスタムトークンの生成
const createCustomToken = async (uid, additionalClaims = {}) => {
  try {
    const customToken = await admin.auth().createCustomToken(uid, additionalClaims);
    return { success: true, token: customToken };
  } catch (error) {
    console.error('カスタムトークン生成エラー:', error);
    return { success: false, error: error.message };
  }
};
*/
```

## セキュリティベストプラクティス

### 1. Firebase Security Rulesとの連携

```javascript
// Firestore Security Rules の例
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // ユーザーは自分のデータのみアクセス可能
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // 管理者のみアクセス可能
    match /admin/{document} {
      allow read, write: if request.auth != null && 
        request.auth.token.admin == true;
    }
  }
}
*/

// カスタムクレームの設定（サーバーサイド）
/*
const admin = require('firebase-admin');

const setAdminRole = async (uid) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log(`ユーザー ${uid} に管理者権限を付与`);
  } catch (error) {
    console.error('管理者権限付与エラー:', error);
  }
};
*/

// クライアントサイドでカスタムクレームを取得
export const getUserClaims = async () => {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    const idTokenResult = await user.getIdTokenResult();
    return idTokenResult.claims;
  } catch (error) {
    console.error('カスタムクレーム取得エラー:', error);
    return null;
  }
};
```

### 2. セキュリティ強化

```javascript
// セキュリティ強化のための実装例
import { 
  reauthenticateWithCredential, 
  updatePassword,
  deleteUser 
} from 'firebase/auth';

// 再認証
export const reauthenticateUser = async (credential) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('ユーザーが見つかりません');

    await reauthenticateWithCredential(user, credential);
    return { success: true };
  } catch (error) {
    console.error('再認証エラー:', error);
    return { success: false, error: error.message };
  }
};

// パスワード変更（再認証が必要）
export const changePassword = async (currentPassword, newPassword) => {
  try {
    const user = auth.currentUser;
    if (!user || !user.email) {
      throw new Error('メールアドレスでサインインしたユーザーのみ対応');
    }

    // 現在のパスワードで再認証
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    await reauthenticateWithCredential(user, credential);

    // パスワード更新
    await updatePassword(user, newPassword);
    
    console.log('パスワード変更成功');
    return { success: true };
  } catch (error) {
    console.error('パスワード変更エラー:', error);
    return { success: false, error: error.message };
  }
};

// セキュリティを考慮したユーザー削除
export const deleteUserAccount = async (password) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('ユーザーが見つかりません');

    // メール認証の場合は再認証
    if (user.email && password) {
      const credential = EmailAuthProvider.credential(user.email, password);
      await reauthenticateWithCredential(user, credential);
    }

    await deleteUser(user);
    console.log('ユーザー削除成功');
    return { success: true };
  } catch (error) {
    console.error('ユーザー削除エラー:', error);
    return { success: false, error: error.message };
  }
};
```

## よくある問題と解決法

### 1. 認証エラーの包括的な処理

```javascript
// 統一的なエラーハンドリング
export const handleAuthError = (error) => {
  console.error('Firebase認証エラー:', error);

  const errorMessages = {
    // メール認証関連
    'auth/email-already-in-use': 'このメールアドレスは既に使用されています',
    'auth/invalid-email': 'メールアドレスの形式が正しくありません',
    'auth/weak-password': 'パスワードは6文字以上で設定してください',
    'auth/user-not-found': 'このメールアドレスは登録されていません',
    'auth/wrong-password': 'パスワードが間違っています',
    
    // ソーシャルログイン関連
    'auth/account-exists-with-different-credential': '別の認証方法で既に登録されています',
    'auth/popup-blocked': 'ポップアップがブロックされています',
    'auth/popup-closed-by-user': 'ログインがキャンセルされました',
    'auth/cancelled-popup-request': 'ポップアップリクエストがキャンセルされました',
    
    // 電話番号認証関連
    'auth/invalid-phone-number': '電話番号の形式が正しくありません',
    'auth/invalid-verification-code': '認証コードが正しくありません',
    'auth/code-expired': '認証コードの有効期限が切れています',
    
    // 一般的なエラー
    'auth/network-request-failed': 'ネットワークエラーが発生しました',
    'auth/too-many-requests': 'リクエストが多すぎます。しばらく待ってから再試行してください',
    'auth/user-disabled': 'このアカウントは無効化されています',
    'auth/requires-recent-login': '再度ログインしてから操作してください'
  };

  return errorMessages[error.code] || `認証エラー: ${error.message}`;
};
```

### 2. パフォーマンス最適化

```javascript
// 認証状態の効率的な管理
import { useEffect, useState, useCallback } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

export const useAuthOptimized = () => {
  const [authState, setAuthState] = useState({
    user: null,
    loading: true,
    initialized: false
  });

  // メモ化されたコールバック
  const updateAuthState = useCallback((user) => {
    setAuthState({
      user,
      loading: false,
      initialized: true
    });
  }, []);

  useEffect(() => {
    // 認証状態の監視を一度だけ設定
    const unsubscribe = onAuthStateChanged(auth, updateAuthState);
    
    return unsubscribe;
  }, [updateAuthState]);

  return authState;
};

// トークンの効率的な管理
export const useAuthToken = () => {
  const [token, setToken] = useState(null);
  const [tokenLoading, setTokenLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const idToken = await user.getIdToken();
          setToken(idToken);
        } catch (error) {
          console.error('トークン取得エラー:', error);
          setToken(null);
        }
      } else {
        setToken(null);
      }
      setTokenLoading(false);
    });

    return unsubscribe;
  }, []);

  return { token, tokenLoading };
};
```

### 3. デバッグとテスト

```javascript
// 開発環境でのデバッグ支援
export const debugAuth = () => {
  if (process.env.NODE_ENV !== 'development') return;

  const user = auth.currentUser;
  
  console.group('Firebase認証デバッグ情報');
  console.log('現在のユーザー:', user);
  
  if (user) {
    console.log('UID:', user.uid);
    console.log('メール:', user.email);
    console.log('表示名:', user.displayName);
    console.log('電話番号:', user.phoneNumber);
    console.log('メール確認済み:', user.emailVerified);
    console.log('認証プロバイダー:', user.providerData);
    console.log('作成日時:', user.metadata.creationTime);
    console.log('最終ログイン:', user.metadata.lastSignInTime);
  } else {
    console.log('ユーザーはサインインしていません');
  }
  
  console.groupEnd();
};

// テスト用のモック関数
export const createMockUser = (overrides = {}) => {
  return {
    uid: 'mock-uid',
    email: 'test@example.com',
    displayName: 'Test User',
    phoneNumber: null,
    emailVerified: true,
    providerData: [],
    metadata: {
      creationTime: new Date().toISOString(),
      lastSignInTime: new Date().toISOString()
    },
    ...overrides
  };
};
```

## 実践的な使用例：完全な認証システム

実際のプロジェクトで使える、包括的な認証システムの実装例：

```jsx
// hooks/useFirebaseAuth.js
import { useState, useEffect, useCallback } from 'react';
import { 
  onAuthStateChanged, 
  signOut 
} from 'firebase/auth';
import { auth } from '../firebase-config';
import { 
  signIn, 
  signUp, 
  signInWithGooglePopup,
  signInWithGithub,
  resetPassword 
} from '../services/auth-service';

export const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 認証状態の監視
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // エラーをクリア
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // 共通のエラーハンドリング
  const handleAuthAction = useCallback(async (authFunction, ...args) => {
    setLoading(true);
    setError(null);

    try {
      const result = await authFunction(...args);
      if (!result.success) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError('予期せぬエラーが発生しました');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  // 認証メソッド
  const login = useCallback((email, password) => 
    handleAuthAction(signIn, email, password), [handleAuthAction]);

  const register = useCallback((email, password, displayName) => 
    handleAuthAction(signUp, email, password, displayName), [handleAuthAction]);

  const googleLogin = useCallback(() => 
    handleAuthAction(signInWithGooglePopup), [handleAuthAction]);

  const githubLogin = useCallback(() => 
    handleAuthAction(signInWithGithub), [handleAuthAction]);

  const forgotPassword = useCallback((email) => 
    handleAuthAction(resetPassword, email), [handleAuthAction]);

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setError(null);
    } catch (err) {
      setError('ログアウトに失敗しました');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    googleLogin,
    githubLogin,
    forgotPassword,
    logout,
    clearError
  };
};

// components/AuthProvider.jsx
import React, { createContext, useContext } from 'react';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useFirebaseAuth();
  
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthはAuthProvider内で使用してください');
  }
  return context;
};

// components/CompleteAuthForm.jsx
import React, { useState } from 'react';
import { useAuth } from './AuthProvider';

const CompleteAuthForm = () => {
  const [mode, setMode] = useState('login'); // 'login', 'register', 'forgot'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: ''
  });

  const { 
    login, 
    register, 
    googleLogin, 
    githubLogin, 
    forgotPassword, 
    loading, 
    error, 
    clearError 
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();

    switch (mode) {
      case 'login':
        await login(formData.email, formData.password);
        break;
      case 'register':
        await register(formData.email, formData.password, formData.displayName);
        break;
      case 'forgot':
        const result = await forgotPassword(formData.email);
        if (result.success) {
          alert('パスワードリセットメールを送信しました');
          setMode('login');
        }
        break;
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderForm = () => {
    switch (mode) {
      case 'login':
        return (
          <div>
            <h2>ログイン</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="メールアドレス"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="パスワード"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? 'ログイン中...' : 'ログイン'}
              </button>
            </form>
            <button type="button" onClick={() => setMode('register')}>
              新規登録
            </button>
            <button type="button" onClick={() => setMode('forgot')}>
              パスワードを忘れた
            </button>
          </div>
        );

      case 'register':
        return (
          <div>
            <h2>新規登録</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="表示名"
                value={formData.displayName}
                onChange={(e) => handleInputChange('displayName', e.target.value)}
              />
              <input
                type="email"
                placeholder="メールアドレス"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="パスワード（6文字以上）"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? '登録中...' : '登録'}
              </button>
            </form>
            <button type="button" onClick={() => setMode('login')}>
              ログインに戻る
            </button>
          </div>
        );

      case 'forgot':
        return (
          <div>
            <h2>パスワードリセット</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="メールアドレス"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? '送信中...' : 'リセットメール送信'}
              </button>
            </form>
            <button type="button" onClick={() => setMode('login')}>
              ログインに戻る
            </button>
          </div>
        );
    }
  };

  return (
    <div className="auth-form">
      {renderForm()}
      
      <div className="social-auth">
        <h3>またはソーシャルログイン</h3>
        <button onClick={googleLogin} disabled={loading}>
          Googleでログイン
        </button>
        <button onClick={githubLogin} disabled={loading}>
          GitHubでログイン
        </button>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={clearError}>閉じる</button>
        </div>
      )}
    </div>
  );
};

export default CompleteAuthForm;
```

## まとめ

### Firebase認証の主要なポイント

1. **豊富な認証方式**: メール、SNS、電話番号など多様な選択肢
2. **簡単な実装**: 数行のコードで高機能な認証システムを構築
3. **リアルタイム同期**: 認証状態の自動監視と更新
4. **高いセキュリティ**: 業界標準の暗号化とセキュリティ機能
5. **クロスプラットフォーム**: Web、iOS、Androidで統一

### ベストプラクティス

- ✅ **適切なエラーハンドリング**でユーザー体験を向上
- ✅ **認証状態の効率的な管理**でパフォーマンスを最適化
- ✅ **Security Rules**でデータアクセスを制御
- ✅ **再認証**でセンシティブな操作を保護
- ✅ **テスト環境**で開発効率を向上

### 次のステップ

1. **実際のプロジェクトに導入**してみる
2. **Firebase Security Rules**を学習する
3. **Firestore/Realtime Database**との連携を理解する
4. **Firebase Cloud Functions**でバックエンド処理を実装
5. **Analytics**でユーザー行動を分析

Firebase認証をマスターして、安全で使いやすいWebアプリケーションを構築しましょう！

## 参考リンク

### Firebase公式ドキュメント
- [Firebase Authentication 公式ドキュメント](https://firebase.google.com/docs/auth)
- [Firebase JavaScript SDK 認証ガイド](https://firebase.google.com/docs/auth/web/start)
- [Firebase プロジェクト設定ガイド](https://firebase.google.com/docs/web/setup)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [ユーザー アカウントのリンク](https://firebase.google.com/docs/auth/web/account-linking)

### 認証方式別の詳細ガイド
- [Google認証の設定](https://firebase.google.com/docs/auth/web/google-signin)
- [GitHub認証の設定](https://firebase.google.com/docs/auth/web/github-auth)
- [電話番号認証の実装](https://firebase.google.com/docs/auth/web/phone-auth)

### 関連技術
- [React公式ドキュメント](https://react.dev/)
- [Vue.js公式ドキュメント](https://vuejs.org/)
- [OAuth 2.0 解説](https://oauth.net/2/)
- [JSON Web Tokens (JWT)](https://jwt.io/)