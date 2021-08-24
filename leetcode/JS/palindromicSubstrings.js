// https://leetcode.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let count = 0
    for(let i = 2; i <= s.length; i++){
        for(let j = 0; j < s.length - i + 1; j++){
            let text = s.substring(j, j + i)
            let textReversed = text.split("").reverse().join("")
            if(text == textReversed){
                count++
            }
        }
    }
    
    count += s.length
    return count
};