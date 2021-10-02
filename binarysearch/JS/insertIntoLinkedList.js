// https://binarysearch.com/problems/Insert-Into-Linked-List

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(head, pos, val) {
        if(pos == 0){
            head = new LLNode(val, head)
        }else{
            let count = 1
            let nodes = head

            while(nodes != null && count < pos){
                nodes = nodes.next
                count++
            }

            let tmp = nodes.next
            let nodeToInsert = new LLNode(val, tmp)
            nodes.next = nodeToInsert
        }

        return head
    }
}