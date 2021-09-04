//https://leetcode.com/problems/reshape-the-matrix/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let result = []
    let row = []
    
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            
            if(row.length == c){
                result.push(row)
                row = [mat[i][j]]
            }else{
                row.push(mat[i][j])
            }
            
            if(result.length > r) return mat
        }
    }
    
    if(row.length > 0) result.push(row)
    if(result.length > r) return mat
    if(result.length < r) return mat
    return result
    
    
};