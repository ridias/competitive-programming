//https://leetcode.com/problems/path-sum/

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
 * @return {boolean}
 */

 var hasPathSum = function(root, targetSum) {
    if(root == null) return false;
    return dfs(root, 0, targetSum)
};

function dfs(root, sum, targetSum){
    if(root == null)
        return false;
        
    sum += root.val
    if(root.left == null && root.right == null){
        if(sum == targetSum) 
            return true
    }
    
    return dfs(root.left, sum, targetSum) || dfs(root.right, sum, targetSum)
}