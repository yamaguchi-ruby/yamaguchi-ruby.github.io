---
layout: article
title: カレンダーを作る
---

# 目的
今月のカレンダーを作りたい

# プログラム
```html
<!-- HTML -->
<div id="cale"></div>
```

```js
// JavaScript
function calendar(id){
    let now = (new Date)
    let m = now.getMonth()
    let y = now.getFullYear()
    let d = new Date(y, m, 1)

    let str = `<h2>${m+1}月のカレンダー</h2>`
    str += "<table><tr>"
    for(let i = 0; i <= 6; i++){
        str += `<th>${["日", "月", "火", "水", "木", "金", "土"][i]}</th>`
    }
    for(let i = 0; i < d.getDay(); i++){
        str += "<td></td>"
    }
    for(let i = 0; i < 31; i++){
        if(d.getDay() == 0){
            str += "</tr><tr>"
        }
        str += `<td>${d.getDate()}</td>`
        d.setDate(d.getDate() + 1)
        if(d.getMonth() != m){
            break
        }
    }
    for(let i = d.getDay(); i <= 6; i++){
        str += "<td></td>"
    }
    str += "</tr></table>"
    cale.innerHTML = str
}
calendar(cale)
```

```css
/* CSS */
th:nth-child(1), td:nth-child(1) {
    background: #F44336;
    color:white;
}
th, td{
    text-align: center;
}
th:nth-child(7), td:nth-child(7) {
    background: #2196F3;
    color:white;
}
```

# デモ
<div id="cale"></div>

<style>
th:nth-child(1), td:nth-child(1) {
    background: #F44336;
    color:white;
}
th, td{
    text-align: center;
}
th:nth-child(7), td:nth-child(7) {
    background: #2196F3;
    color:white;
}
</style>

<script>
function calendar(id){
    let now = (new Date)
    let m = now.getMonth()
    let y = now.getFullYear()
    let d = new Date(y, m, 1)

    let str = `<h2>${m+1}月のカレンダー</h2>`
    str += "<table><tr>"
    for(let i = 0; i <= 6; i++){
        str += `<th>${["日", "月", "火", "水", "木", "金", "土"][i]}</th>`
    }
    for(let i = 0; i < d.getDay(); i++){
        str += "<td></td>"
    }
    for(let i = 0; i < 31; i++){
        if(d.getDay() == 0){
            str += "</tr><tr>"
        }
        str += `<td>${d.getDate()}</td>`
        d.setDate(d.getDate() + 1)
        if(d.getMonth() != m){
            break
        }
    }
    for(let i = d.getDay(); i <= 6; i++){
        str += "<td></td>"
    }
    str += "</tr></table>"
    cale.innerHTML = str
}
calendar(cale)
</script>