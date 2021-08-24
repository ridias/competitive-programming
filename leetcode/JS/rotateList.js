//https://leetcode.com/problems/rotate-list/

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
 var rotateRight = function(head, k) {
    if(head == null) return head;
    if(head.next == null) return head;
    let len = 0;
    let values = []
    var aux = head
    
    while(aux != null){
        len++
        values.push(aux.val)
        aux = aux.next
    }
    
    k = k % len
    if(k == 0) return head
    
    while(k > 0){
        values.unshift(values.pop())    
        k--
    }
    
    aux = head
    let index = 0
    while(aux != null){
        aux.val = values[index]
        index++
        aux = aux.next
    }
    
    return head
    
};