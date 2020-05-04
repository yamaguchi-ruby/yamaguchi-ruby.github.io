---
title: 新型コロナウイルスの全国ヒートマップ
layout: article
---

<div id="info">
    <time id="date"></time>
    <span id="num"></span>
</div>

<div id="jp-map"></div>

<style>
svg{
    max-width: 100%;
}
svg path{
    transition: .3s;
}
#date{
    font-size: 24px;
}
#num{
    font-size: 32px;
    margin-left: 24px;
}

body #city_info{
    background-color: #212121cc;
    position: fixed;
    border-radius: 8px;
    color: #fafafa;
    padding: 8px;
}
</style>

<script>
mapfulluri = true
</script>
<script src="https://himeyama.github.io/SARS-CoV-2/main.js"></script>
