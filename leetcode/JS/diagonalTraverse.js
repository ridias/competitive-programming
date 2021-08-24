// https://leetcode.com/problems/diagonal-traverse/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
 var findDiagonalOrder = function(mat) {
    let result = []
    let count = 0
    for(let i = 0; i < mat.length; i++){
        
        let x = i
        let y = 0
        let toInsert = []
        while(x >= 0 && y < mat[i].length){
            count % 2 == 0 ? toInsert.push(mat[x][y]) : toInsert.unshift(mat[x][y])
            x--
            y++
        }
        
        while(toInsert.length > 0){
            result.push(toInsert.shift())
        }        
        count++
    }
    
    for(let i = 1; i < mat[0].length; i++){
        let x = mat.length - 1
        let y = i
        let toInsert = []
        while(x >= 0 && y < mat[x].length){
            count % 2 == 0 ? toInsert.push(mat[x][y]) : toInsert.unshift(mat[x][y])
            x--
            y++
        }
        
        while(toInsert.length > 0){
            result.push(toInsert.shift())
        } 
        
        count++
    }
    
    return result
};