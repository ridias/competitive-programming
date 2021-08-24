//https://binarysearch.com/problems/Linked-List-Union

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(ll0, ll1) {
        
        if(ll0 == null && ll1 == null) return null
        if(ll0 == null && ll1 != null) return ll1
        if(ll0 != null && ll1 == null) return ll0
        let result = new LLNode(-1, null)
        let head = result
        while(ll0 != null && ll1 != null){
            
            if(ll0.val < ll1.val){
                head.next = new LLNode(ll0.val, null)
                ll0 = ll0.next 
            }else if(ll0.val > ll1.val){
                head.next = new LLNode(ll1.val, null)
                ll1 = ll1.next
            }else{
                let value = ll0.val
                head.next = new LLNode(ll0.val, null)
                while(ll0 != null){
                    if(ll0.val != value) break; 
                    ll0 = ll0.next
                }

                while(ll1 != null){
                    if(ll1.val != value) break;
                    ll1 = ll1.next 
                }
            }

            head = head.next
        }

        if(ll0 == null){
            head.next = ll1
        }else if(ll1 == null){
            head.next = ll0
        }

        return result.next
    }
}