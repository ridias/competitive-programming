// https://binarysearch.com/problems/Largest-and-Smallest-Difference

class Solution {
    solve(nums, k) {
        nums.sort((a, b) => a - b)
        let min = Infinity
        let left = 0
        let right = k - 1

        while(right < nums.length){
            if(nums[right] - nums[left] < min){
                min = nums[right] - nums[left]
            }
            left++
            right++
        }

        return min
    }
}