// https://leetcode.com/problems/maximum-number-of-words-you-can-type/

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
    let hashSet = new Set()
    let count = 0
    for(let i = 0; i < brokenLetters.length; i++){
        hashSet.add(brokenLetters[i])
    }
    
    text = text.split(' ')
    
    for(let i = 0; i < text.length; i++){
        let found = false
        for(let j = 0; j < text[i].length; j++){
            if(hashSet.has(text[i][j])){
                found = true
                break;
            }
        }
        
        if(!found){
            count++
        }
    }
    
    return count
};