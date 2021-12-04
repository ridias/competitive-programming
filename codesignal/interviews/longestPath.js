function solution(fileSystem) {
    fileSystem = fileSystem.split("\f")
    if(!/[.]+/.test(fileSystem)){ return 0 }
    if(fileSystem.length == 1){ return fileSystem[0].length }
    let stack = [fileSystem[0]]
    let levels = [0]
    let maxLength = fileSystem[0].length + 1
    for(let i = 1; i < fileSystem.length; i++){
        let level = getLevel(fileSystem[i])
        while(level <= levels[levels.length - 1]){ 
            levels.pop()
            stack.pop()
        }
        
        stack.push(fileSystem[i].substring(level, fileSystem[i].length))
        levels.push(level)
        let aux = stack.join("/")
        if(maxLength < aux.length && /[.]+/.test(aux)){
            maxLength = aux.length
        }
    }
    return maxLength
}

function getLevel(value){
    let level = 0
    for(let i = 0; i < value.length; i++){
        if(value[i] == "\t"){ level++ }
    }
    return level
}
