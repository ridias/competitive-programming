//https://binarysearch.com/problems/Sum-Tree

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
        if(root == null) return true
        if(root.left == null && root.right == null) return true

        let queue = [root]

        while(queue.length > 0){
            let node = queue.shift()

            let left = node.left == null ? 0 : node.left.val
            let right = node.right == null ? 0 : node.right.val

            if(left + right != node.val){
                return false
            }

            if(node.left != null)
                if(node.left.left != null || node.left.right != null) 
                    queue.push(node.left)
            
            if(node.right != null)
                if(node.right.left != null || node.right.right != null)
                    queue.push(node.right)


        }

        return true
    }
}