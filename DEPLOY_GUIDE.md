# Netlifyデプロイガイド

## GitHubへのプッシュ

```bash
# Gitの初期化
git init

# リモートリポジトリの追加
git remote add origin https://github.com/yasuyuki-shiozawa/FLAT_LP.git

# すべてのファイルをステージング
git add .

# 初回コミット
git commit -m "初回コミット: 労務費調査LPの実装"

# mainブランチにプッシュ
git branch -M main
git push -u origin main
```

## Netlifyでのデプロイ手順

### 方法1: GitHub連携（推奠）

1. [Netlify](https://app.netlify.com/)にログイン
2. "Add new site" → "Import an existing project"をクリック
3. "Connect to GitHub"を選択
4. `yasuyuki-shiozawa/FLAT_LP`リポジトリを選択
5. ビルド設定を確認：
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. "Deploy site"をクリック

### 方法2: Netlify CLI

```bash
# Netlify CLIのインストール
npm install -g netlify-cli

# Netlifyにログイン
netlify login

# 手動デプロイ
netlify deploy --prod --dir=.next
```

## 環境変数の設定

Netlifyのサイト設定で以下の環境変数を設定してください：

1. Site settings → Environment variables
2. 以下を追加：
   - `NEXT_PUBLIC_SITE_URL`: デプロイ後のサイトURL（例: https://your-site.netlify.app）

## カスタムドメインの設定

1. Domain settings → Add custom domain
2. ドメインを入力（例: labor-survey.flatto-legal.jp）
3. DNSの設定に従ってCNAMEまたはAレコードを設定

## デプロイ後の確認事項

- [ ] すべてのページが正しく表示される
- [ ] フォームが動作する（現在はシミュレーション）
- [ ] レスポンシブデザインが機能する
- [ ] 画像やCSSが正しく読み込まれる

## トラブルシューティング

### ビルドエラーが発生する場合

1. Node.jsのバージョンを指定：
   - Site settings → Environment variables
   - `NODE_VERSION`: `18.19.1`を追加

2. パッケージマネージャーを指定：
   - `NPM_VERSION`: `10.2.0`を追加

### 404エラーが発生する場合

`netlify.toml`の設定を確認してください。