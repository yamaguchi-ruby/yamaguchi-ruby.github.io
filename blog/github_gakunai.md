---
title: gitコマンドを学内で利用する方法
layout: article
---

# git clone
```sh
git clone <リポジトリー> -c http.proxy="http://proxy.cc.yamaguchi-u.ac.jp:8080"
```

# git pull
```sh
git -c http.proxy="http://proxy.cc.yamaguchi-u.ac.jp:8080" pull
```

# git push
```sh
git -c http.proxy="http://proxy.cc.yamaguchi-u.ac.jp:8080" push
```