// https://leetcode.com/problems/unique-morse-code-words/

/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    let repeated = {}
    let count = 0
    let moore = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    for(let i = 0; i < words.length; i++){
        let word = ""
        for(let j = 0; j < words[i].length; j++){
            word += moore[words[i].charAt(j).charCodeAt(0) - 'a'.charCodeAt(0)]
        }
        if(repeated[word] === undefined){
            count++
            repeated[word] = 1
        }
    }
    return count
};