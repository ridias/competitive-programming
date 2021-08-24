//https://binarysearch.com/problems/Leaf-Equivalent-Trees

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
        let leaves0 = []
        let leaves1 = []

        let stack = [root0]

        leaves0 = this.getLeavesFromTreeFromLeftToRight(root0);
        leaves1 = this.getLeavesFromTreeFromLeftToRight(root1)

        if(leaves0.length != leaves1.length) return false
        for(let i = 0; i < leaves0.length; i++){
            if(leaves0[i] != leaves1[i]) return false
        }

        return true
    }

    getLeavesFromTreeFromLeftToRight(root){
        let stack = [root]
        let leaves = []
        while(stack.length > 0){
            let node = stack.pop()
            if(node.left == null && node.right == null) leaves.push(node.val)
            
            if(node.right != null) stack.push(node.right)
            if(node.left != null) stack.push(node.left)
        }

        return leaves
    }
}