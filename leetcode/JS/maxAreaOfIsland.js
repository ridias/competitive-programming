// https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let max = 0;
    for(let i = 0; i < grid.length; i++){
        
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                
                let count = 0
                let queue = [[i, j]]
                
                while(queue.length > 0){
                    let pos = queue.shift();
                    if(pos[0] >= 0 && pos[0] < grid.length && pos[1] <= grid[pos[0]].length && pos[1] >= 0){
                        let value = grid[pos[0]][pos[1]] || 0
                        if(value == 1){
                            grid[pos[0]][pos[1]] = 0;
                            count++
                            queue.push([pos[0] + 1, pos[1]])
                            queue.push([pos[0] - 1, pos[1]])
                            queue.push([pos[0], pos[1] + 1])
                            queue.push([pos[0], pos[1] - 1])
                        }
                    }
                }
                
                if(count > max) max = count
            }
        }
        
    }
    
    return max
};