function solution(matrix, column) {
    let result = []
    for(let i in matrix){
        result.push(matrix[i][column])
    }
    return result
}
