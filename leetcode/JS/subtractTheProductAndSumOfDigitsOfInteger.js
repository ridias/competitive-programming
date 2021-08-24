// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let sum = 0
    let pro = 1
    
    while(n > 0){
        d = n % 10
        sum += d
        pro *= d
        
        n = Math.floor(n / 10)
        
    }
    
    return pro - sum
};