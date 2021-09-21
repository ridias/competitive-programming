// https://binarysearch.com/problems/Kth-Missing-Number

class Solution {
    solve(nums, k) {
        
        nums.sort((a, b) => a - b)
        k++
        let count = 0
        for(let i = 1; i < nums.length; i++){
            let diff = nums[i] - nums[i - 1] - 1
            if(diff >= 1){
                if(count + diff >= k){
                    let val = nums[i - 1]
                    return val + (k - count)
                }else{
                    count += diff
                }
            }
        }

        let last = nums[nums.length - 1]
        return last + (k - count)
    }
}