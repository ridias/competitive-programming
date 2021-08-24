//https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    for(let i = 0; i < board.length; i++){
        let repeated = {}
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] !== ".")
                if(repeated[board[i][j]] === undefined){ repeated[board[i][j]] = 1 } else { return false }
        }
    }
    
    for(let j = 0; j < board[0].length; j++){
        let repeated = {}
        for(let i = 0; i < board.length; i++){
             if(board[i][j] !== ".")
                if(repeated[board[i][j]] === undefined){ repeated[board[i][j]] = 1 } else { return false }
        }
    }
    
    for(let i = 0; i < board.length - 2; i+=3){
        for(let j = 0; j < board[i].length - 2; j+=3){
            let repeated = {}
            if(board[i][j] !== '.'){ if(repeated[board[i][j]] === undefined){ repeated[board[i][j]] = 1 } else { return false } }
            if(board[i][j+1] !== '.'){ if(repeated[board[i][j+1]] === undefined){ repeated[board[i][j+1]] = 1 } else { return false } }
            if(board[i][j+2] !== '.'){ if(repeated[board[i][j+2]] === undefined){ repeated[board[i][j+2]] = 1 } else { return false } }
            if(board[i+1][j] !== '.'){ if(repeated[board[i+1][j]] === undefined){ repeated[board[i+1][j]] = 1 } else { return false } }
            if(board[i+1][j+1] !== '.'){ if(repeated[board[i+1][j+1]] === undefined){ repeated[board[i+1][j+1]] = 1 } else { return false } }
            if(board[i+1][j+2] !== '.'){ if(repeated[board[i+1][j+2]] === undefined){ repeated[board[i+1][j+2]] = 1 } else { return false } }
            if(board[i+2][j] !== '.'){ if(repeated[board[i+2][j]] === undefined){ repeated[board[i+2][j]] = 1 } else { return false } }
            if(board[i+2][j+1] !== '.'){ if(repeated[board[i+2][j+1]] === undefined){ repeated[board[i+2][j+1]] = 1 } else { return false } }
            if(board[i+2][j+2] !== '.'){ if(repeated[board[i+2][j+2]] === undefined){ repeated[board[i+2][j+2]] = 1 } else { return false } }
        }
    }
    return true
};