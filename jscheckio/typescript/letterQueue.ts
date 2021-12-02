function letterQueue(commands: string[]): string {
    let queue = []
    
    for(let i = 0; i < commands.length; i++){
        if(commands[i].length == 3){
            queue.shift()   
        }else{
            let character = commands[i][commands[i].length - 1]
            queue.push(character)
        }
    }
    
    return queue.join("");
}