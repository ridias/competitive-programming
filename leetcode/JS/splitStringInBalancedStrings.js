// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let countR = 0
    let countL = 0
    let total = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] == "R"){
            countR++;
        }else if(s[i] == "L"){
            countL++;
        }
        
        if(countR == countL && countR > 0){
            total++;
            countR = 0
            countL = 0
        }
    }
    
    return total;
};