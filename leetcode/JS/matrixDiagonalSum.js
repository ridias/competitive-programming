// https://leetcode.com/problems/matrix-diagonal-sum/

/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let sum = 0;
    for(let i = 0; i < mat.length; i++){
        let rightPos = mat[i].length - 1 - i
        if(i == rightPos){
            sum += mat[i][i]
        }else{
            sum += mat[i][i] + mat[i][mat[i].length - 1 - i]
        }
    }
    
    return sum
    
};