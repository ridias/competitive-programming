//https://leetcode.com/problems/unique-binary-search-trees/

/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    return fact(2 * n) / (fact(n) * fact(n + 1))
};

function fact(n){
    if(n < 2) return 1
    let result = 1;
    
    let i = 2;
    
    while(i <= n){
        result *= i
        i++
    }
    
    return result;
    
}