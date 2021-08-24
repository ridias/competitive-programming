//https://binarysearch.com/problems/Sum-of-Three-Numbers-Less-than-Target

class Solution {
    solve(nums, target) {
        let count = 0
        nums.sort((a, b) => a - b)
        
        for(let i = 0; i < nums.length; i++){
            let left = i + 1
            let right = nums.length - 1

            while(nums[i] + nums[left] + nums[right] >= target && left < right){
                right--
            }

            count += (right - left)
        }

        return count;
        
    }
}