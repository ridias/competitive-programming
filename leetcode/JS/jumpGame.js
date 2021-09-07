// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    
    let lastIndex = nums.length - 1
    
    for(let i = nums.length - 2; i >= 0; i--){
        if(nums[i] + i >= lastIndex){
            lastIndex = i
        }
    }
    
    return lastIndex == 0
};