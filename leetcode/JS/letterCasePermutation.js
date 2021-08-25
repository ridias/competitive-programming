// https://leetcode.com/problems/letter-case-permutation/

/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
    let result = [s]
    recursion(s, 0, result)
    return result
    
};

var recursion = function(s, current, result){
    
    if(current >= s.length) return;
    
    for(let i = current; i < s.length; i++){
        
        if(/[a-z]/.test(s[i])){
            let tmp = s
            s = s.substring(0, i) + s[i].toUpperCase() + s.substring(i + 1, s.length)
            result.push(s)
            recursion(s, i + 1, result)
            s = tmp
        }else if(/[A-Z]/.test(s[i])){
            let tmp = s
            s = s.substring(0, i) + s[i].toLowerCase() + s.substring(i + 1, s.length)
            result.push(s)
            recursion(s, i + 1, result)
            s = tmp
        }
    }
}