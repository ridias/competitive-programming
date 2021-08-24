// https://leetcode.com/problems/increasing-triplet-subsequence/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
    let small = Infinity
    let higher = Infinity
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= small){
            small = nums[i]
        }else if(nums[i] <= higher){
            higher = nums[i]
        }else{
            return true
        }
    }
    
    return false
};