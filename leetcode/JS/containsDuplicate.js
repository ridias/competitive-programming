// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let repeated = {}
    for(let i = 0, j = nums.length - 1; i < j; i++, j--){
        if(repeated[nums[i]] === undefined){ repeated[nums[i]] = 1 } else { return true }
        if(repeated[nums[j]] === undefined){ repeated[nums[j]] = 1 } else { return true }
    }
    return false
};