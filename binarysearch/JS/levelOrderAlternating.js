//https://binarysearch.com/problems/Level-Order-Alternating

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
        let result = []
        if(root == null) return result

        let queue = [[root, 1]]
        let previousLvl = 1

        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0]
            let lvl = cell[1]
            result.push(node.val)
            if(lvl % 2 == 0){
                if(node.right != null) queue.push([node.right, lvl + 1])
                if(node.left != null) queue.push([node.left, lvl + 1])
            }else{
                if(node.left != null) queue.push([node.left, lvl + 1])
                if(node.right != null) queue.push([node.right, lvl + 1])
            }
        }

        return result
    }
}