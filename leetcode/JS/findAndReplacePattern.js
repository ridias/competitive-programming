// https://leetcode.com/problems/find-and-replace-pattern/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    let result = []
    for(let i = 0; i < words.length; i++){
        let h = {}
        let used = new Set()
        let found = true
        for(let j = 0; j < words[i].length; j++){
            if(h[pattern[j]] == undefined && !used.has(words[i][j])){
                h[pattern[j]] = words[i][j]
                used.add(words[i][j])
            }else if(h[pattern[j]] !== words[i][j]){
                found = false
                break
            }
        }
        if(found){ result.push(words[i]) }
    }
    return result
};