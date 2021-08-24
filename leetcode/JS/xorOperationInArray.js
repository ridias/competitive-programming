// https://leetcode.com/problems/xor-operation-in-an-array/

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    let xor = start
    let sum = start
    let i = 1
    while(i < n){
        xor ^= (sum + 2)
        sum += 2
        i++
    }
    
    return xor
};