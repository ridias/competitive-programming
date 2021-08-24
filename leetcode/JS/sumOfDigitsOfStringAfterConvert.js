// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
    
    let transformation = ""
    
    for(let i = 0; i < s.length; i++){
        transformation += (s[i].charCodeAt(0) - 97 + 1).toString()
    }
    
    while(k > 0){
        let sum = 0
        for(let i = 0; i < transformation.length; i++){
            sum += transformation[i] * 1
        }
        
        transformation = "" + sum
        k--
    }
    
    return parseInt(transformation)
};