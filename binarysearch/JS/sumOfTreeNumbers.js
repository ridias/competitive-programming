//https://binarysearch.com/problems/Sum-of-Three-Numbers

class Solution {
    solve(nums, k) {
        if(nums.length < 3) return false
        nums.sort((a, b) => a - b)
        for(let i = 0; i < nums.length; i++){

            let left = i + 1
            let right = nums.length - 1
            while(left < right){
                let value = nums[i] + nums[left] + nums[right]
                if(value == k){
                    return true
                }else if(value < k){
                    left++
                }else{
                    right--
                }
            }
        }

        return false
    }
}