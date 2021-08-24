// https://leetcode.com/problems/find-bottom-left-tree-value/

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
 var findBottomLeftValue = function(root) {
    if(root == null) return null
    
    let queue = [[root, 1]]
    let maxLvl = 0
    let result = -1
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0]
        let lvl = cell[1]
        if(lvl > maxLvl){
            result = node.val
            maxLvl = lvl
        }
        
        if(node.left != null) queue.push([node.left, lvl + 1])
        if(node.right != null) queue.push([node.right, lvl + 1])
    }
    
    return result
};