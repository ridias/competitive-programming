// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    
    let result = []
    
    const dfs = function(root){
        if(root == null) return;
        dfs(root.left)
        if(result.length >= k){
            return;
        }else{
            result.push(root.val)
        }
        dfs(root.right)
    }
    
    dfs(root)
    return result[k-1]
};