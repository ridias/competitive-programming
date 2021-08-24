//https://leetcode.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    let max = nums[0]
    let pos = 0
    
    for(let i = 1; i < nums.length; i++){
        if(max < nums[i]){
            max = nums[i]
            pos = i
        }
        
        if(nums[i-1] < nums[i] && nums[i] > nums[i+1]) return i
    }
    
    
    
    return pos
};