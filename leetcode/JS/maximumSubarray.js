//https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let totalMax = nums[0]
    let currentMax = nums[0]
    
    for(let i = 1; i < nums.length; i++){
        currentMax = Math.max(nums[i], currentMax + nums[i])
        if(currentMax > totalMax){
            totalMax = currentMax
        }
    }
    
    return totalMax
};