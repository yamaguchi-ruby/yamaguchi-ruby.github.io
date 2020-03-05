---
title: Jekyll の主な機能
layout: article
---

## Jekyllの主な機能その1
テンプレートにより同じことを書かなくて済む。

```html
<!-- index.html -->
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>〜のホームページ</a>
        <a href="article.html">ニュース</a>
    </body>
</html>
```

```html
<!-- article.html -->
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>記事一覧</h1>
    </body>
</html>
```

上に示すように、`index.html`と`article.html`があったとする。
これらの共通部分である、

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <!-- 変える部分 -->
    </body>
</html>
```

を雛形として一度定義することで`<body>`内のみを変えるだけで良い。
この雛形と各ページの内容(`<body>`内)をもとに`index.html`と`article.html`を生成するのが`Jekyll`である。

## Jekyllの主な機能その2
内容はMarkdownで書くことができる。

```markdown
---
---

# Hello, world
```

上のMarkdownが下のHTMLに変換される。

```
<h1>Hello, world</h1>
```

Markdown記法を使うことで、より簡単に書くことができる。

## Jekyllの主な機能その3
SASSが使える。

```sass
body
    background: #fafafa
    color: #121212
```

上のSASSが下のCSSに変換される

```css
body{
    background: #fafafa;
    color: #121212;
}
```

SASSはCSSをより簡単にして拡張した言語。