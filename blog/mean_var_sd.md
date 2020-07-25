---
layout: article
title: 平均・分散・標準偏差を求める
---

Ruby で平均・分散・標準偏差を返すプログラムを作る。

```ruby
class Statistics < Array
    def mean # 平均
        1.0 * self.sum / self.size
    end

    def var # 分散
        avg = self.mean
        Statistics.new self.size do |i|
           (self[i] - avg) ** 2
        end
        .mean
    end

    def sd # 標準偏差
        Math.sqrt(var)
    end
end

a = Statistics.new([20, 20, 10, 50, 50, 20, 50, 10, 20, 20])
p a.sum # 270
p a.mean # 27.0
p a.var # 241
p a.sd # 15.524174696260024
```

# プログラムの説明
`Statistics#mean`
: 平均。配列合計を配列の要素数で割ったものを返す。

`Statistics#var`
: 分散。要素と平均の差の2乗の平均を返す。

`Statistics#sd`
: 標準偏差。分散の平方根を返す。