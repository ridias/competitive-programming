// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    if(n == 0) return 0
    if(n <= 2) return 1
    
    let antePrevious = 0
    let previous = 1
    let current = 1
    
    while(n > 2){
        let val = antePrevious + previous + current
        antePrevious = previous
        previous = current
        current = val
        n--
    }
    
    return current
    
};