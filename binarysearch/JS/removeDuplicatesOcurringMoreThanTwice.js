//https://binarysearch.com/problems/Remove-Duplicates-Occurring-More-Than-Twice

class Solution {
    solve(nums) {
        if(nums.length == 0) return nums
        let result = []
        let previous = nums[0]
        let count = 1

        result.push(nums[0])

        for(let i = 1; i < nums.length; i++){
            if(nums[i] == previous && count < 2){
                result.push(nums[i])
                count++
            }else if(nums[i] != previous){
                previous = nums[i]
                count = 1
                result.push(nums[i])
            }
        }

        return result
    }
}