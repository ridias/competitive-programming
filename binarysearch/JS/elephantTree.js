//https://binarysearch.com/problems/Elephant-Tree

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
    solve(root) {
        this.recursion(root)
        return root;
    }

    recursion(root){

        if(root == null){
            return;
        }

        this.recursion(root.left)
        this.recursion(root.right)
        let val = root.left != null ? root.left.val : 0
        let val2 = root.right != null ? root.right.val : 0
        root.val += val + val2
    }
}