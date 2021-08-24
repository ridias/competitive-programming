// https://leetcode.com/problems/flipping-an-image/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
 var flipAndInvertImage = function(A) {
    for(let i = 0; i < A.length; i++){
        A[i] = A[i].reverse()
        for(let j = 0; j < A[i].length; j++){
            A[i][j] === 1 ? A[i][j] = 0 : A[i][j] = 1 
        }
    }
    return A
};