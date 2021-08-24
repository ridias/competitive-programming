//https://binarysearch.com/problems/Largest-Root-to-Leaf-Sum

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
        if(root == null) return 0
        let queue = [root]
        let max = root.val
        while(queue.length > 0){

            let node = queue.shift()
            if(node.val > max) max = node.val

            if(node.left != null){
                node.left.val += node.val
                queue.push(node.left)
            }

            if(node.right != null){
                node.right.val += node.val
                queue.push(node.right)
            }
        }

        return max
    }
}