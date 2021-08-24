//https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
    
    let i = 0;
    let j = s.length - 1
    
    while(i <= j){
        if(s[i] != s[j]) return false
        i++
        j--
    }
    return true
};