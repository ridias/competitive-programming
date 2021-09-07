// https://leetcode.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    
    let dp = new Array(nums.length).fill(0)
    
    for(let i = nums.length - 2; i >= 0; i--){
        
        let min = nums.length
        let nextIndex = nums[i] + i >= nums.length ? nums.length - 1 : nums[i] + i
        for(let j = nextIndex; j > i; j--){
            
            if(dp[j] + 1 < min){
                min = dp[j] + 1
            }
        }
        
        dp[i] = min
    }
    
    return dp[0]
};