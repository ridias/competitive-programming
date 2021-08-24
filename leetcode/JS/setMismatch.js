// https://leetcode.com/problems/set-mismatch/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let support = new Array(nums.length).fill(-1)
    let duplicate = -1;
    let response = []
    for(let i = 0; i < nums.length; i++){
        if(support[nums[i] - 1] == nums[i]){
            duplicate = nums[i]
        }
        
        support[nums[i] - 1] = nums[i]
    }
    
    for(let i = 0; i < support.length; i++){
        if(support[i] == -1){
            response = [duplicate, i + 1]
            break;
        }
    }
    
    return response
};