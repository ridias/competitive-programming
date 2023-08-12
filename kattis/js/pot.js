const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let limit = 0
let values = []

function pot(values){
    let result = 0
    for(let i = 0; i < values.length; i++){
        let value = Math.floor(values[i] / 10)
        let pot = values[i] % 10
        result += value ** pot
    }

    return result;
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
        console.log(pot(values))
        rl.close()
    }
});