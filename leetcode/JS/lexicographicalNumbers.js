// https://leetcode.com/problems/lexicographical-numbers/

/**
 * @param {number} n
 * @return {number[]}
 */
 var lexicalOrder = function(n) {
    let arr = []
    
    for(let i = 1; i <= n; i++){
        arr.push(i + "")
    }
    
    arr.sort((a , b) => a.localeCompare(b)).map(x => x * 1)
    return arr
};