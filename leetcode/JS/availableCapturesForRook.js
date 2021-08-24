// https://leetcode.com/problems/available-captures-for-rook/

/**
 * @param {character[][]} board
 * @return {number}
 */
 var numRookCaptures = function(board) {
    
    let x = -1
    let y = -1
    let c = 0
    for(let i = 0; i < board.length; i++){
        
        for(let j = 0; j < board[i].length; j++){
            
            if(board[i][j] == "R"){
                x = i
                y = j
                break
            }
        }
    }
    
    //south
    for(let i = x + 1; i < board.length; i++){
        if(board[i][y] == "p"){
            c++
            break;
        }else if(board[i][y] == "B"){
            break;
        }
    }
    
    //east
    for(let i = y + 1; i < board[x].length; i++){
        if(board[x][i] == "p"){
            c++
            break
        }else if(board[x][i] == "B"){
            break;
        }
    }
    
    //west
    for(let i = x - 1; i >= 0; i--){
        if(board[i][y] == "p"){
            c++
            break
        }else if(board[i][y] == "B"){
            break
        }
    }
    
    //north
    for(let i = y - 1; i >= 0; i--){
        if(board[x][i] == "p"){
            c++
            break
        }else if(board[x][i] == "B"){
            break
        }
    }
    
    return c
    
};