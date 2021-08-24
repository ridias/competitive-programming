//https://leetcode.com/problems/binary-tree-inorder-traversal/

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
 var inorderTraversal = function(root) {
    let result = []
    if(root == null) return result
    traversal(root, result)
    return result  
};

function traversal(root, result){
    if(root == null) return;
    traversal(root.left, result)
    result.push(root.val)
    traversal(root.right, result)
}