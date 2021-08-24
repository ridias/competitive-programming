//https://binarysearch.com/problems/Unique-Occurrences

class Solution {
    solve(nums) {
        let map = {}
        for(let i = 0; i < nums.length; i++){
            map[nums[i]] == undefined ? map[nums[i]] = 1 : map[nums[i]] += 1
        }

        let set = new Set()
        let keys = Object.keys(map)

        for(let i = 0; i < keys.length; i++){
            let occ = map[keys[i]]
            if(set.has(occ)){
                return false
            }else{
                set.add(occ)
            }
        }

        return true
    }
}