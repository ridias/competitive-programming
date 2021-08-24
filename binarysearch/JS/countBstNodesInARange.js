//https://binarysearch.com/problems/Count-BST-Nodes-in-a-Range

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
    solve(root, lo, hi) {
        let count = 0
        if(root == null) return count

        let queue = [root]
        while(queue.length > 0){
            let node = queue.shift()
            if(lo <= node.val && node.val <= hi){
                count++
            }

            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        return count

    }
}