//https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let result = []
    for(let i = 0; i < lists.length; i++){
        let list = lists[i]
        while(list != null){
            result.push(list.val)
            list = list.next
        }
    }
    
    result.sort((a, b) => a - b)
    
    if(result.length == 0) return null
    
    let nodes = new ListNode(result[0], null)
    let head = nodes
    
    for(let i = 1; i < result.length; i++){
        head.next = new ListNode(result[i], null)
        head = head.next
    }
    
    return nodes
};