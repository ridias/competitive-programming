//https://binarysearch.com/problems/Inorder-Successor

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
        this.arr = []
        this.found = false
    }
    
    solve(root, t) {
        this.inorder(root, t)
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i] == t){
                return this.arr[i+1]
            }
        }
        return null
    }

    inorder(root, t){
        if(root == null) {
            return;
        }


        if(this.arr[this.arr.length - 1] != t && this.found){
            return;
        }

        this.inorder(root.left, t)
        if(root.val == t) this.found = true 
        this.arr.push(root.val)
        this.inorder(root.right, t)

    }
}