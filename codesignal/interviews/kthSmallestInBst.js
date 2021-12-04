//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t, k) {
    let result = []
    
    const inorder = function(t, k, result){
        if(result.length == k){
            return ;
        }else if(t !== null){
            inorder(t.left, k, result)
            result.push(t.value)
            inorder(t.right, k, result)
        }
        return result
    }
    
    result = inorder(t, k, result)
    return result[k - 1]
}
