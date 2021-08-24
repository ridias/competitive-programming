// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
 var bstFromPreorder = function(preorder) {
    
    const insert = (root, value) => {
        if(root.left == null && root.val > value){
            root.left = new TreeNode(value)
        }else if(root.right == null && root.val < value){
            root.right = new TreeNode(value)
        }else{
            if(root.val < value){
                insert(root.right, value)
            }else if(root.val > value){
                insert(root.left, value)
            }
        }
    }
    
    if(preorder.length == 0) return null;
    
    let result = new TreeNode(preorder[0]);
    for(let i = 1; i < preorder.length; i++){
        insert(result, preorder[i])
    }
    
    return result
};