---
layout: article
title: JavaScriptで文字列を書く
---

下の HTML で書かれているページは何も書かれていない。

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <div id="hoge"></div>
    </body>
</html>
```

ここで、JavaScript を用いて、`#hoge`に hogehoge と書きたい場合、

```js
hoge.innerText = "hogehoge"
```

とする。

[デモ](jsmojiretsu_demo.html)

