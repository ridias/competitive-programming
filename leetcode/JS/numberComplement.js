// https://leetcode.com/problems/number-complement/

/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    if(num == 0) return 1
    let acc = 1
    let result = 0
    while(num > 0){
        let digit = !(num & 1)
        result += acc * digit
        acc *= 2
        num = num >> 1
    }
    
    return result
};