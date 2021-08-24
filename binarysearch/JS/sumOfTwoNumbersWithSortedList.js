//https://binarysearch.com/problems/Sum-of-Two-Numbers-with-Sorted-List

class Solution {
    solve(nums, k) {
        let left = 0
        let right = nums.length - 1

        while(left < right){
            let sum = nums[left] + nums[right]
            if(sum == k) return true
            else if(sum < k) left++
            else right--
        }

        return false
    }
}