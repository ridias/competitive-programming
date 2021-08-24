//https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
 var maxDepth = function(root) {
    let max = 0;
    let queue = []
    if(root == null) return max;
    queue.push([root, 1])
    
    while(queue.length > 0){
        let node = queue.shift()
        if(node[1] > max) max = node[1]
        if(node[0].left != null) queue.push([node[0].left, node[1] + 1])
        if(node[0].right != null) queue.push([node[0].right, node[1] + 1])
    }
    
    return max
};

