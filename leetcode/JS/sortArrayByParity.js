// https://leetcode.com/problems/sort-array-by-parity/

/**
 * @param {number[]} A
 * @return {number[]}
 */
 var sortArrayByParity = function(A) {
    for(let i = 0, j = A.length - 1; i < j; ){
        while(i < j && A[i] % 2 === 0){ i++ }
        while(i < j && A[j] % 2 !== 0){ j-- }
        if(i < j){
            let temp = A[i]
            A[i] = A[j]
            A[j] = temp
        }
    }
    return A
};