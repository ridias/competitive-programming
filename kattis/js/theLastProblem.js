const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let values = []

function theLastProblem(name){
    return "Thank you, " + name + ", and farewell!"
}


rl.on('line', (line) => {
    lineCount++
    name = line;
    console.log(theLastProblem(line))
    rl.close()
});