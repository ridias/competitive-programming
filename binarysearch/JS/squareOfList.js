// https://binarysearch.com/problems/Square-of-a-List/submissions/7004599

class Solution {
    solve(nums) {
        for(let i = 0; i < nums.length; i++){
            nums[i] *= nums[i]
        }

        return nums.sort((a, b) => a - b)
    }
}
