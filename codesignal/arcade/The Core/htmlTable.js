function solution(table, row, column) {
    
    table = table.replace(/(<tr>|<\/tr>)+/g, " ").split(" ")
    
    for(let i = 1; i < table.length - 1; i++){
        table[i] = table[i].replace(/(<td>|<\/td>)+/g, " ").split(" ")
        if(i - 1 == row){
            for(let j = 1; j < table[i].length; j++){
                if(column == j - 1){ return table[i][j].length == 0 ? "No such cell" : table[i][j] }
            }
        }
    }
    
    
    return "No such cell"
}
