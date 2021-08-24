// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    
    let map = {}
    
    for(let i = 0; i < nums.length; i++){
        map[nums[i]] == undefined ? map[nums[i]] = 1 : map[nums[i]] += 1
    }
    
    let result = []
    let keys = Object.keys(map)
    
    for(let i = 0; i < keys.length; i++){
        result.push([parseInt(keys[i]), map[keys[i]]])
    }
    
    result.sort((a, b) => b[1] == a[1] ? b[0] - a[0] : b[1] - a[1])
    let finalResult = []
    for(let i = 0; i < k && i < result.length; i++){
        finalResult.push(result[i][0])
    }
    
    return finalResult
};