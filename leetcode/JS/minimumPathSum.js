//https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
 
    let i = grid.length - 1
    let j = grid[0].length - 1
    
    for(let k = 0; k <= i; ++k) {
        for(let l = 0; l <= j; ++l) {
            if(k > 0 && l > 0)
                grid[k][l] = Math.min(grid[k][l] + grid[k][l - 1], grid[k - 1][l] + grid[k][l])
            else if(k > 0 || l > 0) {
                if(l > 0)
                    grid[k][l] += grid[k][l - 1]
                else
                    grid[k][l] += grid[k - 1][l]
                }   
        }
    }
    
    return grid[i][j]
}