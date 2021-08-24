//https://binarysearch.com/problems/Sort-by-Frequency-and-Value

class Solution {
    solve(nums) {
        
        let map = {}
        for(let i = 0; i < nums.length; i++){
            map[nums[i]] == undefined ? map[nums[i]] = 1 : map[nums[i]] += 1 
        }

        let keys = Object.keys(map)
        let values = []
        for(let i = 0; i < keys.length; i++){
            values.push([keys[i], map[keys[i]]])
        }

        values.sort((a, b) => {
            if(a[1] == b[1]){
                return b[0] - a[0]
            }else{
                return b[1] - a[1]
            }
        })
        
        let result = []
        while(values.length > 0){
            let val = values.shift()
            let times = val[1]
            while(times > 0){
                result.push(val[0] * 1)
                times--
            }
        }

        return result
    }
}