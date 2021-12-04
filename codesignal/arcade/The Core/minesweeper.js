function solution(matrix) {
    let result = generateArray(matrix.length, matrix[0].length)
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i - 1 >= 0 && j - 1 >= 0) { if(matrix[i-1][j-1] === true) result[i][j]++ }
            if(i - 1 >= 0 && j + 1 < matrix[i].length){ if(matrix[i-1][j+1] === true) result[i][j]++ }
            if(i - 1 >= 0){ if(matrix[i-1][j] === true) result[i][j]++ }
            if(i + 1 < matrix.length && j - 1 >= 0){ if(matrix[i+1][j-1] === true) result[i][j]++ }
            if(i + 1 < matrix.length && j + 1 < matrix[i].length) { if(matrix[i+1][j+1] === true) result[i][j]++ }
            if(i + 1 < matrix.length){ if(matrix[i+1][j] === true) result[i][j]++ }
            if(j - 1 >= 0){ if(matrix[i][j-1] === true) result[i][j]++ }
            if(j + 1 < matrix[i].length){ if(matrix[i][j+1] === true) result[i][j]++ }    
        }
    }
    return result
}

function generateArray(row, col){
    let result = []
    for(let i = 0; i < row; i++){
        result.push([])
        for(let j = 0; j < col; j++){
            result[i][j] = 0
        }
    }
    return result
}
