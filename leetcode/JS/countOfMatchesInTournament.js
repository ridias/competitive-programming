// https://leetcode.com/problems/count-of-matches-in-tournament/

/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
    
    let sum = 0;
    while(n > 1){
        sum += n % 2 == 0 ? n / 2 : (n + 1) / 2
        n = n % 2 == 0 ? n / 2 : (n - 1) / 2
    }
    
    return sum
};