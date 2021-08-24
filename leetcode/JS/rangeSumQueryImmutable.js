// https://leetcode.com/problems/range-sum-query-immutable/

/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
    this.nums = nums
    
    for(let i = 1; i < nums.length; i++){
        this.nums[i] += this.nums[i - 1]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left == 0 && right == 0) return this.nums[0]
    if(left == 0) return this.nums[right]
    return this.nums[right] - this.nums[left - 1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */