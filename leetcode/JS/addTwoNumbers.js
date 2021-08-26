// https://leetcode.com/problems/add-two-numbers/

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
 var addTwoNumbers = function(l1, l2) {
    
    let remain = 0
    let nodes1 = l1
    let nodes2 = l2
    let result = new ListNode(-1, null)
    let refResult = result
    
    while(nodes1 != null && nodes2 != null){
        let val = nodes1.val + nodes2.val + remain
        refResult.next = new ListNode(val % 10, null)
        remain = Math.floor(val / 10);
        nodes1 = nodes1.next;
        nodes2 = nodes2.next;
        refResult = refResult.next
    }
    
    while(nodes1 != null){
        let val = nodes1.val + remain
        refResult.next = new ListNode(val % 10, null)
        remain = Math.floor(val / 10);
        nodes1 = nodes1.next
        refResult = refResult.next
    }
    
    while(nodes2 != null){
        let val = nodes2.val + remain
        refResult.next = new ListNode(val % 10, null)
        remain = Math.floor(val / 10);
        nodes2 = nodes2.next
        refResult = refResult.next
    }
    
    if(remain == 1){
        refResult.next = new ListNode(1, null)
    }
    
    return result.next;
};