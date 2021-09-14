/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] == 1) return -1
    if(grid[grid.length - 1][grid[0].length - 1] == 1) return -1
    let visited = {}
    
    let queue = [[0, 0, 1]]
    let bounds = [[1,1],[1, -1],[-1, 1], [-1, -1],[0,1], [0, -1], [1, 0], [-1, 0]]
    visited[0 + ";" + 0] = 1
    
    
    while(queue.length > 0){
        let cell = queue.shift()
        let i = cell[0]
        let j = cell[1]
        let steps = cell[2]
        
        if(i == grid.length - 1 && j == grid[i].length - 1){
            return steps
        }
        
        for(let k = 0; k < bounds.length; k++){
            let nextI = bounds[k][0] + i
            let nextJ = bounds[k][1] + j
            
            if(nextI < grid.length && nextI >= 0 && nextJ < grid[nextI].length && nextJ >= 0 && !visited[nextI + ";" + nextJ]){
                if(grid[nextI][nextJ] == 0){
                    queue.push([nextI, nextJ, steps + 1])
                    visited[nextI + ";" + nextJ] = 1   
                }
            }
        }
    }
    
    return -1
    
};