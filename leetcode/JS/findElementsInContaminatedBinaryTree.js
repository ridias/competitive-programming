// https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/

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
 */
 var FindElements = function(root) {
    this.arr = []
    
    let queue = [[root, 0]]
    
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0]
        let val = cell[1]
        
        this.arr.push(val)
        
        if(node.left != null) queue.push([node.left, val * 2 + 1])
        if(node.right != null) queue.push([node.right, val * 2 + 2])
    }
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    let left = 0
    let right = this.arr.length - 1
    let middle = -1
    
    while(left <= right){
        middle = Math.floor((right + left) / 2)
        if(this.arr[middle] == target){
            return true
        }else if(this.arr[middle] < target){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    
    if(this.arr[middle] == target) return true
    return false
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */