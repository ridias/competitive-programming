//https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let rows = new Set()
    let cols = new Set()
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == 0){
                rows.add(i)
                cols.add(j)
            }
        }
    }
    
    rows = [...rows]
    cols = [...cols]
    
    for(let i = 0; i < rows.length; i++){
        let row = rows[i]
        for(let j = 0; j < matrix[0].length; j++){
            matrix[row][j] = 0
        }
    }
    
    for(let i = 0; i < cols.length; i++){
        let col = cols[i]
        for(let j = 0; j < matrix.length; j++){
            matrix[j][col] = 0
        }
    }
    
    return matrix
};