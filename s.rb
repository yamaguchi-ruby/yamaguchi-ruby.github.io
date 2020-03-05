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
p a.sum
p a.mean
p a.var
p a.sd

