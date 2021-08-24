// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

/**
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {
    let map = {}
    
    for(let i = 0; i < s.length; i++){
        map[s[i]] == undefined ? map[s[i]] = 1 : map[s[i]] += 1
    }
    
    let keys = Object.keys(map)
    let previous = -1
    
    if(keys.length > 0){
        previous = map[keys[0]]
    }
    
    
    for(let i = 1; i < keys.length; i++){
        if(previous != map[keys[i]]) return false
    }
    
     return true
};