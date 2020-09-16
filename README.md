# HTML Coding with Hugo

## Demo

- https://html-coding-with-hugo.netlify.app/

## About

HTML・SCSS・JS のコーディングを Hugo で爆速化・省エネ化します。

## How to use

### 1. Install Hugo

```bash
$ brew install hugo
```

### 2. Clone project

```bash
$ git clone --depth 1 https://github.com/qrac/html-coding-with-hugo.git && cd html-coding-with-hugo && rm -rf ./.git ./README.md && mv * .[^\.]* ../ && cd ../ && rm -rf ./html-coding-with-hugo
```

### 3. Create pages

`src/pages`

#### Frontmatter

```yaml
title: "トップページ"
layout: "single"
type: "page"
draft: false
progress: 0
```

| キー       | 値の例                  | 意味                           |
| ---------- | ----------------------- | ------------------------------ |
| `title`    | ページタイトル          | ページ一覧にも自動出力         |
| `layout`   | `single` etc.           | ページをラップするテンプレート |
| `type`     | `pages` or `components` | ページ一覧での分類に使用       |
| `draft`    | `false` or `true`       | `true` にするとビルドから除外  |
| `progress` | 数字で `0` 〜 `3`       | ページ一覧で進捗状況を表示     |

### 4. Create components

#### Default

`src/components/_default`

#### Shortcodes

`src/components/shortcodes`

#### Partials

`src/components/partials`

## Hugo Docs

- Hugo: https://gohugo.io/
  - [Quick Start](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo)
  - [Content Organization](https://gohugo.io/content-management/organization/)
  - [Front Matter](https://gohugo.io/content-management/front-matter/)
  - [Single Page Templates](https://gohugo.io/templates/single-page-templates/)
  - [Shortcodes](https://gohugo.io/content-management/shortcodes/)
  - [Create Your Own Shortcodes](https://gohugo.io/templates/shortcode-templates/)
  - [Partial Templates](https://gohugo.io/templates/partials/)

※このリポジトリは、コンフィグでディレクトリ構成を JS フレームワーク（Next・Nuxt・Gatsby）ライクにカスタマイズしています。Hugo ドキュメントを読む場合にはデフォルトディレクトリと異なるので注意してください。

## Roadmap

- [x] JavaScript フレームワーク風の Hugo 設定
- [x] ページ一覧の自動生成
- [x] ページ一覧での進捗状況表示
- [x] CSS 設定
- [x] CSS 結合と Minify
- [x] Netlify デモのビルド
- [ ] SCSS 設定
- [ ] PostCSS 設定（Autoprefixer など）
- [ ] node_modules からの SCSS ライブラリ読み込み
- [ ] JavaScript 設定
- [ ] Babel 設定
- [ ] node_modules からの JavaScript ライブラリ読み込み
- [ ] 画像最適化の設定

## Unresolved

- `pages` は Hugo で言う `content` であり、`partials` を呼び出したり関数を使ったりできない
- `components/_default` を `components/layouts` にリネームしたいができない
- `partials` と `shortcodes` の使い方は似ているが Hugo の仕様上 1 つにまとめられない
- `partials` や `shortcodes` に多階層のオブジェクトを props として渡せるかは未検証

## License

- HTML Coding with Hugo: MIT
- [Hugo](https://github.com/gohugoio/hugo/blob/master/LICENSE): Apache License 2.0

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
