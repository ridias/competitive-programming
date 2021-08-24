// https://leetcode.com/problems/max-number-of-k-sum-pairs/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxOperations = function(nums, k) {
    let map = {}
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(map[(k - nums[i])] != undefined && map[k - nums[i]] > 0){
            count++
            map[k - nums[i]] -= 1
        }else{
            map[nums[i]] == undefined ? map[nums[i]] = 1 : map[nums[i]] += 1
        }
    }
    
    return count;
};