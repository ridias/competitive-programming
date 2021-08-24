//https://leetcode.com/problems/surrounded-regions/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    
    let visited = {}
    for(let i = 0; i < board[0].length; i++){
        if(board[0][i] == "O"){
            visited = updateVisited(board, visited, 0, i)
        }
        
        if(board[board.length - 1][i] == "O"){
            visited = updateVisited(board, visited, board.length - 1, i)
        }
    }
    
    for(let i = 0; i < board.length; i++){
        if(board[i][0] == "O"){
            visited = updateVisited(board, visited, i, 0)
        }
        
        if(board[i][board[0].length - 1] == "O"){
            visited = updateVisited(board, visited, i, board[0].length - 1)
        }
    }
    
    for(let row = 1; row < board.length; row++){
        for(let col = 1; col < board[row].length; col++){
            if(!visited[row + ";" + col] && board[row][col] != "X"){
                board[row][col] = "X"
            }
        }
    }
    
    return board
};


var updateVisited = function(board, visited, i, j){
    let queue = [[i, j]]
    let bounds = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    
    while(queue.length > 0){
        let pos = queue.shift()
        let x = pos[0]
        let y = pos[1]
        
        if(visited[x + ";" + y] == undefined){
            visited[x + ";" + y] = 1
            for(let k = 0; k < bounds.length; k++){
                let posI = x + bounds[k][0]
                let posJ = y + bounds[k][1]
                if(posI < board.length && posI >= 0 && posJ < board[0].length && posJ >= 0){
                    if(board[posI][posJ] == "O" && !visited[posI + ";" + posJ]){
                        queue.push([posI, posJ])
                    }
                }
            }
        }
    }
    
    return visited
}