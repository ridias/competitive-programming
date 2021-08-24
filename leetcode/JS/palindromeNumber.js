//https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    x = x.toString()
    let start = 0
    let end = x.length - 1
    while(start < end){
        if(x.charAt(start) !== x.charAt(end)) return false
        start++
        end--
    }
    return true
};