//https://binarysearch.com/problems/Tree-Traversal

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
    solve(root, moves) {
        if(root == null) return root
        let queue = []
        for(let i = moves.length - 1; i >= 0; i--){
            if(moves[i] == "UP"){
                let index = i
                while((moves[index] == "UP" || moves[index] == "") && index >= 0) index--
                if(index >= 0) moves[index] = ""

            }else if(moves[i] != "UP" && moves[i].length > 0){
                queue.push(moves[i])
            }
        }

        while(queue.length > 0){
            let dir = queue.pop()
            if(dir == "RIGHT"){
                root = root.right
            }else{
                root = root.left
            }
        }

        return root.val
    }
}