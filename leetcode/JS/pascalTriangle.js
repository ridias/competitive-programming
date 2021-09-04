// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    
    let result = [[1], [1,1]]
    if(numRows == 1) return [[1]]
    if(numRows == 2) return result
    
    for(let i = 2; i < numRows; i++){
        let row = [1]
        
        for(let j = 1; j < i; j++){
            row.push(result[i - 1][j - 1] + result[i - 1][j])
        }
        
        row.push(1)
        result.push(row)
    }
    
    return result
    
};