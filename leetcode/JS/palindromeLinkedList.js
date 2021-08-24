// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let arr = []
    if(head == null) return true
    while(head.next != null){
        arr.push(head.val)
        head = head.next
    }
    
    arr.push(head.val)
    
    for(let i = 0; i < Math.floor(arr.length / 2); i++){
        if(arr[i] != arr[arr.length - 1 - i]){
            return false
        }
    }
    
    return true
};