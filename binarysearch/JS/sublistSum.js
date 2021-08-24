//https://binarysearch.com/problems/Sublist-Sum

class Solution {
    solve(nums) {
        if(nums.length == 0) return false
        let sum = 0
        let max = Math.max(nums[0], 0)
        let currentMax = Math.max(nums[0], 0)
        for(let i = 0; i < nums.length; i++){
            sum += nums[i]
        }

        for(let i = 1; i < nums.length; i++){
            max = Math.max(nums[i], max + nums[i])
            currentMax = Math.max(max, currentMax)
        }

        return sum < currentMax
    }
}