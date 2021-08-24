//https://leetcode.com/problems/spiral-matrix-ii/

/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let matrix = []
    
    for(let i = 0; i < n; i++){
        let row = []
        for(let j = 0; j < n; j++){
            row.push(0)
        }
        matrix.push(row)
    }
    
    let count = 1
    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1
    
    while(count <= n * n){
        
        if(left > right) break;
        
        for(let i = left; i <= right; i++){
            matrix[top][i] = count
            count++
        }
        
        top++
        
        if(top > bottom) break
        for(let i = top; i < bottom; i++){
            matrix[i][right] = count
            count++
        }
        
        if(left > right) break;
        for(let i = right; i >= left; i--){
            matrix[bottom][i] = count
            count++
        }
        
        bottom--
        right--
        
        for(let i = bottom; i >= top; i--){
            matrix[i][left] = count
            count++
        }
        
        left++
    }
    
    return matrix
};