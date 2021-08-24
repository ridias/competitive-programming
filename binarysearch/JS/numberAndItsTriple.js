//https://binarysearch.com/problems/A-Number-and-Its-Triple

class Solution {
    solve(nums) {
        let set = new Set()
        for(let i = 0; i < nums.length; i++){
            if(set.has(nums[i] / 3) || set.has(nums[i] * 3)){
                return true
            }else{
                set.add(nums[i])
            }
        }
        
        return false
    }
}