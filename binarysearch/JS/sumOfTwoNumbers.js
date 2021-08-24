//https://binarysearch.com/problems/Sum-of-Two-Numbers

class Solution {
    solve(nums, k) {
        let set = new Set()
        for(let i = 0; i < nums.length; i++){
            if(!set.has(k - nums[i])){
                set.add(nums[i])
            }else{
                return true
            }
        }

        return false
    }
}