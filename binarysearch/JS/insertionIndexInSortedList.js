//https://binarysearch.com/problems/Insertion-Index-in-Sorted-List

class Solution {
    solve(nums, target) {
        let left = 0
        let right = nums.length - 1
        let middle = -1

        while(left <= right){
            middle = Math.floor((right + left) / 2)
            if(nums[middle] <= target){
                left = middle + 1
            }else{
                right = middle - 1
            }
        }

        return left
    }
}