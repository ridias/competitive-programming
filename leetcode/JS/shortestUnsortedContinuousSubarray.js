// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    for(let i = 0; i < nums.length; i++){
        nums[i] = [nums[i], i]
    }
    
    nums.sort((a, b) => a[0] - b[0])
    let left = 0
    let right = nums.length - 1

    while(left < right){
        let movedLeft = false
        let movedRight = false
        if(nums[left][1] == left){
            left++
            movedLeft = true
        }
        
        if(nums[right][1] == right){
            right--
            movedRight = true
        }
        
        if(!movedLeft && !movedRight){
            return right - left + 1
        }
    }
    
    return 0
};