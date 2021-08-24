//https://binarysearch.com/problems/Symmetric-Binary-Tree

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

        let left = [root.left]
        let right = [root.right]

        while(left.length > 0 && right.length > 0){
            let nodeLeft = left.shift()
            let nodeRight = right.shift()

            if(nodeLeft != null || nodeRight != null){
                if(nodeLeft != null && nodeRight == null) return false
                if(nodeLeft == null && nodeRight != null) return false

                if(nodeLeft.val != nodeRight.val) return false

                left.push(nodeLeft.left)
                left.push(nodeLeft.right)
                right.push(nodeRight.right)
                right.push(nodeRight.left)
            }
        }

        if(left.length > 0 || right.length > 0) return false

        return true
    }
}