//https://binarysearch.com/problems/ZigZag-Path

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
        let max = 1
        let queue = [[root, 1, "c"]]

        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0]
            let count = cell[1]
            let dir = cell[2]

            if(count > max) max = count

            if(dir == "c" && node.left != null){
                queue.push([node.left, count + 1, "l"])
            }
            
            if(dir == "c" && node.right != null){
                queue.push([node.right, count + 1, "r"])
            }

            if(dir == "r" && node.right != null) queue.push([node.right, 2, "r"])
            if(dir == "r" && node.left != null) queue.push([node.left, count + 1, "l"])
            if(dir == "l" && node.right != null) queue.push([node.right, count + 1, "r"])
            if(dir == "l" && node.left != null) queue.push([node.left, 2, "l"])
        }

        return max
    }
}