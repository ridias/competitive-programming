//https://binarysearch.com/problems/Majority-Vote

class Solution {
    solve(nums) {
        let map = {}
        let max = 0
        let count = 0
        let res = -1

        for(let i = 0; i < nums.length; i++){
            if(map[nums[i]] == undefined){
                map[nums[i]] = 1
            }else{
                map[nums[i]] += 1
            }

            if(map[nums[i]] > max){
                max = map[nums[i]]
                count = 1
                res = nums[i]
            }else if(map[nums[i]] == max){
                count++
            }
        }

        if(nums.length / 2 < max){
            if(count == 1) return res
        }

        return -1
    }
}