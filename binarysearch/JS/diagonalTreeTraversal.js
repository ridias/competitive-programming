// https://binarysearch.com/problems/Diagonal-Tree-Traversal

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
        if(root == null) return []
        let map = {}

        let queue = [[root, 1, 1]]

        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0]
            let row = cell[1]
            let col = cell[2]

            if(map[(row - col)] == undefined){
                map[(row - col)] = node.val
            }else{
                map[(row-col)] += node.val
            }

            if(node.left != null) queue.push([node.left, row + 1, col - 1])
            if(node.right != null) queue.push([node.right, row + 1, col + 1])
        }

        let keys = Object.keys(map)
        let result = []

        for(let i = 0; i < keys.length; i++){
            result.push(map[keys[i]])
        }

        return result
    }
}
