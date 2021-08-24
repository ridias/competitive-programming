//https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let result = [nums[0]]
    
    for(let i = 1; i < nums.length; i++){
        let value = nums[i]
        let left = 0;
        let right = result.length - 1
        let middle = -1
        while(left <= right){
            middle = Math.floor((right + left) / 2);
            if(result[middle] == value){
                break;
            }else if(result[middle] < value){
                left = middle + 1
            }else{
                right = middle - 1
            }
        }

        if(result[middle] == value){
            result.splice(middle, 0, value)
        }else if(result[left] > value){ 
            result.splice(left, 0, value)
        }else{
            result.splice(right + 1, 0, value)
        }
    }
    
    for(let i = 0; i < result.length; i++){
        nums[i] = result[i]
    }
};