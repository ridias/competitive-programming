//https://binarysearch.com/problems/Palindrome-Linked-List

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
        let arr = []

        while(node != null){
            arr.push(node.val)
            node = node.next
        }

        let left = 0
        let right = arr.length - 1
        while(left < right){
            if(arr[left] != arr[right]){
                return false
            }
            left++
            right--
        }

        return true
    }
}