//https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    for(let i = 0; i < nums2.length; i++){
        nums1.push(nums2[i])
    }
    nums1 = nums1.sort((a, b) => { return a - b })
    
    return nums1.length % 2 === 1 ? nums1[Math.floor(nums1.length / 2)] : (nums1[Math.floor(nums1.length / 2) - 1] + nums1[Math.floor(nums1.length / 2)]) / 2  
};