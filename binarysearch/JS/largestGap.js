//https://binarysearch.com/problems/Largest-Gap

class Solution {
    solve(nums) {
        nums.sort((a, b) => a - b)
        let max = 0
        for(let i = 1; i < nums.length; i++){
            max = Math.max(max, nums[i] - nums[i - 1])
        }

        return max
    }
}