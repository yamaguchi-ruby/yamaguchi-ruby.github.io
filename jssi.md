---
layout: article
title: ゆっくり繰り返すsetInterval
---

JavaScriptでは時間ごとに繰り返すことができます。

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <div id="count"></div>
        <script>
            let i = 0
            let a = setInterval(
                function(){
                    count.innerText = i
                    i++
                    if(!(i < 100)) clearInterval(a)
                },
                100
            )
        </script>
    </body>
</html>
```

# デモ

<div id="count"></count>
<script>
let i = 0
let a = setInterval(
    function(){
        count.innerText = i
        i++
        if(!(i < 100)) clearInterval(a)
    },
    100
)
</script>