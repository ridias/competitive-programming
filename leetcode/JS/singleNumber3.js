// https://leetcode.com/problems/single-number-iii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        map[nums[i]] == undefined ? map[nums[i]] = 1 : map[nums[i]] += 1 
    }
    
    let result = []
    let keys = Object.keys(map)
    for(let i = 0; i < keys.length; i++){
        if(map[keys[i]] == 1){
            result.push(keys[i])
        }
    }
    
    return result
};