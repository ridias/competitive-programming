//https://binarysearch.com/problems/Lexicographically-Smallest-Leaf-to-Root-Path

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
        if(root == null) return "";
        let result = ""
        let queue = [[root, ""]]

        while(queue.length > 0){
            let cell = queue.shift()
            let node = cell[0];
            let val = cell[1];

            val = node.val + val

            if(node.left == null && node.right == null){
                if(result == ""){
                    result = val
                }else if(val.localeCompare(result) < 0){
                    result = val
                }
            }else{
                if(node.left != null) queue.push([node.left, val])
                if(node.right != null) queue.push([node.right, val])
            }
        }

        return result.split('').map(x => parseInt(x));
    }
}