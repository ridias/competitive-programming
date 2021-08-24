// https://leetcode.com/problems/average-of-levels-in-binary-tree/

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
 var averageOfLevels = function(root) {
    if(root == null) return []
    let result = []
    let queue = [[root, 1]]
    
    let previousLvl = 1
    let sum = 0
    let numberNodes = 0
    
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0]
        let lvl = cell[1]
        
        if(previousLvl == lvl){
            sum += node.val
            numberNodes++
        }else{
            result.push(sum / numberNodes)
            previousLvl = lvl
            sum = node.val
            numberNodes = 1
        }
        
        if(node.left != null) queue.push([node.left, lvl + 1])
        if(node.right != null) queue.push([node.right, lvl + 1])
    }
    
    result.push(sum / numberNodes)
    
    return result
    
    
};