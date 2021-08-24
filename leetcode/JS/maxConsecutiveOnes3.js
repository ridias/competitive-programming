// https://leetcode.com/problems/max-consecutive-ones-iii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    let left = 0
    let right = 0
    let max = 0
    
    
    while(right < nums.length){
        if(k < 0){
            
            if(right- left > max){
                max = right - left
            }
            
            while(nums[left] != 0 && left < nums.length){
                left++
            }
            
            k++
            left++
            right++
            
        }else if(nums[right] == 0 && k - 1 >= 0){
            k--
            right++
        }else if(nums[right] == 0){
            k--
        }else{
            right++
        }
    }
    
    if(right - left > max) max = right - left
    
    return max
};