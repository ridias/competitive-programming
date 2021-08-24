//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    
    let nodes = head
    let len = 0
    while(nodes != null){
        len++
        nodes = nodes.next
    }
    
    let pos = len - n
    let current = 0
    nodes = head
    
    if(pos == 0) return head.next
    while(nodes != null){
        if(current + 1 == pos){
            let tmp = nodes.next.next
            nodes.next.next = null
            nodes.next = tmp
            break;
        }
        
        current++
        nodes = nodes.next
    }
    
    return head
};