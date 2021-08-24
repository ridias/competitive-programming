// https://leetcode.com/problems/find-largest-value-in-each-tree-row/

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
 * @return {number[]}
 */
 var largestValues = function(root) {
    let results = []
    if(root == null) return results
    let queue = [[root, 1]]
    let maxLvl = 1
    let maxValue = -Infinity
    
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0]
        let lvl = cell[1]
        
        if(lvl > maxLvl){
            maxLvl = lvl
            results.push(maxValue)
            maxValue = node.val
        }else if(lvl == maxLvl && node.val > maxValue){
            maxValue = node.val
        }
        
        if(node.left != null) queue.push([node.left, lvl + 1])
        if(node.right != null) queue.push([node.right, lvl + 1])
    }
    
    results.push(maxValue)
    return results
    
};