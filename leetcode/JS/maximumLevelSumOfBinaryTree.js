// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/

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
 * @return {number}
 */
 var maxLevelSum = function(root) {
    if(root == null) return 0
    let queue = []
    let map = {}
    let max = root.val
    let result = 1;
    queue.push([root, 1])
    map[1] = root.val
    
    while(queue.length > 0){
        var node = queue.shift()
        var lvl = node[1]
        if(lvl != 1){
            map[lvl] == undefined ? map[lvl] = node[0].val : map[lvl] += node[0].val
        }
        
        if(node[0].left != null){
            queue.push([node[0].left, lvl + 1])
        }
        
        if(node[0].right != null){
            queue.push([node[0].right, lvl + 1])
        }
    }
    
    
    let keys = Object.keys(map)
    for(let i = 0; i < keys.length; i++){
        if(map[keys[i]] > max){
            result = parseInt(keys[i])
            max = map[keys[i]]
        }
    }
    
    return result
    
};