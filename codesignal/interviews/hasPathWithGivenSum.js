//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t, s) {
    let path = 0
    let hash = new Set()
    if(t === null){ return false }
    var paths = function(actualNode, path, hash){
        if(actualNode === null){
            return ;
        }else if(actualNode.left === null && actualNode.right === null){
            path += actualNode.value
        }else{
            paths(actualNode.left, path + actualNode.value, hash)
            paths(actualNode.right, path + actualNode.value, hash)
        }
        
        if(path === s){ return true } else { return false }
    }
    
    return paths(t, path, hash)
    //if(hash.has(s)){ return true } else { return false}
}
