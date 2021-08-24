// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let min = nums.length + 5
    
    let i = 0
    let j = i
    
    let sum = nums[i]
    
    while(i < nums.length && j < nums.length){
        if(sum >= target){
            if(j - i + 1 < min){
                min = j - i + 1
            }
            
            sum -= nums[i]
            i++
        }else{
            j++
            sum += nums[j]
        }
    }
    
    while(i < nums.length){
        sum -= nums[i]
        i++ 
        if(sum >= target){
            if(j - i + 1 < min){
                min = j - i + 1
            }
        }
    }
    
    
    return min == nums.length + 5 ? 0 : min
};