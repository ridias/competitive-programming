// https://leetcode.com/problems/sum-of-left-leaves/

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
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
    let sum = 0
    if(root == null) return sum
    
    let queue = [root]
    
    while(queue.length > 0){
        let node = queue.shift()
        if(node.left != null){
            
            if(node.left.left == null && node.left.right == null){
                sum += node.left.val
            }
        }
        
        
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    
    return sum
};