// https://binarysearch.com/problems/Delete-Repeated-Characters-with-Costs

class Solution {
    solve(s, nums) {
        if(s.length == 0) return 0
        
        let previous = s[0]
        let sum = 0
        let max = nums[0]
        for(let i = 1; i < s.length; i++){
            if(s[i] == previous && max < nums[i]){
                sum += max
                max = nums[i]
            }else if(s[i] == previous && max >= nums[i]){
                sum += nums[i]
            }else if(s[i] != previous){
                previous = s[i]
                max = nums[i]
            }
        }


        return sum;
    }
}
