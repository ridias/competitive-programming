// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 var response = []
 var combinationSum = function(candidates, target) {
     response = []
     candidates.sort((a, b) => a - b)
     recursion(candidates, target, candidates.length - 1, 0, [])
     return response;
 };
 
 var recursion = function(candidates, target, current, sum, arr){
     
     if(target < sum){
         return;
     }
     
     if(target == sum){
         response.push([...arr])
     }
     
     for(let i = current; i >= 0; i--){
         if(sum + candidates[i] <= target){
             arr.push(candidates[i]);
             recursion(candidates, target, i, sum + candidates[i], arr);
             arr.pop();
         }
     }
 }