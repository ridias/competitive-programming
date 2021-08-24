// https://leetcode.com/problems/even-odd-tree/

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
 var isEvenOddTree = function(root) {
    let queue = [[root, 1]]
    
    let previousLvl = 1
    let previousOddNum = -Infinity
    let previousEvenNum = Infinity
    
    
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0]
        let lvl = cell[1]
        
        if(lvl % 2 == 1 && node.val % 2 != 1) return false
        if(lvl % 2 == 0 && node.val % 2 != 0) return false
        
        if(previousLvl == lvl && lvl % 2 == 1){
            if(previousOddNum >= node.val) return false
            previousOddNum = node.val
        }else if(previousLvl == lvl && lvl % 2 == 0){
            if(previousEvenNum <= node.val) return false
            previousEvenNum = node.val
        }else if(previousLvl != lvl && lvl % 2 == 0){
            previousEvenNum = node.val
            previousLvl = lvl
        }else if(previousLvl != lvl && lvl % 2 == 1){
            previousOddNum = node.val
            previousLvl = lvl
        }
        
        if(node.left != null) queue.push([node.left, lvl + 1])
        if(node.right != null) queue.push([node.right, lvl + 1])
    }
    
    return true
};