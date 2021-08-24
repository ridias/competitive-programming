//https://binarysearch.com/problems/Matrix-Search-Sequel

class Solution {
    solve(matrix, target) {
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][0] <= target && target <= matrix[i][matrix[i].length - 1]){

                let left = 0
                let right = matrix[i].length - 1
                let middle = -1
                while(left <= right){
                    middle = Math.floor((right + left) / 2)
                    if(matrix[i][middle] == target){
                        return true
                    }else if(matrix[i][middle] < target){
                        left = middle + 1
                    }else{
                        right = middle - 1
                    }
                }

                if(matrix[i][middle] == target) return true
            }
        }

        return false
    }
}