/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
// https://leetcode.com/problems/linked-list-in-binary-tree/ 

*/
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSubPath = function(head, root) {
    let result = []
    recursion(root, "", result)
    let onlyPath = "";

    while(head != null){
        onlyPath += head.val
        head = head.next
    }

    for(let i = 0; i < result.length; i++){
        if(new RegExp(onlyPath).test(result[i])){
            return true
        }
    }

    return false
};

var recursion = function(root, str, result){
    if(root == null){
        return;
    }

    if(root.left == null && root.right == null){
        result.push(str + root.val)
        return
    }

    recursion(root.left, str + root.val, result)
    recursion(root.right, str + root.val, result)
}