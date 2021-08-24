//https://binarysearch.com/problems/Interleaved-Linked-List

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(l0, l1) {
        if(l0 == null && l1 == null) return null
        if(l0 == null) return l1
        if(l1 == null) return l0

        let result = new LLNode(-1, null)
        let head = result

        while(l0 != null && l1 != null){
            head.next = new LLNode(l0.val, null)
            head = head.next
            head.next = new LLNode(l1.val, null)
            head = head.next
            l0 = l0.next
            l1 = l1.next
        }

        if(l0 != null){
            head.next = l0
        }

        if(l1 != null){
            head.next = l1
        }

        return result.next
    }
}