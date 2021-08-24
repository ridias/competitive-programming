//https://binarysearch.com/problems/Sum-of-Digit-Paths-in-a-Tree

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
        this.paths(root, 0)
        let sum = 0
        for(let i = 0; i < this.response.length; i++){
            sum += this.response[i]
        }

        return sum
    }

    paths(root, value){
        if(root == null) return;

        if(root.left == null && root.right == null){
            value = value * 10 + root.val
            this.response.push(value)
            return;
        }

        value = value * 10 + root.val
        this.paths(root.left, value)
        this.paths(root.right, value)
    }
}