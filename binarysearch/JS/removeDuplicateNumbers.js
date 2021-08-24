//https://binarysearch.com/problems/Remove-Duplicate-Numbers

class Solution {
    solve(nums) {
        let map = {}
        for(let i = 0; i < nums.length; i++){
            map[nums[i]] == undefined ? map[nums[i]] = 1 : map[nums[i]] += 1
        }

        let result = []
        for(let  i= 0; i < nums.length; i++){
            if(map[nums[i]] == 1){
                result.push(nums[i])
            }
        }

        return result
    }
}