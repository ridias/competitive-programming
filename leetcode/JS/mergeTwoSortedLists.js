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
    if(l1 == null && l2 == null) return l1
    if(l1 == null && l2 != null) return l2
    if(l1 != null && l2 == null) return l1
    
    let result = new ListNode(-1, null)
    
    let res = result
    
    while(l1 != null && l2 != null){
        if(l1.val <= l2.val){
            res.next = new ListNode(l1.val, null)
            l1 = l1.next
        }else{
            res.next = new ListNode(l2.val, null)
            l2 = l2.next
        }
        
        res = res.next
    }
    
    if(l1 != null){
        res.next = l1
    }
    
    if(l2 != null){
        res.next = l2
    }
    
    return result.next
};