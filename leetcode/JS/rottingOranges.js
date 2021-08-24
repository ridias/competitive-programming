// https://leetcode.com/problems/rotting-oranges/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    let fresh = 0
    let queueRotten = []
    let visited = {}
    
    for(let i = 0; i < grid.length; i++){
        
        for(let j = 0; j < grid[i].length; j++){
            
            if(grid[i][j] == 1){
                fresh++
            }else if(grid[i][j] == 2){
                queueRotten.push([i, j, 0])
            }
        }
    }
    
    
    let min = 0;
    let previousMinutes = 0
    let bounds = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let count = 0
    while(queueRotten.length > 0){
        let pos = queueRotten.shift()
        let x = pos[0]
        let y = pos[1]
        let minutes = pos[2]
        if(minutes != previousMinutes){
            if(count > 0) min++
            count = 0
            previousMinutes = minutes
        }
        
        if(visited[x+";"+y] == undefined){
            visited[x + ";" + y] = 1
            for(let i = 0; i < bounds.length; i++){
                let xPos = x + bounds[i][0];
                let yPos = y + bounds[i][1];
                if(xPos < grid.length && xPos >= 0 && yPos < grid[x].length && yPos >= 0 && !visited[xPos + ";" + yPos]){
                    if(grid[xPos][yPos] == 1){
                        queueRotten.push([xPos, yPos, minutes + 1])
                        grid[xPos][yPos] = 2
                        fresh--
                        count++
                    }
                }
            }
        }
    }
    
    return fresh > 0 ? -1 : min;
};