// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let paths = []
    
    var dfs = function(tree, target, res){
        if(tree == null) return;
        if(tree.val == target){
            res = res + tree.val
            paths.push(res)
            return ;
        }
        
        res += tree.val + ";"
        dfs(tree.left, target, res)
        dfs(tree.right, target, res)
    }
    
    dfs(root, p.val, "")
    dfs(root, q.val, "")
    
    let hashSet = new Set()
    let path = paths[0].split(';')
    let path2 = paths[1].split(';')
    for(let i = 0; i < path.length; i++){
        hashSet.add(path[i])
    }
    
    let target = -1
    for(let i = path2.length - 1; i >= 0; i--){
        if(hashSet.has(path2[i])){
            target = path2[i]
            break
        }
    }
    
    let queue = [root]
    while(root != null){
        let node = queue.shift()
        if(node.val == target) return node
        
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    return null
    
};