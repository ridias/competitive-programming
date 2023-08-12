const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let firstAh = ""
let secondAh = ""

function aaaah(first, second){
    return first.length >= second.length ? "go" : "no";
}


rl.on('line', (line) => {
    lineCount++
    if(lineCount === 1){
        firstAh = line;
    }else{
        secondAh = line
        console.log(aaaah(firstAh, secondAh))
        rl.close()
    }
});