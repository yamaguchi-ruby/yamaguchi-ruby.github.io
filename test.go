package main
import "fmt"
import "./foo"

func main(){
    fmt.Println("hoge")
    fmt.Println(foo.Foo())
}