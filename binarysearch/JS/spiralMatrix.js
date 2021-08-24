//https://binarysearch.com/problems/Spiral-Matrix

class Solution {
    solve(matrix) {
        if(matrix.length == 0) return matrix
        let left = 0
        let right = matrix[0].length - 1
        let top = 0
        let bottom = matrix.length - 1
        let result = []
        for(let i = 0; true; i++){

            if(top > bottom) break
            for(let j = left; j <= right; j++){
                result.push(matrix[top][j])
            }

            top++
            
            if(left > right) break
            for(let j = top; j < bottom; j++){
                result.push(matrix[j][right])
            }

            if(top > bottom) break
            for(let j = right; j >= left; j--){
                result.push(matrix[bottom][j])
            }

            right--
            bottom--


            if(left > right) break
            for(let j = bottom; j >= top; j--){
                result.push(matrix[j][left])
            }

            left++
        }

        return result
    }
}