// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    
    let map = {}
    for(let i = 0; i < s.length; i++){
        map[s[i]] == undefined ? map[s[i]] = 1 : map[s[i]] += 1
    }
    
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] == 1) return i
    }
    
    return -1
};

