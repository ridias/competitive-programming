//https://binarysearch.com/problems/Matrix-Search

class Solution {
    solve(matrix, k) {
        let result = []
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                result.push(matrix[i][j])
            }
        } 

        result.sort((a, b) => a - b)
        return result[k]
    }
}