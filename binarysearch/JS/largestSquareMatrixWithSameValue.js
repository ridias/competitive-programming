// https://binarysearch.com/problems/Largest-Square-Matrix-with-Same-Value

class Solution {
    solve(matrix) {
        let max = 1;
        
        for(let i = 0; i < matrix.length; i++){

            for(let j = 0; j < matrix[i].length; j++){
                let x = i + 1
                let y = j + 1
                let count = 1
                let val = matrix[i][j]
                while(x < matrix.length && y < matrix[i].length){
                    if(matrix[x][y] == val){
                        let row = x
                        let col = y
                        let isEqual = true

                        while(row >= i && isEqual)
                            matrix[row][y] == val ? row = row - 1 : isEqual = false

                        while(col >= j && isEqual)
                            matrix[x][col] == val ? col = col - 1 : isEqual = false

                        if(isEqual){
                            count++
                        }else{
                            break
                        }
                        
                        x++
                        y++
                    }else{
                        break;
                    }
                }

                if(count > max) max = count
            }
        }

        return max
    }
}