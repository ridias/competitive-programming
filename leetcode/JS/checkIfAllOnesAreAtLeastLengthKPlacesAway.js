// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var kLengthApart = function(nums, k) {
    
    let pos = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1) pos.push(i)
        
        if(pos.length > 1){
            if(pos[pos.length - 1] - pos[pos.length - 2] - 1 < k) 
                return false
        }
    }
    
    return true
};