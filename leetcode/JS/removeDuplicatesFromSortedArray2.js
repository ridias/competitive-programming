//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        
        if(map[nums[i]] == undefined){
            map[nums[i]] = 1
        }else{
            map[nums[i]] += 1
        }
        
        if(map[nums[i]] > 2){
            nums.splice(i, 1)
            i--
        }
    }
    
    return nums.length
};