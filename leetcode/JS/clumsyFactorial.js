// https://leetcode.com/problems/clumsy-factorial/

/**
 * @param {number} n
 * @return {number}
 */
 var clumsy = function(n) {
    let result = n
    let total = 0
    
    while(n > 0){
        if(n - 1 > 0) result = result * (n - 1)
        if(n - 2 > 0) result = Math.floor(result / (n - 2)) < 0 ? Math.ceil(result / (n - 2)) : Math.floor(result / (n - 2))
        if(n - 3 > 0) total += (n - 3)
        total += result
        n -= 4
        result = -n
    }
    
    return total
};