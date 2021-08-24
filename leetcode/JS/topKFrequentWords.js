// https://leetcode.com/problems/top-k-frequent-words/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    let map = {}
    for(let i = 0; i < words.length; i++){
        map[words[i]] == undefined ? map[words[i]] = 1 : map[words[i]] += 1
    }
    
    let keys = Object.keys(map)
    let wordsQuantity = []
    for(let i = 0; i < keys.length; i++){
        wordsQuantity.push([keys[i], map[keys[i]]])
    }
    
    let result = []
    wordsQuantity.sort((a, b) => {
        if(a[1] == b[1]){
            return a[0].localeCompare(b[0])
        }else{
            return b[1] - a[1]
        }
    });
    
    for(let i = 0; i < wordsQuantity.length && i < k; i++){
        result.push(wordsQuantity[i][0])
    }
    
    return result
    
};