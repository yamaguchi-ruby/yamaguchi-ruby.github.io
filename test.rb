class Err1 < StandardError
end

class Err2 < Err1
end

begin
    raise Err2
rescue => e
    puts "StandardError"
rescue Err2 => e2
    puts ex.class
end

p Err2