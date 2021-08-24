//https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let result = []
    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1
    
    for(let i = 0; i < Math.round(matrix.length / 2); i++){
        if(right < left) break
        for(let j = left; j <= right; j++){
            result.push(matrix[top][j])
        }
        
        top++
        
        
        for(let j = top; j < bottom; j++){
            result.push(matrix[j][right])
        }
        
        if(bottom < top) break
        
        for(let j = right; j >= left; j--){
            result.push(matrix[bottom][j])
        }
        
        right--
        bottom--
        
        if(right < left) break
        
        for(let j = bottom; j >= top; j--){
            result.push(matrix[j][left])
        }
        
        left++
    }
    
    return result
    
};