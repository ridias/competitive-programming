//https://binarysearch.com/problems/Next-Greater-Element-of-a-Linked-List

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
        let head = node
        let result = []
        while(head != null){
            result.push(head.val)
            head = head.next
        }

        for(let i = 0; i < result.length; i++){
            let found = false
            for(let j = i + 1; j < result.length; j++){
                if(result[i] < result[j]){
                    found = true
                    result[i] = result[j]
                    break;
                }
            }
            if(!found) result[i] = 0
        }

        head = node
        let index = 0
        while(head != null){
            head.val = result[index]
            head = head.next
            index++ 
        }

        return node
    }
}