// https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} A
 * @return {number}
 */
 var peakIndexInMountainArray = function(A) {
    for(let i = 0; i < A.length - 1; i++){
        if(A[i] > A[i+1]){
            return i
        }
    }
    return A.length - 1
};