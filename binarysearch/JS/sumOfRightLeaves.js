//https://binarysearch.com/problems/Sum-of-Right-Leaves

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
        let total = 0
        let queue = [[root, "center"]]

        while(queue.length > 0){
            
            let cell = queue.shift()
            let node = cell[0]
            let direction = cell[1]

            if(node == null) continue

            if(direction == "right" && node.left == null && node.right == null){
                total += node.val
            }

            if(node.left != null) queue.push([node.left, "left"])
            if(node.right != null) queue.push([node.right, "right"])
        }

        return total
    }
}