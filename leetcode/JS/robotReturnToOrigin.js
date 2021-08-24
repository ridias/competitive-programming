// https://leetcode.com/problems/robot-return-to-origin/

/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let coordinates = [0, 0]
    
    for(let i = 0; i < moves.length; i++){
        if(moves[i] == "U") coordinates[1] += 1
        else if(moves[i] == "D") coordinates[1] -= 1
        else if(moves[i] == "L") coordinates[0] += 1
        else if(moves[i] == "R") coordinates[0] -= 1
    }
    return coordinates[0] == 0 && coordinates[1] == 0
};