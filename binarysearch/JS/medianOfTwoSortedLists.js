//https://binarysearch.com/problems/Median-of-Two-Sorted-Lists

class Solution {
    solve(nums0, nums1) {
        let len = nums0.length + nums1.length
        for(let i = 0; i < nums1.length; i++){
            nums0.push(nums1[i])
        }

        nums0.sort((a, b) => a - b)

        return len % 2 == 1 ? nums0[Math.floor(len / 2)] : nums0[Math.floor(len / 2)]
    }
}