// https://leetcode.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let arr = []
    let map = {}
    
    for(let i = 0; i < nums.length; i++){
        !map[nums[i]] ? map[nums[i]] = 1 : arr.push(nums[i])
    }
    return arr
};