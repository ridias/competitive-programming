// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    if(nums.length == 0) return 0
    let count = 1
    let max = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] < nums[i]){
            count++
        }else{
            if(count > max){
                max = count;
            }
            count = 1
        }
    }
    
    if(count > max) max = count
    return max
};