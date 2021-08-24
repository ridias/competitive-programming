//https://binarysearch.com/problems/Strictly-Increasing-or-Strictly-Decreasing

class Solution {
    solve(nums) {
        if(nums.length <= 1) return true
        let isDecreasing = nums[0] > nums[1]
        for(let i = 1; i < nums.length; i++){
            if(isDecreasing && nums[i -1] <= nums[i]) return false
            if(!isDecreasing && nums[i-1] >= nums[i]) return false
        }

        return true
    }
}