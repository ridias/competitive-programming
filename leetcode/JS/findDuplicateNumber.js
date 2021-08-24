// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] == undefined){
            map[nums[i]] = 1
        }else{
            return nums[i]
        }
    }
    
    return -1
    
    
};