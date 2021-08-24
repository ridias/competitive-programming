// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
 var preorder = function(root) {
    
    if(root == null) return []
    
    let stack = [root]
    let result = []
    while(stack.length > 0){
        let node = stack.pop()
        result.push(node.val)
        for(let i = node.children.length - 1; i >= 0; i--){
            stack.push(node.children[i])
        }
    }
    
    return result
    
    
    
};