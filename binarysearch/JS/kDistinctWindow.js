//https://binarysearch.com/problems/K-Distinct-Window

class Solution {
    solve(nums, k) {
        
        let distinct = 0
        let map = {}
        let res = []
        for(let i = 0; i < k; i++){
            if(map[nums[i]] == undefined){
                distinct++
                map[nums[i]] = 1
            }else{
                map[nums[i]] += 1
            }
        }
        res.push(distinct)

        for(let i = k; i < nums.length; i++){
            map[nums[i - k]] -= 1
            if(map[nums[i - k]] == 0) distinct--
            
            if(map[nums[i]] == undefined){
                distinct++
                map[nums[i]] = 1
            }else if(map[nums[i]] == 0){
                distinct++
                map[nums[i]] += 1
            }else{
                map[nums[i]] += 1
            }

            res.push(distinct)
        }

        return res
    }
}