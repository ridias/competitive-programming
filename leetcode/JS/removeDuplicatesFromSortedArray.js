//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let num = nums[0]
    
    for(i = 1; i < nums.length; ){
        if(nums[i] == num){
            nums.splice(i, 1)
        }else{
            num = nums[i]
            i++
        }
    }
    
    return nums.length
};