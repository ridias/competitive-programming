// https://leetcode.com/problems/subtree-of-another-tree/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    
    let queue = [root]
    let found = false
    while(queue.length > 0){
        found = true
        let node = queue.shift()
        if(node.val == subRoot.val){
            
            let queueSub = [subRoot]
            let queueMain = [node]
            
            while(queueSub.length > 0 && queueMain.length > 0){
                let nodeSub = queueSub.shift()
                let nodeMain = queueMain.shift()
                
                if(nodeSub == null && nodeMain == null){
                    continue 
                }
                
                if(nodeSub == null && nodeMain != null){
                    found = false
                    break;
                }else if(nodeSub != null && nodeMain == null){
                    found = false
                    break;
                }else if(nodeSub.val != nodeMain.val){
                    found = false
                    break;
                }
                
                queueSub.push(nodeSub.left)
                queueSub.push(nodeSub.right)
                queueMain.push(nodeMain.left)
                queueMain.push(nodeMain.right)
            }
            
            if(found && queueSub.length == 0 && queueMain.length == 0){
                return true
            }
        }
        
        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    
    return false
};