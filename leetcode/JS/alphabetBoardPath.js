// https://leetcode.com/problems/alphabet-board-path/

/**
 * @param {string} target
 * @return {string}
 */
 var alphabetBoardPath = function(target) {
    
    let map = {}
    let letters = "abcdefghijklmnopqrstuvwxyz"
    
    for(let i = 0; i < letters.length; i++){
        map[letters[i]] = [Math.floor(i / 5), (i % 5)]
    }
    
    let path = ""
    let previousPositions = [0, 0]
    for(let i = 0; i < target.length; i++){
        let nextPositions = map[target[i]]
        
        let rowPre = previousPositions[0]
        let colPre = previousPositions[1]
        
        let rowNext = nextPositions[0]
        let colNext = nextPositions[1]
        
        if(rowPre == 5 && rowNext < rowPre){
            path += "U"
            rowPre--
        }
        
        while(colPre < colNext){
            path += "R"
            colPre++
        }
        
        while(colPre > colNext){
            path += "L"
            colPre--
        }
        
        while(rowPre < rowNext){
            path += "D"
            rowPre++
        }
        
        while(rowPre > rowNext){
            path += "U"
            rowPre--
        }
        
        previousPositions = [rowNext, colNext]
        path += "!"
    }
    
    return path
    
};