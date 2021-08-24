//https://binarysearch.com/problems/Palindromic-Tree

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
        this.values = []
    }

    solve(root) {    
        this.traversal(root)
        let left = 0
        let right = this.values.length - 1
        while(left < right){
            if(this.values[left] != this.values[right]) return false
            left++
            right--
        }

        return true
    }

    traversal(root){
        if(root == null) return;
        this.traversal(root.left)
        this.values.push(root.val)
        this.traversal(root.right)
    }
}