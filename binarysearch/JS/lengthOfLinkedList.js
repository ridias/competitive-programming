//https://binarysearch.com/problems/Length-of-a-Linked-List

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
        let count = 0
        while(node != null){
            count++
            node = node.next
        }
        return count;
    }
}