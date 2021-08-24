// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let zero = 0
    let notZero = 0
    
    while(zero < nums.length && nums[zero] != 0){
        zero++
    }

    notZero = zero + 1
    while(notZero < nums.length && nums[notZero] == 0){
        notZero++
    }
    
    
    while(true){
        while(zero < nums.length && nums[zero] != 0){
            zero++
        }

        while(notZero < nums.length && nums[notZero] == 0){
            notZero++
        }
        
        if(nums[zero] == 0 && nums[notZero] != 0 && notZero < nums.length && zero < nums.length && notZero > zero){
            let tmp = nums[zero]
            nums[zero] = nums[notZero]
            nums[notZero] = tmp
        }
        
        if(notZero >= nums.length || notZero < zero) break
        
    }
};