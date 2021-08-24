//https://binarysearch.com/problems/Twin-Trees

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
    solve(root0, root1) {
        let queue = [root0]
        let queue2 = [root1]

        while(queue.length > 0 && queue2.length > 0){
            let node = queue.shift()
            let node2 = queue2.shift()

            if(node == null && node2 != null) return false
            if(node != null && node2 == null) return false

            if(node != null && node2 != null){
                if(node.val != node2.val) return false

                queue.push(node.left)
                queue.push(node.right)
                queue2.push(node2.left)
                queue2.push(node2.right) 
            }
        }

        if(queue.length > 0) return false
        if(queue2.length > 0) return false
        return true
    }
}