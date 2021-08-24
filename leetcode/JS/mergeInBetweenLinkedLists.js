// https://leetcode.com/problems/merge-in-between-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeInBetween = function(list1, a, b, list2) {
    var head = list1;
    let count = 0;
    var left = null;
    var right = null;
    while(count < a - 1){
        head = head.next
        count++
    }
    
    left = head
    
    while(count < b){
        head = head.next
        count++
    }
    
    right = head.next
    
    left.next = list2
    while(list2.next != null){
        list2 = list2.next
    }
    
    list2.next = right
    
    return list1
    
};