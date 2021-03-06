// https://leetcode.com/problems/contains-duplicate-iii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
    
    let count = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j - i <= k && j < nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) <= t){
                return true
            }
        }
    }
        
    return false
};