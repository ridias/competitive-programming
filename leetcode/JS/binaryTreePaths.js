// https://leetcode.com/problems/binary-tree-paths/

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
 * @return {string[]}
 */
 var result = []

 var binaryTreePaths = function(root) {
     result = []    
     dfs(root, "")
     return result
 };
 
 function dfs(root, response){
     if(root == null){
         return;
     }
     
     if(root.left == null && root.right == null){
         response += root.val
         result.push(response)
         return;
     }
     
     response += root.val + "->"
     dfs(root.left, response)
     dfs(root.right, response)
 }