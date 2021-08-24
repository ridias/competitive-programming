//https://binarysearch.com/problems/Reverse-a-Linked-List

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
        if(node.next == null) return node
        let head = null
        let after = node
        while(node.next != null){
            head = new LLNode(node.next.val, after)
            after = head
            node.next = node.next.next
        }

        return head
    }
}