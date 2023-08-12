const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let values = []

function fizzbuzz(values){
    let fizz = values[0];
    let buzz = values[1];

    for(let i = 1; i <= values[2]; i++){
        let responseToDisplay = "";
        
        if(i % fizz == 0){
            responseToDisplay += "Fizz"
        }

        if(i % buzz == 0){
            responseToDisplay += "Buzz"
        }

        if(responseToDisplay.length > 0){
            console.log(responseToDisplay)
        }else{
            console.log(i)
        }
    }
}


rl.on('line', (line) => {
    lineCount++
    values = line.split(' ');
    fizzbuzz(values)
    rl.close()
});