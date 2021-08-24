//https://binarysearch.com/problems/Longest-Tree-Sum-Path-From-Root-to-Leaf

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
        let max = root.val
        let queue = [[root, 1]]
        let maxLvl = 1
        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0]
            let lvl = cell[1]
            if(max < node.val && maxLvl == lvl){
                max = node.val
            }else if(maxLvl < lvl){
                maxLvl = lvl
                max = node.val
            }

            if(node.left != null){
                node.left.val += node.val
                queue.push([node.left, lvl + 1])
            }

            if(node.right != null){
                node.right.val += node.val
                queue.push([node.right, lvl + 1])
            }
        }

        return max
    }
}