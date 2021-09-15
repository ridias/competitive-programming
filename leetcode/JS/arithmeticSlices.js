// https://leetcode.com/problems/arithmetic-slices/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    let total = 0
    for(let i = 0; i < nums.length - 1; i++){
        
        let diff = nums[i + 1] - nums[i]
        let count = 1
        let previous = -1
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] - nums[j - 1] == diff){
                count++
            }else{
                break
            }
            
            if(previous != count && count > 2){
                total++
                previous = count
            }
        }
    }
    
    return total
};