class Society
    attr_writer :univ, :name, :since, :description, :msg

    def inspect
        "所属大学: #{@univ}\n名前:#{@name}\n設立:#{@since}年\n説明: #{@description}\nひとこと: #{@msg}"
    end
end

circle = Society.new
circle.univ = "山口大学"
circle.name = "プログラミングサークル Ruby / Python 研究会"
circle.since = "平成30"
circle.description = "プログラミングをするサークルです"
circle.msg = "部員募集中"

p circle