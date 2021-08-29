// https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

 var response = []

 var combine = function(n, k) {
     response = []
     recursion(1, n, k, [])
     return response;
 };
 
 var recursion = function(current, n, k, path){
     
     if(path.length == k){
         response.push([...path])
         return;
     }
     
     for(let i = current; i <= n; i++){
         path.push(i)
         recursion(i + 1, n, k, path);
         path.pop()
     }
     
 }


 /**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
    let result = []
    recursion(1,n, k, [], result)
    return result
};

var recursion = function(currentNumber, n, k, nums, result){
    if(nums.length > k){
        return;
    }
    
    if(nums.length == k){
        result.push([...nums])
    }
    
    for(let i = currentNumber; i <= n; i++){
        nums.push(i)
        recursion(i + 1, n, k, nums, result)
        nums.pop()
    }
}