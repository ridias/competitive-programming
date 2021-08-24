// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    if(root == null) return false
    let map = {}
    
    let queue = [root]
    
    while(queue.length > 0){
        let node = queue.shift()
        
        if(map[node.val] != undefined) return true
        
        if(map[k - node.val] == undefined){
            map[k - node.val] = 1
        }
        
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    
    return false
};