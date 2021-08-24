//https://leetcode.com/problems/path-sum-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

 var response = []

 var pathSum = function(root, targetSum) {
     response = []
     if(root == null) return []
     dfs(root, 0, targetSum, [])
     return response;
 };
 
 function dfs(root, sum, targetSum, result){
     if(root == null){
         return;
     }
     
     sum += root.val
     result.push(root.val)
     if(root.left == null && root.right == null){
         if(targetSum == sum){
             response.push([...result])
         }
     }
     
     dfs(root.left, sum, targetSum, result)
     dfs(root.right, sum, targetSum, result)
     result.pop()
     return;
 }