// https://leetcode.com/problems/k-diff-pairs-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findPairs = function(nums, k) {
    nums.sort((a, b) => a - b)
    let set = new Set();
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        
        if(k == 0){
            if(nums[i] == nums[i+1] && !set.has(nums[i] + ";" + nums[i])){
                result++;
                set.add(nums[i] + ";" + nums[i])
            }else{
                continue;
            }
        }
        
        if(isValueInListBS(nums, nums[i] - k) && 
           !set.has((nums[i] - k) + ";" + nums[i]) &&
            !set.has((nums[i]) + ";" + (nums[i] - k))){
            set.add((nums[i] - k) + ";" + nums[i])
            set.add((nums[i]) + ";" + (nums[i] - k))
            result++;
        }
        
        if(isValueInListBS(nums, nums[i] + k) && 
           !set.has((nums[i] + k) + ";" + nums[i]) &&
           !set.has((nums[i]) + ";" + (nums[i] + k))){
            set.add((nums[i] + k) + ";" + nums[i])
            set.add((nums[i]) + ";" + (nums[i] + k))
            result++
        }
    }
    
    return result
};

function isValueInListBS(nums, value){
    let left = 0;
    let right = nums.length - 1
    let middle = -1;
    
    while(left <= right){
        middle = Math.floor((left + right) / 2)
        if(nums[middle] == value){
            return true;
        }else if(nums[middle] < value){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    
    if(nums[middle] == value) return true
    return false;
}