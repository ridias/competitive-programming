//https://binarysearch.com/problems/Maximum-Unique-Sublist-Sum

class Solution {
    solve(nums) {
        let max = 0
        let total = 0
        let map = {}
        for(let i = 0; i < nums.length; i++){
            if(map[nums[i]] == undefined){
                max += nums[i]
                map[nums[i]] = i
            }else{
                total = Math.max(total, max)
                i = map[nums[i]]
                map = {}
                max = 0
            }
        }

        total = Math.max(total, max)
        return total
    }
}