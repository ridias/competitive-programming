// https://binarysearch.com/problems/Binary-Tree-Width

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

        let width = 1
        let queue = [[root, 1, 1]]
        let previous = 1
        let first = 1
        let last = 1

        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0]
            let lvl = cell[1]
            let count = cell[2]

            if(lvl != previous){
                width = Math.max(width, last - first + 1)
                first = count
                last = count
                previous = lvl
            }else{
                last = count
            }

            if(node.left != null) queue.push([node.left, lvl + 1, count * 2])
            if(node.right != null) queue.push([node.right, lvl + 1, count * 2 + 1])
        }

        width = Math.max(width, last - first + 1)

        return width

    }
}