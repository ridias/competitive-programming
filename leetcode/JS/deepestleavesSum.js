// https://leetcode.com/problems/deepest-leaves-sum/

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
 var deepestLeavesSum = function(root) {
    if(root == null) return 0
    let queue = [[root, 1]]
    let max = 0
    let total = 0
    while(queue.length > 0){
        let arr = queue.shift()
        let lvl = arr[1]
        let node = arr[0]
        
        if(lvl > max){
            total = node.val
            max = lvl
        }else if(lvl == max){
            total += node.val
        }
        
        if(node.left != null) queue.push([node.left, lvl + 1])
        if(node.right != null) queue.push([node.right, lvl + 1])
    }
    
    return total
    
};