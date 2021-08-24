// https://leetcode.com/problems/battleships-in-a-board/

/**
 * @param {character[][]} board
 * @return {number}
 */
 var countBattleships = function(board) {
    let count = 0
    
    for(let i = 0; i < board.length; i++){
        
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] == "X"){
                count++
                for(let k = i + 1; k < board.length; k++){
                    if(board[k][j] == "X"){
                        board[k][j] = "."
                    }else{
                        break;
                    }
                }
                
                for(let k = j + 1; k < board[i].length; k++){
                    if(board[i][k] == "X"){
                        board[i][k] = "."
                    }else{
                        break
                    }
                }
                
                board[i][j] = "."
            }
        }
    }
    
    return count
};