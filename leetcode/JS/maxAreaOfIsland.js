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


/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    
    let max = 0
    let bounds = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let visited = new Set()
    
    for(let i = 0; i < grid.length; i++){
        
        for(let j = 0; j < grid[i].length; j++){
            
            if(grid[i][j] == 1 && !visited.has(i + ";" + j)){
                
                let queue = [[i, j]]
                let count = 0
                
                while(queue.length > 0){
                    let pos = queue.shift()
                    let x = pos[0]
                    let y = pos[1]
                    if(visited.has(x + ";" + y)){
                        continue
                    }
                    
                    visited.add(x + ";" + y);
                    count++
                    
                    if(count > max) max = count
                    
                    for(let k = 0; k < bounds.length; k++){
                        let posX = bounds[k][0] + x
                        let posY = bounds[k][1] + y
                        if(posX < grid.length && posX >= 0 && posY < grid[i].length && posY >= 0 && !visited.has(posX + ";" + posY)){
                            if(grid[posX][posY] == 1){
                                queue.push([posX, posY])
                            }
                        }
                    }
                }
            }
        }
    }
    
    return max
};