// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/

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
 var findSecondMinimumValue = function(root) {
    let set = new Set()
    let values = []
    let queue = [root]
    
    while(queue.length > 0){
        let node = queue.shift()
        if(!set.has(node.val)){
            set.add(node.val)
            values.push(node.val)
        }
        
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    
    values.sort((a, b) => a - b)
    return values.length > 1 ? values[1] : -1
};