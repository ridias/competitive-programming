//https://binarysearch.com/problems/Pairwise-Linked-List-Swap

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
        
        let head = node


        while(head != null){
            if(head.next == null) break

            let tmp = head.val
            head.val = head.next.val
            head.next.val = tmp

            head = head.next.next
        }

        return node
    }
}