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
自動的に更新されます。

| 項目 | 内容 |
| --- | --- |
| `id` | URL（`/piece/:id`）に使う英数字。作品ごとに重複させない |
| `order` | 演奏順（1始まり）。配列の並びも演奏順に揃える |
| `title` / `composer` | 作品名・作曲者名 |
| `arranger` | 編曲者名。編曲作品のみ書く（省略可）。一覧では「〇〇 作曲 / △△ 編曲」と表示 |
| `performer` | 演奏者。複数人の場合は `\n` で区切ると詳細画面で1人1行になる |
| `description` | 曲目解説。空文字なら詳細画面で解説欄ごと出さない |
| `image` | 画像のURLまたはパス（`public/` に置いた画像なら `/images/xxx.jpg` など）。空文字なら画像枠ごと出さない |
