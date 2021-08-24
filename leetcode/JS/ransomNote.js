// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;
    
    let map = {}
    for(let i = 0; i < magazine.length; i++){
        map[magazine[i]] == undefined ? map[magazine[i]] = 1 : map[magazine[i]] += 1
    }
    
    for(let i = 0; i < ransomNote.length; i++){
        if(map[ransomNote[i]] == undefined) return false
        else{
            map[ransomNote[i]] -= 1
            if(map[ransomNote[i]] < 0) return false
        }
    }
    
    return true
};