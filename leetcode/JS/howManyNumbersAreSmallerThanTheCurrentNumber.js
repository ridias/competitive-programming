// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let result = new Array(nums.length).fill(0)
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] > nums[j]){
                result[i] += 1
            }else if(nums[i] < nums[j]){
                result[j] += 1
            }
        }
    }
    
    return result
};