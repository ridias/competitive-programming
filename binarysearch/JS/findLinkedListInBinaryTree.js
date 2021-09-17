// https://binarysearch.com/problems/Find-a-Linked-List-in-a-Binary-Tree


/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(root, head) {
        let result = []
        this.recursion(root, "", result)
        let onlyPath = "";

        while(head != null){
            onlyPath += head.val
            head = head.next
        }

        for(let i = 0; i < result.length; i++){
            if(new RegExp(onlyPath).test(result[i])){
                return true
            }
        }

        return false
    }

    recursion(root, str, result){
        if(root == null){
            return;
        }

        if(root.left == null && root.right == null){
            result.push(str + root.val)
            return
        }

        this.recursion(root.left, str + root.val, result)
        this.recursion(root.right, str + root.val, result)
    }
}