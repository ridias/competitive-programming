// https://leetcode.com/problems/delete-leaves-with-a-given-value/

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
 * @param {number} target
 * @return {TreeNode}
 */
 var removeLeafNodes = function(root, target) {
    if(root == null) return root
    
    dfs(root, target)
    if(root.val == target && root.left == null && root.right == null) return null
    return root
};

function dfs(root, target){
    if(root == null) 
        return;

    dfs(root.left, target)
    dfs(root.right, target)
    
    if(root.left != null){
        if(root.left.val == target && root.left.left == null && root.left.right == null) root.left = null
    }
    
    if(root.right != null){
        if(root.right.val == target && root.right.left == null && root.right.right == null) root.right = null
    }
}