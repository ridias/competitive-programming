// https://leetcode.com/problems/maximum-length-of-repeated-subarray/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    
    let max = 0
    let cache = []
    for(let i = 0; i < nums1.length; i++){
        let row = []
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] == nums2[j]){
                if(i - 1 >= 0 && j - 1 >= 0){
                    row.push(cache[i - 1][j - 1] + 1)
                }else{
                    row.push(1)
                }
                
                max = Math.max(row[row.length - 1], max)
            }else{
                row.push(0)
            }
        }
        
        cache.push(row)
    }
    
    return max
};