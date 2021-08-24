//https://binarysearch.com/problems/First-Missing-Positive

class Solution {
    solve(nums) {
        nums = [...new Set(nums.filter(x => x > 0))].sort((a, b) => a - b)
        if(nums.length == 0) return 1
        if(nums[0] > 1) return 1
        let result = -1
        for(let i = 1; i < nums.length; i++){
            if(nums[i] - nums[i - 1] != 1){
                result = nums[i - 1] + 1
                break;
            }
        }

        return result == -1 ? nums[nums.length - 1] + 1 : result
    }
}