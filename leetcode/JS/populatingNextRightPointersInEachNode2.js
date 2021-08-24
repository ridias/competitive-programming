//https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if(root == null) return root
    root.next = null
    let tree = root
    let queue = [[tree, 1]]
    while(queue.length > 0){
        let cell = queue.shift()
        let lvl = cell[1]
        let node = cell[0]
        
        if(queue.length > 0){
            if(queue[0][1] == lvl){
                node.next = queue[0][0]
            }else{
                node.next = null
            }
        }else{
            node.next = null
        }
        
        if(node.left != null) queue.push([node.left, lvl + 1])
        if(node.right != null) queue.push([node.right, lvl + 1])
    }
    
    return root
};