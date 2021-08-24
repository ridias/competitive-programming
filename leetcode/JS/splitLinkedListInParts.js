// https://leetcode.com/problems/split-linked-list-in-parts/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function(head, k) {
    let result = []
    let nodes = head
    let count = 0
    while(nodes != null){
        nodes = nodes.next
        count++
    }
    
    let numArraysWithMaxValue = count % k
    let numValuesForEachArrayWithMaxValue = Math.ceil(count / k) 
    
    let left = head
    let right = head
    while(numArraysWithMaxValue > 0 && left != null){
        let numValues = numValuesForEachArrayWithMaxValue - 1
        
        while(numValues > 0){
            right = right.next
            numValues--
        }
        
        let tmp = right.next
        right.next = null
        result.push(left)
        left = tmp
        right = tmp
        numArraysWithMaxValue--
    }
    
    while(left != null){
        let numValues = count % k == 0 ?  numValuesForEachArrayWithMaxValue - 1 :  numValuesForEachArrayWithMaxValue - 2
        while(numValues > 0){
            right = right.next
            numValues--
        }
        
        let tmp = right.next
        right.next = null
        result.push(left)
        left = tmp
        right = tmp
        numArraysWithMaxValue--
    }
    
    
    while(result.length < k){
        result.push(null)
    }
    
    return result;
    
};