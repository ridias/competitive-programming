//https://binarysearch.com/problems/Max-Product-of-Two-Numbers

class Solution {
    solve(nums) {
        let max = -Infinity
        nums.sort((a, b) => a - b)
        for(let i = 1; i < nums.length; i++){
            max = Math.max(max, nums[i-1] * nums[i])
        }

        return max
    }
}