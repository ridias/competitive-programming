//https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    
    while(top < bottom){
        let tmp = matrix[top][left]
        matrix[top][left] = matrix[bottom][left]
        matrix[bottom][left] = matrix[bottom][right]
        matrix[bottom][right] = matrix[top][right]
        matrix[top][right] = tmp
        
        let count = 1
        for(let i = left + 1; i < right; i++){
            tmp = matrix[top][i]
            matrix[top][i] = matrix[bottom - count][left]
            matrix[bottom - count][left] = matrix[bottom][right - count]
            matrix[bottom][right - count] = matrix[i][right]
            matrix[i][right] = tmp
            count++
        }
        
        left++
        right--
        top++
        bottom--
    }
    
    return matrix
};