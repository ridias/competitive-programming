// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let map = {}
    let used = []
    if(s.length == 0 && t.length == 0) return true
    
    for(let i = 0; i < s.length; i++){
        if((map[s[i]] != t[i] && map[s[i]] != undefined) || (map[s[i]] == undefined && used.includes(t[i]))){
           return false
        }else if(map[s[i]] == undefined){
            map[s[i]] = t[i]
            used.push(t[i])
        }
    }
    return true
};