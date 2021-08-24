// https://leetcode.com/problems/count-the-number-of-consistent-strings/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let hashSet = new Set()
    let count = 0
    for(let i = 0; i < allowed.length; i++){
        hashSet.add(allowed[i])
    }
    
    for(let i = 0; i < words.length; i++){
        let found = true
        for(let j = 0; j < words[i].length; j++){
            if(!hashSet.has(words[i][j])){
                found = false
                break;
            }
        }
        
        if(found) count++
    }
    
    return count
};