// https://leetcode.com/problems/reverse-only-letters/

/**
 * @param {string} S
 * @return {string}
 */
 var reverseOnlyLetters = function(S) {
    
    S = S.split("")
    
    let i = 0;
    let j = S.length - 1
    
    while(i < j){
        
        while(!/[A-Za-z]/.test(S[i]) && i < j){
            i++
        }
        
         while(!/[A-Za-z]/.test(S[j]) && i < j){
            j--
        }
        
        if(i < j){
            tmp = S[i]
            S[i] = S[j]
            S[j] = tmp
            i++
            j--
        }
    }
    
    return S.join("")
};