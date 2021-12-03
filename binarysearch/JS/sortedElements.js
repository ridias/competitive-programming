// https://binarysearch.com/problems/Sorted-Elements

class Solution {
    solve(nums) {
        let cache = [...nums].sort((a, b) => a - b)
        let count = 0
        for(let i = 0; i < cache.length; i++){
            if(cache[i] == nums[i]) count++
        }

        return count
    }
}