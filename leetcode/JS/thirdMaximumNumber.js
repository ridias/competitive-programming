// https://leetcode.com/problems/third-maximum-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    nums.sort((a, b) => b - a)
    let count = 1
    let previous = nums[0]
    let index = 1
    
    while(index < nums.length && count < 3){
        if(nums[index] != previous){
            count++
            previous = nums[index]
        }
        
        if(count == 3) return nums[index]
        index++
    }
    
    return Math.max(...nums)
};