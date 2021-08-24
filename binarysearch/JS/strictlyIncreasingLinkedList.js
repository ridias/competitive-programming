//https://binarysearch.com/problems/A-Strictly-Increasing-Linked-List


/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {

    solve(head) {
        if(head == null) return false;
        if(head.next == null) return true
        
        while(head.next != null){
            if(head.val >= head.next.val) return false;
            head = head.next
        }

        return true;
    }
}