// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    var result = (bfs(root1)).concat(bfs(root2))
    result.sort((a, b) => a - b)
    return result
};

function bfs(root){
    let arr = []
    if(root == null) return arr
    let queue = [root]
    
    while(queue.length > 0){
        let node = queue.shift();
        arr.push(node.val)
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    
    return arr;

}

