//https://binarysearch.com/problems/Number-of-K-Length-Sublists-with-Average-at-Least-Target

class Solution {
    solve(nums, k, target) {
        
        let sum = 0
        let count = 0
        for(let i = 0; i < k; i++){
            sum += nums[i]
        }

        if(sum / k >= target) count++

        for(let i = k; i < nums.length; i++){
            sum -= nums[i - k]
            sum += nums[i]
            if(sum / k >= target) count++
        }

        return count
    }
}