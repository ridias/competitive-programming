// https://leetcode.com/problems/middle-of-the-linked-list/

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
 var middleNode = function(head) {
    if(head == null) return head
    let len = 0
    let nodes = head
    
    while(nodes != null){
        len++
        nodes = nodes.next
    }
    
    let middle = Math.floor(len / 2)
    
    let count = 0
    while(head != null){
        if(count == middle) return head
        count++
        head = head.next
    }
    
    return null;
    
};