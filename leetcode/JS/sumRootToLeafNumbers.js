//https://leetcode.com/problems/sum-root-to-leaf-numbers/

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
 * @return {number}
 */

 var response = []

 var sumNumbers = function(root) {
     response = []
     let total = 0
     dfs(root, "")
     for(let i = 0; i < response.length; i += 1){
         total += parseFloat(response[i])
     }
     
     return total
 };
 
 function dfs(root, value){
     
     if(root == null) return;
     
     if(root.left == null && root.right == null){
         value += root.val
         response.push(value)
         return;
     }
     
     value += root.val
     dfs(root.left, value)
     dfs(root.right, value)
 }