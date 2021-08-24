// https://leetcode.com/problems/diameter-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    let countNodes = 0

    const dfs = (node) => {
        if(node == null) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)
        countNodes = Math.max(left + right + 1, countNodes)
        return Math.max(left, right) + 1
    }

    dfs(root)

    return countNodes - 1 < 0 ? 0 : countNodes - 1
};