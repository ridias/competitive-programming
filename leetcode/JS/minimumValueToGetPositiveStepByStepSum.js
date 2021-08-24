// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let i = 1
    while(true){
        let sum = i;
        let found = true
        for(let j = 0; j < nums.length; j++){
            sum += nums[j]
            if(sum <= 0){
                found = false
                break;
            }
        }
        
        if(found) return i
        i++
    }
    
    return -1;
};