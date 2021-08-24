// https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNonDuplicate = function(nums) {
  
    let result = nums[0]
    
    for(let i = 1; i < nums.length; i++){
        result ^= nums[i]
    }
    
    return result
};