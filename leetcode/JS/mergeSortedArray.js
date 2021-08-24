//https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let result = []
    let copyNums1 = [...nums1]
    let i = 0
    let j = 0
    let pos = 0
    
    while(i < m && j < n){
        if(copyNums1[i] <= nums2[j]){
            nums1[pos] = copyNums1[i]
            i++
        }else{
            nums1[pos] = nums2[j]
            j++
        }
        
        pos++
    }

    while(i < m){
        nums1[pos] = copyNums1[i]
        i++
        pos++
    }

    while(j < n){
        nums1[pos] = nums2[j]
        j++
        pos++
    }
    
    return nums1
};