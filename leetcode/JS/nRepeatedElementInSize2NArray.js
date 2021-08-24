// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

/**
 * @param {number[]} A
 * @return {number}
 */
 var repeatedNTimes = function(A) {
    let times = A.length / 2
    let map = {}
    for(let i = 0; i < A.length; i++){
        map[A[i]] == undefined ? map[A[i]] = 1 : map[A[i]] += 1
        if(map[A[i]] == times) return A[i]
    }
};