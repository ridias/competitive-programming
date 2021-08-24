// https://leetcode.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
 var wordPattern = function(pattern, str) {
    
    str = str.split(" ");
    if(str.length != pattern.length) return false
    let map = {}
    let map2 = {}
    for(let i = 0; i < pattern.length; i++){
        if(map[pattern[i]] == undefined && map2[str[i]] == undefined){
            map[pattern[i]] = str[i]
            map2[str[i]] = pattern[i]
        }else if(map[pattern[i]] != str[i] || map2[str[i]] != pattern[i]){
            return false
        }
    }
    
    return true
};