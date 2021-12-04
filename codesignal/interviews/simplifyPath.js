function solution(path) {
    path = path.replace("//", "/")
    path = path.replace("/./", "/")
    let stack = []
    let result = "/"
    path = path.split("/")
    for(let i = 0; i < path.length; i++){
        if(path[i].length == 0 || path[i] == "."){ continue }
        if(path[i] == ".."){
            stack.pop()
        }else{
            stack.push(path[i])
        }
    }
    
    return result + stack.join("/")
}
