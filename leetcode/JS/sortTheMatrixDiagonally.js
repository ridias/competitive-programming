// https://leetcode.com/problems/sort-the-matrix-diagonally/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
    
    for(let col = 0; col < mat[0].length; col++){
        let i = 0
        let j = col
        let arr = []
        while(i < mat.length && j < mat[i].length){
            arr.push(mat[i][j])
            i++
            j++
        }
        
        arr.sort((a, b) => a - b)
        i = 0
        j = col
        while(i < mat.length && j < mat[i].length){
            mat[i][j] = arr.shift()
            i++
            j++
        }
    }
    
    for(let row = 1; row < mat.length; row++){
        let i = row
        let j = 0
        let arr = []
        while(i < mat.length && j < mat[i].length){
            arr.push(mat[i][j])
            i++
            j++
        }
        
        arr.sort((a, b) => a - b)
        i = row
        j = 0
        while(i < mat.length && j < mat[i].length){
            mat[i][j] = arr.shift()
            i++
            j++
        }
    }
    
    return mat
};