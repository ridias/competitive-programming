const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let x = 0
let y = 0

function getQuadrant(x, y){
    if(x > 0 && y > 0) return(1);
    if(x > 0 && y < 0) return(4);
    if(x < 0 && y > 0) return(2);
    return(3);
}


rl.on('line', (line) => {
    lineCount++

    if(lineCount === 1){
        x = parseInt(line, 10)
    }else{
        y = parseInt(line, 10)
        console.log(getQuadrant(x, y))
        rl.close();
    }
});