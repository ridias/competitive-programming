//https://leetcode.com/problems/majority-element/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    
    let map = {}
    let max = 0
    let sol = 0
    for(let i = 0; i < nums.length; i++){
        map[nums[i]] == undefined ? map[nums[i]] = 1 : map[nums[i]] += 1
        if(map[nums[i]] > max){
            sol = nums[i]
            max = map[nums[i]]
        }
    }
    return sol
};