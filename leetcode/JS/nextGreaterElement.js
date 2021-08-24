// https://leetcode.com/problems/next-greater-element-i/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    
    let result = []
    
    let map = {}
    
    for(let i = 0; i < nums2.length; i++){
        if(map[nums2[i]] == undefined) map[nums2[i]] = i
    }
    
    for(let i = 0; i < nums1.length; i++){
        
        find = false
        
        for(let j = map[nums1[i]]; j < nums2.length; j++){
            if(nums1[i] < nums2[j]){
                result.push(nums2[j])
                find = true
                break;
            }
        }
        
        if(!find) result.push(-1)
    }
    
    return result
};