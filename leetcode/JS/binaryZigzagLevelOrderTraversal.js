//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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
 var zigzagLevelOrder = function(root) {
    if(root == null) return []
    let result = []
    let queue = [[root, 1]]
    let row = []
    let previousLvl = 1
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0]
        let lvl = cell[1]
        if(previousLvl == lvl && lvl % 2 == 1){
            row.push(node.val)
        }else if(previousLvl == lvl && lvl % 2 == 0){
            row.unshift(node.val)
        }else{
            result.push(row);
            previousLvl = lvl
            row = [node.val]
        }
        
        if(node.left != null) queue.push([node.left, lvl + 1])
        if(node.right != null) queue.push([node.right, lvl + 1])
    }
    
    if(row.length > 0) result.push(row)
    
    return result
    
};