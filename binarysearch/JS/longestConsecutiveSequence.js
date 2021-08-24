//https://binarysearch.com/problems/Longest-Consecutive-Sequence

class Solution {
    solve(nums) {
        if(nums.length == 0) return 0
        let map = {}
        let max = 0
        for(let i = 0; i < nums.length; i++){
            map[nums[i]] == undefined ? map[nums[i]] = 1 : map[nums[i]] += 1 
        }

        for(let i = 0; i < nums.length; i++){
            let count = 1
            let previous = nums[i] - 1
            let after = nums[i] + 1
            while(map[previous]){
                count++
                delete map[previous]
                previous--
            }

            while(map[after]){
                count++
                delete map[after]
                after++
            }

            if(count > max) max = count

        }   

        return max
    }
}