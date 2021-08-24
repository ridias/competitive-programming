//https://binarysearch.com/problems/Linked-List-Intersection

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
        let result = new LLNode(-1, null)
        let head = result
        while(l0 != null && l1 != null){
            if(l0.val == l1.val){
                head.next = new LLNode(l0.val, null)
                head = head.next
                l0 = l0.next
                l1 = l1.next
            }else if(l0.val < l1.val){
                l0 = l0.next
            }else{
                l1 = l1.next
            }
        }

        return result.next
    }
}