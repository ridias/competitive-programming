// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

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
 var total = 0
 var bstToGst = function(root) {
     total = 0
     traversal(root)
     return root
 };
 
 function traversal(root){
     if(root == null) return;
     traversal(root.right)
     total += root.val
     root.val = total
     traversal(root.left)
 }