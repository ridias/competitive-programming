//https://binarysearch.com/problems/Number-of-Islands

class Solution {
    solve(matrix) {
        let count = 0
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] == 1){
                    count++
                    setIslandsToZero(matrix, i, j)
                }
            }
        }

        function setIslandsToZero(matrix, i, j){
            if(i < 0 || i >= matrix.length) return;
            if(j < 0 || j >= matrix[i].length) return;
            if(matrix[i][j] == 0) return;
            
            matrix[i][j] = 0
            setIslandsToZero(matrix, i+1, j)
            setIslandsToZero(matrix, i, j +1)
            setIslandsToZero(matrix, i, j- 1)
            setIslandsToZero(matrix, i-1, j)
        }

        return count
    }
}