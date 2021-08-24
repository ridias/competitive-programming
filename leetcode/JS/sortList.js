//https://leetcode.com/problems/sort-list/

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
 var sortList = function(head) {
    if(head == null) return head;
    if(head.next == null) return head;
    let results = [];
    var aux = head
    while(aux != null){
        results.push(aux.val)
        aux = aux.next
    }
    
    results.sort((a, b) => a - b)
    
    aux = head
    let index = 0;
    while(aux != null){
        aux.val = results[index];
        index++;
        aux = aux.next
    }
    
    return head
    
};