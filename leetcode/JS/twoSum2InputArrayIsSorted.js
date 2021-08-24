//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    
    while(left < right){
        
        let val = numbers[left] + numbers[right]
        if(val == target){
            return [left + 1, right + 1]
        }else if(val < target){
            left++
        }else{
            right--
        }
    }
    
    return [] 
};