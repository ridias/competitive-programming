//https://binarysearch.com/problems/Inorder-Traversal


/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
 class Solution {
    constructor(){
        this.response = []
    }

    solve(root) {
        this.response = []
        this.#traversal(root)
        return this.response;
    }

    #traversal(root){
        if(root == null) return;
        this.#traversal(root.left);
        this.response.push(root.val);
        this.#traversal(root.right);
    }
}