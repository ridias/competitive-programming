const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tripleTexting(value){
    let lengthResult = value.length / 3
    let firstWord = value.substring(0, lengthResult)
    let secondWord = value.substring(lengthResult, lengthResult * 2)
    let thirdWord = value.substring(lengthResult * 2, value.length)
    return firstWord == secondWord || firstWord == thirdWord ? firstWord : secondWord 
}


rl.on('line', (line) => {
    value = line;
    console.log(tripleTexting(value))
    rl.close()
});