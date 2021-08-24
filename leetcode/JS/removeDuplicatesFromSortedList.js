//https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if(head == null) return head
    if(head.next == null) return head
    let first = head
    while(first.next != null){
        if(first.val == first.next.val){
            first.next = first.next.next
        }else{
            first = first.next
        }
    
        if(first == null) break
    }
    
    return head
};