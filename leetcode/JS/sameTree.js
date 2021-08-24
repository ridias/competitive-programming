//https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if(p == null && q == null) return true
    if(p != null && q == null) return false
    if(p == null && q != null) return false
    let queueP = [p]
    let queueQ = [q]
    
    while(queueP.length > 0){
        let nodeP = queueP.shift()
        let nodeQ = queueQ.shift()
        
        if(nodeP.val != nodeQ.val) return false
        
        if(nodeP.left == null && nodeQ.left != null) return false
        if(nodeP.left != null && nodeQ.left == null) return false
        if(nodeP.right == null && nodeQ.right != null) return false
        if(nodeP.right != null && nodeQ.right == null) return false
        
        if(nodeP.left != null) queueP.push(nodeP.left)
        if(nodeP.right != null) queueP.push(nodeP.right)
        if(nodeQ.left != null) queueQ.push(nodeQ.left)
        if(nodeQ.right != null) queueQ.push(nodeQ.right)
    }
    
    if(queueQ.length > 0) return false
    return true
};