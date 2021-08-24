//https://binarysearch.com/problems/Longest-Distinct-Sublist

class Solution {
    solve(nums) {
        if(nums.length == 0) return 0
        let max = 0
        let left = 0
        let right = left + 1
        let map = {}
        map[nums[left]] = 1
        while(right < nums.length && left < nums.length){

            if(map[nums[right]] == undefined){
                map[nums[right]] = 1
                right++
            }else if(map[nums[right]] == 0){
                map[nums[right]] = 1
                right++
            }else{
                if(right - left > max) max = right - left
                let val = nums[right]
                map[val] = 0
                while(left < right && val != nums[left]){
                    map[nums[left]] = 0
                    left++
                }

                left++
            }
        }

        if(right - left > max) max = right - left
        return max
    }
}