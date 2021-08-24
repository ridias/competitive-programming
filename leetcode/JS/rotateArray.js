//https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    k = k % nums.length
    if(nums.length == k) return nums;
    if(k == 0) return nums;
    
    let left = 0
    let right = nums.length - k - 1
    
    while(left < right){
        let tmp = nums[left]
        nums[left] = nums[right]
        nums[right] = tmp
        left++
        right--
    }
    
    left = nums.length - k
    right = nums.length - 1
    while(left < right){
        let tmp = nums[left]
        nums[left] = nums[right]
        nums[right] = tmp
        left++
        right--
    }
    
    left = 0
    right = nums.length - 1
    
    while(left < right){
        let tmp = nums[left]
        nums[left] = nums[right]
        nums[right] = tmp
        left++
        right--
    }

    
};