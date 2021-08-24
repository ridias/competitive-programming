// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        let current = nums[i]
        if(current == k) count++
        for(let j = i+1; j < nums.length; j++){
            current += nums[j]
            if(current == k) count++
        }
    }
    
    return count
};