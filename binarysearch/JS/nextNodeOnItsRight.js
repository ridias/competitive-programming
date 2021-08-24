//https://binarysearch.com/problems/Next-Node-on-Its-Right

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
    solve(tree, target) {
        if(tree == null) return null
        if(tree.val == target) return null
        
        let queue = [[tree, 1]]


        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0]
            let lvl = cell[1]

            if(node.val == target){
                let nextNode = queue.shift()
                if(!nextNode) return null
                if(nextNode[1] == lvl){
                    return nextNode[0]
                }else{
                    return null
                }
            }

            if(node.left != null) queue.push([node.left, lvl + 1])
            if(node.right != null) queue.push([node.right, lvl + 1])
        }


        return null 
    }
}