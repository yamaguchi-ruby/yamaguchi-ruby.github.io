---
layout: article
title: 昼と夜でスタイルを変える
---

# アルゴリズム
21時以降6時になるまで夜専用のスタイルにする。
時間を取得し、21時以降6時未満のとき、夜のクラスを追加する。

# プログラム

```javascript
function nightStyle(){
    let now = new Date
    if(now.getHours() >= 21 || now.getHours() < 6)
        document.body.classList.add("nightstyle")
}
nightStyle()
```

```css
body.nightstyle {
    background: #212121;
    color: #fafafa;
}
body.nightstyle article{
    background: transparent;
}
body.nightstyle footer{
    background: #212121;
}
```

<script>
function nightStyle(){
    let now = new Date
    if(now.getHours() >= 21 || now.getHours() < 6)
        document.body.classList.add("nightstyle")
}
nightStyle()
</script>

<style>
body.nightstyle {
    background: #212121;
    color: #fafafa;
}
body.nightstyle article{
    background: transparent;
}
body.nightstyle footer{
    background: #212121;
}
</style>