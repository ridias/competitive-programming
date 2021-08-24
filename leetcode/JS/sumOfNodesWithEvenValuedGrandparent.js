// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/

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
 var sumEvenGrandparent = function(root) {
    let sum = 0
    if(root == null) return sum
    
    let queue = [root]
    
    while(queue.length > 0){
        let node = queue.shift()
        if(node.val % 2 == 0){
            if(node.left != null){
                if(node.left.left != null) sum += node.left.left.val
                if(node.left.right != null) sum += node.left.right.val
            }
            
            if(node.right != null){
                if(node.right.left != null) sum += node.right.left.val
                if(node.right.right != null) sum += node.right.right.val
            }
        }
        
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    
    return sum
    
};