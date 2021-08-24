// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++){
        result[i] = 1
    }
    
    let max = 1
    
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                result[i] = Math.max(result[j] + 1, result[i])
                max = Math.max(result[i], max)
            }
        }
    }

    return max
};