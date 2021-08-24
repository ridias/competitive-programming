// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(nums, queries) {
    
    let sumEvens = 0
    let total = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0) sumEvens += nums[i]
    }
    
    for(let i = 0; i < queries.length; i++){
        let isEven = Math.abs(nums[queries[i][1]]) % 2 == 0
        let num = nums[queries[i][1]]
        nums[queries[i][1]] += queries[i][0]
        
        if(isEven && Math.abs(nums[queries[i][1]]) % 2 == 1){
            sumEvens -= num
        }else if(isEven && Math.abs(nums[queries[i][1]]) % 2 == 0){
            sumEvens += queries[i][0]
        }else if(!isEven && Math.abs(nums[queries[i][1]]) % 2 == 0){
            sumEvens += nums[queries[i][1]]
        }
        
        total.push(sumEvens)
    }
    
    return total
};