// https://leetcode.com/problems/majority-element-ii/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
    let limit = nums.length / 3;
    let map = {}
    let result = new Set()
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] == undefined){
            map[nums[i]] = 1
        }else{
            map[nums[i]] += 1
        }
        
        if(map[nums[i]] > limit){
            result.add(nums[i])
        }
    }
    
    return [...result]
};