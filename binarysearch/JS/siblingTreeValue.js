//https://binarysearch.com/problems/Sibling-Tree-Value

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
    solve(root, k) {
        
        let queue = [root]
        
        while(queue.length > 0){
            let node = queue.shift()
            if(node.left != null && node.right != null){

                if(node.left.val == k) return node.right.val
                if(node.right.val == k) return node.left.val
            }

            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        return -1
    }
}