//https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    
    let map = {}
    
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] == undefined) map[nums[i]] = i 
    }
    
    nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length - 1
    let middle = -1
    while(left <= right){
        
        middle = Math.floor((left + right) / 2)
        
        if(nums[middle] == target){
            return map[target]
        }else if(nums[middle] < target){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    
    if(nums[middle] == target) return map[target]
    
    return -1
    
};