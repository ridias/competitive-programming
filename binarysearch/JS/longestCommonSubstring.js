//https://binarysearch.com/problems/Longest-Common-Substring

class Solution {
    solve(s0, s1) {
        let matrix = []
        let max = 0
        for(let i = 0; i < s0.length; i++){
            let row = []
            for(let j = 0; j < s1.length; j++){
                
                if(s0[i] == s1[j] && i - 1 >= 0 && j - 1 >= 0){
                    row.push(matrix[i - 1][j - 1] + 1)
                }else if(s0[i] == s1[j]){
                    row.push(1)
                }else{
                    row.push(0)
                }

                if(row[row.length - 1] > max) max = row[row.length - 1]
            }

            matrix.push(row)
        }

        return max
    }
}