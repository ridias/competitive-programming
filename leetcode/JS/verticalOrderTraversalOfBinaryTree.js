// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/

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
 * @return {number[][]}
 */
 var verticalTraversal = function(root) {
    let map = {}
    let queue = [[root, 0, 0]]
    
    while(queue.length > 0){
        let cell = queue.shift()
        let node = cell[0]
        let col = cell[1]
        let row = cell[2]
        
        map[col + ";" + row] == undefined ? map[col + ";" + row] = [node.val] : map[col + ";" + row].push(node.val)
        
        if(node.left != null) queue.push([node.left, col - 1, row + 1])
        if(node.right != null) queue.push([node.right, col + 1, row + 1])
    }
    
    let mapResults = []
    let keys = Object.keys(map)
    
    for(let i = 0; i < keys.length; i++){
        let keySplitted = keys[i].split(';').map(x => x * 1)
        mapResults.push([map[keys[i]].sort((a, b) => a - b), keySplitted[1], keySplitted[0]])
    }

    mapResults.sort((a, b) => {
        if(a[2] == b[2]){
            return a[1] - b[1]
        }else{
            return a[2] - b[2]
        }
    })
    
    let result = []
    let previousCol = mapResults[0][2]
    let row = []
    for(let i = 0; i < mapResults.length; i++){
        if(previousCol == mapResults[i][2]){
            for(let j = 0; j < mapResults[i][0].length; j++){
                row.push(mapResults[i][0][j])
            }
        }else{
            result.push(row)
            previousCol = mapResults[i][2]
            row = [...mapResults[i][0]]
        }
    }
    
    if(row.length > 0) result.push(row)
    return result
};