//https://binarysearch.com/problems/Even-Frequency

class Solution {
    solve(nums) {
        nums.sort((a, b) => a - b)
        let count = 1
        let previous = nums[0]
        for(let i = 1; i < nums.length; i++){
            if(previous == nums[i]) 
                count++
            else{
                if(count % 2 == 1) return false
                previous = nums[i]
                count = 1
            }
        }

        if(count % 2 == 1) return false

        return true
        
    }
}