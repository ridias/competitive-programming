// https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    
    if(head == null) return head
    if(head.next == null && head.val == val) return null
    let nodes = head
    
    while(nodes.next != null){
        if(nodes.next.val == val){
            let tmp = nodes.next.next
            nodes.next.next = null
            nodes.next = tmp
        }else{
            nodes = nodes.next
        }
    }
    
    if(head.next == null && head.val == val) return null
    if(head.val == val) return head.next
    
    return head
};