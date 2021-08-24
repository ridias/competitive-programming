// https://leetcode.com/problems/longest-common-subsequence/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    
    
    let matrix = []
    
    for(let i = 0; i <= text1.length; i++){
        matrix.push(new Array(text2.length + 1).fill(0))
    }
    
    for(let i = 1; i <= text1.length; i++){
        
        for(let j = 1; j <= text2.length; j++){
            
            if(text1[i - 1] == text2[j - 1]){
                matrix[i][j] = matrix[i - 1][j - 1] + 1
            }else{
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1])
            }
        }
    }
    
    return matrix[matrix.length - 1][matrix[0].length - 1]
};