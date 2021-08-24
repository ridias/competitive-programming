// https://leetcode.com/problems/decompress-run-length-encoded-list/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    
    let result = []
    for(let i = 0; i < nums.length; i += 2){
        times = nums[i]
        while(times > 0){
            result.push(nums[i+1])
            times--
        }
    }
    
    return result
};