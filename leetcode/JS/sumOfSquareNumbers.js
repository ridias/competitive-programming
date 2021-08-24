// https://leetcode.com/problems/sum-of-square-numbers/

/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function(c) {
    let limit = Math.floor(Math.sqrt(c))
    for(let i = limit; i >= 0; i--){
        if(i * i + ((i) * (i)) < c) break;
        for(let j = i; j >= 0; j--){
            let val = (i * i) + (j * j)
            if(val == c) return true
            else if(val < c) break;
        }     
    }
    
    return false
};