//https://binarysearch.com/problems/Partition-Tree

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
        let leaves = 0
        let nodes = 0
        if(root == null) return [leaves, nodes]
        let queue = [root]

        while(queue.length > 0){
            let node = queue.shift()
            if(node.left == null && node.right == null){
                leaves++
            }else{
                nodes++
                if(node.left != null) queue.push(node.left)
                if(node.right != null) queue.push(node.right)
            }
        }

        return [leaves, nodes]
    }
}