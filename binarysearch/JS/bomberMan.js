// https://binarysearch.com/problems/Bomber-Man

class Solution {
    solve(matrix) {
        
        let count = 0
        for(let i = 0; i < matrix.length; i++){
            
            for(let j = 0; j < matrix[i].length; j++){

                if(matrix[i][j] == 1){
                    matrix[i][j] = -1

                    let row = i;
                    let col = j;
                    while(row < matrix.length){
                        if(matrix[row][j] == 0) matrix[row][j] = -1
                        row++
                    }

                    while(col < matrix[i].length){
                        if(matrix[i][col] == 0) matrix[i][col] = -1
                        col++
                    }

                    row = i
                    col = j
                    while(row >= 0){
                        if(matrix[row][j] == 0) matrix[row][j] = -1
                        row--
                    }

                    while(col >= 0){
                        if(matrix[i][col] == 0) matrix[i][col] = -1
                        col--
                    }

                }
            }
        }

        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] == 0) count++
            }
        }

        return count;
    }
}