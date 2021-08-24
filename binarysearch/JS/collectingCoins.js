//https://binarysearch.com/problems/Collecting-Coins

class Solution {
    solve(matrix) {
        for(let i = 1; i < matrix.length; i++){
            matrix[i][0] += matrix[i - 1][0] 
        }

        for(let i = 1; i < matrix[0].length; i++){
            matrix[0][i] += matrix[0][i - 1]
        }

        for(let i = 1; i < matrix.length; i++){
            for(let j = 1; j < matrix[i].length; j++){
                matrix[i][j] = Math.max(matrix[i - 1][j] + matrix[i][j], matrix[i][j - 1] + matrix[i][j])
            }
        }

        return matrix[matrix.length - 1][matrix[0].length - 1]
    }
}