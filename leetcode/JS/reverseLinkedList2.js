//https://leetcode.com/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(head == null) return head
    if(head.next == null) return head
    let first = head;
    
    let arr = []
    
    while(first != null){
        arr.push(first.val)
        first = first.next
    }
    
    let count = 0
    while(left < right){
        let tmp = arr[left - 1]
        arr[left - 1] = arr[right - 1]
        arr[right - 1] = tmp
        left++
        right--
    }
    
    first = head
    let index = 0
    while(first != null){
        first.val = arr[index]
        index++
        first = first.next
    }
    
    return head
};