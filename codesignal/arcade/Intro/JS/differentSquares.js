function differentSquares(matrix) {
    if(matrix.length === 1){ return 0 }
    if(matrix.length > 1 && matrix[0].length === 1){ return 0 }
    let count = 1
    let previous = [[matrix[0][0], matrix[0][1], matrix[1][0], matrix[1][1]]]
    for(let row = 0; row < matrix.length - 1; row++){
        for(let col = 0; col < matrix[row].length - 1; col++){
            let actual = [matrix[row][col], matrix[row][col+1], matrix[row+1][col], matrix[row+1][col+1]]
            if(isDifferent(previous, actual)){
                count++
                previous.push(actual)
            }
        }
    }
    return count
}

function isDifferent(previous, actual){
    for(let i = 0; i < previous.length; i++){
        let count = 0
        for(let j = 0; j < previous[i].length; j++){
            if(previous[i][j] === actual[j]){ count++ }
            if(count === 4){ return false }
        }
    }
    return true
}
    

