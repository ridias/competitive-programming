//https://binarysearch.com/problems/Tree-Sum

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
        let total = 0
        if(root == null) return total
        let queue = [root]

        while(queue.length > 0){
            let node = queue.shift()
            total += node.val
            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        return total

    }
}