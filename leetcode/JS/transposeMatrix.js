// https://leetcode.com/problems/transpose-matrix/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
 var transpose = function(A) {
    let result = generateArray(A.length, A[0].length)
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length; j++){
            result[j][i] = A[i][j]
        }
    }
    return result
};

function generateArray(row, col){
    let result = []
    for(let i = 0; i < col; i++){
        result.push([])
        for(let j = 0; j < row; j++){
            result[i][j] = 0
        }
    }
    return result
}