//https://binarysearch.com/problems/Remove-Duplicates-in-Linked-List

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(node) {
        if(node == null) return node
        if(node.next == null) return node
        let set = new Set()

        set.add(node.val)
        let list = node
        while(list.next.next != null){
            if(set.has(list.next.val)){
                let tmp = list.next.next
                list.next.next = null
                list.next = tmp 
            }else{
                set.add(list.next.val)
                list = list.next
            }

            if(list.next == null) break;
        }

        if(list.next != null){
            if(set.has(list.next.val)){
                list.next = null
            }
        }

        return node
    }
}