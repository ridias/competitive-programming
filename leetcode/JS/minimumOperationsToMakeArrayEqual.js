// https://leetcode.com/problems/minimum-operations-to-make-array-equal/

/**
 * @param {number} n
 * @return {number}
 */
 var minOperations = function(n) {
    let arr = []
    let minOperations = 0
    for(let i = 0; i < n; i++){
        arr.push(i * 2 + 1)
    }
    
    let mid = arr.length % 2 == 0 ? arr[arr.length / 2] - 1 : arr[(arr.length - 1) / 2]
    
    for(let i = 0; i < arr.length; i++){
        minOperations += Math.abs(arr[i] - mid)
    }
    
    return minOperations / 2
};