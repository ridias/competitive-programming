function solution(matrix, a, b) {
    let result = 0
    for(let i = 0; i < matrix[a].length; i++){ result += matrix[a][i] }
    for(let i = 0; i < matrix.length; i++){ 
        if(i !== a){ result += matrix[i][b] }
    }
    return result
}
