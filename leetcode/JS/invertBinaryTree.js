// https://leetcode.com/problems/invert-binary-tree/

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
 var invertTree = function(root) {
    
    if(root == null) return root
    if(root.left == null && root.right == null) return root
    
    let queue = [root]
    
    while(queue.length > 0){
        
        let node = queue.shift()
        
        let tmp = node.left
        node.left = node.right
        node.right = tmp
        
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    
    return root
};