//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = []
    let map = {}
    
    nums.sort((a, b) => a - b)
    
    for(let i = 0; i < nums.length; i++){
        let start = i+1
        let end = nums.length - 1
        
        while(start < end){
            let value = nums[i] + nums[start] + nums[end]
            if(value == 0){
                if(map[nums[i] + " "+ nums[start] + " " + nums[end]] == undefined){
                    result.push([nums[i], nums[start], nums[end]])
                    map[nums[i] + " "+ nums[start] + " " + nums[end]] = 1
                }
                end--
            }else if(value < 0){
                start++
            }else{
                end--
            }
        }
    }
    return result
};