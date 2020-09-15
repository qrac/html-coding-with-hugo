# HTML Coding with Hugo

## Demo

- https://html-coding-with-hugo.netlify.app/

## About

日本のよくある HTML テンプレートコーディング業務を、Hugo で爆速ビルド・省エネ化します。

主に、分業（デザイナーが XD・Illustrator・Figma でデザイン → コーダーが HTML・CSS・JS をコーディング → エンジニアが WordPress・Movable Type・Ruby on Rails で実装）時のコーダー業務強化を目的としています。

モダン JS フレームワークを使える現場や、フルスタックで実装まで行う場合には役立ちません。

- Hugo: https://gohugo.io/

### Good!

- Hugo を用いた爆速ビルド
- Hugo の省エネサーバーで開発
- Live Reload してくれる
- JS フレームワーク風の構成（独自設定）
- HTML ページ一覧の自動生成が可能
- CSS の結合・Minify が可能
- SCSS がデフォルトで使える
- PostCSS が使える（npm install）
- Babel がデフォルトで使える
- 画像の最適化処理がデフォルトで使える
- gulp を使ったり設定せずに済む
- webpack を使ったり設定せずに済む

### Bad!

- JS エンジニアに馴染みのない Go 言語
- テンプレートの決まり事が多い
- 元々 HTML コーディング用 ツールではない
- SCSS は今のところ現 LibSass 仕様
- カスタマイズが難しい部分あり
- 実現できない処理があるかも

このリポジトリは、コンフィグでディレクトリ構成を JS フレームワーク（Next・Nuxt・Gatsby）ライクにカスタマイズしています。Hugo ドキュメントを読む場合にはデフォルトディレクトリと異なるので注意してください。

## How to use

### 1. Install

Hugo はオールインワンなプログラムなので、HomeBrew などでインストールするだけで動作します。PostCSS を使わない場合は Node.js や node_modules すら不要です。

- [Quick Start | Hugo](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo)

```bash
# HomeBrew で Hugo をインストールするコマンド
$ brew install hugo
```

### 2. Clone project

このリポジトリをコピーすると始めるのが楽になります。以下どちらかのコマンドを使うか、GitHub からプロジェクトにダウンロードするなどの方法で転用ください。

```bash
# ディレクトリを切ってリポジトリのデータを Clone するコマンド
$ git clone --depth 1 https://github.com/qrac/html-coding-with-hugo.git

# 現在地にリポジトリのデータをコピーするコマンド
$ git clone --depth 1 https://github.com/qrac/html-coding-with-hugo.git && cd html-coding-with-hugo && rm -rf ./.git ./README.md && mv * .[^\.]* ../ && cd ../ && rm -rf ./html-coding-with-hugo
```

### 3. Create pages

このリポジトリの設定では、`src/pages` に作りたいページの HTML テンプレートを置くと静的 HTML を生成できるようになっています（Next.js 風）。多くの HTML テンプレートコーディング案件ではページ名は任意なので頭連番で作っていきます。ページ一覧はファイル名順に並びます。

- [Content Organization | Hugo](https://gohugo.io/content-management/organization/)

#### Frontmatter

`src/pages` ディレクトリの HTML ファイルにはページのデータを Frontmatter で設定できます。

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
| `draft`    | `false` or `true`       | `true` はビルドから除外できる  |
| `progress` | 数字で `0` 〜 `3`       | ページ一覧で進捗状況を表示     |

- [Front Matter | Hugo](https://gohugo.io/content-management/front-matter/)

### 4. Create components

#### Default

`src/pages` の Frontmatter で参照するレイアウトコンポーネントは `src/components/_default` に置きます。`single` でヘッダー・フッターを呼び出すレイアウトを作っていますが、他にもパターンが必要な場合は命名して増やせます。

- [Single Page Templates | Hugo](https://gohugo.io/templates/single-page-templates/)

#### Shortcodes

`src/pages` ディレクトリの HTML ファイルで分割したコンポーネントを呼び出すには、コンポーネントを `src/components/shortcodes` に置きます。引数を渡すこともできます。

```html
<!-- src/pages/01_page_top.html -->
<main>{{< text value="example text" >}}</main>
```

```html
<!-- src/components/shortcodes/text.html -->
<p>{{.Get "value" }}</p>
```

```html
<!-- Result -->
<main>
  <p>example text</p>
</main>
```

- [Shortcodes | Hugo](https://gohugo.io/content-management/shortcodes/)
- [Create Your Own Shortcodes | Hugo](https://gohugo.io/templates/shortcode-templates/)

#### Partials

`src/components/_default` ディレクトリの HTML ファイルで分割したコンポーネントを呼び出すには、コンポーネントを `src/components/partials` に置きます。引数を渡すこともできます。

```html
<!-- src/components/_default/single.html -->
<p>{{ partial "progress.html" (dict "progress" 1) }}</p>
```

```html
<!-- src/components/partials/progress.html -->
{{ if eq .progress 1 }}
<span class="progress is-1">作業中</span>
{{ else if eq .progress 2 }}
<span class="progress is-2">検証中</span>
{{ else if eq .progress 3 }}
<span class="progress is-3">完了</span>
{{ else }}
<span class="progress">未着手</span>
{{ end }}
```

```html
<!-- Result -->
<p><span class="progress is-1">作業中</span></p>
```

- [Partial Templates | Hugo](https://gohugo.io/templates/partials/)

## Roadmap

- [x] JavaScript フレームワーク風の Hugo 設定
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
- `partials` と `shortcodes` の使い方は似ているが Hugo の仕様上 1 つにまとめられない
- `partials` や `shortcodes` に多階層のオブジェクトを props として渡せるかは未検証
- `components/_default` を `components/layouts` にリネームしたいができない

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
