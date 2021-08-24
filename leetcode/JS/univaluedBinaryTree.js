// https://leetcode.com/problems/univalued-binary-tree/

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
 * @return {boolean}
 */
 var isUnivalTree = function(root) {
    
    let val = root.val
    let queue = [root]
    
    while(queue.length > 0){
        let node = queue.shift()
        if(node.val != val) return false
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    
    return true
};