// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/

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
 var longestZigZag = function(root) {
    
    let max = 0
    let queue = [[root, 0, "c"]]
    
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0]
        let count = cell[1]
        let direction = cell[2]

        if(max < count) max = count
        
        if(direction == "c" && node.left != null) queue.push([node.left, count + 1, "l"])
        if(direction == "c" && node.right != null)queue.push([node.right, count + 1, "r"])
        
        if(direction == "r" && node.left != null){
            queue.push([node.left, count + 1, "l"])
        }else if(direction == "l" && node.left != null){
            queue.push([node.left, 1, "l"])
        }
        
        if(direction == "l" && node.right != null){
            queue.push([node.right, count + 1, "r"])
        }else if(direction == "r" && node.right != null){
            queue.push([node.right, 1, "r"])
        }
    }
    
    return max
};