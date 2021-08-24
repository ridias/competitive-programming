//https://binarysearch.com/problems/Longest-Sign-Alternating-Subsequence

class Solution {
    solve(nums) {
        if(nums.length == 0) return 0
        let count = 1
        let neg = nums[0] < 0 ? true : false
        for(let i = 1; i < nums.length; i++){

            if(neg && nums[i] > 0){
                count++
                neg = false
            }else if(!neg && nums[i] < 0){
                count++
                neg = true
            }
        }

        return count
    }
}