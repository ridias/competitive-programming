// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let arr = [1]
    for(let i = 0; i < nums.length - 1; i++){
        arr.push(arr[arr.length - 1] * nums[i])
    }
    
    let result = [...arr]
    arr = [1]
    for(let i = nums.length - 1; i > 0; i--){
        arr.unshift(arr[0] * nums[i])
        result[result.length - arr.length] *= arr[0]
    }
    
    return result
};