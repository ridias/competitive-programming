// https://leetcode.com/problems/arithmetic-subarrays/

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
 var checkArithmeticSubarrays = function(nums, l, r) {
    let result = []
    
    for(let i = 0; i < l.length; i++){
        
        let subNums = []
        let left = l[i]
        let right = r[i]
        
        for(let j = left; j <= right; j++){
            subNums.push(nums[j])
        }
        
        subNums.sort((a, b) => a - b);
        let diff = subNums[1] - subNums[0]
        let isAritmetic = true
        for(let j = 2; j < subNums.length; j++){
            if(subNums[j] - subNums[j - 1] != diff){
                isAritmetic = false
                break;
            }
        }
        result.push(isAritmetic)
    }
    
    return result
};