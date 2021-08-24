//https://binarysearch.com/problems/Swap-Kth-Node-Values

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
        let arr = []
        let head = node


        while(head != null){
            arr.push(head.val)
            head = head.next
        }

        let tmp = arr[k]
        arr[k] = arr[arr.length - k - 1]
        arr[arr.length - k - 1] = tmp

        head = node
        let index = 0
        while(head != null){
            head.val = arr[index]
            index++
            head = head.next
        }

        return node
    }
}