//https://binarysearch.com/problems/Central-Linked-List

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
        let count = 0
        while(head != null){
            count++
            head = head.next
        }

        let middle = count % 2 == 0 ? Math.round(count / 2) + 1 : Math.round(count / 2) 
        let nodesChecked = 0
        while(node != null){
            nodesChecked++
            if(nodesChecked == middle) return node.val
            node = node.next
        }

        return null

        console.log(count)
    }
}