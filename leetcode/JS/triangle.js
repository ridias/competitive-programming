// https://leetcode.com/problems/triangle/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    
    for(let i = 1; i < triangle.length; i++){
        triangle[i][0] += triangle[i - 1][0]
        triangle[i][triangle[i].length - 1] += triangle[i-1][triangle[i-1].length - 1]
    }
    
    
    for(let i = 2; i < triangle.length; i++){
        
        for(let j = 1; j < triangle[i].length - 1; j++){
            triangle[i][j] = Math.min(triangle[i][j] + triangle[i - 1][j - 1], triangle[i][j] + triangle[i-1][j])
        }
    }
    
    let lastRow = triangle[triangle.length - 1]
    let min = Infinity
    for(let i = 0; i < lastRow.length; i++){
        min = Math.min(min, lastRow[i])
    }
    
    return min
};