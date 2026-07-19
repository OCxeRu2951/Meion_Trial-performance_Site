# 試演会 特設サイト

作曲コース・MSDコース 試演会の特設Webサイト（React + Vite + Tailwind CSS）。

## セットアップ

```bash
npm install
npm run dev
```

## ビルド（Cloudflare Pages向け）

```bash
npm run build
```

`dist/` が出力されます。Cloudflare Pages の設定は以下の通りです。

- ビルドコマンド: `npm run build`
- ビルド出力ディレクトリ: `dist`

SPAのルーティング（`/program` や `/piece/:id` への直接アクセス・リロード）に対応するため、
`public/_redirects` を同梱しています（ビルド時に `dist/_redirects` へコピーされます）。

## ディレクトリ構成

```
src/
  components/
    Header.jsx        バーガーメニュー付きヘッダー＋サイドバー
    StaffDivider.jsx   五線譜モチーフのディバイダー（シグネチャー要素）
  pages/
    Home.jsx           ホーム画面
    Program.jsx         プログラム画面
    PieceDetail.jsx      作品紹介画面（詳細）
  data/
    programData.js      演奏順・曲目データ（ここを編集すれば画面に反映されます）
```

## データの編集

`src/data/programData.js` の配列を編集するだけで、プログラム画面・詳細画面が
自動的に更新されます。`image` は仮のプレースホルダー画像（picsum.photos）を
使用しているため、本番用の画像URLやローカルパスに差し替えてください。
