//https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    if(head == null) return head
    let result = []
    let list = head
    while(list != null){
        result.push(list.val)
        list = list.next
    }
    
    list = head
    for(let i = 0; i < Math.ceil(result.length / 2); i++){
        
        if(list == null) break;
        list.val = result[i]
        list = list.next
        if(list == null) break;
        list.val = result[result.length - 1 - i]
        list = list.next
    }
    
    return head
};