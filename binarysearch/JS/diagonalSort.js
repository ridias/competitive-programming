//https://binarysearch.com/problems/Diagonal-Sort

class Solution {
    solve(matrix) {
        
        for(let col = 0; col < matrix[0].length - 1; col++){
            let arr = []
            let i = 0
            let j = col

            while(i < matrix.length && j < matrix[0].length){
                arr.push(matrix[i][j])
                i++
                j++
            }

            arr.sort((a, b) => a - b)
            i = 0
            j = col
            while(i < matrix.length && j < matrix[0].length){
                matrix[i][j] = arr.shift()
                i++
                j++
            }
        }

        for(let row = 1; row < matrix.length - 1; row++){
            let arr = []
            let i = row
            let j = 0
            
            while(i < matrix.length && j < matrix[0].length){
                arr.push(matrix[i][j])
                i++
                j++
            }

            arr.sort((a, b) => a - b)
            i = row
            j = 0
            while(i < matrix.length && j < matrix[0].length){
                matrix[i][j] = arr.shift()
                i++
                j++
            }
        }

        return matrix
    }
}