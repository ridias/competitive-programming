// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var swapNodes = function(head, k) {
    if(head == null) return head
    if(head.next == null) return head
    let result = []
    let first = head
    
    while(first != null){
        result.push(first.val)
        first = first.next
    }
    
    let aux = result[k - 1]
    result[k - 1] = result[result.length - k]
    result[result.length - k] = aux
    
    first = head
    let index = 0
    while(first != null){
        first.val = result[index]
        index++
        first = first.next
    }
    
    return head
};