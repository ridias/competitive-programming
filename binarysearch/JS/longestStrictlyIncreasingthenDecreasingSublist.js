//https://binarysearch.com/problems/Longest-Strictly-Increasing-Then-Decreasing-Sublist

class Solution {
    solve(nums) {
        let isInc = false
        let isDec = false
        let count = 0
        let max = 0
        for(let i = 1; i < nums.length; i++){
            if(nums[i - 1] < nums[i] && !isInc){
                if(count > max) max = count
                count = 2
                isInc = true
                isDec = false
            }else if(nums[i - 1] < nums[i] && isInc){
                count++
            }else if(nums[i - 1] > nums[i] && isInc){
                count++
                isInc = false
                isDec = true
            }else if(nums[i - 1] > nums[i] && isDec){
                count++
            }else{
                if(count > max && isDec) max = count
                count = 0
                isInc = false
                isDec = false
            }
        }

        if(count > max && isDec) max = count

        return max
    }
}