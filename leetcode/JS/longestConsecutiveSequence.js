//https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0
    let arr = []
    for(let i = 0; i < nums.length; i++){
        let pos = getPosInsertionBinarySearch(arr, nums[i])
        if(pos != -1){
            arr.splice(pos, 0, nums[i])
        }
    }
    
    let max = 1;
    let count = 1;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] - arr[i - 1] == 1){
            count++
        }else{
            if(max < count) max = count
            count = 1
        }
    }
    
    if(count > max){
        max = count
    }
    
    return max
};

var getPosInsertionBinarySearch = function(nums, target){
    if(nums.length == 0) return 0
    let left = 0;
    let right = nums.length - 1;
    let middle = -1;
    
    while(left <= right){
        middle = Math.floor((right + left) / 2);
        if(nums[middle] == target){
            return -1
        }else if(nums[middle] < target){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    
    if(nums[middle] == target) return -1;
    return left;
}