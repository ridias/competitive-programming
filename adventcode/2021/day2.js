const fs = require('fs')

try {
    const data = fs.readFileSync(__dirname + "/input1.txt", 'utf8').split("\r\n")
    
    let forward = 0
    let depth = 0

    for(let i = 0; i < data.length; i++){
        let coord = data[i].split(" ")
        let direction = coord[0]
        let num = coord[1]

        if(direction == "down"){
            depth += num * 1
        }else if(direction == "up"){
            depth -= num * 1
        }else{
            forward += num * 1
        }
    }

    console.log("First part: " + (forward * depth))

    forward = 0
    depth = 0
    let aim = 0

    for(let i = 0; i < data.length; i++){
        let coord = data[i].split(" ")
        let direction = coord[0]
        let num = coord[1]

        if(direction == "down"){
            aim += num * 1
        }else if(direction == "up"){
            aim -= num * 1
        }else{
            forward += num * 1
            depth += aim * num
        }
    }
    console.log("Second part: " + (forward * depth))
} catch (err) {
    console.error(err)
}