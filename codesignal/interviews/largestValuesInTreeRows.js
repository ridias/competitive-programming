//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t) {
    let result = []
    let levels = {}
    if(t !== null){
        t.level = 0
        result.push(t.value)
        let queue = [t]
        while(queue.length > 0){
            let node = queue.shift()
            if(levels[node.level] === undefined){
                levels[node.level] = node.value
            }else if(levels[node.level] < node.value){
                levels[node.level] = node.value
            }
            
            if(node.left !== null){ 
                node.left.level = node.level + 1
                queue.push(node.left)
            }
            
            if(node.right !== null){
                node.right.level = node.level + 1
                queue.push(node.right)
            }
        }
        
        let keys = Object.keys(levels)
        for(let i = 1; i < keys.length; i++){
            result.push(levels[keys[i]])
        }
        
    }
    
    return result
}
