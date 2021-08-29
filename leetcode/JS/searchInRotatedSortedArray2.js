// https://leetcode.com/problems/search-in-rotated-sorted-array-ii

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
    
    nums.sort((a, b) => a - b)
    
    let left = 0
    let right = nums.length - 1
    
    let middle = -1
    
    while(left <= right){
        middle = Math.floor((left + right) / 2)
        if(nums[middle] == target){
            return true
        }else if(nums[middle] < target){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }

    return false
    
};