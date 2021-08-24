//https://binarysearch.com/problems/Column-Sort

class Solution {
    solve(matrix) {
        if(matrix.length == 0) return matrix
        for(let j = 0; j < matrix[0].length; j++){
            let arr = []
            for(let i = 0; i < matrix.length; i++){
                arr.push(matrix[i][j])
            }

            arr.sort((a, b) => a - b)
            for(let i = 0; i < matrix.length; i++){
                matrix[i][j] = arr[i]
            }
        }

        return matrix
    }
}