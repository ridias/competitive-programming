//https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

 var respons = []

 var flatten = function(root) {
     if(root == null) return root
     response = []  
     traversal(root)
     root.left = null
     root.right = null
     
     let head = root
     
     for(let i = 1; i < response.length; i++){
         head.right = new TreeNode(response[i], null, null)
         head = head.right
     }
     
     return root
 };
 
 function traversal(root){
     if(root == null) return;
     
     response.push(root.val)
     traversal(root.left)
     traversal(root.right)
 }