//https://leetcode.com/problems/symmetric-tree/

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
 var isSymmetric = function(root) {
    if(root == null) return true
    
    let queueLeft = [root.left]
    let queueRight = [root.right]
    
    while(queueLeft.length > 0 && queueRight.length > 0){
        let nodeLeft = queueLeft.shift()
        let nodeRight = queueRight.shift()
        
        if(nodeLeft == null && nodeRight != null) return false
        if(nodeLeft != null && nodeRight == null) return false
        if(nodeLeft != null && nodeRight != null){
            if(nodeLeft.val != nodeRight.val) return false
            
            queueLeft.push(nodeLeft.left)
            queueLeft.push(nodeLeft.right)
            queueRight.push(nodeRight.right)
            queueRight.push(nodeRight.left)
        }
    }
    
    if(queueLeft.length > 0) return false
    if(queueRight.length > 0) return false
    
    return true
};