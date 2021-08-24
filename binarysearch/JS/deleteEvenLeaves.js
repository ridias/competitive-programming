//https://binarysearch.com/problems/Delete-Even-Leaves

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
        if(root == null) return null;
        this.recursion(root)
        if(root.val % 2 == 0 && root.left == null && root.right == null) return null
        return root
    }

    recursion(root){
        if(root == null){
            return;
        }
        
        this.recursion(root.left)
        this.recursion(root.right)

        if(root.left != null && root.right != null){
            if(root.left.val % 2 == 0 && root.left.left == null && root.left.right == null) 
                root.left = null
            if(root.right.val % 2 == 0 && root.right.left == null && root.right.right == null) 
                root.right = null
        }else if(root.left != null){
            if(root.left.val % 2 == 0 && root.left.left == null && root.left.right == null) 
                root.left = null
        }else if(root.right != null){
            if(root.right.val % 2 == 0 && root.right.left == null && root.right.right == null) 
                root.right = null
        }
    }
}