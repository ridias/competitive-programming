//https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    if(nums.length == 0) return 0
    let max = nums[0]
    for(let i = 0; i < nums.length; i++){
        let current = 1
        
        for(let j = i; j < nums.length; j++){
            current *= nums[j]
            if(current > max){
                max = current
            }
            
            if(current == 0) break;
        }
    }
    
    return max
};

