const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let megabytes = 0
let limit = 0
let arrayMegabytesUsed = []

function tarifa(megabytes, megabytesUsed){
    let result = megabytes;
    for(let i = 0; i < megabytesUsed.length; i++){
        result += megabytes;
        result -= megabytesUsed[i]
    }
    return result;
}


rl.on('line', (line) => {
    lineCount++
    if(lineCount === 1){
        megabytes = parseInt(line, 10)
    }else if(lineCount === 2){
        limit = parseInt(line, 10)
    }else if(limit > 1){
        arrayMegabytesUsed.push(parseInt(line, 10))
        limit--;
    }else{
        arrayMegabytesUsed.push(parseInt(line, 10))
        console.log(tarifa(megabytes, arrayMegabytesUsed))
        rl.close()
    }
});