//https://leetcode.com/problems/partition-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    let less = []
    let superior = []
    
    let nodes = head
    while(nodes != null){
        
        if(nodes.val < x){
            less.push(nodes.val)
        }else{
            superior.push(nodes.val)
        }
        
        nodes = nodes.next
    }
    
    for(let i = 0; i < superior.length; i++){
        less.push(superior[i])
    }
    
    nodes = head
    let index = 0
    while(nodes != null){
        nodes.val = less[index]
        index++
        nodes = nodes.next
    }
    
    return head  
};