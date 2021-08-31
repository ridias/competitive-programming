// https://binarysearch.com/problems/Longest-Sublist-of-1s-After-K-Sets

class Solution {
    solve(nums, k) {
        let left = 0
        let right = 0
        let max = 0
        let count = 0

        while(right < nums.length){
            if(nums[right] == 0 && count < k){
                count++
            }else if(nums[right] == 0 && count == k){
                if(right - left > max) max = right - left
                while(nums[left] != 0 && left < nums.length){
                    left++
                }

                left++
            }

            right++
        }

        if(right - left > max)  max = right - left
        return max
    }
}