// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 var isSumEqual = function(firstWord, secondWord, targetWord) {
    
    let firstNum = ""
    let secondNum = ""
    let targetNum = ""
    
    for(let i = 0; i < firstWord.length; i++){
        firstNum += firstWord[i].charCodeAt(0) - 97
    }
    
    for(let i = 0; i < secondWord.length; i++){
        secondNum += secondWord[i].charCodeAt(0) - 97
    }
    
    for(let i = 0; i < targetWord.length; i++){
        targetNum += targetWord[i].charCodeAt(0) - 97
    }
    
    return parseInt(firstNum) + parseInt(secondNum) == parseInt(targetNum)
    
    
};