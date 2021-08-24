// https://leetcode.com/problems/find-mode-in-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var findMode = function(root) {
    let max = 0
    let mostFrequentValues = []
    
    let map = {}
    let queue = [root]
    
    while(queue.length > 0){
        let node = queue.shift()
        map[node.val] == undefined ? map[node.val] = 1 : map[node.val] += 1
        
        let frq = map[node.val]
        if(frq > max){
            max = frq
            mostFrequentValues = [node.val]
        }else if(frq == max){
            mostFrequentValues.push(node.val)
        }
        
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    
    return mostFrequentValues
};