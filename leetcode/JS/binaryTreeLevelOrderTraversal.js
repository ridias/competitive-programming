//https://leetcode.com/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(root == null) return []
    let queue = [[root, 1]]
    let levels = []
    let result = []
    let previousLvl = 1
    while(queue.length > 0){
        let node = queue.shift()
        let lvl = node[1]
        if(lvl == previousLvl){
            levels.push(node[0].val)
        }else{
            result.push(levels)
            levels = [node[0].val]
            previousLvl = lvl
        }
        
        if(node[0].left != null) queue.push([node[0].left, lvl + 1])
        if(node[0].right != null) queue.push([node[0].right, lvl + 1])
    }
    
    if(levels.length > 0) result.push(levels)
    
    return result
    
    
};