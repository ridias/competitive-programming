// https://leetcode.com/problems/merge-two-binary-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    
    if(root1 == null && root2 == null) return null
    if(root1 == null && root2 != null) return root2
    if(root1 != null && root2 == null) return root1
    
    let queue1 = [root1]
    let queue2 = [root2]
    
    while(queue1.length > 0){
        
        let node = queue1.shift()
        let node2 = queue2.shift()
        
        node.val += node2.val
        
        if(node.left != null && node2.left == null){
            node2.left = new TreeNode(0, null, null);
        }else if(node.left == null && node2.left != null){
            node.left = new TreeNode(0, null, null);    
        }
        
        if(node.right != null && node2.right == null){
            node2.right = new TreeNode(0, null, null);
        }else if(node.right == null && node2.right != null){
            node.right = new TreeNode(0, null, null);
        }
        
        if(node.left != null) queue1.push(node.left)
        if(node.right != null) queue1.push(node.right)
        if(node2.left != null) queue2.push(node2.left)
        if(node2.right != null) queue2.push(node2.right)
    }
    
    return root1
};