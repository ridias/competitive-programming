//https://binarysearch.com/problems/Longest-Inequality-Alternating-Sublist

class Solution {
    solve(nums) {
        if(nums.length <= 1) return nums.length
        let lower = nums[0] < nums[1] 
        let max = 0
        let current = nums[0] == nums[1] ? 1 : 2

        for(let i = 2; i < nums.length; i++){
            if(nums[i - 1] <= nums[i] && lower){
                max = Math.max(max, current)
                current = nums[i - 1] == nums[i] ? 1 : 2
                lower = true
            }else if(nums[i - 1] >= nums[i] && !lower){
                max = Math.max(max,current)
                current = nums[i - 1] == nums[i] ? 1 : 2
                lower = false
            }else{
                lower = !lower
                current++
            }
        }

        max = Math.max(max, current)
        return max

    }
}