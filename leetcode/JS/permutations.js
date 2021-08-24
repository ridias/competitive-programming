//https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 var result = []
 var permute = function(nums) {
     result = []
     let hashMap = {}
     
     recursion(nums, hashMap)
     return result
     
 };
 
 var recursion = function(nums, map){
         
         let allNums = nums.join(";")
         if(map[allNums] != undefined){
             return;
         }
         
         if(map[allNums] == undefined){
             result.push(allNums.split(";"))
         }
     
         map[allNums] = 1
         for(let i = 1; i < nums.length; i++){
             let tmp = nums[i]
             nums[i] = nums[i - 1]
             nums[i - 1] = tmp
             
             recursion(nums, map)
             
             tmp = nums[i]
             nums[i] = nums[i - 1]
             nums[i - 1] = tmp
         }
     
         
     }