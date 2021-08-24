// https://leetcode.com/problems/insert-into-a-binary-search-tree/

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
 * @return {TreeNode}
 */
 var insertIntoBST = function(root, val) {
    if(root == null) {
        root = new TreeNode(val, null, null)
        return root;
    }
    
    let head = root;
    
    while(true){
        let value = head.val
        if(val < value && head.left == null){
            head.left = new TreeNode(val, null, null)
            break;
        }else if(val > value && head.right == null){
            head.right = new TreeNode(val, null, null)
            break;
        }else if(val < value){
            head = head.left
        }else if(val > value){
            head = head.right
        }
    }
    
    return root
    
};