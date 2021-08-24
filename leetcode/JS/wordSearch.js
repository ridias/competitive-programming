//https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let pos = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    let prefix = []
    let map = {}
    
    let aux = ""
    for(let i = 0; i < word.length; i++){
        aux += word[i]
        prefix.push(aux)
        map[word[i]] == undefined ? map[word[i]] = [0, 1] : map[word[i]][1] += 1
    }
    
    let count = 0
    for(let i = 0; i < board.length; i++){
        
        for(let j = 0; j < board[i].length; j++){
            let letter = board[i][j]
            if(map[letter] != undefined){
                let limit = map[letter][1]
                let times = map[letter][0]
                if(times + 1 <= limit){
                    count++
                }
                
                map[letter][0] += 1
            }
        }
    }

    if(count < word.length) return false
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            
            if(board[i][j] == word[0]){    
                
                let queue = [[i, j, word[0], new Set()]]
                
                while(queue.length > 0){
                    let cell = queue.shift()
                    let x = cell[0]
                    let y = cell[1]
                    let str = cell[2]
                    let visited = cell[3]
                    if(str == word) return true
                    
                    visited.add(x + ";" + y)
                    
                    for(let k = 0; k < pos.length; k++){
                        let posNextX = x + pos[k][0]
                        let posNextY = y + pos[k][1]
                        if(posNextX < board.length && posNextX >= 0 && posNextY < board[x].length && posNextY >= 0){
                            if(!visited.has(posNextX + ";" + posNextY) && str + board[posNextX][posNextY] == prefix[str.length]){
                                if(str + board[posNextX][posNextY] == word) return true
                                queue.push([posNextX, posNextY, str + board[posNextX][posNextY], new Set(visited)])
                            }
                        }
                    }
                }
            }
        }
    }
    
    return false
};