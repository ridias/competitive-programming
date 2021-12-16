// https://binarysearch.com/problems/Just-Average

class Solution {
    solve(nums, k) {
        
        let sum = 0
        for(let i = 0; i < nums.length; i++){
            sum += nums[i]
        }

        for(let i = 0; i < nums.length; i++){
            if((sum - nums[i]) / (nums.length - 1) == k) return true
        }

        return false
    }
}
