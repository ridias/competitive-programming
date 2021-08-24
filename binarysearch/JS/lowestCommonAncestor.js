//https://binarysearch.com/problems/Lowest-Common-Ancestor

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
    

    solve(root, a, b) {
        let stackNodesForA = []
        let stackNodesForB = []

        stackNodesForA = this.dfs(root, a, "").split(" ").filter(x => x.length > 0)
        stackNodesForB = this.dfs(root, b, "").split(" ").filter(x => x.length > 0)

        while(stackNodesForA.length > stackNodesForB.length){
            stackNodesForA.pop()
        }

        while(stackNodesForB.length > stackNodesForA.length){
            stackNodesForB.pop()
        }

        for(let i = stackNodesForB.length - 1; i >= 0; i--){
            if(stackNodesForB[i] == stackNodesForA[i]){
                return parseInt(stackNodesForB[i])
            }
        }

        return -1  
    }

    dfs(root, target, path){
        if(root == null){
            return ""
        }

        path += " " + root.val

        if(target == root.val){
            return path;
        }

        return this.dfs(root.left, target, path) + this.dfs(root.right, target, path)
    }
}