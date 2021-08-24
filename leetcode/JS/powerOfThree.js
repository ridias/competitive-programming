// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    
    if(n == 1) return true
    if(n <= 2) return false
    
    while(n > 1){
        
        while(n % 3 == 0 && n > 1) n /= 3
        if(n % 3 != 0 && n != 1) return false
    }
    return true
};