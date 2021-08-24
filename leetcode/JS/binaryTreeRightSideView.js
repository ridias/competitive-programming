//https://leetcode.com/problems/binary-tree-right-side-view/

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
 var rightSideView = function(root) {
    
    let result = []
    if(root == null) return result
    let queue = [[root, 1]]
    
    let previousLvl = 1
    let previousValue = root.val
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0];
        let lvl = cell[1]
        
        if(previousLvl != lvl){
            result.push(previousValue)
            previousLvl = lvl
            previousValue = node.val
        }else{
            previousValue = node.val
        }
        
        if(node.left != null) queue.push([node.left, lvl + 1])
        if(node.right != null) queue.push([node.right, lvl + 1])
    }
    
    result.push(previousValue)
    
    return result
    
    
};