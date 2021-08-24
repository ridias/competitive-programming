// https://leetcode.com/problems/sum-of-digits-in-base-k/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var sumBase = function(n, k) {
    let res = 0
    while(n >= k){
        res = (n % k) + res
        n = Math.floor(n / k)
    }
    
    return res + n
};