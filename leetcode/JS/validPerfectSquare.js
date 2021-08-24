// https://leetcode.com/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    
    for(let i = 1; i * i <= num; i++){
        if(num % i == 0 && num / i == i){
            return true
        }
    }
    
    return false
    
};