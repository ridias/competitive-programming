//https://binarysearch.com/problems/Binary-Matrix-Leftmost-One

class Solution {
    solve(matrix) {
        if(matrix.length == 0) return -1
        for(let j = 0; j < matrix[0].length; j++){
            for(let i = 0; i < matrix.length; i++){
                if(matrix[i][j] == 1) return j
            }
        }

        return -1
    }
}