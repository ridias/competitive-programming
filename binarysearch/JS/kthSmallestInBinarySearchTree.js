//https://binarysearch.com/problems/Kth-Smallest-in-a-Binary-Search-Tree

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
    solve(root, k) {
        
        let result = []
        let queue = [root]

        while(queue.length > 0){
            let node = queue.shift()
            result.push(node.val)
            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        result.sort((a, b) => a - b)
        return result[k]

        
    }
}