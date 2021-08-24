//https://binarysearch.com/problems/Sum-Pairs-to-Target

class Solution {
    solve(nums, target) {
        let map = {}
        let count = 0
        for(let i = 0; i < nums.length; i++){
            if(map[nums[i]] == undefined){
                map[nums[i]] = 1
                map[target - nums[i]] = 0
            }else{
                map[nums[i]] += 1
            }

            if(map[target - nums[i]] > 0){
                map[nums[i]] -= 1
                map[target - nums[i]] -= 1
                count++
            }
        }

        return count
    }
}