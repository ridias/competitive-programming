// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
 var maxDepth = function(root) {
    
    if(root == null) return 0
    
    let queue = [[root,1]]
    let max = 1
    
    while(queue.length > 0){
        let el = queue.shift()
        let node = el[0]
        let level = el[1]
        if(node.children != null){
            for(let i = 0; i < node.children.length; i++){
                queue.push([node.children[i], level+1])
                max = level + 1
            }
        }
    }
    
    return max
};