// https://leetcode.com/problems/maximum-product-of-word-lengths/

/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
    
    words.sort((a, b) => b.length - a.length)
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].split("").sort((a, b) => a.localeCompare(b)).join("")    
    }
    
    let max = 0
    for(let i = 0; i < words.length; i++){
        for(let j = i + 1; j < words.length; j++){
            let found = true
            for(let k = 0; k < words[i].length; k++){
                if(isLetterInWord(words[j], words[i][k])){
                    found = false
                    break;
                }
            }
            
            if(found && max < words[i].length * words[j].length){
                max = words[i].length * words[j].length
            }
        }
    }
    
    return max
};

function isLetterInWord(word, letter){
    let left = 0
    let right = word.length - 1
    let middle = -1
    
    let posLetter = letter.charCodeAt() - 97
    while(left <= right){
        middle = Math.floor((left + right) / 2)
        let pos = word[middle].charCodeAt(0) - 97
        if(posLetter == pos){
            return true
        }else if(posLetter > pos){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    
    return false
}