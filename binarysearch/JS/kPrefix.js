//https://binarysearch.com/problems/K-Prefix

class Solution {
    solve(nums, k) {
        let max = nums[0] <= k ? 0 : -1
        for(let i = 1; i < nums.length; i++){
            nums[i] += nums[i - 1]
            if(nums[i] <= k && i > max){
                max = i
            }
        }

        return max
    }
}