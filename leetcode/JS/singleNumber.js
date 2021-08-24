//https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
    let map = {}
    let answer = -1
    
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] == undefined){
            map[nums[i]] = 1
        }else{
            map[nums[i]] += 1
        }
    }
    
    let keys = Object.keys(map)
    
    for(let i = 0; i < keys.length; i++){
        if(map[keys[i]] == 1) return parseInt(keys[i])
    }
    return answer
};