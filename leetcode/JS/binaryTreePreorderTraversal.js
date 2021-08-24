//https://leetcode.com/problems/binary-tree-preorder-traversal/

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
 var preorderTraversal = function(root) {
     response = []
     if(root == null) return response
     traversal(root)
     return response;
 };
 
 function traversal(root){
     if(root == null) return;
     response.push(root.val)
     traversal(root.left)
     traversal(root.right)
 }