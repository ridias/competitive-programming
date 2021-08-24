//https://binarysearch.com/problems/Add-Linked-Lists

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
        
        let head = new LLNode(-1, null)
        let result = head
        let remain = 0
        while(l0 != null && l1 != null){
            let digit = (l0.val + l1.val + remain) % 10
            remain = (l0.val + l1.val + remain) >= 10 ? 1 : 0
            result.next = new LLNode(digit, null)
            result = result.next
            l0 = l0.next
            l1 = l1.next
        }

        while(l0 != null){
            let digit = (l0.val + remain) % 10
            remain = (l0.val + remain) >= 10 ? 1 : 0
            result.next = new LLNode(digit, null)
            result = result.next
            l0 = l0.next
        }

        while(l1 != null){
            let digit = (l1.val + remain) % 10
            remain = (l1.val + remain) >= 10 ? 1 : 0
            result.next = new LLNode(digit, null)
            result = result.next
            l1 = l1.next
        }

        if(remain > 0) result.next = new LLNode(remain, null);
        return head.next
    }
}