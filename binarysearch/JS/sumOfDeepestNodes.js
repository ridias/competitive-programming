//https://binarysearch.com/problems/Sum-of-the-Deepest-Nodes

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
        if(root == null) return 0
        let total = 0;
        let max = 0;
        let queue = [[root, 1]]

        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0]
            let lvl = cell[1]

            if(lvl > max){
                max = lvl
                total = node.val
            }else if(lvl == max){
                total += node.val
            }

            if(node.left != null) queue.push([node.left, lvl + 1])
            if(node.right != null) queue.push([node.right, lvl + 1])
        }

        return total;
        
    }
}