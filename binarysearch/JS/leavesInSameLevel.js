//https://binarysearch.com/problems/Leaves-in-Same-Level

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
        if(root == null) return false
        let queue = [[root, 1]]
        let leaves = []
        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0]
            let lvl = cell[1]
            
            if(node.left == null && node.right == null){
                if(leaves.length == 0) leaves.push(lvl)
                else if(leaves[leaves.length - 1] == lvl) leaves.push(lvl)
                else return false
            }

            if(node.left != null) queue.push([node.left, lvl + 1])
            if(node.right != null) queue.push([node.right, lvl + 1])
        }

        return true
    }
}