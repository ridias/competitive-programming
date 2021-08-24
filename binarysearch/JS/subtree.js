//https://binarysearch.com/problems/Subtree

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
    solve(root, target) {
        if(target == null) return true
        if(root == null) return false
        
        let queue = [root]

        while(queue.length > 0){
            let node = queue.shift()
            if(node.val == target.val){
                let aux = node
                let aux2 = target

                if(this.isTreeEqual(aux, aux2)){
                    return true
                }
            }

            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }

        return false;
    }

    isTreeEqual(root, root2){
        if(root == null && root2 == null) return true
        if(root != null && root2 == null) return false
        if(root == null && root2 != null) return false

        let queue = [root]
        let queue2 = [root2]

        while(queue.length > 0){
            let node = queue.shift()
            let node2 = queue2.shift()
            if(node != null && node2 == null) return false
            if(node == null && node2 != null) return false

            if(node.val != node2.val) return false
            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
            if(node2.left != null) queue2.push(node2.left)
            if(node2.right != null) queue2.push(node2.right)
        }

        if(queue.length > 0 || queue2.length > 0) return false

        return true
    }
}