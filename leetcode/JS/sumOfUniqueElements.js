// https://leetcode.com/problems/sum-of-unique-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    let sum = 0;
    let map = {}
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] == undefined){
            map[nums[i]] = 1
            sum += nums[i]
        }else if(map[nums[i]] == 1){
            map[nums[i]] -= 1
            sum -= nums[i]
        }
    }
    
    return sum
};