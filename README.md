# 労務費調査LP

行政書士法人ふらっと法務事務所の労務費調査代行サービスのランディングページです。

## 技術スタック

- **フレームワーク**: Next.js 15.4.1 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS (CDN版) + カスタムCSS
- **フォーム**: React Hook Form + Zod
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは http://localhost:3000 で起動します。

## ビルドとデプロイ

```bash
# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start
```

## プロジェクト構造

```
src/
├── app/
│   ├── layout.tsx       # ルートレイアウト
│   ├── page.tsx        # ホームページ
│   └── globals.css     # グローバルスタイル
├── components/
│   ├── layout/         # ヘッダー、フッター
│   ├── sections/       # 各セクションコンポーネント
│   └── ui/            # 共通UIコンポーネント
└── lib/
    └── utils.ts       # ユーティリティ関数

public/
├── styles.css         # カスタムスタイル定義
└── images/           # 画像ファイル
```

## デプロイ

VercelまたはNetlifyへのデプロイを推奨します。

### Vercel

1. Vercelアカウントでプロジェクトをインポート
2. 環境変数の設定（必要に応じて）
3. デプロイ

### Netlify

1. `npm run build` でビルド
2. `out` ディレクトリをNetlifyにアップロード

## 注意事項

- 現在Tailwind CSS CDN版を使用しているため、本番環境では正式なビルドプロセスへの移行を推奨
- フォーム送信機能は現在シミュレーションのみ（バックエンド実装が必要）

## ライセンス

© 2025 行政書士法人ふらっと法務事務所. All rights reserved.