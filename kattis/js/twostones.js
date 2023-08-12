const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let num = parseInt(line);
    let response = num % 2 == 0 ? "Bob" : "Alice" 
    console.log(response)
});