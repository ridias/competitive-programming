//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let count = 0
    while(nums[0] >= nums[nums.length - 1] && count < nums.length){
        nums.unshift(nums.pop())
        count++
    }
    return nums[0]
};