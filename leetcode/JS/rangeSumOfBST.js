// https://leetcode.com/problems/range-sum-of-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
 var rangeSumBST = function(root, L, R) {
    if(root === null){ return 0 }
    let queue = [root]
    let total = 0
    
    while(queue.length > 0){
        let node = queue.pop()
        if(node === null){ continue }
        if(node.val >= L && node.val <= R){ total += node.val }
        queue.push(node.left)
        queue.push(node.right)
    }
    return total
};