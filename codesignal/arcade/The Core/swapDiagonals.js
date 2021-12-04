function solution(matrix) {
    for(let i = 0; i < matrix.length; i++){
        let aux = matrix[i][i]
        matrix[i][i] = matrix[i][matrix[i].length - 1 - i]
        matrix[i][matrix[i].length - 1 - i] = aux
    }
    return matrix
}
