//https://binarysearch.com/problems/Kth-Last-Node-of-a-Linked-List

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(node, k) {
        
        let head = node
        let countNodes = 0
        while(head != null){
            countNodes++;
            head = head.next
        }

        let currentNode = 0
        while(node != null){
            currentNode++
            if(countNodes - k == currentNode) return node.val
            node = node.next
        }

        return null

        //len = 4 k= 1 -> 3

    }
}