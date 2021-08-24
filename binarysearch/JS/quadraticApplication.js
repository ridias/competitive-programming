//https://binarysearch.com/problems/Quadratic-Application

class Solution {
    solve(nums, a, b, c) {
        for(let i = 0; i < nums.length; i++){
            nums[i] = a * (nums[i] ** 2) + b * nums[i] + c
        }

        nums.sort((a, b) => a - b)
        return nums
    }
}