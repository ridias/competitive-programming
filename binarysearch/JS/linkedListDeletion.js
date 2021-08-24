//https://binarysearch.com/problems/Linked-List-Deletion

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(node, target) {
        if(node == null) return node
        let head = node

        while(head.next != null){
            if(head.next.val == target){
                let tmp = head.next.next
                head.next.next = null
                head.next = tmp
            }else{
                head = head.next
            }
        }

        if(node.val == target){
            node = node.next
        }

        return node
    }
}