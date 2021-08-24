//https://binarysearch.com/problems/Binary-Tree-to-Linked-List

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
    constructor(){
        this.inorder = []
        this.list = null
    }

    solve(root) {
        this.#traversal(root)
        if(this.inorder.length == 0) return null
        this.list = new LLNode(this.inorder[0], null)
        let head = this.list

        for(let i = 1; i < this.inorder.length; i++){
            head.next = new LLNode(this.inorder[i], null);
            head = head.next
        }
        
        return this.list
    }

    #traversal(root){
        if(root == null) return;
        this.#traversal(root.left)
        this.inorder.push(root.val)
        this.#traversal(root.right)
    }
}