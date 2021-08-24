//https://binarysearch.com/problems/Merging-Binary-Trees

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
    solve(node0, node1) {
        if(node0 == null && node1 == null) return null
        if(node0 == null && node1 != null) return node1
        if(node0 != null && node1 == null) return node0
        let tree = node0

        let queue0 = [tree]
        let queue1 = [node1]

        while(queue1.length > 0){
            let firstNode = queue0.shift()
            let secondNode = queue1.shift()

            if(firstNode.left != null && secondNode.left == null){
                secondNode.left = new Tree(0, null, null)
            }

            if(firstNode.left == null && secondNode.left != null){
                firstNode.left = new Tree(0, null, null)
            }

            if(firstNode.right != null && secondNode.right == null){
                secondNode.right = new Tree(0, null, null)
            }

            if(firstNode.right == null && secondNode.right != null){
                firstNode.right = new Tree(0, null, null)
            }

            firstNode.val += secondNode.val

            if(firstNode.left != null) queue0.push(firstNode.left)
            if(firstNode.right != null) queue0.push(firstNode.right)
            if(secondNode.left != null) queue1.push(secondNode.left)
            if(secondNode.right != null) queue1.push(secondNode.right)
        }

        return node0

    }
}