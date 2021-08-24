//https://binarysearch.com/problems/Zero-Matrix

class Solution {
    solve(matrix) {
        let rows = new Set()
        let columns = new Set()
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] == 0){
                    rows.add(i)
                    columns.add(j)
                }
            }
        }

        rows = [...rows]
        columns = [...columns]

        for(let i = 0; i < rows.length; i++){
            let row = rows[i]
            for(let j = 0; j < matrix[row].length; j++){
                matrix[row][j] = 0
            }
        }

        for(let i = 0; i < columns.length; i++){
            let col = columns[i]
            for(let j = 0; j < matrix.length; j++){
                matrix[j][col] = 0
            }
        }
        
        return matrix
        
    }
}