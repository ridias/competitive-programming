// https://leetcode.com/problems/queens-that-can-attack-the-king/submissions/

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    
    let bounds = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
    queens.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0])
    
    let result = []
    
    for(let i = 0; i < bounds.length; i++){
        
        let row = king[0]
        let col = king[1]
        
        while(row < 8 && row >= 0 && col < 8 && col >= 0){
            if(isPositionQueenInArray(queens, row, col)){
                result.push([row, col])
                break;
            }
            
            row += bounds[i][0]
            col += bounds[i][1]
        }
    }
    
    return result
};

var isPositionQueenInArray = function(arr, row, col){
    
    let left = 0
    let right = arr.length - 1
    let middle = -1
    
    while(left <= right){
        middle = Math.floor((right + left) / 2)
        if(arr[middle][0] == row && arr[middle][1] == col){
            return true
        }else if(arr[middle][0] == row && arr[middle][1] < col){
            left = middle + 1
        }else if(arr[middle][0] == row && arr[middle][1] > col){
            right = middle - 1
        }else if(arr[middle][0] < row){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    
    return false
}
