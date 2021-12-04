function solution(grid) {
    let result = []
    for(let i = 0; i < grid.length; i++){
        result = []
        for(let j = 0; j < grid[i].length; j++){
            if(result.indexOf(grid[i][j]) === -1){ result.push(grid[i][j]) } else { return false }
        }
    }

    for(let i = 0; i < grid.length; i++){
        result = []
        for(let j = 0; j < grid[i].length; j++){
            if(result.indexOf(grid[j][i]) === -1){ result.push(grid[j][i]) } else { return false }
        }
    }

    for(let i = 0; i < grid.length; i = i + 3){
        result = 0
        for(let j = 0; j < grid[i].length; j = j + 3){
            result += grid[i][j] + grid[i][j+1] + grid[i][j+2]
            result += grid[i+1][j] + grid[i+1][j+1] + grid[i+1][j+2]
            result += grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]
            if(result !== 45){ return false }
            result = 0
        }
    }
    
    return true
}