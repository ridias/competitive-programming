const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let limit = 0;
let values = []

function lastDigit(values){
    for(let i = 0; i < values.length; i++){
        if(values[i] == 0) console.log(1)
        else if(values[i] == 1) console.log(1)
        else if(values[i] == 2) console.log(2)
        else if(values[i] == 3) console.log(6)
        else if(values[i] == 4) console.log(4)
        else console.log(0)
    }
}


rl.on('line', (line) => {
    lineCount++
    if(lineCount === 1){
        limit = parseInt(line, 10)
    }else if(limit > 1){
        values.push(parseInt(line, 10))
        limit--;
    }else{
        values.push(parseInt(line, 10))
        console.log(lastDigit(values))
        rl.close()
    }
});