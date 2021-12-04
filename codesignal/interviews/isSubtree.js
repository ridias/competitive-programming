//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t1, t2) {
    
    let queue = [t1]
    let head = t2
    if(t2 == null){ return true }
    if(t1 == null && t2 == null){ return true }
    if(t1 == null && t2 !== null){ return false }
    
    while(queue.length > 0){
        
        t1 = queue.shift()
        if(t1.value == head.value){
            head = t2
            if(isItSubtree(t1, head)){ return true }
        }
        
        if(t1.left !== null){
            queue.push(t1.left)
        }
        if(t1.right !== null){
            queue.push(t1.right)
        }
    }
    
    return false
}

function isItSubtree(t1, t2){
    
    let queue = [t1, t2]
    while(queue.length > 0){
        t1 = queue.shift()
        t2 = queue.shift()
        if(t1 !== null && t2 == null){ return false }
        if(t1 == null && t2 !== null){ return false }
        if(t1.value != t2.value){ return false }
        if((t1.left !== null && t2.left == null) || (t1.left == null && t2.left !== null)){return false}
        if((t1.right !== null && t2.right == null) || (t1.right == null && t2.right !== null)){ return false }
        
        if(t1.left !== null){ queue.push(t1.left) }
        if(t2.left !== null){ queue.push(t2.left) }
        if(t1.right !== null){ queue.push(t1.right) }
        if(t2.right !== null){ queue.push(t2.right) }
    }
    if(queue.length > 0){ return false }
    return true
}
