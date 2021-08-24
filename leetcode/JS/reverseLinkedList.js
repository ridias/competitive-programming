// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    
    let result = null
    
    const insert = function(root, value){
        if(root == null){
            root = new ListNode(value)
            return root
        }else if(root.next == null){
            root.next = new ListNode(value)
            return root
        }else{
            insert(root.next, value)
        }
        
        return root
    }
    
    let values = []
    
    while(head != null){
        values.unshift(head.val)
        head = head.next
    }
    
    for(let i = 0; i < values.length; i++){
        result = insert(result, values[i])
    }
    
    return result
    
};