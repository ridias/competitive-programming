//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t) {
    if(t === null){
        return true
    }else if(t.left === null && t.right === null){
        return true
    }else if(t.left === null || t.right === null){
        return false
    }else{
        let leftBranch = t.left
        let rightBranch = t.right
        leftBranch = bfsDirection(leftBranch, "left").join("")
        rightBranch = bfsDirection(rightBranch, "right").join("")
        return leftBranch === rightBranch ? true : false
    }
}

function bfsDirection(actualNode, direction){
    let queue = [actualNode]
    let values = [actualNode.value]
    let left = direction === "left" ? true : false
    while(queue.length > 0){
        let node = queue.shift()
        if(left){
            if(node.left !== null){ queue.push(node.left); values.push(node.left.value) } else { values.push(0)}
            if(node.right !== null){ queue.push(node.right); values.push(node.right.value)} else { values.push(0)}
        }else{
            if(node.right !== null){ queue.push(node.right); values.push(node.right.value) } else { values.push(0)}
            if(node.left !== null){ queue.push(node.left); values.push(node.left.value) } else { values.push(0)}
        }
    }
    return values
}
