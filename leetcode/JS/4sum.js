//https://leetcode.com/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    let result = []
    let map = {}
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            let value = nums[i] + nums[j]
            let left = j + 1
            let right = nums.length - 1
            while(left < right){
                if(value + nums[left] + nums[right] == target){
                    let concat = nums[i] + ";" + nums[j] + ";" + nums[left] + ";" + nums[right]
                    if(map[concat] == undefined){
                        result.push([nums[i], nums[j], nums[left], nums[right]])
                        map[concat] = 1
                    }
                    left++
                }else if(value + nums[left] + nums[right] < target){
                    left++
                }else{
                    right--
                }
            }
        }
    }
    
    return result
};