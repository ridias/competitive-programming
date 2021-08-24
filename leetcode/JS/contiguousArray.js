// https://leetcode.com/problems/contiguous-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
    let map = {}
    let inc = 0
    let max = 0
    map[0] = [0]
    for(let i = 0; i < nums.length; i++){
        
        if(nums[i] == 0){
            inc--
        }else{
            inc++
        }
        
        if(map[inc] == undefined){
            map[inc] = [i+1]
        }else{
            map[inc].push(i)
            if(map[inc][map[inc].length - 1] - map[inc][0] + 1 > max){
                max = map[inc][map[inc].length - 1] - map[inc][0] + 1
            }
        }
    }

    return max    
};