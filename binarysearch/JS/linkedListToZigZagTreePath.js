//https://binarysearch.com/problems/Linked-List-to-ZigZag-Tree-Path

/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(node) {
        if(node == null) return null
        let root = new Tree(node.val, null, null)
        let tree = root
        let previousValue = node.val

        node = node.next

        while(node != null){
            let val = node.val
            if(previousValue > val){
                tree.left = new Tree(val, null, null)
                tree = tree.left
            }else{
                tree.right = new Tree(val, null, null)
                tree = tree.right
            }
            previousValue = val

            node = node.next
        }

        return root
    }
}