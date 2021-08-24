// https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    
    if(n <= 0) return false
    
    while(n > 1){
        if(n % 2 == 0) n /= 2
        else if(n == 1) return true
        else return false
    }
    return true
};