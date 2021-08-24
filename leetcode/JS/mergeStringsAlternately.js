// https://leetcode.com/problems/merge-strings-alternately/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    
    let res = ""
    let index = 0
    
    while(index < word1.length && index < word2.length){
        res += word1[index] + word2[index]
        index++
    }
    
    while(index < word1.length){
        res += word1[index]
        index++
    }
    
    while(index < word2.length){
        res += word2[index]
        index++
    }
    
    return res
};