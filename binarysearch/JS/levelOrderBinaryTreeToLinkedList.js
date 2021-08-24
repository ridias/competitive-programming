//https://binarysearch.com/problems/Level-Order-Binary-Tree-to-Linked-List

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
    solve(root) {
        
        if(root == null) return null
        let queue = []
        let list = new LLNode(root.val, null)
        let refList = list

        if(root.left != null) queue.push(root.left)
        if(root.right != null) queue.push(root.right)
        while(queue.length > 0){
            let node = queue.shift()
            
            refList.next = new LLNode(node.val, null)
            refList = refList.next
            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        return list

    }
}