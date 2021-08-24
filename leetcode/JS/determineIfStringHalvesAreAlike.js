// https://leetcode.com/problems/determine-if-string-halves-are-alike/

/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    let first = 0;
    let second = 0;
    for(let i = 0; i < s.length; i++){
        if(/[AEIOUaeiou]/.test(s[i])){
            i < s.length / 2 ? first += 1 : second += 1
        }
    }
    
    return first == second
};