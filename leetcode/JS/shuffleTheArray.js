// https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let response = []
    for(let i = 0; i < nums.length - n; i++){
        response.push(nums[i])
        response.push(nums[i+n])
    }
    
    return response
};