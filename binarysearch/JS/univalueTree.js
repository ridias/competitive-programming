//https://binarysearch.com/problems/Univalue-Tree

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
        let val = root.val
        let queue = [root]

        while(queue.length > 0){
            let node = queue.shift()
            if(node.val != val) return false
            
            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        return true

    }
}