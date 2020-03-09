---
title: 掲示板
layout: article
---

<script>
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
    }
</script>