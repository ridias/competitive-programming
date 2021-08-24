// https://leetcode.com/problems/add-one-row-to-tree/

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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
 var addOneRow = function(root, val, depth) {
    if(depth == 1){
        return new TreeNode(val, root, null)
    }
    
    let tree = root
    let queue = [[tree, 1]]
    
    while(queue.length > 0){
        let cell = queue.shift();
        let node = cell[0]
        let lvl = cell[1]
        
        if(lvl + 1 == depth){
            if(node.left == null){
                node.left = new TreeNode(val, null, null)
            }else{
                let tmp = node.left
                node.left = new TreeNode(val, tmp, null)
            }
            
            if(node.right == null){
                node.right = new TreeNode(val, null, null)
            }else{
                let tmp = node.right
                node.right = new TreeNode(val, null, tmp)
            }
        }else if(lvl + 1 > depth){
            break;
        }else{
            
            if(node.left != null) queue.push([node.left, lvl + 1])
            if(node.right != null) queue.push([node.right, lvl + 1])
        }
    }
    
    return root
};