// https://leetcode.com/problems/cousins-in-binary-tree/

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    
    let queue = []
    if(root.val == x || root.val == y) return false
    queue.push([root, 0])
    
    let parentX = []
    let parentY = []
    
    while(queue.length > 0){
        let node = queue.shift()
        if(node[0].left != null){
            if(node[0].left.val == x){
                parentX = [node[0].val, node[1] + 1]  
            }else if(node[0].left.val == y){
                parentY = [node[0].val, node[1] + 1]
            }
        }
        
        if(node[0].right != null){
            if(node[0].right.val == y){
                parentY = [node[0].val, node[1] + 1]
            }else if(node[0].right.val == x){
                parentX = [node[0].val, node[1] + 1]
            }
        }
        
        if(node[0].left != null) queue.push([node[0].left, node[1] + 1])
        if(node[0].right != null) queue.push([node[0].right, node[1] + 1])
        
        if(parentX.length > 0 && parentY.length > 0){
            if(parentX[1] == parentY[1] && parentX[0] != parentY[0]) return true
        }
    }
    
    return false
    
    
};