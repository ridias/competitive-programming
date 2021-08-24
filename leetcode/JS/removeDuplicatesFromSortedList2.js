//https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

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
 var deleteDuplicates = function(head) {
    if(head == null) return head
    let nodes = head
    let map = {}
    let set = new Set()
    
    while(nodes != null){
        if(map[nodes.val] == undefined){
            map[nodes.val] = 1
        }else{
            map[nodes.val] += 1
            set.add(nodes.val)
        }
        
        nodes = nodes.next
    }
    
    while(set.has(head.val) && head.next != null){
        head = head.next
    }
    
    if(head.next == null && set.has(head.val)){
        head = null
    }
    
    nodes = head
    if(nodes != null){
        while(nodes.next != null){
            if(set.has(nodes.next.val)){
                let tmp = nodes.next.next
                nodes.next.next = null
                nodes.next = tmp
            }else{
                nodes = nodes.next
            }
        }
    }
    
    return head
};