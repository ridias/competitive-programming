// https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/

/**
 * @param {string} word
 * @return {number}
 */
 var longestBeautifulSubstring = function(word) {
    let max = 0
    
    let left = 0
    let right = 0
    
    let steps = 0
    while(right < word.length){
        steps = 0
        if(word[right] == "a") steps++
        
        while(word[right] == "a" && right < word.length && steps == 1){
            right++    
        }
        
        if(word[right] == "e") steps++
        while(word[right] == "e" && right < word.length && steps == 2){
            right++
        }
        
        if(word[right] == "i") steps++
        while(word[right] == "i" && right < word.length && steps == 3){
            right++
        }
        
        if(word[right] == "o") steps++
        while(word[right] == "o" && right < word.length && steps == 4){
            right++
        }
        
        if(word[right] == "u") steps++
        while(word[right] == "u" && right < word.length && steps == 5){
            right++
        }
        
        if(steps == 5){
            if(max < right - left) max = right - left
            left = right
        }
        
        if(steps < 5){
            while(word[right] != "a" && right < word.length) right++
            left = right
        }
    }
    
    return max
};