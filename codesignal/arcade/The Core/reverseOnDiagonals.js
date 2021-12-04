function solution(matrix) {
    for(let i = 0; i < Math.floor(matrix.length / 2); i++){
        let aux = matrix[i][i]
        matrix[i][i] = matrix[matrix.length - 1 - i][matrix[matrix.length - 1 - i].length - 1 - i]
        matrix[matrix.length - 1 - i][matrix[matrix.length - 1 - i].length - 1 - i] = aux       
        let aux2 = matrix[i][matrix[i].length - 1 - i]
        matrix[i][matrix[i].length - 1 - i] = matrix[matrix.length - 1 - i][i]
        matrix[matrix.length - 1 - i][i] = aux2
    }
    return matrix
}
