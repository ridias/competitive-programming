// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let tmp = p.val
    p = Math.min(p.val, q.val)
    q = Math.max(tmp, q.val)
    
    while(root != null){
        if(p < root.val && root.val < q){
            return root
        }else if(p == root.val && root.val < q){
            return root
        }else if(p < root.val && root.val == q){
            return root
        }
        
        if(p < root.val && q < root.val){
            root = root.left
        }else if(p > root.val && q > root.val){
            root = root.right
        }
    }
    
    return root
};