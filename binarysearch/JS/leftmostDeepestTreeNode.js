//https://binarysearch.com/problems/Leftmost-Deepest-Tree-Node

/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
 class Solution {
    solve(root) {
        if(root == null) return -1
        let result = root.val
        let maxLvl = 0
        let queue = [[root, 1]]
        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0]
            let lvl = cell[1]

            if(maxLvl < lvl){
                maxLvl = lvl
                result = node.val
            }

            if(node.left != null) queue.push([node.left, lvl + 1])
            if(node.right != null) queue.push([node.right, lvl + 1])
        }

        return result
        
    }
}