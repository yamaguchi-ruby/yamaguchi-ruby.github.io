function create_table(e){
    str = ""
    for(i = 0; i < 9; i++){
        str += "<tr>"
        for(j = 0; j < 9; j++){
            str += `\
                <td>\
                <select id=\"p${i}${j}\">\
                    <option value=\"n\"></option>\
                    <option value=\"1\">1</option>\
                    <option value=\"2\">2</option>\
                    <option value=\"3\">3</option>\
                    <option value=\"4\">4</option>\
                    <option value=\"5\">5</option>\
                    <option value=\"6\">6</option>\
                    <option value=\"7\">7</option>\
                    <option value=\"8\">8</option>\
                    <option value=\"9\">9</option>\
                </select>
                </td>`
        }
        str += "</tr>"
    }
    e.innerHTML = str
}

let e = document.getElementById("sudoku_table")
create_table(e)