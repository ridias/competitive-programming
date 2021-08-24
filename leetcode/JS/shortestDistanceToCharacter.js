// https://leetcode.com/problems/shortest-distance-to-a-character/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    let positions = []
    let result = []
    for(let i = 0; i < s.length; i++){
        if(s[i] == c) positions.push(i)
    }
    
    for(let i = 0; i < s.length; i++){
        let min = s.length
        for(let j = 0; j < positions.length; j++){
            let diff = Math.abs(positions[j] - i)
            if(diff < min) min = diff
        }
        result.push(min)
        
    }
    
    return result
};