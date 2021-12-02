function follow(instructions: string): [number, number] {
    let x = 0
    let y = 0
    for(let i = 0; i < instructions.length; i++){
        if(instructions[i] == "f") y++
        else if(instructions[i] == "b") y--
        else if(instructions[i] == "l") x--
        else x++
    }
    return [x, y];
}