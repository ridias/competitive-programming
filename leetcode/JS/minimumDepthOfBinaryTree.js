//https://leetcode.com/problems/minimum-depth-of-binary-tree/

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
 var minDepth = function(root) {
    if(root == null) return 0
    let min = Infinity
    let queue = [[root, 1]]
    
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0]
        let numNodes = cell[1]
        
        if(node.left == null && node.right == null && numNodes < min){
            min = numNodes
        }
        
        if(node.left != null && numNodes + 1 < min) queue.push([node.left, numNodes + 1])
        if(node.right != null && numNodes + 1 < min) queue.push([node.right, numNodes + 1])
    }
    
    return min
    
    
};