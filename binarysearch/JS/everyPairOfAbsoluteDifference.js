//https://binarysearch.com/problems/Every-Pair-of-Absolute-Difference

class Solution {
    solve(nums) {
        let total = 0
        let map = {}
        for(let i = 0; i < nums.length; i++){

            if(map[nums[i]] == undefined){
                let sum = 0
                for(let j = i + 1; j < nums.length; j++){
                    sum = sum + ((Math.abs(nums[i] - nums[j]) * 2))
                    sum = sum
                }
                map[nums[i]] = sum
                total += sum
            }else{
                total += map[nums[i]]
            }
        }

        return total % (10 ** 9 + 7)
    }
}