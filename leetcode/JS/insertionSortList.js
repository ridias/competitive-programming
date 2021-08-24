//https://leetcode.com/problems/insertion-sort-list/

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
 var insertionSortList = function(head) {
    if(head == null) return head
    let res = []
    let nodes = head
    while(nodes != null){
        res.push(nodes.val)
        nodes = nodes.next
    }
    
    res.sort((a, b) => a - b)
    
    nodes = head
    
    let i = 0
    while(nodes != null){
        nodes.val = res[i]
        i++
        nodes = nodes.next
    }
    
    return head
};