// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    
    let count = 0
    let map = {}
    for(let i = 0; i < grid.length; i++){
        
        for(let j = 0; j < grid[i].length; j++){
            
            if(grid[i][j] == "1"){
                count++
                let queue = [[i, j]]
                let pos = [[0, -1], [0, 1], [1, 0], [-1, 0]]
                while(queue.length > 0){
                    let positions = queue.shift()
                    let x = positions[0]
                    let y = positions[1]
                    if(map[(x+";"+y)] == undefined){
                        for(let k = 0; k < pos.length; k++){
                            if(x + pos[k][0] < grid.length && x + pos[k][0] >= 0 && y + pos[k][1] < grid[x].length && y + pos[k][1] >= 0){
                                if(grid[x+pos[k][0]][y+pos[k][1]] == '1'){
                                    queue.push([x+pos[k][0], y+pos[k][1]])
                                }
                            }
                        }

                        grid[x][y] = '0'
                        map[x+";"+y] = 1
                    }
                }
            }
        }
    }
    
    return count
};