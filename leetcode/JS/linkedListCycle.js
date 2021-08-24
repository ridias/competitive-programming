//https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(head == null) return false
    
    let slow = head
    let fast = head.next
    
    
    while(fast != null){
        if(slow === fast) return true
        
        if(slow.next == null) break;
        if(fast.next == null) break;
        if(fast.next.next == null) break;
        
        slow = slow.next
        fast = fast.next.next
    }
    
    
    return false
};