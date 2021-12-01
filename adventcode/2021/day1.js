const fs = require('fs')

try {
    const data = fs.readFileSync(__dirname + "/input1.txt", 'utf8').split("\r\n")
    let count = 0;

    for(let i = 0; i < data.length - 1; i++){
        let current = data[i] * 1
        let after = data[i + 1] * 1
        if(current < after){
            count++
        }
    }

    console.log("First part: " + count)
    count = 0
    let previous = data[0] * 1 + data[1] * 1 + data[2] * 1
    for(let i = 1; i < data.length - 2; i++){
        let current = data[i] * 1 + data[i + 1] * 1+ data[i + 2] * 1
        if(previous < current) count++
        previous = current
    }

    console.log("Second part: " + count)
} catch (err) {
    console.error(err)
}