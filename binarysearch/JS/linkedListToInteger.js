//https://binarysearch.com/problems/Linked-List-to-Integer

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
        let len = 0
        let head = node

        while(head != null){
            len++;
            head = head.next
        }
        
        len--

        let k = Math.pow(2, len)
        let result = 0

        while(node != null){
            result += node.val * k
            k /= 2
            node = node.next
        }

        return result
    }
}