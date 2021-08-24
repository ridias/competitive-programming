//https://leetcode.com/problems/binary-tree-postorder-traversal/

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
 * @return {number[]}
 */

 var response = []

 var postorderTraversal = function(root) {
     response = []
     traversal(root)
     return response
 };
 
 function traversal(root){
     if(root == null) return;
     
     traversal(root.left)
     traversal(root.right)
     response.push(root.val)
 }