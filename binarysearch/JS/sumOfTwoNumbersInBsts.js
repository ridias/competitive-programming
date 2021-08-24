//https://binarysearch.com/problems/Sum-of-Two-Numbers-in-BSTs

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
    solve(a, b, target) {
        if(a == null || b == null) return false

        let queue = [a]
        while(queue.length > 0){
            let node = queue.shift()
            let tree = b
            let valueToSearch = target - node.val

            while(tree != null){
                if(tree.val == valueToSearch){
                     return true
                }else if(valueToSearch < tree.val){
                    tree = tree.left
                }else{
                    tree = tree.right
                }
            }

            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        return false
    }
}