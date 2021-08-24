//https://binarysearch.com/problems/Largest-Sum-of-Non-Adjacent-Numbers

class Solution {
    solve(nums) {
        if(nums.length == 0) return 0
        if(nums.length == 1) return nums[0] >= 0 ? nums[0] : 0

        nums[0] = Math.max(nums[0], 0)
        nums[1] = Math.max(nums[1], 0, nums[0])
        for(let i = 2; i < nums.length; i++){
            if(nums[i] >= 0){
                nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1])
            }else{
                nums[i] = nums[i - 1]
            }
        }

        return nums[nums.length - 1]
    }
}