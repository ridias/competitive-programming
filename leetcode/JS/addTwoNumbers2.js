// https://leetcode.com/problems/add-two-numbers-ii/

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
    let num1 = []
    let num2 = []
    
    while(l1 != null){
        num1.push(l1.val)
        l1 = l1.next
    }
    
    while(l2 != null){
        num2.push(l2.val)
        l2 = l2.next
    }
    
    while(num1.length < num2.length) num1.unshift(0);
    while(num2.length < num1.length) num2.unshift(0);
    
    let i = num1.length - 1
    let j = num2.length - 1
    
    let remaining = 0
    while(i >= 0 && j >= 0){
        let aux = num1[i]
        num1[i] = (num1[i] + num2[j] + remaining) % 10
        remaining = Math.floor((aux + num2[j] + remaining) / 10)
        i--
        j--
    }
    
    if(remaining > 0) num1.unshift(1)
    
    let response = null
    i = num1.length - 1
    while(i >= 0){
        response = new ListNode(num1[i], response)
        i--
    }
    
    return response
    
};