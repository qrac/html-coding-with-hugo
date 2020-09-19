# HTML Coding with Hugo

![Netlify Status](https://api.netlify.com/api/v1/badges/41b3544d-3776-422b-9227-e8af3d402cb5/deploy-status)

Demo: https://html-coding-with-hugo.netlify.app/

## About

HTML・SCSS・JavaScript のコーディングを爆速化・省エネ化するフロントエンド環境。

## Feature

- ビルド・ライブリロードが爆速で省エネ
- 開発環境は JavaScript フレームワーク風の構成
- 納品コードは gulp コーディング風に出力
- ページリストの自動生成
- ページリストに進捗状況を表示
- ページリストに担当者名を表示
- 下書き機能（ページ毎に本番ビルドから除外可能）
- HTML でテンプレートを書ける
- CSS / SCSS / PostCSS (Autoprefixer etc.)
- JavaScript / ESNext / Babel
- node_modules からの ライブラリ読み込み
- ソースコードの Minify

## How to use

### 1. Install Hugo

```bash
$ brew install hugo
```

### 2. Clone project

```bash
$ mkdir myproject
$ cd ./myproject
$ git clone --depth 1 https://github.com/qrac/html-coding-with-hugo.git && cd html-coding-with-hugo && rm -rf ./.git ./README.md && mv * .[^\.]* ../ && cd ../ && rm -rf ./html-coding-with-hugo
```

### 3. Install npm

```bash
$ npm install
```

### 4. Start live server

```bash
$ npm run dev
```

### 5. Create pages

`src/pages`

#### Frontmatter

```yaml
title: "ページタイトル"
layout: "single"
type: "page"
draft: false
progress: 0
assignee: "担当者名"
```

| キー       | 値の型    | 値の例                      | 意味                           |
| ---------- | --------- | --------------------------- | ------------------------------ |
| `title`    | `string`  | `"ページタイトル"`          | ページ一覧にも自動出力         |
| `layout`   | `string`  | `"single"` etc.             | ページをラップするテンプレート |
| `type`     | `string`  | `"pages"` or `"components"` | ページ一覧での分類に使用       |
| `draft`    | `boolean` | `false` or `true`           | `true` にするとビルドから除外  |
| `progress` | `number`  | 数字で `0` 〜 `4`           | ページ一覧で進捗状況を表示     |
| `assignee` | `string`  | `"担当者名"`                | ページ一覧で担当者名を表示     |

### 6. Create components

#### Default

`src/components/_default`

#### Shortcodes (Only pages can be used)

`src/components/shortcodes`

#### Partials (Only components can be used)

`src/components/partials`

### 7. Stop live server

```bash
Press Ctrl+C
```

### 8. Build

```bash
$ npm run build
```

## Hugo Docs

- [Hugo](https://gohugo.io/)
  - [Quick Start](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo)
  - [Content Organization](https://gohugo.io/content-management/organization/)
  - [Front Matter](https://gohugo.io/content-management/front-matter/)
  - [Single Page Templates](https://gohugo.io/templates/single-page-templates/)
  - [Shortcodes](https://gohugo.io/content-management/shortcodes/)
  - [Create Your Own Shortcodes](https://gohugo.io/templates/shortcode-templates/)
  - [Partial Templates](https://gohugo.io/templates/partials/)
  - [Image Processing](https://gohugo.io/content-management/image-processing/)
  - [hugo server](https://gohugo.io/commands/hugo_server/)

※このリポジトリは、コンフィグでディレクトリ構成を JavaScript フレームワーク（Next・Nuxt・Gatsby）風にカスタマイズしています。Hugo ドキュメントを読む場合にはディレクトリ名が異なるので注意してください。

## Unresolved (Hugo v0.75.1)

- `pages` は Hugo で言う `content` であり、`partials` を呼び出したり関数を使ったりできない
- `components/_default` を `components/layouts` にリネームしたいができない
- `partials` と `shortcodes` の使い方は似ているが Hugo の仕様上 1 つにまとめられない
- `partials` や `shortcodes` に多階層のオブジェクトを props として渡せるかは未検証
- `{{ }}` 関数の改行はサポートされていないので、Prettier がエラーを招かないか注意する
- `{{ }}` だけを改行しない Prettier 設定は難しく、Ignore を要所に書き足す方が現実的
- ビルド HTML は Minify のみ可能で、Pretty なコードを納品するためには別途処理が必要
- SCSS は仕様通り CSS インポートができず、テンプレ化で無理を通しても弊害が出る
- PostCSS をビルドに含めるとサーバーの起動が 1 秒程遅くなる
- 画像処理で可能なのは JPEG 品質程度で、多くの設定はリサイズ用（遅いので非推奨）
- ワイルドカード（0.0.0.0）で同一ネットワークアクセスが可能だがパスが変換されない

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
