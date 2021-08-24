// https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    
    s = s.split("").sort((a, b) => a.localeCompare(b)).join("")
    t = t.split("").sort((a, b) => a.localeCompare(b)).join("")
    
    if(s.length > t.length){
        tmp = s
        s = t
        t = tmp
    }
    
    let result = ""
    
    for(let i = 0; i < s.length; i++){
        if(s[i] != t[i] && s[i] == t[i+1]){
            return t[i]
        }
    }
    
    return t[t.length - 1]
};