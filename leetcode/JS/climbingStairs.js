//https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    return climb(n)
};

function climb(n, memo = {}){
    if(n in memo) return memo[n]
    if(n < 2) return 1
    memo[n] = climb(n - 1, memo) + climb(n-2, memo)
    return memo[n]
}