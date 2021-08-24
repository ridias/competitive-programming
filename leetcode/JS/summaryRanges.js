// https://leetcode.com/problems/summary-ranges/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    let start = nums[0]
    let result = []
    
    if(nums.length == 0) return result
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i+1] - nums[i] > 1){
            if(start == nums[i]){
                result.push("" + start)
            }else{
                result.push(start + "->" + nums[i])
            }
            start = nums[i+1]
        }
    }
    
    if(nums[nums.length - 1] - nums[nums.length - 2] == 1){
        result.push(start + "->" + nums[nums.length - 1])
    }else{
        if(start == nums[nums.length - 1]){
                result.push("" + start)
            }else{
                result.push(start + "->" + nums[nums.length - 1])
            }
    }
    
    return result
};