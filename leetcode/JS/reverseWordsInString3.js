// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let word = ""
    let res = ""
    for(let i = 0; i < s.length; i++){
        if(s[i] == " "){
            res += word
            word = ""
            res += s[i]
        }else{
            word = s[i] + word
        }
    }
    
    if(word.length > 0){
        res += word
    }
    
    return res
};