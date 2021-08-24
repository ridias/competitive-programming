//https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let min = Infinity
    let result = -1
    for(let i = 0; i < nums.length; i++){
        
        let left = i + 1
        let right = nums.length - 1
        
        while(left < right){
            let value = nums[i] + nums[left] + nums[right]
            if(value == target){
                return target
            }else if(value < target){
                left++
            }else{
                right--
            }
            
            let abs = Math.abs(target - value)
            if(abs < min){
                min = abs
                result = value
            }   
        }
    }
    
    return result
};