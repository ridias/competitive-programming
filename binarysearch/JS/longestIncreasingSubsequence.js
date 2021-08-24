//https://binarysearch.com/problems/Longest-Increasing-Subsequence

class Solution {
    solve(nums) {
        if(nums.length == 0) return 0
        let dp = []
        let max = 1
        for(let i = 0; i < nums.length; i++){
            dp.push(1)
        }

        for(let i = 0; i < nums.length; i++){
            let count = 0;
            for(let j = 0; j < i; j++){
                if(nums[i] > nums[j]){
                    dp[i] = Math.max(dp[j] + 1, dp[i]);
                    if(dp[i] > max) max = dp[i]
                }
            }
        }

        return max
    }
}