const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let values = []

function filip(values){
    let numX = parseInt(values[0].toString().split('').reverse().join(""))
    let numY = parseInt(values[1].toString().split('').reverse().join(""))
    return numX > numY ? numX : numY;
}


rl.on('line', (line) => {
    lineCount++
    values = line.split(' ');
    console.log(filip(values))
    rl.close()
});