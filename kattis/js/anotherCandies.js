const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let limit = 0;
let values = []



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