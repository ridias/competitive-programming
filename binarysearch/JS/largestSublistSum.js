//https://binarysearch.com/problems/Largest-Sublist-Sum

class Solution {
    solve(nums) {
        let current = nums[0]
        let total = nums[0]

        for(let i = 1; i < nums.length; i++){
            current = Math.max(current + nums[i], nums[i])
            total = Math.max(total, current)
        }

        return total
    }
}