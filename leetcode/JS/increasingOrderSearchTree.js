// https://leetcode.com/problems/increasing-order-search-tree/

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
 * @return {TreeNode}
 */

 var response = []

 var increasingBST = function(root) {
     response = []
     inorder(root)
     if(response.length == 0) return null
     let result = new TreeNode(response[0], null, null)
     
     let res = result
     
     for(let i = 1; i < response.length; i++){
         res.right = new TreeNode(response[i], null, null);
         res = res.right;
     }
     
     return result
     
     
 };
 
 function inorder(root){
     if(root == null) return;
     
     inorder(root.left)
     response.push(root.val)
     inorder(root.right)
 }