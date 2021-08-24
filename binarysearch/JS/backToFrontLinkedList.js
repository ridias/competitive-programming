//https://binarysearch.com/problems/Back-to-Front-Linked-List

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
        let len = 0

        while(head != null){
            len++
            head = head.next
        }
        
        if(len <= 1) return node

        let firstHalf = null
        let secondHalf = null
        let count = 0
        let limit = Math.round(len / 2)
        head = node
        while(head != null){
            count++
            if(limit < count){
                secondHalf = head
                break;
            }else{
                if(firstHalf == null){
                    firstHalf = new LLNode(head.val, null)
                }else{
                    let n = new LLNode(head.val, firstHalf)
                    firstHalf = n
                }
            }
            head = head.next
        }

        let result = null
        if(len % 2 == 1){
            result = new LLNode(firstHalf.val, null)
            firstHalf = firstHalf.next
        }

        while(firstHalf != null && secondHalf != null){
            let n = new LLNode(firstHalf.val, result)
            result = n
            n = new LLNode(secondHalf.val, result)
            result = n
            firstHalf = firstHalf.next
            secondHalf = secondHalf.next
        }

        return result
    }
}