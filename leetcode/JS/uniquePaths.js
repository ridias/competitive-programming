//https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    
    return numberOfPaths(m, n)
};

function numberOfPaths(m, n, memo = {}){
    if(memo[m + ";" + n]) return memo[m + ";" + n]
    if(m == 1 && n == 1) return 1
    if(m < 1 || n < 1) return 0
    
    const subSquare = numberOfPaths(m - 1, n, memo) + numberOfPaths(m, n - 1, memo)
    memo[m + ";" + n] = subSquare;
    memo[n + ";" + m] = subSquare
    return memo[m + ";" + n]
}