//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

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
    if(root == null) return null
    let queue = [root]
    let lvl = 1
    let tree = root
    
    while(queue.length > 0){
        let times = lvl
        while(times > 0){
            let node = queue.shift()
            if(times - 1 == 0){
                node.next = null
            }else{
                node.next = queue[0]
            }
            times--
            
            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }
        
        lvl *= 2
    }
    
    return root
};