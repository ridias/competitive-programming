// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let cache = []
    
    for(let i = 0; i < s.length; i++){
        let startPosition = cache.length == 0 ? -1 : cache[cache.length - 1]
        find = false
        for(let j = startPosition + 1; j < t.length; j++){
            
            if(s[i] == t[j]){
                cache.push(j)
                find = true
                break;
            }
        }
        
        if(!find) return false
    }
    
    return true
};