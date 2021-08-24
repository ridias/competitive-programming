//https://binarysearch.com/problems/Count-Nodes-in-Complete-Binary-Tree

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
        let count = 0
        let queue = [root]

        while(queue.length > 0){
            let node = queue.shift()
            count++
            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        return count
    }
}