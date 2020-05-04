function randc(){
    return parseInt(Math.random() * 3) + 1
}

let colors = [
    "#ebedf0",
    "#c6e48b",
    "#7bc96f",
    "#c6e48b",
    "#196127"
]

let grasses = document.getElementsByTagName("rect")

for(let i = 0; i < grasses.length; i++){
    grasses[i].style.fill = colors[randc()]
}