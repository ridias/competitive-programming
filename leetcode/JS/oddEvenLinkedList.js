// https://leetcode.com/problems/odd-even-linked-list/

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
 var oddEvenList = function(head) {
    if(head == null) return head
    if(head.next == null) return head
    if(head.next.next == null) return head
    var odd = head;
    var even = head.next
    
    let first = head.next.next
    while(first != null){
        let tmpNextEven = first.next
        let tmpEven = odd.next
        
        odd.next = first
        first.next = tmpEven
        even.next = tmpNextEven
        odd = odd.next
        even = even.next
        if(tmpNextEven != null){
            first = tmpNextEven.next
        }else{
            first = null
        }
    }
    
    return head
    
};