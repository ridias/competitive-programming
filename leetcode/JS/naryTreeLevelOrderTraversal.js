// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let result = []
    if(root == null) return result
    
    let previousLvl = 1
    let queue = [[root, 1]]
    let row = []
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0]
        let lvl = cell[1]
        
        if(previousLvl == lvl){
            row.push(node.val)
        }else{
            result.push(row)
            row = [node.val]
            previousLvl = lvl
        }
        
        for(let i = 0; i < node.children.length; i++){
            queue.push([node.children[i], lvl + 1])
        }
    }
    
    if(row.length > 0){
        result.push(row)
    }
    
    return result
};