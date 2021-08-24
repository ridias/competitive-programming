// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let total = nums.length * (nums.length + 1) / 2
    for(let i = 0; i < nums.length; i++){
        total -= nums[i]
    }
    return total
};