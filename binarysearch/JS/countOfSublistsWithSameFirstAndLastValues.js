//https://binarysearch.com/problems/Count-of-Sublists-with-Same-First-and-Last-Values

class Solution {
    solve(nums) {
        
        let count = 0
        let map = {}
        for(let i = 0; i < nums.length; i++){
            map[nums[i]] == undefined ? map[nums[i]] = 1 : map[nums[i]] += 1
        }

        let keys = Object.keys(map)

        for(let i = 0; i < keys.length; i++){
            let val = map[keys[i]] - 1
            count += (val * (val + 1) / 2)
        }

        count += nums.length
        return count
    }
}