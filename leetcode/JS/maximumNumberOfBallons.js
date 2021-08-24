// https://leetcode.com/problems/maximum-number-of-balloons/

/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    
    let map = {}
    map["b"] = 0
    map["a"] = 0
    map["l"] = 0
    map["o"] = 0
    map["n"] = 0
    
    for(let i = 0; i < text.length; i++){
        if(/[balon]/.test(text[i])){
            map[text[i]] += 1 
        }
    }
    
    let appearences = [map["b"] / 1, map["a"] / 1, Math.floor(map["l"] / 2), Math.floor(map["o"] / 2), map["n"] / 1]
    let min = Infinity
    
    console.log(appearences)
    
    for(let i = 0; i < appearences.length; i++){
        if(appearences[i] < min) min = appearences[i]
    }
    
    return min
    
    
};