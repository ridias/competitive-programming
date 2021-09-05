// https://leetcode.com/problems/subarray-product-less-than-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
    if(nums.length == 0) return 0
    let count = 0
    for(let i = 0; i < nums.length; i++){
        let pro = nums[i]
        if(pro < k) count++
        
        for(let j = i + 1; j < nums.length; j++){
            if(pro >= k){
                break;
            }else{
                pro *= nums[j]
                if(pro < k) count++
            }
        }   
    }
    
    return count;
};