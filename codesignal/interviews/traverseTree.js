//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t) {
    let result = []
    let queue = []
    if(t !== null){
        queue.push(t)
        while(queue.length > 0){
            let actualNode = queue.shift()
            if(actualNode.left !== null){ 
                queue.push(actualNode.left) 
            }
            if(actualNode.right !== null){
                queue.push(actualNode.right)
            }
            result.push(actualNode.value)
        }
    }
    return result
}
