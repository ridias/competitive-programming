//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t) {
    let result = [0]
    
    const paths = function(node, path, memo){
        if(node === null){
            return ;
        }else if(node.left === null && node.right === null){
            path += node.value
            memo[0] += parseFloat(path)
        }else{
            paths(node.left, path + node.value, memo)
            paths(node.right, path + node.value, memo)
        }
        return memo
    }
    
    result = paths(t, "", result)
    return result[0]
}
