//https://leetcode.com/problems/first-missing-positive/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    let arr = []
    let map = {}
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] == undefined){
            map[nums[i]] = 1;
            arr.push(nums[i])
        }
    }
    
    nums = [...arr]
    
    nums.sort((a, b) => a - b)
    let pos = -1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            pos = i
            break;
        }
    }
    
    if(pos == -1) return 1
    var response = 1;
    
    if(nums.length == 1 && pos > -1) return nums[pos] + 1
    if(pos + 1 == nums.length) return nums[pos] + 1
    
    for(let i = pos + 1; i < nums.length; i++){
        if(nums[i] - nums[i - 1] != 1){
            response = nums[i - 1] + 1
            break;
        }
        
        if(i + 1 == nums.length){
            return nums[i] + 1
        }
    }
    
    return response
};