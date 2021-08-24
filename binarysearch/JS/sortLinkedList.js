//https://binarysearch.com/problems/Sort-a-Linked-List

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
        let nodes = []
        let head = node

        while(head != null){
            nodes.push(head.val)
            head = head.next
        }

        nodes.sort((a, b) => a - b)
        head = node
        let i = 0
        while(head != null){
            head.val = nodes[i]
            i++
            head = head.next
        }

        return node
    }
}