// https://leetcode.com/problems/diagonal-traverse-ii/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
 var findDiagonalOrder = function(nums) {
    let max = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i].length > max) max = nums[i].length
    }
    
    
    let result = []
    for(let row = 0; row < nums.length; row++){
        let i = row;
        let j = 0;
        while(i >= 0 && j < max){
            if(nums[i][j] != undefined){
                result.push(nums[i][j])
            }
            i--
            j++
        }
    }
    
    for(let col = 1; col < max; col++){
        let i = nums.length - 1
        let j = col
        while(i >= 0 && j < max){
            if(nums[i][j] != undefined){
                result.push(nums[i][j])
            }
            i--
            j++
        }
    }
    
    return result
};