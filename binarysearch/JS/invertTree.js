// https://binarysearch.com/problems/Invert-Tree

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
        if(root == null) return root
        
        let queue = [root]

        while(queue.length > 0){
            let node = queue.shift()
            let tmp = node.left
            node.left = node.right
            node.right = tmp

            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        return root

    }
}
