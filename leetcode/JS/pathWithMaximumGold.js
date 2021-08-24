// https://leetcode.com/problems/path-with-maximum-gold/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var getMaximumGold = function(grid) {
    let maxGold = 0
    let bounds = [[-1,0], [1,0], [0, 1], [0, -1]]
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            let queue = []
            if(grid[i][j] > 0){
                queue.push([i, j, grid[i][j], new Set()])
                while(queue.length > 0){
                    let cell = queue.shift()
                    let x = cell[0]
                    let y = cell[1]
                    let sum = cell[2]
                    let visited = new Set([...cell[3]])
                    visited.add(x + ";" + y)
                    if(sum > maxGold){
                        maxGold = sum
                    }
                    
                    for(let k = 0; k < bounds.length; k++){
                        if(x + bounds[k][0] < grid.length && x + bounds[k][0] >= 0 && y + bounds[k][1] < grid[x].length && y + bounds[k][1] >= 0){
                            let key = (x + bounds[k][0]) + ";" + (y + bounds[k][1])
                            if(grid[x+bounds[k][0]][y+bounds[k][1]] > 0 && !visited.has(key)){
                                let nextValue = grid[x+bounds[k][0]][y+bounds[k][1]]
                                queue.push([x+bounds[k][0], y + bounds[k][1], sum + nextValue, visited])
                            }
                        }
                    }
                }
            }
        }
    }
    
    return maxGold
};