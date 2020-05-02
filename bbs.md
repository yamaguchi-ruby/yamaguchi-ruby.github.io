---
title: 掲示板
layout: article
---

<style>
body header nav ul li:nth-child(2) a{
    border-bottom: 2px solid #2196F3;
}
</style>

<div id="poster_block"></div>
<form action="https://www.yamaguchi.tech/cgi-bin/post_poster.cgi" method="get">
    <input placeholder="名前" type="text" name="name">
    <textarea name="text"></textarea>
    <input type="submit" value="投稿">
</form>

<link rel="stylesheet" href="bbs.css">

<script>
function htmlesc(str) {
    return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/&lt;br&gt;/g, '<br>')
    .replace(/&amp;#44;/g, '&#44;')
}

let r = new XMLHttpRequest
r.open("GET", "https://www.yamaguchi.tech/cgi-bin/get_poster.cgi")
r.send()
let posters
r.onload = function(e){
    let posters_csv = e.target.response
    posters = posters_csv.split(/\n/)
    posters = posters.filter(Boolean)
    posters = posters.map(function(e){
        return e.split(/\,\s?/)
    })
    let str = ""
    for(let i in posters){
        let e = new Era(posters[i][0])
        e.setHours(e.getHours() + 9)
        str += `
        <section>
            <span class="bbs_id">${i}</span>
            <span class="bbs_name">${htmlesc(posters[i][3])}</span>
            <time>${e.getWareki()}${e.getHours()}時${e.getMinutes()}分${e.getSeconds()}秒</time>
            <div class="poster">${htmlesc(posters[i][1])}</div>
        </section>`
    }
    poster_block.innerHTML = str
}
</script>