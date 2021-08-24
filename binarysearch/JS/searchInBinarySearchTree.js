//https://binarysearch.com/problems/Search-in-a-Binary-Search-Tree

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
    solve(root, val) {
        if(root == null) return false
        while(root != null){
            if(root.val == val) return true

            if(root.val < val){
                root = root.right
            }else{
                root = root.left
            }
        }

        return false;
    }
}