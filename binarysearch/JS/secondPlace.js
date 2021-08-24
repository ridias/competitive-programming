//https://binarysearch.com/problems/Second-Place

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
        let queue = [[root, 0]]
        let lvls = []
        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0]
            let lvl = cell[1]

            if(node.left == null && node.right == null){
                if(lvls.length == 0){
                    lvls.push(lvl)
                }else if(lvls[lvls.length - 1] != lvl){
                    lvls.push(lvl)
                }
            }

            if(node.left != null) queue.push([node.left, lvl + 1])
            if(node.right != null) queue.push([node.right, lvl + 1])
        }

        return lvls[lvls.length - 2]
    }
}