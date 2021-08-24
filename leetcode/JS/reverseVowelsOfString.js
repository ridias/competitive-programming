// https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    
    let i = 0
    let j = s.length - 1
    let r = ""
    while(i < s.length){
        
        if(/[AEIOUaeiou]/.test(s[i])){
            while(!/[AEIOUaeiou]/.test(s[j])) j--
            r += s[j]
            j--
            i++
        }else{
            r += s[i]
            i++
        }
    }
    
    return r
};