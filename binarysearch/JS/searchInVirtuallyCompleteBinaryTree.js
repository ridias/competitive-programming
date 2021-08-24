//https://binarysearch.com/problems/Search-in-a-Virtually-Complete-Binary-Tree

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
    solve(root, target) {
        if(root == null) return false
        if(root.val == target) return true
        return this.solve(root.left, target) || this.solve(root.right, target)
    }
}