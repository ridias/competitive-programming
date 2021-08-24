//https://binarysearch.com/problems/Sum-of-Nodes-with-Even-Grandparent-Values

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
        if(root.left == null && root.right == null) return 0
        let total = 0;
        let queue = [root]

        while(queue.length > 0){
            let node = queue.shift()

            if(node.left != null){
                if(node.val % 2 == 0 && node.left.left != null) total += node.left.left.val
                if(node.val % 2 == 0 && node.left.right != null) total += node.left.right.val
            }

            if(node.right != null){
                if(node.val % 2 == 0 && node.right.left != null) total += node.right.left.val
                if(node.val % 2 == 0 && node.right.right != null) total += node.right.right.val 
            }

            if(node.left != null){
                if(node.left.left != null || node.left.right != null) queue.push(node.left)
            }

            if(node.right != null){
                if(node.right.left != null || node.right.right != null) queue.push(node.right)
            }
        }

        return total;
    }
}