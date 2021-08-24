//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let middle = -1
    
    while(left <= right){
        middle = Math.floor((right + left) / 2)
        if(nums[middle] == target){
            let i = middle
            let j = middle
            while(nums[i - 1] == target && i - 1 >= 0) i--
            while(nums[j + 1] == target && j + 1< nums.length) j++
            return [i, j]
        }else if(nums[middle] < target){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    
    
    return [-1, -1]
};