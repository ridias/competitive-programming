// https://binarysearch.com/problems/Smallest-Intersecting-Element

class Solution {
    solve(matrix) {
        if(matrix.length == 0) return -1
        let valuesToCheck = []

        for(let col = 0; col < matrix[0].length; col++){
            valuesToCheck.push(matrix[0][col])
        }

        for(let i = 0; i < valuesToCheck.length; i++){
            let target = valuesToCheck[i]
            let count = 0
            for(let row = 1; row < matrix.length; row++){

                let left = 0
                let right = matrix[row].length - 1
                let middle = -1
                while(left <= right){
                    middle = Math.floor((right + left) / 2)
                    if(matrix[row][middle] == target){
                        count++
                        break;
                    }else if(matrix[row][middle] < target){
                        left = middle + 1
                    }else{
                        right = middle - 1
                    }
                }
            }

            if(count == matrix.length - 1) return target
        }

        return -1
    }
}