//https://binarysearch.com/problems/Left-Side-View-of-a-Tree

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
        let queue = [root]

        while(queue.length > 0){
            let nextNodes = []
            let firstNode = queue.shift()
            result.push(firstNode.val)
            if(firstNode.left != null) nextNodes.push(firstNode.left)
            if(firstNode.right != null) nextNodes.push(firstNode.right)

            while(queue.length > 0){
                let node = queue.shift()
                if(node.left != null) nextNodes.push(node.left)
                if(node.right != null) nextNodes.push(node.right)
            }

            queue = [...nextNodes]
        }

        return result
    }
}