// https://leetcode.com/problems/closest-divisors/

/**
 * @param {number} num
 * @return {number[]}
 */
 var closestDivisors = function(num) {
    
    let min = Infinity
    let result = []
    for(let i = 1; i * i <= (num + 1); i++){
        if((num + 1) % i == 0 && (num + 1) / i - i < min){
            min = (num + 1) / i - i
            result[0] = i
            result[1] = (num + 1) / i
        }    
    }
    
    for(let i = 1; i * i <= (num + 2); i++){
        if((num + 2) % i == 0 && (num + 2) / i - i < min){
            min = (num + 2) / i - i
            result[0] = i
            result[1] = (num + 1) / i
        }   
    }
    
    return result
};