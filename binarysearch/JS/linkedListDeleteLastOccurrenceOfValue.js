//https://binarysearch.com/problems/Linked-List-Delete-Last-Occurrence-of-Value

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
        let index = -1
        let len = 0
        let head = node

        while(head != null){
            if(head.val == target){
                index = len
            }

            len++
            head = head.next
        }

        head = node
        let count = 0
        if(index == -1) return node
        if(index == 0 && len == 1) return null
        if(index == 0) return head.next
        while(head != null){
            if(count + 1 == index){
                let tmp = head.next.next
                head.next.next = null
                head.next = tmp
            }
            count++
            head = head.next
        }

        return node
    }
}