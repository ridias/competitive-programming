//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        nums[i] = [nums[i], i]
    }
    
    nums.sort((a, b) => a[0] - b[0])
    
    let left = 0
    let right = nums.length - 1
    
    while(left < right){
        let val = nums[left][0] + nums[right][0]
        if(val == target){
            return [nums[left][1], nums[right][1]]
        }else if(val < target){
            left++
        }else{
            right--
        }
    }
    
    return []
};