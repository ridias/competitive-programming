//https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if(l1 == null && l2 == null) return null
    if(l1 == null) return l2
    if(l2 == null) return l1
    
    let values = []
    
    while(l1 != null){
        values.push(l1.val)
        l1 = l1.next
    }
    
    while(l2 != null){
        values.push(l2.val)
        l2 = l2.next
    }
    
    values.sort((a, b) => a - b)
    var result = new ListNode(values[0], null);
    var head = result;
    for(let i = 1; i < values.length; i++){
        head.next = new ListNode(values[i], null)
        head = head.next
    }
    
    return result
    
    
};