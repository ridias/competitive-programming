function solution(nums, k) {
    nums = nums.sort((a, b) =>{ return a - b})
    return nums[nums.length - k]
}
