//https://leetcode.com/problems/maximum-gap/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function(nums) {
    let max = 0
    if(nums.length < 2) return 0
    nums.sort((a, b) => a - b)
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] - nums[i - 1] > max){
            max = nums[i] - nums[i - 1]
        }
    }
    
    return max
};