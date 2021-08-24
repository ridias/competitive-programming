//https://binarysearch.com/problems/Rotate-Linked-List-by-K

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(node, k) {
        let tail = node
        let len = 0
        while(tail.next != null){
            len++
            tail = tail.next
        }

        len++
        k = len - k
        let head = node
        while(k > 0){
            let nextHead = head.next
            tail.next = new LLNode(head.val, null)
            tail = tail.next
            head.next = null
            head = nextHead
            k--
        }

        return head

    }
}