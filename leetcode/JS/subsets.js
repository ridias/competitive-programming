// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let set = new Set()
    recursion(nums, 0, [], set)
    let result = [...set].map(x => x.split(";").map(e => parseInt(e)))
    result.push([])
    return result
};


var recursion = function(nums, index, currentArray, memo){
    if(index >= nums.length) return; 
    
    for(let i = index; i < nums.length; i++){
        currentArray.push(nums[i])
        let joinedCurrentArray = currentArray.join(";")
        if(!memo.has(joinedCurrentArray)){
            memo.add(joinedCurrentArray);
        }
        
        recursion(nums, i + 1, currentArray, memo)
        currentArray.pop()
    }
}
