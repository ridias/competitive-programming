const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let value = "";

function conundrum(value){
    if(value.length == 0) return 0;
    let count = 0;

    for(let i = 0; i < value.length; i++){
        if(i % 3 == 0 && value[i] != "P") count++
        else if(i % 3 == 1 && value[i] != "E") count++
        else if(i % 3 == 2 && value[i] != "R") count++
    }

    return count;

}


rl.on('line', (line) => {
    lineCount++
    value = line;
    console.log(conundrum(value))
    rl.close()
});